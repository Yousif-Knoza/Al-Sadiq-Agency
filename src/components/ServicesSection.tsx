import React from 'react';
import { ArrowLeft, FileText, Plane, Building, Car, Moon, Compass } from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string, customMessage?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceMessage = (id: string, title: string) => {
    switch (id) {
      case 'visas':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن استخراج وتسهيل إجراءات التأشيرات والمستندات المطلوبة.';
      case 'flights':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن حجز تذاكر طيران ومعرفة أفضل العروض ومسارات الرحلات.';
      case 'hotels':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن حجوزات الفنادق وخيارات الإقامة المتاحة.';
      case 'transport':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمات النقل الدولي والمحلي وترتيبات التنقل.';
      case 'umrah':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن برامج وتفاصيل رحلات العمرة والزيارة (تأشيرات، سكن، ونقل).';
      case 'tours':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن البرامج والرحلات السياحية المنظمة والموسمية.';
      default:
        return `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمة ${title}.`;
    }
  };

  // Map icons for subtle visual association
  const getIcon = (id: string) => {
    switch (id) {
      case 'visas':
        return <FileText size={22} className="text-[#1261D6]" />;
      case 'flights':
        return <Plane size={22} className="text-[#1261D6]" />;
      case 'hotels':
        return <Building size={22} className="text-[#1261D6]" />;
      case 'transport':
        return <Car size={22} className="text-[#1261D6]" />;
      case 'umrah':
        return <Moon size={22} className="text-[#1261D6]" />;
      case 'tours':
        return <Compass size={22} className="text-[#1261D6]" />;
      default:
        return <Compass size={22} className="text-[#1261D6]" />;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-3 sm:px-4 md:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] leading-tight mb-4 sm:mb-5"
          >
            كل ما تحتاجه لرحلتك، في مكان واحد.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            من تجهيز التأشيرة إلى حجز الرحلة والسكن والنقل، نوفر لك خدمات سفر متكاملة بحسب وجهتك واحتياجاتك.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div
          id="services-grid"
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6"
        >
          {SERVICES_LIST.map((service) => {
            const customMsg = getServiceMessage(service.id, service.title);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                role="button"
                tabIndex={0}
                onClick={() => onSelectService(service.title, customMsg)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.title, customMsg);
                  }
                }}
                className="group relative bg-white border border-[#E7E7E7] hover:border-[#1261D6]/40 focus:outline-none focus:ring-2 focus:ring-[#1261D6]/50 rounded-[16px] sm:rounded-[20px] p-3 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(18,97,214,0.06)] active:scale-[0.99] cursor-pointer flex flex-col justify-between"
              >
              <div>
                {/* Top Row: Number & Subtle Icon */}
                <div className="flex items-center justify-between mb-3 sm:mb-8">
                  <span className="text-xs sm:text-[16px] md:text-[17px] font-semibold text-[#F28A2E] tracking-wider">
                    {service.number}
                  </span>
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#F5F6F7] flex items-center justify-center group-hover:bg-[#1261D6]/10 transition-colors duration-200 [&_svg]:w-3.5 [&_svg]:h-3.5 sm:[&_svg]:w-[22px] sm:[&_svg]:h-[22px]">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-xl md:text-[24px] font-semibold text-[#0A0A0A] mb-1.5 sm:mb-3 group-hover:text-[#1261D6] transition-colors duration-200 line-clamp-1 sm:line-clamp-none">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#555555] text-[11px] sm:text-sm md:text-[15px] leading-snug sm:leading-relaxed mb-2.5 sm:mb-6 font-normal line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </p>

                {/* Key Features bullet list */}
                <ul className="space-y-1 sm:space-y-2 mb-2.5 sm:mb-8 pt-2 sm:pt-4 border-t border-[#F0F0F0]">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="text-[10px] sm:text-xs md:text-sm text-[#666666] flex items-center gap-1.5 sm:gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1261D6]/70 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row: CTA & Animated Arrow */}
              <div className="pt-2 sm:pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-[10.5px] sm:text-xs md:text-sm font-medium text-[#0A0A0A] min-h-[32px] sm:min-h-[44px]">
                <span className="group-hover:text-[#1261D6] transition-colors duration-200">
                  <span className="sm:hidden">طلب واستفسار</span>
                  <span className="hidden sm:inline">طلب الخدمة والاستفسار</span>
                </span>
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#F5F6F7] flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#1261D6] group-hover:text-white transition-all duration-200 shrink-0">
                  <ArrowLeft
                    size={12}
                    className="transition-transform duration-200 group-hover:-translate-x-1.5 sm:hidden"
                  />
                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-x-1.5 hidden sm:block"
                  />
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
