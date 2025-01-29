import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CloseIcon } from '../icons';

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  // const [isViewerOpen, setIsViewerOpen] = useState(false);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const imageAnimation = {
    transform: `translateX(-${currentImage * (100 / images.length)}%)`,
    transition: 'transform 0.3s ease-in-out',
    width: `${images.length * 100}%`,
  };

  const handleSelectImage = (index: number) => {
    setCurrentImage(index);
  };

  // Open image viewer modal when clicking an image
  // const openImageViewer = (index: number) => {
  //   setCurrentImage(index);
  //   setIsViewerOpen(true);
  // };

   // Close image viewer modal
  // const closeImageViewer = () => {
  //   setIsViewerOpen(false);
  // };

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
  }, []);

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

  // Prevent modal click propagation
  // const handleModalClick = (event: React.MouseEvent) => {
  //   event.stopPropagation();
  // };

  return (
    <section className="flex flex-col gap-6 w-full h-fit rounded-lg overflow-hidden">
      {/* Main image carousel */}
      <div
        style={imageAnimation}
        className="flex overflow-clip rounded-lg"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="object-cover aspect-3/2 w-full overflow-hidden h-full rounded-lg"
            // onClick={() => openImageViewer(index)}
          />
        ))}
      </div>

      {/* Thumbnail Navigator */}
      <div
        ref={thumbnailRef}
        className="flex items-center justify-start gap-4 w-full p-2 overflow-x-scroll scrollbar-hidden"
      >
        {images.map((image, index) => (
          <button
            onClick={() => handleSelectImage(index)}
            className="flex-shrink-0"
            key={index}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={`object-cover aspect-3/2 w-16 rounded-sm transition-all duration-200 ease-in-out hover:scale-110
                ${currentImage === index ? 'scale-110 ring-1 ring-white' : ''}`}
            />
          </button>
        ))}
      </div>

      {/* <AnimatePresence>
        {isViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 top-0 left-0"
            onClick={closeImageViewer}  // Close modal when clicking outside the modal content
          >
            <button className="fixed top-4 right-4 p-2 bg-gray-400/20 rounded-full cursor-pointer" 
              onClick={closeImageViewer}
            >
              <CloseIcon className="w-6 h-6 stroke-2 stroke-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="relative flex items-center justify-center p-4 w-full lg:h-full max-w-[1766px]"
              onClick={handleModalClick}  // Prevent modal click propagation
            >
              <img
                src={images[currentImage]}
                alt="Expanded View"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default Carousel;
