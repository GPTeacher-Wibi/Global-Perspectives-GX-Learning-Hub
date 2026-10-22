/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 2: RESEARCH PIPELINE BUILDER (CANONICAL MICRO-GAME g2-2)
 * ============================================================================
 * Academic Source: Textbook Section 2.4 & 2.5 (pp. 31–38)
 * Target Concept: 8-Step Research Process & Methodological Dependencies
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
  HelpCircle,
  Compass,
  Check,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  G2_2_CHALLENGES,
  CANONICAL_RESEARCH_STEPS,
  PipelineChallengeItem
} from '../../../data/games/unit2MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface ResearchPipelineBuilderProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const ResearchPipelineBuilder: React.FC<ResearchPipelineBuilderProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPipelineGuide, setShowPipelineGuide] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G2_2_CHALLENGES.length; // 10 items
  const currentItem: PipelineChallengeItem = G2_2_CHALLENGES[currentIndex];

  // Scoring constants
  // 10 items * 100 base = 1000.
  // Streak bonuses: 0 + 20 + 40 + 60 + 80 + 100 + 100 + 100 + 100 + 100 = 700 max streak bonus.
  const MAX_BASE_SCORE = 1000;
  const MAX_POSSIBLE_SCORE = 1700;

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;
    setIsSubmitted(true);

    const chosenOpt = currentItem.options.find((o) => o.id === selectedOptionId);
    const isCorrect = chosenOpt ? chosenOpt.isCorrect : false;

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
      storageService.saveGameScore(2, 'g2-2', totalPoints);
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
          <div className="flex items-center gap-3 text-indigo-700">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 2 Micro-Game 2
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Research Pipeline Builder
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Research is not a chaotic scavenger hunt — it is a disciplined, <strong>8-step cumulative lifecycle</strong>. Each stage creates the vital foundation required for the next stage to succeed:
          </p>

          {/* 8-Step Pipeline Overview */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="font-bold text-xs uppercase tracking-wider text-slate-700">
              The 8-Step Cambridge Research Lifecycle:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {CANONICAL_RESEARCH_STEPS.map((step) => (
                <div key={step.key} className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="font-bold text-indigo-900">{step.label}</div>
                  <div className="text-slate-500 text-[11px] line-clamp-2 mt-0.5">{step.shortDesc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 space-y-1">
            <div className="font-bold">Investigation Missions:</div>
            <p>• Stage 1: Pipeline Diagnostics — Identify missing prerequisite stages that caused flawed data</p>
            <p>• Stage 2: Stage Dependencies — Explain why earlier steps strictly dictate later tools</p>
            <p>• Stage 3: Complete Lifecycle Audits — Guide full-scale student investigations from curiosity to conclusion</p>
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
              Enter Pipeline Lab
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
                Stage {currentItem.stage} of 3 · Challenge {currentIndex + 1} of {totalItems}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <button
                onClick={() => setShowPipelineGuide(!showPipelineGuide)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold hover:bg-indigo-100 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>8 Steps Guide</span>
                {showPipelineGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

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

          {/* Collapsible 8 Steps Reference Drawer */}
          {showPipelineGuide && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 animate-fadeIn">
              <div className="font-bold text-slate-800">Reference: The 8-Step Research Process</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CANONICAL_RESEARCH_STEPS.map((s) => (
                  <div key={s.key} className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-indigo-700 block">{s.label}</span>
                    <span className="text-slate-500 text-[11px] leading-tight block mt-0.5">{s.shortDesc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ProgressBar
            value={progressPercent}
            color="bg-indigo-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Challenge Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Pipeline Stage {currentItem.stage} Diagnostic
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {/* Research Context */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>Observed Research Scenario:</span>
            </div>
            <p>{currentItem.researchContext}</p>
          </div>

          {/* Flaw or Challenge Description */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1 text-xs sm:text-sm text-amber-950">
            <span className="font-bold text-amber-900 block">The Pipeline Breakdown:</span>
            <p>{currentItem.flawOrChallengeDescription}</p>
          </div>

          {/* Prompt Question */}
          <div className="space-y-2 pt-1">
            <div className="text-xs uppercase font-bold tracking-wider text-indigo-800">
              Diagnostic Prompt:
            </div>
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              {currentItem.promptQuestion}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-3 pt-1">
            {currentItem.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrectOpt = isSubmitted && opt.isCorrect;
              const isWrongOpt = isSubmitted && isSelected && !opt.isCorrect;

              let cardStyle = 'border-slate-200 hover:border-indigo-400 bg-white hover:bg-slate-50/50';
              if (isSelected && !isSubmitted) {
                cardStyle = 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-200';
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
                        ? 'border-indigo-600 bg-indigo-600 text-white'
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
                Confirm Diagnostic
              </Button>
            </div>
          ) : (
            /* Consequence & Educational Feedback */
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
                          {isCorrect ? 'Pipeline Aligned!' : 'Process Sequencing Error'}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-800">
                          {chosen?.feedback}
                        </p>

                        <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                          <span className="font-bold text-slate-700">Core Lesson: </span>
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
                  {currentIndex + 1 === totalItems ? 'Complete Pipeline Audit' : 'Next Diagnostic'}
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
        <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-3xl flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8 text-indigo-600" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Unit 2 Pipeline Mastered
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Research Lifecycle Certified
          </h2>
          <p className="text-sm text-slate-600">
            You successfully audited the 8-step research lifecycle, rectified prerequisite breakdowns, and validated methodological dependencies.
          </p>
        </div>

        {/* Scorecard */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div>
            <div className="text-2xl font-black text-indigo-700">{totalPoints}</div>
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
              <span>Stage 1: Pipeline Diagnostics (Missing Steps)</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 2: Sequence Dependencies (Why Step X before Y)</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 3: Complete Lifecycle Audits</span>
              <span className="font-bold text-slate-900">{stageScores[3].correct}/2 correct</span>
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
            Replay Builder
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
