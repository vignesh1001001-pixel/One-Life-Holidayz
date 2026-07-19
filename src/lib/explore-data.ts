// ─── Types ────────────────────────────────────────────────────────────────────

export type TourCategory = {
  slug: string;
  name: string;
  img: string;
  blurb: string;
};

export const TOUR_CATEGORIES: TourCategory[] = [
  {
    slug: "hills",
    name: "Hills",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&auto=format&fit=crop",
    blurb: "Misty green valleys and winding mountain roads.",
  },
  {
    slug: "sky-ride",
    name: "Sky Ride",
    img: "/images/destinations/Skyride.jpg",
    blurb: "Cable cars gliding over snow-capped peaks.",
  },
  {
    slug: "snow-trekking",
    name: "Snow Trekking",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=700&auto=format&fit=crop",
    blurb: "Sunlit summits and crunching snow underfoot.",
  },
  {
    slug: "beach-house",
    name: "Beach House",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop",
    blurb: "Overwater villas on turquoise lagoons.",
  },
  {
    slug: "boat-ride",
    name: "Boat Ride",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=700&auto=format&fit=crop",
    blurb: "Slow houseboat days on quiet backwaters.",
  },
];

// ─── Domestic Destinations ────────────────────────────────────────────────────
// North India: Manali, Shimla, Kedarnath, Kashmir, Leh Ladakh, Varanasi, Maharashtra, Goa, Rajasthan
// South India: Ooty, Kodaikanal, Yercaud, Pondicherry, Valparai, Munnar, Varkala, Alleppey, Vagamon, Wayanad, Coorg, Gokarna

export type DomesticDestination = {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  price: number;
  duration?: string;
};

export const DOMESTIC_DESTINATIONS: DomesticDestination[] = [
  // ── North India ─────────────────────────────────────────────────
  {
    slug: "manali",
    name: "Manali",
    tagline: "Snow & Adventure",
    img: "/images/dashboard/places/Manali.jpeg",
    price: 6499,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "shimla",
    name: "Shimla",
    tagline: "Queen of Hills",
    img: "/images/dashboard/places/Shimla.jpeg",
    price: 5999,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    tagline: "Sacred Himalayan Trek",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 9499,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    tagline: "Heaven on Earth",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 9999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    tagline: "High Altitude Adventure",
    img: "/images/dashboard/places/leh-ladakh.jpeg",
    price: 14999,
    duration: "6 Days 5 Nights",
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    tagline: "Spiritual Soul of India",
    img: "/images/dashboard/places/Varanasi.jpeg",
    price: 9999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    tagline: "Heritage & Hill Stations",
    img: "/images/dashboard/places/Maharashtra.jpeg",
    price: 9999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "goa",
    name: "Goa",
    tagline: "Beach Holiday",
    img: "/images/dashboard/places/Goa.jpeg",
    price: 3499,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Royal Desert Kingdom",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 11999,
    duration: "6 Days 5 Nights",
  },

  // ── South India (Tamil Nadu) ───────────────────────────────────
  {
    slug: "ooty",
    name: "Ooty",
    tagline: "Queen of the Nilgiris",
    img: "/images/dashboard/places/Ooty.jpeg",
    price: 4999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "kodaikanal",
    name: "Kodaikanal",
    tagline: "Princess of Hill Stations",
    img: "/images/dashboard/places/Kodaikanal.jpeg",
    price: 3499,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "yercaud",
    name: "Yercaud",
    tagline: "Princess of Hills",
    img: "/images/dashboard/places/Yercaud.jpeg",
    price: 3499,
    duration: "2 Days 1 Night",
  },
  {
    slug: "pondicherry",
    name: "Pondicherry",
    tagline: "French Riviera of the East",
    img: "/images/dashboard/places/Pondicherry.jpeg",
    price: 2800,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "valparai",
    name: "Valparai & Athirappilly",
    tagline: "Rainforests & Waterfalls",
    img: "/images/dashboard/places/Valparai.jpeg",
    price: 3999,
    duration: "2 Days 1 Night",
  },

  // ── South India (Kerala) ───────────────────────────────────────
  {
    slug: "munnar",
    name: "Munnar",
    tagline: "Tea Gardens & Mist",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 5999,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "varkala",
    name: "Varkala",
    tagline: "Cliffside Beach Escape",
    img: "/images/dashboard/places/Varkala.jpeg",
    price: 4999,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "alleppey",
    name: "Alleppey",
    tagline: "Backwater Bliss",
    img: "/images/dashboard/places/Alleppey.jpeg",
    price: 2499,
    duration: "2 Days 1 Night",
  },
  {
    slug: "vagamon",
    name: "Vagamon",
    tagline: "Meadows & Misty Hills",
    img: "/images/dashboard/places/Vagamon.jpeg",
    price: 3699,
    duration: "2 Days 1 Night",
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    tagline: "Wildlife & Wilderness",
    img: "/images/dashboard/places/Wayanad.jpeg",
    price: 4999,
    duration: "3 Days 2 Nights",
  },

  // ── South India (Karnataka) ─────────────────────────────────────
  {
    slug: "coorg",
    name: "Coorg",
    tagline: "Coffee Country",
    img: "/images/dashboard/places/Coorg.jpeg",
    price: 4999,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    tagline: "Laid-Back Beach Trail",
    img: "/images/dashboard/places/Gokarna.jpeg",
    price: 4999,
    duration: "3 Days 2 Nights",
  },
];

