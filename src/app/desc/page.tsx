import React from "react";
import { Particles } from "@/components/magicui/particles";
import Link from 'next/link';

export default function desc() {

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
      <div className="z-10 flex flex-col items-center justify-center w-full h-full text-gray-200">
        <h1 className="text-4xl font-normal">Next.js is a powerful framework built on top of React, designed to help you build fast, scalable, 
            and SEO-friendly web applications. It provides features like <u><Link href="ssr">server-side rendering</Link></u>, <u><Link href="ssg">static site generation</Link></u>, 
            and advanced routing, making it ideal for complex web projects OR if you are looking for <u><span title="Search Engine Optimization">SEO</span></u>.</h1>
      </div>
    </div>
  );
}