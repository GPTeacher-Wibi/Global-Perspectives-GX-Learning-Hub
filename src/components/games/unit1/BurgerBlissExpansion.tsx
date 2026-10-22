/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 1: BURGER BLISS GLOBAL EXPANSION (CANONICAL MICRO-GAME g1-3)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 8–16)
 * Unit 1 Case Study: Section 1.1 (pp. 8–9) "When Global Business Meets Local Reality"
 * Focus: Cross-Perspective Interaction, Lenses, Scales, Trade-offs & Common Ground
 * Touch-First IFP Target: Min 48px target sizes, high-contrast, zero-pill discipline
 */

import React, { useState, useMemo } from 'react';
import {
  LensType,
  ScaleLevel,
  StakeholderProfile,
  ScenarioQuestion,
  STAKEHOLDERS,
  STAGE_1_ITEMS,
  STAGE_2_ITEMS,
  STAGE_3_ITEMS,
  STAGE_4_ITEMS,
  FINAL_SYNTHESIS_TASK
} from '../../../data/games/burgerBlissData';
import { storageService } from '../../../services/storageService';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  Utensils,
  Briefcase,
  Store,
  GraduationCap,
  Landmark,
  Truck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  Scale,
  Award,
  BookOpen,
  ChevronRight,
  Globe2,
  Users,
  Compass,
  Check
} from 'lucide-react';

export interface BurgerBlissExpansionProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

type GameScreen = 'intro' | 'playing' | 'final-synthesis' | 'results';

