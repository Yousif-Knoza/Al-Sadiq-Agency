import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { PACKAGES_LIST } from '../data/agencyData';

interface PackagesSectionProps {
  onSelectPackage: (packageTitle: string, customMessage?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const getPackageMessage = (pkgId: string, title: string) => {
    switch (pkgId) {
      case 'seasonal':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن تفاصيل وحجوزات الرحلات الموسمية المتاحة حاليًا والوجهات المشمولة.';
      case 'tourism':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن البرامج والرحلات السياحية المنظمة وتفاصيل الإقامة والتنقل.';
      case 'custom':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وتصميم رحلة مخصصة حسب تفضيلاتي وميزانيتي والوجهة المطلوبة.';
      default:
        return `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن تفاصيل وحجوزات برامج ${title}.`;
    }
  };
  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-[#F5F6F7]/50 border-t border-[#E7E7E7]"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14 md:mb-20">
          <h2
            id="packages-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] leading-tight mb-3 sm:mb-4"
          >
            رحلات تستحق أن تُعاش
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            استكشف فئات الرحلات المنظمة التي تتيح لك قضاء أجمل الأوقات وفق ترتيبات سفر دقيقة.
          </p>
        </div>

        {/* 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {PACKAGES_LIST.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className="group bg-white rounded-[24px] overflow-hidden border border-[#E7E7E7] hover:border-[#1261D6]/40 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop';
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0A0A0A]/85 backdrop-blur-sm text-xs font-semibold text-white">
                    {pkg.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-2.5 sm:mb-3 group-hover:text-[#1261D6] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-[#555555] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 sm:space-y-2.5 pt-4 sm:pt-5 border-t border-[#F0F0F0]">
                    <span className="text-xs font-semibold text-[#0A0A0A] block mb-2">
                      يشمل الترتيب:
                    </span>
                    {pkg.included.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#666666]">
                        <div className="w-4 h-4 rounded-full bg-[#1261D6]/10 text-[#1261D6] flex items-center justify-center shrink-0">
                          <Check size={11} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-7 md:p-8 pt-0">
                <button
                  onClick={() => onSelectPackage(pkg.title, getPackageMessage(pkg.id, pkg.title))}
                  type="button"
                  className="w-full h-12 rounded-full bg-[#F5F6F7] hover:bg-[#1261D6] text-[#0A0A0A] hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-[#E7E7E7] hover:border-[#1261D6] active:scale-[0.98]"
                >
                  <span>استكشف البرامج المتاحة حاليًا</span>
                  <ArrowLeft size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
