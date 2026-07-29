import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Phone, Send, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { COMPANY_INFO } from '../data/galleryData';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onInquire: (itemTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200">
      
      {/* Top Bar Controls */}
      <div className="flex items-center justify-between text-white border-b border-neutral-800/80 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
            {item.categoryLabel}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            {currentIndex + 1} / {totalCount}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-500/40 transition-all"
          aria-label="Zamknij"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center Image View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden group">
        
        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-20 p-3.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-white hover:border-amber-400 hover:bg-neutral-900 transition-all shadow-2xl"
          aria-label="Poprzednie zdjęcie"
        >
          <ChevronLeft className="w-6 h-6 text-amber-400" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-20 p-3.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-white hover:border-amber-400 hover:bg-neutral-900 transition-all shadow-2xl"
          aria-label="Następne zdjęcie"
        >
          <ChevronRight className="w-6 h-6 text-amber-400" />
        </button>

        {/* High Resolution Image Container */}
        <div className="max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center p-2">
          <img
            src={item.url}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[75vh] object-contain rounded-xl border border-amber-500/30 shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Information & Inquiry CTA */}
      <div className="bg-neutral-900/90 border border-amber-500/30 rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
            {item.description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-4 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-amber-300 font-bold text-xs hover:bg-neutral-700 transition-all flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={() => onInquire(item.title)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-extrabold text-xs hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Zapytaj o tę realizację</span>
          </button>
        </div>
      </div>

    </div>
  );
};
