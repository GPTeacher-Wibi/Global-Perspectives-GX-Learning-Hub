/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3B: UNIT 1 PERSPECTIVE-BASED CASE CHALLENGE (BENCHMARK GAME)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 6–21)
 *
 * Sequence:
 * CASE -> INFORMATION -> STUDENT DECISION -> CONSEQUENCE -> NEW INFORMATION -> NEXT DECISION -> FINAL OUTCOME
 *
 * Pedagogical Stages:
 * 1. Understand the Situation (Deconstruction)
 * 2. Identify the Voices (Stakeholder Recognition)
 * 3. Identify the Perspectives (4 Lenses & 4 Scales Matrix)
 * 4. Compare Interests & Tensions (Analyzing Trade-offs)
 * 5. Find the Overlap (Common Ground Discovery)
 * 6. Make the Decision (Formulating the Bridge Solution)
 * 7. Final Challenge & Consequence (Resilience against Unexpected Events)
 * 8. Comprehensive Diagnostic Debrief (Skill Competencies & Practice Recommendations)
 */

import React, { useState, useMemo } from 'react';
import {
  UNIT_1_CASE_CHALLENGES,
  CaseScenario,
  StakeholderProfile,
  PerspectiveLens,
  PerspectiveLevel,
  CaseDecisionOption
} from '../../../data/games/unit1Game';
import {
  scoringEngine,
  SCENARIO_DECISION_POLICY,
  BINARY_CLASSIFICATION_POLICY
} from '../../../services/scoringEngine';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  Anchor,
  Ship,
  Leaf,
  Compass,
  Car,
  HeartPulse,
  TrendingUp,
  Globe2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  Users,
  Scale,
  Layers,
  ShieldAlert,
  BookOpen,
  ChevronRight,
  Info
} from 'lucide-react';

export interface PerspectiveCaseChallengeProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

const LENS_OPTIONS: PerspectiveLens[] = ['Cultural', 'Economic', 'Political', 'Social'];
const LEVEL_OPTIONS: PerspectiveLevel[] = ['Personal', 'Local', 'National', 'Global'];

