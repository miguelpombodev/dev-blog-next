import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ImageComponentProps
  extends Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    "width" | "height"
  > {
  src: string;
  alt: string;
  title: string;
}

export default function ImageComponent({
  src,
  alt,
  title,
  ...props
}: ImageComponentProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={10}
      height={10}
      {...props}
    />
  );
}
