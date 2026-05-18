import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images?: {
    url: string;
    index: number;
  }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images = [] }) => {
  const finalImages =
    images.length > 0
      ? [...images].sort((a, b) => a.index - b.index).map((img) => img.url)
      : [
          "https://placehold.co/600x450/yellow/black?text=Image+1",
          "https://placehold.co/600x450/gray/white?text=Image+2",
          "https://placehold.co/600x450/blue/white?text=Image+3",
        ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? finalImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === finalImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full relative group">
      <div className="w-full relative overflow-hidden rounded-md shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {finalImages.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full shrink-0 object-cover max-h-137.5"
              alt={`Product ${index}`}
            />
          ))}
        </div>
      </div>

      {finalImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:scale-110 transition-transform focus:outline-none z-10"
          >
            <ChevronLeft size={64} strokeWidth={1} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:scale-110 transition-transform focus:outline-none z-10"
          >
            <ChevronRight size={64} strokeWidth={1} />
          </button>
        </>
      )}

      {finalImages.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {finalImages.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setCurrentIndex(index)}
              className={`w-24 h-24 object-cover cursor-pointer border-2 rounded transition-all shrink-0 ${
                currentIndex === index
                  ? "border-[#23A6F0] scale-95 shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              alt={`Thumbnail ${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
