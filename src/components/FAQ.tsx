import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { withBasePath } from "@/lib/base-path";

const FAQS = [
  {
    q: "Do I need previous Muay Thai experience?",
    a: "Not at all. Every session is adapted to your level — complete beginners and experienced fighters train side by side, each with individual coaching from the team.",
  },
  {
    q: "What's included in the 10 days?",
    a: "Boutique resort accommodation minutes from the gym, two training sessions a day (Muay Thai plus strength & conditioning), recovery (ice baths, pool, spa or Thai massage), and guided exploration days around Phuket. Flights aren't included — we'll send arrival guidance once you request info.",
  },
  {
    q: "How fit do I need to be to join?",
    a: "A base level of general fitness helps, but every session scales to you. Coaches adjust intensity, technique and rest so you can push yourself without being overwhelmed.",
  },
  {
    q: "How big are the groups?",
    a: "We keep each camp intentionally small so everyone gets real coaching, not just a spot in a crowd. Once a camp date fills, it closes until the next one.",
  },
  {
    q: "When do the camps run?",
    a: "Three 10-day camps a year, late February through mid March — camp 1 in late February, camp 2 in early March, and camp 3 in mid March.",
  },
  {
    q: "What should I pack?",
    a: "Comfortable training clothes, hand wraps and a reusable water bottle. Gloves, pads and shin guards are provided at the gym — just bring the will to train twice a day.",
  },
  {
    q: "How do I reserve my spot?",
    a: "Submit the request info form and our team will follow up with the full itinerary, pricing and open dates. A deposit secures your place once you're ready to commit.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] text-gold-deep uppercase">
            Frequently Asked
          </p>
          <h2 className="mt-2.5 text-[2.2rem] leading-[0.98] font-extrabold uppercase sm:text-5xl">
            Good to know before you go.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="relative hidden aspect-4/5 overflow-hidden rounded-sm lg:block">
            <Image
              src={withBasePath("/images/silhouette-high-kick.jpg")}
              alt="Silhouette of two fighters training a high kick"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <Accordion className="border-t border-ink/10">
              {FAQS.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="py-5 font-display text-lg font-bold uppercase sm:text-xl">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pr-8 pb-5 text-[1.02rem] text-ink-soft">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
