import React from 'react';
import { Unit } from '../../types/curriculum';
import { UnitProgress } from '../../types/progress';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowRight, BookOpen, CheckCircle, Gamepad2, Award } from 'lucide-react';

export interface UnitCardProps {
  unit: Unit;
  progress: UnitProgress;
  onSelect: (unitNumber: number) => void;
  isClassroomMode?: boolean;
}

export const UnitCard: React.FC<UnitCardProps> = ({
  unit,
  progress,
  onSelect,
  isClassroomMode = false
}) => {
  const isLearnComplete = progress.learn.completed;
  const isPracticeComplete = progress.practice.completed;
  const isFullyComplete = isLearnComplete && isPracticeComplete;

  return (
    <div
      className={`group relative bg-white rounded-2xl border transition-all duration-200 hover:shadow-xl flex flex-col justify-between overflow-hidden ${
        isFullyComplete
          ? 'border-emerald-300 ring-2 ring-emerald-500/10'
          : 'border-slate-200/90 hover:border-blue-400'
      } ${isClassroomMode ? 'p-7' : 'p-6'}`}
    >
      {/* Top Accent Stripe */}
      <div className={`h-2 -mt-6 -mx-6 mb-5 bg-gradient-to-r ${unit.themeColor}`} />

      {/* Unit Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 font-black text-xs md:text-sm tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
            Unit {unit.number}
          </span>
          <Badge variant="slate" isClassroomMode={isClassroomMode}>
            {unit.dimension}
          </Badge>
        </div>

        <h3
          className={`font-black text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-blue-600 transition-colors ${
            isClassroomMode ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}
        >
          {unit.title}
        </h3>

        <p
          className={`text-slate-600 line-clamp-2 mb-5 ${
            isClassroomMode ? 'text-base md:text-lg leading-relaxed' : 'text-sm leading-relaxed'
          }`}
        >
          {unit.shortDescription}
        </p>
      </div>

      {/* Progress Pills / Status Bar */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          {/* Learn Status */}
          <div
            className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 ${
              isLearnComplete
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-slate-50 text-slate-600 border-slate-200'
            }`}
          >
            <span className="flex items-center gap-1 font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              Learn
            </span>
            <span className="text-[11px] font-medium">
              {isLearnComplete ? (
                <span className="inline-flex items-center text-emerald-700 gap-0.5">
                  <CheckCircle className="w-3 h-3" /> Done
                </span>
              ) : (
                'Pending'
              )}
            </span>
          </div>

          {/* Practice Status */}
          <div
            className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 ${
              isPracticeComplete
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-slate-50 text-slate-600 border-slate-200'
            }`}
          >
            <span className="flex items-center gap-1 font-bold">
              <Award className="w-3.5 h-3.5" />
              Practice
            </span>
            <span className="text-[11px] font-medium">
              {isPracticeComplete ? (
                <span className="inline-flex items-center text-emerald-700 gap-0.5">
                  <CheckCircle className="w-3 h-3" /> {progress.practice.bestScore}%
                </span>
              ) : (
                'Pending'
              )}
            </span>
          </div>

          {/* Games Status */}
          <div className="p-2 rounded-xl border bg-slate-50 text-slate-600 border-slate-200 flex flex-col items-center justify-center gap-1">
            <span className="flex items-center gap-1 font-bold">
              <Gamepad2 className="w-3.5 h-3.5" />
              Games
            </span>
            <span className="text-[11px] font-medium">
              {progress.games.completedCount > 0
                ? `${progress.games.completedCount} won`
                : `${unit.plannedGamesCount} games`}
            </span>
          </div>
        </div>

        {/* Enter Unit Button */}
        <Button
          variant={isFullyComplete ? 'secondary' : 'primary'}
          size={isClassroomMode ? 'lg' : 'md'}
          isClassroomMode={isClassroomMode}
          className="w-full justify-between group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs"
          onClick={() => onSelect(unit.number)}
          rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        >
          Enter Unit {unit.number}
        </Button>
      </div>
    </div>
  );
};
