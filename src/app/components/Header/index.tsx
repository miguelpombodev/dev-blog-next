"use client";

import Link from "next/link";
import ImageComponent from "../Image";
import YoutubeSVG from "../../../../public/svgs/youtube-svgrepo-com.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row md:items-center h-auto md:h-20 py-4 px-6 border-b border-secondary">
      <div className="flex justify-between items-center w-full md:hidden">
        <span className="text-xl font-bold">Miguel Pombo</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <nav
        className={`flex-col md:flex md:flex-row md:items-center text-xl w-full md:w-auto ${
          isOpen ? "flex" : "hidden"
        } md:flex mt-4 md:mt-0 gap-6 md:gap-10`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          <span>Home</span>
        </Link>
        <Link href="/portfolio" onClick={() => setIsOpen(false)}>
          <span>Portfolio</span>
        </Link>
        <Link href="/blog" onClick={() => setIsOpen(false)}>
          <span>Blog</span>
        </Link>
        <a
          href="https://www.youtube.com/@miguelpombodev"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
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
      </nav>
    </header>
  );
}
