import React, { useState } from 'react';
import { MASTER_GLOSSARY } from '../data/glossary';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import {
  BookOpen,
  Monitor,
  Search,
  CheckCircle2,
  GraduationCap,
  Layers,
  Sparkles
} from 'lucide-react';

export interface AboutViewProps {
  onBackToHome: () => void;
  isClassroomMode: boolean;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBackToHome,
  isClassroomMode
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = MASTER_GLOSSARY.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.indonesian.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-8">
      {/* Top Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onBackToHome },
          { label: 'Curriculum, Source of Truth & Teacher Guide' }
        ]}
        isClassroomMode={isClassroomMode}
      />

      {/* Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Source & Instructional Design</span>
        </div>
        <h1
          className={`font-black text-slate-900 tracking-tight mb-4 ${
            isClassroomMode ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'
          }`}
        >
          About Global Perspectives Learning Hub
        </h1>
        <p
          className={`text-slate-600 leading-relaxed max-w-3xl ${
            isClassroomMode ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
          }`}
        >
          This educational application serves as an interactive companion for the Grade 10 Cambridge
          Global Perspectives & Research course. Built for high-engagement classroom projection on
          Interactive Flat Panels (IFP) and self-paced individual student inquiry.
        </p>
      </div>

      {/* Section 1: Source of Truth */}
      <div className="bg-blue-50/70 rounded-3xl border border-blue-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Primary Academic Source of Truth
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-blue-800">
              Textbook Reference & Attribution
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-blue-200/80 shadow-2xs space-y-2 text-sm text-slate-700">
          <p className="font-bold text-slate-900 text-base">
            Global Perspectives Grade X – Textbook (2nd Edition)
          </p>
          <p>
            <strong>Author:</strong> Andri Wibisono
          </p>
          <p>
            <strong>Scope:</strong> Units 1 through 10 covering Methodological Foundations, Deep Information Processing, Evidence Evaluation, and Reasoned Argumentation.
          </p>
          <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
            All learning objectives, conceptual distinctions (e.g. Basic vs. Applied research, Deductive vs. Inductive reasoning, Toulmin argument model), and practice checks in this hub directly reflect the official 2nd edition textbook.
          </p>
        </div>
      </div>

      {/* Section 2: 3 Curriculum Dimensions */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Curriculum Structure</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900">
          3 Pedagogical Dimensions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <Badge variant="blue">Units 1 – 3</Badge>
            <h3 className="font-bold text-lg text-slate-900">Methodological Foundations</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Research taxonomy, Basic vs. Applied research, formulation of inquiry questions, hypotheses, and primary/secondary data collection.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <Badge variant="purple">Units 4 – 6</Badge>
            <h3 className="font-bold text-lg text-slate-900">Deep Information Processing</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Data synthesis, meta-analysis, narrative synthesis, coding qualitative data, thematic analysis, and bias identification.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <Badge variant="emerald">Units 7 – 10</Badge>
            <h3 className="font-bold text-lg text-slate-900">Argumentation & Communication</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Toulmin argument model (Claim, Evidence, Warrant), logical fallacies, evidence strength testing, claims of fact/value/policy, and academic citations.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Classroom Projection Mode & IFP Tips */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Monitor className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Interactive Flat Panel (IFP) & Classroom Mode Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Optimized for ViewSonic, SMART Board, Promethean, and interactive projectors
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">Projection Mode</span>
            <p className="text-slate-600">
              Toggle "Classroom Mode" in the top bar to enlarge text sizes and raise visual contrast for rear-row readability.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">Touch Targets (48px+)</span>
            <p className="text-slate-600">
              All buttons, pills, and interactive options have generous tap areas designed for fingers and stylus pens.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">Keyboard Shortcuts</span>
            <p className="text-slate-600">
              Use <kbd className="bg-white px-1.5 py-0.5 rounded border">Left</kbd> and{' '}
              <kbd className="bg-white px-1.5 py-0.5 rounded border">Right</kbd> arrow keys to advance slides, and{' '}
              <kbd className="bg-white px-1.5 py-0.5 rounded border">Esc</kbd> to exit.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">Local & Private</span>
            <p className="text-slate-600">
              Progress and nicknames are stored exclusively in browser localStorage. No sign-up or accounts required.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Master Glossary of Key Terms */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Official Textbook Glossary (Pages 3–5)</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              Master Glossary of Key Terms
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors bg-slate-50/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-bold text-slate-900 text-base">{item.term}</h3>
                  {item.unitNumber && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Unit {item.unitNumber}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  {item.definition}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Indonesian: <strong className="text-slate-800 font-semibold">{item.indonesian}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {filteredGlossary.length === 0 && (
          <p className="text-center text-slate-500 py-8 text-sm">
            No glossary terms found matching "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};
