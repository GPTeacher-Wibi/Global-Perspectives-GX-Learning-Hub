import { useState, useEffect, useCallback } from 'react';
import { AlertCircle } from 'lucide-react';
import { UNITS_DATA } from './data/units';
import { storageService } from './services/storageService';
import { LearningProgress } from './types/progress';
import { Navbar } from './components/navigation/Navbar';
import { Button } from './components/common/Button';
import { HomeView } from './views/HomeView';
import { UnitHubView } from './views/UnitHubView';
import { LearnView } from './views/LearnView';
import { PracticeView } from './views/PracticeView';
import { GamesView } from './views/GamesView';
import { ProgressView } from './views/ProgressView';
import { AboutView } from './views/AboutView';

export default function App() {
  // Navigation Route State (supporting lightweight hash routing)
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '');
    return hash || '/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);
  const [isClassroomMode, setIsClassroomMode] = useState<boolean>(() =>
    storageService.getClassroomMode()
  );
  const [nickname, setNickname] = useState<string>(() =>
    storageService.getStudentNickname()
  );
  const [progress, setProgress] = useState<LearningProgress>(() =>
    storageService.getProgress()
  );

  // Synchronize progress reactively whenever storageService updates (games, capstones, quizzes)
  useEffect(() => {
    const unsubscribe = storageService.subscribe((updatedProgress) => {
      setProgress(updatedProgress);
    });

    const handleStorageEvent = (e: StorageEvent) => {
      if (!e.key || e.key === 'gphub_progress_v1') {
        setProgress(storageService.getProgress());
      }
    };

    window.addEventListener('storage', handleStorageEvent);
    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  // Sync hash changes (Back / Forward browser buttons) and guarantee fresh progress state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentRoute(hash || '/');
      setProgress(storageService.getProgress());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((route: string) => {
    window.location.hash = route === '/' ? '' : route;
    setCurrentRoute(route);
    setProgress(storageService.getProgress());
    window.scrollTo(0, 0);
  }, []);

  // Toggle Classroom Projection Mode
  const handleToggleClassroomMode = useCallback((enabled: boolean) => {
    setIsClassroomMode(enabled);
    storageService.saveClassroomMode(enabled);
  }, []);

  // Update Student Nickname
  const handleUpdateNickname = useCallback((newName: string) => {
    setNickname(newName);
    storageService.saveStudentNickname(newName);
  }, []);

  // Reset Progress
  const handleResetProgress = useCallback(() => {
    storageService.resetProgress();
    setProgress(storageService.getProgress());
  }, []);

  // Parse current route parameters
  // Routes:
  // '/'
  // '/unit/:id'
  // '/unit/:id/learn'
  // '/unit/:id/practice'
  // '/unit/:id/games'
  // '/progress'
  // '/about'
  const routeParts = currentRoute.split('/').filter(Boolean);
  const isUnitRoute = routeParts[0] === 'unit';
  const unitNumber = isUnitRoute ? parseInt(routeParts[1], 10) : undefined;
  const unitSubMode = isUnitRoute ? routeParts[2] : undefined;

  const currentUnit = unitNumber
    ? UNITS_DATA.find((u) => u.number === unitNumber)
    : undefined;

  // Slide completion handler
  const handleCompleteSlide = useCallback((slideNumber: number, isFinished: boolean) => {
    if (!unitNumber) return;
    const currentUnitProgress = progress.units[unitNumber];
    if (
      currentUnitProgress &&
      currentUnitProgress.learn.currentSlide === slideNumber &&
      (currentUnitProgress.learn.completed || !isFinished)
    ) {
      return;
    }
    storageService.updateSlideProgress(unitNumber, slideNumber, isFinished);
    setProgress(storageService.getProgress());
  }, [unitNumber, progress.units]);

  // Practice completion handler
  const handleCompletePractice = useCallback((score: number, total: number) => {
    if (!unitNumber) return;
    const accuracy = Math.round((score / total) * 100);
    storageService.savePracticeScore(unitNumber, accuracy);
    setProgress(storageService.getProgress());
  }, [unitNumber]);

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-100 text-slate-900 transition-colors duration-200 ${
        isClassroomMode ? 'text-lg leading-relaxed selection:bg-amber-300 selection:text-slate-950' : 'text-base'
      }`}
    >
      {/* Universal Top Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        currentUnitNumber={unitNumber}
        onNavigate={navigate}
        isClassroomMode={isClassroomMode}
        onToggleClassroomMode={handleToggleClassroomMode}
        nickname={nickname}
        onUpdateNickname={handleUpdateNickname}
      />

      {/* Main App Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Route 1: Home View */}
        {currentRoute === '/' && (
          <HomeView
            units={UNITS_DATA}
            progress={progress}
            onSelectUnit={(uNum) => navigate(`/unit/${uNum}`)}
            onNavigate={navigate}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route 2: Unit Hub View */}
        {isUnitRoute && !unitSubMode && currentUnit && (
          <UnitHubView
            unit={currentUnit}
            progress={progress.units[currentUnit.number]}
            onNavigateMode={(mode) => navigate(`/unit/${currentUnit.number}/${mode}`)}
            onBackToHome={() => navigate('/')}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route 3: Learn Mode (Presentation) */}
        {isUnitRoute && unitSubMode === 'learn' && currentUnit && (
          <LearnView
            unit={currentUnit}
            slides={currentUnit.slides || []}
            initialSlideNumber={progress.units[currentUnit.number]?.learn.currentSlide || 1}
            onExit={() => navigate(`/unit/${currentUnit.number}`)}
            onCompleteSlide={handleCompleteSlide}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route 4: Practice Mode */}
        {isUnitRoute && unitSubMode === 'practice' && currentUnit && (
          <PracticeView
            unit={currentUnit}
            onExit={() => navigate(`/unit/${currentUnit.number}`)}
            onCompletePractice={handleCompletePractice}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route 5: Games Mode */}
        {isUnitRoute && unitSubMode === 'games' && currentUnit && (
          <GamesView
            unit={currentUnit}
            onExit={() => navigate(`/unit/${currentUnit.number}`)}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route 6: Student Progress View */}
        {currentRoute === '/progress' && (
          <ProgressView
            progress={progress}
            nickname={nickname}
            onResetProgress={handleResetProgress}
            onSelectUnit={(uNum) => navigate(`/unit/${uNum}`)}
            onBackToHome={() => navigate('/')}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route 7: About & Curriculum Guide View */}
        {currentRoute === '/about' && (
          <AboutView
            onBackToHome={() => navigate('/')}
            isClassroomMode={isClassroomMode}
          />
        )}

        {/* Route Fallback: Unit Not Found or Invalid Route */}
        {((isUnitRoute && !currentUnit) ||
          (!['/', '/progress', '/about'].includes(currentRoute) && !isUnitRoute)) && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-8 sm:p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              {isUnitRoute ? 'Unit Not Found' : 'Page Not Found'}
            </h2>
            <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
              {isUnitRoute
                ? `Unit "${routeParts[1]}" does not exist in the Grade 10 Cambridge Global Perspectives curriculum. The course consists of Units 1 through 10.`
                : 'The page or view you requested does not exist.'}
            </p>
            <Button
              variant="primary"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              onClick={() => navigate('/')}
            >
              Return to All Units
            </Button>
          </div>
        )}
      </main>

      {/* Classroom-Friendly Footer */}
      <footer className="border-t border-slate-200/80 bg-white/80 py-6 mt-12 text-slate-500 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-800">
              Cambridge Global Perspectives & Research — Grade 10
            </p>
            <p className="text-slate-600 text-xs mt-0.5">
              Official Textbook Reference: 2nd Edition by Andri Wibisono • All 10 Units
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => navigate('/')}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/progress')}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Student Progress
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/about')}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Curriculum & Glossary
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
