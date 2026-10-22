/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 3: STATS SLEUTH (CANONICAL MICRO-GAME g3-1)
 * ============================================================================
 * Academic Source: Textbook Section 3.2 (pp. 44–50)
 * Target Concept: Descriptive Statistics, Skewness, & Outlier Impact
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  HelpCircle,
  Compass,
  Check,
  TrendingUp,
  BarChart
} from 'lucide-react';
import { G3_1_CHALLENGES, StatsSleuthItem } from '../../../data/games/unit3MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface StatsSleuthProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const StatsSleuth: React.FC<StatsSleuthProps> = ({
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

  const totalItems = G3_1_CHALLENGES.length; // 11 items
  const currentItem: StatsSleuthItem = G3_1_CHALLENGES[currentIndex];

  // Scoring constants
  // 11 items * 100 base = 1100.
  // Streak bonuses: 0 + 20 + 40 + 60 + 80 + 100 + 100 + 100 + 100 + 100 + 100 = 800 max streak bonus.
  const MAX_BASE_SCORE = 1100;
  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;
    setIsSubmitted(true);

    const chosen = currentItem.options.find((o) => o.id === selectedOptionId);
    const isCorrect = chosen ? chosen.isCorrect : false;

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
      storageService.saveGameScore(3, 'g3-1', totalPoints);
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
          <div className="flex items-center gap-3 text-blue-700">
            <div className="p-3 bg-blue-100 rounded-2xl">
              <Calculator className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 3 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Stats Sleuth: Descriptive Statistics & Skewness
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A real data sleuth doesn't just calculate numbers blindly. They investigate distributions, detect distorting outliers, and determine whether the <strong>Mean, Median, or Mode</strong> tells the most honest statistical truth:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1.5">
              <div className="font-bold text-blue-900 flex items-center gap-1.5">
                <BarChart className="w-4 h-4 text-blue-600" />
                <span>The Mean</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                The arithmetic average. Balances all points, but is extremely vulnerable to being pulled by high or low outliers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span>The Median</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                The exact middle point when sorted. Completely resistant to outliers; the most truthful measure for skewed data.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standard Deviation</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Measures dispersion (spread) around the mean. Low SD = high consistency; High SD = wide inequality.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800">Sleuth Investigation Stages:</div>
            <p>• Stage 1: Central Tendency Detective — Calculating and interpreting Mean, Median, and Mode</p>
            <p>• Stage 2: Outlier & Skewness Crime Scene — Diagnosing positive/negative skew and distorted averages</p>
            <p>• Stage 3: Standard Deviation & Spread — Evaluating predictability, consistency, and risk</p>
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
              Start Investigation
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
                Stage {currentItem.stage} of 3 · Sleuth Case {currentIndex + 1} of {totalItems}
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
            color="bg-blue-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Sleuth Evidence Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Statistical Investigation Stage {currentItem.stage}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {/* Context Situation */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>Observed Research Scenario:</span>
            </div>
            <p>{currentItem.datasetContext}</p>
          </div>

          {/* Dataset Evidence Box */}
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
              Empirical Data Record:
            </span>
            <div className="font-mono font-bold text-slate-900 text-sm sm:text-base bg-white p-3 rounded-xl border border-blue-100">
              {currentItem.datasetLabel}
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-1 pt-1">
            <div className="text-xs uppercase font-bold tracking-wider text-blue-900">
              Detective Inquiry:
            </div>
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              {currentItem.taskPrompt}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-1">
            {currentItem.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrectOpt = isSubmitted && opt.isCorrect;
              const isWrongOpt = isSubmitted && isSelected && !opt.isCorrect;

              let cardStyle = 'border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50/50';
              if (isSelected && !isSubmitted) {
                cardStyle = 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-200';
              } else if (isCorrectOpt) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
              } else if (isWrongOpt) {
                cardStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    if (!isSubmitted) setSelectedOptionId(opt.id);
                  }}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 min-h-[56px] ${cardStyle}`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border mt-0.5 shrink-0 flex items-center justify-center ${
                      isSelected && !isSubmitted
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : isCorrectOpt
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : isWrongOpt
                        ? 'border-rose-600 bg-rose-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isCorrectOpt && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    {isWrongOpt && <AlertCircle className="w-3.5 h-3.5" />}
                    {isSelected && !isSubmitted && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>

                  <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {opt.text}
                  </span>
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
                disabled={!selectedOptionId}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Confirm Analysis
              </Button>
            </div>
          ) : (
            /* Educational Feedback */
            <div className="space-y-4 pt-2 animate-fadeIn">
              {(() => {
                const chosen = currentItem.options.find((o) => o.id === selectedOptionId);
                const isCorrect = chosen ? chosen.isCorrect : false;

                return (
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
                          {isCorrect ? 'Statistical Proof Verified!' : 'Statistical Misinterpretation'}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-800">
                          {chosen?.feedback}
                        </p>

                        <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                          <span className="font-bold text-slate-800">Core Sleuth Lesson: </span>
                          {currentItem.pedagogicalKey}
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
                );
              })()}

              <div className="flex justify-end">
                <Button
                  variant="primary"
                  size="lg"
                  isClassroomMode={isClassroomMode}
                  onClick={handleNext}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto px-8"
                >
                  {currentIndex + 1 === totalItems ? 'Complete Statistical Audit' : 'Next Sleuth Case'}
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
        <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-3xl flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8 text-blue-600" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Unit 3 Statistics Mastered
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Stats Sleuth Certified
          </h2>
          <p className="text-sm text-slate-600">
            You successfully audited central tendencies, diagnosed skewed distributions, resisted outlier traps, and interpreted standard deviations.
          </p>
        </div>

        {/* Scorecard */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div>
            <div className="text-2xl font-black text-blue-700">{totalPoints}</div>
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
              <span>Stage 1: Central Tendency Detective</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 2: Outliers & Skewness</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 3: Standard Deviation & Spread</span>
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
            Replay Sleuth
          </Button>

          <Button
            variant="primary"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Exit to Unit 3 Games
          </Button>
        </div>
      </div>
    </div>
  );
};
