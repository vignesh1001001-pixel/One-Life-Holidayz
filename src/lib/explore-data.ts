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

export type DomesticDestination = {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  price: number;
  duration?: string;
};

export const DOMESTIC_DESTINATIONS: DomesticDestination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    tagline: "Heaven on Earth",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 3697,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Snow & Adventure",
    img: "/images/dashboard/places/Manali.jpeg",
    price: 4499,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    tagline: "Sacred Himalayan Trek",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 8999,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "munnar",
    name: "Munnar",
    tagline: "Tea Gardens & Mist",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 1797,
    duration: "2 Days 1 Night",
  },
  {
    slug: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    img: "/images/dashboard/places/Kerala.jpeg",
    price: 1797,
    duration: "6 Days 5 Nights",
  },
  {
    slug: "Manali-Snow-Adventure",
    name: "Manali Snow Adventure",
    tagline: "Snow & Adventure",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    price: 4499,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Royal Desert Kingdom",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 3299,
    duration: "5 Days 4 Nights",
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
    slug: "kerala",
    name: "Kerala",
    country: "India",
    img: "/images/dashboard/places/Kerala.jpeg",
    blurb: "God's own country — backwaters, spice hills, and golden sunsets.",
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
  {
    slug: "manali-snow-adventure",
    name: "Manali Snow Adventure",
    country: "India",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    blurb: "Rohtang Pass, Solang Valley, and adrenaline on the snow.",
  },
];

