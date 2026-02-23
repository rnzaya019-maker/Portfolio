import React from 'react';

type HeroCardProps = {
  title: string;
  subtitle: string;
  className?: string;
  style?: React.CSSProperties;
};

const HeroCard: React.FC<HeroCardProps> = ({ title, subtitle, className = '', style }) => {
  const baseStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1C2B4A 0%, #223B5D 100%)'
  };

  return (
    <div
      className={`relative w-full max-w-sm min-h-[160px] rounded-2xl px-6 py-6 text-white shadow-[0_20px_60px_rgba(28,43,74,0.15)] ${className}`}
      style={{ ...baseStyle, ...style }}
    >
      <div className="absolute right-6 top-5 h-2.5 w-2.5 rounded-full bg-steppe-accent" />
      <h3 className="font-serif text-xl leading-snug">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{subtitle}</p>
    </div>
  );
};

export default HeroCard;
