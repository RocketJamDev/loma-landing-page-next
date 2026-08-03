"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#included", label: "What's Included" },
  { href: "#experience", label: "The Experience" },
  { href: "#coach", label: "Meet Your Coach" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-white/10 bg-ink/92 backdrop-blur-md"
          : "border-b border-transparent bg-linear-to-b from-ink/70 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex items-center rounded-md bg-paper p-1 shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt="Loma Muay Thai — โลมา มวยไทย"
              width={444}
              height={298}
              priority
              className="h-9 w-auto rounded-[3px]"
            />
          </span>
          <span className="hidden font-display text-lg font-extrabold tracking-wide text-white uppercase sm:inline">
            Loma <span className="text-gold">Muay Thai</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8rem] font-semibold tracking-[0.03em] text-white/75 uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#request-info"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-[0.78rem] font-extrabold tracking-[0.04em] text-ink uppercase transition-colors hover:bg-white sm:inline-block"
          >
            Request Info
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-sm text-white lg:hidden"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-semibold tracking-wide text-white/80 uppercase active:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#request-info"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-sm bg-gold px-5 py-3 text-center text-sm font-extrabold tracking-[0.04em] text-ink uppercase"
          >
            Request Info
          </a>
        </nav>
      )}
    </header>
  );
}
