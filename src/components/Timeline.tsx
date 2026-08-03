"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/base-path";

const DAYS = [
  {
    day: 1,
    title: "Arrival",
    caption: "Arrival and a relaxed welcoming dinner with the group.",
    image: "/images/palm-beach-golden-hour.jpg",
    alt: "Golden hour on a Phuket beach with two palm trees",
  },
  {
    day: 2,
    title: "First Session",
    caption: "Muay Thai training and strength & conditioning.",
    image: "/images/solo-kick-red-gym.jpg",
    alt: "Muay Thai fighter throwing a kick during a training session in a Phuket gym",
  },
  {
    day: 4,
    title: "Island Adventure",
    caption: "Hidden beaches and an island adventure day.",
    image: "/images/beach-aerial-boats.jpg",
    alt: "Aerial view of a turquoise island bay with longtail boats",
  },
  {
    day: 6,
    title: "Night Markets",
    caption: "Training, then an evening at Phuket's night markets.",
    image: "/images/night-market-sunset.jpg",
    alt: "Sunset over a Phuket night market lined with lanterns",
  },
  {
    day: 9,
    title: "Farewell",
    caption: "Final session and a group farewell dinner.",
    image: "/images/summit-flag-kick.jpg",
    alt: "Fighter kicking on a Phuket viewpoint with the Thai flag at sunset",
  },
];

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    ["wheel", "touchstart", "pointerdown"].forEach((evt) =>
      el.addEventListener(evt, cancel, { passive: true, once: true })
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.setTimeout(() => {
            if (cancelled) return;
            const start = el.scrollLeft;
            const end = el.scrollWidth - el.clientWidth;
            const duration = 1600 + (end - start) * 3;
            const startTime = performance.now();
            const step = (now: number) => {
              if (cancelled) return;
              const t = Math.min((now - startTime) / duration, 1);
              const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
              el.scrollLeft = start + (end - start) * eased;
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }, 900);
          observer.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      ["wheel", "touchstart", "pointerdown"].forEach((evt) =>
        el.removeEventListener(evt, cancel)
      );
    };
  }, []);

  return (
    <section id="flow" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] text-gold-deep uppercase">
            A Taste of the Ten Days
          </p>
          <h2 className="mt-2.5 text-[2.2rem] leading-[0.98] font-extrabold uppercase sm:text-5xl lg:text-[3.4rem]">
            From first bow to final round.
          </h2>
          <p className="mt-3.5 text-[1.05rem] text-ink-soft">
            Five highlights pulled from the ten days you&apos;ll spend
            training, exploring and recovering in Phuket — the full
            day-by-day itinerary lands in your inbox once you request info.
          </p>
        </Reveal>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-10 flex gap-3.5 overflow-x-auto px-6 pb-3 sm:gap-4 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
      >
        {DAYS.map((d, i) => (
          <Reveal
            key={d.day}
            delay={i * 90}
            className="relative aspect-3/4 w-56 shrink-0 overflow-hidden rounded-sm sm:w-64"
          >
            <Image
              src={withBasePath(d.image)}
              alt={d.alt}
              fill
              sizes="256px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 z-10 text-white">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-gold/80 uppercase">
                Day
              </p>
              <p className="-mt-0.5 font-display text-3xl font-extrabold text-gold">
                {String(d.day).padStart(2, "0")}
              </p>
              <h5 className="mt-1 text-lg font-bold">{d.title}</h5>
              <p className="mt-1 text-sm font-medium text-white/85">
                {d.caption}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
