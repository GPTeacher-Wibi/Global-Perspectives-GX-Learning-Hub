/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 3: CHART SELECTOR SHOWDOWN (CANONICAL MICRO-GAME g3-2)
 * ============================================================================
 * Academic Source: Textbook Section 3.3 (pp. 50–58)
 * Target Concept: Data Visualization Fit & Chart Selection
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  PieChart as PieIcon,
  BarChart2,
  TrendingUp,
  ScatterChart as ScatterIcon,
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
import { G3_2_CHALLENGES, ChartSelectorItem, ChartType } from '../../../data/games/unit3MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface ChartSelectorShowdownProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const ChartSelectorShowdown: React.FC<ChartSelectorShowdownProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G3_2_CHALLENGES.length; // 11 items
  const currentItem: ChartSelectorItem = G3_2_CHALLENGES[currentIndex];

  // Scoring constants
  // 11 items * 100 base = 1100.
  // Streak bonuses: 0 + 20 + 40 + 60 + 80 + 100 + 100 + 100 + 100 + 100 + 100 = 800 max streak bonus.
  const MAX_BASE_SCORE = 1100;
  const MAX_POSSIBLE_SCORE = 1900;

  // Determine correctness for an option
  const checkOptionCorrect = (opt: any): boolean => {
    if (typeof opt.isCorrect === 'boolean') return opt.isCorrect;
    if (opt.type && currentItem.correctChart) return opt.type === currentItem.correctChart;
    return false;
  };

  const handleSubmit = () => {
    if (!selectedKey || isSubmitted) return;
    setIsSubmitted(true);

    const chosen = currentItem.options.find((o) => (o.id || o.type) === selectedKey);
    const isCorrect = chosen ? checkOptionCorrect(chosen) : false;

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
    setSelectedKey(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(3, 'g3-2', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedKey(null);
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
              <BarChart2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 3 Micro-Game 2
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Chart Selector Showdown
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Data visualization is an exact science. Choosing the wrong chart can distort evidence, mislead stakeholders, or completely destroy your research findings:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1">
              <span className="font-bold text-purple-900 block">Bar Chart</span>
              <span className="text-slate-600">Discrete categorical groups</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
              <span className="font-bold text-blue-900 block">Line Graph</span>
              <span className="text-slate-600">Continuous time-series trends</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">Scatter Plot</span>
              <span className="text-slate-600">Testing correlation (X vs. Y)</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block">Box Plot</span>
              <span className="text-slate-600">Distributions & outliers</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800">Showdown Rounds:</div>
            <p>• Stage 1: Data-to-Visualization Fit — Matching research goals to chart geometry</p>
            <p>• Stage 2: Rejecting Deceptive Charts — Exposing truncated axes, rainbow pie wheels, and fake continuity</p>
            <p>• Stage 3: Visual Synthesis & Decision — Interpreting scatter plots, histograms, and multi-line trajectories</p>
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
              Enter Chart Showdown
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
                Stage {currentItem.stage} of 3 · Showdown {currentIndex + 1} of {totalItems}
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
            color="bg-purple-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Challenge Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Visualization Arena Stage {currentItem.stage}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {/* Research Goal */}
          <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1 text-xs sm:text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-900 block">
              Inquiry Goal:
            </span>
            <p className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
              {currentItem.researchGoal}
            </p>
          </div>

          {/* Data Characteristics & Sample */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div>
              <span className="font-bold text-slate-900">Data Characteristics: </span>
              {currentItem.dataCharacteristics}
            </div>
            <div className="font-mono text-xs bg-white p-2.5 rounded-xl border border-slate-200 text-slate-800">
              {currentItem.sampleDataTable}
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-1 pt-1">
            <div className="text-xs uppercase font-bold tracking-wider text-purple-900">
              Visual Strategy Decision:
            </div>
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              Which visualization format or design principle should be applied?
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-1">
            {currentItem.options.map((opt) => {
              const optKey = opt.id || (opt.type as string);
              const isSelected = selectedKey === optKey;
              const isCorrectOpt = isSubmitted && checkOptionCorrect(opt);
              const isWrongOpt = isSubmitted && isSelected && !checkOptionCorrect(opt);

              let cardStyle = 'border-slate-200 hover:border-purple-400 bg-white hover:bg-slate-50/50';
              if (isSelected && !isSubmitted) {
                cardStyle = 'border-purple-600 bg-purple-50/50 ring-2 ring-purple-200';
              } else if (isCorrectOpt) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
              } else if (isWrongOpt) {
                cardStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              }

              return (
                <button
                  key={optKey}
                  onClick={() => {
                    if (!isSubmitted) setSelectedKey(optKey);
                  }}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 min-h-[56px] ${cardStyle}`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border mt-0.5 shrink-0 flex items-center justify-center ${
                      isSelected && !isSubmitted
                        ? 'border-purple-600 bg-purple-600 text-white'
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

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 text-sm sm:text-base">
                      {opt.label || opt.text}
                    </div>
                    {opt.description && (
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {opt.description}
                      </p>
                    )}
                  </div>
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
                disabled={!selectedKey}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Ratify Visual Selection
              </Button>
            </div>
          ) : (
            /* Educational Feedback */
            <div className="space-y-4 pt-2 animate-fadeIn">
              {(() => {
                const chosen = currentItem.options.find((o) => (o.id || o.type) === selectedKey);
                const isCorrect = chosen ? checkOptionCorrect(chosen) : false;

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
                          {isCorrect ? 'Optimal Visualization Aligned!' : 'Visual Format Mismatch'}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-800">
                          {chosen?.feedback || currentItem.explanation}
                        </p>

                        <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                          <span className="font-bold text-slate-800">Visualization Principle: </span>
                          {currentItem.pedagogicalKey}
                        </div>

                        {currentItem.whyCompetitorsFail && (
                          <div className="text-xs text-slate-600 pt-0.5">
                            <span className="font-bold text-rose-700">Why alternatives fail: </span>
                            {currentItem.whyCompetitorsFail}
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
                  {currentIndex + 1 === totalItems ? 'Complete Chart Showdown' : 'Next Showdown Round'}
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
        <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-3xl flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8 text-purple-600" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Unit 3 Visual Literacy Mastered
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Chart Selector Certified
          </h2>
          <p className="text-sm text-slate-600">
            You successfully matched datasets to appropriate visualizations, rejected deceptive formatting, and interpreted complex graphs.
          </p>
        </div>

        {/* Scorecard */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div>
            <div className="text-2xl font-black text-purple-700">{totalPoints}</div>
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
              <span>Stage 1: Data-to-Visualization Fit</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 2: Rejecting Deceptive Charts</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 3: Visual Synthesis & Decision</span>
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
            Replay Showdown
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
