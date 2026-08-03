import Image from "next/image";

import { Reveal } from "@/components/Reveal";

const TILES = [
  {
    src: "/images/resort-pool-garden.jpg",
    alt: "Boutique resort pool surrounded by tropical garden in Phuket",
    title: "10 Days",
    caption: "Boutique accommodation, minutes from the gym",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-3",
  },
  {
    src: "/images/pad-sparring-orange.jpg",
    alt: "Muay Thai pad work session inside a Phuket fight gym",
    title: "Muay Thai Training",
    caption: "Elite Thai coaches, supervised by a World Champion",
    className: "col-span-1 row-span-1 lg:col-span-3",
  },
  {
    src: "/images/strength-conditioning-deadlift.jpg",
    alt: "Athlete deadlifting during a strength and conditioning session",
    title: "S&C Training",
    caption: "Build strength, endurance & fight fitness",
    className: "col-span-1 row-span-1 lg:col-span-3",
  },
  {
    src: "/images/solo-kick-red-gym.jpg",
    alt: "Fighter throwing a kick with individual coaching in a Phuket gym",
    title: "Personalized Support",
    caption: "Never just another face in the gym",
    className: "col-span-1 row-span-1 lg:col-span-2",
  },
  {
    src: "/images/night-market-sunset.jpg",
    alt: "Sunset over Phuket old town night market with lanterns",
    title: "Hidden Phuket",
    caption: "The Thailand most visitors never see",
    className: "col-span-1 row-span-1 lg:col-span-2",
  },
  {
    src: "/images/resort-pool-aerial.jpg",
    alt: "Aerial view of resort pool deck used for camp recovery",
    title: "Recovery",
    caption: "Ice baths, pool, spa or Thai massage",
    className: "col-span-1 row-span-1 lg:col-span-2",
  },
];

export function Included() {
  return (
    <section id="included" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-11 max-w-xl">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] text-gold-deep uppercase">
            What&apos;s Included
          </p>
          <h2 className="mt-2.5 text-[2.2rem] leading-[0.98] font-extrabold uppercase sm:text-5xl lg:text-[3.4rem]">
            Show up. Train. Enjoy Phuket.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:auto-rows-[150px] lg:grid-cols-6 lg:auto-rows-[130px]">
          {TILES.map((tile, i) => (
            <Reveal
              key={tile.title}
              delay={i * 60}
              className={tile.className}
            >
              <div className="group relative size-full min-h-[220px] overflow-hidden rounded-sm md:min-h-0">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/5 to-transparent" />
                <div className="absolute inset-x-3.5 bottom-3 z-10 sm:inset-x-4 sm:bottom-3.5">
                  <b className="block font-display text-xl leading-tight font-extrabold text-white uppercase sm:text-2xl">
                    {tile.title}
                  </b>
                  <span className="text-[0.85rem] font-medium text-white/90 sm:text-[0.95rem]">
                    {tile.caption}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-9 max-w-[52ch] border-t border-ink/10 pt-7 font-display text-xl leading-tight font-bold uppercase sm:text-2xl"
        >
          Hosted by Thailand insiders — with over 7 years living in Phuket,
          we&apos;ll help you experience Thailand the way most visitors never
          do.
        </Reveal>
      </div>
    </section>
  );
}
