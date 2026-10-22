/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10: FINAL CONCLUSION BOARD (CANONICAL CAPSTONE CHALLENGE g10-capstone)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 132–144)
 * Primary Focus: Distinguishing Empirical Findings from Interpretations,
 *                Auditing Internal & External Validity and Confounders,
 *                Deciding the Hypothesis's Fate (Supported vs. Refuted vs. Modified),
 *                Slaying the 4 Fatal Conclusion Defects, and Constructing Qualified
 *                Actionable Recommendations with Epistemic Humility.
 * Touch-First IFP Target: Min 48px target sizes, high-contrast, zero-pill discipline
 */

import React, { useState, useMemo } from 'react';
import {
  UNIT_10_CAPSTONE_DATA,
  CapstoneStage,
  CapstoneDecisionOption
} from '../../../data/games/unit10CapstoneData';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Award,
  Layers,
  ChevronRight,
  Sparkles,
  ClipboardCheck,
  Target,
  FileCheck2,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

export interface FinalConclusionBoardProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

export const FinalConclusionBoard: React.FC<FinalConclusionBoardProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  const missionData = UNIT_10_CAPSTONE_DATA;
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

  const [stageScores, setStageScores] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  // Cumulative score
  const totalScore = useMemo(() => {
    return (Object.values(stageScores) as number[]).reduce((acc, curr) => acc + curr, 0);
  }, [stageScores]);

  // Current stage data
  const currentStage: CapstoneStage | undefined = useMemo(() => {
    return missionData.stages.find((s) => s.stageNumber === currentStageNumber);
  }, [missionData.stages, currentStageNumber]);

  const selectedOptionId = stageSelections[currentStageNumber];
  const isCurrentStageSubmitted = stageSubmitted[currentStageNumber];

  const currentSelectedOption = useMemo(() => {
    if (!currentStage || !selectedOptionId) return null;
    return currentStage.options.find((opt) => opt.id === selectedOptionId) || null;
  }, [currentStage, selectedOptionId]);

  // Handle Option Selection
  const handleSelectOption = (optId: string) => {
    if (isCurrentStageSubmitted) return;
    setStageSelections((prev) => ({
      ...prev,
      [currentStageNumber]: optId
    }));
  };

  // Handle Submission for Current Stage
  const handleSubmitStage = () => {
    if (!currentStage || !selectedOptionId || isCurrentStageSubmitted) return;

    const chosenOption = currentStage.options.find((o) => o.id === selectedOptionId);
    const scoreEarned = chosenOption ? chosenOption.score : 0;

    setStageScores((prev) => ({
      ...prev,
      [currentStageNumber]: scoreEarned
    }));

    setStageSubmitted((prev) => ({
      ...prev,
      [currentStageNumber]: true
    }));
  };

  // Advance to Next Stage or Complete
  const handleNextStage = () => {
    if (currentStageNumber < totalStages) {
      setCurrentStageNumber((prev) => prev + 1);
    } else {
      // Completed all 5 stages -> Show Results Screen (Stage 6)
      setCurrentStageNumber(totalStages + 1);
      if (onComplete) {
        onComplete(totalScore, maxScore);
      }
    }
  };

  // Reset / Retry Game
  const handleReset = () => {
    setCurrentStageNumber(1);
    setStageSelections({ 1: null, 2: null, 3: null, 4: null, 5: null });
    setStageSubmitted({ 1: false, 2: false, 3: false, 4: false, 5: false });
    setStageScores({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  };

  // Final Grade Tier Helper
  const getPerformanceTier = (score: number) => {
    const ratio = score / maxScore;
    if (ratio >= 0.9) {
      return {
        title: 'Master Scholarly Inquirer & Lead Peer Examiner',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        badge: 'Exemplary Synthesis',
        desc: 'Flawless execution! You synthesized findings with epistemic humility, untangled confounding variables, held the hypothesis to empirical truth, eliminated all 4 conclusion defects, and drafted actionable, qualified recommendations.'
      };
    }
    if (ratio >= 0.7) {
      return {
        title: 'Proficient Research Synthesizer',
        color: 'text-blue-700 bg-blue-50 border-blue-300',
        badge: 'Solid Methodology',
        desc: 'Strong critical reasoning! You successfully navigated data interpretations and avoided major inferential traps, producing defensible conclusions with minor room for tighter validity controls.'
      };
    }
    return {
      title: 'Apprentice Research Evaluator',
      color: 'text-amber-700 bg-amber-50 border-amber-300',
      badge: 'Developing Epistemic Humility',
      desc: 'You completed the inquiry audit, but fell prey to several common defects such as overreaching claims, confounding misattributions, or mechanical repetition. Review the textbook sections on conclusion architecture and try again!'
    };
  };

  const performanceTier = getPerformanceTier(totalScore);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="neutral" className="bg-emerald-950 text-emerald-300 border-emerald-800">
                Unit 10 Capstone Challenge
              </Badge>
              <Badge variant="neutral" className="bg-slate-800 text-slate-300 border-slate-700">
                Grade 10 Cambridge Global Perspectives
              </Badge>
              <Badge variant="neutral" className="bg-indigo-950 text-indigo-300 border-indigo-800">
                {missionData.caseSetting}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <span>{missionData.title}</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
              {missionData.subtitle}: {missionData.overview}
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
            <div className="text-xs uppercase font-bold text-slate-400">Total Score</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              {totalScore} <span className="text-slate-500 text-base">/ {maxScore}</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Stage {Math.min(currentStageNumber, totalStages)} of {totalStages}
            </div>
          </div>
        </div>

        {/* Progress Bar across the 5 stages */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <ProgressBar
            value={currentStageNumber > totalStages ? totalStages : currentStageNumber - 1}
            max={totalStages}
            color="emerald"
            className="h-2.5 bg-slate-800"
          />
          <div className="flex justify-between items-center text-xs text-slate-400 mt-2">
            <span>Stage 1: Findings vs Interpretations</span>
            <span>Stage 3: Hypothesis Fate</span>
            <span>Stage 5: 3-Pillar Synthesis</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Body */}
      {currentStageNumber > totalStages ? (
        /* ====================================================================
           STAGE 6: RESULTS & INQUIRY DEBRIEF SCREEN
           ==================================================================== */
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8 animate-in zoom-in-95 duration-200">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-700 shadow-inner">
              <Award className="w-12 h-12" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Inquiry Audit & Conclusion Portfolio Complete!
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              You have guided the SMA Mandiri Canteen Waste Taskforce through rigorous empirical synthesis,
              internal/external validity testing, falsification acceptance, and actionable recommendations.
            </p>
          </div>

          {/* Performance Tier Banner */}
          <div className={`p-6 rounded-2xl border-2 space-y-3 ${performanceTier.color}`}>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 shrink-0" />
                <span className="font-black text-lg sm:text-xl">{performanceTier.title}</span>
              </div>
              <Badge variant="neutral" className="bg-white/80 font-bold border-current">
                {performanceTier.badge}
              </Badge>
            </div>
            <p className="text-sm font-medium leading-relaxed">{performanceTier.desc}</p>
            <div className="text-right text-xl font-black">
              Final Score: {totalScore} / {maxScore} ({Math.round((totalScore / maxScore) * 100)}%)
            </div>
          </div>

          {/* Breakdown by Stage */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-emerald-600" />
              <span>Decision Breakdown Across All 5 Judicial Stages</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {missionData.stages.map((stg) => {
                const optId = stageSelections[stg.stageNumber];
                const chosen = stg.options.find((o) => o.id === optId);
                const score = stageScores[stg.stageNumber] || 0;
                const isOptimal = chosen?.isOptimal;

                return (
                  <div
                    key={stg.stageNumber}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        Stage {stg.stageNumber}
                      </span>
                      <span
                        className={`text-xs font-black px-2 py-0.5 rounded ${
                          isOptimal
                            ? 'bg-emerald-100 text-emerald-800'
                            : score === 80
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        +{score} / 160 pts
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">{stg.title}</div>
                    <div className="text-xs text-slate-600 font-medium line-clamp-2">
                      Selected: &quot;{chosen?.label || 'No choice selected'}&quot;
                    </div>
                    <div className="text-xs text-slate-500 italic pt-1 border-t border-slate-200">
                      Concept: {stg.concept}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Textbook Core Synthesis Summary */}
          <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 space-y-4 border border-slate-800">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>Cambridge Global Perspectives: Essential Conclusion Checklist</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                <div className="font-bold text-emerald-300">1. Three Structural Pillars</div>
                <div className="text-slate-300">
                  Direct answer to the research question, synthesis of bounded evidence, and realistic actionable recommendations.
                </div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                <div className="font-bold text-emerald-300">2. Epistemic Humility</div>
                <div className="text-slate-300">
                  Transparently reporting unmeasured confounders, Hawthorne effects, and sample limitations without embarrassment.
                </div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                <div className="font-bold text-emerald-300">3. Falsification Objectivity</div>
                <div className="text-slate-300">
                  Embracing modified or refuted hypotheses as genuine scientific progress rather than failure.
                </div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                <div className="font-bold text-emerald-300">4. Zero Fatal Defects</div>
                <div className="text-slate-300">
                  No sudden miracle facts, mechanical copy-pastes, overreaching universal leaps, or emotional wishful thinking.
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <Button
              variant="outline"
              size={isClassroomMode ? 'lg' : 'md'}
              onClick={handleReset}
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Replay Capstone Mission
            </Button>
            <Button
              variant="primary"
              size={isClassroomMode ? 'lg' : 'md'}
              onClick={onExit}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Return to Unit 10 Hub
            </Button>
          </div>
        </div>
      ) : (
        /* ====================================================================
           STAGES 1–5: ACTIVE DECISION STAGE
           ==================================================================== */
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Stage Header */}
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <Badge variant="primary" className="font-mono text-xs">
                {currentStage?.concept}
              </Badge>
              <span className="text-xs font-semibold text-slate-500">
                {currentStage?.textbookRef}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {currentStage?.title}
            </h2>
          </div>

          {/* Scenario & Context Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              {currentStage?.scenarioHeading}
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {currentStage?.scenarioBody}
            </p>
          </div>

          {/* Evidence Dossier / Data Display if present */}
          {currentStage?.evidenceData && (
            <div className="space-y-3 bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>{currentStage.evidenceData.label}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStage.evidenceData.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-emerald-100 shadow-xs space-y-1"
                  >
                    <div className="text-xs font-bold text-emerald-900">{item.key}</div>
                    <div className="text-sm font-black text-slate-800">{item.value}</div>
                    {item.note && (
                      <div className="text-xs text-slate-500 italic">{item.note}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inquiry Question / Prompt */}
          <div className="p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1">
              Examiner Challenge
            </div>
            <p className="text-indigo-950 font-bold text-sm sm:text-base">
              {currentStage?.prompt}
            </p>
          </div>

          {/* Decision Options */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Your Synthesis Decision:
            </div>

            <div className="space-y-3">
              {currentStage?.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let optionStyle =
                  'border-slate-200 bg-white hover:border-slate-400 text-slate-800';

                if (isSelected && !isCurrentStageSubmitted) {
                  optionStyle =
                    'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20';
                } else if (isCurrentStageSubmitted) {
                  if (isSelected) {
                    optionStyle = opt.isOptimal
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30'
                      : opt.score === 80
                      ? 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/30'
                      : 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/30';
                  } else if (opt.isOptimal) {
                    optionStyle = 'border-emerald-300 bg-emerald-50/40 text-emerald-900 opacity-90';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isCurrentStageSubmitted}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex flex-col gap-2 min-h-[52px] ${optionStyle} ${
                      isCurrentStageSubmitted ? 'cursor-default' : 'cursor-pointer hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {opt.id.split('-')[1]?.toUpperCase() || '•'}
                        </span>
                        <span className="font-black text-sm sm:text-base leading-snug">
                          {opt.label}
                        </span>
                      </div>

                      {isCurrentStageSubmitted && isSelected && (
                        <span
                          className={`text-xs font-black px-2.5 py-1 rounded shrink-0 ${
                            opt.isOptimal
                              ? 'bg-emerald-200 text-emerald-900'
                              : opt.score === 80
                              ? 'bg-amber-200 text-amber-900'
                              : 'bg-rose-200 text-rose-900'
                          }`}
                        >
                          +{opt.score} pts
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 pl-9 font-normal leading-relaxed">
                      {opt.description}
                    </p>
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
                    <span>Optimal Synthesis Decision!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <span>Scientific Guidance & Defect Diagnosis:</span>
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
                ? 'Select the optimal synthesis decision, then submit.'
                : 'Review the textbook feedback, then continue.'}
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
