import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import { AGENCY_CONFIG, getWhatsAppUrl } from '../data/agencyData';
import { AgencyLogo } from './AgencyLogo';

interface NavbarProps {
  onOpenBooking: (message?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section for active indicator
      const sections = ['services', 'destinations', 'umrah', 'packages', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero', id: 'hero' },
    { label: 'خدماتنا', href: '#services', id: 'services' },
    { label: 'التأشيرات والبرامج', href: '#destinations', id: 'destinations' },
    { label: 'العمرة', href: '#umrah', id: 'umrah' },
    { label: 'عن الصادق', href: '#about', id: 'about' },
    { label: 'تواصل معنا', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="navbar-container"
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 md:px-6 pt-5 pointer-events-none transition-all duration-300"
      >
        <nav
          id="main-nav-capsule"
          aria-label="التنقل الرئيسي"
          className={`pointer-events-auto w-full max-w-[1360px] h-[64px] sm:h-[68px] md:h-[76px] bg-[#0A0A0A]/75 backdrop-blur-xl backdrop-saturate-150 text-white rounded-[40px] px-3.5 sm:px-5 md:px-7 flex items-center justify-between shadow-[0_12px_36px_rgba(0,0,0,0.25)] border border-white/15 transition-all duration-300 ${
            scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-2xl shadow-[0_16px_44px_rgba(0,0,0,0.35)] border-white/20' : ''
          }`}
        >
          {/* Official Agency Logo */}
          <a
            href="#hero"
            id="brand-logo"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
            aria-label="وكالة الصادق للسفريات والسياحة"
          >
            <AgencyLogo className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105 shrink-0" />
            <div className="flex flex-col text-right justify-center shrink-0">
              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white leading-[1.35] pb-0.5 overflow-visible select-none">
                {AGENCY_CONFIG.shortName}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-white/70 leading-[1.3] overflow-visible select-none">
                {AGENCY_CONFIG.subTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-links" className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`relative text-[13.5px] font-normal px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-medium bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 right-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-[#F28A2E]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Buttons Desktop */}
          <div id="nav-actions-desktop" className="hidden sm:flex items-center gap-2.5">
            <a
              href="#services"
              id="nav-services-btn"
              className="h-10 md:h-11 px-5 text-[13px] md:text-[14px] font-medium text-white bg-[#1261D6] hover:bg-[#0f52b5] rounded-full transition-all duration-200 flex items-center justify-center whitespace-nowrap shadow-sm"
            >
              عرض خدماتنا
            </a>

            <button
              onClick={() => onOpenBooking('مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز وترتيب تفاصيل السفر.')}
              id="nav-book-now-btn"
              type="button"
              className="h-10 md:h-11 px-6 text-[13px] md:text-[14px] font-medium text-white bg-[#F28A2E] hover:bg-[#e07b22] active:scale-[0.98] rounded-full shadow-[0_2px_12px_rgba(242,138,46,0.35)] transition-all duration-200 flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              احجز الآن
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1.5 xs:gap-2 shrink-0">
            <button
              onClick={() => onOpenBooking('مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز وترتيب تفاصيل السفر.')}
              type="button"
              id="mobile-nav-book-btn"
              className="h-8 xs:h-9 px-3 xs:px-4 text-[11px] xs:text-xs font-medium text-white bg-[#F28A2E] rounded-full flex items-center justify-center shrink-0 active:scale-95 transition-transform"
            >
              احجز الآن
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-white/10 active:bg-white/20 text-white flex items-center justify-center focus:outline-none shrink-0"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl pt-24 px-5 pb-8 sm:hidden flex flex-col justify-between overflow-y-auto animate-fade-in"
        >
          <div className="flex flex-col gap-1 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[17px] font-medium text-white/90 hover:text-[#F28A2E] py-3.5 border-b border-white/10 flex items-center justify-between active:bg-white/5 rounded-lg px-2 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpLeft size={16} className="text-white/40" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز وترتيب تفاصيل السفر.');
              }}
              type="button"
              className="w-full h-12 bg-[#F28A2E] active:bg-[#e07b22] text-white font-medium rounded-full text-center flex items-center justify-center text-sm shadow-md"
            >
              احجز الآن
            </button>
            <a
              href={getWhatsAppUrl('مرحبًا وكالة الصادق للسفريات والسياحة، أود التواصل معكم للاستفسار عن خدمات السفر وحجوزات الرحلات.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 bg-white/10 active:bg-white/15 text-white font-medium rounded-full text-center flex items-center justify-center text-sm"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </>
  );
};
