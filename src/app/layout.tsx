import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mainFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700"],
});

const secondaryFont = localFont({
  src: "../../public/fonts/secondary_font.woff2",
});

export const metadata: Metadata = {
  title: "Miguel Pombo - Dev Blog",
  description:
    "This is my dev blog, here you will find some of my thoughts and knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mainFont.className} ${secondaryFont.className}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
