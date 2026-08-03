import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

const COACH_STATS = [
  { num: "2×", label: "World Champion" },
  { num: "10+", label: "Int'l Seminars" },
  { num: "20", label: "Pro Fights" },
  { num: "7+", label: "Years in Phuket" },
];

export function Experience() {
  return (
    <section id="experience">
      <Block
        reverse={false}
        eyebrow="01 — Muay Thai Training"
        title="All levels welcome."
        image="/images/group-pad-coaching.jpg"
        alt="Coach holding pads for a student during group Muay Thai training in Phuket"
      >
        <p>
          Train twice a day in a supportive, local environment.{" "}
          <strong className="font-bold text-white">
            Every session is adapted to your level
          </strong>
          , whether you&apos;re new to Muay Thai or already have experience.
          You&apos;ll get the guidance and attention you need to improve all
          trip — you won&apos;t feel like just another number.
        </p>
      </Block>

      <Block
        reverse
        eyebrow="02 — Stay in Paradise"
        title="Phuket resort, minutes away."
        image="/images/resort-pool-garden.jpg"
        alt="Boutique resort pool in a tropical garden near the training gym"
      >
        <p>
          Wake up in a beautiful tropical resort{" "}
          <strong className="font-bold text-white">
            just minutes from the gym
          </strong>
          . Relax by the pool, recharge between sessions, and enjoy the
          balance of hard training and real recovery.
        </p>
      </Block>

      <Block
        reverse={false}
        eyebrow="03 — Discover Real Phuket"
        title="Explore beautiful beaches."
        image="/images/similan-beach-view.jpg"
        alt="Turquoise beach cove near Phuket framed by a palm tree"
      >
        <p>
          Go beyond the tourist hotspots and experience{" "}
          <strong className="font-bold text-white">
            the Phuket most visitors never see
          </strong>
          . Having lived in Thailand for over seven years, we&apos;ll take you
          to our favorite beaches, viewpoints, cafés and hidden gems.
        </p>
      </Block>

      <Block
        reverse
        id="coach"
        eyebrow="04 — Meet Your Coach"
        title="Paloma Arranz."
        image="/images/coach-wai-greeting.jpg"
        alt="Paloma Arranz exchanging a respectful wai greeting with her Thai coach"
        overlay="/images/paloma-portrait.jpg"
      >
        <p>
          Every session during the camp is personally overseen by Paloma
          Arranz, a former professional Muay Thai athlete from Spain who
          spent seven years living and training in Thailand. She experienced
          the fighter&apos;s lifestyle training at one of the sport&apos;s most
          prestigious gyms, Petchyindee Academy, before later fighting out of
          Phuket Fight Club.
        </p>
        <p className="mt-4">
          Under the guidance of Leo Elias, Paloma became a{" "}
          <strong className="font-bold text-white">
            two-time Muay Thai World Champion
          </strong>
          . She has also taught seminars in more than 10 countries and
          coached athletes across the United States, sharing her experience
          with practitioners of all levels.
        </p>
        <p className="mt-4">
          Throughout the camp, she&apos;ll be there to guide you personally and
          make sure you get the most out of every training session.
        </p>
        <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/25 pt-6 sm:flex sm:flex-wrap sm:gap-9">
          {COACH_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-extrabold text-gold">
                {stat.num}
              </div>
              <div className="mt-0.5 text-[0.72rem] font-bold tracking-[0.08em] text-white/70 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Block>
    </section>
  );
}

function Block({
  reverse,
  eyebrow,
  title,
  image,
  alt,
  overlay,
  id,
  children,
}: {
  reverse: boolean;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  overlay?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="flex flex-col border-t border-gold first:border-t-0 lg:flex-row lg:min-h-140"
    >
      <Reveal
        as="div"
        className={cn(
          "relative min-h-80 overflow-hidden lg:w-1/2",
          reverse ? "lg:order-1" : "lg:order-2"
        )}
      >
        <Image
          src={withBasePath(image)}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {overlay && (
          <div className="absolute bottom-5 left-5 h-28 w-28 overflow-hidden rounded-sm shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] ring-2 ring-paper sm:h-36 sm:w-36">
            <Image
              src={withBasePath(overlay)}
              alt="Paloma Arranz portrait"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        )}
      </Reveal>
      <Reveal
        delay={120}
        className={cn(
          "flex flex-col justify-center bg-ink px-7 py-14 text-white sm:px-12 lg:w-1/2 lg:px-16",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
      >
        <p className="text-[0.72rem] font-bold tracking-[0.18em] text-gold uppercase">
          {eyebrow}
        </p>
        <h3 className="mt-3.5 text-3xl font-extrabold text-white uppercase sm:text-4xl">
          {title}
        </h3>
        <div className="mt-4 max-w-[46ch] text-[1.05rem] text-white/78">
          {children}
        </div>
      </Reveal>
    </div>
  );
}

