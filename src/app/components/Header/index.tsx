import Link from "next/link";
import { Youtube } from "@deemlol/next-icons";

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
        <Link href="/portfolio" className="flex items-center">
          <span className="mr-1.5">Youtube</span>
          <Youtube size={24} color="#f03" />
        </Link>
      </div>
    </header>
  );
}
