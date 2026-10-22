import React from 'react';
import { Unit } from '../../types/curriculum';
import { Badge } from '../common/Badge';
import { BookOpen, Target, KeyRound } from 'lucide-react';

export interface UnitHeaderProps {
  unit: Unit;
  isClassroomMode?: boolean;
}

export const UnitHeader: React.FC<UnitHeaderProps> = ({ unit, isClassroomMode = false }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-8 overflow-hidden relative">
      <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r ${unit.themeColor}`} />

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-xl bg-blue-50 text-blue-700 font-extrabold text-sm uppercase tracking-wider border border-blue-200">
            Unit {unit.number}
          </span>
          <span className="text-slate-400 font-medium">•</span>
          <span className="text-slate-600 text-sm font-semibold">
            Textbook pp. {unit.textbookPageStart}–{unit.textbookPageEnd}
          </span>
        </div>
        <Badge variant="slate" isClassroomMode={isClassroomMode}>
          {unit.dimension}
        </Badge>
      </div>

      <h1
        className={`font-black text-slate-900 tracking-tight mb-3 ${
          isClassroomMode ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl md:text-4xl'
        }`}
      >
        {unit.title}
      </h1>

      <p
        className={`text-slate-600 max-w-3xl leading-relaxed mb-6 ${
          isClassroomMode ? 'text-lg md:text-xl' : 'text-base md:text-lg'
        }`}
      >
        {unit.shortDescription}
      </p>

      {/* Grid of Learning Objectives and Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60">
          <h2 className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            <Target className="w-4 h-4 text-blue-600 shrink-0" />
            Learning Objectives
          </h2>
          <ul className="space-y-1.5 text-xs md:text-sm text-slate-600">
            {unit.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60 flex flex-col justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              <KeyRound className="w-4 h-4 text-indigo-600 shrink-0" />
              Keywords to Master
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {unit.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-600">
            <BookOpen className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span>Academic Source: Cambridge Global Perspectives Grade X (2nd Ed.)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
