import Layout from '@/components/layout'
import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Fullscreen, Zoom, Slideshow, Thumbnails, Counter } from 'yet-another-react-lightbox/plugins'

interface Photo {
  src: string
  width: number
  height: number
  alt: string
}

export const photos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Quiet lakeside cabin surrounded by trees',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Mountain valley with a river under soft daylight',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Starry night sky over a snowy mountain ridge',
  },
  {
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Forest trail with warm sunlight through the trees',
  },
  {
    src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Still lake reflecting a mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Winding road through a wide desert landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Tall trees forming a green forest canopy',
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    alt: 'Green hills under a dramatic cloudy sky',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    width: 900,
    height: 1200,
    alt: 'Ocean shoreline with turquoise water and pale sand',
  },
]

export default function Photography() {
  const [index, setIndex] = useState(-1)

  return (
    <Layout title='Photography | Rakha Randhikatama'>
      <main className='min-h-screen px-[30px] lg:px-[10vw] py-10'>
        <div className='mb-10 text-center lg:text-left' data-aos="fade-up">
          <p className='opacity-50 font-semibold tracking-[.5em] text-lg'>GALLERY</p>
          <h1 className='font-bold text-3xl lg:text-[40px]'>PHOTOGRAPHY</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <PhotoAlbum
            photos={photos}
            layout="masonry"
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1
              if (containerWidth < 1024) return 2
              return 3
            }}
            spacing={16}
            onClick={({ index }) => setIndex(index)}

          />
        </div>
        <Lightbox
          index={index}
          slides={photos.map(p => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom, Slideshow, Thumbnails, Counter]}
        />
      </main>
    </Layout>
  )
}
