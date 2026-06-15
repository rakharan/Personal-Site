export interface Photo {
  src: string
  width: number
  height: number
  alt: string
}

export const photos: Photo[] = [
  {
    // Rice terraces — Indonesia
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Terraced rice fields in Bali under golden afternoon light',
  },
  {
    // Milky Way over a volcanic landscape
    src: 'https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Milky Way arching over a dark volcanic landscape',
  },
  {
    // Indonesian coastline
    src: 'https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Rocky coastline with waves and a dramatic sunset sky',
  },
  {
    // Tropical jungle path
    src: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Dense tropical jungle path with shafts of morning light',
  },
  {
    // City at night — Jakarta-style skyline
    src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'City skyline glowing at night with long-exposure light trails',
  },
  {
    // Volcano crater
    src: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Volcanic crater lake surrounded by ash-covered ridges',
  },
  {
    // Stargazing — open sky
    src: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Star-filled sky over an open field, shot with long exposure',
  },
  {
    // Traditional market
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Busy traditional market with colourful produce and vendors',
  },
  {
    // Waterfall in forest
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Tall waterfall cascading into a moss-covered pool in the forest',
  },
]
