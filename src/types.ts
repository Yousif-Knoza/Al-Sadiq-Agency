export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export type ServiceCategoryKey = 'all' | 'visas' | 'tourism' | 'work_study' | 'gov_clearance';

export interface AgencyServiceItem {
  id: string;
  title: string;
  englishTitle?: string;
  category: ServiceCategoryKey;
  categoryLabel: string;
  badge?: string;
  duration?: string;
  validity?: string;
  processingTime?: string;
  requirements: string[];
  features: string[];
  note?: string;
  image: string;
  whatsappMessage: string;
  posterHighlight?: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  image: string;
  highlight: string;
}

export interface PackageItem {
  id: string;
  number: string;
  title: string;
  description: string;
  included: string[];
  image: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  destination: string;
  serviceType: string;
  travelDate: string;
  passengersCount: string;
  message: string;
}
