import React from 'react';
import { CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

export interface FeedbackCardProps {
  isCorrect: boolean;
  explanation: string;
  concept?: string;
  misconceptionAlert?: string;
  isClassroomMode?: boolean;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  isCorrect,
  explanation,
  concept,
  misconceptionAlert,
  isClassroomMode = false
}) => {
  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all animate-in fade-in duration-200 ${
        isCorrect
          ? 'bg-emerald-50/90 border-emerald-400 text-emerald-950'
          : 'bg-rose-50/90 border-rose-400 text-rose-950'
      } ${isClassroomMode ? 'text-lg p-6' : 'text-sm'}`}
      role="alert"
    >
      <div className="flex items-start gap-3 mb-2.5">
        {isCorrect ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
        )}
        <div>
          <h4 className="font-extrabold text-base md:text-lg">
            {isCorrect ? 'Well reasoned! Correct.' : 'Review needed: Misconception detected.'}
          </h4>
          {concept && (
            <span className="text-xs font-bold uppercase tracking-wider opacity-80 block mt-0.5">
              Core Concept: {concept}
            </span>
          )}
        </div>
      </div>

      <p className="leading-relaxed font-medium mb-3">{explanation}</p>

      {misconceptionAlert && !isCorrect && (
        <div className="mt-2 pt-2.5 border-t border-rose-200/80 flex items-start gap-2 text-xs md:text-sm font-semibold text-rose-900">
          <BookOpen className="w-4 h-4 shrink-0 mt-0.5" />
          <span>Misconception: {misconceptionAlert}</span>
        </div>
      )}
    </div>
  );
};
