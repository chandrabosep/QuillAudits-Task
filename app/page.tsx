import Image from "next/image";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <div className="hero-bg w-full">
        <div className="w-11/12 mx-auto">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
