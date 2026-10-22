import React from 'react';
import { Unit, Slide } from '../types/curriculum';
import { PresentationViewer } from '../components/presentation/PresentationViewer';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';

export interface LearnViewProps {
  unit: Unit;
  slides: Slide[];
  initialSlideNumber?: number;
  onExit: () => void;
  onCompleteSlide: (slideNumber: number, isFinished: boolean) => void;
  isClassroomMode: boolean;
}

export const LearnView: React.FC<LearnViewProps> = ({
  unit,
  slides,
  initialSlideNumber = 1,
  onExit,
  onCompleteSlide,
  isClassroomMode
}) => {
  const handleSlideChange = React.useCallback(
    (sNum: number) => {
      onCompleteSlide(sNum, false);
    },
    [onCompleteSlide]
  );

  const handleComplete = React.useCallback(() => {
    onCompleteSlide(slides.length, true);
  }, [onCompleteSlide, slides.length]);

  return (
    <div className="w-full space-y-4">
      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onExit },
          { label: `Unit ${unit.number}: ${unit.title}`, onClick: onExit },
          { label: 'Interactive Presentation' }
        ]}
        isClassroomMode={isClassroomMode}
      />

      {/* Main Presentation Viewer */}
      <PresentationViewer
        unitNumber={unit.number}
        slides={slides}
        initialSlideNumber={initialSlideNumber}
        onExit={onExit}
        onSlideChange={handleSlideChange}
        onComplete={handleComplete}
        isClassroomMode={isClassroomMode}
      />
    </div>
  );
};
