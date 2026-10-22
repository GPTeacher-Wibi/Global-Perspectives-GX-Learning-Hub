/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3D: UNIT 2 RESEARCH PROJECT CHALLENGE (BENCHMARK GAME)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 22–38)
 *
 * Core Workflow:
 * RESEARCH PROBLEM -> RESEARCH QUESTION -> LITERATURE GAP -> SMART OBJECTIVES ->
 * FALSIFIABLE HYPOTHESIS -> METHODOLOGY & SAMPLING -> FINDINGS VS. DISCUSSION ->
 * PEER REVIEW AUDIT & ITERATIVE REFINEMENT (THE BOSS CHALLENGE) -> DEBRIEF
 *
 * Educational Philosophy: "Understanding and application over rote memorization"
 * Accessibility: CEFR B1 English, IFP-friendly touch targets (>= 48px), High contrast.
 */

import React, { useState, useMemo } from 'react';
import {
  UNIT_2_RESEARCH_CASES,
  ResearchCase,
  ResearchStage,
  ResearchStageOption
} from '../../../data/games/unit2Game';
import { UNIT_2_MISCONCEPTIONS } from '../../../data/misconceptions/unit2Misconceptions';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  Microscope,
  FlaskConical,
  FileSearch,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
  Layers,
  ShieldAlert,
  BookOpen,
  ChevronRight,
  Info,
  Scale,
  BrainCircuit,
  ClipboardList,
  Target,
  FileCheck,
  Building2,
  Fish
} from 'lucide-react';

export interface ResearchProjectChallengeProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