// ─── Popular Destinations ─────────────────────────────────────────────────────

export type PopularDestination = {
  slug: string;
  name: string;
  country: string;
  img: string;
  blurb: string;
};

export const POPULAR_DESTINATIONS: PopularDestination[] = [
  {
    slug: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    img: "/images/destinations/Maldives.jpg",
    blurb: "1,200 coral islands and the clearest water on earth.",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    img: "/images/dashboard/places/Kashmir.jpeg",
    blurb: "Heaven on earth — Dal Lake and snow-laced valleys.",
  },
  {
    slug: "manali",
    name: "Manali",
    country: "India",
    img: "/images/dashboard/places/Manali.jpeg",
    blurb: "Snow peaks, river valleys, and endless adventure in Himachal.",
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    country: "India",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    blurb: "A sacred Himalayan trek to the ancient Shiva shrine.",
  },
  {
    slug: "munnar",
    name: "Munnar",
    country: "India",
    img: "/images/dashboard/places/Munnar.jpeg",
    blurb: "Rolling tea gardens wrapped in cool mountain mist.",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    blurb: "Royal forts, golden deserts, and timeless Rajput heritage.",
  },
];

// ─── Trip Packages ────────────────────────────────────────────────────────────
// North India: Manali, Shimla, Kedarnath, Kashmir, Leh Ladakh, Varanasi, Maharashtra, Goa, Rajasthan
// South India: Ooty, Kodaikanal, Yercaud, Pondicherry, Valparai, Munnar, Varkala, Alleppey, Vagamon, Wayanad, Coorg, Gokarna

export type TripPackage = {
  id: string;
  name: string;
  destination: string;
  duration: string;
  img: string;
  price: number;
  rating: number;
  reviews: number;
  highlights: string[];
  badge?: string;
};

