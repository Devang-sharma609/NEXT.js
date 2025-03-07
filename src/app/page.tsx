import React from "react";
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-black p-20 md:shadow-xl">
      {/* Background Animation */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {/* Content */}
      <Link href="desc">
        <div className="z-10 flex flex-col items-center justify-center w-full h-full text-white">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            What is NEXT.js ?
          </span>
        </div>
      </Link>
    </div>
  );
}
