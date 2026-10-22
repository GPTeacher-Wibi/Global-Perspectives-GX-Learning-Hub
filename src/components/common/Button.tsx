import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'classroom';
  isClassroomMode?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isClassroomMode = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 active:scale-[0.98] select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

  const variantClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow focus:ring-blue-500 border border-blue-700',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 focus:ring-slate-400',
    outline:
      'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 focus:ring-blue-500 shadow-2xs',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-400 border border-transparent',
    danger:
      'bg-rose-600 hover:bg-rose-700 text-white shadow-sm focus:ring-rose-500 border border-rose-700',
    accent:
      'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm focus:ring-indigo-500 border border-indigo-700'
  };

  // Ensure touch targets are >= 48px in height and width
  const normalSizeClasses = {
    sm: 'min-h-[44px] px-3.5 py-2 text-sm gap-2',
    md: 'min-h-[48px] px-5 py-2.5 text-base gap-2.5',
    lg: 'min-h-[54px] px-6 py-3.5 text-lg gap-3 font-semibold',
    classroom: 'min-h-[60px] px-7 py-4 text-xl gap-3.5 font-bold tracking-wide'
  };

  const classroomSizeClasses = {
    sm: 'min-h-[48px] px-4 py-2.5 text-base gap-2.5',
    md: 'min-h-[56px] px-6 py-3.5 text-lg gap-3 font-semibold',
    lg: 'min-h-[64px] px-8 py-4 text-xl gap-3.5 font-bold tracking-wide',
    classroom: 'min-h-[72px] px-10 py-5 text-2xl gap-4 font-extrabold tracking-wide'
  };

  const sizeClass = isClassroomMode
    ? classroomSizeClasses[size]
    : normalSizeClasses[size];

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
    </button>
  );
};
