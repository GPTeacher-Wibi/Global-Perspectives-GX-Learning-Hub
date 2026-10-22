/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 6: SURVEY BUILDER MASTER (CANONICAL MICRO-GAME g6-2)
 * ============================================================================
 * Academic Source: Textbook Section 6.2 (pp. 82–85)
 * Target Concept: Survey Instrument Design & Psychometric Balance
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  FileText,
  Sliders,
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
  Layers
} from 'lucide-react';
import { G6_2_CHALLENGES, SurveyBuilderItem, SurveyDesignRule } from '../../../data/games/unit6MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface SurveyBuilderProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const SurveyBuilderMaster: React.FC<SurveyBuilderProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRule, setSelectedRule] = useState<SurveyDesignRule | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G6_2_CHALLENGES.length; // 11 items
  const currentItem: SurveyBuilderItem = G6_2_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedRule || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedRule === currentItem.identifiedFlaw;

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
    setSelectedRule(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(6, 'g6-2', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedRule(null);
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
              <Sliders className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 6 Micro-Game 2
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Survey Builder Master: Psychometric Architecture
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Constructing a questionnaire requires more than typing questions. Learn the architectural rules of <strong>symmetrical Likert scales</strong>, <strong>mutually exclusive options</strong>, <strong>neutral anchors</strong>, and <strong>pilot testing</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
              <h3 className="font-bold text-cyan-900 flex items-center gap-2 mb-1">
                <Sliders className="w-4 h-4 text-cyan-700" /> Symmetrical Balance
              </h3>
              <p className="text-cyan-800">
                Likert scales must mirror positive and negative choices equally around a neutral middle option to prevent artificial skewing.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-blue-700" /> Exhaustive & Mutually Exclusive
              </h3>
              <p className="text-blue-800">
                Options must never overlap (e.g. age bands 10-13, 14-17) and must provide an escape gate (&quot;Other: specify&quot;).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span>
              <strong>Scoring Benchmark:</strong> 11 instrument design audits across 3 stages. Earn +100 base per correct audit with streak bonuses.
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <Button variant="ghost" onClick={onExit} leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Catalog
            </Button>
            <Button
              variant="primary"
              onClick={() => setScreen('playing')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start Instrument Audit
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
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 text-center space-y-6">
          <div className="inline-flex p-4 rounded-full bg-cyan-100 text-cyan-700 mb-2">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Unit 6 Micro-Game Complete
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Instrument Architecture Certified!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You engineered balanced, fair questionnaires ready for reliable field research.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Score</span>
              <p className="text-2xl font-black text-cyan-600">{totalPoints}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Accuracy</span>
              <p className="text-2xl font-black text-slate-900">{accuracy}%</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Max Streak</span>
              <p className="text-2xl font-black text-blue-600">{maxStreak}x</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 max-w-md mx-auto border border-slate-200 text-left space-y-2 text-xs">
            <h4 className="font-bold text-slate-700 uppercase tracking-wider">Stage Breakdown:</h4>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 1: Likert Symmetry & Scaling</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct} / {stageScores[1].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 2: Instrument Flow & Gates</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct} / {stageScores[2].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 3: Synthesis & Gold Standards</span>
              <span className="font-bold text-slate-900">{stageScores[3].correct} / {stageScores[3].total}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Button variant="outline" onClick={handleRestart} leftIcon={<RotateCcw className="w-4 h-4" />}>
              Play Again
            </Button>
            <Button variant="primary" onClick={onExit} rightIcon={<ArrowRight className="w-4 h-4" />}>
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
  const stageLabels: Record<1 | 2 | 3, string> = {
    1: 'Stage 1: Likert Symmetry & Scaling',
    2: 'Stage 2: Instrument Flow & Gates',
    3: 'Stage 3: Synthesis & Gold Standards'
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-5 animate-fadeIn">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800">
              {stageLabels[currentItem.stage]}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Item {currentIndex + 1} of {totalItems}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="text-xs font-extrabold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200 animate-pulse">
                🔥 {streak}x Streak
              </span>
            )}
            <span className="text-sm font-black text-slate-900">
              {totalPoints} pts
            </span>
          </div>
        </div>

        <ProgressBar
          progress={((currentIndex + (isSubmitted ? 1 : 0)) / totalItems) * 100}
          height={6}
          color="bg-cyan-600"
        />
      </div>

      {/* Survey Draft Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-700">
            <FileText className="w-4 h-4" />
            <span>Research Topic: {currentItem.researchTopic}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900">
            {currentItem.title}
          </h2>
        </div>

        {/* Draft Scale / Item Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-1.5">
          <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> Draft Survey Item / Scale Architecture:
          </span>
          <pre className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line font-mono bg-white/70 p-3 rounded-xl border border-cyan-100">
            {currentItem.draftScaleOrItem}
          </pre>
        </div>

        {/* Diagnostic Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Architectural Audit: Which design flaw undermines this survey element?
          </span>

          <div className="grid grid-cols-1 gap-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedRule === opt.rule;
              let btnClass = 'border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/40 text-slate-700';

              if (isSelected) {
                btnClass = 'border-cyan-600 bg-cyan-50 text-cyan-900 ring-2 ring-cyan-600/20';
              }

              if (isSubmitted) {
                if (opt.rule === currentItem.identifiedFlaw) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.rule}
                  onClick={() => !isSubmitted && setSelectedRule(opt.rule)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-1 ${btnClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base">{opt.label}</span>
                    {isSubmitted && opt.rule === currentItem.identifiedFlaw && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                    {isSubmitted && isSelected && opt.rule !== currentItem.identifiedFlaw && (
                      <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">{opt.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-sm leading-relaxed space-y-2 animate-fadeIn ${
              selectedRule === currentItem.identifiedFlaw
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {selectedRule === currentItem.identifiedFlaw ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Correct Architectural Diagnosis!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>Audit Missed the Core Flaw</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm">{currentItem.explanation}</p>
            <div className="p-3 bg-white/80 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-1">
              <strong className="text-emerald-800 block">✨ Calibrated Design Benchmark:</strong>
              <div className="whitespace-pre-line font-mono">{currentItem.correctedDesign}</div>
            </div>
            <div className="pt-1 text-xs font-semibold opacity-90 border-t border-slate-200/50">
              💡 <strong>Key Takeaway:</strong> {currentItem.pedagogicalKey}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex justify-between items-center pt-2">
          <Button variant="ghost" size="sm" onClick={onExit} leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Exit
          </Button>

          {!isSubmitted ? (
            <Button
              variant="primary"
              disabled={!selectedRule}
              onClick={handleSubmit}
              rightIcon={<Check className="w-4 h-4" />}
            >
              Verify Audit
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNext} rightIcon={<ArrowRight className="w-4 h-4" />}>
              {currentIndex + 1 < totalItems ? 'Next Item' : 'View Final Audit'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
