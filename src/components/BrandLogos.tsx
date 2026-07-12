import React, { useState, useEffect } from 'react';

interface LogoProps {
  id: string;
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg';
}

function NoemieLogo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-12 sm:h-14'
  }[size];

  return (
    <div className={`flex items-center justify-center select-none text-white hover:text-emerald-400 transition-colors duration-300 ${heightClasses} ${className}`}>
      <svg
        viewBox="0 0 160 70"
        className="h-full w-auto fill-current"
        aria-label="Noémie Logo"
      >
        {/* Ground shadow lines under elephant and palm */}
        <g stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-70">
          <path d="M22,45 L95,45" />
          <path d="M102,45 L125,45" />
          <path d="M30,46.5 L55,46.5" />
          <path d="M65,46.5 L88,46.5" />
          <path d="M105,46.5 L120,46.5" />
          <path d="M38,48 L48,48" />
          <path d="M72,48 L82,48" />
          <path d="M110,48 L116,48" />
        </g>

        {/* Elephant on the left */}
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main Outline */}
          {/* Back, rump, rear leg back */}
          <path d="M 45,26 C 49,21 57,21 61,22 C 66,23 71,21 76,22 C 80,23 83,27 83,31 C 83,34 81,38 81,45" />
          {/* Rear foot */}
          <path d="M 81,45 L 77,45" />
          {/* Rear leg front, underbelly, front leg 1 back */}
          <path d="M 77,45 L 77,35 C 75,34 71,34 68,34 L 68,43 L 64,43" />
          {/* Underbelly */}
          <path d="M 68,34 L 54,34" />
          {/* Front leg 1 (bent) */}
          <path d="M 54,34 L 52,45 L 48,45 L 50,34" />
          {/* Front leg 2 (inner) */}
          <path d="M 46,34 L 43,43 L 39,43 L 41,32" />
          
          {/* Chest & Neck */}
          <path d="M 41,32 C 40,30 40,28 42,27" />

          {/* Forehead and Dome of head */}
          <path d="M 42,27 C 39,27 36,30 35,32" />

          {/* Trunk rising and curving back */}
          <path d="M 35,32 C 30,32 25,29 23,23 C 22,18 26,14 30,16 C 33,18 31,23 28,23 C 26,23 25,21 26,19" strokeWidth="1.0" />
          {/* Outer curve of trunk */}
          <path d="M 37,34 C 33,34 28,31 26,25 C 25,21 28,18 30,19 C 32,20 31,22 29,22" strokeWidth="0.9" />

          {/* Tusk */}
          <path d="M 36,34 C 33,36 30,37 32,38 C 34,38 36,36 37,35" strokeWidth="0.8" />

          {/* Huge beautiful ear */}
          <path d="M 45,25 C 44,22 49,19 52,21 C 55,23 55,29 52,31 C 49,33 46,31 45,25 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="0.9" />
          {/* Ear inner detail fold */}
          <path d="M 47,25 C 47,23 50,22 51,24 C 52,26 51,29 49,29" strokeWidth="0.6" className="opacity-80" />

          {/* Tail */}
          <path d="M 80,26 C 81,28 83,30 83,33 C 83,36 84,37 84,38" />
          {/* Tail hair tuft */}
          <path d="M 84,38 C 84,39 83,41 84,42 C 85,41 85,39 84,38" strokeWidth="0.7" />

          {/* Shading/Hatching details for Engraved look */}
          <g stroke="currentColor" strokeWidth="0.6" className="opacity-65">
            {/* Belly shading */}
            <line x1="56" y1="34" x2="56" y2="36" />
            <line x1="59" y1="34" x2="59" y2="36" />
            <line x1="62" y1="34" x2="62" y2="36" />
            <line x1="65" y1="34" x2="65" y2="36" />
            <line x1="68" y1="34" x2="68" y2="35.5" />
            {/* Shoulder shading */}
            <path d="M 47,27 Q 48,30 49,32" />
            <path d="M 49,26 Q 50,29 51,31" />
            {/* Rump shading */}
            <path d="M 76,25 Q 75,29 74,33" />
            <path d="M 78,26 Q 77,29 76,33" />
            {/* Neck folds */}
            <path d="M 41,29 Q 43,30 44,31" />
            {/* Trunk wrinkles */}
            <path d="M 33,26 L 34,27" />
            <path d="M 31,28 L 32,29" />
            <path d="M 28,26 L 29,27" />
          </g>
        </g>

        {/* Palm tree on the right */}
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main Trunk */}
          <path d="M 112,45 Q 110,31 112,14" strokeWidth="1.6" />
          <path d="M 114,45 Q 112,31 113.8,14" strokeWidth="1.2" />

          {/* Trunk ring barks */}
          <g stroke="currentColor" strokeWidth="0.8" className="opacity-80">
            <path d="M 111.5,41.5 Q 113,42 114,41.5" />
            <path d="M 111,37.5 Q 112.5,38 113.5,37.5" />
            <path d="M 111,33.5 Q 112.5,34 113.5,33.5" />
            <path d="M 111.2,29.5 Q 112.7,30 113.7,29.5" />
            <path d="M 111.5,25.5 Q 113,26 114,25.5" />
            <path d="M 111.8,21.5 Q 113.3,22 114.3,21.5" />
            <path d="M 112,17.5 Q 113.5,18 114.5,17.5" />
          </g>

          {/* Palm leaves/fronds with fine-line details */}
          {/* Frond 1 (left-down) */}
          <path d="M 112.5,14 Q 98,17 91,24" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 108,15 L 105,19" />
            <path d="M 104,15.5 L 100,20.5" />
            <path d="M 100,16 L 96,22" />
            <path d="M 96,17 L 92,23" />
            <path d="M 92,18 L 88,24" />
          </g>

          {/* Frond 2 (left-up) */}
          <path d="M 112.5,14 Q 100,7 91,11" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 108,11.5 L 104,14.5" />
            <path d="M 104,9.5 L 99,13" />
            <path d="M 100,8 L 95,12" />
            <path d="M 96,6.5 L 91,11" />
          </g>

          {/* Frond 3 (top-left) */}
          <path d="M 112.5,14 Q 105,-1 101,-3" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 110,9 L 104,10" />
            <path d="M 108,6.5 L 102,8" />
            <path d="M 106,3.5 L 100,5" />
            <path d="M 104,1 L 98,2.5" />
          </g>

          {/* Frond 4 (top-right) */}
          <path d="M 113,14 Q 121,-1 125,-3" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 115,9 L 121,10" />
            <path d="M 117,6.5 L 123,8" />
            <path d="M 119,3.5 L 125,5" />
            <path d="M 121,1 L 127,2.5" />
          </g>

          {/* Frond 5 (right-up) */}
          <path d="M 113,14 Q 125,7 134,11" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 117,11.5 L 121,14.5" />
            <path d="M 121,9.5 L 126,13" />
            <path d="M 125,8 L 130,12" />
            <path d="M 129,6.5 L 134,11" />
          </g>

          {/* Frond 6 (right-down) */}
          <path d="M 113,14 Q 127,17 134,24" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 117,15 L 120,19" />
            <path d="M 121,15.5 L 125,20.5" />
            <path d="M 125,16 L 129,22" />
            <path d="M 129,17 L 133,23" />
            <path d="M 133,18 L 137,24" />
          </g>

          {/* Frond 7 (drooping down center-right) */}
          <path d="M 113,14 Q 117,25 119,31" />
          <g stroke="currentColor" strokeWidth="0.7" className="opacity-90">
            <path d="M 114,18 L 117,20.5" />
            <path d="M 115,22 L 118,24.5" />
            <path d="M 116.5,26 L 119.5,28.5" />
          </g>
        </g>

        {/* Brand Text: NOÉMIE */}
        <text
          x="80"
          y="63"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="'Playfair Display', 'Didot', 'Bodoni MT', 'Georgia', serif"
          fontSize="15.5"
          letterSpacing="4"
          className="font-medium tracking-[0.22em]"
        >
          NOÉMIE
        </text>
      </svg>
    </div>
  );
}


