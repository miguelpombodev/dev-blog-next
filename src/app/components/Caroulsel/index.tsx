"use client";
import useEmblaCarousel from "embla-carousel-react";
import ImageComponent from "../Image";
import ICarouselImages from "@/lib/interfaces/carouselImages.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: ICarouselImages[];
  imagesWidth: number;
  imagesHeight: number;
}

export default function CaroulselComponent({
  images,
  imagesWidth,
  imagesHeight,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image) => (
          <div className="embla__slide" key={image.title}>
            <ImageComponent
              src={image.file_path}
              alt={image.alt}
              title={image.title}
              width={imagesWidth}
              height={imagesHeight}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
