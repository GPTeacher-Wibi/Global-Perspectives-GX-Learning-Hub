import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { UNITS_DATA } from '../../data/units';

export interface UnitSwitcherProps {
  currentUnitNumber?: number;
  onSelectUnit: (unitNumber: number) => void;
  isClassroomMode?: boolean;
}

export const UnitSwitcher: React.FC<UnitSwitcherProps> = ({
  currentUnitNumber,
  onSelectUnit,
  isClassroomMode = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentUnit = currentUnitNumber
    ? UNITS_DATA.find((u) => u.number === currentUnitNumber)
    : null;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-between gap-2.5 px-3.5 py-2 rounded-xl font-semibold border transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[48px] ${
          isOpen ? 'bg-slate-100 border-slate-400' : 'bg-white hover:bg-slate-50 border-slate-300'
        } ${isClassroomMode ? 'text-lg px-5 py-3' : 'text-sm'}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 text-slate-800">
          <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="font-bold">
            {currentUnit ? `Unit ${currentUnit.number}: ${currentUnit.title}` : 'Select Unit'}
          </span>
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 md:w-84 max-h-96 overflow-y-auto rounded-2xl bg-white shadow-2xl border border-slate-200 z-50 py-2 divide-y divide-slate-100 focus:outline-none">
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-50">
            Jump to Unit
          </div>
          <div className="py-1">
            {UNITS_DATA.map((unit) => {
              const isSelected = unit.number === currentUnitNumber;
              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    onSelectUnit(unit.number);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 flex items-start gap-3 transition cursor-pointer min-h-[50px] ${
                    isSelected
                      ? 'bg-blue-50 text-blue-900 font-bold'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span
                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {unit.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{unit.title}</p>
                    <p className="text-xs text-slate-600 truncate">{unit.dimension}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
