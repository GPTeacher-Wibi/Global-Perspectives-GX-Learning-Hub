import React from 'react';
import { Game } from '../../types/game';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Sparkles, Calendar, BookOpen, Clock, ArrowLeft, Target } from 'lucide-react';

export interface PlannedGamePlaceholderProps {
  game: Game;
  onExit: () => void;
  isClassroomMode?: boolean;
}

export const PlannedGamePlaceholder: React.FC<PlannedGamePlaceholderProps> = ({
  game,
  onExit,
  isClassroomMode = false
}) => {
  const difficultyVariantMap = {
    Foundation: 'blue' as const,
    Application: 'emerald' as const,
    Challenge: 'purple' as const
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            isClassroomMode={isClassroomMode}
            onClick={onExit}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Games
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`font-black text-slate-900 ${isClassroomMode ? 'text-2xl' : 'text-lg'}`}>
                {game.title}
              </h2>
              <Badge variant={difficultyVariantMap[game.difficulty]} isClassroomMode={isClassroomMode}>
                {game.difficulty}
              </Badge>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Unit {game.unitNumber} • Planned Canonical Micro-Game
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="amber" isClassroomMode={isClassroomMode}>
            Coming Soon / Planned
          </Badge>
        </div>
      </div>

      {/* Main Planned Game Blueprint Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
            <Calendar className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planned Canonical Game Blueprint</span>
          </div>

          <h3 className={`font-black text-slate-900 tracking-tight ${isClassroomMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            {game.title}
          </h3>

          <p className={`text-slate-600 leading-relaxed ${isClassroomMode ? 'text-lg' : 'text-base'}`}>
            {game.description}
          </p>
        </div>

        {/* Blueprint Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4 text-purple-600" />
              <span>Target Learning Concept</span>
            </div>
            <p className="text-slate-900 font-bold text-sm sm:text-base">
              {game.targetConcept}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Interactive Mechanic</span>
            </div>
            <p className="text-slate-900 font-bold text-sm sm:text-base">
              {game.mechanic}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Estimated Duration</span>
            </div>
            <p className="text-slate-900 font-bold text-sm sm:text-base">
              {game.estimatedMinutes} Minutes
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Skills Developed</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {game.skillsDeveloped.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Informative Roadmap Notice */}
        <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 max-w-2xl mx-auto flex items-start gap-3.5">
          <BookOpen className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-bold text-blue-950">
              Curriculum Roadmap Notice
            </p>
            <p className="text-xs sm:text-sm text-blue-900/90 leading-relaxed">
              This canonical game is fully specified in the curriculum blueprint. It will be implemented as an interactive micro-game in a future phase. You can still explore the instructional slides in <strong>Learn Mode</strong> and complete the formative questions in <strong>Practice Mode</strong>.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center pt-2">
          <Button
            variant="primary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={onExit}
          >
            Return to Games Catalog
          </Button>
        </div>
      </div>
    </div>
  );
};
