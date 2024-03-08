import CTA from "./_components/InfoContainer";
import Hero from "./_components/Hero";
import Description from "./_components/Description";
import DescCard from "./_components/DescCard";
import NewsLetter from "./_components/NewsLetter";

export default function Home() {
  return (
    <main className="flex h-full w-full space-y-4 flex-col items-center justify-between ">
      <div className="hero-bg w-full">
        <div className="w-11/12 mx-auto pt-24 text-white/90">
          <Hero />
        </div>
      </div>
      <CTA />
      <Description />
      <NewsLetter />
    </main>
  );
}
