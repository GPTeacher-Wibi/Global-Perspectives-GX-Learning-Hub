import React, { useState } from 'react';
import {
  Globe2,
  Trophy,
  Info,
  User,
  Edit2
} from 'lucide-react';
import { ClassroomModeToggle } from '../common/ClassroomModeToggle';
import { UnitSwitcher } from './UnitSwitcher';
import { Modal } from '../common/Modal';

export interface NavbarProps {
  currentRoute: string;
  currentUnitNumber?: number;
  onNavigate: (route: string) => void;
  isClassroomMode: boolean;
  onToggleClassroomMode: (enabled: boolean) => void;
  nickname: string;
  onUpdateNickname: (name: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  currentUnitNumber,
  onNavigate,
  isClassroomMode,
  onToggleClassroomMode,
  nickname,
  onUpdateNickname
}) => {
  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [tempNickname, setTempNickname] = useState(nickname);

  const handleSaveNickname = () => {
    onUpdateNickname(tempNickname);
    setIsNicknameModalOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${
        isClassroomMode
          ? 'py-3 border-amber-300 shadow-md'
          : 'py-2.5 border-slate-200 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1"
            >
              <div
                className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm shrink-0 ${
                  isClassroomMode ? 'w-13 h-13' : 'w-11 h-11'
                }`}
              >
                <Globe2 className={`${isClassroomMode ? 'w-8 h-8' : 'w-6 h-6'} group-hover:rotate-12 transition-transform duration-300`} />
              </div>
              <div className="min-w-0">
                <span
                  className={`font-black tracking-tight block text-slate-900 group-hover:text-blue-600 transition-colors uppercase ${
                    isClassroomMode ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                  }`}
                >
                  Global Perspectives
                </span>
                <span
                  className={`block text-slate-500 font-medium tracking-wide ${
                    isClassroomMode ? 'text-xs md:text-sm text-slate-600 font-semibold' : 'text-xs'
                  }`}
                >
                  Grade 10 • Learn. Practice. Think. Apply.
                </span>
              </div>
            </button>

            {/* Quick Unit Switcher (shows if inside a unit) */}
            {currentUnitNumber && (
              <div className="hidden lg:block ml-4 pl-4 border-l border-slate-200">
                <UnitSwitcher
                  currentUnitNumber={currentUnitNumber}
                  onSelectUnit={(uNum) => onNavigate(`/unit/${uNum}`)}
                  isClassroomMode={isClassroomMode}
                />
              </div>
            )}
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Classroom Mode Toggle */}
            <ClassroomModeToggle
              isClassroomMode={isClassroomMode}
              onToggle={onToggleClassroomMode}
            />

            {/* Global Nav Links */}
            <nav className="flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
              <button
                onClick={() => onNavigate('/progress')}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold transition cursor-pointer min-h-[48px] ${
                  currentRoute === '/progress'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                } ${isClassroomMode ? 'text-lg px-4' : 'text-sm'}`}
                title="View Student Progress & Mastery"
              >
                <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="hidden md:inline">Progress</span>
              </button>

              <button
                onClick={() => onNavigate('/about')}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold transition cursor-pointer min-h-[48px] ${
                  currentRoute === '/about'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                } ${isClassroomMode ? 'text-lg px-4' : 'text-sm'}`}
                title="Curriculum Info & Teacher Guide"
              >
                <Info className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="hidden md:inline">About</span>
              </button>
            </nav>

            {/* Student Nickname Badge */}
            <button
              onClick={() => {
                setTempNickname(nickname);
                setIsNicknameModalOpen(true);
              }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition cursor-pointer min-h-[48px] ${
                nickname
                  ? 'bg-indigo-50/80 text-indigo-900 border-indigo-200 hover:bg-indigo-100'
                  : 'bg-slate-50 text-slate-600 border-dashed border-slate-300 hover:bg-slate-100'
              }`}
              title={nickname ? `Nickname: ${nickname} (Click to change)` : 'Set Student Nickname'}
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                {nickname ? nickname.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
              </div>
              <div className="text-left hidden sm:block">
                <span className="text-[10px] uppercase font-bold text-slate-600 block leading-tight">Student</span>
                <span className="text-xs font-bold block leading-tight truncate max-w-[90px]">
                  {nickname || 'Add Nickname'}
                </span>
              </div>
              <Edit2 className="w-3 h-3 text-slate-400 hidden sm:block" />
            </button>
          </div>
        </div>
      </div>

      {/* Nickname Dialog Modal */}
      <Modal
        isOpen={isNicknameModalOpen}
        onClose={() => setIsNicknameModalOpen(false)}
        title="Student Nickname (Classroom Use)"
        confirmText="Save Nickname"
        onConfirm={handleSaveNickname}
        isClassroomMode={isClassroomMode}
      >
        <p className="mb-4">
          Enter a friendly classroom nickname for local activity tracking on this device.
          No account, password, or email is ever collected or required.
        </p>
        <div className="space-y-2">
          <label htmlFor="student-nickname-input" className="block text-sm font-semibold text-slate-700">
            Nickname
          </label>
          <input
            id="student-nickname-input"
            type="text"
            value={tempNickname}
            onChange={(e) => setTempNickname(e.target.value)}
            placeholder="e.g. Maya, Alex, Team Blue"
            maxLength={25}
            className={`w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 ${
              isClassroomMode ? 'text-xl py-4' : 'text-base'
            }`}
            autoFocus
          />
          <p className="text-xs text-slate-600">
            Stored locally in your browser (storage key: <code className="bg-slate-100 px-1 py-0.5 rounded">gphub_student_nickname</code>).
          </p>
        </div>
      </Modal>
    </header>
  );
};
