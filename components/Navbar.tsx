// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/advent", label: "Advent Calendar" },
  { href: "/countdown", label: "Countdown" },
  { href: "/tree", label: "Decorate the Tree" },
  { href: "/gallery", label: "Photo Memories" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <div className="brand">
        <div className="brand-title">Christmas with Mary Ellen 🎄</div>
        <div className="brand-sub">A tiny Christmas website made just for you.</div>
      </div>
      <nav>
        {links.map((link) => {
          const active =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-btn${active ? " active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