const DOMAIN_MAP: Record<string, string> = {
  // Case Studies
  'trikona': 'trikonapharma.com',
  'aurobella': 'aurobellasalon.com',
  'jd-ceramics': 'jdceramics.com', // Correct official global brand domain
  'digital-academy-360': 'digitalacademy360.com',
  'trayam': 'trayam.co', // Official domain for Trayam Vegetarian Fine Dining
  'smr-holdings': 'smrholdings.in',
  
  // Web Projects
  'hello-noemie': 'hellonoemie.com',
  'artista-prop-shop': 'artistapropshop.com',
  'goodricke-tea': 'goodricketea.com',
  'litchisiciliani': 'litchisiciliani.com',
  'status-app': 'status.app',
  'adanium': 'adanium.net',
  'encalories': 'encalories.com',
  'glory-faith': 'gloryandfaith.com',
  'unfreaky': 'unfreaky.com',
  '7rclads': '7rclads.com',

  // Additional Brands
  'memsaheb': 'memsahebgroup.com',
  'mevyl': 'mevyl.com',
  'orangery': 'orangery.in',
  'shiwangi-vijaywargiya': 'shiwangivijaywargiya.com',
  'dheerajs-metals': 'dheerajmetals.com',
};

const NAME_MAP: Record<string, string> = {
  'trikona': 'Trikona',
  'aurobella': 'Aurobella',
  'jd-ceramics': 'JD Ceramics',
  'digital-academy-360': 'Digital Academy 360',
  'trayam': 'Trayam Vegetarian',
  'smr-holdings': 'SMR Holdings',
  'hello-noemie': 'Noémie',
  'artista-prop-shop': 'Artista Prop Shop',
  'goodricke-tea': 'Goodricke Tea',
  'litchisiciliani': 'Litchisiciliani',
  'status-app': 'Status.app',
  'adanium': 'Adanium',
  'encalories': 'Encalories',
  'glory-faith': 'Glory & Faith',
  'unfreaky': 'Unfreaky',
  '7rclads': '7RClads',
  'memsaheb': 'Memsaheb Group',
  'mevyl': 'Mevyl',
  'orangery': 'Orangery',
  'shiwangi-vijaywargiya': 'Shiwangi Vijaywargiya',
  'dheerajs-metals': "Dheeraj's Metals",
};

