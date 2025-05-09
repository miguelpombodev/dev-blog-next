import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ImageComponentProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
}

export default function ImageComponent({
  src,
  alt,
  title,
  width = 10,
  height = 10,
  ...props
}: ImageComponentProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      {...props}
    />
  );
}