export const BurgerBlissExpansion: React.FC<BurgerBlissExpansionProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  // Game flow state
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3 | 4>(1);
  const [itemIndexInStage, setItemIndexInStage] = useState<number>(0);

  // Active question state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Stage 5 Final Synthesis state
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [isSynthesisSubmitted, setIsSynthesisSubmitted] = useState<boolean>(false);

  // Performance tracking
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [stageScores, setStageScores] = useState<Record<number, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
    4: { correct: 0, total: 0 },
    5: { correct: 0, total: 0 }
  });

  // Current stage items
  const stageItems: ScenarioQuestion[] = useMemo(() => {
    switch (currentStage) {
      case 1:
        return STAGE_1_ITEMS;
      case 2:
        return STAGE_2_ITEMS;
      case 3:
        return STAGE_3_ITEMS;
      case 4:
        return STAGE_4_ITEMS;
      default:
        return STAGE_1_ITEMS;
    }
  }, [currentStage]);

  const currentItem: ScenarioQuestion = stageItems[itemIndexInStage] || stageItems[0];

  // Overall question numbering across single questions (4 + 5 + 4 + 3 = 16)
  const overallQuestionIndex = useMemo(() => {
    let count = itemIndexInStage;
    if (currentStage > 1) count += STAGE_1_ITEMS.length;
    if (currentStage > 2) count += STAGE_2_ITEMS.length;
    if (currentStage > 3) count += STAGE_3_ITEMS.length;
    return count;
  }, [currentStage, itemIndexInStage]);

  const TOTAL_SINGLE_ITEMS = 16; // 4 + 5 + 4 + 3
  const MAX_BASE_SCORE = 2000; // 16 * 100 (1600) + 1 * 400 (400) = 2000
  const MAX_STREAK_BONUS = 1300; // 0 + 20 + 40 + 60 + 80 + 100 * 11
  const MAX_POSSIBLE_SCORE = 3300; // 2000 + 1300

  // Render stakeholder avatar icon
  const renderStakeholderIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Store':
        return <Store className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Landmark':
        return <Landmark className={className} />;
      case 'Truck':
        return <Truck className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  // Submit single scenario item (Stages 1-4)
  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;
    setIsSubmitted(true);

    const chosenOption = currentItem.options.find((opt) => opt.id === selectedOptionId);
    const isCorrect = chosenOption ? chosenOption.isBestChoice : false;

    let earnedPoints = 0;
    if (isCorrect) {
      const streakBonus = Math.min(streak * 20, 100);
      earnedPoints = 100 + streakBonus;
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
    }

    setTotalPoints((prev) => prev + earnedPoints);

    setStageScores((prev) => ({
      ...prev,
      [currentStage]: {
        correct: prev[currentStage].correct + (isCorrect ? 1 : 0),
        total: prev[currentStage].total + 1
      }
    }));
  };

  // Navigate to next item or stage
  const handleNext = () => {
    setSelectedOptionId(null);
    setIsSubmitted(false);

    if (itemIndexInStage + 1 < stageItems.length) {
      setItemIndexInStage((prev) => prev + 1);
    } else if (currentStage < 4) {
      setCurrentStage((prev) => ((prev + 1) as 1 | 2 | 3 | 4));
      setItemIndexInStage(0);
    } else {
      // Proceed to Stage 5: Master Synthesis
      setScreen('final-synthesis');
    }
  };

  // Submit Final Synthesis (Stage 5)
  const handleSynthesisSubmit = () => {
    if (!selectedPlanId || isSynthesisSubmitted) return;
    setIsSynthesisSubmitted(true);

    const chosenPlan = FINAL_SYNTHESIS_TASK.synthesisOptions.find((p) => p.id === selectedPlanId);
    const isCorrect = chosenPlan ? chosenPlan.isBalancedSolution : false;

    const synthesisEarned = isCorrect ? 400 : 100;
    setTotalPoints((prev) => prev + synthesisEarned);

    setStageScores((prev) => ({
      ...prev,
      5: {
        correct: prev[5].correct + (isCorrect ? 1 : 0),
        total: prev[5].total + 1
      }
    }));
  };

  // Finish and view results
  const handleFinishToResults = () => {
    setScreen('results');

    // Save game score to storage service
    storageService.saveGameScore(1, 'g1-3', totalPoints);

    if (onComplete) {
      onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  // Restart game
  const handleRestart = () => {
    setScreen('intro');
    setCurrentStage(1);
    setItemIndexInStage(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setSelectedPlanId(null);
    setIsSynthesisSubmitted(false);
    setTotalPoints(0);
    setStreak(0);
    setMaxStreak(0);
    setStageScores({
      1: { correct: 0, total: 0 },
      2: { correct: 0, total: 0 },
      3: { correct: 0, total: 0 },
      4: { correct: 0, total: 0 },
      5: { correct: 0, total: 0 }
    });
  };

  // Overall accuracy
  const totalCorrect = (Object.values(stageScores) as { correct: number; total: number }[]).reduce((acc, curr) => acc + curr.correct, 0);
  const totalEvaluated = (Object.values(stageScores) as { correct: number; total: number }[]).reduce((acc, curr) => acc + curr.total, 0);
  const overallAccuracy = totalEvaluated > 0 ? Math.round((totalCorrect / totalEvaluated) * 100) : 0;

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO & CASE BRIEFING
  // --------------------------------------------------------------------------
  if (screen === 'intro') {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
        {/* Top Navigation */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Games
          </Button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="text-slate-900 font-bold">Unit 1 Benchmark</span>
            <span aria-hidden="true">·</span>
            <span>g1-3</span>
            <span aria-hidden="true">·</span>
            <Badge variant="green" isClassroomMode={isClassroomMode}>
              Case Application
            </Badge>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
              <Utensils className="w-8 h-8" />
            </div>

            <h1 className={`font-black text-slate-900 tracking-tight ${isClassroomMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
              Burger Bliss Global Expansion
            </h1>

            <p className={`text-slate-600 leading-relaxed ${isClassroomMode ? 'text-lg' : 'text-base'}`}>
              What happens when global business models collide with local cultural reality? Apply your understanding of <strong>Analytical Lenses</strong> and <strong>Perspective Scales</strong> to navigate a multi-stakeholder international expansion.
            </p>
          </div>

          {/* Textbook Grounding Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Cambridge Textbook Case Study: Section 1.1 (pp. 8–9)</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              When Western fast-food chain <strong>Burger Bliss</strong> expanded into Southeast Asia, sales collapsed. Why? Corporate executives assumed their Western menu (giant beef burgers, solo eating, dry bread) would succeed automatically. They had a perspective blind spot. In this simulation, you will guide Burger Bliss to understand diverse stakeholders and craft common ground.
            </p>
          </div>

          {/* 5 Stages Architecture Summary */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
              The 5-Stage Case Investigation
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-amber-700 block">Stage 1 · 4 Items</span>
                <span className="font-semibold text-slate-800 block">The Situation</span>
                <span className="text-slate-500 block text-[11px]">Unpack corporate blind spots and local dining traditions.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-amber-700 block">Stage 2 · 5 Items</span>
                <span className="font-semibold text-slate-800 block">Different Eyes</span>
                <span className="text-slate-500 block text-[11px]">Examine 5 key stakeholder lenses and scales.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-amber-700 block">Stage 3 · 4 Items</span>
                <span className="font-semibold text-slate-800 block">Conflict & Trade-offs</span>
                <span className="text-slate-500 block text-[11px]">Analyze tensions: standardization vs. local livelihoods.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-amber-700 block">Stage 4 · 3 Items</span>
                <span className="font-semibold text-slate-800 block">Strategic Choices</span>
                <span className="text-slate-500 block text-[11px]">Evaluate menu adaptation and vendor coexistence.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-amber-700 block">Stage 5 · Final</span>
                <span className="font-semibold text-slate-800 block">Common Ground</span>
                <span className="text-slate-500 block text-[11px]">Select the balanced multi-perspective expansion charter.</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-2">
            <Button
              variant="primary"
              size="lg"
              isClassroomMode={isClassroomMode}
              onClick={() => setScreen('playing')}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="px-8 shadow-sm hover:shadow"
            >
              Begin Case Investigation
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 2: ACTIVE PLAYING (STAGES 1 - 4)
  // --------------------------------------------------------------------------
  if (screen === 'playing') {
    const stageTitles: Record<number, string> = {
      1: 'Stage 1 · The Situation & Blind Spots',
      2: 'Stage 2 · See Through Different Eyes',
      3: 'Stage 3 · Perspective Conflict & Trade-offs',
      4: 'Stage 4 · Strategic Decisions'
    };

    const progressPercent = Math.round(((overallQuestionIndex + 1) / (TOTAL_SINGLE_ITEMS + 1)) * 100);

    return (
      <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
        {/* Header HUD */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                isClassroomMode={isClassroomMode}
                onClick={onExit}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Exit
              </Button>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {stageTitles[currentStage]}
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  Challenge {overallQuestionIndex + 1} of {TOTAL_SINGLE_ITEMS}
                </div>
              </div>
            </div>

            {/* Score & Streak HUD */}
            <div className="flex items-center gap-4 text-xs sm:text-sm font-medium">
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
            color="bg-amber-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Case Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Header & Title */}
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <div className="text-xs font-semibold text-slate-500">
              Case Inquiry {overallQuestionIndex + 1}
            </div>
            <h2 className={`font-black text-slate-900 tracking-tight ${isClassroomMode ? 'text-2xl' : 'text-xl'}`}>
              {currentItem.title}
            </h2>
          </div>

          {/* Stakeholder Profile Card if present */}
          {currentItem.activeStakeholder && (
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-600 text-white shrink-0 mt-0.5">
                {renderStakeholderIcon(currentItem.activeStakeholder.avatarIcon, 'w-5 h-5')}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-slate-900 text-sm">{currentItem.activeStakeholder.name}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-xs text-slate-600 font-medium">{currentItem.activeStakeholder.role}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-xs text-slate-500">{currentItem.activeStakeholder.location}</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-800 italic font-medium">
                  {currentItem.activeStakeholder.quote}
                </blockquote>
              </div>
            </div>
          )}

          {/* Context Situation */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900 block">The Developing Situation:</span>
            <p>{currentItem.contextSituation}</p>
          </div>

          {/* Prompt */}
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold tracking-wider text-amber-800">
              Investigation Prompt:
            </div>
            <p className={`font-bold text-slate-900 leading-snug ${isClassroomMode ? 'text-lg' : 'text-base'}`}>
              {currentItem.prompt}
            </p>
          </div>

          {/* Interactive Options */}
          <div className="space-y-3">
            {currentItem.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              const isCorrect = isSubmitted && option.isBestChoice;
              const isWrong = isSubmitted && isSelected && !option.isBestChoice;

              let cardStyle = 'border-slate-200 hover:border-amber-400 bg-white hover:bg-slate-50/50';
              if (isSelected && !isSubmitted) {
                cardStyle = 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-200';
              } else if (isCorrect) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
              } else if (isWrong) {
                cardStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              }

              return (
                <button
                  key={option.id}
                  onClick={() => {
                    if (!isSubmitted) setSelectedOptionId(option.id);
                  }}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 min-h-[56px] ${cardStyle}`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border mt-0.5 shrink-0 flex items-center justify-center ${
                      isSelected && !isSubmitted
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : isCorrect
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : isWrong
                        ? 'border-rose-600 bg-rose-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isCorrect && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    {isWrong && <AlertCircle className="w-3.5 h-3.5" />}
                    {isSelected && !isSubmitted && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>

                  <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {option.text}
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
                rightIcon={<ChevronRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Confirm Judgment
              </Button>
            </div>
          ) : (
            /* Consequence & Educational Feedback */
            <div className="space-y-4 pt-2 animate-fadeIn">
              {(() => {
                const chosenOption = currentItem.options.find((opt) => opt.id === selectedOptionId);
                const isCorrect = chosenOption ? chosenOption.isBestChoice : false;

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
                          {isCorrect ? 'Insightful Evaluation!' : 'Perspective Analysis Needed'}
                        </div>

                        <p className="text-sm leading-relaxed text-slate-800">
                          {chosenOption?.feedback}
                        </p>

                        {/* Pedagogical Key Takeaway */}
                        <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                          <span className="font-bold text-slate-700">Core Lesson: </span>
                          {currentItem.pedagogicalKey}
                        </div>

                        {/* Misconception Alert Banner */}
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
                  {overallQuestionIndex + 1 === TOTAL_SINGLE_ITEMS
                    ? 'Advance to Stage 5: Final Synthesis Blueprint'
                    : 'Next Case Step'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 3: STAGE 5 — FINAL SYNTHESIS MASTER BLUEPRINT
  // --------------------------------------------------------------------------
  if (screen === 'final-synthesis') {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
        {/* Header HUD */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              isClassroomMode={isClassroomMode}
              onClick={onExit}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Exit
            </Button>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Stage 5 · Master Case Synthesis
              </div>
              <div className="text-sm font-semibold text-slate-800">
                The Final Expansion Blueprint
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Points:</span>
            <span className="font-bold text-slate-900">{totalPoints}</span>
          </div>
        </div>

        {/* Master Case Evaluation Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Cambridge Unit 1 Capstone Synthesis Task
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {FINAL_SYNTHESIS_TASK.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {FINAL_SYNTHESIS_TASK.scenarioBrief}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium">
            <strong>Synthesis Objective:</strong> {FINAL_SYNTHESIS_TASK.taskPrompt}
          </div>

          {/* 3 Proposals Grid */}
          <div className="space-y-4">
            {FINAL_SYNTHESIS_TASK.synthesisOptions.map((proposal) => {
              const isSelected = selectedPlanId === proposal.id;
              const isSubmittedCorrect = isSynthesisSubmitted && proposal.isBalancedSolution;
              const isSubmittedWrong = isSynthesisSubmitted && isSelected && !proposal.isBalancedSolution;

              let cardStyle = 'border-slate-200 hover:border-amber-400 bg-white hover:bg-slate-50/40';
              if (isSelected && !isSynthesisSubmitted) {
                cardStyle = 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-200';
              } else if (isSubmittedCorrect) {
                cardStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
              } else if (isSubmittedWrong) {
                cardStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              }

              return (
                <div
                  key={proposal.id}
                  onClick={() => {
                    if (!isSynthesisSubmitted) setSelectedPlanId(proposal.id);
                  }}
                  className={`p-5 rounded-2xl border transition-all space-y-3 cursor-pointer ${cardStyle}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-900 text-base">{proposal.label}</div>
                    {isSelected && !isSynthesisSubmitted && (
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Selected</span>
                    )}
                    {isSubmittedCorrect && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Validated Multi-Scale Synthesis
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                    {proposal.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-100">
                    <div className="space-y-1">
                      <span className="font-bold text-emerald-800 block">Perspective Strengths:</span>
                      <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                        {proposal.strengths.map((str, idx) => (
                          <li key={idx}>{str}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <span className="font-bold text-rose-800 block">Blind Spots / Trade-offs:</span>
                      <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                        {proposal.weaknesses.map((w, idx) => (
                          <li key={idx}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {isSynthesisSubmitted && (
                    <div className="mt-3 p-3 bg-white/90 rounded-xl border border-slate-200 text-xs text-slate-700 animate-fadeIn">
                      <span className="font-bold text-slate-900">Analysis: </span>
                      {proposal.analysisFeedback}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          {!isSynthesisSubmitted ? (
            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="lg"
                isClassroomMode={isClassroomMode}
                onClick={handleSynthesisSubmit}
                disabled={!selectedPlanId}
                rightIcon={<Award className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Ratify Master Proposal
              </Button>
            </div>
          ) : (
            <div className="flex justify-end pt-2 animate-fadeIn">
              <Button
                variant="primary"
                size="lg"
                isClassroomMode={isClassroomMode}
                onClick={handleFinishToResults}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                View Final Case Scorecard
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 4: RESULTS SCORECARD
  // --------------------------------------------------------------------------
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          isClassroomMode={isClassroomMode}
          onClick={onExit}
          leftIcon={<ArrowLeft className="w-4 h-4" />}
        >
          Exit to Games
        </Button>

        <div className="text-xs font-semibold text-slate-500">
          Burger Bliss Global Expansion · Case Solved
        </div>
      </div>

      {/* Main Scorecard */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
            <Award className="w-10 h-10" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Cross-Perspective Expansion Certificate
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            You successfully applied analytical lenses, perspective scales, and trade-off synthesis to resolve the Burger Bliss expansion dilemma.
          </p>
        </div>

        {/* Master Metrics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Score</div>
            <div className="text-3xl font-black text-amber-700">{totalPoints}</div>
            <div className="text-xs text-slate-500">Max Possible: {MAX_POSSIBLE_SCORE} (Base: {MAX_BASE_SCORE})</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Accuracy Rate</div>
            <div className="text-3xl font-black text-emerald-700">{overallAccuracy}%</div>
            <div className="text-xs text-slate-500">{totalCorrect} of {totalEvaluated} correct</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Best Streak</div>
            <div className="text-3xl font-black text-indigo-700">{maxStreak}</div>
            <div className="text-xs text-slate-500">Consecutive insights</div>
          </div>
        </div>

        {/* Breakdown by Stage */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
            Mastery by Stage Progression
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((st) => {
              const titles = ['Situation', 'Different Eyes', 'Conflicts', 'Decisions', 'Synthesis'];
              const score = stageScores[st];
              const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

              return (
                <div key={st} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Stage {st}: {titles[st - 1]}</span>
                    <span className="font-semibold text-slate-600">{pct}%</span>
                  </div>
                  <ProgressBar
                    value={pct}
                    color={pct >= 75 ? 'bg-emerald-600' : pct >= 50 ? 'bg-amber-600' : 'bg-slate-400'}
                    size="sm"
                    showLabel={false}
                  />
                  <div className="text-[11px] text-slate-500 text-right">
                    {score.correct} / {score.total} items
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Takeaway Recap */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
          <div className="font-bold flex items-center gap-2 text-amber-900">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Cambridge Exam Takeaway (Unit 1 Review):</span>
          </div>
          <p className="leading-relaxed">
            In Global Perspectives, real-world problems are rarely solved by finding a single "correct" perspective. As shown in the Burger Bliss case, sustainable decisions require <strong>glocalization</strong>: recognizing that corporate economic goals must be balanced with local cultural traditions, small vendor livelihoods, and municipal environmental regulations across personal, local, national, and global scales!
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
          <Button
            variant="outline"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={handleRestart}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Replay Case Simulation
          </Button>

          <Button
            variant="primary"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Back to Unit 1 Hub
          </Button>
        </div>
      </div>
    </div>
  );
};
