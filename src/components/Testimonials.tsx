import Image from "next/image";
import { Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS: {
  quote: string;
  name: string;
  role?: string;
  place?: string;
}[] = [
  {
    quote:
      "Paloma visited our gym in August of 2024 to give a two-hour seminar, and it was one of our best. She brings high-level experience from having trained and competed out of one the world's best gyms in Phuket Fight Club. Paloma is an excellent teacher, explaining things clearly and in the context of real fighting. It was also nice to have a female perspective for the many women and girls that attended the seminar. Great coach and person, and I would highly recommend training under Paloma and having her for a seminar.",
    name: "James Gregory",
    role: "Owner & Head Coach, Pure Heart Muay Thai",
    place: "El Cajon, California",
  },
  {
    quote:
      "Training with Paloma has been an excellent experience. She has an impressive level of technical knowledge and knows how to share it in a clear, approachable way. Every session is intense, well-structured, and genuinely helps you improve, both technically and in your confidence. She's an outstanding Muay Thai coach, and I would highly recommend her to anyone looking to learn or take their skills to the next level.",
    name: "Marcos MB",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper-dim py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-11 max-w-xl">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] text-gold-deep uppercase">
            What Students &amp; Gym Owners Say
          </p>
          <h2 className="mt-2.5 text-[2.2rem] leading-[0.98] font-extrabold uppercase sm:text-5xl lg:text-[3.4rem]">
            Reviewed by her students. Trusted by their gyms.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal className="relative min-h-64 overflow-hidden rounded-sm sm:col-span-2 sm:min-h-full lg:col-span-1 lg:row-span-2">
            <Image
              src="/images/ringside-candid-smile.jpg"
              alt="Camp participant smiling ringside after training"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[20%_30%]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/0 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 z-10 text-white">
              <p className="font-display text-3xl leading-none font-extrabold text-gold">
                10+
              </p>
              <p className="mt-1 text-sm font-semibold tracking-wide uppercase">
                Countries. Seminars taught worldwide.
              </p>
            </div>
          </Reveal>

          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 70}
              className="flex flex-col justify-between rounded-sm border border-ink/10 bg-white p-6"
            >
              <div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-gold" />
                  ))}
                </div>
                <p className="mt-3.5 text-[0.98rem] leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-linear-to-br from-gold to-gold-deep font-display font-bold text-ink">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  {(t.role || t.place) && (
                    <p className="text-xs text-ink-soft">
                      {[t.role, t.place].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
