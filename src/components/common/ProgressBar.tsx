import React from 'react';

export interface ProgressBarProps {
  value: number; // 0 - 100
  max?: number;
  label?: string;
  showPercent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isClassroomMode?: boolean;
  colorClass?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercent = false,
  size = 'md',
  isClassroomMode = false,
  colorClass = 'bg-blue-600',
  className = ''
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const heightMap = {
    sm: isClassroomMode ? 'h-3' : 'h-2',
    md: isClassroomMode ? 'h-4' : 'h-3',
    lg: isClassroomMode ? 'h-6' : 'h-4.5'
  };

  return (
    <div className={`w-full ${className}`} role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5 text-slate-700 font-medium text-xs md:text-sm">
          {label && <span>{label}</span>}
          {showPercent && <span className="tabular-nums font-semibold">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300/60 ${heightMap[size]}`}>
        <div
          className={`${colorClass} h-full rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
