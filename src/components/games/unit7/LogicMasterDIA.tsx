/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 7: LOGIC MASTER D-I-A (CANONICAL MICRO-GAME g7-1)
 * ============================================================================
 * Academic Source: Textbook Section 7.2 (pp. 93–96)
 * Target Concept: Three Modes of Reasoning (Deductive, Inductive, Abductive)
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Brain,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  Check,
  Zap,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { G7_1_CHALLENGES, LogicMasterItem, ReasoningMode } from '../../../data/games/unit7MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface LogicMasterProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const LogicMasterDIA: React.FC<LogicMasterProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMode, setSelectedMode] = useState<ReasoningMode | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G7_1_CHALLENGES.length; // 11 items
  const currentItem: LogicMasterItem = G7_1_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedMode || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedMode === currentItem.correctMode;

    if (isCorrect) {
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
        correct: prev[currentItem.stage].correct + (isCorrect ? 1 : 0),
        total: prev[currentItem.stage].total + 1
      }
    }));
  };

  const handleNext = () => {
    setSelectedMode(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(7, 'g7-1', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedMode(null);
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
          <div className="flex items-center gap-3 text-purple-700">
            <div className="p-3 bg-purple-100 rounded-2xl">
              <Brain className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 7 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Logic Master: D-I-A (The Tri-Logic Engine)
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            People use three main ways of reasoning to connect ideas. Learn to identify when an argument is <strong>Deductive (top-down rule)</strong>, <strong>Inductive (pattern from samples)</strong>, or <strong>Abductive (best explanation for clues)</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-1">Deductive (Top-Down)</h3>
              <p className="text-blue-800 text-xs">
                General rule → Specific case. If the general rule is true, the conclusion must follow.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <h3 className="font-bold text-emerald-900 mb-1">Inductive (Bottom-Up)</h3>
              <p className="text-emerald-800 text-xs">
                Repeated observations → General pattern. Shows what is likely or probable, but not 100% guaranteed.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-1">Abductive (Detective)</h3>
              <p className="text-amber-800 text-xs">
                Incomplete clues → Best explanation. Solves puzzles, mysteries, and medical symptoms.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span>
              <strong>Scoring Benchmark:</strong> 11 logical cases across 3 progressive stages. Earn +100 base per correct classification with streak multipliers.
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
              Start Logic Engine
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
          <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-700 mb-2">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Unit 7 Micro-Game Complete
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Logic Mastery Certified!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You classified arguments across Deduction, Induction, and Abduction with philosophical precision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Score</span>
              <p className="text-2xl font-black text-purple-600">{totalPoints}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Accuracy</span>
              <p className="text-2xl font-black text-slate-900">{accuracy}%</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Max Streak</span>
              <p className="text-2xl font-black text-emerald-600">{maxStreak}x</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 max-w-md mx-auto border border-slate-200 text-left space-y-2 text-xs">
            <h4 className="font-bold text-slate-700 uppercase tracking-wider">Stage Breakdown:</h4>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 1: Core Tri-Logic Discovery</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct} / {stageScores[1].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 2: Epistemic Comparison & Error Detection</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct} / {stageScores[2].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 3: Applied Real-World Synthesis</span>
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
    1: 'Stage 1: Core Tri-Logic Discovery',
    2: 'Stage 2: Epistemic Comparison & Error Detection',
    3: 'Stage 3: Applied Real-World Synthesis'
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-5 animate-fadeIn">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
              {stageLabels[currentItem.stage]}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Item {currentIndex + 1} of {totalItems}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="text-xs font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200 animate-pulse">
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
          color="bg-purple-600"
        />
      </div>

      {/* Case Scenario Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
            <Cpu className="w-4 h-4" />
            <span>Inquiry Domain: {currentItem.inquiryDomain}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900">
            {currentItem.title}
          </h2>
        </div>

        {/* Argument Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5" /> Argument / Logical Chain to be Evaluated:
          </span>
          <pre className="text-xs sm:text-sm font-medium text-slate-900 whitespace-pre-line font-sans leading-relaxed">
            {currentItem.argumentText}
          </pre>
        </div>

        {/* Premise Structure Breakdown */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
          <div className="font-semibold text-slate-800">Cognitive Structure:</div>
          <div>• <strong>Start:</strong> {currentItem.premiseStructure.startingPoint}</div>
          <div>• <strong>Step:</strong> {currentItem.premiseStructure.stepToConclusion}</div>
          <div>• <strong>Claim:</strong> {currentItem.premiseStructure.finalClaim}</div>
        </div>

        {/* Mode Selector */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Type of Reasoning: Which mode of logic connects these ideas?
          </span>

          <div className="grid grid-cols-1 gap-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedMode === opt.mode;
              let btnClass = 'border-slate-200 hover:border-purple-300 hover:bg-purple-50/40 text-slate-700';

              if (isSelected) {
                btnClass = 'border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-600/20';
              }

              if (isSubmitted) {
                if (opt.mode === currentItem.correctMode) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.mode}
                  onClick={() => !isSubmitted && setSelectedMode(opt.mode)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-1 ${btnClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base">{opt.label}</span>
                    {isSubmitted && opt.mode === currentItem.correctMode && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                    {isSubmitted && isSelected && opt.mode !== currentItem.correctMode && (
                      <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">{opt.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-sm leading-relaxed space-y-2 animate-fadeIn ${
              selectedMode === currentItem.correctMode
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {selectedMode === currentItem.correctMode ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Correct Logical Classification!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>Reasoning Type Misidentified</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm">{currentItem.explanation}</p>
            <div className="p-2.5 bg-white/80 rounded-xl border border-slate-200 text-xs text-slate-800">
              🎯 <strong>Degree of Certainty:</strong> {currentItem.certaintyLevel}
            </div>
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
              disabled={!selectedMode}
              onClick={handleSubmit}
              rightIcon={<Check className="w-4 h-4" />}
            >
              Verify Logic Mode
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNext} rightIcon={<ArrowRight className="w-4 h-4" />}>
              {currentIndex + 1 < totalItems ? 'Next Case' : 'View Logic Summary'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
