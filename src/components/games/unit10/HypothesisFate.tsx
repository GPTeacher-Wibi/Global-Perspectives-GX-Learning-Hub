/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10: HYPOTHESIS FATE (CANONICAL MICRO-GAME g10-3)
 * ============================================================================
 * Academic Source: Textbook Section 10.2 (pp. 134–136)
 * Target Concept: Hypothesis Adjudication (Supported, Refuted, Modified) & Scientific Integrity
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Compass,
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
  XCircle,
  RefreshCw,
  FlaskConical,
  Scale
} from 'lucide-react';
import {
  G10_3_CHALLENGES,
  HypothesisFateItem,
  HypothesisOutcome
} from '../../../data/games/unit10MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface HypothesisFateProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const HypothesisFate: React.FC<HypothesisFateProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOutcome, setSelectedOutcome] = useState<HypothesisOutcome | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G10_3_CHALLENGES.length; // 11 items
  const currentItem: HypothesisFateItem = G10_3_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedOutcome || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedOutcome === currentItem.correctOutcome;

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
    setSelectedOutcome(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(10, 'g10-3', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOutcome(null);
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

  const getOutcomeIcon = (outcome: HypothesisOutcome) => {
    switch (outcome) {
      case 'supported':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'refuted':
        return <XCircle className="w-5 h-5 text-rose-600" />;
      case 'modified':
        return <RefreshCw className="w-5 h-5 text-amber-600" />;
    }
  };

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO
  // --------------------------------------------------------------------------
  if (screen === 'intro') {
    return (
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-amber-700">
            <div className="p-3 bg-amber-100 rounded-2xl">
              <FlaskConical className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 10 Micro-Game 3
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Hypothesis Fate: The Empirical Tribunal
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In research, you predict the relationship between variables. When you reach the conclusion, you must reconcile your prediction with empirical reality. There are exactly three scientific outcomes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Supported</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                The empirical data confirms the predicted relationship between variables.
              </p>
            </div>

            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-rose-900">
                <XCircle className="w-4 h-4 text-rose-700" />
                <span>Refuted (Disproven)</span>
              </div>
              <p className="text-xs text-rose-800 leading-relaxed">
                The empirical evidence contradicts the initial prediction or shows no effect.
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <RefreshCw className="w-4 h-4 text-amber-700" />
                <span>Modified (Qualified)</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                The prediction holds true only under specific conditions or for certain subgroups.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-2">
            <Scale className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Scientific Golden Rule:</strong> Disproving a hypothesis is NOT a failure. Reporting a refutation honestly protects society from wasted resources and false beliefs!
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <Button variant="secondary" onClick={onExit} icon={ArrowLeft}>
              Back to Catalog
            </Button>
            <Button
              variant="primary"
              onClick={() => setScreen('playing')}
              icon={ArrowRight}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              Adjudicate Hypotheses
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
      <div className="w-full max-w-2xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 text-center space-y-6">
          <div className="inline-flex p-4 bg-amber-100 text-amber-700 rounded-3xl">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Hypothesis Tribunal Complete!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You practiced scientific integrity by reconciling predictions with real data, recognizing that refutation is a discovery and qualification is scholarly wisdom.
            </p>
          </div>

          {/* Score Badges */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Total Points</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-700">{totalPoints}</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Accuracy</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-700">{accuracy}%</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Max Streak</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-600">{maxStreak}🔥</span>
            </div>
          </div>

          {/* Stage Breakdown */}
          <div className="space-y-2 text-left bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Stage Performance
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs font-medium">
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 1: Direct Outcomes</span>
                <span className="font-bold text-slate-800">
                  {stageScores[1].correct} / {stageScores[1].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 2: Conditional Findings</span>
                <span className="font-bold text-slate-800">
                  {stageScores[2].correct} / {stageScores[2].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 3: Scientific Integrity</span>
                <span className="font-bold text-slate-800">
                  {stageScores[3].correct} / {stageScores[3].total}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Button variant="secondary" onClick={handleRestart} icon={RotateCcw}>
              Try Again
            </Button>
            <Button variant="primary" onClick={onExit} icon={ArrowRight}>
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
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Status Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 flex justify-between items-center shadow-xs">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onExit} icon={ArrowLeft}>
            Exit
          </Button>
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-amber-50 text-amber-700 rounded-md">
            Stage {currentItem.stage}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-700">
            <Sparkles className="w-4 h-4" />
            <span>{totalPoints} pts</span>
          </div>
        </div>
      </div>

      <ProgressBar
        current={currentIndex + 1}
        total={totalItems}
        label={`Challenge ${currentIndex + 1} of ${totalItems}`}
      />

      {/* Main Challenge Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            {currentItem.inquiryDomain}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            RQ: {currentItem.researchQuestion}
          </h2>
        </div>

        {/* Prediction vs Findings */}
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-xs font-black uppercase text-slate-500 block mb-1">
              Initial Hypothesis (Prediction)
            </span>
            <p className="text-sm font-semibold text-slate-900">
              "{currentItem.initialHypothesis}"
            </p>
          </div>

          <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-100">
            <span className="text-xs font-black uppercase text-amber-800 block mb-1">
              Empirical Findings (Observed Reality)
            </span>
            <p className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
              {currentItem.empiricalFindings}
            </p>
          </div>
        </div>

        {/* Outcome Selector */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            What is the scientific fate of this hypothesis?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentItem.options.map((opt) => {
              const isSelected = selectedOutcome === opt.outcome;
              const isCorrect = opt.outcome === currentItem.correctOutcome;

              let btnStyle = 'bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50 text-slate-800';

              if (isSelected && !isSubmitted) {
                btnStyle = 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-500/20';
              }

              if (isSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={opt.outcome}
                  onClick={() => !isSubmitted && setSelectedOutcome(opt.outcome)}
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${btnStyle} ${
                    isClassroomMode ? 'min-h-[120px]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                      {getOutcomeIcon(opt.outcome)}
                      <span>{opt.label}</span>
                    </div>
                    {isSubmitted && isCorrect && (
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {opt.rationale}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-sm space-y-2 animate-fadeIn ${
              selectedOutcome === currentItem.correctOutcome
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {selectedOutcome === currentItem.correctOutcome ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Correct Empirical Adjudication!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>
                    Adjudication Error. (Correct: {currentItem.options.find(o => o.outcome === currentItem.correctOutcome)?.label})
                  </span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {currentItem.explanation}
            </p>

            <div className="pt-2 border-t border-current/15 space-y-1 text-xs">
              <div className="p-2 bg-white/70 rounded-xl border border-current/20">
                <span className="font-bold block mb-0.5">Reformulated Hypothesis or Next Step:</span>
                <p>{currentItem.reformulatedHypothesisOrAction}</p>
              </div>
              <div className="flex items-start gap-1 font-semibold">
                <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-80" />
                <span>Takeaway: {currentItem.pedagogicalTakeaway}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex justify-between items-center pt-2">
          <Button variant="ghost" onClick={onExit} icon={ArrowLeft}>
            Cancel
          </Button>

          {!isSubmitted ? (
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={!selectedOutcome}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              Confirm Fate
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              icon={ArrowRight}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              {currentIndex + 1 < totalItems ? 'Next Inquiry' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
