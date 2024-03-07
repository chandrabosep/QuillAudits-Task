import CTA from "./_components/CTA";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between text-white/90">
      <div className="hero-bg w-full">
        <div className="w-11/12 mx-auto py-2.5">
          <Navbar />
          <Hero />
        </div>
      </div>
      <CTA />
    </main>
  );
}
