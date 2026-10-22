import React, { useState } from 'react';
import { LearningProgress } from '../../types/progress';
import { UNITS_DATA } from '../../data/units';
import { ProgressBar } from '../common/ProgressBar';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import {
  Trophy,
  CheckCircle2,
  BookOpen,
  Award,
  Gamepad2,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export interface ProgressSummaryProps {
  progress: LearningProgress;
  nickname: string;
  onResetProgress: () => void;
  onSelectUnit: (unitNumber: number) => void;
  isClassroomMode: boolean;
}

export const ProgressSummary: React.FC<ProgressSummaryProps> = ({
  progress,
  nickname,
  onResetProgress,
  onSelectUnit,
  isClassroomMode
}) => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Compute metrics
  let totalLearnCompleted = 0;
  let totalPracticeCompleted = 0;
  let totalPracticeScoreSum = 0;
  let totalPracticeAttempts = 0;
  let totalGamesWon = 0;

  for (let i = 1; i <= 10; i++) {
    const u = progress.units[i];
    if (u) {
      if (u.learn.completed) totalLearnCompleted++;
      if (u.practice.completed) {
        totalPracticeCompleted++;
        totalPracticeScoreSum += u.practice.bestScore;
      }
      totalPracticeAttempts += u.practice.attempts;
      totalGamesWon += u.games.completedCount;
    }
  }

  const averagePracticeScore =
    totalPracticeCompleted > 0
      ? Math.round(totalPracticeScoreSum / totalPracticeCompleted)
      : 0;

  const overallPercent = Math.round(
    ((totalLearnCompleted + totalPracticeCompleted) / 20) * 100
  );

  const hasAnyActivity =
    totalLearnCompleted > 0 || totalPracticeCompleted > 0 || totalGamesWon > 0;

  return (
    <div className="w-full space-y-8">
      {/* Student Greeting & Overall Summary Hero */}
      <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-100 font-bold text-xs uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Local Mastery Profile</span>
            </div>

            <h1
              className={`font-black tracking-tight mb-2 ${
                isClassroomMode ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'
              }`}
            >
              {nickname ? `${nickname}'s Learning Journey` : 'Student Progress Dashboard'}
            </h1>

            <p
              className={`text-blue-100/90 leading-relaxed ${
                isClassroomMode ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
              }`}
            >
              Track your conceptual understanding, Quick Check practice scores, and educational game
              milestones across all 10 Cambridge Global Perspectives units.
            </p>
          </div>

          {/* Quick Stats Metric Cards */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 min-w-[220px] text-center">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-200 block mb-1">
              Overall Progress
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white tabular-nums mb-2">
              {overallPercent}%
            </div>
            <ProgressBar
              value={overallPercent}
              colorClass="bg-amber-400"
              size="sm"
            />
          </div>
        </div>
      </div>

      {/* 3 Metric Highlighters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{totalLearnCompleted} / 10</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Presentations Completed
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {totalPracticeCompleted > 0 ? `${averagePracticeScore}%` : '0%'}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Avg. Practice Accuracy
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{totalGamesWon}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Educational Games Won
            </div>
          </div>
        </div>
      </div>

      {/* Empty State message if no activity yet */}
      {!hasAnyActivity && (
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-base">Your learning progress will appear here as you explore the units.</p>
            <p className="text-sm text-amber-900/90 mt-1">
              Start by launching the interactive presentation for Unit 1, then complete the Quick Checks
              to test your understanding.
            </p>
          </div>
        </div>
      )}

      {/* Unit-by-Unit Status Breakdown Table */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900">Unit Breakdown</h2>
            <p className="text-slate-500 text-xs font-medium">
              Detailed tracking for all 10 Cambridge Global Perspectives units
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsResetModalOpen(true)}
            leftIcon={<RotateCcw className="w-3.5 h-3.5 text-rose-500" />}
            className="text-rose-600 hover:bg-rose-50 hover:text-rose-700"
          >
            Reset Progress
          </Button>
        </div>

        <div className="divide-y divide-slate-100 overflow-x-auto">
          {UNITS_DATA.map((unit) => {
            const uProg = progress.units[unit.number];
            const isLearnDone = uProg?.learn.completed;
            const isPracticeDone = uProg?.practice.completed;

            return (
              <div
                key={unit.id}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition"
              >
                <div className="flex items-center gap-3.5 min-w-[220px]">
                  <span className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 font-black text-sm flex items-center justify-center shrink-0 border border-slate-200">
                    {unit.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {unit.title}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {unit.dimension}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 sm:gap-10">
                  {/* Learn Indicator */}
                  <div className="text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      Learn
                    </span>
                    {isLearnDone ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Done
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium">Pending</span>
                    )}
                  </div>

                  {/* Practice Indicator */}
                  <div className="text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      Practice
                    </span>
                    {isPracticeDone ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> {uProg?.practice.bestScore}%
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium">Pending</span>
                    )}
                  </div>

                  {/* Games Indicator */}
                  <div className="text-center hidden sm:block">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      Games
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {uProg?.games.completedCount || 0} won
                    </span>
                  </div>

                  {/* Jump to Unit */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onSelectUnit(unit.number)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Open
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Confirmation Modal for Resetting Local Progress */}
      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Reset Local Progress?"
        confirmText="Reset Progress"
        confirmVariant="danger"
        onConfirm={onResetProgress}
        isClassroomMode={isClassroomMode}
      >
        <div className="space-y-3">
          <p className="text-slate-700">
            This will remove your saved unit progress, slide bookmarks, and practice scores from this
            browser.
          </p>
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-rose-900 text-xs font-medium">
            ⚠️ This action cannot be undone. Your student nickname will remain intact.
          </div>
        </div>
      </Modal>
    </div>
  );
};
