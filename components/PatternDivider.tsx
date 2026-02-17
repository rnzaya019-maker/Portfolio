import React from 'react';

const PatternDivider: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 md:py-24 opacity-80">
      {/* Mongolian Cloud/Horn Pattern Approximation */}
      <div className="w-full max-w-4xl h-8 flex items-center justify-center space-x-1">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-1 h-2 bg-gradient-to-r from-steppe-secondary via-steppe-red to-steppe-accent rounded-full opacity-60" />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-4">
         <div className="w-3 h-3 rotate-45 bg-steppe-accent" />
         <div className="w-2 h-2 rotate-45 bg-steppe-secondary" />
         <div className="w-3 h-3 rotate-45 bg-steppe-accent" />
      </div>
    </div>
  );
};

export default PatternDivider;