export const PerspectiveCaseChallenge: React.FC<PerspectiveCaseChallengeProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  // Active Case Selection (default to Case 1: Teluk Bakau)
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-teluk-bakau');
  const activeCase: CaseScenario = useMemo(() => {
    return (
      UNIT_1_CASE_CHALLENGES.find((c) => c.id === selectedCaseId) ||
      UNIT_1_CASE_CHALLENGES[0]
    );
  }, [selectedCaseId]);

  // Game Lifecycle State (Stages 1 to 7, plus Stage 8 for final debrief)
  const [currentStage, setCurrentStage] = useState<number>(1);

  // Stage 1 State: Situation Comprehension
  const [stage1SelectedOpt, setStage1SelectedOpt] = useState<string | null>(null);
  const [stage1Submitted, setStage1Submitted] = useState<boolean>(false);

  // Stage 2 State: Stakeholder Voice Discovery
  const [viewedStakeholders, setViewedStakeholders] = useState<Set<string>>(new Set());
  const [activeStakeholderModal, setActiveStakeholderModal] = useState<StakeholderProfile | null>(null);

  // Stage 3 State: 4 Lenses & 4 Scales Matrix Classification
  const [stage3Selections, setStage3Selections] = useState<
    Record<string, { lens?: PerspectiveLens; level?: PerspectiveLevel }>
  >({});
  const [stage3Submitted, setStage3Submitted] = useState<boolean>(false);

  // Stage 4 State: Conflict & Tension Analysis
  const [stage4SelectedOpt, setStage4SelectedOpt] = useState<string | null>(null);
  const [stage4Submitted, setStage4Submitted] = useState<boolean>(false);

  // Stage 5 State: Common Ground Overlap
  const [stage5SelectedOpt, setStage5SelectedOpt] = useState<string | null>(null);
  const [stage5Submitted, setStage5Submitted] = useState<boolean>(false);

  // Stage 6 State: Policy Bridge Decision
  const [stage6SelectedDecision, setStage6SelectedDecision] = useState<string | null>(null);
  const [stage6Submitted, setStage6Submitted] = useState<boolean>(false);

  // Stage 7 State: Twist & Consequence Synthesis
  const [stage7SelectedOpt, setStage7SelectedOpt] = useState<string | null>(null);
  const [stage7Submitted, setStage7Submitted] = useState<boolean>(false);

  // Total Accumulated Score across stages
  const [stageScores, setStageScores] = useState<Record<number, number>>({
    1: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  });

  const totalScore = useMemo(() => {
    return (Object.values(stageScores) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);
  }, [stageScores]);

  const maxTotalScore = 1000; // Calibrated 1000-point benchmark case

  // Helper to render stakeholder icons safely
  const renderStakeholderIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Anchor':
        return <Anchor className={className} />;
      case 'Ship':
        return <Ship className={className} />;
      case 'Leaf':
        return <Leaf className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Car':
        return <Car className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Globe2':
        return <Globe2 className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  // Reset function to restart the case
  const handleRestartCase = () => {
    setCurrentStage(1);
    setStage1SelectedOpt(null);
    setStage1Submitted(false);
    setViewedStakeholders(new Set());
    setActiveStakeholderModal(null);
    setStage3Selections({});
    setStage3Submitted(false);
    setStage4SelectedOpt(null);
    setStage4Submitted(false);
    setStage5SelectedOpt(null);
    setStage5Submitted(false);
    setStage6SelectedDecision(null);
    setStage6Submitted(false);
    setStage7SelectedOpt(null);
    setStage7Submitted(false);
    setStageScores({ 1: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });
  };

  // Switch Case Scenario
  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    handleRestartCase();
  };

  // --------------------------------------------------------------------------
  // STAGE 1 HANDLERS
  // --------------------------------------------------------------------------
  const handleStage1Submit = () => {
    if (!stage1SelectedOpt) return;
    setStage1Submitted(true);
    const selected = activeCase.stages.stage1Comprehension.options.find(
      (o) => o.id === stage1SelectedOpt
    );
    if (selected && selected.isCorrect) {
      setStageScores((prev) => ({ ...prev, 1: 150 }));
    }
  };

  // --------------------------------------------------------------------------
  // STAGE 3 HANDLERS (Matrix Assignment)
  // --------------------------------------------------------------------------
  const handleStage3LensSelect = (stakeholderId: string, lens: PerspectiveLens) => {
    if (stage3Submitted) return;
    setStage3Selections((prev) => ({
      ...prev,
      [stakeholderId]: {
        ...prev[stakeholderId],
        lens
      }
    }));
  };

  const handleStage3LevelSelect = (stakeholderId: string, level: PerspectiveLevel) => {
    if (stage3Submitted) return;
    setStage3Selections((prev) => ({
      ...prev,
      [stakeholderId]: {
        ...prev[stakeholderId],
        level
      }
    }));
  };

  const isStage3Complete = useMemo(() => {
    return activeCase.stakeholders.every((sh) => {
      const sel = stage3Selections[sh.id];
      return sel && sel.lens && sel.level;
    });
  }, [activeCase.stakeholders, stage3Selections]);

  const handleStage3Submit = () => {
    if (!isStage3Complete) return;
    setStage3Submitted(true);
    let correctMatches = 0;
    const totalChecks = activeCase.stakeholders.length * 2; // Lens & Level for each

    activeCase.stages.stage3LensAndLevel.items.forEach((item) => {
      const sel = stage3Selections[item.stakeholderId];
      if (sel?.lens === item.correctLens) correctMatches += 1;
      if (sel?.level === item.correctLevel) correctMatches += 1;
    });

    const accuracyRatio = correctMatches / totalChecks;
    const breakdown = scoringEngine.calculateItemScore(
      {
        difficulty: 3,
        isCorrect: accuracyRatio >= 0.75,
        partialAccuracy: accuracyRatio
      },
      BINARY_CLASSIFICATION_POLICY
    );
    // Scale up to 250 points max for Stage 3 matrix
    const finalScore = Math.round(accuracyRatio * 250);
    setStageScores((prev) => ({ ...prev, 3: finalScore }));
  };

  // --------------------------------------------------------------------------
  // STAGE 4 HANDLERS (Conflict)
  // --------------------------------------------------------------------------
  const handleStage4Submit = () => {
    if (!stage4SelectedOpt) return;
    setStage4Submitted(true);
    const opt = activeCase.stages.stage4ConflictAnalysis.options.find(
      (o) => o.id === stage4SelectedOpt
    );
    if (opt?.isCorrect) {
      setStageScores((prev) => ({ ...prev, 4: 150 }));
    }
  };

  // --------------------------------------------------------------------------
  // STAGE 5 HANDLERS (Common Ground)
  // --------------------------------------------------------------------------
  const handleStage5Submit = () => {
    if (!stage5SelectedOpt) return;
    setStage5Submitted(true);
    const opt = activeCase.stages.stage5CommonGround.options.find(
      (o) => o.id === stage5SelectedOpt
    );
    if (opt?.isCorrect) {
      setStageScores((prev) => ({ ...prev, 5: 150 }));
    }
  };

  // --------------------------------------------------------------------------
  // STAGE 6 HANDLERS (Bridge Policy Decision)
  // --------------------------------------------------------------------------
  const handleStage6Submit = () => {
    if (!stage6SelectedDecision) return;
    setStage6Submitted(true);
    const decision = activeCase.stages.stage6PolicyDecision.options.find(
      (d) => d.id === stage6SelectedDecision
    );
    if (decision?.isOptimalBridge) {
      setStageScores((prev) => ({ ...prev, 6: 150 }));
    } else {
      setStageScores((prev) => ({ ...prev, 6: 50 })); // Partial credit for engaging
    }
  };

  // --------------------------------------------------------------------------
  // STAGE 7 HANDLERS (Twist & Synthesis)
  // --------------------------------------------------------------------------
  const handleStage7Submit = () => {
    if (!stage7SelectedOpt) return;
    setStage7Submitted(true);
    const opt = activeCase.stages.stage7TwistAndSynthesis.options.find(
      (o) => o.id === stage7SelectedOpt
    );
    if (opt?.isCorrect) {
      setStageScores((prev) => ({ ...prev, 7: 150 }));
    }
  };

  // When student finishes stage 7 and proceeds to stage 8
  const handleFinishCase = () => {
    setCurrentStage(8);
    if (onComplete) {
      onComplete(totalScore, maxTotalScore);
    }
  };

  // Stage names for the navigation bar
  const STAGE_NAMES = [
    'Case Briefing',
    'Stakeholder Voices',
    'Perspective Matrix',
    'Tension Analysis',
    'Common Ground',
    'Policy Decision',
    'Resilience Test',
    'Diagnostic Debrief'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* ------------------------------------------------------------------ */}
      {/* TOP CONTROLS & CASE SELECTOR */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                Unit 1 Benchmark Game
              </span>
              <Badge variant="purple" isClassroomMode={isClassroomMode}>
                Multi-Stakeholder Case
              </Badge>
            </div>
            <h1
              className={`font-black text-slate-900 tracking-tight leading-tight mt-0.5 ${
                isClassroomMode ? 'text-2xl' : 'text-xl'
              }`}
            >
              Perspective Matrix: Case Challenge
            </h1>
          </div>
        </div>

        {/* Case Switcher & Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Case Dropdown */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
            {UNIT_1_CASE_CHALLENGES.map((scenario) => {
              const isCurrent = scenario.id === selectedCaseId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleSelectCase(scenario.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-white text-purple-900 shadow-xs border border-purple-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Case {scenario.caseNumber}: {scenario.title.split(':')[0]}
                </button>
              );
            })}
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-black text-sm">
            Score: {totalScore} / {maxTotalScore}
          </div>

          <Button
            variant="outline"
            size="sm"
            isClassroomMode={isClassroomMode}
            onClick={handleRestartCase}
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            title="Restart current case"
          >
            Restart
          </Button>

          <Button
            variant="ghost"
            size="sm"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            title="Return to Unit Hub"
          >
            Exit
          </Button>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 7-STAGE PROGRESS STEPPER */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[650px] gap-2">
          {STAGE_NAMES.map((name, index) => {
            const stageNum = index + 1;
            const isCompleted = currentStage > stageNum;
            const isCurrent = currentStage === stageNum;
            return (
              <div
                key={name}
                className={`flex-1 flex flex-col items-center text-center px-1 transition-all ${
                  isCurrent ? 'opacity-100 font-bold' : isCompleted ? 'opacity-80' : 'opacity-40'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-1.5 transition-all ${
                    isCompleted
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : isCurrent
                      ? 'bg-purple-600 text-white ring-4 ring-purple-100 shadow-xs'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : stageNum}
                </div>
                <span className="text-[11px] leading-tight text-slate-700 truncate max-w-[90px]">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-3">
          <ProgressBar
            value={currentStage}
            max={8}
            variant="purple"
            size="sm"
            showPercentage={false}
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 1: SEE THE SITUATION (CASE BRIEFING & DECONSTRUCTION) */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 1 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 1 of 7 • Case Deconstruction
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              {activeCase.title}
            </h2>
            <p className="text-sm font-semibold text-purple-800">
              Location: {activeCase.location}
            </p>
          </div>

          {/* Context Background Cards */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Situation Briefing & Background:</span>
            </div>
            {activeCase.backgroundStory.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Core Tension Callout */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">The Core Tension:</span>
              <span>{activeCase.keyTension}</span>
            </div>
          </div>

          {/* Comprehension Checkpoint */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Diagnostic Check: {activeCase.stages.stage1Comprehension.prompt}
            </h3>

            <div className="space-y-3" role="radiogroup">
              {activeCase.stages.stage1Comprehension.options.map((opt) => {
                const isSelected = stage1SelectedOpt === opt.id;
                let optStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
                if (stage1Submitted) {
                  if (opt.isCorrect) {
                    optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    optStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-purple-50 border-purple-500 text-purple-950 ring-2 ring-purple-200 font-semibold';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => !stage1Submitted && setStage1SelectedOpt(opt.id)}
                    disabled={stage1Submitted}
                    className={`w-full min-h-[52px] p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isSelected
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-slate-400'
                      }`}
                    >
                      {opt.id.slice(-1).toUpperCase()}
                    </div>
                    <span className="leading-snug text-sm sm:text-base">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {stage1Submitted && (
              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 text-sm space-y-3 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Cambridge Analytical Takeaway:</span>
                </div>
                <p>
                  {
                    activeCase.stages.stage1Comprehension.options.find(
                      (o) => o.id === stage1SelectedOpt
                    )?.explanation
                  }
                </p>
                <div className="pt-2 flex justify-end">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setCurrentStage(2)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Proceed to Stage 2: Stakeholder Voices
                  </Button>
                </div>
              </div>
            )}

            {!stage1Submitted && (
              <div className="flex justify-end pt-2">
                <Button
                  variant="primary"
                  size="md"
                  disabled={!stage1SelectedOpt}
                  onClick={handleStage1Submit}
                >
                  Confirm Understanding
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 2: IDENTIFY THE VOICES (STAKEHOLDER RECOGNITION) */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 2 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 2 of 7 • Stakeholder Recognition
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              Hear the 4 Stakeholder Voices
            </h2>
            <p className="text-slate-600 text-sm">
              Tap each stakeholder card to inspect their lived context, verbatim quote, core
              priority, and hidden concerns.
            </p>
          </div>

          {/* Stakeholder Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCase.stakeholders.map((sh) => {
              const isViewed = viewedStakeholders.has(sh.id);
              return (
                <div
                  key={sh.id}
                  onClick={() => {
                    setActiveStakeholderModal(sh);
                    setViewedStakeholders((prev) => new Set(prev).add(sh.id));
                  }}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isViewed
                      ? 'border-purple-300 bg-purple-50/40 hover:border-purple-500'
                      : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      {renderStakeholderIcon(sh.avatarIcon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900 text-base">{sh.name}</h3>
                        {isViewed && (
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            Inspected
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{sh.role}</p>
                      <p className="text-[11px] text-slate-600 mt-0.5">{sh.organization}</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200/80 text-xs italic text-slate-700">
                    {sh.quote}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-purple-700">
                    <span>Tap to view analytical details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal / Detailed Card View for Selected Stakeholder */}
          {activeStakeholderModal && (
            <div className="p-5 rounded-2xl bg-purple-50 border-2 border-purple-300 text-purple-950 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-purple-200 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-200 text-purple-800 flex items-center justify-center">
                    {renderStakeholderIcon(activeStakeholderModal.avatarIcon, 'w-4 h-4')}
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{activeStakeholderModal.name}</h4>
                    <span className="text-xs opacity-75">{activeStakeholderModal.role}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStakeholderModal(null)}
                  className="text-xs font-bold px-2 py-1 bg-purple-200 rounded-md hover:bg-purple-300"
                >
                  Close Details
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-purple-200">
                  <span className="font-bold text-slate-900 block mb-1">Core Priority:</span>
                  <p className="text-slate-700">{activeStakeholderModal.corePriority}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-purple-200">
                  <span className="font-bold text-slate-900 block mb-1">Key Concern:</span>
                  <p className="text-slate-700">{activeStakeholderModal.keyConcern}</p>
                </div>
              </div>

              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-950">
                <span className="font-bold block mb-1">Textbook Analytical Explanation:</span>
                <p>{activeStakeholderModal.explanation}</p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStage(1)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Case
            </Button>
            <Button
              variant="primary"
              size="md"
              disabled={viewedStakeholders.size < 2}
              onClick={() => setCurrentStage(3)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Proceed to Stage 3: Perspective Matrix
            </Button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 3: IDENTIFY THE PERSPECTIVES (4 LENSES & 4 SCALES MATRIX) */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 3 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 3 of 7 • Lens & Level Classification
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              The Two-Dimensional Perspective Matrix
            </h2>
            <p className="text-slate-600 text-sm">
              Assign each stakeholder their primary <strong>Analytical Lens</strong> (Type: Cultural, Economic,
              Political, Social) and <strong>Scale</strong> (Level: Personal, Local, National, Global).
            </p>
          </div>

          {/* Matrix Items */}
          <div className="space-y-6">
            {activeCase.stakeholders.map((sh) => {
              const currentSel = stage3Selections[sh.id] || {};
              const targetItem = activeCase.stages.stage3LensAndLevel.items.find(
                (i) => i.stakeholderId === sh.id
              );

              const isLensCorrect = currentSel.lens === targetItem?.correctLens;
              const isLevelCorrect = currentSel.level === targetItem?.correctLevel;

              return (
                <div
                  key={sh.id}
                  className={`p-5 rounded-2xl border-2 transition-all space-y-4 ${
                    stage3Submitted
                      ? isLensCorrect && isLevelCorrect
                        ? 'border-emerald-300 bg-emerald-50/30'
                        : 'border-amber-300 bg-amber-50/20'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      {renderStakeholderIcon(sh.avatarIcon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900 text-base">{sh.name}</h3>
                        {stage3Submitted && (
                          <Badge
                            variant={isLensCorrect && isLevelCorrect ? 'emerald' : 'amber'}
                          >
                            {isLensCorrect && isLevelCorrect
                              ? 'Fully Correct (2/2)'
                              : isLensCorrect || isLevelCorrect
                              ? 'Partially Correct (1/2)'
                              : 'Review Needed (0/2)'}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 italic">"{sh.quote}"</p>
                    </div>
                  </div>

                  {/* Dual Selector: Lens (Type) & Level (Scale) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Lens Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        1. Primary Analytical Lens (Type):
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {LENS_OPTIONS.map((lens) => {
                          const isSelected = currentSel.lens === lens;
                          let btnStyle = 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700';
                          if (stage3Submitted) {
                            if (lens === targetItem?.correctLens) {
                              btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                            } else if (isSelected && !isLensCorrect) {
                              btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                            } else {
                              btnStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-50';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-purple-100 border-purple-600 text-purple-950 font-bold ring-2 ring-purple-200';
                          }

                          return (
                            <button
                              key={lens}
                              onClick={() => handleStage3LensSelect(sh.id, lens)}
                              disabled={stage3Submitted}
                              className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all min-h-[44px] cursor-pointer ${btnStyle}`}
                            >
                              {lens} Lens
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Level Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        2. Primary Geographic Scale (Level):
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {LEVEL_OPTIONS.map((level) => {
                          const isSelected = currentSel.level === level;
                          let btnStyle = 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700';
                          if (stage3Submitted) {
                            if (level === targetItem?.correctLevel) {
                              btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                            } else if (isSelected && !isLevelCorrect) {
                              btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                            } else {
                              btnStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-50';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-purple-100 border-purple-600 text-purple-950 font-bold ring-2 ring-purple-200';
                          }

                          return (
                            <button
                              key={level}
                              onClick={() => handleStage3LevelSelect(sh.id, level)}
                              disabled={stage3Submitted}
                              className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all min-h-[44px] cursor-pointer ${btnStyle}`}
                            >
                              {level} Level
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Explanation if submitted */}
                  {stage3Submitted && targetItem && (
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1 mt-2">
                      <p>
                        <strong>Lens Justification:</strong> {targetItem.lensReasoning}
                      </p>
                      <p>
                        <strong>Level Justification:</strong> {targetItem.levelReasoning}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStage(2)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Voices
            </Button>

            {!stage3Submitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={!isStage3Complete}
                onClick={handleStage3Submit}
              >
                Validate Perspective Matrix
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => setCurrentStage(4)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Proceed to Stage 4: Tension Analysis
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 4: COMPARE INTERESTS & TENSIONS */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 4 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 4 of 7 • Conflict & Trade-off Analysis
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              Comparing Interests & Tensions
            </h2>
            <p className="text-slate-600 text-sm">
              In Global Perspectives, real dilemmas cannot be resolved with simplistic, one-sided answers.
            </p>
          </div>

          {/* Stage Prompt */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {activeCase.stages.stage4ConflictAnalysis.prompt}
            </h3>

            <div className="space-y-3" role="radiogroup">
              {activeCase.stages.stage4ConflictAnalysis.options.map((opt) => {
                const isSelected = stage4SelectedOpt === opt.id;
                let optStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
                if (stage4Submitted) {
                  if (opt.isCorrect) {
                    optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    optStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-purple-50 border-purple-500 text-purple-950 ring-2 ring-purple-200 font-semibold';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => !stage4Submitted && setStage4SelectedOpt(opt.id)}
                    disabled={stage4Submitted}
                    className={`w-full min-h-[52px] p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isSelected
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-slate-400'
                      }`}
                    >
                      {opt.id.slice(-1).toUpperCase()}
                    </div>
                    <span className="leading-snug text-sm sm:text-base">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {stage4Submitted && (
              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 text-sm space-y-2 animate-in fade-in">
                <span className="font-bold block">Pedagogical Evaluation:</span>
                <p>
                  {
                    activeCase.stages.stage4ConflictAnalysis.options.find(
                      (o) => o.id === stage4SelectedOpt
                    )?.explanation
                  }
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStage(3)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Matrix
            </Button>

            {!stage4Submitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={!stage4SelectedOpt}
                onClick={handleStage4Submit}
              >
                Submit Conflict Analysis
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => setCurrentStage(5)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Proceed to Stage 5: Common Ground
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 5: FIND THE OVERLAP (COMMON GROUND DISCOVERY) */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 5 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 5 of 7 • Common Ground Discovery
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              Locating the Overlapping Interests
            </h2>
            <p className="text-slate-600 text-sm">
              Opposing stakeholders rarely exist in complete isolation. Uncover the hidden shared dependencies
              that enable a sustainable bridge solution.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {activeCase.stages.stage5CommonGround.prompt}
            </h3>

            <div className="space-y-3" role="radiogroup">
              {activeCase.stages.stage5CommonGround.options.map((opt) => {
                const isSelected = stage5SelectedOpt === opt.id;
                let optStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
                if (stage5Submitted) {
                  if (opt.isCorrect) {
                    optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    optStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-purple-50 border-purple-500 text-purple-950 ring-2 ring-purple-200 font-semibold';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => !stage5Submitted && setStage5SelectedOpt(opt.id)}
                    disabled={stage5Submitted}
                    className={`w-full min-h-[52px] p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isSelected
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-slate-400'
                      }`}
                    >
                      {opt.id.slice(-1).toUpperCase()}
                    </div>
                    <span className="leading-snug text-sm sm:text-base">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {stage5Submitted && (
              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 text-sm space-y-2 animate-in fade-in">
                <span className="font-bold block">Pedagogical Evaluation:</span>
                <p>
                  {
                    activeCase.stages.stage5CommonGround.options.find(
                      (o) => o.id === stage5SelectedOpt
                    )?.explanation
                  }
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStage(4)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Tensions
            </Button>

            {!stage5Submitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={!stage5SelectedOpt}
                onClick={handleStage5Submit}
              >
                Identify Shared Interest
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => setCurrentStage(6)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Proceed to Stage 6: Policy Decision
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 6: MAKE THE DECISION (FORMULATING THE BRIDGE SOLUTION) */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 6 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 6 of 7 • Policy Bridge Decision
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              Formulating the Bridge Solution
            </h2>
            <p className="text-slate-600 text-sm">
              {activeCase.stages.stage6PolicyDecision.instruction}
            </p>
          </div>

          {/* Decision Cards */}
          <div className="space-y-4">
            {activeCase.stages.stage6PolicyDecision.options.map((opt) => {
              const isSelected = stage6SelectedDecision === opt.id;
              let cardStyle = 'border-slate-200 bg-white hover:border-slate-400';
              if (stage6Submitted) {
                if (opt.isOptimalBridge) {
                  cardStyle = 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-200';
                } else if (isSelected && !opt.isOptimalBridge) {
                  cardStyle = 'border-amber-400 bg-amber-50/40';
                } else {
                  cardStyle = 'border-slate-200 bg-slate-50/50 opacity-60';
                }
              } else if (isSelected) {
                cardStyle = 'border-purple-600 bg-purple-50/50 ring-2 ring-purple-200';
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => !stage6Submitted && setStage6SelectedDecision(opt.id)}
                  className={`p-6 rounded-2xl border-2 transition-all space-y-4 cursor-pointer ${cardStyle}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={
                            opt.approachType === 'balanced-bridge'
                              ? 'emerald'
                              : opt.approachType === 'unbalanced-commercial'
                              ? 'amber'
                              : 'blue'
                          }
                        >
                          {opt.approachType === 'balanced-bridge'
                            ? 'Integrated Bridge Policy'
                            : opt.approachType === 'unbalanced-commercial'
                            ? 'Single-Lens: Commercial'
                            : 'Single-Lens: Freeze'}
                        </Badge>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                        {opt.title}
                      </h3>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-bold ${
                        isSelected
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">{opt.description}</p>

                  {/* Multi-Dimensional Impact Meters */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center justify-between">
                      <span>Projected Multi-Lens Impact Model:</span>
                      <span className="text-[10px] font-normal text-slate-500 italic">(Simulated Policy Projections)</span>
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div>
                        <span className="text-slate-500 block">Economic:</span>
                        <div className="flex items-center gap-1.5 font-black text-slate-800">
                          <ProgressBar
                            value={opt.stakeholderImpact.economicScore}
                            max={100}
                            variant="amber"
                            size="sm"
                            showPercentage={false}
                          />
                          <span>{opt.stakeholderImpact.economicScore}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Social Equity:</span>
                        <div className="flex items-center gap-1.5 font-black text-slate-800">
                          <ProgressBar
                            value={opt.stakeholderImpact.socialScore}
                            max={100}
                            variant="blue"
                            size="sm"
                            showPercentage={false}
                          />
                          <span>{opt.stakeholderImpact.socialScore}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Environmental:</span>
                        <div className="flex items-center gap-1.5 font-black text-slate-800">
                          <ProgressBar
                            value={opt.stakeholderImpact.environmentalScore}
                            max={100}
                            variant="emerald"
                            size="sm"
                            showPercentage={false}
                          />
                          <span>{opt.stakeholderImpact.environmentalScore}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Cultural Heritage:</span>
                        <div className="flex items-center gap-1.5 font-black text-slate-800">
                          <ProgressBar
                            value={opt.stakeholderImpact.culturalScore}
                            max={100}
                            variant="purple"
                            size="sm"
                            showPercentage={false}
                          />
                          <span>{opt.stakeholderImpact.culturalScore}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Consequences Review */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 bg-white/90 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-700 block">Short-term Impact:</span>
                      <p className="text-slate-600 mt-0.5">{opt.shortTermConsequence}</p>
                    </div>
                    <div className="p-3 bg-white/90 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-700 block">Long-term Trajectory:</span>
                      <p className="text-slate-600 mt-0.5">{opt.longTermConsequence}</p>
                    </div>
                  </div>

                  {stage6Submitted && (
                    <div className="p-3.5 rounded-xl bg-purple-100/70 text-purple-950 text-xs font-medium border border-purple-200">
                      <strong>Policy Debrief:</strong> {opt.debriefFeedback}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStage(5)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Overlap
            </Button>

            {!stage6Submitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={!stage6SelectedDecision}
                onClick={handleStage6Submit}
              >
                Enact Policy Decision
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => setCurrentStage(7)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Proceed to Stage 7: Resilience Test
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 7: FINAL CHALLENGE & CONSEQUENCE (RESILIENCE TEST) */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 7 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Stage 7 of 7 • Resilience & Synthesis
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl' : 'text-2xl'
              }`}
            >
              The Real-World Consequence Test
            </h2>
            <p className="text-slate-600 text-sm">
              A robust Global Perspectives solution must withstand unexpected real-world shocks.
            </p>
          </div>

          {/* The Twist Box */}
          <div className="p-5 rounded-2xl bg-purple-50 border-2 border-purple-300 text-purple-950 space-y-3">
            <div className="flex items-center gap-2 text-purple-800 font-extrabold text-base">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span>Real-World Development: {activeCase.stages.stage7TwistAndSynthesis.twistTitle}</span>
            </div>
            <p className="text-sm leading-relaxed">
              {activeCase.stages.stage7TwistAndSynthesis.twistDescription}
            </p>
          </div>

          {/* Prompt */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {activeCase.stages.stage7TwistAndSynthesis.synthesisPrompt}
            </h3>

            <div className="space-y-3" role="radiogroup">
              {activeCase.stages.stage7TwistAndSynthesis.options.map((opt) => {
                const isSelected = stage7SelectedOpt === opt.id;
                let optStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
                if (stage7Submitted) {
                  if (opt.isCorrect) {
                    optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !opt.isCorrect) {
                    optStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-purple-50 border-purple-500 text-purple-950 ring-2 ring-purple-200 font-semibold';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => !stage7Submitted && setStage7SelectedOpt(opt.id)}
                    disabled={stage7Submitted}
                    className={`w-full min-h-[52px] p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isSelected
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-slate-400'
                      }`}
                    >
                      {opt.id.slice(-1).toUpperCase()}
                    </div>
                    <span className="leading-snug text-sm sm:text-base">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {stage7Submitted && (
              <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 text-sm space-y-2 animate-in fade-in">
                <span className="font-bold block">Cambridge Synthesis Insight:</span>
                <p>
                  {
                    activeCase.stages.stage7TwistAndSynthesis.options.find(
                      (o) => o.id === stage7SelectedOpt
                    )?.explanation
                  }
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStage(6)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Policy
            </Button>

            {!stage7Submitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={!stage7SelectedOpt}
                onClick={handleStage7Submit}
              >
                Validate Resilience Evaluation
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={handleFinishCase}
                rightIcon={<Award className="w-4 h-4" />}
              >
                View Final Diagnostic Debrief
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* STAGE 8: COMPREHENSIVE RESULTS & DIAGNOSTIC DEBRIEF */}
      {/* ------------------------------------------------------------------ */}
      {currentStage === 8 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-12 space-y-8 animate-in fade-in">
          {/* Header Banner */}
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="w-20 h-20 rounded-3xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto shadow-xs">
              <Award className="w-10 h-10" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
              Case Challenge Completed • Unit 1 Benchmark
            </span>
            <h2
              className={`font-black text-slate-900 tracking-tight ${
                isClassroomMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              Academic Performance & Diagnostic Debrief
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Case Scenario: <strong>{activeCase.title}</strong>
            </p>
          </div>

          {/* Score Scoreboard Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-center">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block">
                Total Score
              </span>
              <span className="text-3xl sm:text-4xl font-black text-purple-950 block mt-1">
                {totalScore}
              </span>
              <span className="text-xs text-purple-800">out of {maxTotalScore} pts</span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Case Accuracy
              </span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-950 block mt-1">
                {Math.round((totalScore / maxTotalScore) * 100)}%
              </span>
              <span className="text-xs text-emerald-800">weighted proficiency</span>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Policy Bridge Rating
              </span>
              <span className="text-3xl sm:text-4xl font-black text-blue-950 block mt-1">
                {stageScores[6] >= 150 ? 'Exemplary' : 'Developing'}
              </span>
              <span className="text-xs text-blue-800">multi-lens synthesis</span>
            </div>
          </div>

          {/* Detailed Skill Competency Breakdown */}
          <div className="max-w-3xl mx-auto space-y-3">
            <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600" />
              <span>Cambridge Core Analytical Competencies:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">1. Situation Deconstruction (Stage 1)</span>
                  <span className="text-purple-700">{stageScores[1]} / 150 pts</span>
                </div>
                <ProgressBar value={stageScores[1]} max={150} variant="purple" size="sm" showPercentage={false} />
                <p className="text-[11px] text-slate-600 mt-1">
                  Ability to discern multi-stakeholder conflicts without simplistic stereotyping.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">2. Perspective Matrix: Lenses & Scales (Stage 3)</span>
                  <span className="text-purple-700">{stageScores[3]} / 250 pts</span>
                </div>
                <ProgressBar value={stageScores[3]} max={250} variant="purple" size="sm" showPercentage={false} />
                <p className="text-[11px] text-slate-600 mt-1">
                  Accurate differentiation between Type (Cultural/Economic/Political/Social) and Scale (Personal/Local/National/Global).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">3. Conflict & Common Ground (Stages 4 & 5)</span>
                  <span className="text-purple-700">{stageScores[4] + stageScores[5]} / 300 pts</span>
                </div>
                <ProgressBar
                  value={stageScores[4] + stageScores[5]}
                  max={300}
                  variant="purple"
                  size="sm"
                  showPercentage={false}
                />
                <p className="text-[11px] text-slate-600 mt-1">
                  Recognizing trade-offs and identifying hidden shared dependencies between opponents.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-800">4. Policy Bridge Synthesis & Resilience (Stages 6 & 7)</span>
                  <span className="text-purple-700">{stageScores[6] + stageScores[7]} / 300 pts</span>
                </div>
                <ProgressBar
                  value={stageScores[6] + stageScores[7]}
                  max={300}
                  variant="purple"
                  size="sm"
                  showPercentage={false}
                />
                <p className="text-[11px] text-slate-600 mt-1">
                  Constructing balanced solutions that withstand real-world economic, ecological, and social shocks.
                </p>
              </div>
            </div>
          </div>

          {/* Formative Diagnostic Advice & Targeted Practice */}
          <div className="p-6 rounded-2xl bg-purple-50/80 border border-purple-200 max-w-3xl mx-auto space-y-3 text-sm text-purple-950">
            <h4 className="font-extrabold text-base flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span>Diagnostic Recommendations:</span>
            </h4>
            <ul className="list-disc list-inside space-y-1.5 pl-1 leading-relaxed text-slate-700">
              <li>
                <strong>Review Textbook Section 1.3 (pp. 13–16):</strong> Review the "Type vs. Level" distinction.
                Remember that every real issue has both an analytical lens and a geographic scale.
              </li>
              <li>
                <strong>Practice in Unit 1 Practice Bank:</strong> Reinforce your understanding with the 15 verified
                practice questions covering Fact vs. Perspective, Dynamic Evolution, and Multi-Lens Cases.
              </li>
              <li>
                <strong>Replay Alternate Case:</strong> Try tackling{' '}
                <strong>
                  {selectedCaseId === 'case-teluk-bakau'
                    ? 'Case 2: Trans-Metropolis Clean Air Transit'
                    : 'Case 1: Teluk Bakau Harbor & Mangrove Corridor'}
                </strong>{' '}
                to apply these analytical lenses to an urban public transport and worker livelihood dilemma.
              </li>
            </ul>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-slate-100">
            <Button
              variant="outline"
              size="lg"
              onClick={handleRestartCase}
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Replay This Case
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const nextId =
                  selectedCaseId === 'case-teluk-bakau'
                    ? 'case-trans-metropolis'
                    : 'case-teluk-bakau';
                handleSelectCase(nextId);
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Play {selectedCaseId === 'case-teluk-bakau' ? 'Case 2 (Trans-Metropolis)' : 'Case 1 (Teluk Bakau)'}
            </Button>

            <Button variant="primary" size="lg" onClick={onExit}>
              Return to Unit Hub
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
