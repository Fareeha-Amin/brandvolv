import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export default function Logo({
  className = '',
  iconOnly = false,
  size = 'md',
  theme = 'dark'
}: LogoProps) {
  const dimensions = {
    sm: { icon: 28, text: 'text-lg', spacing: 'gap-2' },
    md: { icon: 38, text: 'text-2xl', spacing: 'gap-3' },
    lg: { icon: 52, text: 'text-4xl', spacing: 'gap-4' }
  };

  const current = dimensions[size];

  return (
    <div className={`flex items-center ${current.spacing} ${className} select-none`}>
      {/* Stylized 'b' with Up-Right Arrow Graphic */}
      <svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
      >
        <defs>
          <linearGradient id="brandvolv-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Stem of the 'b' with slanted top */}
        <path
          d="M 32,25 
             L 32,65 
             A 18,18 0 0,0 50,83 
             A 18,18 0 0,0 68,65 
             L 68,60
             L 56,60
             L 56,65
             A 6,6 0 0,1 50,71
             A 6,6 0 0,1 44,65
             L 44,25
             Z"
          fill="url(#brandvolv-gradient)"
          className="opacity-0" /* hidden placeholder if we draw single cohesive path */
        />

        {/* Cohesive unified path that traces the sweeping lowercase 'b' looping into an upwards-right arrow */}
        <path
          d="M 32,25 
             C 32,25 32,21 35,21 
             C 38,21 38,25 38,25 
             L 38,52 
             C 42,46 48,42 56,42 
             C 68,42 76,52 76,64 
             C 76,76 66,85 54,85 
             C 42,85 32,75 32,63 
             L 32,25 Z
             M 45,63
             C 45,68 49,72 54,72
             C 59,72 63,68 63,63
             C 63,58 59,54 54,54
             C 49,54 45,58 45,63 Z"
          fill="url(#brandvolv-gradient)"
          style={{ display: 'none' }} /* backup reference */
        />

        {/* Exact geometric recreation of the logo */}
        {/* Left tall stem of 'b' */}
        <path
          d="M 32,22 L 44,14 L 44,65 C 44,71.5 49.5,77 56,77 C 62.5,77 68,71.5 68,65 L 68,61 L 56,61 C 51.5,61 48,57.5 48,53 C 48,48.5 51.5,45 56,45 L 68,45 L 68,49 L 56,49 C 53.8,49 52,50.8 52,53 C 52,55.2 53.8,57 56,57 L 76,57 L 76,65 C 76,76 67,85 56,85 C 45,85 36,76 36,65 L 36,26 L 32,22 Z"
          fill="url(#brandvolv-gradient)"
          style={{ display: 'none' }}
        />

        {/* Let's construct a beautiful, perfect SVG that is extremely close to the PNG image:
            The PNG image has a round 'b' at the bottom.
            The stem starts from the top-left (approx x=30, y=20) and goes straight down.
            It curves into the bowl at the bottom.
            The loop of the bowl curves up.
            From the bottom-middle, the stroke sweeps up and right, crossing at about x=55, y=55 and then shooting up to x=80, y=25 as an arrow!
            Wow, let's write this beautiful vector path exactly:
        */}
        <g stroke="url(#brandvolv-gradient)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Left vertical stem: starts at 32,20 goes to 32,65 and curves around into bowl */}
          <path d="M 34,22 L 34,60 C 34,74 48,74 48,60 C 48,46 62,46 62,60" style={{ display: 'none' }} />
          
          {/* Unified, high-fidelity path representing the exact flow of the logo in the image:
              A lowercase 'b' with stem on the left, but the right side doesn't just close, it sweeps out and shoots up-right with an arrowhead!
              Let's draw this:
              1. Vertical stem: (34, 20) down to (34, 65).
              2. Bottom loop (bowl): curves around (34, 65) -> (50, 81) -> (66, 65) -> (50, 49) -> (34, 65).
              3. But wait! The arrow sweeps from the bottom-left of the bowl, loops around the bottom, sweeps up the right, and continues up-right!
              Let's write a highly polished combined path that uses fill instead of stroke, or thick stroke.
              Let's use fill to match the thick, professional geometric cuts of the logo in the image.
          */}
        </g>
        
        {/* Exact premium filled vector representing the Brandvolv 'b-growth-arrow' logo */}
        <path
          d="M 38,20
             L 38,52
             C 41.5,46.5 48.2,43 56,43
             C 68.5,43 78,52.5 78,65
             C 78,77.5 68.5,87 56,87
             C 43.5,87 34,77.5 34,65
             L 34,20
             L 38,20 Z"
          fill="url(#brandvolv-gradient)"
          style={{ display: 'none' }}
        />

        {/* Drawing the exact logo using premium bezier curves to mimic the uploaded picture:
            It has a clean rounded bowl of a b, a vertical left stem, and the right-hand sweep curves outwards and upwards as an arrow pointing up-right (45 deg).
            Let's draw this with absolute pixel precision:
        */}
        {/* Left vertical stem */}
        <path
          d="M 38,20 
             L 38,55 
             C 38,50 42,46 47,46 
             C 55,46 62,53 62,61 
             C 62,69 55,76 47,76 
             C 41.5,76 38,71 38,65"
          stroke="url(#brandvolv-gradient)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Sweeping growth arrow, flowing out of the bottom of the bowl and shooting up-right */}
        <path
          d="M 44,73 
             C 52,73 60,67 66,58 
             L 80,34"
          stroke="url(#brandvolv-gradient)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead at (80,34) pointing up-right (rotated ~45 degrees) */}
        <path
          d="M 68,31 L 82,32 L 83,46"
          stroke="url(#brandvolv-gradient)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Brandvolv Wordmark */}
      {!iconOnly && (
        <span
          className={`font-sans font-bold tracking-tight ${current.text} ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          brand<span className="text-blue-500 font-extrabold">volv</span>
        </span>
      )}
    </div>
  );
}
