export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'schody' | 'altany' | 'detale';
  categoryLabel: string;
  description: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  points: string[];
  iconName: string;
  image: string;
}

export interface WhyUsReason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface QuoteFormData {
  projectType: 'schody' | 'altana' | 'inne';
  material: string;
  dimensions: string;
  location: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
