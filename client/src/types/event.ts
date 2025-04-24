export type EventCategory = 'wedding' | 'birthday' | 'curated';

export type WeddingEventType = 'sangeet' | 'engagement' | 'haldi' | 'reception' | 'wedding';
export type BirthdayEventType = 'kids' | 'adult' | 'milestone' | 'surprise';
export type CuratedEventType = 'neon' | 'garden' | 'pool' | 'lounge';

export type EventType = WeddingEventType | BirthdayEventType | CuratedEventType;

export interface VenueType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface CuisineType {
  id: string;
  name: string;
}

export interface DietaryPreference {
  id: string;
  name: string;
}

export interface FoodPreference {
  cuisines: string[];
  dietary: string[];
}

export interface EventFormData {
  category: EventCategory;
  eventType: EventType;
  date: string;
  invitees: number;
  venueType: string;
  foodPreferences: FoodPreference;
  specialInstructions: string;
}

export interface EventSummary extends EventFormData {
  bookingReference: string;
  venueName: string;
  foodPreferencesText: string;
}

export interface CuratedEvent {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  price: string;
  location: string;
  date: string;
  time: string;
  capacity: string;
  tags: string[];
  whatsIncluded: string[];
  description: string;
  lineup?: string[];
  dressCode?: string;
  entryRules?: string[];
  mapLink?: string;
  hostInfo?: {
    name: string;
    contact?: string;
    image?: string;
  };
}
