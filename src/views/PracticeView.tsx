import React from 'react';
import { Unit } from '../types/curriculum';
import { PracticeEngine } from '../components/practice/PracticeEngine';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import { UNIT_1_PRACTICE_QUESTIONS } from '../data/practice/unit1Practice';
import { UNIT_2_PRACTICE_QUESTIONS } from '../data/practice/unit2Practice';
import { UNIT_3_PRACTICE_QUESTIONS } from '../data/practice/unit3Practice';
import { UNIT_4_PRACTICE_QUESTIONS } from '../data/practice/unit4Practice';
import { UNIT_5_PRACTICE_QUESTIONS } from '../data/practice/unit5Practice';
import { UNIT_6_PRACTICE_QUESTIONS } from '../data/practice/unit6Practice';
import { UNIT_7_PRACTICE_QUESTIONS } from '../data/practice/unit7Practice';
import { UNIT_8_PRACTICE_QUESTIONS } from '../data/practice/unit8Practice';
import { UNIT_9_PRACTICE_QUESTIONS } from '../data/practice/unit9Practice';
import { UNIT_10_PRACTICE_QUESTIONS } from '../data/practice/unit10Practice';

const PRACTICE_QUESTIONS_BY_UNIT: Record<number, any[]> = {
  1: UNIT_1_PRACTICE_QUESTIONS,
  2: UNIT_2_PRACTICE_QUESTIONS,
  3: UNIT_3_PRACTICE_QUESTIONS,
  4: UNIT_4_PRACTICE_QUESTIONS,
  5: UNIT_5_PRACTICE_QUESTIONS,
  6: UNIT_6_PRACTICE_QUESTIONS,
  7: UNIT_7_PRACTICE_QUESTIONS,
  8: UNIT_8_PRACTICE_QUESTIONS,
  9: UNIT_9_PRACTICE_QUESTIONS,
  10: UNIT_10_PRACTICE_QUESTIONS
};

export interface PracticeViewProps {
  unit: Unit;
  onExit: () => void;
  onCompletePractice: (score: number, total: number) => void;
  isClassroomMode: boolean;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  unit,
  onExit,
  onCompletePractice,
  isClassroomMode
}) => {
  // Use unit sample questions if present, or fallback to the unit-specific question bank
  const practiceQuestions =
    unit.sampleQuestions && unit.sampleQuestions.length > 0
      ? unit.sampleQuestions
      : PRACTICE_QUESTIONS_BY_UNIT[unit.number] || [];

  return (
    <div className="w-full space-y-6">
      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onExit },
          { label: `Unit ${unit.number}: ${unit.title}`, onClick: onExit },
          { label: 'Practice & Quick Checks' }
        ]}
        isClassroomMode={isClassroomMode}
      />

      {/* Practice Engine */}
      <PracticeEngine
        unitNumber={unit.number}
        unitTitle={unit.title}
        questions={practiceQuestions}
        onExit={onExit}
        onComplete={onCompletePractice}
        isClassroomMode={isClassroomMode}
      />
    </div>
  );
};
