import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['services', 'case-studies', 'web-portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const drawer = document.getElementById('mobile-drawer');
      const hamburger = document.getElementById('mobile-hamburger');
      if (
        drawer &&
        !drawer.contains(e.target as Node) &&
        hamburger &&
        !hamburger.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick, true);
    return () => window.removeEventListener('click', handleOutsideClick, true);
  }, [isMobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'web-portfolio', label: 'Web Projects' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo size="md" />
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400 font-semibold' : 'text-neutral-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button & Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="relative hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.6)] group cursor-pointer"
              >
                <span className="relative z-10">Book a Strategy Call -&gt;</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                id="mobile-hamburger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors border border-transparent hover:border-neutral-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop: purely visual, allows pointer events to pass through so scrollbar is draggable */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-sm md:hidden pointer-events-none"
            />

            {/* Drawer Container: only interactive on the actual drawer panel itself */}
            <div className="fixed inset-y-0 right-0 z-50 w-[75vw] max-w-[320px] sm:max-w-xs md:hidden pointer-events-none flex">
              <motion.div
                id="mobile-drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full h-full bg-[#030305]/95 backdrop-blur-xl border-l border-neutral-900 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto pointer-events-auto no-scrollbar"
              >
                <div>
                  {/* Header of Drawer */}
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-900">
                    <Logo size="md" />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-all border border-transparent hover:border-neutral-800"
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Vertical Links */}
                  <nav className="flex flex-col gap-5 mt-10">
                    {navItems.map((item, idx) => (
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`text-left text-xl font-medium tracking-wide py-2 border-b border-transparent transition-all ${
                          activeSection === item.id
                            ? 'text-blue-400 font-bold translate-x-1'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Bottom Actions inside Drawer */}
                <div className="border-t border-neutral-900 pt-6 mt-auto">
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full relative flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-500 shadow-[0_4px_20px_rgba(37,99,235,0.4)] group cursor-pointer"
                  >
                    <span className="relative z-10">Book a Strategy Call -&gt;</span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                  
                  <div className="flex items-center gap-2 mt-6 justify-center text-xs text-neutral-500 font-mono">
                    <Mail size={12} className="text-neutral-600" />
                    <span>buzzzengine@gmail.com</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
