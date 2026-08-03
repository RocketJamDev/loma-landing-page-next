import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { RequestInfoForm } from "@/components/RequestInfoForm";

const STATS = [
  { num: "10", label: "Days & Nights" },
  { num: "2×", label: "Training / Day" },
  { num: "7+", label: "Coach's Years in Phuket" },
  { num: "Small", label: "Group Size" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-white"
    >
      <Image
        src="/images/hero-fight-club-kick.jpg"
        alt="Fighter throwing a high kick on a heavy bag inside a Phuket Muay Thai gym"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_30%] saturate-[1.05] contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-ink/25" />
      <div className="absolute inset-0 bg-linear-to-r from-ink/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-14 sm:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div>
            <p
              className="animate-fade-up text-[0.72rem] font-bold tracking-[0.2em] text-gold uppercase"
              style={{ animationDelay: "0ms" }}
            >
              Phuket, Thailand — 10 Days
            </p>
            <h1 className="mt-3 text-[3.2rem] leading-[0.92] font-extrabold uppercase sm:text-7xl lg:text-[6.4rem]">
              <span
                className="animate-fade-up block"
                style={{ animationDelay: "80ms" }}
              >
                Train.
              </span>
              <span
                className="animate-fade-up block"
                style={{ animationDelay: "180ms" }}
              >
                Explore.
              </span>
              <span
                className="animate-fade-up block text-gold"
                style={{ animationDelay: "280ms" }}
              >
                Evolve.
              </span>
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-[52ch] text-lg font-medium text-white/85 sm:text-xl"
              style={{ animationDelay: "420ms" }}
            >
              Experience Muay Thai in Thailand{" "}
              <strong className="font-bold text-white">
                without the stress of planning
              </strong>
              , coached by two-time World Champion{" "}
              <strong className="font-bold text-white">Paloma Arranz</strong>.
              From the moment you land, we handle every detail so you can
              focus on training, exploring and making memories that outlast
              the trip.
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "520ms" }}
            >
              <a
                href="#request-info"
                className="group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-extrabold tracking-[0.04em] text-ink uppercase shadow-[0_0_0_0_rgba(227,162,60,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(227,162,60,0.6)]"
              >
                Request Info
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#included"
                className="rounded-sm border border-white/50 px-7 py-4 text-sm font-bold tracking-[0.04em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
              >
                What&apos;s Included
              </a>
            </div>
            <div
              className="animate-fade-up mt-11 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/25 pt-6 sm:flex sm:flex-wrap sm:gap-9"
              style={{ animationDelay: "620ms" }}
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-extrabold text-gold sm:text-[2rem]">
                    {stat.num}
                  </div>
                  <div className="mt-0.5 text-[0.72rem] font-bold tracking-[0.08em] text-white/70 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="request-info-hero"
            className="animate-fade-up hidden rounded-sm border border-white/15 bg-ink/80 p-8 backdrop-blur-md lg:block"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="font-display text-2xl font-extrabold text-white uppercase">
              Request Info
            </h3>
            <p className="mt-1.5 mb-6 text-sm text-white/70">
              Get the full itinerary, pricing &amp; dates sent to your inbox.
            </p>
            <RequestInfoForm idPrefix="hero" variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
