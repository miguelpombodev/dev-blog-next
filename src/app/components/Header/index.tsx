import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-20 items-center py-20 px-50">
      <div className="flex w-1/2 h-10 border-b-secondary border-b-1 justify-evenly text-xl header-links">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Youtube</Link>
      </div>
    </header>
  );
}
