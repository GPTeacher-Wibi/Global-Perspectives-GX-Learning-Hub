import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isClassroomMode?: boolean;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  isClassroomMode = false,
  className = ''
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-slate-500 font-medium ${
        isClassroomMode ? 'text-base md:text-lg' : 'text-sm'
      } ${className}`}
    >
      <button
        onClick={items[0]?.onClick}
        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition px-2 py-1 rounded-lg hover:bg-slate-100 min-h-[44px] min-w-[44px] justify-center cursor-pointer"
        title="Go to Home"
      >
        <Home className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">Home</span>
      </button>

      {items.slice(1).map((item, idx) => {
        const isLast = idx === items.length - 2;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            {item.onClick && !isLast ? (
              <button
                onClick={item.onClick}
                className="text-slate-600 hover:text-blue-600 transition px-2 py-1 rounded-lg hover:bg-slate-100 min-h-[44px] flex items-center cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <span
                className={`px-2 py-1 rounded-lg font-semibold truncate max-w-[240px] md:max-w-[400px] ${
                  isLast ? 'text-slate-900 bg-slate-100/80' : 'text-slate-500'
                }`}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
