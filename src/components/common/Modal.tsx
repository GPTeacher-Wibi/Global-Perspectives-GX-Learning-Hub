import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  confirmVariant?: 'primary' | 'danger';
  onConfirm?: () => void;
  isClassroomMode?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  confirmText,
  confirmVariant = 'primary',
  onConfirm,
  isClassroomMode = false
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden ${
          isClassroomMode ? 'p-8 max-w-xl' : 'p-6'
        }`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2
            id="modal-title"
            className={`font-bold text-slate-900 ${
              isClassroomMode ? 'text-2xl' : 'text-xl'
            }`}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className={`py-4 text-slate-600 ${isClassroomMode ? 'text-lg leading-relaxed' : 'text-base leading-normal'}`}>
          {children}
        </div>

        <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
          <Button
            variant="outline"
            size={isClassroomMode ? 'lg' : 'md'}
            isClassroomMode={isClassroomMode}
            onClick={onClose}
          >
            Cancel
          </Button>
          {confirmText && onConfirm && (
            <Button
              variant={confirmVariant}
              size={isClassroomMode ? 'lg' : 'md'}
              isClassroomMode={isClassroomMode}
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
