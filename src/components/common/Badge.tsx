import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'slate';
  icon?: React.ReactNode;
  isClassroomMode?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  icon,
  isClassroomMode = false,
  className = ''
}) => {
  const variantStyles = {
    blue: 'bg-blue-50 text-blue-800 border-blue-200',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    purple: 'bg-purple-50 text-purple-800 border-purple-200',
    rose: 'bg-rose-50 text-rose-800 border-rose-200',
    slate: 'bg-slate-100 text-slate-800 border-slate-300'
  };

  const textSize = isClassroomMode ? 'text-sm md:text-base py-1 px-3.5' : 'text-xs md:text-sm py-0.5 px-2.5';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full border shadow-2xs whitespace-nowrap ${variantStyles[variant]} ${textSize} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