export const ResearchProjectChallenge: React.FC<ResearchProjectChallengeProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  // Case selection: default to Case 1 (Canteen Nutrition & Fatigue Paradox)
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-nutrition-fatigue');

  const activeCase: ResearchCase = useMemo(() => {
    return (
      UNIT_2_RESEARCH_CASES.find((c) => c.id === selectedCaseId) ||
      UNIT_2_RESEARCH_CASES[0]
    );
  }, [selectedCaseId]);

  // Stage Tracking (1 to 7 interactive stages, 8 is final briefing)
  const [currentStageNumber, setCurrentStageNumber] = useState<number>(1);

  // User selections and submission state per stage
  const [stageSelections, setStageSelections] = useState<Record<number, string | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null
  });

  const [stageSubmitted, setStageSubmitted] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
  });

  // Stage Scores
  const [stageScores, setStageScores] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  });

  // Dossier expansion state for mobile / classroom
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  // Cumulative score
  const totalScore = useMemo(() => {
    return (Object.values(stageScores) as number[]).reduce(
      (acc: number, curr: number) => acc + curr,
      0
    );
  }, [stageScores]);

  const maxTotalScore = 700; // 7 stages * 100 max points

  // Current stage data
  const currentStage: ResearchStage | undefined = activeCase.stages.find(
    (s) => s.stageNumber === currentStageNumber
  );

  // Currently selected option object for current stage
  const selectedOptionId = stageSelections[currentStageNumber];
  const isCurrentStageSubmitted = stageSubmitted[currentStageNumber];
  const currentSelectedOption: ResearchStageOption | undefined = currentStage?.options.find(
    (opt) => opt.id === selectedOptionId
  );

  // Reset all state when restarting or switching cases
  const handleRestart = (newCaseId?: string) => {
    if (newCaseId) {
      setSelectedCaseId(newCaseId);
    }
    setCurrentStageNumber(1);
    setStageSelections({ 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null });
    setStageSubmitted({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false });
    setStageScores({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });
    setIsDossierOpen(false);
  };

  // Option select handler
  const handleSelectOption = (optionId: string) => {
    if (isCurrentStageSubmitted) return; // locked once submitted
    setStageSelections((prev) => ({ ...prev, [currentStageNumber]: optionId }));
  };

  // Submit stage choice
  const handleSubmitStage = () => {
    if (!selectedOptionId || !currentStage) return;

    const chosenOption = currentStage.options.find((o) => o.id === selectedOptionId);
    const scoreEarned = chosenOption ? chosenOption.rigorScore : 0;

    setStageSubmitted((prev) => ({ ...prev, [currentStageNumber]: true }));
    setStageScores((prev) => ({ ...prev, [currentStageNumber]: scoreEarned }));
  };

  // Advance to next stage
  const handleProceedNext = () => {
    if (currentStageNumber < 7) {
      setCurrentStageNumber((prev) => prev + 1);
    } else if (currentStageNumber === 7) {
      // Completed, transition to stage 8 debrief
      setCurrentStageNumber(8);
      if (onComplete) {
        onComplete(totalScore, maxTotalScore);
      }
    }
  };

  // Diagnose triggered misconceptions across all stages
  const diagnosedMisconceptions = useMemo(() => {
    const list: Array<{
      stageNumber: number;
      optionLabel: string;
      misconceptionKey: string;
      title: string;
      description: string;
      coaching: string;
    }> = [];

    activeCase.stages.forEach((stage) => {
      const chosenOptId = stageSelections[stage.stageNumber];
      if (chosenOptId) {
        const opt = stage.options.find((o) => o.id === chosenOptId);
        if (opt && opt.misconceptionId && UNIT_2_MISCONCEPTIONS[opt.misconceptionId]) {
          const rec = UNIT_2_MISCONCEPTIONS[opt.misconceptionId];
          list.push({
            stageNumber: stage.stageNumber,
            optionLabel: opt.label,
            misconceptionKey: rec.id,
            title: rec.concept,
            description: rec.description,
            coaching: rec.feedbackMessage
          });
        }
      }
    });

    return list;
  }, [activeCase, stageSelections]);

  // Stage Icons helper
  const getStageIcon = (stageNum: number) => {
    switch (stageNum) {
      case 1:
        return <BrainCircuit className="w-5 h-5" />;
      case 2:
        return <Target className="w-5 h-5" />;
      case 3:
        return <FileSearch className="w-5 h-5" />;
      case 4:
        return <ClipboardList className="w-5 h-5" />;
      case 5:
        return <FlaskConical className="w-5 h-5" />;
      case 6:
        return <Scale className="w-5 h-5" />;
      case 7:
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <FileCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Top Header Bar */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
              <Microscope className="w-4 h-4 text-emerald-700" />
              Unit 2 Benchmark Game
            </span>
            <span className="text-slate-400 text-xs font-bold">•</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Research Project Challenge
            </span>
          </div>
          <h1
            className={`font-black text-slate-900 tracking-tight ${
              isClassroomMode ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
            }`}
          >
            {activeCase.title}
          </h1>
          <p className="text-slate-600 text-sm md:text-base font-normal max-w-2xl">
            {activeCase.subtitle}
          </p>
        </div>

        {/* Case Switcher & Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => handleRestart('case-nutrition-fatigue')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedCaseId === 'case-nutrition-fatigue'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              Case 1: School Nutrition
            </button>
            <button
              onClick={() => handleRestart('case-microplastics-fishery')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedCaseId === 'case-microplastics-fishery'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Fish className="w-4 h-4 text-emerald-600" />
              Case 2: Estuary Plastics
            </button>
          </div>

          <Button
            variant="outline"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={onExit}
          >
            Exit Game
          </Button>
        </div>
      </div>

      {/* Progress & Stage Tracker */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span>Research Lifecycle Stage:</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-extrabold text-sm">
              {currentStageNumber <= 7 ? `Stage ${currentStageNumber} of 7` : 'Final Briefing'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Research Rigor Index:</span>
            <span className="text-emerald-700 text-base font-black">
              {totalScore} / {maxTotalScore} pts ({Math.round((totalScore / maxTotalScore) * 100)}%)
            </span>
          </div>
        </div>

        <ProgressBar
          current={Math.min(currentStageNumber, 7)}
          total={7}
          color="bg-emerald-600"
          isClassroomMode={isClassroomMode}
        />

        {/* Stage Timeline Steps */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 pt-2">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => {
            const isCompleted = stageSubmitted[num];
            const isCurrent = currentStageNumber === num;
            const stageScore = stageScores[num];

            let badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
            if (isCompleted) {
              badgeStyle =
                stageScore === 100
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-400 font-bold'
                  : 'bg-amber-100 text-amber-800 border-amber-400 font-bold';
            } else if (isCurrent) {
              badgeStyle = 'bg-blue-100 text-blue-900 border-blue-500 ring-2 ring-blue-400/30 font-extrabold';
            }

            return (
              <div
                key={num}
                className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all ${badgeStyle}`}
              >
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-tight truncate">
                  {num === 1 && '1. Inquiry'}
                  {num === 2 && '2. Question'}
                  {num === 3 && '3. Lit Gap'}
                  {num === 4 && '4. Objectives'}
                  {num === 5 && '5. Methods'}
                  {num === 6 && '6. Analysis'}
                  {num === 7 && '7. Boss Audit'}
                </div>
                {isCompleted && (
                  <div className="text-[10px] font-extrabold mt-0.5 text-emerald-700">
                    +{stageScore}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Game Arena */}
      {currentStageNumber <= 7 && currentStage ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left / Center Column: Active Stage Task (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stage Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-6">
              {/* Stage Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    {getStageIcon(currentStage.stageNumber)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      {currentStage.stageConcept}
                    </span>
                    <h2
                      className={`font-black text-slate-900 ${
                        isClassroomMode ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                      }`}
                    >
                      {currentStage.stageTitle}
                    </h2>
                  </div>
                </div>

                <Badge variant="emerald" isClassroomMode={isClassroomMode}>
                  {currentStage.textbookReference}
                </Badge>
              </div>

              {/* Scenario Context Box */}
              <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 space-y-2 text-sm md:text-base leading-relaxed">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Info className="w-4 h-4 text-emerald-600" />
                  <span>Fieldwork Context:</span>
                </div>
                <p className="whitespace-pre-line">{currentStage.scenarioContext}</p>
              </div>

              {/* Stage Decision Prompt */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Lead Researcher Decision Required:
                </span>
                <h3
                  className={`font-extrabold text-slate-900 leading-snug ${
                    isClassroomMode ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                  }`}
                >
                  {currentStage.prompt}
                </h3>
              </div>

              {/* Interactive Options List (>= 48px touch targets) */}
              <div className="space-y-4" role="radiogroup" aria-label="Research Decision Options">
                {currentStage.options.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  const isOptimal = option.isOptimal;

                  let cardStyle =
                    'bg-white hover:bg-slate-50/90 border-slate-200/90 text-slate-800 shadow-2xs';

                  if (isCurrentStageSubmitted) {
                    if (isOptimal) {
                      cardStyle =
                        'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                    } else if (isSelected && !isOptimal) {
                      cardStyle =
                        'bg-rose-50/90 border-rose-400 text-rose-950 ring-2 ring-rose-500/20';
                    } else {
                      cardStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    cardStyle =
                      'bg-emerald-50/80 border-emerald-600 text-emerald-950 ring-3 ring-emerald-500/30';
                  }

                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={isCurrentStageSubmitted}
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all min-h-[64px] flex items-start gap-4 cursor-pointer disabled:cursor-default ${cardStyle}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-xl shrink-0 flex items-center justify-center font-black text-xs mt-0.5 border ${
                          isCurrentStageSubmitted
                            ? isOptimal
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : isSelected
                              ? 'bg-rose-600 text-white border-rose-600'
                              : 'bg-slate-200 text-slate-400 border-slate-300'
                            : isSelected
                            ? 'bg-emerald-700 text-white border-emerald-700'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {option.id.slice(-1).toUpperCase()}
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-extrabold text-base md:text-lg tracking-tight">
                            {option.label}
                          </h4>
                          {isCurrentStageSubmitted && (
                            <span
                              className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                                option.rigorScore === 100
                                  ? 'bg-emerald-200 text-emerald-900'
                                  : 'bg-amber-200 text-amber-900'
                              }`}
                            >
                              +{option.rigorScore} Rigor Pts
                            </span>
                          )}
                        </div>

                        <p className="text-sm md:text-base font-normal leading-relaxed opacity-90 whitespace-pre-line">
                          {option.description}
                        </p>

                        {/* Variables Tagging if present */}
                        {option.variablesIdentified && (
                          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
                            <span className="font-bold text-blue-900 block">Variables Mapped:</span>
                            <div>
                              <strong className="text-blue-900">Independent:</strong>{' '}
                              {option.variablesIdentified.independent}
                            </div>
                            <div>
                              <strong className="text-blue-900">Dependent:</strong>{' '}
                              {option.variablesIdentified.dependent}
                            </div>
                            {option.variablesIdentified.controlled && (
                              <div>
                                <strong className="text-blue-900">Controlled:</strong>{' '}
                                {option.variablesIdentified.controlled.join(', ')}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons: Submit Choice or Proceed to Next Stage */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 font-medium">
                  {!isCurrentStageSubmitted
                    ? 'Select the most scientifically rigorous choice, then lock in your decision.'
                    : 'Analyze the consequence and pedagogical feedback before continuing.'}
                </div>

                <div className="flex items-center gap-3">
                  {!isCurrentStageSubmitted ? (
                    <Button
                      variant="primary"
                      size={isClassroomMode ? 'lg' : 'md'}
                      isClassroomMode={isClassroomMode}
                      disabled={!selectedOptionId}
                      onClick={handleSubmitStage}
                    >
                      Confirm Research Decision
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size={isClassroomMode ? 'lg' : 'md'}
                      isClassroomMode={isClassroomMode}
                      onClick={handleProceedNext}
                    >
                      {currentStageNumber < 7 ? (
                        <>
                          Advance to Stage {currentStageNumber + 1}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Finalize Study & View Debrief
                          <Award className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Formative Feedback & Consequence Box (Appears after submission) */}
            {isCurrentStageSubmitted && currentSelectedOption && (
              <div
                className={`rounded-3xl p-6 md:p-7 border-2 space-y-4 animate-in fade-in duration-300 ${
                  currentSelectedOption.isOptimal
                    ? 'bg-emerald-50/90 border-emerald-400 text-emerald-950'
                    : 'bg-rose-50/90 border-rose-400 text-rose-950'
                }`}
              >
                <div className="flex items-start gap-3">
                  {currentSelectedOption.isOptimal ? (
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-7 h-7 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <h4 className="font-black text-lg md:text-xl">
                      {currentSelectedOption.isOptimal
                        ? 'High Scientific Rigor: Optimal Decision'
                        : 'Methodological Vulnerability Detected'}
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                      Score: +{currentSelectedOption.rigorScore} / 100 Rigor Points
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-current/20 space-y-2 text-sm md:text-base leading-relaxed font-medium">
                  <span className="font-extrabold block text-slate-900">
                    Methodological Analysis & Rationale:
                  </span>
                  <p>{currentSelectedOption.detailedFeedback}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="p-3.5 rounded-xl bg-white/70 border border-current/20">
                    <span className="font-black block mb-1">Methodological Trade-Off:</span>
                    <p className="opacity-90">{currentSelectedOption.methodologicalTradeoff}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/70 border border-current/20">
                    <span className="font-black block mb-1">Simulated Field Consequence:</span>
                    <p className="opacity-90">{currentSelectedOption.simulatedConsequence}</p>
                  </div>
                </div>

                {/* Misconception Alert if triggered */}
                {currentSelectedOption.misconceptionId &&
                  UNIT_2_MISCONCEPTIONS[currentSelectedOption.misconceptionId] && (
                    <div className="p-4 rounded-2xl bg-rose-100/90 border border-rose-300 text-rose-950 text-xs md:text-sm space-y-1">
                      <div className="flex items-center gap-2 font-black text-rose-900">
                        <BookOpen className="w-4 h-4 text-rose-700" />
                        <span>
                          Diagnostic Misconception:{' '}
                          {
                            UNIT_2_MISCONCEPTIONS[currentSelectedOption.misconceptionId]
                              .concept
                          }
                        </span>
                      </div>
                      <p className="leading-relaxed">
                        {
                          UNIT_2_MISCONCEPTIONS[currentSelectedOption.misconceptionId]
                            .feedbackMessage
                        }
                      </p>
                    </div>
                  )}
              </div>
            )}
          </div>

          {/* Right Column: Living Research Dossier (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Real-World Case Background Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Case Overview</span>
              </div>
              <h3 className="font-black text-slate-900 text-lg leading-tight">
                {activeCase.title}
              </h3>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <div>
                  <strong className="text-slate-800">Location:</strong> {activeCase.location}
                </div>
                <div>
                  <strong className="text-slate-800">Target Population:</strong>{' '}
                  {activeCase.targetPopulation}
                </div>
                <div>
                  <strong className="text-slate-800">Underlying Problem:</strong>{' '}
                  {activeCase.realWorldProblem}
                </div>
              </div>
            </div>

            {/* Living Study Blueprint Dossier */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-800">
                  <ClipboardList className="w-4 h-4 text-blue-600" />
                  <span>Research Dossier</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                  Living Blueprint
                </span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                As you make decisions across the 7 stages, your official Research Study Blueprint
                is compiled here:
              </p>

              <div className="space-y-3 text-xs">
                {/* Stage 1 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>1. Inquiry Classification</span>
                    {stageSubmitted[1] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[1]
                      ? activeCase.stages[0].options.find((o) => o.id === stageSelections[1])?.label
                      : 'Pending lead researcher decision...'}
                  </div>
                </div>

                {/* Stage 2 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>2. Research Question</span>
                    {stageSubmitted[2] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[2]
                      ? activeCase.stages[1].options.find((o) => o.id === stageSelections[2])?.label
                      : 'Pending question calibration...'}
                  </div>
                </div>

                {/* Stage 3 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>3. Literature Gap</span>
                    {stageSubmitted[3] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[3]
                      ? activeCase.stages[2].options.find((o) => o.id === stageSelections[3])?.label
                      : 'Pending literature mapping...'}
                  </div>
                </div>

                {/* Stage 4 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>4. Objectives & Hypothesis</span>
                    {stageSubmitted[4] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[4]
                      ? activeCase.stages[3].options.find((o) => o.id === stageSelections[4])?.label
                      : 'Pending formulation...'}
                  </div>
                </div>

                {/* Stage 5 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>5. Sampling & Methods</span>
                    {stageSubmitted[5] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[5]
                      ? activeCase.stages[4].options.find((o) => o.id === stageSelections[5])?.label
                      : 'Pending architecture...'}
                  </div>
                </div>

                {/* Stage 6 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>6. Findings vs. Discussion</span>
                    {stageSubmitted[6] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[6]
                      ? activeCase.stages[5].options.find((o) => o.id === stageSelections[6])?.label
                      : 'Pending empirical reporting...'}
                  </div>
                </div>

                {/* Stage 7 Blueprint item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                    <span>7. Peer Audit & Iteration</span>
                    {stageSubmitted[7] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="font-extrabold text-slate-800">
                    {stageSelections[7]
                      ? activeCase.stages[6].options.find((o) => o.id === stageSelections[7])?.label
                      : 'Pending external review...'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* STAGE 8: COMPREHENSIVE RESEARCH EXECUTIVE BRIEFING & DEBRIEF */
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Hero Banner */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-md text-center max-w-4xl mx-auto space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <Award className="w-10 h-10" />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-950 font-black text-xs uppercase tracking-wider border border-emerald-300">
              Cambridge Global Perspectives • Research Certification
            </span>

            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'
              }`}
            >
              Research Project Completed!
            </h2>

            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              You have guided <strong>{activeCase.title}</strong> through all 7 stages of the
              scientific inquiry process, from problem framing through to peer-review audit and
              iterative refinement.
            </p>

            {/* Score Summary Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                Final Research Rigor Index
              </span>
              <div className="text-4xl md:text-5xl font-black text-emerald-700">
                {totalScore} <span className="text-2xl text-slate-400 font-bold">/ {maxTotalScore}</span>
              </div>
              <div className="text-xs font-bold text-slate-600">
                Rigor Rating:{' '}
                {totalScore >= 650
                  ? 'Master Principal Investigator (Distinction)'
                  : totalScore >= 500
                  ? 'Competent Research Fellow (Merit)'
                  : 'Apprentice Researcher (Needs Methodological Revision)'}
              </div>
            </div>

            {/* Case Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                size={isClassroomMode ? 'lg' : 'md'}
                isClassroomMode={isClassroomMode}
                onClick={() =>
                  handleRestart(
                    selectedCaseId === 'case-nutrition-fatigue'
                      ? 'case-microplastics-fishery'
                      : 'case-nutrition-fatigue'
                  )
                }
              >
                Play Alternative Case: {selectedCaseId === 'case-nutrition-fatigue' ? 'Case 2 (Estuary Plastics)' : 'Case 1 (School Nutrition)'}
              </Button>

              <Button
                variant="outline"
                size={isClassroomMode ? 'lg' : 'md'}
                isClassroomMode={isClassroomMode}
                onClick={() => handleRestart()}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Replay Current Case
              </Button>

              <Button
                variant="secondary"
                size={isClassroomMode ? 'lg' : 'md'}
                isClassroomMode={isClassroomMode}
                onClick={onExit}
              >
                Return to Unit Hub
              </Button>
            </div>
          </div>

          {/* Detailed Cambridge Competency Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                1. Deconstruction & Framing
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ability to deconstruct messy real-world issues into precise, investigable empirical
                questions with clear independent and dependent variables (Sections 2.1 & 2.4).
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileSearch className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                2. Scholarly Literature Gap
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mapping existing academic research to locate what is still missing, establishing the
                intellectual justification and originality of the study (Section 2.4).
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                3. Sampling & Instrument Rigor
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Preventing convenience sampling bias, establishing procedural control blanks, and
                triangulating quantitative and qualitative evidence (Sections 2.3 & 2.4).
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                4. Peer Audit & Iteration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Embracing the iterative 8-step cycle by welcoming external critique, controlling for
                confounding variables, and executing disciplined refinements (Section 2.5).
              </p>
            </div>
          </div>

          {/* Diagnosed Misconceptions Section (Formative Coaching) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-rose-700">
              <BookOpen className="w-4 h-4 text-rose-600" />
              <span>Pedagogical Diagnosis & Formative Coaching</span>
            </div>

            <h3 className="font-black text-slate-900 text-xl md:text-2xl">
              {diagnosedMisconceptions.length === 0
                ? 'Zero Misconceptions Detected! Flawless Scientific Rigor.'
                : `Diagnosed Conceptual Vulnerabilities (${diagnosedMisconceptions.length})`}
            </h3>

            {diagnosedMisconceptions.length === 0 ? (
              <p className="text-sm text-slate-600 leading-relaxed">
                Congratulations! You made optimal scientific decisions at every stage of the
                research lifecycle, demonstrating a mature understanding of research design, variable
                controls, and academic peer review.
              </p>
            ) : (
              <div className="space-y-4">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  During your playthrough, the following common student research misconceptions were
                  triggered. Review these coaching explanations to strengthen your Cambridge Component
                  02/03 performance:
                </p>

                {diagnosedMisconceptions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2 text-xs md:text-sm text-rose-950"
                  >
                    <div className="flex items-center justify-between font-extrabold text-rose-900">
                      <span>
                        Stage {item.stageNumber}: {item.title}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 font-bold">
                        Chosen: {item.optionLabel}
                      </span>
                    </div>
                    <p className="text-slate-700 font-normal">{item.description}</p>
                    <div className="p-3 rounded-xl bg-white/90 border border-rose-200 font-semibold text-rose-900">
                      <strong>Teacher Coaching:</strong> {item.coaching}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Final Executive Summary Blueprint Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Academic Benchmark Takeaway</span>
            </div>
            <h3 className="font-black text-slate-900 text-lg">
              {activeCase.summaryDebrief.keyLearningTakeaway}
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              <strong>Cambridge Alignment:</strong> {activeCase.summaryDebrief.cambridgeRelevance}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
