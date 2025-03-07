import React from "react";
import Link from "next/link";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

const customCommandMap = {
  npx: "npx create-next-app project-name",
};

export default function gst() {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden bg-black p-20">
      <p className="text-6xl pb-4 text-white">Getting Started</p>
      <p className="text-4xl pb-4 text-white">Creating a Next.js project</p>
      <Link href="term">
        <ScriptCopyBtn
          showMultiplePackageOptions={false}
          codeLanguage="shell"
          lightTheme="nord"
          darkTheme="vitesse-dark"
          commandMap={customCommandMap}
        />
      </Link>
    </div>
  );
}
