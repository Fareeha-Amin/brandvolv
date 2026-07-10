import React from 'react';
import Logo from './Logo';
import { Mail, Instagram, ArrowUp, Compass } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030305] border-t border-neutral-900 py-16 overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-900/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-neutral-900 pb-12 mb-12">
          {/* Col 1: Brand description (Col-span 5) */}
          <div className="md:col-span-5 text-center sm:text-left">
            <Logo size="md" className="justify-center sm:justify-start" />
            <p className="text-xs sm:text-sm text-neutral-500 mt-4 max-w-sm leading-relaxed">
              Brandvolv is an elite full-performance digital marketing and creative agency. We architect high-converting digital ecosystems, 3D visual storytelling, viral meme campaigns, and organic SEO growth.
            </p>
            <div className="flex items-center gap-4 mt-6 justify-center sm:justify-start">
              <a
                href="mailto:hello@brandvolv.com"
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Email support"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.instagram.com/brandvolv/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/919972414587"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[16px] h-[16px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (Col-span 3) */}
          <div className="md:col-span-3 text-center sm:text-left">
            <span className="text-[10px] font-bold text-neutral-500 font-mono tracking-widest uppercase block mb-4">
              GROWTH NAVIGATION
            </span>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-neutral-400 font-medium">
              <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer text-left self-center sm:self-start">
                Core Services & Pillars
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="hover:text-white transition-colors cursor-pointer text-left self-center sm:self-start">
                Case Studies & Performance
              </button>
              <button onClick={() => scrollToSection('web-portfolio')} className="hover:text-white transition-colors cursor-pointer text-left self-center sm:self-start">
                Web Development Showcase
              </button>
            </div>
          </div>

          {/* Col 3: Contact Details (Col-span 4) */}
          <div className="md:col-span-4 text-center sm:text-left">
            <span className="text-[10px] font-bold text-neutral-500 font-mono tracking-widest uppercase block mb-4">
              PARTNER ECOSYSTEMS
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed mb-4">
              We operate internationally, executing high-converting ad portfolios across Indian, GCC (Dubai), and global DTC arenas.
            </p>
            <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass size={14} className="text-blue-500" />
                <span className="text-[11px] font-bold text-neutral-400 font-mono uppercase tracking-wider">
                  OFFICIAL DOMAIN:
                </span>
              </div>
              <a
                href="https://brandvolv.com/"
                className="text-xs font-bold text-blue-400 hover:underline font-mono"
              >
                brandvolv.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyrights and Back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <span>
            © {new Date().getFullYear()} Brandvolv. All Rights Reserved. Powered by performance.
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors group cursor-pointer bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
