import { ServiceItem, DestinationItem, PackageItem, StepItem, WhyItem, AgencyServiceItem, ServiceCategoryKey } from '../types';

export const SERVICE_CATEGORIES: { id: ServiceCategoryKey; label: string; count?: number }[] = [
  { id: 'all', label: 'كافة الخدمات والبرامج' },
  { id: 'visas', label: 'التأشيرات والموافقات الأمنية' },
  { id: 'tourism', label: 'البرامج والرحلات السياحية' },
  { id: 'work_study', label: 'العمل والدراسة والاستثمار' },
  { id: 'gov_clearance', label: 'المعاملات والتخليص الرسمي' },
];

export const AGENCY_OFFICIAL_SERVICES: AgencyServiceItem[] = [
  // 1. العراق
  {
    id: 'iraq-visa',
    title: 'تأشيرة دخول العراق',
    englishTitle: 'Iraq Entry Visa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'شهرية ومتعددة',
    duration: 'تأشيرة شهرية 30 يوماً / تأشيرة متعددة 365 يوماً',
    validity: '30 يوماً أو سنة كاملة متعددة',
    processingTime: 'إنجاز سريع ومتابعة مباشرة',
    requirements: ['صورة جواز السفر ساري المفعول', 'صورة شخصية بخلفية بيضاء'],
    features: ['إصدار تأشيرة شهرية 30 يوماً', 'تأشيرة متعددة لمدة 365 يوماً (سنة كاملة)', 'تنسيق متطلبات السفر وتذاكر الطيران'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/%D9%86%D8%B5%D8%A8_%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF_2024.jpg/1280px-%D9%86%D8%B5%D8%A8_%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF_2024.jpg',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والتقديم على تأشيرة دخول العراق (شهرية 30 يوم / متعددة 365 يوم) ومعرفة المتطلبات والأسعار.',
    posterHighlight: 'تأشيرة شهرية 30 يوماً | تأشيرة متعددة 365 يوماً'
  },
  // 2. مصر
  {
    id: 'egypt-security-clearance',
    title: 'إصدار موافقتك الأمنية إلى مصر',
    englishTitle: 'Egypt Security Clearance',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'إنجاز 24 - 48 ساعة',
    duration: 'تأشيرة وموافقة أمنية رسمية',
    validity: 'حسب النظام المصري المعتمد',
    processingTime: 'إنجاز خلال 24 ساعة إلى 48 ساعة',
    requirements: ['صورة الجواز واضحة ملونة', 'بيانات المسافر وجهة القدوم'],
    features: ['إنجاز سريع ومضمون خلال 24 - 48 ساعة', 'إصدار رسمي معتمد للوصول إلى المطارات المصرية', 'تنسيق حجوزات الطيران والفنادق في القاهرة والإسكندرية'],
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على خدمة إصدار الموافقة الأمنية إلى مصر وخيار الإنجاز السريع (24-48 ساعة).',
    posterHighlight: 'إنجاز فوري خلال 24 ساعة أو 48 ساعة'
  },
  // 3. سوريا
  {
    id: 'syria-visa',
    title: 'تأشيرة دخول سوريا',
    englishTitle: 'Syria Entry Visa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'إجراءات مبسطة',
    duration: 'حسب مدة الزيارة والنوع',
    validity: 'وفق الموافقة الصادرة',
    processingTime: 'متابعة رسمية مباشرة',
    requirements: ['صورة شخصية حديثة', 'صورة جواز السفر ساري المفعول'],
    features: ['تقديم رسمي ومتابعة لدى الجهات المعنية', 'متطلبات ميسرة: صورة شخصية وصورة الجواز', 'تنسيق رحلات الطيران ومحطات الترانزيت'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Umayyad_Mosque%2C_Damascus.jpg/1280px-Umayyad_Mosque%2C_Damascus.jpg',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والتقديم على تأشيرة دخول سوريا وتجهيز الملف بالمتطلبات المتاحة.',
    posterHighlight: 'المتطلبات: صورة شخصية + صورة الجواز'
  },
  // 4. خريف صلالة
  {
    id: 'salalah-khareef-package',
    title: 'عروض سبتمبر 2026 — خريف صلالة',
    englishTitle: 'Salalah Khareef Tour Package 2026',
    category: 'tourism',
    categoryLabel: 'برامج ورحلات',
    badge: '7 أيام / 6 ليالي',
    duration: '7 أيام و6 ليالي متكاملة',
    validity: 'موسم خريف صلالة (انطلاق من عدن والمكلا)',
    processingTime: 'حجز مؤكد فوري',
    requirements: ['جواز سفر ساري المفعول', 'تأكيد الحجز المسبق للمقاعد'],
    features: [
      'تأشيرة الدخول لسلطنة عمان',
      'المواصلات والنقل المريح ذهاباً وإياباً',
      'الإقامة الفندقية الراقية طوال 6 ليالي',
      'التنقلات الداخلية اليومية',
      'جولات سياحية كاملة لشلالات أثوم، وادي دربات، والمزارات الطبيعية'
    ],
    note: 'انطلاق الرحلات متاح من المكلا ومن عدن مع تنظيم عائلي وفردي مميز.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز برنامج رحلة خريف صلالة (7 أيام / 6 ليالي) ومعرفة مواعيد الانطلاق المتاحة.',
    posterHighlight: 'برنامج متكامل: تأشيرة + إقامة + نقل + جولات وادي دربات'
  },
  // 5. سلطنة عمان
  {
    id: 'oman-visas',
    title: 'تأشيرات إلى سلطنة عُمان',
    englishTitle: 'Sultanate of Oman Visas',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: '3 خيارات متعددة',
    duration: 'عبور 05 أيام | سياحية 21 يوم | زيارة 90 يوم',
    validity: 'حسب نوع التأشيرة المختار',
    processingTime: 'إصدار إلكتروني سريع',
    requirements: ['صورة جواز السفر واضحة', 'صورة شخصية حديثة'],
    features: [
      'تأشيرة عبور 05 أيام (ترانزيت بري وجوي)',
      'تأشيرة سياحية 21 يوم للاستجمام وزيارة المعالم',
      'تأشيرة زيارة 90 يوم لزيارة الأهل والأنشطة التجارية',
      'تنسيق العبور عبر المنافذ الحدودية البرية والجوية'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Old_Muscat_City_View%2C_Muscat%2C_Oman3.jpg/1280px-Old_Muscat_City_View%2C_Muscat%2C_Oman3.jpg',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن تأشيرات سلطنة عمان (عبور 5 أيام / سياحية 21 يوم / زيارة 90 يوم) والتقديم عليها.',
    posterHighlight: 'تأشيرة عبور 05 أيام | سياحية 21 يوم | زيارة 90 يوم'
  },
  // 6. فيز عمل السعودية
  {
    id: 'saudi-work-visas',
    title: 'فيز عمل إلى المملكة العربية السعودية',
    englishTitle: 'Saudi Work Visas',
    category: 'work_study',
    categoryLabel: 'عمل ودراسة واستثمار',
    badge: 'لأغلب المهن',
    duration: 'إقامة نظامية 3 أشهر عند الوصول',
    validity: 'شاملة المعاملة الرسمية',
    processingTime: 'متابعة رسمية لكافة المراحل',
    requirements: ['جواز سفر مهني ساري', 'المؤهلات والاشتراطات المهنية المطلوبة'],
    features: [
      'متوفرة لأغلب المهن والقطاعات',
      'مع إقامة لمدة 3 أشهر',
      'شاملة تجهيز ومتابعة المعاملة بالكامل',
      'إرشاد متكامل لخطوات الوصول وإصدار الإقامة'
    ],
    note: 'ملاحظة هامة: التأشيرات نظامية ومتاحة بدون ربط عمل مسبق بحسب الأنظمة.',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن فيز العمل المتاحة إلى السعودية والمهن المتوفرة وتفاصيل المعاملة.',
    posterHighlight: 'لأغلب المهن | مع إقامة 3 أشهر | شاملة المعاملة'
  },
  // 7. ألبانيا
  {
    id: 'albania-evisa',
    title: 'تأشيرة ألبانيا الإلكترونية',
    englishTitle: 'Albania eVisa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'صلاحية 30 يوم',
    duration: 'مدة الإقامة حسب الموافقة الصادرة',
    validity: 'صلاحية التأشيرة: 30 يوماً',
    processingTime: 'تقديم إلكتروني مباشر',
    requirements: ['صورة شخصية واضحة', 'صورة الجواز سكنر عالي الجودة'],
    features: [
      'تأشيرة إلكترونية بدون الحاجة لزيارة السفارة',
      'وجهة أوروبية ساحرة بطبيعة بكر وتكلفة اقتصادية',
      'متابعة مستمرة حتى صدور الموافقة الرسمية'
    ],
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة ألبانيا الإلكترونية ومعرفة المتطلبات الحالية.',
    posterHighlight: 'صلاحية التأشيرة: 30 يوم | صورة شخصية + الجواز سكنر'
  },
  // 8. كينيا دراسة
  {
    id: 'kenya-study-english',
    title: 'دراسة اللغة الإنجليزية في كينيا',
    englishTitle: 'Study English in Kenya',
    category: 'work_study',
    categoryLabel: 'عمل ودراسة واستثمار',
    badge: 'تجربة أفريقية فريدة',
    duration: 'برامج دراسية مكثفة ومرنة',
    validity: 'طوال فترة الدراسة المعتمدة',
    processingTime: 'قبول وتأشيرة متكاملة',
    requirements: ['صورة جواز السفر', 'المؤهل الدراسي للراغب بالدراسة'],
    features: [
      'استشارات تعليمية مجانية لاختيار المعهد والجامعة',
      'تسهيل القبول والتسجيل في الجامعات والمعاهد المعتمدة (مثل USIU)',
      'ترتيب مكان الإقامة والسكن الطلابي المريح',
      'إصدار التأشيرة الدراسية وتذاكر الطيران المخفضة',
      'متابعة ودعم مستمر للطالب طوال فترة الدراسة'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Nairobi_skyline_from_Gem_Hotel.jpg/1280px-Nairobi_skyline_from_Gem_Hotel.jpg',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن برامج دراسة اللغة الإنجليزية في كينيا وتسهيلات القبول والسكن والتأشيرة.',
    posterHighlight: 'نهتم بكل التفاصيل: استشارات + قبول + إقامة + تأشيرة ودعم'
  },
  // 9. مالاوي
  {
    id: 'malawi-visa',
    title: 'تأشيرة مالاوي الإلكترونية',
    englishTitle: 'Malawi Visa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'صلاحية وإقامة 90 يوم',
    duration: 'مدة الإقامة: 90 يوماً',
    validity: 'صلاحية التأشيرة: 90 يوماً',
    processingTime: 'إصدار إلكتروني موثوق',
    requirements: ['صورة شخصية حديثة', 'صورة جواز السفر'],
    features: [
      'صلاحية التأشيرة: 90 يوماً كاملة',
      'مدة إقامة ممتدة تصل إلى 90 يوماً',
      'متطلبات سهلة ومباشرة بدون تعقيد',
      'تنسيق مسار السفر وحجوزات الطيران إلى ليلونغوي'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة مالاوي (إقامة وصلاحية 90 يوم) والاستفسار عن المتطلبات والرسوم.',
    posterHighlight: 'صلاحية 90 يوم | مدة الإقامة 90 يوم | تقديم ميسر'
  },
  // 10. باكستان
  {
    id: 'pakistan-visa',
    title: 'تأشيرة باكستان',
    englishTitle: 'Pakistan Visa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'صلاحية 90 يوم',
    duration: 'مدة الإقامة: 30 يوماً',
    validity: 'صلاحية التأشيرة: 90 يوماً',
    processingTime: 'معالجة إلكترونية سريعة',
    requirements: ['صورة شخصية واضحة', 'صورة جواز السفر ساري المفعول'],
    features: [
      'صلاحية التأشيرة: 90 يوماً',
      'مدة الإقامة: 30 يوماً قابلة للتجديد',
      'إجراءات تقديم مبسطة عبر البوابة الرسمية',
      'تجهيز المستندات وحجوزات الطيران إلى إسلام أباد وكراتشي'
    ],
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والتقديم على تأشيرة باكستان ومعرفة تفاصيل المعاملة.',
    posterHighlight: 'صلاحية التأشيرة: 90 يوم | مدة الإقامة: 30 يوم'
  },
  // 11. تأشيرة مستثمر إندونيسيا
  {
    id: 'indonesia-investor-visa',
    title: 'تأشيرة مستثمر إندونيسيا',
    englishTitle: 'Indonesia Investor Visa & Company Setup',
    category: 'work_study',
    categoryLabel: 'عمل ودراسة واستثمار',
    badge: 'إقامة مستثمر سنتين',
    duration: 'إقامة قانونية لمدة سنتين كاملتين',
    validity: 'سنتين قابلة للتمديد',
    processingTime: 'تأسيس متكامل ومتابعة رسمية',
    requirements: ['جواز سفر ساري المفعول', 'الحد الأدنى للاستثمار: 2 مساهمين', 'بيانات النشاط التجاري'],
    features: [
      'تأسيس وتسجيل الشركة رسمياً في إندونيسيا',
      'إصدار إقامة مستثمر رسمية (KITAS) لمدة سنتين',
      'الحد الأدنى للاستثمار: 2 مساهمين فقط',
      'فتح الحسابات البنكية والتسهيلات القانونية للمستثمرين'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bundaran_Hotel_Indonesia_%282025%29_%28cropped%29.jpg/1280px-Bundaran_Hotel_Indonesia_%282025%29_%28cropped%29.jpg',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن تأشيرة مستثمر إندونيسيا وإجراءات تأسيس الشركة والإقامة لسنتين.',
    posterHighlight: 'تأسيس الشركة + إقامة مستثمر سنتين + حد أدنى مساهمين 2'
  },
  // 12. أوغندا السياحية
  {
    id: 'uganda-tourist-visa',
    title: 'تأشيرة أوغندا السياحية',
    englishTitle: 'Uganda Tourist Visa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'صلاحية وإقامة 90 يوم',
    duration: 'مدة الإقامة: 90 يوماً',
    validity: 'صلاحية التأشيرة: 90 يوماً',
    processingTime: 'إصدار إلكتروني عبر النظام الرسمي',
    requirements: ['صورة شخصية حديثة', 'صورة جواز السفر واضحة'],
    features: [
      'صلاحية التأشيرة: 90 يوماً',
      'مدة الإقامة: 90 يوماً في لؤلؤة أفريقيا',
      'مناسبة للسياحة والاستكشاف الطبيعي والأنشطة التجارية',
      'تجهيز ملف التأشيرة وحجوزات الطيران إلى عنتيبي'
    ],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة أوغندا السياحية (90 يوم صلاحية وإقامة) ومعرفة المتطلبات.',
    posterHighlight: 'صلاحية 90 يوم | مدة الإقامة 90 يوم | صورة شخصية + الجواز'
  },
  // 13. تخليص معاملات الزواج المختلط
  {
    id: 'mixed-marriage-clearance',
    title: 'تخليص معاملات الزواج المختلط',
    englishTitle: 'Mixed Marriage Legal Clearances',
    category: 'gov_clearance',
    categoryLabel: 'معاملات وتخليص',
    badge: 'إجراءات قانونية موثقة',
    duration: 'إنجاز رسمي حتى صدور الموافقة',
    validity: 'موافقة رسمية نهائية',
    processingTime: 'متابعة حثيثة للوزارات والجهات المعنية',
    requirements: ['الوثائق الثبوتية للطرفين', 'المستندات الرسمية المحددة قانوناً'],
    features: [
      'معاملات زواج اليمني بأجنبية',
      'معاملات زواج الأجنبي بيمنية',
      'استخراج الموافقات الأمنية والحكومية الرسمية (تمت الموافقة)',
      'تصديق المعاملات لدى السفارات والوزارات والجهات القضائية'
    ],
    note: 'خدمة احترافية تضمن سلامة الإجراءات النظامية والسرعة في الإنجاز وتفادي الرفض.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمة تخليص معاملات الزواج المختلط والخطوات والأوراق المطلوبة.',
    posterHighlight: 'زواج اليمني بأجنبية | زواج الأجنبي بيمنية | تمت الموافقة'
  },
  // 14. إندونيسيا السياحية
  {
    id: 'indonesia-tourist-visa',
    title: 'تأشيرة إندونيسيا السياحية',
    englishTitle: 'Indonesia Tourist Visa (e-VOA)',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'قابلة للتجديد 4 أشهر',
    duration: 'مدة الإقامة: 60 يوماً',
    validity: 'صلاحية التأشيرة: 60 يوماً',
    processingTime: 'إصدار سريع إلكتروني',
    requirements: ['صورة شخصية ملونة', 'صورة جواز السفر واضحة'],
    features: [
      'صلاحية التأشيرة: 60 يوماً',
      'مدة الإقامة المبدئية: 60 يوماً',
      'ميزة حصرية: قابلة للتجديد 4 أشهر إضافية داخل إندونيسيا',
      'مثالية للسياحة في بالي وجاكرتا وباندونق'
    ],
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة إندونيسيا السياحية (60 يوم قابلة للتمديد 4 أشهر إضافية).',
    posterHighlight: 'صلاحية 60 يوم | إقامة 60 يوم | قابلة للتجديد 4 أشهر إضافية'
  },
  // 15. إصدار شهادات صحية بلدي
  {
    id: 'saudi-balady-health-certificates',
    title: 'إصدار شهادات صحية للعمالة في المملكة (منصة بلدي)',
    englishTitle: 'Balady Health Certificate Issuance',
    category: 'gov_clearance',
    categoryLabel: 'معاملات وتخليص',
    badge: 'منصة بلدي الرسمية',
    duration: 'شهادة رقمية موثقة بـ QR Code',
    validity: 'سارية رسمياً في كافة المنشآت بالمملكة',
    processingTime: 'إصدار إلكتروني فوري وموثق',
    requirements: ['بيانات الإقامة أو التأشيرة', 'تحديد نوع المنشأة والمهنة'],
    features: [
      'إصدار شهادة صحية موحدة (بمدرسة)',
      'إصدار شهادة صحية (بدون مدرسة)',
      'تجديد الشهادات الصحية المنتهية للعمالة',
      'ربط إلكتروني فوري ومعتمد مع منصة بلدي ووزارة الشؤون البلدية'
    ],
    note: 'مخصصة للعمالة في المطاعم، المقاهي، ومحلات المواد الغذائية والمنشآت التجارية.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وطلب إصدار/تجديد شهادة صحية للعمالة في المملكة عبر منصة بلدي.',
    posterHighlight: 'إصدار موحدة (بمدرسة) | إصدار (بدون مدرسة) | تجديد فوري'
  },
  // 16. كينيا السياحية
  {
    id: 'kenya-tourist-visa',
    title: 'تأشيرة كينيا الإلكترونية',
    englishTitle: 'Kenya Visa (eTA)',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'قابلة للتجديد 3 أشهر',
    duration: 'مدة الإقامة: 90 يوماً',
    validity: 'صلاحية التأشيرة: 90 يوماً',
    processingTime: 'إصدار سريع خلال أيام عمل معدودة',
    requirements: ['صورة شخصية حديثة', 'صورة جواز السفر'],
    features: [
      'صلاحية التأشيرة: 90 يوماً',
      'مدة الإقامة: 90 يوماً كاملة',
      'ميزة خاصة: قابلة للتجديد 3 أشهر إضافية داخل كينيا',
      'مثالية لرحلات السفاري، التجارة والأعمال في نيروبي ومومباسا'
    ],
    image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة كينيا الإلكترونية (صلاحية 90 يوم قابلة للتمديد 3 أشهر).',
    posterHighlight: 'صلاحية 90 يوم | إقامة 90 يوم | قابلة للتجديد 3 أشهر إضافية'
  },
  // 17. تأشيرة سياحية السعودية للمقيمين بالخليج وأوروبا
  {
    id: 'saudi-tourist-gcc-eu',
    title: 'تأشيرة سياحية إلى السعودية للمقيمين في دول الخليج وأوروبا',
    englishTitle: 'Saudi Tourist Visa for GCC & EU Residents',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'بدون حضور للسفارة',
    duration: 'مدة الإقامة: 90 يوماً',
    validity: 'صلاحية التأشيرة: 90 يوماً (سفرة واحدة)',
    processingTime: 'إصدار إلكتروني فوري ومضمون',
    requirements: ['صورة شخصية بخلفية بيضاء', 'صورة جواز السفر', 'صورة الإقامة سارية في الخليج أو أوروبا'],
    features: [
      'بدون الحضور للسفارة إطلاقاً',
      'صلاحية التأشيرة: 90 يوماً',
      'مدة الإقامة: 90 يوماً في كافة مدن المملكة',
      'تشمل السياحة، حضور الفعاليات، أداء العمرة، وزيارة الأصدقاء والأقارب'
    ],
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على التأشيرة السياحية إلى السعودية الخاصة بالمقيمين في دول الخليج وأوروبا (بدون حضور للسفارة).',
    posterHighlight: 'بدون الحضور للسفارة | صلاحية 90 يوم | إقامة 90 يوم'
  },
  // 18. تايلاند
  {
    id: 'thailand-visa',
    title: 'تأشيرة تايلاند السياحية',
    englishTitle: 'Thailand Visa',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'صلاحية 90 يوم وإقامة 60',
    duration: 'مدة الإقامة: 60 يوماً',
    validity: 'صلاحية التأشيرة: 90 يوماً',
    processingTime: 'تقديم نظامي لدى القنصلية',
    requirements: ['صورة شخصية واضحة', 'صورة جواز السفر ساري المفعول'],
    features: [
      'صلاحية التأشيرة: 90 يوماً',
      'مدة الإقامة: 60 يوماً للاستمتاع برحلتك',
      'وجهة الشواطئ الساحرة، الاستجمام، والرحلات العلاجية في بانكوك وبوكيت',
      'تنسيق حجوزات الطيران والفنادق وبرامج الجولات البحرية'
    ],
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة تايلاند السياحية وتنسيق حجوزات السفر.',
    posterHighlight: 'صلاحية 90 يوم | مدة الإقامة 60 يوم | صورة شخصية + الجواز'
  },
  // 19. إندونيسيا باقات شاملة
  {
    id: 'indonesia-comprehensive-package',
    title: 'برامج وسياحة إندونيسيا الشاملة (INDONESIA)',
    englishTitle: 'Indonesia Tourism, Residency & Investment',
    category: 'tourism',
    categoryLabel: 'برامج ورحلات',
    badge: 'سياحة | إقامة | مستثمر',
    duration: 'باقات سياحية مرنة من 8 إلى 15 يوماً',
    validity: 'على مدار العام',
    processingTime: 'ترتيب فوري للحجوزات',
    requirements: ['جواز سفر ساري المفعول', 'تحديد نوع البرنامج المطلوب'],
    features: [
      'برامج سياحية متكاملة في بالي، جاكرتا، وبونشاك',
      'تأشيرات وخدمات الإقامة طويلة الأجل',
      'حلول تأشيرات المستثمر وتأسيس الشركات',
      'حجوزات منتجعات وفلل خاصة مع مرشدين سياحيين'
    ],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن برامج سياحة إندونيسيا وباقات (سياحة / إقامة / مستثمر) وخيارات بالي وجاكرتا.',
    posterHighlight: 'سياحة في بالي وجاكرتا | إقامة طويلة | تأشيرات استثمار'
  },
  // 20. سقطرى
  {
    id: 'socotra-island-tours',
    title: 'رحلات جزيرة سقطرى — Let\'s Travel to Socotra Island',
    englishTitle: 'Socotra Island Exploration Expeditions',
    category: 'tourism',
    categoryLabel: 'برامج ورحلات',
    badge: 'سياحة بيئية واستكشاف',
    duration: 'برامج أسبوعية متكاملة',
    validity: 'مواسم سقطرى السياحية',
    processingTime: 'ترتيب مسبق لتصاريح الدخول والطيران',
    requirements: ['جواز السفر أو الهوية الوطنية', 'الحجز المبكر لمحدودية الرحلات'],
    features: [
      'إصدار تصاريح الدخول السياحية لجزيرة سقطرى',
      'حجز تذاكر رحلات الطيران المباشرة',
      'سيارات دفع رباعي 4x4 وسائقين ومرشدين محليين متمرسين',
      'تخييم مجهز في شاطئ أرهر وكثبانه البيضاء الفريدة',
      'زيارة هضبة دكسم وغابات شجرة دم الأخوين الساحرة ومحمية ديحمري البحرية'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز رحلة سياحية إلى جزيرة سقطرى ومعرفة جدول الرحلات القادمة والبرامج المشمولة.',
    posterHighlight: 'كثبان أرهر | أشجار دم الأخوين | تخييم وبيئة عذراء'
  },
  // 21. معاملة الزيارة العائلية في السفارة السعودية
  {
    id: 'saudi-family-visit-clearance',
    title: 'معاملة الزيارة العائلية في السفارة السعودية',
    englishTitle: 'Saudi Family Visit Visa Embassy Processing',
    category: 'gov_clearance',
    categoryLabel: 'معاملات وتخليص',
    badge: 'تساهيل ومتابعة قنصلية',
    duration: 'متابعة حتى طباعة التأشيرة',
    validity: 'حسب المستند الصادر من وزارة الخارجية',
    processingTime: 'إنجاز سريع وترتيب دقيق للملف',
    requirements: ['مستند تأشيرة الزيارة العائلية الصادر', 'جوازات سفر أفراد الأسرة', 'عقد الزواج وشهادات الميلاد للمطابقة'],
    features: [
      'تدقيق وتجهيز الملفات والمستندات بدقة متناهية لمنع التأخير',
      'حجز مواعيد منصة تساهيل (VFS TasHeel) المعتمدة',
      'تنسيق الفحص الطبي وتصديقات الغرفة التجارية والخارجية',
      'متابعة المعاملة خطوة بخطوة حتى وصول الجوازات بالتأشيرة'
    ],
    note: 'خدمة متخصصة تضمن راحة عائلتك وإنجاز كافة متطلبات السفارة بأعلى درجات الدقة.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود ترتيب ومتابعة معاملة الزيارة العائلية في السفارة السعودية وحجز موعد تساهيل.',
    posterHighlight: 'تجهيز كامل للملف | حجز تساهيل | متابعة حتى استلام الجوازات'
  },
  // 22. تأشيرة الكويت للمقيمين بالخليج
  {
    id: 'kuwait-visa-gcc',
    title: 'تأشيرة الكويت للمقيمين في دول الخليج فقط',
    englishTitle: 'Kuwait Entry Visa for GCC Residents',
    category: 'visas',
    categoryLabel: 'تأشيرات وموافقات',
    badge: 'زيارة 30 يوم',
    duration: 'زيارة 30 يوماً',
    validity: 'صالحة للدخول فور الصدور',
    processingTime: 'تقديم إلكتروني سريع',
    requirements: ['صورة شخصية حديثة', 'الجواز سكنر عالي الدقة', 'صورة الإقامة سارية في إحدى دول مجلس التعاون'],
    features: [
      'مخصصة للمقيمين في دول الخليج العربي',
      'مدة الزيارة: 30 يوماً في دولة الكويت',
      'تقديم إلكتروني كامل بدون مراجعة السفارة',
      'تنسيق تذاكر الطيران والفنادق في الكويت'
    ],
    image: 'https://images.unsplash.com/photo-1579606032834-deaff9700cff?q=80&w=1000&auto=format&fit=crop',
    whatsappMessage: 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التقديم على تأشيرة الكويت للمقيمين في دول الخليج (زيارة 30 يوم) ومعرفة المتطلبات.',
    posterHighlight: 'للمقيمين بالخليج فقط | زيارة 30 يوم | تقديم إلكتروني مباشر'
  }
];

export const AGENCY_CONFIG = {
  name: 'وكالة الصادق للسفريات والسياحة',
  shortName: 'الصادق',
  subTitle: 'للسفريات والسياحة',
  phone: '+967 777 940 008',
  phoneClean: '967777940008',
  whatsappUrl: 'https://wa.me/967777940008',
  instagram: '@sadeq_travel',
  instagramUrl: 'https://instagram.com/sadeq_travel',
  facebookUrl: 'https://facebook.com/sadeqtravel',
  xUrl: 'https://x.com/sadeq_travel',
  address: {
    governorate: 'حضرموت',
    city: 'المكلا',
    area: 'فوه — المساكن',
    street: 'الشارع العام',
    landmark: 'بجانب مركز جامعة حضرموت لطب الأسرة',
    fullText: 'حضرموت — المكلا، فوه — المساكن، الشارع العام، بجانب مركز جامعة حضرموت لطب الأسرة',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=جامعة+حضرموت+طب+الأسرة+المكلا+فوه'
  },
  branches: [
    {
      id: 'main',
      title: 'المركز الرئيسي — المكلا',
      location: 'حضرموت — المكلا، فوه — المساكن، الشارع العام، بجانب مركز جامعة حضرموت لطب الأسرة',
      status: 'مفتوح لاستقبال العملاء',
      phone: '+967 777 940 008'
    },
    {
      id: 'wadi',
      title: 'فرع الوادي — حريضة',
      location: 'حضرموت — الوادي / حريضة',
      status: 'قيد التحديث والاعتماد الرسمي',
      phone: '+967 777 940 008'
    }
  ]
};

export const getWhatsAppUrl = (message?: string): string => {
  const cleanPhone = AGENCY_CONFIG.phoneClean;
  if (!message) {
    return `https://wa.me/${cleanPhone}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message.trim())}`;
};

export const getApiWhatsAppUrl = (message?: string): string => {
  const cleanPhone = AGENCY_CONFIG.phoneClean;
  if (!message) {
    return `https://api.whatsapp.com/send?phone=${cleanPhone}`;
  }
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message.trim())}`;
};

/**
 * Safely opens WhatsApp in a new tab/window without redirecting the current window or iframe.
 * Using an anchor tag with target="_blank" and rel="noopener noreferrer" ensures the current app
 * remains open and is never navigated to wa.me (which refuses to connect inside iframes).
 */
export const openWhatsApp = (message?: string): void => {
  const url = getWhatsAppUrl(message);
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'visas',
    number: '01',
    title: 'التأشيرات',
    description: 'نساعدك في إجراءات التأشيرات السياحية والعلاجية والزيارة والعمل والدراسة، بحسب الوجهة والمتطلبات المتاحة.',
    features: ['تأشيرات سياحية وزيارة', 'تأشيرات علاجية ودراسية', 'متابعة المتطلبات الرسمية']
  },
  {
    id: 'flights',
    number: '02',
    title: 'حجوزات الطيران',
    description: 'خيارات حجز الرحلات الجوية ومساعدتك في ترتيب خط سير الرحلة.',
    features: ['مقارنة أفضل مسارات السفر', 'مرونة في التوقيت والوجهات', 'دعم تعديل وتأكيد الحجوزات']
  },
  {
    id: 'hotels',
    number: '03',
    title: 'حجز الفنادق',
    description: 'خيارات إقامة مناسبة لرحلتك مع تنظيم تفاصيل السكن.',
    features: ['فنادق عائلية وتجارية', 'خيارات قرب الحرم في مكة والمدينة', 'تأكيد فوري وترتيبات مسبقة']
  },
  {
    id: 'transport',
    number: '04',
    title: 'النقل',
    description: 'خدمات النقل الدولي والداخلي المرتبطة بالرحلة والبرامج السياحية.',
    features: ['استقبال وتوديع في المطارات', 'نقل بري مريح بين المدن', 'سيارات خاصة وحافلات حديثة']
  },
  {
    id: 'umrah',
    number: '05',
    title: 'العمرة والزيارة',
    description: 'برامج وخدمات مرتبطة بالعمرة والزيارة تشمل التأشيرة والسكن والنقل بحسب البرنامج.',
    features: ['إصدار تأشيرات العمرة والزيارة', 'سكن بمستويات متعددة', 'إشراف ومتابعة طوال الرحلة']
  },
  {
    id: 'tours',
    number: '06',
    title: 'الرحلات والبرامج السياحية',
    description: 'برامج سياحية ورحلات موسمية إلى وجهات مختارة.',
    features: ['جداول سفر مدروسة بعناية', 'رحلات فردية وعائلية', 'وجهات طبيعية وثقافية مختارة']
  }
];

export const DESTINATIONS_LIST: DestinationItem[] = [
  {
    id: 'saudi',
    name: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    category: 'عمرة، زيارة، عمل وسياحة',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1200&auto=format&fit=crop',
    highlight: 'برامج العمرة وزيارة الحرمين الشريفين والمدن الرئيسية'
  },
  {
    id: 'oman',
    name: 'سلطنة عُمان',
    nameEn: 'Sultanate of Oman',
    category: 'طبيعة، سياحة وأعمال',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Old_Muscat_City_View%2C_Muscat%2C_Oman3.jpg/1280px-Old_Muscat_City_View%2C_Muscat%2C_Oman3.jpg',
    highlight: 'صلالة، مسقط ومناظر الجبال والواحات الساحلية'
  },
  {
    id: 'uae',
    name: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    category: 'سياحة، تسوق وتجارة',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    highlight: 'دبي وأبوظبي، معالم عالمية وأنشطة عائلية متكاملة'
  },
  {
    id: 'india',
    name: 'جمهورية الهند',
    nameEn: 'India',
    category: 'علاج، دراسة وسياحة',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
    highlight: 'مستشفيات رائدة ومراكز تعليمية ومعالم تاريخية'
  },
  {
    id: 'qatar',
    name: 'دولة قطر',
    nameEn: 'State of Qatar',
    category: 'سياحة وزيارات',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Doha%2C_Qatar.JPG/1280px-Doha%2C_Qatar.JPG',
    highlight: 'الدوحة، كورنيش الواجهة البحرية والمتاحف الثقافية'
  },
  {
    id: 'bahrain',
    name: 'مملكة البحرين',
    nameEn: 'Kingdom of Bahrain',
    category: 'سياحة عائلية وقصيرة',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Manama%2C_Bahrain_Decembre_2014.jpg/1280px-Manama%2C_Bahrain_Decembre_2014.jpg',
    highlight: 'المنامة، الأسواق العريقة والمنتجعات الساحلية'
  },
  {
    id: 'seychelles',
    name: 'جزر سيشل',
    nameEn: 'Seychelles',
    category: 'استجمام وشواطئ طبيعية',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    highlight: 'مياه فيروزية وجزر استوائية للاسترخاء التام'
  },
  {
    id: 'more',
    name: 'وجهات دولية أخرى',
    nameEn: 'International Destinations',
    category: 'استفسارات مخصصة',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    highlight: 'نوفر متابعة وتنسيق للوجهات العالمية حسب الاشتراطات'
  }
];

export const PACKAGES_LIST: PackageItem[] = [
  {
    id: 'seasonal',
    number: '01',
    title: 'رحلات موسمية',
    description: 'رحلات مبرمجة في المواسم السياحية والإجازات لأفضل الوجهات الملائمة للأجواء والأنشطة.',
    included: ['تنسيق الطيران والإقامة', 'مرونة في المدة الزمنية', 'دعم وتوجيه كامل طوال الرحلة'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'tourism',
    number: '02',
    title: 'برامج سياحية',
    description: 'خطط سفر مصممة للاستمتاع بالطبيعة والمعالم الثقافية والاسترخاء للأفراد والعائلات.',
    included: ['خيارات فنادق مريحة ومجربة', 'نقل محلي منظم', 'اقتراحات مسارات وأنشطة مميزة'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'custom',
    number: '03',
    title: 'رحلات مخصصة',
    description: 'صمم رحلتك حسب تفضيلاتك وميزانيتك من اختيار الوجهة ونوع السكن إلى وسائل النقل.',
    included: ['تخصيص كامل للمسار والتواريخ', 'حلول مرنة للمجموعات والعائلات', 'استشارة شخصية مع فريق الوكالة'],
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop'
  }
];

export const WHY_US_ITEMS: WhyItem[] = [
  {
    number: '01',
    title: 'خدمات متعددة في مكان واحد',
    description: 'تأشيرة، طيران، فنادق، نقل وبرامج سفر منظمة لتوفير وقتك وجهدك.'
  },
  {
    number: '02',
    title: 'معرفة بإجراءات السفر',
    description: 'نساعدك على فهم المتطلبات والخطوات المرتبطة بالرحلة وفق أحدث الأنظمة.'
  },
  {
    number: '03',
    title: 'خدمات للأفراد والعائلات',
    description: 'حلول سفر مرنة تناسب احتياجات مختلفة مع مراعاة راحة وخصوصية العائلة.'
  },
  {
    number: '04',
    title: 'تواصل مباشر',
    description: 'يمكنك التواصل مع الوكالة للاستفسار عن التفاصيل والبرامج المتاحة في أي وقت.'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'اختر وجهتك',
    description: 'حدد الدولة أو نوع الرحلة التي ترغب بها سواء كانت تأشيرة، عمرة، علاج أو استجمام.'
  },
  {
    number: '02',
    title: 'تواصل معنا مباشرة',
    description: 'شاركنا تفاصيل رحلتك عبر محادثة واتساب المباشرة أو الاتصال الهاتفي السريع مع الفريق.'
  },
  {
    number: '03',
    title: 'نرتب التفاصيل',
    description: 'نتولى تجهيز متطلبات التأشيرة، تذاكر الطيران، حجوزات الإقامة وبرامج النقل.'
  },
  {
    number: '04',
    title: 'تستعد للرحلة',
    description: 'تستلم مستندات السفر وجدولك بوضوح تام وتنطلق في رحلتك باطمئنان وراحة بال.'
  }
];

export const SERVICE_OPTIONS = [
  { value: 'visa', label: 'تأشيرة' },
  { value: 'flight', label: 'حجز طيران' },
  { value: 'hotel', label: 'فندق' },
  { value: 'transport', label: 'نقل' },
  { value: 'umrah', label: 'عمرة' },
  { value: 'visit', label: 'زيارة' },
  { value: 'tour', label: 'رحلة سياحية' },
  { value: 'general', label: 'استفسار عام' }
];
