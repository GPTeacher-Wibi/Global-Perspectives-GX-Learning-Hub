import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Slide } from '../../types/curriculum';
import { SlideCard } from './SlideCard';
import { PresentationControls } from './PresentationControls';
import { ProgressBar } from '../common/ProgressBar';

export interface PresentationViewerProps {
  unitNumber: number;
  slides: Slide[];
  initialSlideNumber?: number;
  onExit: () => void;
  onComplete?: () => void;
  onSlideChange?: (slideNumber: number) => void;
  isClassroomMode: boolean;
}

export const PresentationViewer: React.FC<PresentationViewerProps> = ({
  unitNumber,
  slides,
  initialSlideNumber = 1,
  onExit,
  onComplete,
  onSlideChange,
  isClassroomMode
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    Math.max(0, Math.min(initialSlideNumber - 1, slides.length - 1))
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];

  // Callback refs to decouple from effect dependencies and avoid infinite re-render cascades
  const onSlideChangeRef = useRef(onSlideChange);
  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  });

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  const onExitRef = useRef(onExit);
  useEffect(() => {
    onExitRef.current = onExit;
  });

  // Notify parent on slide change for progress persistence (only once per unique slide number)
  const lastReportedSlideRef = useRef<number>(-1);
  useEffect(() => {
    const slideNumber = currentSlideIndex + 1;
    if (lastReportedSlideRef.current !== slideNumber) {
      lastReportedSlideRef.current = slideNumber;
      onSlideChangeRef.current?.(slideNumber);
    }
  }, [currentSlideIndex]);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      if (prev < totalSlides - 1) {
        return prev + 1;
      } else {
        onCompleteRef.current?.();
        return prev;
      }
    });
  }, [totalSlides]);

  const handlePrevious = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  // Keyboard navigation support: Left Arrow, Right Arrow, Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'Escape' && !document.fullscreenElement) {
        onExitRef.current();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrevious]);

  // Fullscreen API toggle with fallback
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (containerRef.current?.requestFullscreen) {
          await containerRef.current.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch {
      // Graceful fallback if iframe or browser security prevents fullscreen
      setIsFullscreen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!currentSlide) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200/90 shadow-sm max-w-xl mx-auto my-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
          {unitNumber}
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
          Unit {unitNumber} Presentation Coming in Phase 2
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          The presentation slide deck for this unit is scheduled for the upcoming phase.
          You can currently explore the unit learning objectives, keywords, and planned activities on the Unit Hub.
        </p>
        <button
          onClick={onExit}
          className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors shadow-sm ${
            isClassroomMode ? 'px-8 py-4 text-lg min-h-[56px]' : 'px-6 py-3 text-base min-h-[48px]'
          }`}
        >
          Return to Unit Hub
        </button>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full flex flex-col gap-4 ${
        isFullscreen ? 'bg-slate-100 p-6 sm:p-10 min-h-screen overflow-y-auto' : ''
      }`}
    >
      {/* Top Slide Progress Bar */}
      <ProgressBar
        value={currentSlideIndex + 1}
        max={totalSlides}
        isClassroomMode={isClassroomMode}
        colorClass="bg-blue-600"
      />

      {/* Main Slide Card Area */}
      <div className="w-full transition-all duration-150">
        <SlideCard slide={currentSlide} isClassroomMode={isClassroomMode} />
      </div>

      {/* Presentation Controls Deck */}
      <PresentationControls
        currentSlide={currentSlideIndex + 1}
        totalSlides={totalSlides}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onExit={onExit}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isClassroomMode={isClassroomMode}
      />
    </div>
  );
};
