import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG, getWhatsAppUrl } from '../data/agencyData';

interface FinalCTAProps {
  onOpenBooking: (message?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="py-16 sm:py-24 md:py-32 bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Title */}
        <h2
          id="final-cta-heading"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4 sm:mb-6 max-w-3xl"
        >
          وجهتك التالية تبدأ من هنا.
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-xl text-white/70 max-w-2xl mb-8 sm:mb-12 font-normal leading-relaxed">
          أخبرنا إلى أين تريد السفر، ودعنا نساعدك في ترتيب الخطوات بكل وضوح واطمئنان.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenBooking('مرحبًا وكالة الصادق للسفريات والسياحة، أود البدء في ترتيبات رحلتي القادمة وتنسيق الحجز معكم.')}
            type="button"
            id="final-cta-primary-btn"
            className="w-full sm:w-auto h-[50px] sm:h-[54px] md:h-[56px] px-8 sm:px-9 rounded-full bg-[#F28A2E] hover:bg-[#e07b22] text-white font-medium text-sm sm:text-base shadow-[0_4px_24px_rgba(242,138,46,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>ابدأ طلبك</span>
            <ArrowLeft size={16} />
          </button>

          <a
            href={getWhatsAppUrl('مرحبًا وكالة الصادق للسفريات والسياحة، أود التواصل معكم للاستفسار عن حجز وترتيب رحلة جديدة.')}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-secondary-btn"
            className="w-full sm:w-auto h-[50px] sm:h-[54px] md:h-[56px] px-7 sm:px-8 rounded-full border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.98] text-white font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>تواصل معنا</span>
          </a>
        </div>
      </div>
    </section>
  );
};
