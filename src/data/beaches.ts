export interface Beach {
  id: string;
  name: string;
  location: string;
  state: string;
  coordinates: [number, number]; // [lat, lng]
  rating: number;
  description: string;
  image: string;
  familyFriendly: boolean;
  waterQuality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  popularity: 'High' | 'Medium' | 'Low';
  facilities: string[];
  tideInfo: {
    high: string;
    low: string;
  };
  sandSample?: {
    totalGrains: number;
    grainSizeDistribution: {
      size: string;
      percentage: number;
    }[];
    gpsLocation: string;
    image: string;
  };
}

export const beaches: Beach[] = [
  {
    id: '1',
    name: 'Marina Beach',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    coordinates: [13.0475, 80.2827],
    rating: 4.5,
    description: 'One of the longest urban beaches in the world, stretching over 13 km along the Bay of Bengal.',
    image: '/fonts/img1.jpg',
    familyFriendly: true,
    waterQuality: 'Good',
    popularity: 'High',
    facilities: ['Parking', 'Restrooms', 'Food Stalls', 'Lifeguards'],
    tideInfo: {
      high: '6:30 AM',
      low: '12:45 PM'
    },
    sandSample: {
      totalGrains: 12450,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 35 },
        { size: 'Medium (0.25-0.5mm)', percentage: 45 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '13.0475°N, 80.2827°E',
      image: '/fonts/img1.jpg'
    }
  },
  {
    id: '2',
    name: 'Calangute Beach',
    location: 'Goa',
    state: 'Goa',
    coordinates: [15.5439, 73.7553],
    rating: 4.3,
    description: 'The queen of beaches in Goa, known for its golden sands and vibrant atmosphere.',
    image: '/fonts/img2.jpg',
    familyFriendly: true,
    waterQuality: 'Excellent',
    popularity: 'High',
    facilities: ['Parking', 'Restrooms', 'Water Sports'],
    tideInfo: {
      high: '7:15 AM',
      low: '1:30 PM'
    },
    sandSample: {
      totalGrains: 15230,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 28 },
        { size: 'Medium (0.25-0.5mm)', percentage: 52 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '15.5439°N, 73.7553°E',
      image: '/fonts/img2.jpg'
    }
  },
  {
    id: '3',
    name: 'Juhu Beach',
    location: 'Mumbai, Maharashtra',
    state: 'Maharashtra',
    coordinates: [19.0884, 72.8267],
    rating: 4.0,
    description: 'A popular beach in Mumbai, famous for its street food and sunset views.',
    image: '/fonts/img3.jpg',
    familyFriendly: true,
    waterQuality: 'Fair',
    popularity: 'High',
    facilities: ['Parking', 'Food Stalls', 'Entertainment'],
    tideInfo: {
      high: '6:45 AM',
      low: '1:00 PM'
    },
    sandSample: {
      totalGrains: 11200,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 42 },
        { size: 'Medium (0.25-0.5mm)', percentage: 38 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '19.0884°N, 72.8267°E',
      image: '/fonts/img3.jpg'
    }
  },
  {
    id: '4',
    name: 'Kovalam Beach',
    location: 'Kerala',
    state: 'Kerala',
    coordinates: [8.4004, 76.9781],
    rating: 4.6,
    description: 'A beautiful crescent-shaped beach with palm-fringed shores and clear waters.',
    image: '/fonts/img4.jpg',
    familyFriendly: true,
    waterQuality: 'Excellent',
    popularity: 'Medium',
    facilities: ['Parking', 'Ayurveda Centers'],
    tideInfo: {
      high: '7:00 AM',
      low: '1:15 PM'
    },
    sandSample: {
      totalGrains: 13890,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 30 },
        { size: 'Medium (0.25-0.5mm)', percentage: 50 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '8.4004°N, 76.9781°E',
      image: '/fonts/img4.jpg'
    }
  },
  {
    id: '5',
    name: 'Puri Beach',
    location: 'Odisha',
    state: 'Odisha',
    coordinates: [19.8135, 85.8312],
    rating: 4.2,
    description: 'A sacred beach near the famous Jagannath Temple, known for its spiritual significance.',
    image: '/fonts/img5.jpeg',
    familyFriendly: true,
    waterQuality: 'Good',
    popularity: 'High',
    facilities: ['Parking', 'Temples', 'Food Stalls', 'Accommodation'],
    tideInfo: {
      high: '6:20 AM',
      low: '12:35 PM'
    },
    sandSample: {
      totalGrains: 14560,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 32 },
        { size: 'Medium (0.25-0.5mm)', percentage: 48 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '19.8135°N, 85.8312°E',
      image: '/fonts/img5.jpeg'
    }
  },
  {
    id: '6',
    name: 'Varkala Beach',
    location: 'Kerala',
    state: 'Kerala',
    coordinates: [8.7379, 76.7163],
    rating: 4.7,
    description: 'A stunning cliff-top beach with natural springs and therapeutic mineral waters.',
    image: '/fonts/img6.jpg',
    familyFriendly: true,
    waterQuality: 'Excellent',
    popularity: 'Medium',
    facilities: ['Cliff Views', 'Ayurveda'],
    tideInfo: {
      high: '7:10 AM',
      low: '1:25 PM'
    },
    sandSample: {
      totalGrains: 13120,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 33 },
        { size: 'Medium (0.25-0.5mm)', percentage: 47 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '8.7379°N, 76.7163°E',
      image: '/fonts/img6.jpg'
    }
  },
  {
    id: '7',
    name: 'Gokarna Beach',
    location: 'Karnataka',
    state: 'Karnataka',
    coordinates: [14.5500, 74.3167],
    rating: 4.4,
    description: 'A serene beach town known for its pristine shores and spiritual atmosphere.',
    image: '/fonts/img1.jpg',
    familyFriendly: true,
    waterQuality: 'Good',
    popularity: 'Medium',
    facilities: ['Temples'],
    tideInfo: {
      high: '7:05 AM',
      low: '1:20 PM'
    },
    sandSample: {
      totalGrains: 12780,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 34 },
        { size: 'Medium (0.25-0.5mm)', percentage: 46 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '14.5500°N, 74.3167°E',
      image: '/fonts/img1.jpg'
    }
  },
  {
    id: '8',
    name: 'Digha Beach',
    location: 'West Bengal',
    state: 'West Bengal',
    coordinates: [21.6286, 87.5100],
    rating: 4.1,
    description: 'A popular beach town on the Bay of Bengal, known for its gentle waves and sandy shores.',
    image: '/fonts/img2.jpg',
    familyFriendly: true,
    waterQuality: 'Good',
    popularity: 'Medium',
    facilities: ['Entertainment'],
    tideInfo: {
      high: '6:50 AM',
      low: '1:05 PM'
    },
    sandSample: {
      totalGrains: 11940,
      grainSizeDistribution: [
        { size: 'Fine (0.062-0.25mm)', percentage: 38 },
        { size: 'Medium (0.25-0.5mm)', percentage: 42 },
        { size: 'Coarse (0.5-2mm)', percentage: 20 }
      ],
      gpsLocation: '21.6286°N, 87.5100°E',
      image: '/fonts/img2.jpg'
    }
  }
];

export const coastalStates = [
  'Gujarat',
  'Maharashtra',
  'Goa',
  'Karnataka',
  'Kerala',
  'Tamil Nadu',
  'Andhra Pradesh',
  'Odisha',
  'West Bengal'
];

