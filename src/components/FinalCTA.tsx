import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { RequestInfoForm } from "@/components/RequestInfoForm";

export function FinalCTA() {
  return (
    <section
      id="request-info"
      className="relative overflow-hidden py-24 text-white sm:py-28"
    >
      <Image
        src="/images/heavy-bag-power-shot.jpg"
        alt="Fighter mid-punch on a heavy bag with motion and sweat"
        fill
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-ink/82" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-ink/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.18em] text-gold uppercase">
              Get the Full Details
            </p>
            <h2 className="mt-3 text-[2.6rem] leading-[0.95] font-extrabold uppercase sm:text-6xl lg:text-[4.2rem]">
              Your corner is waiting.
            </h2>
            <p className="mt-5 max-w-[48ch] text-lg text-white/78">
              This is just a preview.{" "}
              <strong className="font-bold text-white">
                Leave us your email to unlock the complete itinerary,
                accommodation details, FAQs and the next open camp date.
              </strong>
            </p>
            <p className="mt-4 max-w-[48ch] text-[0.95rem] font-semibold text-gold">
              Spots are limited to keep every camp small — once a date fills,
              it&apos;s closed until next year.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-sm border border-white/15 bg-ink/70 p-8 backdrop-blur-md sm:p-10"
          >
            <RequestInfoForm idPrefix="final" variant="dark" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
