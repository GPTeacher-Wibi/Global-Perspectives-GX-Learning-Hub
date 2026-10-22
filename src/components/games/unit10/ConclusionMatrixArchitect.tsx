/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10: CONCLUSION MATRIX ARCHITECT (CANONICAL MICRO-GAME g10-1)
 * ============================================================================
 * Academic Source: Textbook Section 10.3 & 10.5 (pp. 136–143)
 * Target Concept: The 5-Step Conclusion Builder Matrix & 4 Fatal Conclusion Defects
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  LayoutGrid,
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
  AlertTriangle,
  FileSpreadsheet
} from 'lucide-react';
import {
  G10_1_CHALLENGES,
  ConclusionMatrixItem
} from '../../../data/games/unit10MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface ConclusionMatrixArchitectProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const ConclusionMatrixArchitect: React.FC<ConclusionMatrixArchitectProps> = ({
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

  const totalItems = G10_1_CHALLENGES.length; // 11 items
  const currentItem: ConclusionMatrixItem = G10_1_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;
    setIsSubmitted(true);

    const chosen = currentItem.options.find((o) => o.id === selectedOptionId);
    const isCorrect = chosen ? chosen.isCorrectDiagnosisOrRepair : false;

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
      storageService.saveGameScore(10, 'g10-1', totalPoints);
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
          <div className="flex items-center gap-3 text-sky-700">
            <div className="p-3 bg-sky-100 rounded-2xl">
              <LayoutGrid className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 10 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Conclusion Matrix Architect
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A conclusion is not a casual repetition of earlier paragraphs; it is the evidence-based answer to your research inquiry. Master the 5-Step Conclusion Builder Matrix:
          </p>

          <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-900 block">
              The 5 Matrix Steps
            </span>
            <ol className="text-xs text-sky-900 space-y-1.5 list-decimal list-inside font-medium">
              <li><strong>State Research Question & Hypothesis:</strong> Re-anchor the reader to the central puzzle.</li>
              <li><strong>Synthesize Evidence:</strong> Triangulate primary student data with secondary sources.</li>
              <li><strong>Evaluate Validity:</strong> Test internal causal rigor and external generalisability boundaries.</li>
              <li><strong>Formulate Nuanced Answer:</strong> Answer with scholarly modality and hedging.</li>
              <li><strong>Limitations & Recommendations:</strong> Specify actionable steps and honest boundaries.</li>
            </ol>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-1 text-left text-xs text-amber-900">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Watch out for the 4 Fatal Defects:</span>
            </div>
            <p>
              (1) Sudden Miracle Fact, (2) Mechanical Copy-Paste, (3) Overreaching Leap, and (4) Wishful Thinking Ending.
            </p>
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
              Build Matrices
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
          <div className="inline-flex p-4 bg-sky-100 text-sky-700 rounded-3xl">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Conclusion Architecture Mastered!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You synthesized findings across all 5 matrix steps, eliminated fatal defects, and crafted defensible conclusions.
            </p>
          </div>

          {/* Score Badges */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Total Points</span>
              <span className="text-2xl sm:text-3xl font-black text-sky-700">{totalPoints}</span>
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
                <span className="text-slate-500 block">Stage 1: Component Mapping</span>
                <span className="font-bold text-slate-800">
                  {stageScores[1].correct} / {stageScores[1].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 2: Defect Diagnostics</span>
                <span className="font-bold text-slate-800">
                  {stageScores[2].correct} / {stageScores[2].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 3: Matrix Assembly</span>
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
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-sky-50 text-sky-700 rounded-md">
            Stage {currentItem.stage}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1 text-sky-700">
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

      {/* Main Matrix Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
            {currentItem.projectTopic}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            RQ: {currentItem.researchQuestion}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            <strong>Initial Hypothesis:</strong> {currentItem.initialHypothesis}
          </p>
        </div>

        {/* Draft Excerpt */}
        <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-sky-800">
              Student Draft Excerpt Under Audit
            </span>
            <FileSpreadsheet className="w-4 h-4 text-sky-600" />
          </div>
          <p className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed italic">
            {currentItem.draftExcerpt}
          </p>
        </div>

        {/* Diagnostic Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Evaluate or repair this excerpt using the Conclusion Builder Matrix:
          </span>

          <div className="space-y-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.isCorrectDiagnosisOrRepair;

              let btnStyle = 'bg-white border-slate-200 hover:border-sky-300 hover:bg-slate-50 text-slate-800';

              if (isSelected && !isSubmitted) {
                btnStyle = 'bg-sky-50 border-sky-600 text-sky-900 ring-2 ring-sky-500/20';
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
              currentItem.options.find(o => o.id === selectedOptionId)?.isCorrectDiagnosisOrRepair
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {currentItem.options.find(o => o.id === selectedOptionId)?.isCorrectDiagnosisOrRepair ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Accurate Matrix Evaluation!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>Evaluation Missed.</span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {currentItem.options.find(o => o.id === selectedOptionId)?.analysisNote}
            </p>

            <div className="pt-2 border-t border-current/15 text-xs space-y-1">
              <div className="flex items-center gap-1 font-semibold text-sky-900">
                <span>Matrix Alignment:</span>
                <span className="font-normal">{currentItem.matrixAlignment.stepName} — {currentItem.matrixAlignment.scholarlyRole}</span>
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
              Verify Matrix
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
