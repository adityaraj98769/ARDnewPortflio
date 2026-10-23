import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sage-primary"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Full Image */}
        <div className="overflow-hidden rounded-sm border border-white/20 shadow-2xl bg-black">
          <img
            src={item.image}
            alt={item.title || "Full Photo"}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        {item.caption && (
          <p className="font-mono text-xs sm:text-sm text-white/90 text-center mt-4 max-w-2xl px-4 leading-relaxed">
            {item.caption}
          </p>
        )}
      </div>
    </div>
  );
}
