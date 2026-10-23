import React from 'react';

export default function Logo({ showWordmark = true, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Official Mhanth Logo */}
      <div className="flex items-center py-1">
        <img
          src="/assets/mhanth-logo-transparent.png"
          alt="Mhanth."
          className="h-6 sm:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          onError={(e) => {
            // Fallback to original asset if needed
            e.currentTarget.src = "/assets/mhanth-logo.png";
          }}
        />
      </div>

      {/* Typography Wordmark & Title */}
      {showWordmark && (
        <div className="flex flex-col pl-2.5 sm:pl-3 border-l border-sage-border/80">
          <span className="font-display font-bold text-sm sm:text-base tracking-tight text-sage-text group-hover:text-sage-primary transition-colors duration-200 leading-tight">
            Adityaraj Dwivedi
          </span>
          <span className="font-mono text-[10px] text-sage-muted tracking-wider uppercase font-medium">
            Software Engineer
          </span>
        </div>
      )}
    </div>
  );
}
