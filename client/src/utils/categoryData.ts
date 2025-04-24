import { VenueType, CuisineType, DietaryPreference } from "@/types/event";

export const weddingEvents = [
  {
    id: 'sangeet',
    title: 'Sangeet',
    subtitle: 'Music & Dance Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    subtitle: 'Ring Ceremony',
    imageSrc: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa161?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    subtitle: 'Traditional Turmeric Ritual',
    imageSrc: 'https://images.unsplash.com/photo-1631224872779-4d1dd385d257?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'reception',
    title: 'Reception',
    subtitle: 'Wedding Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'wedding',
    title: 'Wedding Ceremony',
    subtitle: 'Main Marriage Event',
    imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  }
];

export const birthdayEvents = [
  {
    id: 'kids',
    title: 'Kids Birthday',
    subtitle: 'Fun-filled Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'adult',
    title: 'Adult Birthday',
    subtitle: 'Sophisticated Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'milestone',
    title: 'Milestone Birthday',
    subtitle: 'Special Age Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  },
  {
    id: 'surprise',
    title: 'Surprise Party',
    subtitle: 'Secret Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
  }
];

export const curatedEvents = [
  {
    id: 'neon',
    title: 'Neon Nightclub Experience',
    subtitle: 'An exclusive nightclub takeover with VIP amenities',
    imageSrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    price: '₹4,500',
    location: 'Pulse Nightclub, Mumbai',
    date: 'June 29, 2023',
    time: '9:00 PM onwards',
    capacity: 'Up to 150 guests',
    tags: ['VIP Experience', 'Premium Service'],
    whatsIncluded: [
      'VIP booth reservations',
      'Premium bottle service',
      'Featured DJ lineup',
      'Immersive light show',
      'Midnight canapés',
      'VIP entrance'
    ],
    description: 'An exclusive nightclub takeover with VIP booths, premium bottle service, top DJs, and immersive light shows.'
  },
  {
    id: 'garden',
    title: 'Secret Garden Masquerade',
    subtitle: 'An enchanting evening in a lush garden setting',
    imageSrc: 'https://images.unsplash.com/photo-1520869309377-88c9274a27c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    price: '₹6,200',
    location: 'The Enchanted Estate, Delhi',
    date: 'September 16, 2023',
    time: '7:00 PM - 1:00 AM',
    capacity: 'Up to 120 guests',
    tags: ['Masquerade', 'Luxury Dining'],
    whatsIncluded: [
      'Welcome champagne',
      'Gourmet dinner service',
      'Live classical music',
      'Masquerade masks',
      'Professional photographers',
      'Exclusive garden access'
    ],
    description: 'An enchanting evening in a lush garden setting with mysterious masked guests, champagne fountain, and gourmet dining experience.'
  },
  {
    id: 'pool',
    title: 'Sunset Pool Party',
    subtitle: 'Summer vibes with infinity pool access',
    imageSrc: 'https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    price: '₹3,500',
    location: 'Azure Sky Resort, Goa',
    date: 'July 15, 2023',
    time: '3:00 PM - 10:00 PM',
    capacity: 'Up to 200 guests',
    tags: ['Day Party', 'Beach Access'],
    whatsIncluded: [
      'Infinity pool access',
      'Beachside cabanas',
      'Tropical cocktail bar',
      'International DJ lineup',
      'Sunset photo sessions',
      'Poolside food service'
    ],
    description: 'Enjoy the ultimate summer experience with infinity pool access, beachfront views, premium cocktails, and world-class DJs as the sun sets over the Arabian Sea.'
  },
  {
    id: 'lounge',
    title: 'Exclusive Rooftop Soirée',
    subtitle: 'Elegant city views with premium drinks',
    imageSrc: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    price: '₹5,800',
    location: 'Skyview Towers, Bangalore',
    date: 'August 12, 2023',
    time: '8:00 PM onwards',
    capacity: 'Up to 80 guests',
    tags: ['Premium Experience', 'Exclusive'],
    whatsIncluded: [
      'Private elevator access',
      'Curated whiskey tasting',
      'Gourmet appetizers',
      'Live jazz ensemble',
      'Cigar lounge',
      'City view terrace'
    ],
    description: 'An intimate rooftop gathering featuring curated whiskey tasting, live jazz, gourmet appetizers, and breathtaking panoramic views of the city skyline.'
  }
];

export const eventCategories = [
  {
    id: 'wedding',
    title: 'Plan Your Wedding',
    subtitle: 'Get Started',
    imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    gradientClass: 'bg-purple-dark bg-opacity-60',
  },
  {
    id: 'birthday',
    title: 'Birthday Parties',
    subtitle: 'Get Started',
    imageSrc: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    gradientClass: 'coral-gradient opacity-70',
  },
  {
    id: 'curated',
    title: 'Curated Parties',
    subtitle: 'Explore',
    imageSrc: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80',
    gradientClass: 'bg-gold-dark bg-opacity-60',
  }
];

export const configSteps = [
  { id: 1, label: 'Date' },
  { id: 2, label: 'Invitees' },
  { id: 3, label: 'Venue' },
  { id: 4, label: 'Food' },
  { id: 5, label: 'Instructions' }
];

export const venueTypes: VenueType[] = [
  {
    id: 'banquet-hall',
    name: 'Banquet Hall',
    description: 'Indoor facility',
    icon: 'fa-building'
  },
  {
    id: 'garden',
    name: 'Garden',
    description: 'Outdoor setting',
    icon: 'fa-tree'
  },
  {
    id: 'hotel',
    name: 'Hotel',
    description: 'Luxury venue',
    icon: 'fa-hotel'
  },
  {
    id: 'farmhouse',
    name: 'Farmhouse',
    description: 'Spacious & private',
    icon: 'fa-home'
  }
];

export const cuisineTypes: CuisineType[] = [
  { id: 'north-indian', name: 'North Indian' },
  { id: 'south-indian', name: 'South Indian' },
  { id: 'chinese', name: 'Chinese' },
  { id: 'continental', name: 'Continental' },
  { id: 'mughlai', name: 'Mughlai' },
  { id: 'italian', name: 'Italian' }
];

export const dietaryPreferences: DietaryPreference[] = [
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'non-vegetarian', name: 'Non-Vegetarian' },
  { id: 'jain', name: 'Jain' },
  { id: 'vegan', name: 'Vegan' }
];

export const getEventDetails = (category: string, eventType: string) => {
  if (category === 'wedding') {
    return weddingEvents.find(event => event.id === eventType);
  } else if (category === 'birthday') {
    return birthdayEvents.find(event => event.id === eventType);
  } else if (category === 'curated') {
    return curatedEvents.find(event => event.id === eventType);
  }
  return null;
};

export const getVenueName = (venueId: string) => {
  const venue = venueTypes.find(v => v.id === venueId);
  return venue ? venue.name : '';
};

export const getFoodPreferenceText = (cuisines: string[], dietary: string[]) => {
  const selectedCuisines = cuisines.map(c => {
    const cuisine = cuisineTypes.find(ct => ct.id === c);
    return cuisine ? cuisine.name : '';
  }).filter(Boolean);

  const selectedDietary = dietary.map(d => {
    const diet = dietaryPreferences.find(dp => dp.id === d);
    return diet ? diet.name : '';
  }).filter(Boolean);

  const result = [];
  if (selectedCuisines.length > 0) {
    result.push(selectedCuisines.join(', '));
  }
  if (selectedDietary.length > 0) {
    result.push(selectedDietary.join(', '));
  }

  return result.join(' - ');
};
