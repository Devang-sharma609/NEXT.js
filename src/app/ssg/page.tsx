import React from "react";
import Link from 'next/link';
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function ssg() {

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-black p-20 md:shadow-xl">
      {/* Content */}
      <Link href="csr">
      <TypingAnimation className="text-white">Static Site Generation (SSG) is a way to build websites by creating all the pages beforehand. Unlike traditional websites that build pages when a user visits them, SSG creates pages at build time. This means that every page of your website is ready and waiting to be served when someone requests it.</TypingAnimation>;
      </Link>
    </div>
  );
}