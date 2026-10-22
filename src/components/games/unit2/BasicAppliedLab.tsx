/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 2: BASIC VS APPLIED LAB (CANONICAL MICRO-GAME g2-1)
 * ============================================================================
 * Academic Source: Textbook Section 2.2 (pp. 24–27)
 * Target Concept: Basic vs. Applied Inquiry
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  FlaskConical,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  HelpCircle,
  Compass,
  Check
} from 'lucide-react';
import { G2_1_CHALLENGES, BasicAppliedItem, ResearchInquiryType } from '../../../data/games/unit2MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface BasicAppliedLabProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const BasicAppliedLab: React.FC<BasicAppliedLabProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<ResearchInquiryType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G2_1_CHALLENGES.length; // 11 items
  const currentItem: BasicAppliedItem = G2_1_CHALLENGES[currentIndex];

  // Scoring constants
  // 11 items * 100 base = 1100.
  // Streak bonuses: 0 + 20 + 40 + 60 + 80 + 100 + 100 + 100 + 100 + 100 + 100 = 800 max streak bonus.
  const MAX_BASE_SCORE = 1100;
  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedType || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedType === currentItem.correctType;

    if (isCorrect) {
      const streakBonus = Math.min(streak * 20, 100);
      const earnedPoints = 100 + streakBonus;
      setTotalPoints((prev) => prev + earnedPoints);
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
    setSelectedType(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(2, 'g2-1', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedType(null);
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
          <div className="flex items-center gap-3 text-cyan-700">
            <div className="p-3 bg-cyan-100 rounded-2xl">
              <FlaskConical className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 2 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Basic vs. Applied Lab
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Welcome to the Research Laboratory! Authentic researchers don't just classify investigations by their topic — they evaluate their <strong>primary purpose and motivation</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-900">
                <FlaskConical className="w-5 h-5 text-cyan-600" />
                <span>Basic Research (Pure)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Driven by curiosity. Seeks to discover foundational mechanisms, expand scientific theory, and understand how the world works.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Wrench className="w-5 h-5 text-amber-600" />
                <span>Applied Research (Practical)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Driven by practical need. Designed directly to solve an immediate real-world problem or create a working community solution.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800">Laboratory Mission:</div>
            <p>• Stage 1: Foundational distinctions (4 real-world lab briefs)</p>
            <p>• Stage 2: Nuanced and borderline cases (4 deceptive research studies)</p>
            <p>• Stage 3: The translational bridge & mutual dependence (3 advanced scenarios)</p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <Button
              variant="outline"
              size="lg"
              isClassroomMode={isClassroomMode}
              onClick={onExit}
              leftIcon={<ArrowLeft className="w-5 h-5" />}
            >
              Back to Games
            </Button>

            <Button
              variant="primary"
              size="lg"
              isClassroomMode={isClassroomMode}
              onClick={() => setScreen('playing')}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="px-8"
            >
              Start Laboratory
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 2: PLAYING
  // --------------------------------------------------------------------------
  if (screen === 'playing') {
    const isCorrect = selectedType === currentItem.correctType;
    const progressPercent = Math.round(((currentIndex + 1) / totalItems) * 100);

    return (
      <div className="w-full max-w-3xl mx-auto space-y-5 animate-fadeIn">
        {/* HUD Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                isClassroomMode={isClassroomMode}
                onClick={onExit}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Exit
              </Button>
              <div className="text-xs font-bold text-slate-600">
                Stage {currentItem.stage} of 3 · Inquiry {currentIndex + 1} of {totalItems}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Points:</span>
                <span className="font-bold text-slate-900">{totalPoints}</span>
              </div>

              {streak > 1 && (
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-800 font-semibold animate-pulse">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{streak} Streak!</span>
                </div>
              )}
            </div>
          </div>

          <ProgressBar
            value={progressPercent}
            color="bg-cyan-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Case Dossier Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Laboratory Investigation
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {/* Context Situation */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-600" />
              <span>Research Context & Setup:</span>
            </div>
            <p>{currentItem.scenarioContext}</p>
          </div>

          {/* Explicit Research Goal */}
          <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5 text-xs sm:text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-900 block">
              Explicit Research Goal:
            </span>
            <p className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
              "{currentItem.researchGoal}"
            </p>
          </div>

          {/* Question Prompt */}
          <div className="space-y-2 pt-1">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
              Classification Prompt:
            </div>
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              Based on its primary motivation and intended outcome, is this investigation Basic Research or Applied Research?
            </p>
          </div>

          {/* Two Interactive Classification Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {currentItem.options.map((opt) => {
              const isSelected = selectedType === opt.type;
              const isCorrectType = isSubmitted && opt.type === currentItem.correctType;
              const isWrongType = isSubmitted && isSelected && opt.type !== currentItem.correctType;

              let cardStyle = 'border-slate-200 hover:border-cyan-400 bg-white hover:bg-slate-50/50';
              if (isSelected && !isSubmitted) {
                cardStyle = 'border-cyan-600 bg-cyan-50/50 ring-2 ring-cyan-200';
              } else if (isCorrectType) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
              } else if (isWrongType) {
                cardStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              }

              return (
                <button
                  key={opt.type}
                  onClick={() => {
                    if (!isSubmitted) setSelectedType(opt.type);
                  }}
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[120px] ${cardStyle}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                      {opt.type === 'basic' ? (
                        <FlaskConical className="w-4 h-4 text-cyan-600" />
                      ) : (
                        <Wrench className="w-4 h-4 text-amber-600" />
                      )}
                      <span>{opt.label}</span>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                        isSelected && !isSubmitted
                          ? 'border-cyan-600 bg-cyan-600 text-white'
                          : isCorrectType
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : isWrongType
                          ? 'border-rose-600 bg-rose-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isCorrectType && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      {isWrongType && <AlertCircle className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {opt.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Action Submission */}
          {!isSubmitted ? (
            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="lg"
                isClassroomMode={isClassroomMode}
                onClick={handleSubmit}
                disabled={!selectedType}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Confirm Classification
              </Button>
            </div>
          ) : (
            /* Educational Feedback */
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div
                className={`p-5 rounded-2xl border ${
                  isCorrect
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/70 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                  )}

                  <div className="space-y-2">
                    <div className="font-bold text-base">
                      {isCorrect ? 'Accurate Classification!' : 'Methodological Misalignment'}
                    </div>

                    <p className="text-sm leading-relaxed text-slate-800">
                      {currentItem.explanation}
                    </p>

                    <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                      <span className="font-bold text-slate-800">Key Distinction: </span>
                      {currentItem.keyDistinction}
                    </div>

                    {currentItem.misconceptionAlert && (
                      <div className="mt-3 p-3 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-amber-800">
                          <HelpCircle className="w-4 h-4 text-amber-600" />
                          <span>{currentItem.misconceptionAlert.label}</span>
                        </div>
                        <p>{currentItem.misconceptionAlert.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="primary"
                  size="lg"
                  isClassroomMode={isClassroomMode}
                  onClick={handleNext}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto px-8"
                >
                  {currentIndex + 1 === totalItems ? 'View Laboratory Results' : 'Next Investigation'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 3: RESULTS
  // --------------------------------------------------------------------------
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 text-center">
        <div className="w-16 h-16 bg-cyan-100 text-cyan-700 rounded-3xl flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Unit 2 Investigation Complete
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Basic vs Applied Laboratory Certified
          </h2>
          <p className="text-sm text-slate-600">
            You successfully evaluated all 11 scientific inquiry briefs across foundational, borderline, and translational stages.
          </p>
        </div>

        {/* Scorecard */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div>
            <div className="text-2xl font-black text-cyan-700">{totalPoints}</div>
            <div className="text-xs text-slate-500">Points (Max: {MAX_POSSIBLE_SCORE})</div>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800">{accuracy}%</div>
            <div className="text-xs text-slate-500">Accuracy ({totalCorrect}/{totalItems})</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-600">{maxStreak}</div>
            <div className="text-xs text-slate-500">Best Streak</div>
          </div>
        </div>

        {/* Stage Performance Breakdown */}
        <div className="space-y-2 text-left pt-2 border-t border-slate-100">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Stage Diagnostic Breakdown:
          </div>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 1: Foundational Distinction</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 2: Nuanced & Borderline Cases</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 3: The Translational Bridge</span>
              <span className="font-bold text-slate-900">{stageScores[3].correct}/3 correct</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 pt-3">
          <Button
            variant="outline"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={handleRestart}
            leftIcon={<RotateCcw className="w-5 h-5" />}
          >
            Replay Lab
          </Button>

          <Button
            variant="primary"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Exit to Unit 2 Games
          </Button>
        </div>
      </div>
    </div>
  );
};