export const TRIP_PACKAGES: TripPackage[] = [
  // ── North India ─────────────────────────────────────────────────
  {
    id: "manali-5d",
    name: "Manali Snow Adventure",
    destination: "Manali, Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    price: 6499,
    rating: 4.8,
    reviews: 389,
    highlights: ["Rohtang Pass", "Solang Valley", "Paragliding", "River Rafting"],
  },
  {
    id: "shimla-4d",
    name: "Shimla Hill Retreat",
    destination: "Shimla, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    img: "/images/dashboard/places/Shimla.jpeg",
    price: 5999,
    rating: 4.6,
    reviews: 165,
    highlights: ["Mall Road", "Kufri", "Jakhoo Temple", "The Ridge"],
  },
  {
    id: "kedarnath-4d",
    name: "Kedarnath Sacred Trek",
    destination: "Kedarnath, Uttarakhand",
    duration: "4 Days / 3 Nights",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 9499,
    rating: 4.8,
    reviews: 210,
    highlights: ["Temple Darshan", "Helicopter Option", "Chorabari Lake", "Gaurikund"],
    badge: "Spiritual",
  },
  {
    id: "kashmir-7d",
    name: "Kashmir Paradise",
    destination: "Kashmir, India",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 9999,
    rating: 4.9,
    reviews: 312,
    highlights: ["Dal Lake Shikara", "Gulmarg Snow", "Pahalgam Valley", "Mughal Gardens"],
    badge: "Best Seller",
  },
  {
    id: "leh-ladakh-6d",
    name: "Leh Ladakh Adventure",
    destination: "Leh Ladakh",
    duration: "6 Days / 5 Nights",
    img: "/images/dashboard/places/leh-ladakh.jpeg",
    price: 14999,
    rating: 4.9,
    reviews: 302,
    highlights: ["Pangong Lake", "Khardung La Pass", "Nubra Valley", "Monastery Tour"],
    badge: "Adventure",
  },
  {
    id: "varanasi-3d",
    name: "Varanasi Spiritual Sojourn",
    destination: "Varanasi, Uttar Pradesh",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Varanasi.jpeg",
    price: 9999,
    rating: 4.8,
    reviews: 321,
    highlights: ["Ganga Aarti", "Kashi Vishwanath Temple", "Boat Ride", "Sarnath Visit"],
    badge: "Spiritual",
  },
  {
    id: "maharashtra-5d",
    name: "Maharashtra Heritage Tour",
    destination: "Maharashtra",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Maharashtra.jpeg",
    price: 9999,
    rating: 4.6,
    reviews: 201,
    highlights: ["Ajanta & Ellora Caves", "Mahabaleshwar", "Lonavala", "Mumbai City Tour"],
  },
  {
    id: "goa-4d",
    name: "Goa Beach Holiday",
    destination: "Goa",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop",
    price: 3499,
    rating: 4.7,
    reviews: 498,
    highlights: ["Baga Beach", "Fort Aguada", "Water Sports", "Old Goa Churches"],
    badge: "Popular",
  },
  {
    id: "rajasthan-5d",
    name: "Royal Rajasthan Tour",
    destination: "Rajasthan, India",
    duration: "6 Days / 5 Nights",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 11999,
    rating: 4.7,
    reviews: 278,
    highlights: ["Jaipur Forts", "Jaisalmer Desert", "Camel Safari", "Udaipur Lakes"],
  },

  // ── South India (Tamil Nadu) ────────────────────────────────────
  {
    id: "ooty-4d",
    name: "Ooty Hill Retreat",
    destination: "Ooty, Tamil Nadu",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.6,
    reviews: 231,
    highlights: ["Nilgiri Toy Train", "Botanical Gardens", "Tea Estates", "Ooty Lake"],
  },
  {
    id: "kodaikanal-4d",
    name: "Kodaikanal Lake Getaway",
    destination: "Kodaikanal, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    img: "/images/dashboard/places/Kodaikannal.jpeg",
    price: 3499,
    rating: 4.7,
    reviews: 289,
    highlights: ["Kodai Lake Boating", "Coaker's Walk", "Pillar Rocks", "Bryant Park"],
  },
  {
    id: "yercaud-3d",
    name: "Yercaud Hill Escape",
    destination: "Yercaud, Tamil Nadu",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=700&auto=format&fit=crop",
    price: 3499,
    rating: 4.5,
    reviews: 156,
    highlights: ["Yercaud Lake", "Coffee Plantations", "Pagoda Point", "Shevaroy Hills"],
  },
  {
    id: "pondicherry-3d",
    name: "Pondicherry Beach & French Quarter",
    destination: "Pondicherry, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&auto=format&fit=crop",
    price: 5499,
    rating: 4.6,
    reviews: 267,
    highlights: ["French Quarter Walk", "Promenade Beach", "Auroville", "Paradise Beach"],
    badge: "Popular",
  },
  {
    id: "valparai-3d",
    name: "Valparai Rainforest Trail",
    destination: "Valparai, Tamil Nadu",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop",
    price: 3999,
    rating: 4.5,
    reviews: 98,
    highlights: ["Tea & Coffee Estates", "Wildlife Sighting", "Waterfalls", "Aliyar Dam"],
  },

  // ── South India (Kerala) ────────────────────────────────────────
  {
    id: "munnar-3d",
    name: "Munnar Tea Trail",
    destination: "Munnar, Kerala",
    duration: "3 Days / 2 Nights",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 5999,
    rating: 4.8,
    reviews: 356,
    highlights: ["Tea Museum", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
  },
  {
    id: "varkala-3d",
    name: "Varkala Cliffside Beach",
    destination: "Varkala, Kerala",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.6,
    reviews: 187,
    highlights: ["Cliff Beach Walk", "Janardhanaswamy Temple", "Sunset Point", "Ayurvedic Spa"],
  },
  {
    id: "alleppey-4d",
    name: "Alleppey Backwater Bliss",
    destination: "Alleppey, Kerala",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 2499,
    rating: 4.8,
    reviews: 412,
    highlights: ["Houseboat Stay", "Backwater Cruise", "Marari Beach", "Village Tour"],
    badge: "Best Seller",
  },
  {
    id: "vagamon-3d",
    name: "Vagamon Meadows Retreat",
    destination: "Vagamon, Kerala",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&auto=format&fit=crop",
    price: 3699,
    rating: 4.5,
    reviews: 134,
    highlights: ["Pine Forest", "Meadows & Hills", "Paragliding", "Murugan Hill Temple"],
  },
  {
    id: "wayanad-4d",
    name: "Wayanad Wildlife & Wilderness",
    destination: "Wayanad, Kerala",
    duration: "3 Days / 2 Nights",
    img: "/images/dashboard/places/Wayanad.jpeg",
    price: 4999,
    rating: 4.7,
    reviews: 244,
    highlights: ["Edakkal Caves", "Wildlife Sanctuary", "Chembra Peak", "Banasura Dam"],
  },

  // ── South India (Karnataka) ──────────────────────────────────────
  {
    id: "coorg-4d",
    name: "Coorg Coffee Country",
    destination: "Coorg, Karnataka",
    duration: "3 Days / 2 Nights",
    img: "/images/dashboard/places/Coorg.jpeg",
    price: 4999,
    rating: 4.7,
    reviews: 254,
    highlights: ["Coffee Plantations", "Abbey Falls", "Raja's Seat", "Dubare Elephant Camp"],
  },
  {
    id: "gokarna-3d",
    name: "Gokarna Beach Trail",
    destination: "Gokarna, Karnataka",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.6,
    reviews: 178,
    highlights: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple", "Beach Trekking"],
  },
];