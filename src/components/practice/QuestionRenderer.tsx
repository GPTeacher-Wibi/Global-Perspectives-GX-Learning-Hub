import React from 'react';
import { PracticeQuestion } from '../../types/curriculum';
import { Badge } from '../common/Badge';

export interface QuestionRendererProps {
  question: PracticeQuestion;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
  isSubmitted: boolean;
  isClassroomMode?: boolean;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isSubmitted,
  isClassroomMode = false
}) => {
  return (
    <div className="space-y-6">
      {/* Question Header & Meta */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <span className="text-xs md:text-sm font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
          Unit {question.unitNumber} • {question.type.replace('-', ' ')}
        </span>
        <Badge variant="slate" isClassroomMode={isClassroomMode}>
          {question.difficulty}
        </Badge>
      </div>

      {/* Scenario if present */}
      {question.scenario && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed font-normal text-sm md:text-base">
          <span className="font-bold text-slate-900 block mb-1">Context / Scenario:</span>
          {question.scenario}
        </div>
      )}

      {/* Question Prompt */}
      <h3
        className={`font-black text-slate-900 tracking-tight leading-snug ${
          isClassroomMode ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        }`}
      >
        {question.question}
      </h3>

      {/* Options List with >=48px Touch Targets */}
      <div className="space-y-3" role="radiogroup" aria-label="Question Options">
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === option.id;
          const isCorrect = option.id === question.correctAnswer;

          let optionStyle = 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800';
          if (isSubmitted) {
            if (isCorrect) {
              optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
            } else {
              optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
            }
          } else if (isSelected) {
            optionStyle = 'bg-blue-50/80 border-blue-600 text-blue-950 font-bold ring-2 ring-blue-500/20';
          }

          return (
            <button
              key={option.id}
              onClick={() => !isSubmitted && onSelectOption(option.id)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-150 flex items-center justify-between cursor-pointer min-h-[56px] ${optionStyle} ${
                isClassroomMode ? 'text-lg md:text-xl py-5' : 'text-base'
              }`}
              role="radio"
              aria-checked={isSelected}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center shrink-0 text-sm ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-snug">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
