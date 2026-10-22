/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 9: ECHO CHAMBER BREAKER (CANONICAL MICRO-GAME g9-3)
 * ============================================================================
 * Academic Source: Textbook Section 9.5 & 9.6 (pp. 131–134)
 * Target Concept: Confirmation Bias, Filter Bubbles & Multi-Lens Counter-Framing
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Radio,
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
  Shield,
  Layers,
  HeartHandshake
} from 'lucide-react';
import {
  G9_3_CHALLENGES,
  EchoChamberItem
} from '../../../data/games/unit9MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface EchoChamberBreakerProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const EchoChamberBreaker: React.FC<EchoChamberBreakerProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G9_3_CHALLENGES.length; // 11 items
  const currentItem: EchoChamberItem = G9_3_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;
    setIsSubmitted(true);

    const chosen = currentItem.options.find((o) => o.id === selectedOptionId);
    const isCorrect = chosen ? chosen.isStrongestCounterMove : false;

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
    setSelectedOptionId(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(9, 'g9-3', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
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
          <div className="flex items-center gap-3 text-fuchsia-700">
            <div className="p-3 bg-fuchsia-100 rounded-2xl">
              <Radio className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 9 Micro-Game 3
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Echo Chamber Breaker
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Social media algorithms and ideological bubbles trap users in echo chambers where everyone agrees and contrary facts are censored. Learn how to puncture filter bubbles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-fuchsia-50/70 border border-fuchsia-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-fuchsia-900">
                <Shield className="w-4 h-4 text-fuchsia-700" />
                <span>The Filter Bubble Trap</span>
              </div>
              <p className="text-xs text-fuchsia-900 leading-relaxed">
                Recommender algorithms feed users only what confirms their existing prejudices, creating false consensus and hostility toward outsiders.
              </p>
            </div>

            <div className="p-4 bg-pink-50/70 border border-pink-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-pink-900">
                <HeartHandshake className="w-4 h-4 text-pink-700" />
                <span>Intellectual Humility & Counter-Framing</span>
              </div>
              <p className="text-xs text-pink-900 leading-relaxed">
                Break bubbles by injecting verified multi-lens evidence (economic, environmental, cultural) without insulting participants’ personal dignity.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-2">
            <Layers className="w-4 h-4 text-fuchsia-600 shrink-0 mt-0.5" />
            <span>
              <strong>Your Mission:</strong> Audit polarized feeds across 11 challenges and select the strongest, most balanced counter-perspective to restore intellectual balance.
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
              Enter Simulation
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
          <div className="inline-flex p-4 bg-fuchsia-100 text-fuchsia-700 rounded-3xl">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Echo Chambers Broken!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You diagnosed algorithmic filter bubbles, introduced missing perspective lenses, and practiced intellectual humility to build bridge solutions.
            </p>
          </div>

          {/* Score Badges */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Total Points</span>
              <span className="text-2xl sm:text-3xl font-black text-fuchsia-700">{totalPoints}</span>
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
                <span className="text-slate-500 block">Stage 1: Bubble Diagnosis</span>
                <span className="font-bold text-slate-800">
                  {stageScores[1].correct} / {stageScores[1].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 2: Counter-Framing</span>
                <span className="font-bold text-slate-800">
                  {stageScores[2].correct} / {stageScores[2].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 3: Multi-Lens Bridges</span>
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
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-fuchsia-50 text-fuchsia-700 rounded-md">
            Stage {currentItem.stage}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1 text-fuchsia-700">
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

      {/* Main Chamber Simulation Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600 block">
            {currentItem.bubbleTheme}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            {currentItem.bubbleName}
          </h2>
        </div>

        {/* Algorithm Snippet & Dominant Narrative */}
        <div className="space-y-3">
          <div className="p-4 bg-fuchsia-50/50 rounded-2xl border border-fuchsia-100">
            <span className="text-xs font-black uppercase text-fuchsia-800 block mb-1">
              Algorithmic Feed Snapshot
            </span>
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              {currentItem.algorithmSnippet}
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <span className="font-bold text-slate-600 uppercase block mb-0.5">
              Dominant Chamber Narrative:
            </span>
            <p className="text-slate-900 font-semibold">{currentItem.dominantNarrative}</p>
          </div>
        </div>

        {/* Counter-Evidence Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            What is the most constructive, evidence-based counter-move?
          </span>

          <div className="space-y-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.isStrongestCounterMove;

              let btnStyle = 'bg-white border-slate-200 hover:border-fuchsia-300 hover:bg-slate-50 text-slate-800';

              if (isSelected && !isSubmitted) {
                btnStyle = 'bg-fuchsia-50 border-fuchsia-600 text-fuchsia-900 ring-2 ring-fuchsia-500/20';
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
                  key={opt.id}
                  onClick={() => !isSubmitted && setSelectedOptionId(opt.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                >
                  <p className="font-semibold text-sm sm:text-base leading-snug">
                    {opt.text}
                  </p>
                  {isSubmitted && isCorrect && (
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-sm space-y-2 animate-fadeIn ${
              currentItem.options.find(o => o.id === selectedOptionId)?.isStrongestCounterMove
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {currentItem.options.find(o => o.id === selectedOptionId)?.isStrongestCounterMove ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Echo Chamber Punctured!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>Ineffective Counter-Move.</span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {currentItem.options.find(o => o.id === selectedOptionId)?.reasoning}
            </p>

            <div className="pt-2 border-t border-current/15 text-xs space-y-1">
              <div className="flex items-start gap-1 font-semibold text-fuchsia-900">
                <span>Humility Lesson:</span>
                <span className="font-normal">{currentItem.intellectualHumilityLesson}</span>
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
              disabled={!selectedOptionId}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              Inject Counter-Evidence
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              icon={ArrowRight}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              {currentIndex + 1 < totalItems ? 'Next Chamber' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
