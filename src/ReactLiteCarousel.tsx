import React, { useEffect, useRef, useState } from 'react'
import './styles.css'

export type CarouselImage = {
  src: string
  alt?: string
}

export type ReactLiteCarouselProps = {
  isInfinite?: boolean
  images?: CarouselImage[]
  leftArrowClass?: string
  rightArrowClass?: string
  maxWidth?: string
  height?: string
}

const defaultImages: CarouselImage[] = [
  {
    src: 'https://via.placeholder.com/1200x600?text=Image+1',
    alt: 'Default Image 1',
  },
  {
    src: 'https://via.placeholder.com/1200x600?text=Image+2',
    alt: 'Default Image 2',
  },
  {
    src: 'https://via.placeholder.com/1200x600?text=Image+3',
    alt: 'Default Image 3',
  },
]

export default function ReactLiteCarousel({
  isInfinite = false,
  images = defaultImages,
  leftArrowClass = '',
  rightArrowClass = '',
  height = '50vh',
}: ReactLiteCarouselProps) {
  const extendedImages = isInfinite ? [images[images.length - 1], ...images, images[0]] : images

  const [index, setIndex] = useState(isInfinite ? 1 : 0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [startX, setStartX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  const carouselRef = useRef<HTMLDivElement>(null)

  const handleArrow = (direction: 'l' | 'r') => {
    if (isInfinite) {
      setIndex((prev) => (direction === 'l' ? prev - 1 : prev + 1))
      setIsTransitioning(true)
    } else {
      setIndex((prev) =>
        direction === 'l' ? (prev === 0 ? images.length - 1 : prev - 1) : prev === images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const handleTransitionEnd = () => {
    if (!isInfinite) return

    if (index === 0) {
      setIsTransitioning(false)
      requestAnimationFrame(() => {
        setIndex(images.length)
      })
    } else if (index === images.length + 1) {
      setIsTransitioning(false)
      requestAnimationFrame(() => {
        setIndex(1)
      })
    }
  }

  // Re-enable transitions after jump completes
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true)
      })
    }
  }, [isTransitioning])

  const finishDrag = (deltaX: number) => {
    const threshold = 50
    if (deltaX > threshold) {
      handleArrow('l')
    } else if (deltaX < -threshold) {
      handleArrow('r')
    }
    setStartX(null)
    setIsDragging(false)
    setDragOffset(0)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startX === null) return
    const delta = e.touches[0].clientX - startX
    setDragOffset(delta)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || startX === null) return
    const deltaX = e.changedTouches[0].clientX - startX
    finishDrag(deltaX)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setStartX(e.clientX)
    setIsDragging(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || startX === null) return
      setDragOffset(e.clientX - startX)
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging || startX === null) return
      const deltaX = e.clientX - startX
      finishDrag(deltaX)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, startX])

  const trackLength = isInfinite ? extendedImages.length : images.length

  return (
    <div className='carouselContainer'>
      <div
        ref={carouselRef}
        className='liteCarousel'
        style={{
          width: `${trackLength * 100}%`,
          height,
          transform: `translateX(calc(${-(100 / trackLength) * index}% + ${isDragging ? dragOffset : 0}px))`,
          transition: isDragging || !isTransitioning ? 'none' : 'transform 0.5s ease-in-out',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onTransitionEnd={handleTransitionEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onDragStart={(e) => e.preventDefault()}
      >
        {extendedImages.map((image, i) => (
          <div key={i} className='imageContainer'>
            <img
              src={image.src}
              alt={image.alt || `Slide ${i + 1}`}
              className='image'
              loading='lazy'
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className='navigation'>
        <i onClick={() => handleArrow('l')} className={`navArrowLeft ${leftArrowClass}`}></i>
        <i onClick={() => handleArrow('r')} className={`navArrowRight ${rightArrowClass}`}></i>
      </div>
    </div>
  )
}
