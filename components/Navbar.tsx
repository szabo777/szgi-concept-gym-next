"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Főoldal", href: "/" },
  { label: "Gépparkunk", href: "/gepparkunk" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Edzéstervek", href: "/edzestervek" },
  { label: "Árak", href: "/arak" },
  { label: "Edzőink", href: "/edzoink" },
  { label: "Híreink", href: "/hireink" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="header">
      <Link href="/" className="logoButton" onClick={() => setMenuOpen(false)}>
        <span className="logoIcon">CG</span>
        <span className="logoText">CONCEPT GYM</span>
      </Link>

      <nav className="desktopNav" aria-label="Fő navigáció">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "activeNav" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="menuButton"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
        type="button"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="mobileMenu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={isActive(item.href) ? "activeNav" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}