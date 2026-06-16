// mockData.js

export const directoryItems = [
  { id: 1, date: '2024 Jun 01', comments: '0 Comments', title: 'Top 10 Business Strategies', logo: 'Gojob' },
  { id: 2, date: '2024 May 14', comments: '0 Comments', title: 'How to Grow Your Startup', logo: 'Gojob' },
  { id: 3, date: '2024 May 11', comments: '0 Comments', title: 'Networking for Success', logo: 'Gojob' },
];

export const jobs = [
  { id: 1, title: 'Non-IT BPM', company: 'Tech Solutions', salary: '₹1,00,000 P.A', location: 'Hyderabad, Telangana', type: 'Full Time' },
  { id: 2, title: 'Security Guard', company: 'SafeGuard Sec', salary: '₹11,000 P.M', location: 'Hyderabad, Telangana', type: 'Full Time' },
  { id: 3, title: 'Electrician', company: 'Volt Works', salary: '₹22,000 P.M', location: 'Hyderabad, Telangana', type: 'Full Time' },
  { id: 4, title: 'Picking and Packing', company: 'Logistics Hub', salary: '₹13,000 Per Hour', location: 'Hyderabad, Telangana', type: 'Full Time' },
];

// Expanded to 15 Categories
export const professionalCategories = [
  { id: 1, icon: '⚡', name: 'Electrician' },
  { id: 2, icon: '🚰', name: 'Plumber' },
  { id: 3, icon: '🧹', name: 'Home Cleaning' },
  { id: 4, icon: '🧘', name: 'Yoga Training' },
  { id: 5, icon: '❄️', name: 'AC Repair' },
  { id: 6, icon: '🐜', name: 'Pest Control' },
  { id: 7, icon: '🎨', name: 'Painters' },
  { id: 8, icon: '🪚', name: 'Carpenters' },
  { id: 9, icon: '📺', name: 'Appliance Repair' },
  { id: 10, icon: '💅', name: 'Beauticians' },
  { id: 11, icon: '📚', name: 'Tutors' },
  { id: 12, icon: '📦', name: 'Packers & Movers' },
  { id: 13, icon: '📷', name: 'Photographers' },
  { id: 14, icon: '🍲', name: 'Catering' },
  { id: 15, icon: '🎉', name: 'Event Planners' },
];

