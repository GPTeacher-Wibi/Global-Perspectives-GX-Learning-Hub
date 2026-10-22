import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  X
} from 'lucide-react';
import { Button } from '../common/Button';

export interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onExit: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isClassroomMode: boolean;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onExit,
  isFullscreen,
  onToggleFullscreen,
  isClassroomMode
}) => {
  const isFirst = currentSlide === 1;
  const isLast = currentSlide === totalSlides;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 flex flex-wrap items-center justify-between gap-3 select-none">
      {/* Left Action: Exit / Back */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size={isClassroomMode ? 'lg' : 'md'}
          isClassroomMode={isClassroomMode}
          onClick={onExit}
          leftIcon={<X className="w-4 h-4 text-slate-500" />}
          title="Exit presentation and return to Unit Hub (Esc)"
        >
          Exit
        </Button>
      </div>

      {/* Middle: Stepper & Slide Dots */}
      <div className="flex items-center gap-3">
        <div className="text-center font-bold text-slate-800">
          <span className={isClassroomMode ? 'text-2xl' : 'text-base'}>
            Slide {currentSlide}
          </span>
          <span className="text-slate-400 font-medium ml-1">of {totalSlides}</span>
        </div>

        {/* Slide navigation dots */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const slideNum = idx + 1;
            const isActive = slideNum === currentSlide;
            return (
              <span
                key={slideNum}
                className={`transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-6 h-2.5 bg-blue-600'
                    : 'w-2.5 h-2.5 bg-slate-300'
                }`}
                title={`Slide ${slideNum}`}
              />
            );
          })}
        </div>
      </div>

      {/* Right Controls: Prev, Next, Fullscreen */}
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size={isClassroomMode ? 'lg' : 'md'}
          isClassroomMode={isClassroomMode}
          onClick={onPrevious}
          disabled={isFirst}
          leftIcon={<ChevronLeft className="w-5 h-5" />}
          title="Previous slide (Left Arrow)"
        >
          Previous
        </Button>

        <Button
          variant="primary"
          size={isClassroomMode ? 'lg' : 'md'}
          isClassroomMode={isClassroomMode}
          onClick={onNext}
          disabled={isLast}
          rightIcon={<ChevronRight className="w-5 h-5" />}
          title="Next slide (Right Arrow)"
        >
          {isLast ? 'Completed' : 'Next'}
        </Button>

        <button
          onClick={onToggleFullscreen}
          className="p-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 transition cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 text-slate-700" />
          ) : (
            <Maximize className="w-5 h-5 text-slate-700" />
          )}
        </button>
      </div>
    </div>
  );
};
