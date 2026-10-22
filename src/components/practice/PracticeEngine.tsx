import React, { useState } from 'react';
import { PracticeQuestion } from '../../types/curriculum';
import { QuestionRenderer } from './QuestionRenderer';
import { FeedbackCard } from './FeedbackCard';
import { Button } from '../common/Button';
import { ProgressBar } from '../common/ProgressBar';
import { Award, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

export interface PracticeEngineProps {
  unitNumber: number;
  unitTitle: string;
  questions?: PracticeQuestion[];
  onExit: () => void;
  onComplete?: (score: number, total: number) => void;
  isClassroomMode: boolean;
}

export const PracticeEngine: React.FC<PracticeEngineProps> = ({
  unitNumber,
  unitTitle,
  questions = [],
  onExit,
  onComplete,
  isClassroomMode
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // If no questions populated yet (Phase 1 Intentional Placeholder State)
  if (!questions || questions.length === 0) {
    return (
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-md p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 rounded-3xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
          <Award className="w-10 h-10" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-3">
          Curriculum In Progress • Unit {unitNumber}
        </span>

        <h2
          className={`font-black text-slate-900 tracking-tight mb-3 ${
            isClassroomMode ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
          }`}
        >
          Practice for {unitTitle}
        </h2>

        <p
          className={`text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto ${
            isClassroomMode ? 'text-lg md:text-xl' : 'text-base'
          }`}
        >
          Practice activities for this unit will appear here. These exercises are based on the textbook's
          Quick Checks and Cambridge analytical frameworks.
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 text-left mb-8 max-w-md mx-auto space-y-2 text-xs md:text-sm text-slate-600">
          <p className="font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Planned Practice Activities:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Textbook Quick Check comprehension checks</li>
            <li>Scenario-based critical thinking items</li>
            <li>Misconception alerts & instant educational feedback</li>
          </ul>
        </div>

        <div className="flex justify-center gap-3">
          <Button
            variant="primary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={onExit}
          >
            Back to Unit Hub
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      onComplete?.(score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0), questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const finalAccuracy = Math.round((score / questions.length) * 100);
    return (
      <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 md:p-12 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">Practice Complete!</h2>
        <p className="text-slate-600 mb-6">
          You scored <strong className="text-slate-900 font-bold">{score}</strong> out of{' '}
          <strong className="text-slate-900 font-bold">{questions.length}</strong> ({finalAccuracy}%)
        </p>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={handleRestart}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Try Again
          </Button>
          <Button
            variant="primary"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={onExit}
          >
            Return to Unit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <ProgressBar
        value={currentIndex + 1}
        max={questions.length}
        label={`Question ${currentIndex + 1} of ${questions.length}`}
        showPercent
        isClassroomMode={isClassroomMode}
        colorClass="bg-amber-600"
      />

      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
        <QuestionRenderer
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
          isSubmitted={isSubmitted}
          isClassroomMode={isClassroomMode}
        />

        {isSubmitted && (
          <FeedbackCard
            isCorrect={selectedOption === currentQuestion.correctAnswer}
            explanation={currentQuestion.explanation}
            concept={currentQuestion.concept}
            misconceptionAlert={currentQuestion.misconceptionAlert}
            isClassroomMode={isClassroomMode}
          />
        )}

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Button
            variant="ghost"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={onExit}
          >
            Exit Practice
          </Button>

          {!isSubmitted ? (
            <Button
              variant="primary"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              disabled={!selectedOption}
              onClick={handleSubmit}
            >
              Check Answer
            </Button>
          ) : (
            <Button
              variant="primary"
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              onClick={handleNext}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {isLast ? 'View Results' : 'Next Question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
