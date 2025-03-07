"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Page() {
  const [height, setHeight] = useState(720);
  const [width, setWidth] = useState(1280);
    const router = useRouter();


  useEffect(() => {
    // Function to update height and width
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    // Set initial height and width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push("/struct");
        }, 8000);

        return () => clearTimeout(timeoutId);
    }, [router]);

  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden bg-black p-20">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full h-screen w-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={height}
        width={width}
      />
      <div className="z-10 text-white text-4xl pb-4">
        Follow the setup wizard in the terminal as shown:
      </div>
      <Terminal className="bg-black border-gray-700">
        <TypingAnimation className="text-white">
          C:\Users\admin\Desktop\&gt; npx create-next-app project-name
        </TypingAnimation>
        <TypingAnimation className="text-white">
          &gt; Need to install the following packages:
        </TypingAnimation>
        <TypingAnimation className="text-white">
          &gt; create-next-app@15.1.7
        </TypingAnimation>
        <TypingAnimation className="text-white">
          &gt; 0k to proceed? (y) Y
        </TypingAnimation>
        <AnimatedSpan
          delay={1500}
          className="text-white"
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <span className="text-green-500">✔</span>Would you like to use{" "}
          <span className="text-blue-500">Typescript</span>?(y/N)&gt;&gt;Y
        </AnimatedSpan>
        <AnimatedSpan
          delay={2000}
          className="text-white"
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <span className="text-green-500">✔</span>Would you like to code inside
          a <span className="text-blue-500">&apos;src/&apos; directory</span>
          ?(y/N)&gt;&gt;Y
        </AnimatedSpan>
        <AnimatedSpan
          delay={2500}
          className="text-white"
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <span className="text-green-500">✔</span>Would you like to use{" "}
          <span className="text-blue-500">App Router</span>?(y/N)&gt;&gt;Y
        </AnimatedSpan>
        <AnimatedSpan
          delay={3000}
          className="text-white"
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <span className="text-green-500">✔</span>Would you like to use{" "}
          <span className="text-blue-500">Turbopack</span>?(y/N)&gt;&gt;Y
        </AnimatedSpan>
        <AnimatedSpan
          delay={3500}
          className="text-white"
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <span className="text-green-500">✔</span>Would you like to customize
          the <span className="text-blue-500">import alias</span>?(y/N)&gt;&gt;
          <span className="text-red-500">N</span>
        </AnimatedSpan>
        <AnimatedSpan
          delay={4000}
          className="text-white"
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          ℹ Creating a new Next.js app in{" "}
          <span className="text-green-500">C:\Users\admin\Desktop\project</span>
        </AnimatedSpan>
        <AnimatedSpan delay={6500} className="text-green-500">
          !Success
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}