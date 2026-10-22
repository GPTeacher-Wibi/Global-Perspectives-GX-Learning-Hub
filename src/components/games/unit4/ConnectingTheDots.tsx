/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 4: CONNECTING THE DOTS (CANONICAL MICRO-GAME g4-3)
 * ============================================================================
 * Academic Source: Textbook Section 4.4 & Unit 4 Capstone Skills (pp. 70–78)
 * Target Concept: Triangulation, Heterogeneity, & Synthesizing Conflicting Findings
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Share2,
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
  GitBranch,
  Layers,
  Scale
} from 'lucide-react';
import { G4_3_CHALLENGES, ConnectingDotsItem } from '../../../data/games/unit4MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface ConnectingTheDotsProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const ConnectingTheDots: React.FC<ConnectingTheDotsProps> = ({
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

  const totalItems = G4_3_CHALLENGES.length; // 11 items
  const currentItem: ConnectingDotsItem = G4_3_CHALLENGES[currentIndex];

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
      storageService.saveGameScore(4, 'g4-3', totalPoints);
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
              <Share2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 4 Micro-Game 3
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Connecting the Dots: Triangulation & Heterogeneity
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In authentic research, studies often seem to contradict each other. A master researcher doesn't pick one "favorite" study — they investigate <strong>heterogeneity</strong> (why studies differ) and apply <strong>triangulation</strong> to build an integrated synthesis:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
              <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>Understanding Heterogeneity</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Differences between studies are NOT flaws. They stem from different participant demographics, durations, operational definitions, or cultural contexts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-emerald-600" />
                <span>Methodological Triangulation</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Combining quantitative measurements, qualitative lived experiences, and policy constraints to build multi-dimensional, resilient conclusions.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800">Bridge-Building Stages:</div>
            <p>• Stage 1: Convergence & Divergence Mapping — Identifying where independent studies agree and conflict</p>
            <p>• Stage 2: Heterogeneity Diagnosis — Diagnosing sample baselines, operational definitions, and novelty effects</p>
            <p>• Stage 3: Triangulated Synthesis Matrix — Crafting master synthesis statements that unite conflicting evidence</p>
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
              Connect the Dots
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
                Stage {currentItem.stage} of 3 · Dossier {currentIndex + 1} of {totalItems}
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
            color="bg-indigo-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Evidence Dossier Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Evidence Triangulation Stage {currentItem.stage}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {/* Controversy Overview */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-slate-900">Research Inquiry Dilemma: </span>
            {currentItem.controversyTopic}
          </div>

          {/* Multi-Study Comparative Evidence Matrix */}
          <div className="space-y-2.5">
            <div className="text-xs uppercase font-bold tracking-wider text-indigo-900">
              Comparative Multi-Source Evidence Pool:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Study A Card */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                <div className="font-bold text-blue-900">{currentItem.studyA.source}</div>
                <div className="text-slate-500 font-mono text-[11px]">Method: {currentItem.studyA.method}</div>
                <p className="text-slate-800 font-medium pt-1">"{currentItem.studyA.finding}"</p>
              </div>

              {/* Study B Card */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                <div className="font-bold text-amber-900">{currentItem.studyB.source}</div>
                <div className="text-slate-500 font-mono text-[11px]">Method: {currentItem.studyB.method}</div>
                <p className="text-slate-800 font-medium pt-1">"{currentItem.studyB.finding}"</p>
              </div>

              {/* Study C Card if present */}
              {currentItem.studyC && (
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1 sm:col-span-2">
                  <div className="font-bold text-emerald-900">{currentItem.studyC.source}</div>
                  <div className="text-slate-500 font-mono text-[11px]">Method: {currentItem.studyC.method}</div>
                  <p className="text-slate-800 font-medium pt-1">"{currentItem.studyC.finding}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-1 pt-1">
            <div className="text-xs uppercase font-bold tracking-wider text-indigo-900">
              Synthesis Task:
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
                Synthesize Findings
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
                          {isCorrect ? 'Synthesized Bridge Established!' : 'Synthesis Integration Flaw'}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-800">
                          {chosen?.feedback}
                        </p>

                        <div className="text-xs text-slate-700 bg-white/70 p-3 rounded-xl border border-slate-200 space-y-1">
                          {currentItem.heterogeneityReason && (
                            <div>
                              <strong>Heterogeneity Root Cause: </strong>
                              {currentItem.heterogeneityReason}
                            </div>
                          )}
                          <div>
                            <strong>Synthesized Consensus: </strong>
                            {currentItem.synthesisResolution}
                          </div>
                        </div>

                        <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                          <span className="font-bold text-slate-800">Core Synthesis Principle: </span>
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
                  {currentIndex + 1 === totalItems ? 'View Synthesis Mastery' : 'Next Evidence Dossier'}
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
            Unit 4 Evidence Synthesis Mastered
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Connecting the Dots Certified
          </h2>
          <p className="text-sm text-slate-600">
            You successfully navigated divergent findings, diagnosed contextual heterogeneity, and synthesized conflicting evidence into balanced conclusions.
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
              <span>Stage 1: Convergence & Divergence Mapping</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 2: Heterogeneity Diagnosis</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 3: Triangulated Synthesis Matrix</span>
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
            Replay Dossier
          </Button>

          <Button
            variant="primary"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Exit to Unit 4 Games
          </Button>
        </div>
      </div>
    </div>
  );
};
