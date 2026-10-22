/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 4: SYNTHESIS METHOD MATRIX (CANONICAL MICRO-GAME g4-2)
 * ============================================================================
 * Academic Source: Textbook Section 4.3 & 4.4 (pp. 66–74)
 * Target Concept: Synthesis Methodologies (Narrative, Meta-Analysis, Thematic)
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Grid,
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
  Binary,
  FileText,
  MessageSquare,
  Search
} from 'lucide-react';
import {
  G4_2_CHALLENGES,
  SynthesisMethodItem,
  SynthesisMethodType
} from '../../../data/games/unit4MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface SynthesisMethodMatrixProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const SynthesisMethodMatrix: React.FC<SynthesisMethodMatrixProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState<SynthesisMethodType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G4_2_CHALLENGES.length; // 11 items
  const currentItem: SynthesisMethodItem = G4_2_CHALLENGES[currentIndex];

  // Scoring constants
  // 11 items * 100 base = 1100.
  // Streak bonuses: 0 + 20 + 40 + 60 + 80 + 100 + 100 + 100 + 100 + 100 + 100 = 800 max streak bonus.
  const MAX_BASE_SCORE = 1100;
  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedMethod || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedMethod === currentItem.correctMethod;

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
    setSelectedMethod(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(4, 'g4-2', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedMethod(null);
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
              <Grid className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 4 Micro-Game 2
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Synthesis Method Matrix
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Different research evidence pools require different synthesis methodologies. Your goal is to evaluate evidence characteristics and select the optimal synthesis strategy:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
              <div className="font-bold text-blue-900 flex items-center gap-1.5">
                <Binary className="w-4 h-4 text-blue-600" />
                <span>Meta-Analysis</span>
              </div>
              <p className="text-slate-600">Mathematically pools effect sizes across homogeneous quantitative trials.</p>
            </div>

            <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200 space-y-1">
              <div className="font-bold text-teal-900 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-teal-600" />
                <span>Thematic Synthesis</span>
              </div>
              <p className="text-slate-600">Translates qualitative codes and concepts across interview studies.</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Narrative Synthesis</span>
              </div>
              <p className="text-slate-600">Weaves diverse, heterogeneous mixed-methods evidence into structured text.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800">Matrix Evaluation Stages:</div>
            <p>• Stage 1: Evidence Characteristic Matching — Aligning data homogeneity to synthesis method</p>
            <p>• Stage 2: Synthesis Trade-Offs & Pitfalls — "Garbage in garbage out", publication bias, and heterogeneity</p>
            <p>• Stage 3: Real-World Case Synthesis — Telemedicine, vaccine trials, and customary forest conservation</p>
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
              Open Method Matrix
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
    const isCorrect = selectedMethod === currentItem.correctMethod;
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
            color="bg-cyan-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Dossier Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Synthesis Methodology Stage {currentItem.stage}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {/* Evidence Pool Setup */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-600" />
              <span>Evidence Pool Characteristics:</span>
            </div>
            <p>{currentItem.evidencePoolContext}</p>
          </div>

          {/* Data Type & Homogeneity */}
          <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1 text-xs sm:text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-900 block">
              Data Properties & Homogeneity:
            </span>
            <p className="font-semibold text-slate-900 text-sm leading-snug">
              {currentItem.dataTypeAndHomogeneity}
            </p>
          </div>

          {/* Research Goal */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1 text-xs sm:text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
              Synthesis Objective:
            </span>
            <p className="font-semibold text-slate-900 text-sm leading-snug">
              "{currentItem.researchGoal}"
            </p>
          </div>

          {/* Prompt */}
          <div className="space-y-1 pt-1">
            <div className="text-xs uppercase font-bold tracking-wider text-cyan-900">
              Method Matrix Triage:
            </div>
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              Which synthesis methodology must be applied to this specific evidence pool?
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-1">
            {currentItem.options.map((opt) => {
              const isSelected = selectedMethod === opt.method;
              const isCorrectMethod = isSubmitted && opt.method === currentItem.correctMethod;
              const isWrongMethod = isSubmitted && isSelected && opt.method !== currentItem.correctMethod;

              let cardStyle = 'border-slate-200 hover:border-cyan-400 bg-white hover:bg-slate-50/50';
              if (isSelected && !isSubmitted) {
                cardStyle = 'border-cyan-600 bg-cyan-50/50 ring-2 ring-cyan-200';
              } else if (isCorrectMethod) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
              } else if (isWrongMethod) {
                cardStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              }

              return (
                <button
                  key={opt.method}
                  onClick={() => {
                    if (!isSubmitted) setSelectedMethod(opt.method);
                  }}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 min-h-[56px] ${cardStyle}`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border mt-0.5 shrink-0 flex items-center justify-center ${
                      isSelected && !isSubmitted
                        ? 'border-cyan-600 bg-cyan-600 text-white'
                        : isCorrectMethod
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : isWrongMethod
                        ? 'border-rose-600 bg-rose-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isCorrectMethod && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    {isWrongMethod && <AlertCircle className="w-3.5 h-3.5" />}
                    {isSelected && !isSubmitted && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 text-sm sm:text-base">
                      {opt.label}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {opt.description}
                    </p>
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
                disabled={!selectedMethod}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Ratify Synthesis Method
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
                      {isCorrect ? 'Methodological Synthesis Validated!' : 'Synthesis Strategy Mismatch'}
                    </div>

                    <p className="text-sm leading-relaxed text-slate-800">
                      {currentItem.explanation}
                    </p>

                    <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                      <span className="font-bold text-slate-800">Core Matrix Principle: </span>
                      {currentItem.pedagogicalKey}
                    </div>

                    {currentItem.whyAlternativesFail && (
                      <div className="text-xs text-slate-600 pt-0.5">
                        <span className="font-bold text-rose-700">Why alternatives fail: </span>
                        {currentItem.whyAlternativesFail}
                      </div>
                    )}

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
                  {currentIndex + 1 === totalItems ? 'Complete Method Matrix' : 'Next Evidence Dossier'}
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
            Unit 4 Synthesis Methodology Mastered
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Synthesis Method Matrix Certified
          </h2>
          <p className="text-sm text-slate-600">
            You successfully triaged diverse research evidence pools into Meta-Analysis, Thematic Synthesis, Narrative Synthesis, and Systematic Review protocols.
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
              <span>Stage 1: Evidence Characteristic Matching</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 2: Synthesis Trade-Offs & Pitfalls</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct}/4 correct</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50">
              <span>Stage 3: Real-World Case Synthesis</span>
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
            Replay Matrix
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
