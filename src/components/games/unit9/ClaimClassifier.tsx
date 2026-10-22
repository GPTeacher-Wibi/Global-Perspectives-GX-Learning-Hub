/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 9: CLAIM CLASSIFIER (CANONICAL MICRO-GAME g9-1)
 * ============================================================================
 * Academic Source: Textbook Section 9.2 (pp. 123–127)
 * Target Concept: The Tri-Claim Framework (Claims of Fact, Value, Policy)
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Tag,
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
  Scale,
  FileCheck2,
  Gavel
} from 'lucide-react';
import {
  G9_1_CHALLENGES,
  ClaimClassifierItem,
  ClaimType
} from '../../../data/games/unit9MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface ClaimClassifierProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const ClaimClassifier: React.FC<ClaimClassifierProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedClaimType, setSelectedClaimType] = useState<ClaimType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G9_1_CHALLENGES.length; // 11 items
  const currentItem: ClaimClassifierItem = G9_1_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedClaimType || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedClaimType === currentItem.correctClaimType;

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
    setSelectedClaimType(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(9, 'g9-1', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedClaimType(null);
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

  const getClaimIcon = (type: ClaimType) => {
    switch (type) {
      case 'fact':
        return <FileCheck2 className="w-5 h-5 text-blue-600" />;
      case 'value':
        return <Scale className="w-5 h-5 text-amber-600" />;
      case 'policy':
        return <Gavel className="w-5 h-5 text-emerald-600" />;
    }
  };

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO
  // --------------------------------------------------------------------------
  if (screen === 'intro') {
    return (
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-blue-700">
            <div className="p-3 bg-blue-100 rounded-2xl">
              <Tag className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 9 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Claim Classifier: Fact, Value & Policy
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Every debate, policy speech, and research paper revolves around claims. Learn to categorize claims into the textbook Tri-Claim Framework:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-blue-900">
                <FileCheck2 className="w-4 h-4 text-blue-700" />
                <span>Claim of Fact</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                Asserts what is, was, or will be true; verified through empirical measurement, data, and physical observation.
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Scale className="w-4 h-4 text-amber-700" />
                <span>Claim of Value</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                Asserts moral, ethical, or aesthetic worth (good/bad, just/unjust); grounded in philosophical and cultural criteria.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <Gavel className="w-4 h-4 text-emerald-700" />
                <span>Claim of Policy</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Proposes that specific institutional rules, laws, or actions should, must, or ought to be enacted.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              <strong>Memory Formula:</strong> Fact = What IS; Value = What is WORTHWHILE; Policy = What we MUST DO.
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
              Start Classifying
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
          <div className="inline-flex p-4 bg-blue-100 text-blue-700 rounded-3xl">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Claim Classification Mastered!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You accurately dissected statements into empirical facts, moral and aesthetic values, and actionable policy proposals.
            </p>
          </div>

          {/* Score Badges */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Total Points</span>
              <span className="text-2xl sm:text-3xl font-black text-blue-700">{totalPoints}</span>
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
                <span className="text-slate-500 block">Stage 1: Direct Statements</span>
                <span className="font-bold text-slate-800">
                  {stageScores[1].correct} / {stageScores[1].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 2: Nuanced Claims</span>
                <span className="font-bold text-slate-800">
                  {stageScores[2].correct} / {stageScores[2].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 3: Controversy Analysis</span>
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
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 text-blue-700 rounded-md">
            Stage {currentItem.stage}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-700">
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

      {/* Main Assertion Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Context / Speaker
          </span>
          <p className="text-xs font-semibold text-slate-500 mt-0.5">
            {currentItem.speakerOrContext}
          </p>
        </div>

        {/* Claim Statement */}
        <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
          <span className="text-xs font-black uppercase text-blue-800 block mb-1.5">
            Assertion Under Audit
          </span>
          <blockquote className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            "{currentItem.statement}"
          </blockquote>
        </div>

        {/* Claim Type Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Which category of claim is being asserted?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentItem.options.map((opt) => {
              const isSelected = selectedClaimType === opt.type;
              const isCorrect = opt.type === currentItem.correctClaimType;

              let btnStyle = 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-800';

              if (isSelected && !isSubmitted) {
                btnStyle = 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20';
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
                  key={opt.type}
                  onClick={() => !isSubmitted && setSelectedClaimType(opt.type)}
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${btnStyle} ${
                    isClassroomMode ? 'min-h-[120px]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                      {getClaimIcon(opt.type)}
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
              selectedClaimType === currentItem.correctClaimType
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {selectedClaimType === currentItem.correctClaimType ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Correct Claim Classification!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>
                    Classification Error. (Correct: {currentItem.options.find(o => o.type === currentItem.correctClaimType)?.label})
                  </span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {currentItem.explanation}
            </p>

            <div className="pt-2 border-t border-current/15 text-xs space-y-1">
              <div className="font-semibold flex items-center gap-1">
                <span>How to verify:</span>
                <span className="font-normal">{currentItem.howToProve}</span>
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
              disabled={!selectedClaimType}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              Classify Claim
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              icon={ArrowRight}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              {currentIndex + 1 < totalItems ? 'Next Claim' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
