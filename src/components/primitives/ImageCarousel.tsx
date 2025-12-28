import { cn } from "../../utils";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string;
  imageClassName?: string;
  autoPlayInterval?: number;
}

const ImageCarousel = ({ 
  images, 
  alt = "Image", 
  className,
  imageClassName,
  autoPlayInterval = 3000 
}: ImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle through images if multiple images exist
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      {/* Image Container */}
      <div className="relative w-full h-32 overflow-hidden rounded-md border border-gray-200">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover",
              "transition-opacity duration-500",
              idx === currentImageIndex ? "opacity-100" : "opacity-0",
              imageClassName
            )}
          />
        ))}
      </div>

      {/* Carousel Indicators - Only show if multiple images */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToImage(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                idx === currentImageIndex
                  ? "bg-blue-600 w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
