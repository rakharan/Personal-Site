export interface Photo {
  src: string
  width: number
  height: number
  alt: string
  title: string
  location: string
}

// Unsplash URL helpers: base photo ID + width param lets us generate
// responsive srcset sizes without hardcoding every URL variant.
function unsplash(id: string, w: number, h: number): { src: string; width: number; height: number } {
  return {
    src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`,
    width: w,
    height: h,
  }
}

export const photos: Photo[] = [
  {
    // Rice terraces — Indonesia
    ...unsplash('1537996194471-e657df975ab4', 600, 400),
    alt: 'Terraced rice fields in Bali under golden afternoon light',
    title: 'Golden Terraces',
    location: 'Bali, Indonesia',
  },
  {
    // Milky Way over a volcanic landscape
    ...unsplash('1464852045489-bccb7d17fe39', 600, 800),
    alt: 'Milky Way arching over a dark volcanic landscape',
    title: 'Galactic Crown',
    location: 'Mount Bromo, Indonesia',
  },
  {
    // Indonesian coastline
    ...unsplash('1559628233-100c798642d4', 600, 400),
    alt: 'Rocky coastline with waves and a dramatic sunset sky',
    title: 'Sunset Reckoning',
    location: 'Pantai Pulang, Indonesia',
  },
  {
    // Tropical jungle path
    ...unsplash('1536514498073-50e69d39c6cf', 600, 800),
    alt: 'Dense tropical jungle path with shafts of morning light',
    title: 'Cathedral of Green',
    location: 'Kalimantan, Indonesia',
  },
  {
    // City at night — Jakarta-style skyline
    ...unsplash('1555400038-63f5ba517a47', 600, 400),
    alt: 'City skyline glowing at night with long-exposure light trails',
    title: 'Insomnia',
    location: 'Jakarta, Indonesia',
  },
  {
    // Volcano crater
    ...unsplash('1588668214407-6ea9a6d8c272', 600, 800),
    alt: 'Volcanic crater lake surrounded by ash-covered ridges',
    title: 'Kawah Ijen',
    location: 'East Java, Indonesia',
  },
  {
    // Stargazing — open sky
    ...unsplash('1516339901601-2e1b62dc0c45', 600, 400),
    alt: 'Star-filled sky over an open field, shot with long exposure',
    title: 'Cold Fire',
    location: 'Sumbawa, Indonesia',
  },
  {
    // Traditional market
    ...unsplash('1555396273-367ea4eb4db5', 600, 400),
    alt: 'Busy traditional market with colourful produce and vendors',
    title: 'Morning Commerce',
    location: 'Yogyakarta, Indonesia',
  },
  {
    // Waterfall in forest
    ...unsplash('1511497584788-876760111969', 600, 800),
    alt: 'Tall waterfall cascading into a moss-covered pool in the forest',
    title: 'Tumpak Sewu',
    location: 'Lumajang, Indonesia',
  },
]
