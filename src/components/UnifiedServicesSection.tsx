import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, ArrowLeft, Check, Filter, X } from 'lucide-react';
import { AGENCY_OFFICIAL_SERVICES, SERVICE_CATEGORIES, openWhatsApp } from '../data/agencyData';
import { AgencyServiceItem, ServiceCategoryKey } from '../types';

interface UnifiedServicesSectionProps {
  onSelectService?: (title: string, customMessage?: string) => void;
}

export const UnifiedServicesSection: React.FC<UnifiedServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: AGENCY_OFFICIAL_SERVICES.length };
    for (const service of AGENCY_OFFICIAL_SERVICES) {
      counts[service.category] = (counts[service.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered services based on category and search
  const filteredServices = useMemo(() => {
    return AGENCY_OFFICIAL_SERVICES.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchTitle = service.title.toLowerCase().includes(query);
      const matchEnglish = service.englishTitle?.toLowerCase().includes(query);
      const matchHighlight = service.posterHighlight?.toLowerCase().includes(query);
      const matchFeatures = service.features.some((f) => f.toLowerCase().includes(query));
      const matchReqs = service.requirements.some((r) => r.toLowerCase().includes(query));

      return matchTitle || matchEnglish || matchHighlight || matchFeatures || matchReqs;
    });
  }, [activeCategory, searchQuery]);

  const handleServiceClick = (service: AgencyServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title, service.whatsappMessage);
    } else {
      openWhatsApp(service.whatsappMessage);
    }
  };

  return (
    <section
      id="destinations"
      aria-labelledby="services-catalog-heading"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-[#F8F9FA] border-y border-[#E7E7E7] relative"
    >
      {/* Anchor for old packages links so everything routes cleanly */}
      <div id="packages" className="absolute top-0" aria-hidden="true" />
      <div id="all-services" className="absolute top-0" aria-hidden="true" />

      <div className="max-w-[1360px] mx-auto px-3 sm:px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <h2
              id="services-catalog-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] leading-tight mb-3.5"
            >
              وجهاتك وتأشيراتك وبرامجك في مكان واحد
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
              استكشف باقة خدمات وكالة الصادق الرسمية — من تأشيرات الدخول والموافقات الأمنية، إلى رحلات خريف صلالة وسقطرى وإندونيسيا، وفيز العمل والدراسة والمعاملات الحكومية.
            </p>
          </div>

          {/* Quick Search Box */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن دولة، تأشيرة، أو برنامج..."
                className="w-full h-12 pr-10 pl-10 bg-white border border-[#E0E0E0] focus:border-[#F28A2E] rounded-full text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#888888] focus:outline-none focus:ring-2 focus:ring-[#F28A2E]/20 transition-all shadow-xs"
              />
              <Search
                size={18}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  type="button"
                  aria-label="مسح البحث"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#0A0A0A] p-0.5 rounded-full"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] flex items-center gap-2 active:scale-95 ${
                  isActive
                    ? 'bg-[#0A0A0A] text-white shadow-md'
                    : 'bg-white text-[#555555] hover:text-[#0A0A0A] hover:bg-gray-50 border border-[#E7E7E7]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-[#777777]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-[24px] border border-[#E7E7E7] p-12 text-center max-w-md mx-auto my-8">
            <Filter size={36} className="text-[#888888] mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-bold text-[#0A0A0A] mb-1">لم نجد نتائج مطابقة</h3>
            <p className="text-xs text-[#666666] mb-5">
              لا توجد خدمة تطابق بحثك حالياً. يمكنك تغيير فئة العرض أو مسح كلمة البحث.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              type="button"
              className="px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
            >
              عرض كافة الخدمات (22)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white rounded-[16px] sm:rounded-[24px] overflow-hidden border border-[#E7E7E7] hover:border-[#F28A2E]/50 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative h-28 xs:h-36 sm:h-52 md:h-56 w-full overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = 'true';
                          target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                    {/* Key Duration / Badge Tag Top Left */}
                    {service.badge && (
                      <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F28A2E] text-white text-[9.5px] sm:text-[11px] font-bold shadow-xs">
                        {service.badge}
                      </div>
                    )}

                    {/* Title & Quick Info on Image Bottom */}
                    <div className="absolute bottom-2 sm:bottom-3.5 right-2 sm:right-4 left-2 sm:left-4 text-right">
                      <h3 className="text-xs xs:text-sm sm:text-xl md:text-2xl font-bold text-white leading-snug drop-shadow-sm group-hover:text-[#F28A2E] transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      {service.englishTitle && (
                        <p className="text-[9px] sm:text-[11px] text-white/80 font-medium tracking-wide truncate hidden xs:block">
                          {service.englishTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Body Details */}
                  <div className="p-2.5 sm:p-5 md:p-6 space-y-2 sm:space-y-4">
                    {/* Poster Highlight Tag */}
                    {service.posterHighlight && (
                      <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#F5F6F7] border border-[#EBEBEB] text-center">
                        <span className="text-[10px] sm:text-xs font-semibold text-[#0A0A0A] line-clamp-1">
                          {service.posterHighlight}
                        </span>
                      </div>
                    )}

                    {/* Key Features List */}
                    <div className="space-y-1 sm:space-y-2 pt-0.5 sm:pt-1">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#444444] leading-tight sm:leading-relaxed">
                          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={8} strokeWidth={2.5} className="sm:hidden" />
                            <Check size={11} strokeWidth={2.5} className="hidden sm:block" />
                          </div>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Requirements Badge Box */}
                    {service.requirements.length > 0 && (
                      <div className="pt-1.5 sm:pt-3 border-t border-[#F0F0F0]">
                        <span className="text-[9px] sm:text-[11px] font-semibold text-[#777777] block mb-1">
                          المتطلبات:
                        </span>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {service.requirements.slice(0, 2).map((req, idx) => (
                            <span
                              key={idx}
                              className="text-[8.5px] sm:text-[11px] px-1.5 sm:px-2.5 py-0.5 rounded sm:rounded-md bg-[#F28A2E]/10 text-[#C06010] font-medium border border-[#F28A2E]/20 line-clamp-1"
                            >
                              {req}
                            </span>
                          ))}
                          {service.requirements.length > 2 && (
                            <span className="text-[8.5px] text-[#888888] self-center sm:hidden">
                              +{service.requirements.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Optional Note */}
                    {service.note && (
                      <p className="text-[11px] text-[#888888] bg-gray-50 p-2 rounded-lg border border-gray-100 hidden sm:block">
                        {service.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-2.5 sm:p-5 md:p-6 pt-0">
                  <button
                    onClick={() => handleServiceClick(service)}
                    type="button"
                    className="w-full h-8 sm:h-12 rounded-full bg-[#0A0A0A] hover:bg-[#F28A2E] text-white font-semibold text-[10.5px] sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                  >
                    <MessageCircle size={12} className="sm:hidden" />
                    <MessageCircle size={16} className="hidden sm:block" />
                    <span className="sm:hidden">طلب الخدمة</span>
                    <span className="hidden sm:inline">طلب الخدمة عبر واتساب</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Editorial Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[24px] bg-white border border-[#E7E7E7] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-1">
              هل تبحث عن وجهة، تأشيرة أو ترتيب مخصص غير مدرج هنا؟
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              فريق وكالة الصادق للسفريات والسياحة متواجد لتوفير الاستشارة وتقديم الحلول لكافة الوجهات العالمية.
            </p>
          </div>
          <button
            onClick={() => openWhatsApp('مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن ترتيب تأشيرة أو رحلة خاصة لوجهة معينة.')}
            type="button"
            className="h-11 sm:h-12 px-7 rounded-full bg-[#F28A2E] hover:bg-[#e07b22] text-white font-semibold text-xs sm:text-sm transition-all shrink-0 active:scale-95 shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>استشارة مباشرة مع الوكيل</span>
            <ArrowLeft size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
