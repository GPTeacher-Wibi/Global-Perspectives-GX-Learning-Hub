import React from 'react';
import { Unit } from '../types/curriculum';
import { LearningProgress } from '../types/progress';
import { UnitCard } from '../components/unit/UnitCard';
import { Globe2, Sparkles, BookOpen, Layers, Trophy } from 'lucide-react';
import { Button } from '../components/common/Button';

export interface HomeViewProps {
  units: Unit[];
  progress: LearningProgress;
  onSelectUnit: (unitNumber: number) => void;
  onNavigate: (route: string) => void;
  isClassroomMode: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  units,
  progress,
  onSelectUnit,
  onNavigate,
  isClassroomMode
}) => {
  let completedUnits = 0;
  for (let i = 1; i <= 10; i++) {
    const u = progress.units[i];
    if (u?.learn.completed && u?.practice.completed) {
      completedUnits++;
    }
  }

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* Modern Educational Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white p-6 sm:p-10 shadow-xl overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-blue-100 font-bold text-xs uppercase tracking-wider mb-4 border border-white/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Cambridge Global Perspectives & Research • Grade 10</span>
          </div>

          <h1
            className={`font-black tracking-tight leading-tight mb-3 text-white ${
              isClassroomMode ? 'text-3xl sm:text-5xl md:text-6xl' : 'text-2xl sm:text-4xl md:text-5xl'
            }`}
          >
            Global Perspectives Learning Hub
          </h1>

          <p
            className={`text-blue-100 font-semibold mb-6 ${
              isClassroomMode ? 'text-xl sm:text-2xl text-amber-300' : 'text-base sm:text-lg text-blue-200'
            }`}
          >
            Learn. Practice. Think. Apply.
          </p>

          <p
            className={`text-blue-100/90 leading-relaxed mb-8 max-w-2xl ${
              isClassroomMode ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
            }`}
          >
            A dedicated curriculum platform designed for interactive flat panels, classroom
            debates, and individual inquiry. Explore 10 units of critical thinking, research
            methodologies, evidence analysis, and reasoned argumentation.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="secondary"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              onClick={() => onSelectUnit(1)}
              rightIcon={<BookOpen className="w-4 h-4" />}
            >
              Start Unit 1
            </Button>
            <Button
              variant="outline"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={() => onNavigate('/progress')}
              leftIcon={<Trophy className="w-4 h-4 text-amber-300" />}
            >
              Progress ({completedUnits} / 10 Units)
            </Button>
            <Button
              variant="ghost"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              className="text-white hover:bg-white/10"
              onClick={() => onNavigate('/about')}
            >
              Textbook & Curriculum Info
            </Button>
          </div>
        </div>
      </div>

      {/* Units Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Grade 10 Curriculum Sequence</span>
          </div>
          <h2
            className={`font-black text-slate-900 tracking-tight ${
              isClassroomMode ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
            }`}
          >
            All 10 Core Units
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-medium text-slate-500">
          Source: Official Grade X Textbook (2nd Edition, Andri Wibisono)
        </p>
      </div>

      {/* 10 Units Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((unit) => (
          <UnitCard
            key={unit.id}
            unit={unit}
            progress={progress.units[unit.number]}
            onSelect={onSelectUnit}
            isClassroomMode={isClassroomMode}
          />
        ))}
      </div>

      {/* Classroom Projection Footer Helper */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 text-slate-600 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <Globe2 className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            <strong>Classroom Tip:</strong> Projecting onto an Interactive Flat Panel? Enable{' '}
            <strong>Classroom Mode</strong> in the header for enlarged text, enhanced contrast, and
            wide touch targets.
          </span>
        </div>
        <button
          onClick={() => onNavigate('/about')}
          className="text-blue-600 hover:text-blue-800 font-bold hover:underline cursor-pointer"
        >
          View Teacher Guide →
        </button>
      </div>
    </div>
  );
};
