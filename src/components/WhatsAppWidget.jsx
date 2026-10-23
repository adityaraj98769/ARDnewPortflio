import React, { useState, useEffect, useRef } from 'react';
import { X, Send, ArrowUpRight, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Official precision WhatsApp vector icon
function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.06 8.02 12.23C8.14 12.4 9.74 14.87 12.19 15.93C12.78 16.18 13.23 16.33 13.59 16.45C14.17 16.63 14.7 16.61 15.12 16.55C15.59 16.47 16.57 15.95 16.77 15.37C16.97 14.79 16.97 14.3 16.91 14.2C16.85 14.1 16.7 14.04 16.47 13.92C16.25 13.81 15.14 13.26 14.93 13.19C14.73 13.11 14.58 13.08 14.43 13.31C14.28 13.54 13.86 14.04 13.73 14.19C13.6 14.33 13.47 14.35 13.25 14.24C13.02 14.12 12.3 13.89 11.45 13.13C10.79 12.54 10.34 11.81 10.21 11.59C10.09 11.36 10.2 11.24 10.31 11.13C10.42 11.02 10.55 10.85 10.67 10.71C10.79 10.57 10.83 10.47 10.91 10.31C10.99 10.14 10.95 10 10.89 9.89C10.83 9.77 10.38 8.67 10.2 8.22C10.02 7.78 9.84 7.84 9.71 7.83C9.58 7.83 9.43 7.82 9.28 7.82C9.13 7.82 8.89 7.88 8.69 8.1C8.48 8.32 7.89 8.9 7.89 10.1C7.89 11.3 8.77 12.45 8.9 12.63L8.53 7.33Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const popoverRef = useRef(null);
  const { personal } = portfolioData;

  const phoneNumber = personal.whatsappClean || "917318124388";
  const displayPhone = personal.whatsapp || "+91 7318124388";

  // Quick preset templates
  const presets = [
    { label: "💼 Project Inquiry", text: "Hi Adityaraj, I have a web development project requirement and would like to discuss it." },
    { label: "⚡ Freelance Work", text: "Hi Adityaraj, I'm looking for a freelance full-stack developer to help build our platform." },
    { label: "🤝 Quick Connect", text: "Hi Adityaraj, I came across your portfolio and wanted to connect!" },
  ];

  const buildWhatsAppUrl = (messageText) => {
    const textToEncode = messageText?.trim() || "Hi Adityaraj, I came across your portfolio and would like to connect!";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToEncode)}`;
  };

  const handleSendMessage = (text) => {
    const targetUrl = buildWhatsAppUrl(text || customMsg);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Close on Escape or click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={popoverRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none print:hidden"
    >
      {/* Interactive Chat Popover Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="WhatsApp quick chat"
          className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] sm:w-[350px] max-w-[360px] bg-white rounded-2xl shadow-2xl border border-sage-border overflow-hidden transition-all duration-300 origin-bottom-right animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 bg-emerald-800">
                    <img
                      src={personal.profileImage}
                      alt={personal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Live pulsating dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] ring-2 ring-[#075E54]" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm tracking-tight leading-snug">
                    {personal.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-100 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Online · Quick reply</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-emerald-100/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat card"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Phone & Identity banner */}
            <div className="mt-3 pt-2 border-t border-emerald-700/60 flex items-center justify-between text-[11px] font-mono text-emerald-100/90">
              <span>{displayPhone}</span>
              <span className="uppercase text-[10px] tracking-wider bg-emerald-900/40 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>
          </div>

          {/* Chat Canvas / Message Area */}
          <div className="p-4 bg-[#ECE5DD]/40 space-y-3.5 max-h-[380px] overflow-y-auto">
            {/* Greeting Bubble */}
            <div className="flex flex-col items-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-3 shadow-subtle border border-emerald-900/5 max-w-[90%] text-xs text-sage-text leading-relaxed">
                <p className="font-medium text-sage-text mb-1">
                  Hi there! 👋
                </p>
                <p className="text-sage-muted">
                  Have a web application project, freelance requirements, or want to collaborate? Tap below to chat directly with me on WhatsApp.
                </p>
                <span className="block text-[10px] font-mono text-sage-muted/70 text-right mt-1.5">
                  Just now
                </span>
              </div>
            </div>

            {/* Quick Action Presets */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-mono uppercase tracking-wider text-sage-muted font-medium px-1">
                Select quick message:
              </p>
              <div className="flex flex-col gap-1.5">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(preset.text)}
                    className="text-left px-3 py-2 rounded-xl bg-white hover:bg-emerald-50/70 border border-sage-border/80 hover:border-emerald-500/40 text-xs text-sage-text hover:text-emerald-800 transition-all duration-150 flex items-center justify-between group shadow-subtle"
                  >
                    <span className="font-medium">{preset.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sage-muted group-hover:text-emerald-700 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Input Bar & Direct Send */}
          <div className="p-3 bg-white border-t border-sage-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(customMsg);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-sage-surface border border-sage-border focus:outline-none focus:ring-1 focus:ring-[#25D366] text-sage-text placeholder:text-sage-muted"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-subtle transition-colors shrink-0"
                aria-label="Send message on WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <a
              href={buildWhatsAppUrl("Hi Adityaraj, I saw your portfolio and would like to chat!")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs font-semibold shadow-subtle transition-colors duration-150"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="relative group flex items-center">
        {/* Subtle Tooltip Pill on Hover (Desktop) */}
        {!isOpen && (
          <span className="hidden sm:inline-block absolute right-16 px-3 py-1.5 rounded-lg bg-white border border-sage-border text-xs font-mono text-sage-text shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp <span className="text-sage-muted">({displayPhone})</span>
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close WhatsApp chat" : "Chat on WhatsApp with Adityaraj (+91 7318124388)"}
          className={`relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 ${
            isOpen
              ? 'bg-[#075E54] text-white rotate-90 scale-95'
              : 'bg-[#25D366] hover:bg-[#1EBE5D] text-white hover:scale-105'
          }`}
        >
          {/* Subtle Ambient Pulse Ring when closed */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
          )}

          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200" />
          ) : (
            <WhatsAppIcon className="w-7 h-7 relative z-10 drop-shadow-sm" />
          )}

          {/* Unread / Online badge when closed */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-800 border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
