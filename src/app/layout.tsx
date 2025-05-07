import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const mainFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700"],
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
    <html lang="en" className={mainFont.className}>
      <body>{children}</body>
    </html>
  );
}
