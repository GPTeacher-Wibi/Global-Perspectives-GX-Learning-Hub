import React, { useState } from 'react';
import { Slide } from '../../types/curriculum';
import { Badge } from '../common/Badge';
import { Eye, CheckCircle2, HelpCircle, Sparkles, BookOpen, GraduationCap, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';

export interface SlideCardProps {
  slide: Slide;
  isClassroomMode?: boolean;
}

export const SlideCard: React.FC<SlideCardProps> = ({ slide, isClassroomMode = false }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showTeacherNote, setShowTeacherNote] = useState(false);

  // Reset local interactive state when slide changes
  React.useEffect(() => {
    setIsRevealed(false);
    setSelectedOptionId(null);
    setShowTeacherNote(false);
  }, [slide.id]);

  const { content } = slide;

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'definition':
      case 'concept':
        return 'blue';
      case 'comparison':
        return 'indigo';
      case 'misconception':
        return 'rose';
      case 'case-study':
      case 'example':
        return 'amber';
      case 'quick-check':
      case 'summary':
        return 'emerald';
      case 'discussion-prompt':
        return 'amber';
      default:
        return 'slate';
    }
  };

  return (
    <div
      className={`w-full bg-white rounded-3xl border border-slate-200/90 shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-200 ${
        isClassroomMode ? 'p-8 md:p-12 min-h-[500px]' : 'p-6 md:p-8 min-h-[420px]'
      }`}
    >
      {/* Top Slide Meta */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              Unit {slide.unitNumber}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wide">
              {slide.section}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {slide.teacherNote && (
              <button
                type="button"
                onClick={() => setShowTeacherNote((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition cursor-pointer ${
                  showTeacherNote
                    ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                    : 'bg-amber-50/90 text-amber-800 hover:bg-amber-100 border-amber-200'
                }`}
                title="Toggle Teacher Notes"
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                <span>Teacher Note</span>
              </button>
            )}

            <Badge variant={getBadgeVariant(slide.type)} isClassroomMode={isClassroomMode}>
              {slide.type.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Optional Teacher Note Panel */}
        {showTeacherNote && slide.teacherNote && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50/95 border border-amber-200 text-amber-950 flex items-start gap-3 shadow-xs">
            <GraduationCap className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-amber-900 uppercase tracking-wide block mb-1">
                Teacher Pedagogical Guidance:
              </span>
              <p className="text-amber-900">{slide.teacherNote}</p>
            </div>
          </div>
        )}

        {/* Slide Headings */}
        {content.heading && (
          <h2
            className={`font-black text-slate-900 tracking-tight leading-snug mb-3 ${
              isClassroomMode ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
            }`}
          >
            {content.heading}
          </h2>
        )}

        {content.subheading && (
          <p
            className={`font-semibold text-blue-600 mb-6 ${
              isClassroomMode ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
            }`}
          >
            {content.subheading}
          </p>
        )}

        {/* Slide Body */}
        {content.body && (
          <div
            className={`text-slate-700 leading-relaxed mb-6 space-y-3 ${
              isClassroomMode ? 'text-xl md:text-2xl leading-relaxed' : 'text-base md:text-lg'
            }`}
          >
            {content.body.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* Bullets List */}
        {content.bullets && content.bullets.length > 0 && (
          <div className="mb-6 space-y-3">
            {content.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 ${
                  isClassroomMode ? 'text-lg md:text-xl p-4' : 'text-sm md:text-base'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-slate-800 leading-normal">{bullet}</p>
              </div>
            ))}
          </div>
        )}

        {/* Comparison Layout */}
        {content.comparison && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200">
              <h3 className={`font-bold text-blue-900 mb-3 ${isClassroomMode ? 'text-xl' : 'text-base'}`}>
                {content.comparison.itemA.label}
              </h3>
              <ul className="space-y-2 text-slate-700">
                {content.comparison.itemA.points.map((pt, i) => (
                  <li key={i} className={`flex items-start gap-2 ${isClassroomMode ? 'text-lg' : 'text-sm'}`}>
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200">
              <h3 className={`font-bold text-indigo-900 mb-3 ${isClassroomMode ? 'text-xl' : 'text-base'}`}>
                {content.comparison.itemB.label}
              </h3>
              <ul className="space-y-2 text-slate-700">
                {content.comparison.itemB.points.map((pt, i) => (
                  <li key={i} className={`flex items-start gap-2 ${isClassroomMode ? 'text-lg' : 'text-sm'}`}>
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Concrete Example Box */}
        {content.example && (
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 my-6">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{content.example.title}</span>
            </div>
            <p className={`text-slate-800 mb-3 leading-relaxed ${isClassroomMode ? 'text-lg md:text-xl' : 'text-base'}`}>
              {content.example.scenario}
            </p>
            {content.example.takeaway && (
              <div className="pt-2 border-t border-amber-200/60 text-xs md:text-sm font-semibold text-amber-950">
                💡 Lesson: {content.example.takeaway}
              </div>
            )}
          </div>
        )}

        {/* Interactive Element (Tap to Reveal / Mini Quick Check) */}
        {content.interactiveData && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/30 border-2 border-blue-200/80 my-6">
            <div className="flex items-center gap-2 text-blue-900 font-bold mb-3">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
              <span className={isClassroomMode ? 'text-xl' : 'text-base'}>
                {content.interactiveData.prompt}
              </span>
            </div>

            {/* Tap to Reveal Mode */}
            {content.interactiveData.revealedText && (
              <div>
                {!isRevealed ? (
                  <Button
                    variant="outline"
                    size={isClassroomMode ? 'lg' : 'md'}
                    isClassroomMode={isClassroomMode}
                    onClick={() => setIsRevealed(true)}
                    leftIcon={<Eye className="w-4 h-4 text-blue-600" />}
                  >
                    Tap to Reveal Answer
                  </Button>
                ) : (
                  <div className="p-4 rounded-xl bg-white border border-blue-300 text-slate-800 animate-in fade-in duration-200 shadow-xs">
                    <p className={`font-medium whitespace-pre-line ${isClassroomMode ? 'text-lg md:text-xl' : 'text-base'}`}>
                      {content.interactiveData.revealedText}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Check Options Mode */}
            {content.interactiveData.options && (
              <div className="space-y-2.5 mt-3">
                {content.interactiveData.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <div key={opt.id} className="space-y-1.5">
                      <button
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition font-medium flex items-center justify-between cursor-pointer min-h-[50px] ${
                          isSelected
                            ? opt.isCorrect
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                              : 'bg-rose-50 border-rose-400 text-rose-900'
                            : 'bg-white hover:bg-slate-100/80 border-slate-300 text-slate-800'
                        } ${isClassroomMode ? 'text-lg md:text-xl' : 'text-sm md:text-base'}`}
                      >
                        <span>{opt.label}</span>
                        {isSelected && opt.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                      </button>
                      {isSelected && (
                        <div
                          className={`p-3 rounded-lg text-xs md:text-sm font-medium ${
                            opt.isCorrect
                              ? 'bg-emerald-100/70 text-emerald-900'
                              : 'bg-rose-100/70 text-rose-900'
                          }`}
                        >
                          {opt.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Key Takeaway Callout */}
        {content.keyTakeaway && (
          <div className="p-4 rounded-2xl bg-blue-600 text-white font-semibold flex items-center gap-3 shadow-sm my-4">
            <CheckCircle2 className="w-6 h-6 text-blue-200 shrink-0" />
            <p className={isClassroomMode ? 'text-lg md:text-xl' : 'text-sm md:text-base'}>
              {content.keyTakeaway}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Source Citation */}
      {(slide.sourceRef || content.sourceCitation) && (
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-slate-600 text-xs mt-6">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-medium text-slate-700">
              {content.sourceCitation || `${slide.sourceRef?.unit}, Section ${slide.sourceRef?.section}`}
            </span>
            {slide.sourceRef && (
              <span className="text-slate-400 font-normal">
                (pp. {slide.sourceRef.pages})
              </span>
            )}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Cambridge GP Grade X • Andri Wibisono
          </span>
        </div>
      )}
    </div>
  );
};
