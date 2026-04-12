"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#prev-works", label: "Works" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isCurrentPath = (href: string): boolean => {
    const path = href.split("#")[0];
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <nav className={scrolled ? "s" : ""}>
      <Link href="/">
        <Image
          src="/images/logo.jpeg"
          alt="Logo"
          className="nav-logo"
          height={26}
          width={26}
          style={{ opacity: 0.85 }}
        />
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={isCurrentPath(link.href) ? { color: "var(--fg)" } : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link href="/contact" className="nav-cta">
        Get in touch
      </Link>
    </nav>
  );
}
