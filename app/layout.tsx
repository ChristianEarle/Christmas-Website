// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SnowAnimation from "../components/SnowAnimation";

export const metadata: Metadata = {
  title: "Christmas with Mary Ellen 🎄",
  description: "A tiny custom Christmas site for Mary Ellen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Snow background overlay */}
        <SnowAnimation />

        <div className="shell">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

