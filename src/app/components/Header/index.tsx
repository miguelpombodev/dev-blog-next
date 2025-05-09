import Link from "next/link";
import ImageComponent from "../Image";
import YoutubeSVG from "../../../../public/svgs/youtube-svgrepo-com.svg";

export default function Header() {
  return (
    <header className="flex h-20 items-center py-20 px-50">
      <div className="flex w-1/2 h-10 border-b-secondary border-b-1 items-center justify-evenly text-xl header-links">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/portfolio">
          <span>Portfolio</span>
        </Link>
        <Link href="/blog">
          <span>Blog</span>
        </Link>
        <a
          href="https://www.youtube.com/@miguelpombodev"
          className="flex items-center"
          target="_blank"
        >
          <span className="mr-1.5">Youtube</span>
          <ImageComponent
            src={YoutubeSVG}
            alt="Youtube Icon"
            title="Youtube Icon"
            width={25}
            height={25}
          />
        </a>
      </div>
    </header>
  );
}
