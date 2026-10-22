import React from 'react';
import { BookOpen, Award, Gamepad2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export interface ModeCardProps {
  mode: 'learn' | 'practice' | 'games';
  title: string;
  subtitle: string;
  description: string;
  completed?: boolean;
  statusText: string;
  onSelect: () => void;
  isClassroomMode?: boolean;
}

export const ModeCard: React.FC<ModeCardProps> = ({
  mode,
  title,
  subtitle,
  description,
  completed = false,
  statusText,
  onSelect,
  isClassroomMode = false
}) => {
  const modeConfig = {
    learn: {
      icon: <BookOpen className="w-7 h-7 text-blue-600" />,
      color: 'border-blue-200 hover:border-blue-400 bg-blue-50/40',
      badgeBg: 'bg-blue-100 text-blue-800',
      buttonVariant: 'primary' as const
    },
    practice: {
      icon: <Award className="w-7 h-7 text-amber-600" />,
      color: 'border-amber-200 hover:border-amber-400 bg-amber-50/40',
      badgeBg: 'bg-amber-100 text-amber-800',
      buttonVariant: 'primary' as const
    },
    games: {
      icon: <Gamepad2 className="w-7 h-7 text-purple-600" />,
      color: 'border-purple-200 hover:border-purple-400 bg-purple-50/40',
      badgeBg: 'bg-purple-100 text-purple-800',
      buttonVariant: 'primary' as const
    }
  };

  const config = modeConfig[mode];

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-200 p-6 flex flex-col justify-between hover:shadow-lg bg-white ${
        config.color
      } ${isClassroomMode ? 'p-8 min-h-[340px]' : 'min-h-[280px]'}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-13 h-13 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center shrink-0">
            {config.icon}
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
              completed
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : config.badgeBg
            }`}
          >
            {completed ? (
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Completed
              </span>
            ) : (
              statusText
            )}
          </span>
        </div>

        <span className="text-xs uppercase font-bold tracking-wider text-slate-600 block mb-1">
          {subtitle}
        </span>
        <h3
          className={`font-black text-slate-900 tracking-tight mb-2 ${
            isClassroomMode ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-slate-600 leading-relaxed mb-6 ${
            isClassroomMode ? 'text-base md:text-lg' : 'text-sm'
          }`}
        >
          {description}
        </p>
      </div>

      <div>
        <Button
          variant={config.buttonVariant}
          size={isClassroomMode ? 'lg' : 'md'}
          isClassroomMode={isClassroomMode}
          className="w-full justify-between shadow-xs cursor-pointer"
          onClick={onSelect}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Open {title}
        </Button>
      </div>
    </div>
  );
};