// ─── Trip Packages ────────────────────────────────────────────────────────────

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
  {
    id: "maldives-5d",
    name: "Maldives Luxury Escape",
    destination: "Maldives",
    duration: "5 Days / 4 Nights",
    img: "/images/destinations/Maldives.jpg",
    price: 45999,
    rating: 4.8,
    reviews: 198,
    highlights: ["Water Villa Stay", "Snorkelling", "Sunset Cruise", "Spa & Wellness"],
    badge: "Luxury",
  },
  {
    id: "kerala-6d",
    name: "Kerala Backwaters",
    destination: "Kerala, India",
    duration: "6 Days / 5 Nights",
    img: "/images/destinations/Kerala.jpg",
    price: 12499,
    rating: 4.7,
    reviews: 445,
    highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Kathakali Show", "Ayurvedic Spa"],
  },
  {
    id: "manali-5d",
    name: "Manali Snow Adventure",
    destination: "Manali, Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    price: 14999,
    rating: 4.8,
    reviews: 389,
    highlights: ["Rohtang Pass", "Solang Valley", "Paragliding", "River Rafting"],
  },
  {
    id: "kashmir-7d",
    name: "Kashmir Paradise",
    destination: "Kashmir, India",
    duration: "7 Days / 6 Nights",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 3697,
    rating: 4.9,
    reviews: 312,
    highlights: ["Dal Lake Shikara", "Gulmarg Snow", "Pahalgam Valley", "Mughal Gardens"],
    badge: "Best Seller",
  },
  {
    id: "kedarnath-4d",
    name: "Kedarnath Sacred Trek",
    destination: "Kedarnath, Uttarakhand",
    duration: "4 Days / 3 Nights",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 8999,
    rating: 4.8,
    reviews: 210,
    highlights: ["Temple Darshan", "Helicopter Option", "Chorabari Lake", "Gaurikund"],
    badge: "Spiritual",
  },
  {
    id: "rajasthan-5d",
    name: "Royal Rajasthan Tour",
    destination: "Rajasthan, India",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 3299,
    rating: 4.7,
    reviews: 278,
    highlights: ["Jaipur Forts", "Jaisalmer Desert", "Camel Safari", "Udaipur Lakes"],
  },
  {
    id: "kishore",
    name: "Royal Rajasthan Tour kishore",
    destination: "Rajasthan, India",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 3299,
    rating: 4.7,
    reviews: 278,
    highlights: ["Jaipur Forts", "Jaisalmer Desert", "Camel Safari", "Udaipur Lakes"],
  },

  // ── Tamil Nadu ──────────────────────────────────────────────────
  {
    id: "ooty-4d",
    name: "Ooty Hill Retreat",
    destination: "Ooty, Tamil Nadu",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=700&auto=format&fit=crop",
    price: 6999,
    rating: 4.6,
    reviews: 231,
    highlights: ["Nilgiri Toy Train", "Botanical Gardens", "Tea Estates", "Ooty Lake"],
  },
  {
    id: "yercaud-3d",
    name: "Yercaud Hill Escape",
    destination: "Yercaud, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.5,
    reviews: 156,
    highlights: ["Yercaud Lake", "Coffee Plantations", "Pagoda Point", "Shevaroy Hills"],
  },
  {
    id: "kodaikanal-4d",
    name: "Kodaikanal Lake Getaway",
    destination: "Kodaikanal, Tamil Nadu",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&auto=format&fit=crop",
    price: 5999,
    rating: 4.7,
    reviews: 289,
    highlights: ["Kodai Lake Boating", "Coaker's Walk", "Pillar Rocks", "Bryant Park"],
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
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop",
    price: 4499,
    rating: 4.5,
    reviews: 98,
    highlights: ["Tea & Coffee Estates", "Wildlife Sighting", "Waterfalls", "Aliyar Dam"],
  },

  // ── Kerala ──────────────────────────────────────────────────────
  {
    id: "munnar-3d",
    name: "Munnar Tea Trail",
    destination: "Munnar, Kerala",
    duration: "3 Days / 2 Nights",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 6499,
    rating: 4.8,
    reviews: 356,
    highlights: ["Tea Museum", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
  },
  {
    id: "alleppey-4d",
    name: "Alleppey Backwater Bliss",
    destination: "Alleppey, Kerala",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 8999,
    rating: 4.8,
    reviews: 412,
    highlights: ["Houseboat Stay", "Backwater Cruise", "Marari Beach", "Village Tour"],
    badge: "Best Seller",
  },
  {
    id: "wayanad-4d",
    name: "Wayanad Wildlife & Wilderness",
    destination: "Wayanad, Kerala",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1591123720164-a903f9048a04?w=700&auto=format&fit=crop",
    price: 7999,
    rating: 4.7,
    reviews: 244,
    highlights: ["Edakkal Caves", "Wildlife Sanctuary", "Chembra Peak", "Banasura Dam"],
  },
  {
    id: "varkala-3d",
    name: "Varkala Cliffside Beach",
    destination: "Varkala, Kerala",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 6999,
    rating: 4.6,
    reviews: 187,
    highlights: ["Cliff Beach Walk", "Janardhanaswamy Temple", "Sunset Point", "Ayurvedic Spa"],
  },
  {
    id: "vagamon-3d",
    name: "Vagamon Meadows Retreat",
    destination: "Vagamon, Kerala",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&auto=format&fit=crop",
    price: 5999,
    rating: 4.5,
    reviews: 134,
    highlights: ["Pine Forest", "Meadows & Hills", "Paragliding", "Murugan Hill Temple"],
  },

  // ── Himachal Pradesh & Ladakh ─────────────────────────────────────
  {
    id: "leh-ladakh-6d",
    name: "Leh Ladakh Adventure",
    destination: "Leh Ladakh",
    duration: "6 Days / 5 Nights",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&auto=format&fit=crop",
    price: 18999,
    rating: 4.9,
    reviews: 302,
    highlights: ["Pangong Lake", "Khardung La Pass", "Nubra Valley", "Monastery Tour"],
    badge: "Adventure",
  },
  {
    id: "himachal-pradesh-6d",
    name: "Himachal Pradesh Explorer",
    destination: "Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    img: "https://images.unsplash.com/photo-1626015365107-9df1a682d3c3?w=700&auto=format&fit=crop",
    price: 15999,
    rating: 4.7,
    reviews: 276,
    highlights: ["Shimla", "Manali", "Kasol", "Dharamshala"],
  },

  // ── Varanasi ──────────────────────────────────────────────────────
  {
    id: "varanasi-3d",
    name: "Varanasi Spiritual Sojourn",
    destination: "Varanasi, Uttar Pradesh",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=700&auto=format&fit=crop",
    price: 7499,
    rating: 4.8,
    reviews: 321,
    highlights: ["Ganga Aarti", "Kashi Vishwanath Temple", "Boat Ride", "Sarnath Visit"],
    badge: "Spiritual",
  },

  // ── Karnataka ─────────────────────────────────────────────────────
  {
    id: "gokarna-3d",
    name: "Gokarna Beach Trail",
    destination: "Gokarna, Karnataka",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&auto=format&fit=crop",
    price: 5499,
    rating: 4.6,
    reviews: 178,
    highlights: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple", "Beach Trekking"],
  },
  {
    id: "coorg-4d",
    name: "Coorg Coffee Country",
    destination: "Coorg, Karnataka",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1600100397608-f00cf6b6b1c9?w=700&auto=format&fit=crop",
    price: 7999,
    rating: 4.7,
    reviews: 254,
    highlights: ["Coffee Plantations", "Abbey Falls", "Raja's Seat", "Dubare Elephant Camp"],
  },

  // ── Maharashtra ───────────────────────────────────────────────────
  {
    id: "maharashtra-5d",
    name: "Maharashtra Heritage Tour",
    destination: "Maharashtra",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=700&auto=format&fit=crop",
    price: 10999,
    rating: 4.6,
    reviews: 201,
    highlights: ["Ajanta & Ellora Caves", "Mahabaleshwar", "Lonavala", "Mumbai City Tour"],
  },
  {
    id: "goa-4d",
    name: "Goa Beach Holiday",
    destination: "Goa",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop",
    price: 8999,
    rating: 4.7,
    reviews: 498,
    highlights: ["Baga Beach", "Fort Aguada", "Water Sports", "Old Goa Churches"],
    badge: "Popular",
  },
];