import CaroulselComponent from "@/app/components/Carousel";
import path from "path";
import fs from "fs";
import { extractFilenameWithoutExtensions } from "@/util/files.util";
import ICarouselImages from "@/lib/interfaces/carouselImages.interface";

export default function TechStack() {
  function getPublicIcons(): ICarouselImages[] {
    const iconsFromDir = fs.readdirSync(
      path.resolve(path.join("public", "icons"))
    );

    const icons: ICarouselImages[] = iconsFromDir.map((icon) => {
      const filenameWithoutExtension = extractFilenameWithoutExtensions(icon);

      return {
        file_path: `/icons/${icon}`,
        alt: filenameWithoutExtension,
        title: `${extractFilenameWithoutExtensions(icon)}_icon`,
      };
    });

    return icons;
  }

  return (
    <div className="flex flex-col text-center pt-11 pb-7 justify-evenly">
      <h2 className="font-bold text-3xl underline underline-offset-10 decoration-secondary mb-13 md:text-4xl">
        Tools and Frameworks Expertise
      </h2>
      <div className="">
        <CaroulselComponent
          images={getPublicIcons()}
          imagesWidth={80}
          imagesHeight={80}
          autoplay={true}
        />
      </div>
    </div>
  );
}
