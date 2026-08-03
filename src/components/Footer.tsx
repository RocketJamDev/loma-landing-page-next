import Image from "next/image";
import { Camera, Mail, MessageCircle } from "lucide-react";

import { withBasePath } from "@/lib/base-path";

const CAMP_LINKS = [
  { href: "#included", label: "What's Included" },
  { href: "#experience", label: "The Experience" },
  { href: "#coach", label: "Meet Your Coach" },
  { href: "#dates", label: "Camp Dates" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex items-center rounded-md bg-paper p-1.5">
                <Image
                  src={withBasePath("/images/logo.jpg")}
                  alt="Loma Muay Thai — โลมา มวยไทย"
                  width={444}
                  height={298}
                  className="h-12 w-auto rounded-[3px]"
                />
              </span>
              <span className="font-display text-xl font-extrabold tracking-wide uppercase">
                Loma <span className="text-gold">Muay Thai</span>
              </span>
            </div>
            <p className="mt-5 max-w-[38ch] text-[0.95rem] text-white/60">
              A 10-day Muay Thai training camp in Phuket, Thailand — twice-daily
              coaching, boutique resort living, and the island the way locals
              see it.
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.14em] text-white/45 uppercase">
              The Camp
            </p>
            <ul className="mt-4 space-y-2.5">
              {CAMP_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.95rem] font-medium text-white/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.14em] text-white/45 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://instagram.com/lomamuaythai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-[0.95rem] font-medium text-white/75 transition-colors hover:text-gold"
                >
                  <Camera className="size-4 transition-transform group-hover:scale-110" />
                  @lomamuaythai
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lomamuaythai.com"
                  className="group flex items-center gap-2.5 text-[0.95rem] font-medium text-white/75 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 transition-transform group-hover:scale-110" />
                  hello@lomamuaythai.com
                </a>
              </li>
              <li>
                <a
                  href="#request-info"
                  className="group flex items-center gap-2.5 text-[0.95rem] font-medium text-white/75 transition-colors hover:text-gold"
                >
                  <MessageCircle className="size-4 transition-transform group-hover:scale-110" />
                  WhatsApp on request
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-[0.8rem] text-white/45 sm:flex-row">
          <p>
            Phuket, Thailand · © {year} Loma Muay Thai Camp. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white/80">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
