import React from 'react';
import { LearningProgress } from '../types/progress';
import { ProgressSummary } from '../components/progress/ProgressSummary';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';

export interface ProgressViewProps {
  progress: LearningProgress;
  nickname: string;
  onResetProgress: () => void;
  onSelectUnit: (unitNumber: number) => void;
  onBackToHome: () => void;
  isClassroomMode: boolean;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  progress,
  nickname,
  onResetProgress,
  onSelectUnit,
  onBackToHome,
  isClassroomMode
}) => {
  return (
    <div className="w-full space-y-6">
      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onBackToHome },
          { label: 'Student Progress & Mastery' }
        ]}
        isClassroomMode={isClassroomMode}
      />

      <ProgressSummary
        progress={progress}
        nickname={nickname}
        onResetProgress={onResetProgress}
        onSelectUnit={onSelectUnit}
        isClassroomMode={isClassroomMode}
      />
    </div>
  );
};
