/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 9: CLAIM & COUNTERARGUMENT ARENA (CANONICAL CAPSTONE CHALLENGE g9-capstone)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 121–134)
 * Primary Focus: Tri-Claim Framework (Fact vs. Value vs. Policy),
 *                Unmasking Hidden Assumptions, Auditing Echo Chambers & Selective Evidence,
 *                Principled Toulmin Rebuttals, and Defensible Policy Synthesis.
 * Touch-First IFP Target: Min 48px target sizes, high-contrast, zero-pill discipline
 */

import React, { useState, useMemo } from 'react';
import {
  UNIT_9_CAPSTONE_DATA,
  CapstoneStage,
  CapstoneDecisionOption
} from '../../../data/games/unit9CapstoneData';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  Scale,
  MessageSquare,
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Award,
  ShoppingBag,
  Layers,
  ChevronRight,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export interface ClaimCounterargumentArenaProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

export const ClaimCounterargumentArena: React.FC<ClaimCounterargumentArenaProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  const missionData = UNIT_9_CAPSTONE_DATA;
  const totalStages = missionData.stages.length; // 5 stages
  const maxScore = missionData.maxScore; // 800

  // Stage Tracking (1 to 5 interactive stages; 6 is final results/debrief)
  const [currentStageNumber, setCurrentStageNumber] = useState<number>(1);

  // User selections and submission state per stage
  const [stageSelections, setStageSelections] = useState<Record<number, string | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  });

  const [stageSubmitted, setStageSubmitted] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  // Stage Scores
  const [stageScores, setStageScores] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  // Cumulative score with safe typed reduction
  const totalScore = useMemo(() => {
    return (Object.values(stageScores) as number[]).reduce((acc, curr) => acc + curr, 0);
  }, [stageScores]);

  // Current stage object
  const currentStage: CapstoneStage | undefined = missionData.stages.find(
    (s) => s.stageNumber === currentStageNumber
  );

  const selectedOptionId = stageSelections[currentStageNumber];
  const isCurrentStageSubmitted = stageSubmitted[currentStageNumber];
  const currentSelectedOption: CapstoneDecisionOption | undefined = currentStage?.options.find(
    (opt) => opt.id === selectedOptionId
  );

  // Handle option selection
  const handleSelectOption = (optionId: string) => {
    if (isCurrentStageSubmitted) return;
    setStageSelections((prev) => ({
      ...prev,
      [currentStageNumber]: optionId
    }));
  };

  // Submit current stage decision
  const handleSubmitStage = () => {
    if (!selectedOptionId || isCurrentStageSubmitted || !currentSelectedOption) return;

    setStageSubmitted((prev) => ({
      ...prev,
      [currentStageNumber]: true
    }));

    setStageScores((prev) => ({
      ...prev,
      [currentStageNumber]: currentSelectedOption.score
    }));
  };

  // Advance to next stage or results screen
  const handleNextStage = () => {
    if (currentStageNumber < totalStages) {
      setCurrentStageNumber((prev) => prev + 1);
    } else {
      // Completed all 5 stages -> Transition to Stage 6 (Debrief)
      setCurrentStageNumber(6);
      onComplete?.(totalScore, maxScore);
    }
  };

  // Restart mission
  const handleRestart = () => {
    setCurrentStageNumber(1);
    setStageSelections({ 1: null, 2: null, 3: null, 4: null, 5: null });
    setStageSubmitted({ 1: false, 2: false, 3: false, 4: false, 5: false });
    setStageScores({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  };

  // Percentage accuracy
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  // --------------------------------------------------------------------------
  // RENDER: DEBRIEF & RESULTS SCREEN (STAGE 6)
  // --------------------------------------------------------------------------
  if (currentStageNumber === 6) {
    let performanceTier = 'Novice Policy Debater';
    let tierColor = 'text-amber-800 bg-amber-50 border-amber-300';
    if (scorePercent >= 85) {
      performanceTier = 'Master Argumentation Strategist & Negotiator';
      tierColor = 'text-emerald-800 bg-emerald-50 border-emerald-300';
    } else if (scorePercent >= 65) {
      performanceTier = 'Proficient Policy Analyst';
      tierColor = 'text-blue-800 bg-blue-50 border-blue-300';
    }

    return (
      <div className="w-full max-w-4xl mx-auto space-y-8 animate-fadeIn">
        {/* Results Banner */}
        <div className="bg-gradient-to-br from-amber-900 via-orange-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-amber-200 font-bold text-xs uppercase tracking-wider">
              Capstone Challenge Completed
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              {missionData.title}
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base max-w-xl mx-auto">
              {missionData.subtitle}
            </p>
          </div>

          {/* Score Badge */}
          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 min-w-[240px]">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-200 mb-1">
              Final Argumentation Score
            </span>
            <div className="text-5xl font-black text-white tabular-nums">
              {totalScore} <span className="text-2xl text-amber-200/80">/ {maxScore}</span>
            </div>
            <span className="text-sm font-semibold text-amber-300 mt-1">
              {scorePercent}% Argumentative Rigor
            </span>
          </div>

          <div className="pt-2">
            <span className={`inline-block px-4 py-1.5 rounded-xl border text-sm font-black uppercase tracking-wider ${tierColor}`}>
              Tier: {performanceTier}
            </span>
          </div>
        </div>

        {/* Stage-by-Stage Performance Breakdown */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-700" />
            Claim and Counterargument Arena Evaluation
          </h3>

          <div className="space-y-4">
            {missionData.stages.map((stg) => {
              const pts = stageScores[stg.stageNumber] || 0;
              const isOpt = pts === 160;
              const isPartial = pts === 80;

              return (
                <div
                  key={stg.stageNumber}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase text-slate-500">
                        Stage {stg.stageNumber}
                      </span>
                      <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {stg.concept}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {stg.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <span className="text-xs font-semibold text-slate-500">
                      Score: <strong className="text-slate-900">{pts} / 160</strong>
                    </span>
                    {isOpt ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Optimal
                      </span>
                    ) : isPartial ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                        <AlertCircle className="w-3.5 h-3.5" /> Partial
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                        <AlertCircle className="w-3.5 h-3.5" /> Weak
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Button
              variant="outline"
              size={isClassroomMode ? 'lg' : 'md'}
              onClick={handleRestart}
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Replay Challenge
            </Button>

            <Button
              variant="primary"
              size={isClassroomMode ? 'lg' : 'md'}
              onClick={onExit}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Return to Unit Hub
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: ACTIVE CHALLENGE STAGES (1 TO 5)
  // --------------------------------------------------------------------------
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Top Challenge Header */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 font-extrabold text-xs uppercase tracking-wider">
              Unit 9 Capstone
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Stage {currentStageNumber} of {totalStages}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {missionData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Setting: {missionData.caseSetting}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Current Score</span>
            <span className="text-xl sm:text-2xl font-black text-amber-700 tabular-nums">
              {totalScore} <span className="text-xs text-slate-400 font-normal">/ {maxScore}</span>
            </span>
          </div>

          <Button variant="outline" size="sm" onClick={onExit}>
            Exit
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        value={((currentStageNumber - 1) / totalStages) * 100}
        colorClass="bg-amber-600"
        size="md"
      />

      {/* Active Stage Card */}
      {currentStage && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Stage Concept Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 block">
                {currentStage.concept}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                {currentStage.title}
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {currentStage.textbookRef}
            </span>
          </div>

          {/* Scenario Context Box */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <FileText className="w-4 h-4 text-amber-700" />
              <span>{currentStage.scenarioHeading}</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {currentStage.scenarioBody}
            </p>

            {/* Evidence Matrix Data Box if present */}
            {currentStage.evidenceData && (
              <div className="mt-3 p-4 rounded-xl bg-white border border-amber-200 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500 block">
                  {currentStage.evidenceData.label}
                </span>
                <div className="space-y-2 text-xs sm:text-sm">
                  {currentStage.evidenceData.items.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                      <span className="font-bold text-slate-900 block">{item.key}:</span>
                      <span className="text-slate-700">{item.value}</span>
                      {item.note && (
                        <span className="block mt-1 text-[11px] font-semibold text-amber-800">
                          📌 {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Decision Prompt */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
              {currentStage.prompt}
            </h4>

            {/* Options List with >=48px Touch Targets */}
            <div className="space-y-3" role="radiogroup" aria-label="Claim and Counterargument Decisions">
              {currentStage.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let cardStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';

                if (isCurrentStageSubmitted) {
                  if (opt.isOptimal) {
                    cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !opt.isOptimal) {
                    cardStyle = opt.score === 80
                      ? 'bg-amber-50 border-amber-400 text-amber-950'
                      : 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    cardStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  cardStyle = 'bg-amber-50/80 border-amber-600 text-amber-950 font-bold ring-2 ring-amber-500/20';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isCurrentStageSubmitted}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-150 flex items-start justify-between gap-3 cursor-pointer min-h-[56px] ${cardStyle}`}
                    role="radio"
                    aria-checked={isSelected}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm sm:text-base">
                          {opt.label}
                        </span>
                        {isCurrentStageSubmitted && opt.isOptimal && (
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold">
                            +160 pts (Optimal)
                          </span>
                        )}
                        {isCurrentStageSubmitted && isSelected && !opt.isOptimal && (
                          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-bold">
                            +{opt.score} pts
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>

                    <div className="shrink-0 mt-0.5">
                      {isCurrentStageSubmitted ? (
                        opt.isOptimal ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                        ) : null
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-amber-600 bg-amber-600' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback Card after submission */}
          {isCurrentStageSubmitted && currentSelectedOption && (
            <div
              className={`p-5 rounded-2xl border-2 space-y-2 animate-in fade-in duration-200 ${
                currentSelectedOption.isOptimal
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                  : currentSelectedOption.score === 80
                  ? 'bg-amber-50 border-amber-400 text-amber-950'
                  : 'bg-rose-50 border-rose-400 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                {currentSelectedOption.isOptimal ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Optimal Policy & Argumentation Decision!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <span>Analytical Guidance & Diagnosis:</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                {currentSelectedOption.feedback}
              </p>
              <div className="pt-2 border-t border-slate-200/60 text-xs font-semibold opacity-90">
                💡 Textbook Rationale: {currentSelectedOption.academicReasoning}
              </div>
            </div>
          )}

          {/* Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              {!isCurrentStageSubmitted
                ? 'Select the optimal argumentation decision, then submit.'
                : 'Review the academic feedback, then continue.'}
            </span>

            {!isCurrentStageSubmitted ? (
              <Button
                variant="primary"
                size={isClassroomMode ? 'lg' : 'md'}
                onClick={handleSubmitStage}
                disabled={!selectedOptionId}
              >
                Submit Decision
              </Button>
            ) : (
              <Button
                variant="primary"
                size={isClassroomMode ? 'lg' : 'md'}
                onClick={handleNextStage}
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                {currentStageNumber < totalStages ? 'Advance to Next Stage' : 'Complete Challenge & View Results'}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
