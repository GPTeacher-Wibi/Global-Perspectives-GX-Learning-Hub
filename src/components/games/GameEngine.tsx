import React from 'react';
import { Game } from '../../types/game';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { X, RotateCcw, Gamepad2, Info } from 'lucide-react';

export interface GameEngineProps {
  game: Game;
  onExit: () => void;
  onRestart?: () => void;
  children?: React.ReactNode;
  score?: number;
  maxScore?: number;
  isClassroomMode?: boolean;
}

export const GameEngine: React.FC<GameEngineProps> = ({
  game,
  onExit,
  onRestart,
  children,
  score = 0,
  maxScore = 100,
  isClassroomMode = false
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Universal Game Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`font-black text-slate-900 ${isClassroomMode ? 'text-2xl' : 'text-lg'}`}>
                {game.title}
              </h2>
              <Badge variant="purple" isClassroomMode={isClassroomMode}>
                {game.difficulty}
              </Badge>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Concept: {game.targetConcept} • Mechanic: {game.mechanic}
            </p>
          </div>
        </div>

        {/* Action Controls & Score */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-black text-sm">
            Score: {score} / {maxScore}
          </div>

          {onRestart && (
            <Button
              variant="outline"
              size="sm"
              isClassroomMode={isClassroomMode}
              onClick={onRestart}
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              title="Restart Game"
            >
              Restart
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            leftIcon={<X className="w-4 h-4" />}
            title="Exit Game and return to catalog"
          >
            Exit
          </Button>
        </div>
      </div>

      {/* Main Game Stage / Canvas */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 min-h-[400px] flex flex-col justify-center items-center text-center">
        {children || (
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mx-auto">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">{game.title} Engine</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              This interactive game mechanic ({game.mechanic}) is architected and will be activated in Phase 6.
              The interface is designed for touch-first response and classroom Interactive Flat Panels.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2 text-left">
              <Info className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Target Learning: {game.targetConcept}</span>
            </div>
            <Button variant="primary" onClick={onExit}>
              Back to Game Catalog
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
