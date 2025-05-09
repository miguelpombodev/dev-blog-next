"use client";
import useEmblaCarousel from "embla-carousel-react";
import ImageComponent from "../Image";
import ICarouselImages from "@/lib/interfaces/carouselImages.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./carouselArrowsButtons";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: ICarouselImages[];
  imagesWidth: number;
  imagesHeight: number;
  autoplay?: boolean;
}

export default function CaroulselComponent({
  images,
  imagesWidth,
  imagesHeight,
  autoplay = false,
}: CarouselProps) {
  Autoplay.globalOptions = {
    active: autoplay,
    delay: 2000,
    stopOnInteraction: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}