// Detailed professionals spanning multiple categories
export const professionals = [
  // Electricians
  { 
    id: 1, 
    categoryId: 1,
    name: 'Mallesh Yadav', 
    title: 'Electrician', 
    rating: '4.8', 
    avatar: 'https://i.pravatar.cc/150?img=11', 
    isGold: true,
    location: 'Madhapur, Hyderabad',
    phone: '+91 98*** ****45',
    bio: 'Certified electrician with 10 years of experience handling residential wiring, industrial setups, and appliance installation.',
    homePricing: [
      { service: 'Ceiling Fan Installation', price: '₹250' },
      { service: 'Switchboard Repair', price: '₹150' },
      { service: 'Full House Wiring Check', price: '₹800' }
    ],
    commercialPricing: [
      { service: 'Office Server Room Wiring', price: '₹5,000' },
      { service: 'Panel Board Installation', price: '₹3,500' },
      { service: 'Commercial Lighting Setup', price: '₹1,200 / day' }
    ]
  },
  { 
    id: 2, 
    categoryId: 1,
    name: 'Krishna Kumar', 
    title: 'Electrician', 
    rating: '4.6', 
    avatar: 'https://i.pravatar.cc/150?img=12', 
    isGold: false,
    location: 'Banjara Hills, Hyderabad',
    phone: '+91 97*** ****11',
    bio: 'Quick and reliable electrical repairs for homes and small businesses.',
    homePricing: [
      { service: 'Tube light/Bulb fixing', price: '₹100' },
      { service: 'Inverter Installation', price: '₹600' }
    ],
    commercialPricing: [
      { service: 'Shop Wiring Maintenance', price: '₹1,000 / visit' }
    ]
  },

  // Plumbers
  { 
    id: 3, 
    categoryId: 2,
    name: 'Ramesh Singh', 
    title: 'Master Plumber', 
    rating: '4.9', 
    avatar: 'https://i.pravatar.cc/150?img=15', 
    isGold: true,
    location: 'Kukatpally, Hyderabad',
    phone: '+91 88*** ****90',
    bio: 'Expert in leak detection, pipe laying, and modern bathroom fittings.',
    homePricing: [
      { service: 'Tap Leakage Repair', price: '₹200' },
      { service: 'Washbasin Installation', price: '₹500' },
      { service: 'Water Heater Fixing', price: '₹400' }
    ],
    commercialPricing: [
      { service: 'Restaurant Kitchen Piping', price: '₹8,000' },
      { service: 'Commercial Restroom Setup', price: '₹12,000' }
    ]
  },
  { 
    id: 4, 
    categoryId: 2,
    name: 'Syed Ali', 
    title: 'Plumber', 
    rating: '4.5', 
    avatar: 'https://i.pravatar.cc/150?img=16', 
    isGold: false,
    location: 'Secunderabad',
    phone: '+91 77*** ****22',
    bio: 'Fast plumbing fixes and blockage clearing.',
    homePricing: [
      { service: 'Drain Blockage Removal', price: '₹300' },
      { service: 'Flush Tank Repair', price: '₹250' }
    ],
    commercialPricing: [
      { service: 'Office Plumbing AMC', price: '₹2,000 / month' }
    ]
  },

  // Home Cleaning
  { 
    id: 5, 
    categoryId: 3,
    name: 'Lakshmi Reddy', 
    title: 'Cleaning Specialist', 
    rating: '4.8', 
    avatar: 'https://i.pravatar.cc/150?img=20', 
    isGold: true,
    location: 'Gachibowli, Hyderabad',
    phone: '+91 99*** ****88',
    bio: 'Professional deep cleaning services for apartments and villas using eco-friendly products.',
    homePricing: [
      { service: '2 BHK Deep Cleaning', price: '₹2,500' },
      { service: 'Bathroom Deep Clean', price: '₹499' },
      { service: 'Sofa Shampooing', price: '₹300 / seat' }
    ],
    commercialPricing: [
      { service: 'Office Carpet Cleaning', price: '₹15 / sq.ft' },
      { service: 'Post-Construction Cleanup', price: '₹8,000' }
    ]
  },

  // Yoga
  { 
    id: 6, 
    categoryId: 4,
    name: 'Aditi Sharma', 
    title: 'Certified Yoga Instructor', 
    rating: '5.0', 
    avatar: 'https://i.pravatar.cc/150?img=25', 
    isGold: true,
    location: 'Jubilee Hills, Hyderabad',
    phone: '+91 91*** ****44',
    bio: 'Holistic wellness coach specializing in Ashtanga and prenatal yoga.',
    homePricing: [
      { service: 'Personal Home Session', price: '₹800 / hr' },
      { service: 'Monthly Online Plan', price: '₹3,000' }
    ],
    commercialPricing: [
      { service: 'Corporate Wellness Workshop', price: '₹5,000 / session' }
    ]
  },

  // AC Repair
  { 
    id: 7, 
    categoryId: 5,
    name: 'Prakash Rao', 
    title: 'HVAC Technician', 
    rating: '4.7', 
    avatar: 'https://i.pravatar.cc/150?img=33', 
    isGold: false,
    location: 'Ameerpet, Hyderabad',
    phone: '+91 80*** ****12',
    bio: 'Specialist in split and window AC servicing, gas filling, and repairs.',
    homePricing: [
      { service: 'AC General Service', price: '₹499' },
      { service: 'Gas Refill', price: '₹1,500' }
    ],
    commercialPricing: [
      { service: 'Central AC Maintenance', price: '₹4,000' },
      { service: 'Duct Cleaning', price: '₹2,500' }
    ]
  }
];

export const candidateCategories = [
  { id: 1, iconType: 'finance', name: 'Accounting/Finance', jobs: '5 open positions' },
  { id: 2, iconType: 'hr', name: 'Human Resource', jobs: '2 open positions' },
  { id: 3, iconType: 'telecom', name: 'Telecommunication', jobs: '1 open positions' },
  { id: 4, iconType: 'design', name: 'Design/Creative', jobs: '3 open positions' },
];

export const customerReviews = [
  { id: 1, role: 'Seeker', text: 'Good information service gojob information', subtext: 'Anywhere anytime' },
  { id: 2, role: 'Employer', text: 'Excellent platform for finding talent.' },
  { id: 3, role: 'Employer', text: 'Good information services, highly recommended.' },
];

export const products = [
  { id: 1, name: 'Tuna fish', price: 'Rs: 450', oldPrice: 'Rs: 600', category: 'Grocery', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=150&q=80', isSale: true },
  { id: 2, name: 'T-shirts', price: 'Rs: 499', oldPrice: 'Rs: 999', category: 'Fashion & Clothing', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=150&q=80', isSale: true },
  { id: 3, name: 'Sam f 16', price: 'Rs: 198', oldPrice: 'Rs: 300', category: 'Electronics', img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=150&q=80', isSale: true },
  { id: 4, name: 'Sam f 34', price: 'Rs: 98', oldPrice: 'Rs: 150', category: 'Accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80', isSale: true },
];

export const serviceFeatures = [
  { id: 1, title: 'Premium Featured Listing', desc: 'Get your business featured at the top of search results.' },
  { id: 2, title: 'Customer Reviews & Ratings', desc: 'Build reputation with genuine customer feedback and ratings.' },
  { id: 3, title: 'Local SEO Optimization', desc: 'Rank higher in local searches and get more customers.' },
  { id: 4, title: 'Photo & Video Gallery', desc: 'Showcase your products and services with multimedia content.' },
];

export const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
