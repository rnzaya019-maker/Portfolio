import React from 'react';

const PatternDivider: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 md:py-16">
      <style>{`
        .divider-fade {
          opacity: 0;
          transform: translateY(6px);
          animation: dividerFade 1.2s ease forwards;
        }
        @keyframes dividerFade {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .divider-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="divider-fade w-full max-w-4xl flex flex-col items-center gap-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-steppe-accent/70 to-transparent" />
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rotate-45 bg-steppe-accent" />
          <div className="w-2.5 h-2.5 rotate-45 bg-steppe-secondary" />
          <div className="w-3 h-3 rotate-45 bg-steppe-accent" />
        </div>
      </div>
    </div>
  );
};

export default PatternDivider;
