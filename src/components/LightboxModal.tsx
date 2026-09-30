import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Arrows */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 sm:bg-white/10 sm:hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 sm:bg-white/10 sm:hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Container */}
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[75vh] w-auto object-contain mx-auto select-none"
          />
        </div>

        {/* Details Caption */}
        <div className="text-center mt-4 px-4 text-white max-w-2xl">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FCF7E6]">
            {title}
          </h3>
          {caption && (
            <p className="text-sm text-white/80 mt-1 font-light">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
