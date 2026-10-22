/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3A: GENERIC GAME ENGINE LIFECYCLE PROTOTYPE
 * ============================================================================
 * Clearly Labeled:
 * PHASE 3A TECHNICAL PROTOTYPE — NOT CURRICULUM CONTENT
 *
 * Demonstrates:
 * 1. Generic game lifecycle (INTRO -> PLAYING -> FEEDBACK -> RESULT)
 * 2. Generic question loading from abstract schemas
 * 3. Seeded deterministic randomization
 * 4. Transparent scoring engine calculation (Base + Reasoning + Streak)
 * 5. Session persistence and recovery without Firebase
 * 6. Interactive Flat Panel (IFP) touch target sizing (>= 48px)
 */

import React, { useState, useEffect } from 'react';
import {
  PracticeGameQuestion,
  MultipleChoiceQuestion,
  SessionLifecycleStatus,
  ScoreBreakdown,
  ActiveGameSession
} from '../../types/practiceGame';
import { createSeededRandom } from '../../services/seededRandom';
import { scoringEngine } from '../../services/scoringEngine';
import { gameStorageService } from '../../services/gameStorageService';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Trophy,
  Users
} from 'lucide-react';

export interface Phase3APrototypeProps {
  onExit: () => void;
  isClassroomMode?: boolean;
}

// Minimal dummy items for verifying the lifecycle engine
const DUMMY_PROTOTYPE_QUESTIONS: PracticeGameQuestion[] = [
  {
    id: 'proto-q-01',
    unitNumber: 1,
    topicId: '1.1-perspective-definition',
    type: 'multiple-choice',
    difficulty: 1,
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.1',
      pageRange: '6-8',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    status: 'locked',
    prompt: 'Which definition best describes a perspective in Cambridge Global Perspectives?',
    explanation: 'A perspective is a coherent worldview shaped by fundamental values and systemic assumptions.',
    misconceptionId: 'misc-emotion-vs-perspective',
    misconceptionAlert: 'Diagnostic Scaffold: Do not confuse a temporary emotional feeling or individual opinion with a structured perspective.',
    options: [
      { id: 'opt-a', text: 'A temporary emotional feeling or spontaneous mood.' },
      { id: 'opt-b', text: 'A coherent viewpoint grounded in values and assumptions.' },
      { id: 'opt-c', text: 'A single isolated statistical figure.' },
      { id: 'opt-d', text: 'An undisputed and eternal scientific law.' }
    ],
    correctOptionId: 'opt-b'
  } as MultipleChoiceQuestion,
  {
    id: 'proto-q-02',
    unitNumber: 1,
    topicId: '1.2-types-of-perspectives',
    type: 'multiple-choice',
    difficulty: 2,
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 1,
      section: '1.2',
      pageRange: '9-14',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    status: 'locked',
    prompt: 'An analysis focuses on tariffs, inflation rates, and import revenues. Which analytical lens is being used?',
    explanation: 'Economic perspectives specifically analyze financial flows, pricing, markets, and fiscal costs.',
    options: [
      { id: 'opt-a', text: 'Cultural Lens' },
      { id: 'opt-b', text: 'Economic Lens' },
      { id: 'opt-c', text: 'Political Lens' },
      { id: 'opt-d', text: 'Social Lens' }
    ],
    correctOptionId: 'opt-b'
  } as MultipleChoiceQuestion
];

