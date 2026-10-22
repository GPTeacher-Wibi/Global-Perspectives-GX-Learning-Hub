/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 1: PERSPECTIVE SWITCHER (CANONICAL MICRO-GAME g1-1)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 6–21)
 * Primary Focus: Four Analytical Lenses (Cultural, Economic, Political, Social)
 * Touch-First IFP Target: Min 48px target sizes, high-contrast, zero-pill discipline
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  LensType,
  LENS_DEFINITIONS,
  STAGE_1_ITEMS,
  STAGE_2_ITEMS,
  STAGE_3_ITEMS,
  FINAL_SYNTHESIS_CHALLENGE,
  SwitcherItem
} from '../../../data/games/perspectiveSwitcherData';
import { storageService } from '../../../services/storageService';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  Sparkles,
  TrendingUp,
  Landmark,
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Award,
  Layers,
  Info,
  ChevronRight,
  Target,
  Trophy,
  BookOpen
} from 'lucide-react';

export interface PerspectiveSwitcherProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

type GameScreen = 'intro' | 'playing' | 'final-challenge' | 'results';

export const PerspectiveSwitcher: React.FC<PerspectiveSwitcherProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  // Game flow state
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3>(1);
  const [itemIndexInStage, setItemIndexInStage] = useState<number>(0);

  // Active item submission state
  const [selectedLens, setSelectedLens] = useState<LensType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Performance tracking
  const [lensScores, setLensScores] = useState<Record<LensType, { correct: number; total: number }>>({
    cultural: { correct: 0, total: 0 },
    economic: { correct: 0, total: 0 },
    political: { correct: 0, total: 0 },
    social: { correct: 0, total: 0 }
  });

  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

  // Final Synthesis state: map of viewpoint id -> selected lens
  const [finalSelections, setFinalSelections] = useState<Record<string, LensType | null>>({
    'final-vp-1': null,
    'final-vp-2': null,
    'final-vp-3': null,
    'final-vp-4': null
  });
  const [finalSubmitted, setFinalSubmitted] = useState<boolean>(false);

  // Active items per stage
  const stageItems: SwitcherItem[] = useMemo(() => {
    switch (currentStage) {
      case 1:
        return STAGE_1_ITEMS;
      case 2:
        return STAGE_2_ITEMS;
      case 3:
        return STAGE_3_ITEMS;
      default:
        return STAGE_1_ITEMS;
    }
  }, [currentStage]);

  const currentItem: SwitcherItem = stageItems[itemIndexInStage] || stageItems[0];

  // Total challenges count (3 in Stage 1 + 5 in Stage 2 + 5 in Stage 3 = 13 items + 4 final = 17 viewpoints)
  const totalItemCount = STAGE_1_ITEMS.length + STAGE_2_ITEMS.length + STAGE_3_ITEMS.length;
  
  // Current overall index across the 13 items
  const overallItemIndex = useMemo(() => {
    let count = itemIndexInStage;
    if (currentStage > 1) count += STAGE_1_ITEMS.length;
    if (currentStage > 2) count += STAGE_2_ITEMS.length;
    return count;
  }, [currentStage, itemIndexInStage]);

  // Max potential score: 13 items * 100 base + 4 final * 150 = 1,900 max base points
  const MAX_POSSIBLE_SCORE = 1900;

  // Render Lens Icon helper
  const renderLensIcon = (lens: LensType, className = 'w-5 h-5') => {
    switch (lens) {
      case 'cultural':
        return <Sparkles className={className} />;
      case 'economic':
        return <TrendingUp className={className} />;
      case 'political':
        return <Landmark className={className} />;
      case 'social':
        return <Users className={className} />;
    }
  };

  // Lens selection handler
  const handleSelectLens = (lens: LensType) => {
    if (isSubmitted) return;
    setSelectedLens(lens);
  };

  // Submit classification for standard stage items
  const handleSubmitClassification = () => {
    if (!selectedLens || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedLens === currentItem.correctLens;
    const itemPoints = isCorrect ? 100 + streak * 10 : 25; // partial credit for completing with reflection

    setTotalPoints((prev) => prev + itemPoints);

    // Update streak
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
    }

    // Update lens metrics
    setLensScores((prev) => ({
      ...prev,
      [currentItem.correctLens]: {
        correct: prev[currentItem.correctLens].correct + (isCorrect ? 1 : 0),
        total: prev[currentItem.correctLens].total + 1
      }
    }));
  };

  // Advance to next challenge or stage
  const handleNextChallenge = () => {
    setIsSubmitted(false);
    setSelectedLens(null);

    // Check if more items in current stage
    if (itemIndexInStage + 1 < stageItems.length) {
      setItemIndexInStage((prev) => prev + 1);
    } else {
      // Stage finished
      if (currentStage === 1) {
        setCurrentStage(2);
        setItemIndexInStage(0);
      } else if (currentStage === 2) {
        setCurrentStage(3);
        setItemIndexInStage(0);
      } else {
        // Stages 1-3 complete -> Move to Final Synthesis Challenge
        setScreen('final-challenge');
      }
    }
  };

  // Final Synthesis selection handler
  const handleFinalSelectLens = (vpId: string, lens: LensType) => {
    if (finalSubmitted) return;
    setFinalSelections((prev) => ({
      ...prev,
      [vpId]: lens
    }));
  };

  // Check if all 4 viewpoints in final challenge are classified
  const isFinalComplete = useMemo(() => {
    return Object.values(finalSelections).every((val) => val !== null);
  }, [finalSelections]);

  // Submit Final Synthesis
  const handleFinalSubmit = () => {
    if (!isFinalComplete || finalSubmitted) return;
    setFinalSubmitted(true);

    let finalPointsEarned = 0;
    const updatedLens = { ...lensScores };

    FINAL_SYNTHESIS_CHALLENGE.viewpoints.forEach((vp) => {
      const selected = finalSelections[vp.id];
      const isCorrect = selected === vp.correctLens;
      if (isCorrect) {
        finalPointsEarned += 150;
      }
      updatedLens[vp.correctLens] = {
        correct: updatedLens[vp.correctLens].correct + (isCorrect ? 1 : 0),
        total: updatedLens[vp.correctLens].total + 1
      };
    });

    const finalTotal = totalPoints + finalPointsEarned;
    setTotalPoints(finalTotal);
    setLensScores(updatedLens);
  };

  // Complete game and view results
  const handleFinishToResults = () => {
    setScreen('results');

    // Save game score to storage service
    storageService.saveGameScore(1, 'g1-1', totalPoints);

    if (onComplete) {
      onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  // Restart game
  const handleRestart = () => {
    setScreen('intro');
    setCurrentStage(1);
    setItemIndexInStage(0);
    setSelectedLens(null);
    setIsSubmitted(false);
    setTotalPoints(0);
    setStreak(0);
    setMaxStreak(0);
    setFinalSelections({
      'final-vp-1': null,
      'final-vp-2': null,
      'final-vp-3': null,
      'final-vp-4': null
    });
    setFinalSubmitted(false);
    setLensScores({
      cultural: { correct: 0, total: 0 },
      economic: { correct: 0, total: 0 },
      political: { correct: 0, total: 0 },
      social: { correct: 0, total: 0 }
    });
  };

  // Calculate overall recognition percentage
  const totalCorrect = (Object.values(lensScores) as { correct: number; total: number }[]).reduce((acc, curr) => acc + curr.correct, 0);
  const totalEvaluated = (Object.values(lensScores) as { correct: number; total: number }[]).reduce((acc, curr) => acc + curr.total, 0);
  const overallAccuracy = totalEvaluated > 0 ? Math.round((totalCorrect / totalEvaluated) * 100) : 0;

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO & HOW TO PLAY
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

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
              Unit 1 Micro-Game • g1-1
            </span>
            <Badge variant="blue" isClassroomMode={isClassroomMode}>
              Foundation
            </Badge>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto shadow-sm">
              <Layers className="w-8 h-8" />
            </div>

            <h1 className={`font-black text-slate-900 tracking-tight ${isClassroomMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
              Perspective Switcher
            </h1>

            <p className={`text-slate-600 leading-relaxed ${isClassroomMode ? 'text-lg' : 'text-base'}`}>
              The same real-world issue looks completely different depending on which analytical lens you look through. Master the <strong>Four Cambridge Lenses</strong> to deconstruct multi-stakeholder debates.
            </p>
          </div>

          {/* 4 Analytical Lenses Primer Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
              The Four Analytical Lenses (Textbook pp. 10–13)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(LENS_DEFINITIONS) as LensType[]).map((lensKey) => {
                const def = LENS_DEFINITIONS[lensKey];
                return (
                  <div
                    key={lensKey}
                    className={`p-4 rounded-2xl border-2 ${def.colorBorder} ${def.lightBg} flex flex-col justify-between space-y-2`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`p-1.5 rounded-lg text-white ${def.colorBg}`}>
                          {renderLensIcon(lensKey, 'w-4 h-4')}
                        </div>
                        <h4 className="font-black text-slate-900 text-sm sm:text-base">
                          {def.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {def.shortDefinition}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                      Key Clue: {def.coreIndicators.slice(0, 3).join(', ')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Classroom How-To-Play Guide */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
              <Target className="w-4 h-4 text-purple-600" />
              <span>How to Play in 3 Progressive Stages</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-1 font-bold">Stage 1: Warm-Up (3 Challenges)</strong>
                Identify the dominant lens from clear real-world community examples.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-1 font-bold">Stage 2: Switch the Lens (5 Challenges)</strong>
                Evaluate nuanced arguments where multiple topics overlap.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-1 font-bold">Stage 3 & Synthesis (5 + 4 Viewpoints)</strong>
                Navigate competing viewpoints on a single urban dilemma and complete the final 4-lens synthesis.
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center pt-2">
            <Button
              variant="primary"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              className="bg-purple-600 hover:bg-purple-700 border-purple-700 min-w-[200px]"
              onClick={() => setScreen('playing')}
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Begin Stage 1: Warm-Up
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 2: PLAYING (STAGES 1, 2, 3)
  // --------------------------------------------------------------------------
  if (screen === 'playing') {
    const isCorrect = selectedLens === currentItem.correctLens;

    return (
      <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
        {/* Top Control Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              isClassroomMode={isClassroomMode}
              onClick={onExit}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Exit
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-base sm:text-lg">
                  Stage {currentStage}: {currentStage === 1 ? 'Warm-Up' : currentStage === 2 ? 'Switch the Lens' : 'Mixed Perspectives'}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  (Item {itemIndexInStage + 1} of {stageItems.length})
                </span>
              </div>
            </div>
          </div>

          {/* Score & Streak Pill */}
          <div className="flex items-center gap-3">
            {streak > 1 && (
              <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-black text-xs flex items-center gap-1.5 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{streak}x Streak!</span>
              </div>
            )}
            <div className="px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-black text-sm">
              Score: {totalPoints}
            </div>
          </div>
        </div>

        {/* Global Progress Across 13 Items */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Progress: Challenge {overallItemIndex + 1} of {totalItemCount}</span>
            <span>{Math.round(((overallItemIndex + 1) / totalItemCount) * 100)}% Complete</span>
          </div>
          <ProgressBar
            value={overallItemIndex + (isSubmitted ? 1 : 0.2)}
            max={totalItemCount}
            variant="purple"
            size="md"
          />
        </div>

        {/* Situation Context & Speaker Statement Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
          {/* Situation Context Banner */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                The Situation
              </span>
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                {currentItem.situationContext}
              </p>
            </div>
          </div>

          {/* Speaker Statement Box */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                {currentItem.speakerRole.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Viewpoint from: {currentItem.speakerRole}
                </span>
              </div>
            </div>

            <blockquote className="p-5 sm:p-6 rounded-2xl bg-purple-50/60 border-2 border-purple-200/80 text-slate-900 font-medium text-base sm:text-lg italic leading-relaxed">
              &ldquo;{currentItem.statement}&rdquo;
            </blockquote>
          </div>

          {/* Prompt */}
          <div>
            <h3 className={`font-black text-slate-900 mb-4 ${isClassroomMode ? 'text-xl' : 'text-base sm:text-lg'}`}>
              Which analytical lens does this statement mainly represent?
            </h3>

            {/* 4 Interactive Lens Selector Buttons (Touch Targets >= 54px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {(Object.keys(LENS_DEFINITIONS) as LensType[]).map((lensKey) => {
                const def = LENS_DEFINITIONS[lensKey];
                const isSelected = selectedLens === lensKey;

                let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300';

                if (isSubmitted) {
                  if (lensKey === currentItem.correctLens) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                  } else {
                    btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle = `${def.lightBg} border-purple-600 text-purple-950 font-bold ring-2 ring-purple-300 shadow-sm`;
                }

                return (
                  <button
                    key={lensKey}
                    onClick={() => handleSelectLens(lensKey)}
                    disabled={isSubmitted}
                    className={`min-h-[58px] p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl text-white ${def.colorBg}`}>
                        {renderLensIcon(lensKey, 'w-5 h-5')}
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base leading-snug">
                          {def.title}
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          {def.shortDefinition.split(',')[0]}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-bold ${
                        isSelected
                          ? isSubmitted
                            ? isCorrect
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-rose-600 bg-rose-600 text-white'
                            : 'border-purple-600 bg-purple-600 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button Before Submission */}
          {!isSubmitted && (
            <div className="pt-2 flex justify-end">
              <Button
                variant="primary"
                size={isClassroomMode ? 'lg' : 'md'}
                isClassroomMode={isClassroomMode}
                disabled={!selectedLens}
                onClick={handleSubmitClassification}
                className="bg-purple-600 hover:bg-purple-700 min-w-[180px]"
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Switch Lens & Check
              </Button>
            </div>
          )}

          {/* Pedagogical Consequence Feedback Panel */}
          {isSubmitted && (
            <div
              className={`p-5 rounded-2xl border-2 space-y-3 animate-fadeIn ${
                isCorrect
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-black text-base">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Excellent Analysis!</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                      <span>Look Again — Analytical Clue:</span>
                    </>
                  )}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 border border-current">
                  Dominant: {LENS_DEFINITIONS[currentItem.correctLens].title}
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed">
                {currentItem.primaryClueExplanation}
              </p>

              {/* Misconception Alert if tempting overlap existed */}
              {!isCorrect && currentItem.misconceptionAlert && (
                <div className="p-3 bg-white/90 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Cambridge Clarification: </strong>
                    {currentItem.misconceptionAlert.warning}
                  </div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <Button
                  variant="primary"
                  size={isClassroomMode ? 'lg' : 'md'}
                  isClassroomMode={isClassroomMode}
                  onClick={handleNextChallenge}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="bg-purple-600 hover:bg-purple-700 min-w-[160px]"
                >
                  {itemIndexInStage + 1 < stageItems.length ? 'Next Challenge' : currentStage < 3 ? `Enter Stage ${currentStage + 1}` : 'Proceed to Final Synthesis'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 3: FINAL SYNTHESIS CHALLENGE (Multi-lens Dilemma)
  // --------------------------------------------------------------------------
  if (screen === 'final-challenge') {
    return (
      <div className="w-full max-w-5xl mx-auto space-y-6 animate-fadeIn">
        {/* Top Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
              Final Culmination Challenge
            </span>
            <h2 className="font-black text-slate-900 text-lg sm:text-xl">
              Simultaneous Multi-Lens Synthesis
            </h2>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-black text-sm">
            Score: {totalPoints}
          </div>
        </div>

        {/* Situation Briefing */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <h3 className="font-black text-slate-900 text-xl sm:text-2xl">
              {FINAL_SYNTHESIS_CHALLENGE.situationTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {FINAL_SYNTHESIS_CHALLENGE.situationContext}
            </p>
          </div>

          {/* Instructions */}
          <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-950 text-xs sm:text-sm flex items-start gap-2.5">
            <Target className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              Match each of the four stakeholders below to their corresponding analytical lens: <strong>Cultural</strong>, <strong>Economic</strong>, <strong>Political</strong>, or <strong>Social</strong>.
            </p>
          </div>

          {/* 4 Viewpoints Grid */}
          <div className="space-y-4">
            {FINAL_SYNTHESIS_CHALLENGE.viewpoints.map((vp, idx) => {
              const selected = finalSelections[vp.id];
              const isVpCorrect = selected === vp.correctLens;

              return (
                <div
                  key={vp.id}
                  className={`p-5 rounded-2xl border-2 transition-all ${
                    finalSubmitted
                      ? isVpCorrect
                        ? 'bg-emerald-50/70 border-emerald-400'
                        : 'bg-rose-50/70 border-rose-300'
                      : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                      Viewpoint {idx + 1}: {vp.speaker}
                    </span>
                    {finalSubmitted && (
                      <span className={`text-xs font-bold ${isVpCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {isVpCorrect ? '✓ Correct Lens' : `Expected: ${LENS_DEFINITIONS[vp.correctLens].title}`}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-800 text-sm sm:text-base italic mb-4 leading-relaxed">
                    &ldquo;{vp.statement}&rdquo;
                  </p>

                  {/* 4 Lens Pills for this viewpoint */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(Object.keys(LENS_DEFINITIONS) as LensType[]).map((lensKey) => {
                      const def = LENS_DEFINITIONS[lensKey];
                      const isLensSelected = selected === lensKey;

                      let pillStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                      if (finalSubmitted) {
                        if (lensKey === vp.correctLens) {
                          pillStyle = 'bg-emerald-600 border-emerald-600 text-white font-bold';
                        } else if (isLensSelected && !isVpCorrect) {
                          pillStyle = 'bg-rose-600 border-rose-600 text-white line-through opacity-80';
                        } else {
                          pillStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-50';
                        }
                      } else if (isLensSelected) {
                        pillStyle = `${def.colorBg} border-transparent text-white font-bold shadow-xs`;
                      }

                      return (
                        <button
                          key={lensKey}
                          onClick={() => handleFinalSelectLens(vp.id, lensKey)}
                          disabled={finalSubmitted}
                          className={`min-h-[44px] py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${pillStyle}`}
                        >
                          {renderLensIcon(lensKey, 'w-3.5 h-3.5')}
                          <span>{def.title.replace(' Lens', '')}</span>
                        </button>
                      );
                    })}
                  </div>

                  {finalSubmitted && (
                    <p className="mt-3 text-xs text-slate-600 bg-white/90 p-2.5 rounded-xl border border-slate-200">
                      <strong>Why: </strong>{vp.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">
              {!finalSubmitted
                ? `${Object.values(finalSelections).filter((v) => v !== null).length} of 4 Classified`
                : 'Final Synthesis Verified'}
            </div>

            {!finalSubmitted ? (
              <Button
                variant="primary"
                size={isClassroomMode ? 'lg' : 'md'}
                isClassroomMode={isClassroomMode}
                disabled={!isFinalComplete}
                onClick={handleFinalSubmit}
                className="bg-purple-600 hover:bg-purple-700 min-w-[200px]"
                rightIcon={<Award className="w-5 h-5" />}
              >
                Submit All 4 Lenses
              </Button>
            ) : (
              <Button
                variant="primary"
                size={isClassroomMode ? 'lg' : 'md'}
                isClassroomMode={isClassroomMode}
                onClick={handleFinishToResults}
                className="bg-purple-600 hover:bg-purple-700 min-w-[200px]"
                rightIcon={<Trophy className="w-5 h-5" />}
              >
                View Performance Debrief
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 4: RESULTS & PERFORMANCE SUMMARY
  // --------------------------------------------------------------------------
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Result Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 space-y-8">
        {/* Banner */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="w-20 h-20 rounded-3xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto shadow-sm">
            <Trophy className="w-10 h-10" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            Micro-Game Completed • Unit 1 Benchmark
          </span>

          <h1 className={`font-black text-slate-900 tracking-tight ${isClassroomMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            Perspective Switcher Complete
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            You successfully analyzed multi-stakeholder scenarios and practiced switching between the Cultural, Economic, Political, and Social analytical lenses.
          </p>
        </div>

        {/* Big Score Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-1">
              Total Score
            </span>
            <span className="text-3xl sm:text-4xl font-black text-purple-900">
              {totalPoints}
            </span>
            <span className="text-xs text-purple-600 block mt-1">
              out of {MAX_POSSIBLE_SCORE} pts
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Overall Accuracy
            </span>
            <span className="text-3xl sm:text-4xl font-black text-emerald-900">
              {overallAccuracy}%
            </span>
            <span className="text-xs text-emerald-600 block mt-1">
              {totalCorrect} / {totalEvaluated} Correct
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Best Streak
            </span>
            <span className="text-3xl sm:text-4xl font-black text-amber-900">
              {maxStreak}
            </span>
            <span className="text-xs text-amber-600 block mt-1">
              Consecutive Right
            </span>
          </div>
        </div>

        {/* Lens Recognition Breakdown */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-center">
            Analytical Lens Competency Breakdown
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.keys(LENS_DEFINITIONS) as LensType[]).map((lensKey) => {
              const def = LENS_DEFINITIONS[lensKey];
              const score = lensScores[lensKey];
              const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

              return (
                <div
                  key={lensKey}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg text-white ${def.colorBg}`}>
                        {renderLensIcon(lensKey, 'w-3.5 h-3.5')}
                      </div>
                      <span className="font-bold text-slate-900 text-sm">
                        {def.title}
                      </span>
                    </div>
                    <span className="text-xs font-black text-slate-700">
                      {score.correct} / {score.total} ({pct}%)
                    </span>
                  </div>
                  <ProgressBar value={pct} max={100} variant="purple" size="sm" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Cambridge Global Perspectives Takeaway Box */}
        <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 max-w-2xl mx-auto flex items-start gap-3.5 text-xs sm:text-sm text-purple-950 leading-relaxed">
          <BookOpen className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-purple-900 mb-0.5">
              Core Takeaway for Grade 10:
            </strong>
            A perspective is not just a casual personal opinion. It is a structured way of understanding the world, filtered through cultural heritage, economic costs, political power, or social well-being.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-slate-100">
          <Button
            variant="outline"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={handleRestart}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Play Again
          </Button>

          <Button
            variant="primary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            className="bg-purple-600 hover:bg-purple-700 min-w-[180px]"
            onClick={onExit}
          >
            Return to Games Catalog
          </Button>
        </div>
      </div>
    </div>
  );
};
