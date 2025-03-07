import React from "react";
import { Meteors } from "@/components/magicui/meteors";
import Link from 'next/link';

export default function ssr() {

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-black p-20 md:shadow-xl">
      <Meteors number={30} />
      <Link href="ssg">
      <div className="z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="text-4xl font-normal">The server generates the complete HTML content of the webpage. This includes injecting JavaScript code and fetching data from APIs. A fully rendered HTML page is sent to your browser to display. </h1>
      </div>
      </Link>
    </div>
  );
}