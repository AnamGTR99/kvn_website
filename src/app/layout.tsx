import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import RootScripts from "@/components/RootScripts";

export const metadata: Metadata = {
  title: "Kevin Chiang",
  description: "Architecture student & content creator at @bykevinchiang",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;1,200;1,300&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <Nav />
        {children}
        <Footer />
        <RootScripts />
      </body>
    </html>
  );
}
