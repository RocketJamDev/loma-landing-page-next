import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/base-path";

export function Quote() {
  return (
    <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden py-24 text-center text-white sm:min-h-[60vh]">
      <Image
        src={withBasePath("/images/cinematic-sparring-silhouette.jpg")}
        alt="Silhouettes of two fighters sparring a high kick at golden hour"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/62" />
      <Reveal className="relative z-10 mx-auto max-w-3xl px-6">
        <p className="font-display text-[1.8rem] leading-[1.15] font-bold text-balance sm:text-5xl">
          &ldquo;Many arrive alone. Almost everyone leaves with lifelong
          friends.&rdquo;
        </p>
        <span className="mt-5 block text-[0.8rem] font-bold tracking-[0.14em] text-gold uppercase">
          The Loma Community
        </span>
      </Reveal>
    </section>
  );
}
