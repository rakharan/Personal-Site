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

const photos: Photo[] = [
  { src: 'https://picsum.photos/seed/photo1/800/600', width: 800, height: 600, alt: 'Photo 1' },
  { src: 'https://picsum.photos/seed/photo2/600/800', width: 600, height: 800, alt: 'Photo 2' },
  { src: 'https://picsum.photos/seed/photo3/800/500', width: 800, height: 500, alt: 'Photo 3' },
  { src: 'https://picsum.photos/seed/photo4/700/900', width: 700, height: 900, alt: 'Photo 4' },
  { src: 'https://picsum.photos/seed/photo5/900/600', width: 900, height: 600, alt: 'Photo 5' },
  { src: 'https://picsum.photos/seed/photo6/600/700', width: 600, height: 700, alt: 'Photo 6' },
  { src: 'https://picsum.photos/seed/photo7/800/800', width: 800, height: 800, alt: 'Photo 7' },
  { src: 'https://picsum.photos/seed/photo8/700/500', width: 700, height: 500, alt: 'Photo 8' },
  { src: 'https://picsum.photos/seed/photo9/500/700', width: 500, height: 700, alt: 'Photo 9' },
]

export default function Photography() {
  const [index, setIndex] = useState(-1)

  return (
    <Layout title='Photography | Rakha Randhikatama'>
      <main className='min-h-screen px-[30px] lg:px-[10vw] py-10'>
        <div className='mb-10 text-center lg:text-left' data-aos="fade-up">
          <h1 className='opacity-50 font-semibold tracking-[.5em] text-lg'>GALLERY</h1>
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
