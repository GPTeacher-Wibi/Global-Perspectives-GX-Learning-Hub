import React from 'react';
import { Unit } from '../types/curriculum';
import { UnitProgress } from '../types/progress';
import { UnitHeader } from '../components/unit/UnitHeader';
import { ModeCard } from '../components/unit/ModeCard';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import { Button } from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';

export interface UnitHubViewProps {
  unit: Unit;
  progress: UnitProgress;
  onNavigateMode: (mode: 'learn' | 'practice' | 'games') => void;
  onBackToHome: () => void;
  isClassroomMode: boolean;
}

export const UnitHubView: React.FC<UnitHubViewProps> = ({
  unit,
  progress,
  onNavigateMode,
  onBackToHome,
  isClassroomMode
}) => {
  return (
    <div className="w-full space-y-6">
      {/* Top Bar with Breadcrumbs and Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onBackToHome },
            { label: `Unit ${unit.number}: ${unit.title}` }
          ]}
          isClassroomMode={isClassroomMode}
        />
        <Button
          variant="outline"
          size="sm"
          isClassroomMode={isClassroomMode}
          onClick={onBackToHome}
          leftIcon={<ArrowLeft className="w-4 h-4 text-slate-500" />}
        >
          All Units
        </Button>
      </div>

      {/* Unit Academic Header */}
      <UnitHeader unit={unit} isClassroomMode={isClassroomMode} />

      {/* 3 Primary Modes Section */}
      <div className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h2
            className={`font-black text-slate-900 tracking-tight ${
              isClassroomMode ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}
          >
            Learning Pathways for Unit {unit.number}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            Progress through understanding the concepts, practicing your skills, and playing reinforcement games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEARN MODE */}
          <ModeCard
            mode="learn"
            title="Learn"
            subtitle="Presentation & Concepts"
            description="Explore native visual slides, core definitions, real-world case studies, and tap-to-reveal checkpoints."
            completed={progress.learn.completed}
            statusText={
              progress.learn.currentSlide > 1
                ? `Slide ${progress.learn.currentSlide} of ${progress.learn.totalSlides}`
                : 'Ready to Start'
            }
            onSelect={() => onNavigateMode('learn')}
            isClassroomMode={isClassroomMode}
          />

          {/* PRACTICE MODE */}
          <ModeCard
            mode="practice"
            title="Practice"
            subtitle="Comprehension & Checks"
            description="Test your understanding using Quick Check items, scenario questions, and instant textbook feedback."
            completed={progress.practice.completed}
            statusText={
              progress.practice.completed
                ? `Best Score: ${progress.practice.bestScore}%`
                : 'Ready to Practice'
            }
            onSelect={() => onNavigateMode('practice')}
            isClassroomMode={isClassroomMode}
          />

          {/* GAMES MODE */}
          <ModeCard
            mode="games"
            title="Games"
            subtitle="Interactive Reinforcement"
            description="Engage with unit-specific educational games designed for classroom flat panels and individual challenges."
            completed={progress.games.completedCount >= unit.plannedGamesCount}
            statusText={`${progress.games.completedCount} / ${unit.plannedGamesCount} Won`}
            onSelect={() => onNavigateMode('games')}
            isClassroomMode={isClassroomMode}
          />
        </div>
      </div>
    </div>
  );
};
