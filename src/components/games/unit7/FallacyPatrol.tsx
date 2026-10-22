/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 7: FALLACY PATROL (CANONICAL MICRO-GAME g7-3)
 * ============================================================================
 * Academic Source: Textbook Section 7.4 (pp. 99–103)
 * Target Concept: Informal Logical Fallacies (Ad Hominem, Straw Man, Hasty Gen, Post Hoc, False Dilemma)
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
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
  Megaphone,
  Radio
} from 'lucide-react';
import { G7_3_CHALLENGES, FallacyPatrolItem, FallacyType } from '../../../data/games/unit7MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface FallacyPatrolProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const FallacyPatrol: React.FC<FallacyPatrolProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFallacy, setSelectedFallacy] = useState<FallacyType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G7_3_CHALLENGES.length; // 11 items
  const currentItem: FallacyPatrolItem = G7_3_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedFallacy || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedFallacy === currentItem.correctFallacy;

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
    setSelectedFallacy(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(7, 'g7-3', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedFallacy(null);
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
          <div className="flex items-center gap-3 text-rose-700">
            <div className="p-3 bg-rose-100 rounded-2xl">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 7 Micro-Game 3
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Fallacy Patrol: The Flawed Reasoning Inspector
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Logical fallacies are mental viruses that sound persuasive on social media and political speeches, but represent broken reasoning. Learn to detect the <strong>5 textbook fallacies</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
              <h3 className="font-bold text-rose-900 mb-1">Rhetorical Deceptions</h3>
              <p className="text-rose-800 text-xs">
                <strong>Ad Hominem</strong> (attacking personal character) and <strong>Straw Man</strong> (distorting and exaggerating an opponent\'s argument).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-1">Empirical & Causal Traps</h3>
              <p className="text-amber-800 text-xs">
                <strong>Hasty Generalization</strong> (N=1 sample), <strong>Post Hoc</strong> (confusing sequence with cause), and <strong>False Dilemma</strong> (artificial either-or choices).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span>
              <strong>Patrol Mission:</strong> Intercept and diagnose 11 controversial public speeches across 3 patrol stages. Earn +100 base and streak multipliers.
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
              Begin Fallacy Patrol
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
          <div className="inline-flex p-4 rounded-full bg-rose-100 text-rose-700 mb-2">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Unit 7 Micro-Game Complete
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Fallacy Patrol Certified!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You dismantled rhetorical dirty tricks, exposed false dichotomies, and certified authentic critical reasoning.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Score</span>
              <p className="text-2xl font-black text-rose-600">{totalPoints}</p>
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
              <span className="text-slate-600">Stage 1: Core 5 Fallacies</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct} / {stageScores[1].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 2: Subtle Policy & Media Traps</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct} / {stageScores[2].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 3: Synthesis & Sound Reasoning</span>
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
    1: 'Stage 1: Core 5 Fallacies',
    2: 'Stage 2: Subtle Policy & Media Traps',
    3: 'Stage 3: Synthesis & Sound Reasoning'
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-5 animate-fadeIn">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
              {stageLabels[currentItem.stage]}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Debate {currentIndex + 1} of {totalItems}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="text-xs font-extrabold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 animate-pulse">
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
          color="bg-rose-600"
        />
      </div>

      {/* Speech Transcript Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-700">
            <Megaphone className="w-4 h-4" />
            <span>Debate Context: {currentItem.speakerContext}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900">
            {currentItem.caseTitle}
          </h2>
        </div>

        {/* Speech Transcript Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1.5">
          <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5" /> Intercepted Speech Transcript:
          </span>
          <p className="text-sm sm:text-base font-semibold text-slate-900 italic leading-relaxed">
            {currentItem.speechTranscript}
          </p>
        </div>

        {/* Fallacy Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Fallacy Patrol Diagnosis: Which reasoning flaw or strength is demonstrated?
          </span>

          <div className="grid grid-cols-1 gap-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedFallacy === opt.fallacy;
              let btnClass = 'border-slate-200 hover:border-rose-300 hover:bg-rose-50/40 text-slate-700';

              if (isSelected) {
                btnClass = 'border-rose-600 bg-rose-50 text-rose-900 ring-2 ring-rose-600/20';
              }

              if (isSubmitted) {
                if (opt.fallacy === currentItem.correctFallacy) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.fallacy}
                  onClick={() => !isSubmitted && setSelectedFallacy(opt.fallacy)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-1 ${btnClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base">{opt.label}</span>
                    {isSubmitted && opt.fallacy === currentItem.correctFallacy && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                    {isSubmitted && isSelected && opt.fallacy !== currentItem.correctFallacy && (
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
              selectedFallacy === currentItem.correctFallacy
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {selectedFallacy === currentItem.correctFallacy ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Fallacy Detected Successfully!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>Flawed Reasoning Slipped Past Patrol</span>
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
              disabled={!selectedFallacy}
              onClick={handleSubmit}
              rightIcon={<Check className="w-4 h-4" />}
            >
              Verify Fallacy
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNext} rightIcon={<ArrowRight className="w-4 h-4" />}>
              {currentIndex + 1 < totalItems ? 'Next Speech' : 'View Patrol Summary'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
