import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  // Dimensions based on size
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  }[size];

  const textDimensions = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Optimized Brand Mark: Stylized 'b' curving into growth arrow with electric blue gradient */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconDimensions} shrink-0 transition-transform group-hover:scale-105 duration-200`}
        aria-label="BrandVolv icon"
      >
        <defs>
          <linearGradient id="bvGradient" x1="20%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="40%" stopColor="#3b4bf7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="bvGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3b4bf7" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Ribbon forming lowercase 'b' sweeping into upward arrow */}
        <g filter="url(#bvGlow)">
          {/* Main curved path: stem -> bottom loop -> bowl -> right arrow stem */}
          <path
            d="M26 18 L38 27 V52 C38 60 44 65 52 65 C60 65 67 58 67 50 C67 42 60 36 51 36 C44 36 39 40 38 46 L26 44 C28 32 38 24 51 24 C67 24 79 36 79 50 C79 66 66 77 50 77 C34 77 24 67 24 52 Z"
            fill="url(#bvGradient)"
          />
          {/* Growth dynamic upward sweep arm */}
          <path
            d="M48 76 C59 76 68 70 76 56 L88 34 L78 30 L66 52 C61 61 54 64 48 64 Z"
            fill="url(#bvGradient)"
          />
          {/* Arrowhead at top right */}
          <path
            d="M74 34 L92 27 L87 45 L82 39 L72 43 Z"
            fill="#3b82f6"
          />
        </g>
      </svg>

      {/* Optimized Wordmark: clean geometric typography optimized for dark UI */}
      {showText && (
        <span
          className={`font-display font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors ${textDimensions}`}
        >
          brand<span className="text-white">volv</span>
        </span>
      )}
    </div>
  );
};