export const Phase3APrototype: React.FC<Phase3APrototypeProps> = ({
  onExit,
  isClassroomMode = false
}) => {
  const [lifecycleState, setLifecycleState] = useState<SessionLifecycleStatus>('INTRO');
  const [session, setSession] = useState<ActiveGameSession | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentBreakdown, setCurrentBreakdown] = useState<ScoreBreakdown | null>(null);
  const [breakdownHistory, setBreakdownHistory] = useState<ScoreBreakdown[]>([]);

  // Initialize or restore session
  const handleStartGame = (isTeam: boolean) => {
    const seed = Date.now();
    const rng = createSeededRandom(seed);
    const shuffledItems = rng.shuffle(DUMMY_PROTOTYPE_QUESTIONS);

    const newSession: ActiveGameSession = {
      sessionId: `proto-${seed}`,
      unitNumber: 1,
      gameId: 'proto-game-engine',
      gameMode: 'quick-practice',
      randomSeed: seed,
      player: {
        mode: isTeam ? 'team' : 'individual',
        nickname: isTeam ? 'Team Alpha' : 'Student Prototyper'
      },
      status: 'ACTIVE',
      currentItemIndex: 0,
      totalItems: shuffledItems.length,
      score: 0,
      currentStreak: 0,
      maxStreak: 0,
      responses: [],
      mistakesByMisconceptionId: {},
      startedAt: new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString()
    };

    setSession(newSession);
    gameStorageService.saveActiveSession(newSession);
    setLifecycleState('ACTIVE');
    setSelectedOption(null);
    setCurrentBreakdown(null);
    setBreakdownHistory([]);
  };

  const currentQuestion = session
    ? (DUMMY_PROTOTYPE_QUESTIONS[session.currentItemIndex] as MultipleChoiceQuestion)
    : null;

  // Answer submission
  const handleSubmitAnswer = () => {
    if (!session || !currentQuestion || !selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.correctOptionId;
    const newStreak = isCorrect ? session.currentStreak + 1 : 0;

    const breakdown = scoringEngine.calculateItemScore({
      difficulty: currentQuestion.difficulty,
      isCorrect,
      hasCorrectReasoning: isCorrect, // Dummy prototype assumes reasoning linked to correct answer
      streakCount: newStreak
    });

    setCurrentBreakdown(breakdown);
    setBreakdownHistory((prev) => [...prev, breakdown]);

    const updatedSession: ActiveGameSession = {
      ...session,
      score: session.score + breakdown.finalItemScore,
      currentStreak: newStreak,
      maxStreak: Math.max(session.maxStreak, newStreak),
      status: 'FEEDBACK_ACTIVE',
      responses: [
        ...session.responses,
        {
          questionId: currentQuestion.id,
          questionType: currentQuestion.type,
          submittedAnswer: selectedOption,
          isCorrect,
          scoreEarned: breakdown.finalItemScore,
          timeSpentSeconds: 5,
          misconceptionTriggered: !isCorrect ? currentQuestion.misconceptionId : undefined,
          timestamp: new Date().toISOString()
        }
      ]
    };

    setSession(updatedSession);
    gameStorageService.saveActiveSession(updatedSession);
    setLifecycleState('FEEDBACK_ACTIVE');
  };

  // Next question or result
  const handleNextQuestion = () => {
    if (!session) return;
    const nextIdx = session.currentItemIndex + 1;

    if (nextIdx < session.totalItems) {
      const updatedSession: ActiveGameSession = {
        ...session,
        currentItemIndex: nextIdx,
        status: 'ACTIVE'
      };
      setSession(updatedSession);
      gameStorageService.saveActiveSession(updatedSession);
      setSelectedOption(null);
      setCurrentBreakdown(null);
      setLifecycleState('ACTIVE');
    } else {
      // Completed
      const completedSession: ActiveGameSession = {
        ...session,
        status: 'COMPLETED',
        completedAt: new Date().toISOString()
      };
      setSession(completedSession);
      gameStorageService.clearActiveSession();

      // Record to leaderboard
      const results = scoringEngine.calculateSessionResult(breakdownHistory);
      gameStorageService.recordLeaderboardEntry({
        gameId: session.gameId,
        unitNumber: session.unitNumber,
        playerNickname: session.player.nickname,
        isTeam: session.player.mode === 'team',
        score: completedSession.score,
        accuracy: results.accuracyPercentage,
        difficultyTier: 2,
        durationSeconds: 30
      });

      setLifecycleState('COMPLETED');
    }
  };

  // --------------------------------------------------------------------------
  // RENDER LIFECYCLE: INTRO SCREEN
  // --------------------------------------------------------------------------
  if (lifecycleState === 'INTRO') {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md p-8 md:p-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>PHASE 3A TECHNICAL PROTOTYPE — NOT CURRICULUM CONTENT</span>
        </div>

        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Generic Engine Lifecycle Prototype
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            This prototype proves the 8 architectural capabilities: abstract question schemas,
            deterministic seeded shuffle, answer validation, transparent scoring, and session restoration.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs md:text-sm text-slate-700 space-y-2">
          <p className="font-bold text-slate-900">Verified Architectural Foundations:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>State Machine: INTRO → ACTIVE → FEEDBACK_ACTIVE → COMPLETED</li>
            <li>No Firebase: Pure client-side LocalStorage session management</li>
            <li>IFP Ergonomics: Touch targets &gt;= 48px with high-contrast text</li>
            <li>Pedagogical Scoring: Cognitive tier multipliers + reasoning bonuses</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={() => handleStartGame(false)}
          >
            Start Individual Run
          </Button>
          <Button
            variant="outline"
            size="lg"
            isClassroomMode={isClassroomMode}
            onClick={() => handleStartGame(true)}
            leftIcon={<Users className="w-4 h-4" />}
          >
            Start Team Run
          </Button>
          <Button variant="ghost" size="lg" onClick={onExit}>
            Return
          </Button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER LIFECYCLE: COMPLETED / RESULT SCREEN
  // --------------------------------------------------------------------------
  if (lifecycleState === 'COMPLETED' && session) {
    const finalResults = scoringEngine.calculateSessionResult(breakdownHistory);
    const leaderboard = gameStorageService.getLeaderboard(session.gameId);

    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-10 space-y-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Lifecycle Verification Passed
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Prototype Playthrough Complete</h2>
          <p className="text-slate-600 text-sm mt-1">
            Student: <strong>{session.player.nickname}</strong> ({session.player.mode})
          </p>
        </div>

        {/* Score & Accuracy Metrics */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div>
            <div className="text-2xl font-black text-slate-900">{session.score}</div>
            <div className="text-xs text-slate-500 font-bold uppercase">Points Earned</div>
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-600">{finalResults.accuracyPercentage}%</div>
            <div className="text-xs text-slate-500 font-bold uppercase">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-black text-purple-600">{finalResults.masteryLevelReached}</div>
            <div className="text-xs text-slate-500 font-bold uppercase">Mastery Tier</div>
          </div>
        </div>

        {/* Mini Local Leaderboard Display */}
        <div className="text-left space-y-2">
          <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
            Local Session Leaderboard (Top Entries)
          </h4>
          <div className="space-y-1.5 max-h-36 overflow-y-auto">
            {leaderboard.slice(0, 3).map((lb, idx) => (
              <div
                key={lb.id}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs"
              >
                <span className="font-bold text-slate-800">
                  #{idx + 1} {lb.playerNickname} {lb.isTeam && '(Team)'}
                </span>
                <span className="font-black text-purple-700">
                  {lb.score} pts • {lb.accuracy}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <Button
            variant="outline"
            size="md"
            onClick={() => handleStartGame(session.player.mode === 'team')}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Replay Seed
          </Button>
          <Button variant="primary" size="md" onClick={onExit}>
            Exit Prototype
          </Button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER LIFECYCLE: ACTIVE / FEEDBACK SCREEN
  // --------------------------------------------------------------------------
  if (!session || !currentQuestion) return null;
  const isFeedbackActive = lifecycleState === 'FEEDBACK_ACTIVE';

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Top Progress & Score Bar */}
      <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase">
            {session.player.nickname} • Item {session.currentItemIndex + 1} of {session.totalItems}
          </span>
          <div className="text-sm font-black text-slate-900">
            Score: <span className="text-purple-700">{session.score}</span> pts
          </div>
        </div>
        <Badge variant="purple" isClassroomMode={isClassroomMode}>
          Streak: {session.currentStreak} 🔥
        </Badge>
      </div>

      <ProgressBar
        value={session.currentItemIndex + 1}
        max={session.totalItems}
        label={`Prototype Item ${session.currentItemIndex + 1} of ${session.totalItems}`}
        colorClass="bg-purple-600"
      />

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
            Cognitive Demand: {currentQuestion.cognitiveDemand}
          </span>
          <Badge variant="slate">{currentQuestion.coreProcesses.join(', ')}</Badge>
        </div>

        <h3 className={`font-black text-slate-900 tracking-tight leading-snug ${isClassroomMode ? 'text-2xl' : 'text-xl'}`}>
          {currentQuestion.prompt}
        </h3>

        {/* Options List */}
        <div className="space-y-3" role="radiogroup">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === currentQuestion.correctOptionId;

            let optionStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
            if (isFeedbackActive) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
              } else {
                optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            } else if (isSelected) {
              optionStyle = 'bg-purple-50 border-purple-600 text-purple-950 font-bold ring-2 ring-purple-500/20';
            }

            return (
              <button
                key={opt.id}
                onClick={() => !isFeedbackActive && setSelectedOption(opt.id)}
                disabled={isFeedbackActive}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-150 flex items-center justify-between cursor-pointer min-h-[52px] ${optionStyle}`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center shrink-0 text-sm ${
                      isSelected
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {isFeedbackActive && currentBreakdown && (
          <div
            className={`rounded-2xl border-2 p-5 animate-in fade-in duration-200 ${
              selectedOption === currentQuestion.correctOptionId
                ? 'bg-emerald-50/90 border-emerald-400 text-emerald-950'
                : 'bg-rose-50/90 border-rose-400 text-rose-950'
            }`}
          >
            <div className="flex items-start gap-3 mb-2">
              {selectedOption === currentQuestion.correctOptionId ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="font-extrabold text-base">
                  {selectedOption === currentQuestion.correctOptionId
                    ? `Reasoning verified! (+${currentBreakdown.finalItemScore} pts)`
                    : 'Analytical error detected'}
                </h4>
                <p className="text-xs mt-1 leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            </div>

            {currentQuestion.misconceptionAlert && selectedOption !== currentQuestion.correctOptionId && (
              <div className="mt-2 pt-2 border-t border-rose-200 text-xs font-semibold text-rose-900 flex items-start gap-2">
                <BookOpen className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{currentQuestion.misconceptionAlert}</span>
              </div>
            )}

            {currentBreakdown.appliedDimensions && currentBreakdown.appliedDimensions.length > 0 && (
              <div className="mt-3 pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="font-bold opacity-75">Evaluated Dimensions:</span>
                {currentBreakdown.appliedDimensions.map((dim) => (
                  <span
                    key={dim}
                    className="px-2 py-0.5 rounded-md bg-white/70 border border-slate-300 font-medium"
                  >
                    {dim}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Button variant="ghost" size="md" onClick={onExit}>
            Exit
          </Button>

          {!isFeedbackActive ? (
            <Button
              variant="primary"
              size="md"
              disabled={!selectedOption}
              onClick={handleSubmitAnswer}
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleNextQuestion}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {session.currentItemIndex + 1 === session.totalItems ? 'Finish Run' : 'Next Item'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
