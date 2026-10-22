import React from 'react';
import { Game } from '../../types/game';
import { GameCard } from './GameCard';
import { Gamepad2, Info, Trophy, Layers } from 'lucide-react';
import { Button } from '../common/Button';

export interface GameCatalogProps {
  unitNumber: number;
  unitTitle: string;
  microGames: Game[];
  capstones?: Game[];
  onPlayGame?: (gameId: string) => void;
  onExit: () => void;
  isClassroomMode?: boolean;
}

export const GameCatalog: React.FC<GameCatalogProps> = ({
  unitNumber,
  unitTitle,
  microGames,
  capstones = [],
  onPlayGame,
  onExit,
  isClassroomMode = false
}) => {
  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Catalog Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-purple-700 font-bold text-xs uppercase tracking-wider mb-1">
            <Gamepad2 className="w-4 h-4" />
            <span>Unit {unitNumber} Educational Games</span>
          </div>
          <h2
            className={`font-black text-slate-900 tracking-tight ${
              isClassroomMode ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
            }`}
          >
            {unitTitle}
          </h2>
        </div>

        <Button
          variant="outline"
          size={isClassroomMode ? 'lg' : 'md'}
          isClassroomMode={isClassroomMode}
          onClick={onExit}
        >
          Back to Unit Hub
        </Button>
      </div>

      {/* Classroom Guide / Info Banner */}
      <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-start gap-3 text-purple-950 text-xs sm:text-sm">
        <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">Pedagogical Game Design</p>
          <p className="text-purple-900/90 leading-relaxed mt-0.5">
            Each unit features three canonical micro-games reinforcing specific Cambridge Global Perspectives competencies, alongside advanced multi-stage Capstone Challenges where available.
          </p>
        </div>
      </div>

      {/* SECTION 1: Canonical Micro-Games */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 pb-1 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-800">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className={`font-black text-slate-900 ${isClassroomMode ? 'text-2xl' : 'text-xl'}`}>
              Canonical Micro-Games
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {microGames.length} Planned Games
          </span>
        </div>

        {microGames && microGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {microGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={onPlayGame}
                isClassroomMode={isClassroomMode}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500">
            No micro-games registered for this unit.
          </div>
        )}
      </div>

      {/* SECTION 2: Capstone Challenges (if any) */}
      {capstones && capstones.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between gap-2 pb-1 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <h3 className={`font-black text-slate-900 ${isClassroomMode ? 'text-2xl' : 'text-xl'}`}>
                  Capstone Challenge
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Active Benchmark
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capstones.map((capstone) => (
              <GameCard
                key={capstone.id}
                game={capstone}
                onPlay={onPlayGame}
                isClassroomMode={isClassroomMode}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
