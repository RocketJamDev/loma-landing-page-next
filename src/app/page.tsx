import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Included } from "@/components/Included";
import { Experience } from "@/components/Experience";
import { Timeline } from "@/components/Timeline";
import { Quote } from "@/components/Quote";
import { Testimonials } from "@/components/Testimonials";
import { Dates } from "@/components/Dates";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Included />
        <Experience />
        <Timeline />
        <Quote />
        <Testimonials />
        <Dates />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
