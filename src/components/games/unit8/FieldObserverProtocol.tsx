/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 8: FIELD OBSERVER PROTOCOL (CANONICAL MICRO-GAME g8-3)
 * ============================================================================
 * Academic Source: Textbook Section 8.5 & 8.6 (pp. 117–120)
 * Target Concept: Observational Ethics, Sopan Santun & Community Fieldwork Protocols
 * Language Level: CEFR B1 English
 */

import React, { useState } from 'react';
import {
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  Check,
  Zap,
  Users,
  Building2,
  Shield,
  HelpCircle,
  Eye
} from 'lucide-react';
import {
  G8_3_CHALLENGES,
  FieldObserverItem
} from '../../../data/games/unit8MicroGamesData';
import { Button } from '../../common/Button';
import { ProgressBar } from '../../common/ProgressBar';
import { storageService } from '../../../services/storageService';

export interface FieldObserverProtocolProps {
  onExit: () => void;
  isClassroomMode?: boolean;
  onComplete?: (score: number, maxScore: number) => void;
}

export const FieldObserverProtocol: React.FC<FieldObserverProtocolProps> = ({
  onExit,
  isClassroomMode = false,
  onComplete
}) => {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedActionId, setSelectedActionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stageScores, setStageScores] = useState<Record<1 | 2 | 3, { correct: number; total: number }>>({
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  });

  const totalItems = G8_3_CHALLENGES.length; // 11 items
  const currentItem: FieldObserverItem = G8_3_CHALLENGES[currentIndex];

  const MAX_POSSIBLE_SCORE = 1900;

  const handleSubmit = () => {
    if (!selectedActionId || isSubmitted) return;
    setIsSubmitted(true);

    const chosenOption = currentItem.options.find((o) => o.id === selectedActionId);
    const isCorrect = chosenOption ? chosenOption.isEthicalAndEffective : false;

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
    setSelectedActionId(null);
    setIsSubmitted(false);

    if (currentIndex + 1 < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen('results');
      storageService.saveGameScore(8, 'g8-3', totalPoints);
      if (onComplete) onComplete(totalPoints, MAX_POSSIBLE_SCORE);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedActionId(null);
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
              <Eye className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit 8 Micro-Game 3
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Field Observer Protocol
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Research does not only happen in libraries. When gathering primary data in living communities, researchers must observe strict ethical and cultural protocols:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-teal-900">
                <Shield className="w-4 h-4 text-teal-700" />
                <span>1. Informed Consent & Privacy</span>
              </div>
              <p className="text-xs text-teal-800 leading-relaxed">
                Always explain your project and secure consent before taking photos or notes; anonymize all personal data.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>2. Sowan ke Pak RT/RW</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Introduce yourselves to neighborhood heads first with an official school letter to secure community authorization.
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Users className="w-4 h-4 text-amber-700" />
                <span>3. Sopan Santun Demeanor</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                Wear neat attire (school uniform/modest dress), speak politely with honorifics, and respect prayer times (Maghrib).
              </p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2 font-bold text-blue-900">
                <Sparkles className="w-4 h-4 text-blue-700" />
                <span>4. Gotong Royong Reciprocity</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                Share findings back with the neighborhood so research actively benefits community residents.
              </p>
            </div>
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
              Enter the Field
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
          <div className="inline-flex p-4 bg-teal-100 text-teal-700 rounded-3xl">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Fieldwork Protocol Certified!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You navigated complex fieldwork dilemmas with ethical rigor, cultural respect (sopan santun), and community reciprocity.
            </p>
          </div>

          {/* Score Badges */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-slate-500 uppercase block">Total Points</span>
              <span className="text-2xl sm:text-3xl font-black text-teal-700">{totalPoints}</span>
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
                <span className="text-slate-500 block">Stage 1: Consent & Ethics</span>
                <span className="font-bold text-slate-800">
                  {stageScores[1].correct} / {stageScores[1].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 2: Sopan Santun</span>
                <span className="font-bold text-slate-800">
                  {stageScores[2].correct} / {stageScores[2].total}
                </span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Stage 3: Reciprocity & Bridge</span>
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
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-teal-50 text-teal-700 rounded-md">
            Stage {currentItem.stage}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1 text-amber-600">
            <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1 text-teal-700">
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

      {/* Main Scenario Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>{currentItem.locationContext}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            {currentItem.fieldScenario}
          </h2>
        </div>

        {/* Challenge Dilemma */}
        <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100">
          <span className="text-xs font-black uppercase text-teal-800 block mb-1">
            Fieldwork Dilemma
          </span>
          <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
            {currentItem.challengePrompt}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            What is the ethical, culturally responsive protocol action?
          </span>

          <div className="space-y-2.5">
            {currentItem.options.map((opt) => {
              const isSelected = selectedActionId === opt.id;
              const isCorrect = opt.isEthicalAndEffective;

              let btnStyle = 'bg-white border-slate-200 hover:border-teal-300 hover:bg-slate-50 text-slate-800';

              if (isSelected && !isSubmitted) {
                btnStyle = 'bg-teal-50 border-teal-600 text-teal-900 ring-2 ring-teal-500/20';
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
                  onClick={() => !isSubmitted && setSelectedActionId(opt.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                >
                  <p className="font-semibold text-sm sm:text-base leading-snug">
                    {opt.actionText}
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
              currentItem.options.find(o => o.id === selectedActionId)?.isEthicalAndEffective
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {currentItem.options.find(o => o.id === selectedActionId)?.isEthicalAndEffective ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Protocol Standard Upheld!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>Protocol Violation Detected.</span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm leading-relaxed">
              {currentItem.options.find(o => o.id === selectedActionId)?.consequenceExplanation}
            </p>

            <div className="pt-2 border-t border-current/15 flex items-start gap-1.5 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-80" />
              <span>Standard: {currentItem.pedagogicalTakeaway}</span>
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
              disabled={!selectedActionId}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              Confirm Action
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              icon={ArrowRight}
              size={isClassroomMode ? 'lg' : 'md'}
            >
              {currentIndex + 1 < totalItems ? 'Next Scenario' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
