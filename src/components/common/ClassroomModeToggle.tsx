import React from 'react';
import { Presentation, Monitor } from 'lucide-react';

export interface ClassroomModeToggleProps {
  isClassroomMode: boolean;
  onToggle: (enabled: boolean) => void;
  className?: string;
}

export const ClassroomModeToggle: React.FC<ClassroomModeToggleProps> = ({
  isClassroomMode,
  onToggle,
  className = ''
}) => {
  return (
    <button
      onClick={() => onToggle(!isClassroomMode)}
      className={`relative inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl font-semibold transition-all duration-150 border select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 min-h-[48px] ${
        isClassroomMode
          ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-600 shadow-md ring-2 ring-amber-400/40'
          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
      } ${className}`}
      aria-pressed={isClassroomMode}
      title="Toggle Classroom Projection Mode for Interactive Flat Panels"
    >
      {isClassroomMode ? (
        <Presentation className="w-5 h-5 text-slate-950 shrink-0 animate-pulse" />
      ) : (
        <Monitor className="w-5 h-5 text-slate-500 shrink-0" />
      )}
      <div className="flex flex-col text-left">
        <span className="text-xs uppercase tracking-wider font-bold leading-tight">
          {isClassroomMode ? 'Classroom Mode' : 'Standard Mode'}
        </span>
        <span className={`text-[11px] font-normal leading-tight ${isClassroomMode ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
          {isClassroomMode ? 'Projection Active' : 'Touch / Flat Panel'}
        </span>
      </div>
      <span
        className={`ml-1 w-2.5 h-2.5 rounded-full ${
          isClassroomMode ? 'bg-slate-950' : 'bg-slate-300'
        }`}
      />
    </button>
  );
};
