/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 8: EVIDENCE TIER RATER (CANONICAL MICRO-GAME g8-1)
 * ============================================================================
 * Academic Source: Textbook Section 8.2 (pp. 106–109)
 * Target Concept: Hierarchy of Scientific & Empirical Evidence
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
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
  ShieldCheck,
  Microscope,
  BarChart3,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import {
  G8_1_CHALLENGES,
  EvidenceTierItem,
  EvidenceTier
} from '../../../data/games/unit8MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface EvidenceTierRaterProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const EvidenceTierRater: React.FC<EvidenceTierRaterProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTier, setSelectedTier] = useState<EvidenceTier | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G8_1_CHALLENGES.length; // 11 items
  const currentItem: EvidenceTierItem = G8_1_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedTier || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedTier === currentItem.correctTier;

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
    setSelectedTier(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(8, 'g8-1', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedTier(null);
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

  const getTierIcon = (tier: EvidenceTier) => {
    switch (tier) {
      case 'experimental':
        return <Microscope className="w-5 h-5 text-indigo-600" />;
      case 'statistical':
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case 'expert':
        return <UserCheck className="w-5 h-5 text-amber-600" />;
      case 'anecdotal':
        return <MessageSquare className="w-5 h-5 text-rose-600" />;
    }
  };

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO
  // --------------------------------------------------------------------------
  if (screen === 'intro') {
    return (
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-indigo-700">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 8 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Evidence Tier Rater
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In academic research, not all evidence has equal weight. Learn to rate evidence across the four primary tiers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-indigo-900">
                <Microscope className="w-4 h-4 text-indigo-700" />
                <span>Tier 1: Experimental / Scientific</span>
              </div>
              <p className="text-xs text-indigo-800 leading-relaxed">
                Controlled trials with isolated variables and control groups; proves direct causality.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <BarChart3 className="w-4 h-4 text-emerald-700" />
                <span>Tier 2: Statistical Data</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Numerical data collected from large, representative population samples (BPS, Census).
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <UserCheck className="w-4 h-4 text-amber-700" />
                <span>Tier 3: Expert Testimony</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                Peer-reviewed specialists speaking strictly within their verified academic field.
              </p>
            </div>

            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-rose-900">
                <MessageSquare className="w-4 h-4 text-rose-700" />
                <span>Tier 4: Anecdotal Evidence</span>
              </div>
              <p className="text-xs text-rose-800 leading-relaxed">
                Personal stories and single experiences (sample size = 1); cannot prove universal rules.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>
              <strong>Classroom Challenge:</strong> 11 real-world scenarios across 3 stages. Rate each evidence snippet correctly to build evidentiary mastery.
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
              Start Evaluating
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
          <div className="inline-flex p-4 bg-indigo-100 text-indigo-700 rounded-3xl">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Evidence Audit Complete!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You evaluated evidence across all four tiers, distinguishing controlled science and statistical breadth from personal stories.
            </p>
          </div>

          {/* Score Badges */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Total Points</span>
              <span className="text-2xl sm:text-3xl font-black text-indigo-700">{totalPoints}</span>
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
                <span className="text-slate-500 block">Stage 1: Foundational</span>
                <span className="font-bold text-slate-800">
                  {stageScores[1].correct} / {stageScores[1].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 2: Competing Weights</span>
                <span className="font-bold text-slate-800">
                  {stageScores[2].correct} / {stageScores[2].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 3: Policy Weighing</span>
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
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md">
            Stage {currentItem.stage}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1 text-indigo-700">
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
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">
            {currentItem.researchTopic}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            {currentItem.scenarioTitle}
          </h2>
        </div>

        {/* Claim and Evidence Snippet */}
        <div className="space-y-3">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-black uppercase text-slate-500 block mb-1">
              Claim Tested
            </span>
            <p className="text-sm font-semibold text-slate-800">
              {currentItem.claimTested}
            </p>
          </div>

          <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100">
            <span className="text-xs font-black uppercase text-indigo-700 block mb-1">
              Evidence Provided
            </span>
            <p className="text-sm sm:text-base font-medium text-indigo-950 italic leading-relaxed">
              {currentItem.evidenceSnippet}
            </p>
            <div className="mt-2 pt-2 border-t border-indigo-200/50 flex items-center gap-1.5 text-xs text-indigo-800">
              <span className="font-semibold">Source:</span> {currentItem.sourceContext}
            </div>
          </div>
        </div>

        {/* Tier Selector */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Select Evidence Tier:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentItem.options.map((opt) => {
              const isSelected = selectedTier === opt.tier;
              const isCorrect = opt.tier === currentItem.correctTier;

              let btnStyle = 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-800';

              if (isSelected && !isSubmitted) {
                btnStyle = 'bg-indigo-50 border-indigo-600 text-indigo-900 ring-2 ring-indigo-500/20';
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
                  key={opt.tier}
                  onClick={() => !isSubmitted && setSelectedTier(opt.tier)}
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${btnStyle} ${
                    isClassroomMode ? 'min-h-[110px]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                      {getTierIcon(opt.tier)}
                      <span>{opt.label}</span>
                    </div>
                    {isSubmitted && isCorrect && (
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {opt.description}
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
              selectedTier === currentItem.correctTier
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {selectedTier === currentItem.correctTier ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Correct Evidentiary Rating!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>
                    Incorrect Rating. (Correct: {currentItem.options.find(o => o.tier === currentItem.correctTier)?.label})
                  </span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {currentItem.explanation}
            </p>

            <div className="pt-2 border-t border-current/15 flex items-start gap-1.5 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-80" />
              <span>Takeaway: {currentItem.pedagogicalTakeaway}</span>
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
              disabled={!selectedTier}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              Verify Tier
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              icon={ArrowRight}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              {currentIndex + 1 < totalItems ? 'Next Challenge' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