function BrandedTextFallback({ id, className, size = 'md' }: { id: string; className: string; size?: 'sm' | 'md' | 'lg' }) {
  const normalizedId = id.toLowerCase();
  if (normalizedId === 'hello-noemie') {
    return <NoemieLogo size={size} className={className} />;
  }
  const displayName = NAME_MAP[normalizedId] || id;

  const sizeClasses = {
    sm: 'w-7 h-7 p-1 text-[10px]',
    md: 'w-8 h-8 p-1.5 text-xs',
    lg: 'w-10 h-10 p-2 text-sm sm:text-base'
  }[size];

  const textClasses = {
    sm: 'text-xs font-semibold',
    md: 'text-sm font-bold',
    lg: 'text-base sm:text-lg font-extrabold'
  }[size];

  let icon: React.ReactNode;

  switch (normalizedId) {
    case 'trikona':
      icon = (
        <svg className="w-full h-full text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L22 20H2L12 3Z"/>
        </svg>
      );
      break;
    case 'aurobella':
      icon = (
        <span className="font-serif font-bold text-amber-400">A</span>
      );
      break;
    case 'jd-ceramics':
      icon = (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Two overlapping glossy ceramic tiles (diamonds) representing premium tiles & ceramics */}
          <g transform="translate(50, 50) rotate(45)">
            {/* Tile 1: Deep Navy Blue glazed tile */}
            <rect x="-32" y="-32" width="40" height="40" rx="6" fill="#0d355a" opacity="0.95" />
            <rect x="-32" y="-32" width="40" height="40" rx="6" stroke="#1e40af" strokeWidth="2" fill="none" />
            
            {/* Tile 2: Terracotta / Gold glazed tile overlapping */}
            <rect x="-8" y="-8" width="40" height="40" rx="6" fill="#d97706" opacity="0.9" />
            <rect x="-8" y="-8" width="40" height="40" rx="6" stroke="#f59e0b" strokeWidth="2" fill="none" />
          </g>
          {/* Monogram JD in high contrast on top */}
          <text x="32" y="55" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1">J</text>
          <text x="50" y="55" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1">D</text>
        </svg>
      );
      break;
    case 'trayam':
      icon = (
        <svg className="w-full h-full text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 8l-4 8h8z" />
        </svg>
      );
      break;
    case 'artista-prop-shop':
      icon = (
        <svg className="w-full h-full text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 6V18" />
          <path d="M6 12H18" />
        </svg>
      );
      break;
    case 'goodricke-tea':
      icon = (
        <svg className="w-full h-full text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
      break;
    case 'litchisiciliani':
      icon = (
        <span className="font-sans font-black text-red-400">L</span>
      );
      break;
    case 'status-app':
      icon = (
        <svg className="w-full h-full text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
      break;
    case 'adanium':
      icon = (
        <span className="font-mono font-bold text-sky-400">AD</span>
      );
      break;
    case 'encalories':
      icon = (
        <svg className="w-full h-full text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
      break;
    case 'glory-faith':
      icon = (
        <span className="font-serif font-bold text-indigo-400">GF</span>
      );
      break;
    case 'unfreaky':
      icon = (
        <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Unfreaky organic bold "u" mark with asymmetric blocky protrusion on the right */}
          <path d="M 32,28 H 53 V 56 C 53,62 58,66 64,66 C 70,66 75,62 75,56 V 42 C 75,33 82,26 91,26 H 102 C 107,26 111,30 111,35 V 45 C 111,52 107,56 100,56 H 91 C 88,56 85,58 85,61 V 64 C 85,78 74,90 60,90 C 45,90 32,78 32,64 V 28 Z" fill="#ffffff" />
          {/* Trademark symbol ® integrated beautifully */}
          <g transform="translate(93, 70)">
            <circle cx="6" cy="6" r="5.5" stroke="#ffffff" strokeWidth="1.2" fill="none" />
            <text x="6" y="9" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="900" fill="#ffffff" textAnchor="middle">R</text>
          </g>
        </svg>
      );
      break;
    case '7rclads':
      icon = (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top-Left Gold Piece */}
          <path d="M 26,26 H 47 L 41,44 H 26 Z" fill="#c19c6e" />
          {/* First Dark Brown/Espresso Panel Strip */}
          <path d="M 49,26 H 59 L 43,74 H 33 Z" fill="#533d2f" />
          {/* Second Dark Brown/Espresso Panel Strip */}
          <path d="M 53,50 H 63 L 55,74 H 45 Z" fill="#533d2f" />
          {/* Middle-Right Gold Piece */}
          <path d="M 65,50 H 74 V 62 H 61 Z" fill="#c19c6e" />
        </svg>
      );
      break;
    case 'shiwangi-vijaywargiya':
      icon = (
        <span className="font-serif font-bold text-pink-400">SV</span>
      );
      break;
    case 'dheerajs-metals':
      icon = (
        <svg className="w-full h-full text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
      break;
    case 'memsaheb':
      icon = (
        <span className="font-serif font-bold text-amber-500">M</span>
      );
      break;
    case 'mevyl':
      icon = (
        <span className="font-serif font-bold text-rose-500">M</span>
      );
      break;
    case 'orangery':
      icon = (
        <svg className="w-full h-full text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6" />
        </svg>
      );
      break;
    case 'smr-holdings':
      icon = (
        <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
      break;
    default:
      icon = (
        <span className="font-mono font-bold text-neutral-400">{id.substring(0, 2).toUpperCase()}</span>
      );
      break;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`${sizeClasses} rounded-lg bg-neutral-900 border border-neutral-800 p-1.5 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner group-hover:border-neutral-700 transition-colors`}>
        {icon}
      </div>
      <span className={`${textClasses} text-white tracking-tight group-hover:text-emerald-400 transition-colors`}>
        {displayName}
      </span>
    </div>
  );
}

export default function BrandLogo({ id, className = '', variant = 'color', size = 'md' }: LogoProps) {
  const normalizedId = id.toLowerCase();
  if (normalizedId === 'hello-noemie') {
    return <NoemieLogo size={size} className={className} />;
  }
  if (normalizedId === 'jd-ceramics' || normalizedId === 'unfreaky' || normalizedId === '7rclads') {
    return <BrandedTextFallback id={id} className={className} size={size} />;
  }
  const domain = DOMAIN_MAP[normalizedId];
  const displayName = NAME_MAP[normalizedId] || id;

  const [imgSrc, setImgSrc] = useState(domain ? `https://logo.clearbit.com/${domain}` : '');
  const [loadState, setLoadState] = useState<'clearbit' | 'google' | 'fallback'>(domain ? 'clearbit' : 'fallback');

  useEffect(() => {
    if (domain) {
      setImgSrc(`https://logo.clearbit.com/${domain}`);
      setLoadState('clearbit');
    } else {
      setImgSrc('');
      setLoadState('fallback');
    }
  }, [domain]);

  const handleError = () => {
    if (loadState === 'clearbit' && domain) {
      setLoadState('google');
      setImgSrc(`https://www.google.com/s2/favicons?sz=128&domain=${domain}`);
    } else {
      setLoadState('fallback');
    }
  };

  const sizeClasses = {
    sm: 'w-7 h-7 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  }[size];

  const textClasses = {
    sm: 'text-xs font-semibold',
    md: 'text-sm font-bold',
    lg: 'text-base sm:text-lg font-extrabold'
  }[size];

  if (!domain || loadState === 'fallback') {
    return <BrandedTextFallback id={id} className={className} size={size} />;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`${sizeClasses} rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner group-hover:border-neutral-700 transition-colors`}>
        <img
          src={imgSrc}
          alt={`${displayName} logo`}
          onError={handleError}
          className="max-w-full max-h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className={`${textClasses} text-white tracking-tight group-hover:text-emerald-400 transition-colors`}>
        {displayName}
      </span>
    </div>
  );
}

const MARQUEE_INFO: Record<string, { main: string; sub: string }> = {
  'aurobella': { main: 'AUROBELLA', sub: 'BEAUTY SALON' },
  'memsaheb': { main: 'MEMSAHEB', sub: 'GROUP' },
  'mevyl': { main: 'MEVYL', sub: 'SOLID PERFUMES' },
  'orangery': { main: 'ORANGERY', sub: 'CREATIVE' },
  'dheerajs-metals': { main: 'DHEERAJ', sub: 'METALS' },
  'jd-ceramics': { main: 'JD', sub: 'CERAMIC' },
  'trikona': { main: 'TRIKONA', sub: 'PHARMA' },
  'hello-noemie': { main: 'NOÉMIE', sub: '' },
  'artista-prop-shop': { main: 'ARTISTA', sub: 'PROP SHOP' },
  'goodricke-tea': { main: 'GOODRICKE', sub: 'TEA' },
  'status-app': { main: 'STATUS', sub: 'APP' },
  'digital-academy-360': { main: 'DIGITAL ACADEMY', sub: '360' },
  'trayam': { main: 'TRAYAM', sub: 'VEGETARIAN' },
  'smr-holdings': { main: 'SMR', sub: 'HOLDINGS' },
};

export function MarqueeLogo({ id, className = '' }: { id: string; className?: string; key?: string | number }) {
  const normalizedId = id.toLowerCase();
  
  if (normalizedId === 'hello-noemie') {
    return (
      <div className={`flex items-center justify-center shrink-0 mx-6 ${className}`}>
        <NoemieLogo size="sm" className="text-neutral-400 group-hover:text-white transition-colors h-11" />
      </div>
    );
  }

  const info = MARQUEE_INFO[normalizedId] || { main: id.toUpperCase().replace('-', ' '), sub: '' };

  return (
    <div className={`flex flex-col items-center justify-center text-center px-8 shrink-0 select-none cursor-default group ${className}`}>
      <span className="font-sans font-medium text-neutral-400 text-sm sm:text-[15px] tracking-[0.25em] uppercase leading-none group-hover:text-white transition-colors duration-300">
        {info.main}
      </span>
      {info.sub && (
        <span className="text-[9px] text-neutral-600 tracking-[0.18em] uppercase mt-2 opacity-80 group-hover:text-neutral-400 group-hover:opacity-100 transition-all duration-300 font-medium">
          {info.sub}
        </span>
      )}
    </div>
  );
}
