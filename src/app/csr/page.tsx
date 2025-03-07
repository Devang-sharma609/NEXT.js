import React from "react";
import Link from "next/link";
import { MorphingText } from "@/components/magicui/morphing-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const texts = [
  "Instead of sending a fully built page",
  "the server sends a basic HTML",
  "and some JavaScript code.",
  "The browser then uses this JavaScript",
  " to fetch data and build the page.",
  "⚠️NOT for large projects.",
];

export default function csr() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-black md:shadow-xl ">
      {/* Content */}
      <MorphingText texts={texts} className="-mt-20 text-white"/>
      <Link href="gst">
        <RainbowButton className="absolute items-center justify-center bottom-8 left-1/2 -translate-x-1/2">Getting Started</RainbowButton>
      </Link>
    </div>
  );
}
