"use client";

import { useState, useRef, useEffect } from 'react';
import { cn } from '@lib/utils';
import Image from 'next/image';
import { generateBlurUrl } from '@lib/image';

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const imageAnimation = {
    transform: `translateX(-${currentImage * (100 / images.length)}%)`,
    transition: 'transform 0.3s ease-in-out',
    width: `${images.length * 100}%`,
  };

  const handleSelectImage = (index: number) => {
    setCurrentImage(index);
  };


  // Handle keypress for left/right arrow keys
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }

  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Scroll to the selected thumbnail when currentImage changes
  useEffect(() => {
    if (thumbnailRef.current) {
      const selectedThumbnail = thumbnailRef.current.children[currentImage] as HTMLElement;
      if (selectedThumbnail) {
        thumbnailRef.current.scrollTo({
          left: selectedThumbnail.offsetLeft - thumbnailRef.current.offsetWidth / 2 + selectedThumbnail.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [currentImage]);


  return (
    <section className="flex flex-col gap-6 w-full h-fit rounded-lg overflow-hidden">
      {/* Main image carousel */}
      <div
        style={imageAnimation}
        className="flex overflow-clip rounded-lg"
      >
        {images.map((image, index) => {
          const blurUrl = generateBlurUrl(image);
          return (
            <Image
              height={1000}
              width={1000}
              key={index}
              src={image}
              alt={`Image ${index}`}
              blurDataURL={blurUrl}
              placeholder='blur'
              className="object-cover aspect-3/2 w-full overflow-hidden h-full rounded-lg"
            />
          )
        })}
      </div>

      {/* Thumbnail Navigator */}
      <div
        ref={thumbnailRef}
        className="flex items-center justify-start gap-4 w-full p-2 overflow-x-scroll scrollbar-hidden"
      >
        {images.map((image, index) => {
          const blurUrl = generateBlurUrl(image);
 
          return (
            <button
              onClick={() => handleSelectImage(index)}
              className="flex-shrink-0"
              key={index}
            >
              <Image
                width={100}
                height={100}
                src={image}
                alt={`Thumbnail ${index}`}
                placeholder='blur'
                blurDataURL={blurUrl}
                className={cn("object-cover aspect-3/2 w-16 rounded-sm transition-all duration-200 ease-in-out hover:scale-110", {
                  "scale-110 outline-1 outline-white outline-offset-3": currentImage === index,
                })}
              />
  
            </button>
          )})
        }
      </div>

    </section>
  );
};

export default Carousel;
