/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 1: SCALE DETECTIVE (CANONICAL MICRO-GAME g1-2)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 13–16)
 * Section 1.3: Levels of Perspectives (Personal, Local, National, Global)
 * Touch-First IFP Target: Min 48px target sizes, high-contrast, zero-pill discipline
 */

import React, { useState, useMemo } from 'react';
import {
  ScaleLevel,
  SCALE_DEFINITIONS,
  STAGE_1_ITEMS,
  STAGE_2_ITEMS,
  MULTI_SCALE_DOSSIER,
  ScaleDetectiveItem,
  DossierViewpoint
} from '../../../data/games/scaleDetectiveData';
import { storageService } from '../../../services/storageService';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';
import { ProgressBar } from '../../common/ProgressBar';
import {
  Search,
  User,
  Building2,
  Landmark,
  Globe2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight,
  Eye,
  EyeOff,
  Trophy,
  Scale,
  Award,
  BookOpen
} from 'lucide-react';

export interface ScaleDetectiveProps {
  onExit: () => void;
  onComplete?: (score: number, maxScore: number) => void;
  isClassroomMode?: boolean;
}

type GameScreen = 'intro' | 'playing' | 'dossier' | 'results';

export const ScaleDetective: React.FC<ScaleDetectiveProps> = ({
  onExit,
  onComplete,
  isClassroomMode = false
}) => {
  // Game flow state
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [currentStage, setCurrentStage] = useState<1 | 2>(1);
  const [itemIndexInStage, setItemIndexInStage] = useState<number>(0);

  // Active question submission state
  const [selectedScale, setSelectedScale] = useState<ScaleLevel | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showClueHighlights, setShowClueHighlights] = useState<boolean>(false);

  // Performance tracking
  const [scaleScores, setScaleScores] = useState<Record<ScaleLevel, { correct: number; total: number }>>({
    personal: { correct: 0, total: 0 },
    local: { correct: 0, total: 0 },
    national: { correct: 0, total: 0 },
    global: { correct: 0, total: 0 }
  });

  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

  // Stage 3: Multi-Scale Dossier State
  const [dossierSelections, setDossierSelections] = useState<Record<string, ScaleLevel | null>>({
    'dossier-vp-1': null,
    'dossier-vp-2': null,
    'dossier-vp-3': null,
    'dossier-vp-4': null
  });
  const [dossierSubmitted, setDossierSubmitted] = useState<boolean>(false);

  // Active items per stage
  const stageItems: ScaleDetectiveItem[] = useMemo(() => {
    return currentStage === 1 ? STAGE_1_ITEMS : STAGE_2_ITEMS;
  }, [currentStage]);

  const currentItem: ScaleDetectiveItem = stageItems[itemIndexInStage] || stageItems[0];

  // Overall question numbering
  const overallItemIndex = useMemo(() => {
    return currentStage === 1 ? itemIndexInStage : STAGE_1_ITEMS.length + itemIndexInStage;
  }, [currentStage, itemIndexInStage]);

  const totalSingleItems = STAGE_1_ITEMS.length + STAGE_2_ITEMS.length; // 4 + 5 = 9 items
  const MAX_BASE_SCORE = 1500; // 9 single items * 100 (900) + 4 dossier viewpoints * 150 (600)
  const MAX_STREAK_BONUS = 600; // 0 + 20 + 40 + 60 + 80 + 100 + 100 + 100 + 100
  const MAX_POSSIBLE_SCORE = 2100; // 1500 base + 600 max streak bonus

  // Render scale icon
  const renderScaleIcon = (scale: ScaleLevel, className = 'w-5 h-5') => {
    switch (scale) {
      case 'personal':
        return <User className={className} />;
      case 'local':
        return <Building2 className={className} />;
      case 'national':
        return <Landmark className={className} />;
      case 'global':
        return <Globe2 className={className} />;
      default:
        return <Search className={className} />;
    }
  };

  // Check and submit answer for Stage 1 & 2
  const handleSubmit = () => {
    if (!selectedScale || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedScale === currentItem.correctScale;

    // Points calculation
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

    // Update diagnostic stats
    setScaleScores((prev) => ({
      ...prev,
      [currentItem.correctScale]: {
        correct: prev[currentItem.correctScale].correct + (isCorrect ? 1 : 0),
        total: prev[currentItem.correctScale].total + 1
      }
    }));
  };

  // Next question or next stage
  const handleNext = () => {
    setSelectedScale(null);
    setIsSubmitted(false);
    setShowClueHighlights(false);

    if (itemIndexInStage + 1 < stageItems.length) {
      setItemIndexInStage((prev) => prev + 1);
    } else if (currentStage === 1) {
      setCurrentStage(2);
      setItemIndexInStage(0);
    } else {
      // Proceed to Stage 3: Multi-Scale Dossier
      setScreen('dossier');
    }
  };

  // Dossier selection
  const handleDossierSelect = (viewpointId: string, scale: ScaleLevel) => {
    if (dossierSubmitted) return;
    setDossierSelections((prev) => ({
      ...prev,
      [viewpointId]: scale
    }));
  };

  const isDossierComplete = useMemo(() => {
    return Object.values(dossierSelections).every((val) => val !== null);
  }, [dossierSelections]);

  // Submit Dossier
  const handleDossierSubmit = () => {
    if (!isDossierComplete || dossierSubmitted) return;
    setDossierSubmitted(true);

    let dossierPoints = 0;
    const updatedStats = { ...scaleScores };

    MULTI_SCALE_DOSSIER.viewpoints.forEach((vp) => {
      const selected = dossierSelections[vp.id];
      const isCorrect = selected === vp.correctScale;
      if (isCorrect) {
        dossierPoints += 150;
      }
      updatedStats[vp.correctScale] = {
        correct: updatedStats[vp.correctScale].correct + (isCorrect ? 1 : 0),
        total: updatedStats[vp.correctScale].total + 1
      };
    });

    setTotalPoints((prev) => prev + dossierPoints);
    setScaleScores(updatedStats);
  };

  // Finish and view results
  const handleFinishToResults = () => {
    setScreen('results');

    // Save game score to storage service
    storageService.saveGameScore(1, 'g1-2', totalPoints);

    if (onComplete) {
      onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  // Restart game
  const handleRestart = () => {
    setScreen('intro');
    setCurrentStage(1);
    setItemIndexInStage(0);
    setSelectedScale(null);
    setIsSubmitted(false);
    setShowClueHighlights(false);
    setTotalPoints(0);
    setStreak(0);
    setMaxStreak(0);
    setDossierSelections({
      'dossier-vp-1': null,
      'dossier-vp-2': null,
      'dossier-vp-3': null,
      'dossier-vp-4': null
    });
    setDossierSubmitted(false);
    setScaleScores({
      personal: { correct: 0, total: 0 },
      local: { correct: 0, total: 0 },
      national: { correct: 0, total: 0 },
      global: { correct: 0, total: 0 }
    });
  };

  // Overall accuracy
  const totalCorrect = (Object.values(scaleScores) as { correct: number; total: number }[]).reduce(
    (acc, curr) => acc + curr.correct,
    0
  );
  const totalEvaluated = (Object.values(scaleScores) as { correct: number; total: number }[]).reduce(
    (acc, curr) => acc + curr.total,
    0
  );
  const overallAccuracy = totalEvaluated > 0 ? Math.round((totalCorrect / totalEvaluated) * 100) : 0;

  // Render highlighted text helper
  const renderStatementWithHighlights = (statement: string, cluePhrases: string[], isHighlightActive: boolean) => {
    if (!isHighlightActive || cluePhrases.length === 0) {
      return <span>{statement}</span>;
    }

    // Sort clue phrases by length descending to match larger phrases first
    const sortedClues = [...cluePhrases].sort((a, b) => b.length - a.length);
    const escapedClues = sortedClues.map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedClues.join('|')})`, 'gi');
    const parts = statement.split(regex);

    return (
      <span>
        {parts.map((part, i) => {
          const isClue = sortedClues.some((clue) => clue.toLowerCase() === part.toLowerCase());
          if (isClue) {
            return (
              <mark
                key={i}
                className="bg-amber-100 text-amber-950 font-bold px-1 py-0.5 rounded border-b-2 border-amber-400"
              >
                {part}
              </mark>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  // --------------------------------------------------------------------------
  // SCREEN 1: INTRO & DETECTIVE BRIEFING
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
            <span className="text-slate-900 font-bold">Unit 1 Micro-Game</span>
            <span aria-hidden="true">·</span>
            <span>g1-2</span>
            <span aria-hidden="true">·</span>
            <Badge variant="blue" isClassroomMode={isClassroomMode}>
              Application
            </Badge>
          </div>
        </div>

        {/* Hero Briefing Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto shadow-sm">
              <Search className="w-8 h-8" />
            </div>

            <h1 className={`font-black text-slate-900 tracking-tight ${isClassroomMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
              Scale Detective
            </h1>

            <p className={`text-slate-600 leading-relaxed ${isClassroomMode ? 'text-lg' : 'text-base'}`}>
              Every perspective operates at a specific <strong>geographic and institutional scale</strong>. As a Scale Detective, your mission is to calibrate the altitude of real-world claims from individual lived experience up to planetary treaties.
            </p>
          </div>

          {/* Critical Distinction Notice (Type vs Level) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Critical Cambridge Distinction: Type vs. Level (Textbook p. 14)</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              Do not confuse the <strong>Lens Type</strong> (Cultural, Economic, Political, Social) with the <strong>Scale Level</strong> (Personal, Local, National, Global). An issue can be <em>Economic at the Personal level</em> (household budget) or <em>Economic at the National level</em> (central bank debt). Keep your eyes focused on the <strong>scope of impact</strong>!
            </p>
          </div>

          {/* 4 Concentric Scales Matrix */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
              The Four Scales of Investigation (Textbook pp. 13–16)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(SCALE_DEFINITIONS) as ScaleLevel[]).map((key) => {
                const def = SCALE_DEFINITIONS[key];
                return (
                  <div
                    key={key}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-indigo-300 transition-all space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-xl text-white ${def.colorBg}`}>
                        {renderScaleIcon(key, 'w-4 h-4')}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{def.title}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{def.zoomAltitude}</div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {def.shortDefinition}
                    </p>

                    <div className="pt-1 border-t border-slate-200/60 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">Diagnostic Question: </span>
                      {def.keyDiagnosticQuestion}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detective Protocol / Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="space-y-1">
              <div className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Stage 1 · Calibration</div>
              <div className="text-sm font-semibold text-slate-800">Diagnostic Fingerprints</div>
              <div className="text-xs text-slate-500">4 warm-up cases to calibrate the altitude of individual, town, country, and world issues.</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Stage 2 · Fieldwork</div>
              <div className="text-sm font-semibold text-slate-800">Subtle Case Scenarios</div>
              <div className="text-xs text-slate-500">5 challenging claims with tempting distractors separating scale from lens type.</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Stage 3 · Dossier</div>
              <div className="text-sm font-semibold text-slate-800">Electric Vehicles in Indonesia</div>
              <div className="text-xs text-slate-500">Track 4 interconnected viewpoints across all four scales for a single technology.</div>
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
              Start Investigation
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 2: ACTIVE INVESTIGATION (STAGE 1 & 2)
  // --------------------------------------------------------------------------
  if (screen === 'playing') {
    const isStage1 = currentStage === 1;
    const progressPercent = Math.round(((overallItemIndex + 1) / (totalSingleItems + 1)) * 100);

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
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  {isStage1 ? 'Stage 1 · Calibration' : 'Stage 2 · Fieldwork'}
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  Case {overallItemIndex + 1} of {totalSingleItems}
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
            color="bg-indigo-600"
            size="sm"
            showLabel={false}
          />
        </div>

        {/* Case Inspection Dossier Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Case Metadata */}
          <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">{currentItem.title}</span>
              <span aria-hidden="true">·</span>
              <span>Source: {currentItem.speakerOrSource}</span>
            </div>

            <button
              onClick={() => setShowClueHighlights(!showClueHighlights)}
              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg transition-colors ${
                showClueHighlights
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Toggle detective scope guidance prompt"
            >
              {showClueHighlights ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showClueHighlights ? 'Hide Scope Clue' : 'Detective Scope Hint'}</span>
            </button>
          </div>

          {/* Scenario Context */}
          <div className="text-xs sm:text-sm text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="font-semibold text-slate-700 not-italic">Situation: </span>
            {currentItem.contextSituation}
          </div>

          {/* Statement Quote Card */}
          <div className="p-6 rounded-2xl bg-indigo-50/40 border border-indigo-100/80 relative">
            <div className="text-xs uppercase font-bold tracking-wider text-indigo-700 mb-2">
              Investigate the Statement:
            </div>
            <blockquote className={`text-slate-900 font-medium leading-relaxed ${isClassroomMode ? 'text-xl' : 'text-lg'}`}>
              {renderStatementWithHighlights(currentItem.statement, currentItem.cluePhrases, showClueHighlights)}
            </blockquote>

            {showClueHighlights && (
              <div className="mt-3 pt-3 border-t border-indigo-200/50 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wide">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Detective Scope Prompt:</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80 leading-relaxed font-medium">
                  {currentItem.conceptualPrompt}
                </p>
              </div>
            )}
          </div>

          {/* Interactive Altitude / Scale Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Calibrate the Scale Level:</span>
              <span className="text-slate-400 font-normal">Choose the altitude of impact</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(Object.keys(SCALE_DEFINITIONS) as ScaleLevel[]).map((scale) => {
                const def = SCALE_DEFINITIONS[scale];
                const isSelected = selectedScale === scale;
                const isCorrect = isSubmitted && currentItem.correctScale === scale;
                const isWrong = isSubmitted && isSelected && !isCorrect;

                let borderStyle = 'border-slate-200 hover:border-indigo-300 bg-white hover:bg-slate-50/50';
                if (isSelected && !isSubmitted) {
                  borderStyle = 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-200';
                } else if (isCorrect) {
                  borderStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200';
                } else if (isWrong) {
                  borderStyle = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
                }

                return (
                  <button
                    key={scale}
                    onClick={() => {
                      if (!isSubmitted) setSelectedScale(scale);
                    }}
                    disabled={isSubmitted}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 min-h-[110px] ${borderStyle}`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 rounded-xl ${
                            isSelected && !isSubmitted
                              ? `${def.colorBg} text-white`
                              : isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {renderScaleIcon(scale, 'w-4 h-4')}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{def.title}</div>
                          <div className="text-[11px] text-slate-500">{def.zoomAltitude.split(':')[0]}</div>
                        </div>
                      </div>

                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      {isWrong && <AlertCircle className="w-5 h-5 text-rose-500" />}
                    </div>

                    <div className="text-xs text-slate-600 line-clamp-2">
                      {def.scopeOfImpact}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Submission */}
          {!isSubmitted ? (
            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="lg"
                isClassroomMode={isClassroomMode}
                onClick={handleSubmit}
                disabled={!selectedScale}
                rightIcon={<ChevronRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Confirm Scale Diagnosis
              </Button>
            </div>
          ) : (
            /* Consequence & Clue Feedback Card */
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div
                className={`p-5 rounded-2xl border ${
                  selectedScale === currentItem.correctScale
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/70 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-start gap-3">
                  {selectedScale === currentItem.correctScale ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                  )}

                  <div className="space-y-2">
                    <div className="font-bold text-base">
                      {selectedScale === currentItem.correctScale
                        ? 'Correct Scale Identified!'
                        : `Incorrect. This is the ${SCALE_DEFINITIONS[currentItem.correctScale].title}.`}
                    </div>

                    <p className="text-sm leading-relaxed text-slate-700">
                      {currentItem.clueExplanation}
                    </p>

                    {/* Misconception Alert if applicable */}
                    {currentItem.misconceptionAlert && (
                      <div className="mt-3 p-3 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-amber-800">
                          <HelpCircle className="w-4 h-4 text-amber-600" />
                          <span>Scale Detective Clue Alert:</span>
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
                  {overallItemIndex + 1 === totalSingleItems
                    ? 'Advance to Stage 3: The Multi-Scale Dossier'
                    : 'Next Case Investigation'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCREEN 3: STAGE 3 — THE MULTI-SCALE DOSSIER (ELECTRIC VEHICLES & NICKEL)
  // --------------------------------------------------------------------------
  if (screen === 'dossier') {
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
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Stage 3 · Master Curriculum Dossier
              </div>
              <div className="text-sm font-semibold text-slate-800">
                Multi-Scale Synthesis Case
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Points:</span>
            <span className="font-bold text-slate-900">{totalPoints}</span>
          </div>
        </div>

        {/* Master Case Briefing */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Curriculum Case Study (Textbook Slide 23)
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {MULTI_SCALE_DOSSIER.caseTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {MULTI_SCALE_DOSSIER.backgroundBrief}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs sm:text-sm text-indigo-950 font-medium">
            <strong>Dossier Challenge:</strong> Four different stakeholders are speaking about the electric vehicle transition in Indonesia. Match each viewpoint card to its exact <strong>Scale Level</strong> (Personal, Local, National, Global) to unlock the multi-scale cross-impact synthesis!
          </div>

          {/* Viewpoints Grid */}
          <div className="space-y-4">
            {MULTI_SCALE_DOSSIER.viewpoints.map((vp, index) => {
              const selected = dossierSelections[vp.id];
              const isCorrect = dossierSubmitted && selected === vp.correctScale;
              const isWrong = dossierSubmitted && selected !== vp.correctScale;

              return (
                <div
                  key={vp.id}
                  className={`p-5 rounded-2xl border transition-all space-y-3 ${
                    isCorrect
                      ? 'bg-emerald-50/60 border-emerald-300'
                      : isWrong
                      ? 'bg-rose-50/60 border-rose-300'
                      : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">File 0{index + 1}: {vp.speakerRole}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-500">{vp.location}</span>
                    </div>

                    <div className="text-slate-500 font-medium">
                      Lens: <span className="capitalize font-semibold text-slate-700">{vp.lensType}</span>
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-base font-medium text-slate-900 italic border-l-3 border-indigo-400 pl-3 py-1">
                    {vp.statement}
                  </blockquote>

                  {/* Scale Selector for this dossier card */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                    <div className="text-xs font-semibold text-slate-600">
                      Assign Scale Altitude:
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {(Object.keys(SCALE_DEFINITIONS) as ScaleLevel[]).map((scale) => {
                        const isChosen = selected === scale;
                        const isThisCorrect = dossierSubmitted && vp.correctScale === scale;

                        let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                        if (isChosen && !dossierSubmitted) {
                          btnClass = 'bg-indigo-600 text-white shadow-xs';
                        } else if (isThisCorrect) {
                          btnClass = 'bg-emerald-600 text-white';
                        } else if (isChosen && !isThisCorrect) {
                          btnClass = 'bg-rose-600 text-white';
                        }

                        return (
                          <button
                            key={scale}
                            onClick={() => handleDossierSelect(vp.id, scale)}
                            disabled={dossierSubmitted}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 min-h-[36px] ${btnClass}`}
                          >
                            {renderScaleIcon(scale, 'w-3.5 h-3.5')}
                            <span className="capitalize">{scale}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feedback explanation if submitted */}
                  {dossierSubmitted && (
                    <div className="mt-3 p-3 bg-white/90 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct Scale ({SCALE_DEFINITIONS[vp.correctScale].title})
                          </span>
                        ) : (
                          <span className="text-rose-700 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> Correct Scale: {SCALE_DEFINITIONS[vp.correctScale].title}
                          </span>
                        )}
                      </div>
                      <p>{vp.analysisExplanation}</p>
                      <div className="text-indigo-900 font-medium bg-indigo-50/80 p-2 rounded-lg border border-indigo-100">
                        <span className="font-bold">Scale Trade-Off: </span>
                        {vp.tradeOffInsight}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          {!dossierSubmitted ? (
            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="lg"
                isClassroomMode={isClassroomMode}
                onClick={handleDossierSubmit}
                disabled={!isDossierComplete}
                rightIcon={<Award className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Evaluate Master Dossier
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
                View Detective Scorecard
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
          Scale Detective · Investigation Complete
        </div>
      </div>

      {/* Main Scorecard */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="w-20 h-20 rounded-3xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto shadow-sm">
            <Award className="w-10 h-10" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Scale Calibration Certificate
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            You successfully analyzed multi-stakeholder claims across all four Cambridge analytical scales.
          </p>
        </div>

        {/* Master Metrics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Score</div>
            <div className="text-3xl font-black text-indigo-700">{totalPoints}</div>
            <div className="text-xs text-slate-500">Max Possible: {MAX_POSSIBLE_SCORE} (Base: {MAX_BASE_SCORE})</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Scale Accuracy</div>
            <div className="text-3xl font-black text-emerald-700">{overallAccuracy}%</div>
            <div className="text-xs text-slate-500">{totalCorrect} of {totalEvaluated} correct</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Best Streak</div>
            <div className="text-3xl font-black text-amber-700">{maxStreak}</div>
            <div className="text-xs text-slate-500">Consecutive calibrations</div>
          </div>
        </div>

        {/* Breakdown by Scale Level */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
            Mastery by Geographic Scale
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(scaleScores) as ScaleLevel[]).map((scale) => {
              const def = SCALE_DEFINITIONS[scale];
              const score = scaleScores[scale];
              const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

              return (
                <div
                  key={scale}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg text-white ${def.colorBg}`}>
                        {renderScaleIcon(scale, 'w-3.5 h-3.5')}
                      </div>
                      <span className="font-bold text-slate-900 text-sm capitalize">{scale}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-700">{pct}%</span>
                  </div>

                  <ProgressBar
                    value={pct}
                    color={pct >= 75 ? 'bg-emerald-600' : pct >= 50 ? 'bg-amber-600' : 'bg-slate-400'}
                    size="sm"
                    showLabel={false}
                  />

                  <div className="text-[11px] text-slate-500 text-right">
                    {score.correct} / {score.total} correctly calibrated
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Takeaway Recap */}
        <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs sm:text-sm text-indigo-950 space-y-2">
          <div className="font-bold flex items-center gap-2 text-indigo-900">
            <BookOpen className="w-4 h-4 text-indigo-700" />
            <span>Cambridge Exam Takeaway (Unit 1 Review):</span>
          </div>
          <p className="leading-relaxed">
            A comprehensive Global Perspectives research paper never stays at a single level. As shown in the Electric Vehicles and Nickel case, a policy that addresses a <strong>Global</strong> climate goal often creates <strong>National</strong> macroeconomic priorities and severe <strong>Local</strong> environmental challenges. Strong research connects evidence across all four scales!
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
            Replay Investigation
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
