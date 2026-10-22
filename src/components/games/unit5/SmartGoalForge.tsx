/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 5: SMART GOAL FORGE (CANONICAL MICRO-GAME g5-3)
 * ============================================================================
 * Academic Source: Textbook Section 5.1 (pp. 68–70)
 * Target Concept: SMART Planning Principles & Defect Transformation
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Target,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  Check,
  Zap,
  Clock,
  Layers
} from 'lucide-react';
import { G5_3_CHALLENGES, SmartGoalItem, SmartDefect } from '../../../data/games/unit5MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface SmartGoalForgeProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const SmartGoalForge: React.FC<SmartGoalForgeProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDefect, setSelectedDefect] = useState<SmartDefect | null>(null);
  const [selectedRepairedOption, setSelectedRepairedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G5_3_CHALLENGES.length; // 11 items
  const currentItem: SmartGoalItem = G5_3_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedDefect || !selectedRepairedOption || isSubmitted) return;
    setIsSubmitted(true);

    const isDefectCorrect = selectedDefect === currentItem.primaryDefect;
    const isRepairCorrect = selectedRepairedOption === currentItem.correctRepairedOption;
    const isAllCorrect = isDefectCorrect && isRepairCorrect;

    if (isAllCorrect) {
      const streakBonus = Math.min(streak * 20, 100);
      const earned = 100 + streakBonus;
      setTotalPoints((prev) => prev + earned);
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak((prev) => Math.max(prev, newStreak));
    } else {
      setStreak(0);
    }

    setStageScores((prev) => ({
      ...prev,
      [currentItem.stage]: {
        correct: prev[currentItem.stage].correct + (isAllCorrect ? 1 : 0),
        total: prev[currentItem.stage].total + 1
      }
    }));
  };

  const handleNext = () => {
    setSelectedDefect(null);
    setSelectedRepairedOption(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(5, 'g5-3', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedDefect(null);
    setSelectedRepairedOption(null);
    setIsSubmitted(false);
    setTotalPoints(0);
    setStreak(0);
    setMaxStreak(0);
    setStageScores({
      1: { correct: 0, total: 0 },
      2: { correct: 0, total: 0 },
      3: { correct: 0, total: 0 }
    });
    setScreen('playing');
  };

  const totalCorrect = stageScores[1].correct + stageScores[2].correct + stageScores[3].correct;
  const accuracy = Math.round((totalCorrect / totalItems) * 100);

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO
  // --------------------------------------------------------------------------
  if (screen === 'intro') {
    return (
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-indigo-700">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <Target className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 5 Micro-Game 3
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                SMART Goal Forge: The Objective Surgery Lab
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Vague goals produce weak plans. In research and project management, every objective must satisfy the <strong>SMART framework</strong>:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
            <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="text-base font-black text-indigo-700 block">S</span>
              <strong className="text-slate-800">Specific</strong>
              <p className="text-slate-500 text-[10px] mt-0.5">Clear & concrete</p>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="text-base font-black text-indigo-700 block">M</span>
              <strong className="text-slate-800">Measurable</strong>
              <p className="text-slate-500 text-[10px] mt-0.5">Numbers & metrics</p>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="text-base font-black text-indigo-700 block">A</span>
              <strong className="text-slate-800">Achievable</strong>
              <p className="text-slate-500 text-[10px] mt-0.5">Realistic scope</p>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="text-base font-black text-indigo-700 block">R</span>
              <strong className="text-slate-800">Relevant</strong>
              <p className="text-slate-500 text-[10px] mt-0.5">Serves mission</p>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 col-span-2 sm:col-span-1">
              <span className="text-base font-black text-indigo-700 block">T</span>
              <strong className="text-slate-800">Time-Bound</strong>
              <p className="text-slate-500 text-[10px] mt-0.5">Firm deadline</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span>
              <strong>Dual Surgery Challenge:</strong> Diagnose the fatal SMART flaw in draft goals, then forge the optimal repaired objective across 11 challenges.
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <Button variant="ghost" onClick={onExit} leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Catalog
            </Button>
            <Button
              variant="primary"
              onClick={() => setScreen('playing')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Enter Surgery Lab
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 3: RESULTS
  // --------------------------------------------------------------------------
  if (screen === 'results') {
    return (
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 text-center space-y-6">
          <div className="inline-flex p-4 rounded-full bg-indigo-100 text-indigo-700 mb-2">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Unit 5 Micro-Game Complete
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Goal Surgery Certified!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You converted flawed student intentions into rigorous, verifiable SMART project charters.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Score</span>
              <p className="text-2xl font-black text-indigo-600">{totalPoints}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Accuracy</span>
              <p className="text-2xl font-black text-slate-900">{accuracy}%</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Max Streak</span>
              <p className="text-2xl font-black text-purple-600">{maxStreak}x</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 max-w-md mx-auto border border-slate-200 text-left space-y-2 text-xs">
            <h4 className="font-bold text-slate-700 uppercase tracking-wider">Stage Breakdown:</h4>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 1: Flaw Diagnosis</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct} / {stageScores[1].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 2: Goal Surgery & Repair</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct} / {stageScores[2].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 3: Full Charter Certification</span>
              <span className="font-bold text-slate-900">{stageScores[3].correct} / {stageScores[3].total}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Button variant="outline" onClick={handleRestart} leftIcon={<RotateCcw className="w-4 h-4" />}>
              Play Again
            </Button>
            <Button variant="primary" onClick={onExit} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Back to Catalog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 2: PLAYING
  // --------------------------------------------------------------------------
  const stageLabels: Record<1 | 2 | 3, string> = {
    1: 'Stage 1: Flaw Diagnosis',
    2: 'Stage 2: Goal Surgery & Repair',
    3: 'Stage 3: Full Charter Certification'
  };

  const isAllCorrect =
    selectedDefect === currentItem.primaryDefect &&
    selectedRepairedOption === currentItem.correctRepairedOption;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-5 animate-fadeIn">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
              {stageLabels[currentItem.stage]}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Item {currentIndex + 1} of {totalItems}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200 animate-pulse">
                🔥 {streak}x Streak
              </span>
            )}
            <span className="text-sm font-black text-slate-900">
              {totalPoints} pts
            </span>
          </div>
        </div>

        <ProgressBar
          progress={((currentIndex + (isSubmitted ? 1 : 0)) / totalItems) * 100}
          height={6}
          color="bg-indigo-600"
        />
      </div>

      {/* Draft Goal Patient Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
            <Target className="w-4 h-4" />
            <span>Project Domain: {currentItem.projectDomain}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900">
            {currentItem.title}
          </h2>
        </div>

        {/* Draft Goal Statement */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
          <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" /> Draft Goal Statement Submitted by Student Team:
          </span>
          <p className="text-base font-semibold text-slate-900 italic">
            {currentItem.draftGoalStatement}
          </p>
        </div>

        {/* Step 1: Diagnose the Defect */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Step 1: Diagnose the Primary SMART Defect
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedDefect === opt.defect;
              let btnClass = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-700';

              if (isSelected) {
                btnClass = 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-600/20';
              }

              if (isSubmitted) {
                if (opt.defect === currentItem.primaryDefect) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.defect}
                  onClick={() => !isSubmitted && setSelectedDefect(opt.defect)}
                  disabled={isSubmitted}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col gap-1 ${btnClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm">{opt.label}</span>
                    {isSubmitted && opt.defect === currentItem.primaryDefect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">{opt.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Forge the Repaired Goal */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Step 2: Forge the Repaired / Certified SMART Objective
          </span>

          <div className="space-y-2.5">
            {[
              { id: 'A' as const, text: currentItem.repairedGoalOptionA },
              { id: 'B' as const, text: currentItem.repairedGoalOptionB },
              { id: 'C' as const, text: currentItem.repairedGoalOptionC }
            ].map((repair) => {
              const isSelected = selectedRepairedOption === repair.id;
              let btnClass = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-700';

              if (isSelected) {
                btnClass = 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-600/20';
              }

              if (isSubmitted) {
                if (repair.id === currentItem.correctRepairedOption) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={repair.id}
                  onClick={() => !isSubmitted && setSelectedRepairedOption(repair.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${btnClass}`}
                >
                  <span className="font-black text-xs px-2 py-1 rounded bg-slate-100 border border-slate-300">
                    Option {repair.id}
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed flex-1">
                    {repair.text}
                  </p>
                  {isSubmitted && repair.id === currentItem.correctRepairedOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  )}
                  {isSubmitted && isSelected && repair.id !== currentItem.correctRepairedOption && (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-sm leading-relaxed space-y-2 animate-fadeIn ${
              isAllCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {isAllCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Objective Successfully Forged!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>SMART Calibration Incomplete</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm">{currentItem.explanation}</p>
            <div className="pt-1 text-xs font-semibold opacity-90 border-t border-slate-200/50">
              💡 <strong>Key Takeaway:</strong> {currentItem.pedagogicalKey}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex justify-between items-center pt-2">
          <Button variant="ghost" size="sm" onClick={onExit} leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Exit
          </Button>

          {!isSubmitted ? (
            <Button
              variant="primary"
              disabled={!selectedDefect || !selectedRepairedOption}
              onClick={handleSubmit}
              rightIcon={<Check className="w-4 h-4" />}
            >
              Verify Goal Surgery
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNext} rightIcon={<ArrowRight className="w-4 h-4" />}>
              {currentIndex + 1 < totalItems ? 'Next Case' : 'View Surgery Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
