import React from 'react';
import { Game } from '../../types/game';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Gamepad2, Clock, Sparkles, Lock } from 'lucide-react';

export interface GameCardProps {
  game: Game;
  onPlay?: (gameId: string) => void;
  isClassroomMode?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onPlay,
  isClassroomMode = false
}) => {
  const isAvailable = game.status === 'available';

  const difficultyVariantMap = {
    Foundation: 'blue' as const,
    Application: 'emerald' as const,
    Challenge: 'purple' as const
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 p-6 flex flex-col justify-between bg-white ${
        isAvailable
          ? 'border-purple-300 hover:border-purple-500 hover:shadow-lg'
          : 'border-slate-200/90 shadow-2xs'
      } ${isClassroomMode ? 'p-8 min-h-[300px]' : 'min-h-[250px]'}`}
    >
      <div>
        {/* Game Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge
            variant={difficultyVariantMap[game.difficulty]}
            isClassroomMode={isClassroomMode}
          >
            {game.difficulty}
          </Badge>

          <span className="flex items-center gap-1 text-xs text-slate-600 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            {game.estimatedMinutes} min
          </span>
        </div>

        <h3
          className={`font-black text-slate-900 tracking-tight leading-snug mb-1.5 ${
            isClassroomMode ? 'text-2xl' : 'text-lg md:text-xl'
          }`}
        >
          {game.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-purple-700 font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mechanic: {game.mechanic}</span>
        </div>

        <p
          className={`text-slate-600 leading-relaxed mb-4 ${
            isClassroomMode ? 'text-base md:text-lg' : 'text-sm'
          }`}
        >
          {game.description}
        </p>

        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 mb-5 text-xs text-slate-700">
          <strong className="text-slate-900 font-bold">Concept Tested: </strong>
          {game.targetConcept}
        </div>
      </div>

      <div>
        {isAvailable && onPlay ? (
          <Button
            variant="primary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            className="w-full bg-purple-600 hover:bg-purple-700 border-purple-700"
            onClick={() => onPlay(game.id)}
            leftIcon={<Gamepad2 className="w-4 h-4" />}
          >
            Start Game
          </Button>
        ) : onPlay ? (
          <Button
            variant="secondary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            className="w-full text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-300"
            onClick={() => onPlay(game.id)}
            leftIcon={<Clock className="w-4 h-4 text-amber-600" />}
          >
            Planned • View Blueprint
          </Button>
        ) : (
          <Button
            variant="secondary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            className="w-full text-slate-500 bg-slate-100 border-slate-200 cursor-not-allowed"
            disabled
            leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
          >
            Planned Game
          </Button>
        )}
      </div>
    </div>
  );
};
