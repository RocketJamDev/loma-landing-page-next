import { Reveal } from "@/components/Reveal";

const CAMPS = [
  { label: "Camp 1", window: "Late February" },
  { label: "Camp 2", window: "Early March" },
  { label: "Camp 3", window: "Mid March" },
];

export function Dates() {
  return (
    <section id="dates" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="grid gap-10 rounded-sm bg-gold px-7 py-12 text-ink sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.18em] text-ink/60 uppercase">
              Camp Dates
            </p>
            <h2 className="mt-2.5 text-[2rem] leading-[0.98] font-extrabold uppercase sm:text-5xl">
              Three 10-day camps, late Feb–March.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] text-ink/80">
              Each group is kept small so everyone gets real coaching and
              attention —{" "}
              <strong className="font-bold">
                once a camp fills, that date closes
              </strong>
              .
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {CAMPS.map((camp) => (
                <div key={camp.label} className="text-[0.95rem] font-semibold">
                  — {camp.label} — {camp.window}
                </div>
              ))}
            </div>
          </div>
          <a
            href="#request-info"
            className="inline-block rounded-sm bg-ink px-9 py-4 text-center text-sm font-extrabold tracking-[0.05em] text-white uppercase whitespace-nowrap transition-colors hover:bg-black"
          >
            Request Info
          </a>
        </Reveal>
      </div>
    </section>
  );
}
