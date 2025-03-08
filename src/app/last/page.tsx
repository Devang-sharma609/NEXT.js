"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function LineShadowTextDemo() {
  return (
    <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl h-screen flex flex-col items-center justify-center bg-black text-white">
      That&apos;s all, but for now. More&apos;s coming
      <LineShadowText className="italic text-blue-400" shadowColor={"white"}>
        soon.
      </LineShadowText>
    </h1>
  );
}
