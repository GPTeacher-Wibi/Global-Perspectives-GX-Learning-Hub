/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 6: QUESTION DOCTOR (CANONICAL MICRO-GAME g6-1)
 * ============================================================================
 * Academic Source: Textbook Section 6.2 & 6.3 (pp. 82–88)
 * Target Concept: Principles of Effective Questions & Question Defect Surgery
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  Stethoscope,
  Activity,
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
  Pill
} from 'lucide-react';
import { G6_1_CHALLENGES, QuestionDoctorItem, QuestionDefectType } from '../../../data/games/unit6MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface QuestionDoctorProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const QuestionDoctor: React.FC<QuestionDoctorProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDefect, setSelectedDefect] = useState<QuestionDefectType | null>(null);
  const [selectedPrescription, setSelectedPrescription] = useState<'A' | 'B' | 'C' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G6_1_CHALLENGES.length; // 11 items
  const currentItem: QuestionDoctorItem = G6_1_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedDefect || !selectedPrescription || isSubmitted) return;
    setIsSubmitted(true);

    const isDefectCorrect = selectedDefect === currentItem.correctDefect;
    const isPrescriptionCorrect = selectedPrescription === currentItem.correctPrescription;
    const isAllCorrect = isDefectCorrect && isPrescriptionCorrect;

    if (isAllCorrect) {
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
        correct: prev[currentItem.stage].correct + (isAllCorrect ? 1 : 0),
        total: prev[currentItem.stage].total + 1
      }
    }));
  };

  const handleNext = () => {
    setSelectedDefect(null);
    setSelectedPrescription(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(6, 'g6-1', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedDefect(null);
    setSelectedPrescription(null);
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
          <div className="flex items-center gap-3 text-teal-700">
            <div className="p-3 bg-teal-100 rounded-2xl">
              <Stethoscope className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 6 Micro-Game 1
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Question Doctor: The Inquiry Surgery Clinic
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In academic inquiry, <strong>bad questions produce bad data</strong>. As chief question surgeon, diagnose diseased research questions and prescribe clean, neutral, single-focused repairs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-teal-700" /> Four Classic Illnesses
              </h3>
              <p className="text-teal-800">
                <strong>Leading</strong> (nudging answer), <strong>Double-Barreled</strong> (conjoining 2 issues), <strong>Loaded</strong> (presupposing guilt), and <strong>Vague</strong> (elastic adverbs).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 mb-1">
                <Pill className="w-4 h-4 text-emerald-700" /> Surgical Prescription
              </h3>
              <p className="text-emerald-800">
                Split conjoined topics, eliminate emotional adjectives, replace adverbs with exact numbers, and anchor timelines.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span>
              <strong>Diagnostic Process:</strong> 11 patient questions across 3 clinical stages. Diagnose the defect and choose the optimal prescription to earn +100 base and streak multipliers.
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
              Examine First Patient
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
          <div className="inline-flex p-4 rounded-full bg-teal-100 text-teal-700 mb-2">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Unit 6 Micro-Game Complete
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Clinical Surgery Certified!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You cured 11 flawed inquiry prompts and restored objective neutrality to research instruments.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Score</span>
              <p className="text-2xl font-black text-teal-600">{totalPoints}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Accuracy</span>
              <p className="text-2xl font-black text-slate-900">{accuracy}%</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase">Max Streak</span>
              <p className="text-2xl font-black text-emerald-600">{maxStreak}x</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 max-w-md mx-auto border border-slate-200 text-left space-y-2 text-xs">
            <h4 className="font-bold text-slate-700 uppercase tracking-wider">Stage Breakdown:</h4>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 1: Defect Diagnosis</span>
              <span className="font-bold text-slate-900">{stageScores[1].correct} / {stageScores[1].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 2: Question Surgery & Repair</span>
              <span className="font-bold text-slate-900">{stageScores[2].correct} / {stageScores[2].total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Stage 3: Protocol Certification</span>
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
    1: 'Stage 1: Defect Diagnosis',
    2: 'Stage 2: Question Surgery & Repair',
    3: 'Stage 3: Protocol Certification'
  };

  const isAllCorrect =
    selectedDefect === currentItem.correctDefect &&
    selectedPrescription === currentItem.correctPrescription;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-5 animate-fadeIn">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-100 text-teal-800">
              {stageLabels[currentItem.stage]}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Patient {currentIndex + 1} of {totalItems}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="text-xs font-extrabold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 animate-pulse">
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
          color="bg-teal-600"
        />
      </div>

      {/* Patient Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-700">
            <Stethoscope className="w-4 h-4" />
            <span>Field: {currentItem.inquiryField}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900">
            {currentItem.title}
          </h2>
        </div>

        {/* Patient Question Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1.5">
          <span className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Patient Inquiry Question to be Audited:
          </span>
          <p className="text-base font-semibold text-slate-900 italic">
            {currentItem.patientQuestion}
          </p>
        </div>

        {/* Step 1: Diagnose the Illness */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Step 1: Diagnose the Fatal Question Defect
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedDefect === opt.defect;
              let btnClass = 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 text-slate-700';

              if (isSelected) {
                btnClass = 'border-teal-600 bg-teal-50 text-teal-900 ring-2 ring-teal-600/20';
              }

              if (isSubmitted) {
                if (opt.defect === currentItem.correctDefect) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.defect}
                  onClick={() => !isSubmitted && setSelectedDefect(opt.defect)}
                  disabled={isSubmitted}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col gap-1 ${btnClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm">{opt.label}</span>
                    {isSubmitted && opt.defect === currentItem.correctDefect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">{opt.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Prescribe the Repair */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Step 2: Prescribe the Surgical Repair / Calibration
          </span>

          <div className="space-y-2.5">
            {[
              { id: 'A' as const, text: currentItem.prescriptionOptionA },
              { id: 'B' as const, text: currentItem.prescriptionOptionB },
              { id: 'C' as const, text: currentItem.prescriptionOptionC }
            ].map((rx) => {
              const isSelected = selectedPrescription === rx.id;
              let btnClass = 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 text-slate-700';

              if (isSelected) {
                btnClass = 'border-teal-600 bg-teal-50 text-teal-900 ring-2 ring-teal-600/20';
              }

              if (isSubmitted) {
                if (rx.id === currentItem.correctPrescription) {
                  btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30';
                } else if (isSelected) {
                  btnClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                } else {
                  btnClass = 'opacity-40 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={rx.id}
                  onClick={() => !isSubmitted && setSelectedPrescription(rx.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${btnClass}`}
                >
                  <span className="font-black text-xs px-2 py-1 rounded bg-slate-100 border border-slate-300">
                    Rx {rx.id}
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed flex-1 whitespace-pre-line">
                    {rx.text}
                  </p>
                  {isSubmitted && rx.id === currentItem.correctPrescription && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  )}
                  {isSubmitted && isSelected && rx.id !== currentItem.correctPrescription && (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-sm leading-relaxed space-y-2 animate-fadeIn ${
              isAllCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {isAllCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Question Successfully Repaired!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>Surgical Diagnosis Incomplete</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm">{currentItem.explanation}</p>
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
              disabled={!selectedDefect || !selectedPrescription}
              onClick={handleSubmit}
              rightIcon={<Check className="w-4 h-4" />}
            >
              Verify Prescription
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNext} rightIcon={<ArrowRight className="w-4 h-4" />}>
              {currentIndex + 1 < totalItems ? 'Next Patient' : 'View Clinic Summary'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
