import React from 'react';
import { ArrowLeft, Moon, MapPin, CheckCircle2 } from 'lucide-react';

interface UmrahSectionProps {
  onOpenBooking: () => void;
}

export const UmrahSection: React.FC<UmrahSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="umrah"
      aria-labelledby="umrah-heading"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Large Visual Feature Box */}
        <div
          id="umrah-hero-card"
          className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex items-center shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-black/5"
        >
          {/* Background Image: Holy Mecca with soft overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop"
              alt="المسجد الحرام وبرامج العمرة والزيارة"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Elegant double-gradient overlay: keeps it bright yet delivers high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35 rtl:from-black/90 rtl:via-black/70 rtl:to-black/35" />
          </div>

          {/* Content Over Background */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-18 max-w-2xl text-white">
            {/* Subtle Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
              <Moon size={14} className="text-[#F28A2E]" />
              <span className="text-xs sm:text-sm font-medium text-white">خدمة متميزة وخاصة</span>
            </div>

            {/* Heading */}
            <h2
              id="umrah-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6"
            >
              للعمرة تفاصيلها...
              <br />
              <span className="text-white/90">ونحن نهتم بها.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-6 sm:mb-8 font-normal">
              برامج العمرة لدينا قد تشمل التأشيرة والسكن والنقل الدولي والنقل بين مكة والمدينة والخدمات المرتبطة بالبرنامج، لنضمن لك تجربة روحانية ميسرة تعتني بأدق التفاصيل.
            </p>

            {/* Inclusions summary (No fake dates or fixed prices) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>إصدار وتسهيل التأشيرات</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>خيارات سكن بمكة والمدينة</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>ترتيبات النقل البري والجوي</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>متابعة وتنسيق مباشر</span>
              </div>
            </div>

            {/* Action CTA & Note */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenBooking}
                id="umrah-inquire-btn"
                type="button"
                className="w-full sm:w-auto h-[50px] sm:h-[52px] px-8 rounded-full bg-[#F28A2E] hover:bg-[#e07b22] text-white font-medium text-sm md:text-base shadow-[0_4px_20px_rgba(242,138,46,0.4)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>استفسر عن برامج العمرة</span>
                <ArrowLeft size={16} />
              </button>

              <span className="text-[11px] sm:text-xs text-white/70 max-w-xs leading-normal text-center sm:text-right">
                الأسعار والمواعيد والتوافر قابلة للتغيير حسب الموسم وبرامج الرحلات المعتمدة.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
