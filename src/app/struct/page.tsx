import React from "react";
import Link from "next/link";
import { Tree, Folder, File } from "@/components/magicui/file-tree";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function struct() {
  return (
    <div className="relative flex flex-col w-screen h-screen content-div items-center justify-center overflow-hidden bg-black p-20">
      <p className="text-4xl text-white">Understanding</p>
      <SparklesText className="text-blue-500 pb-6" text="File Structure" />
      <Tree
        className="w-1/2 text-white pb-6"
        initialSelectedId="2"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
        ]}
      >
        <Folder element="project-name" value="1">
          <Folder element="app" value="2">
            <File value="3" isSelectable={false}>
              <p>layout.js</p>
              <span className="text-white">
                👈 Global layout for the entire app
              </span>
            </File>
            <File value="4" isSelectable={false}>
              <p>page.js</p>
              <span className="text-white">👈 Home page (&quot;/&quot;)</span>
            </File>
            <Folder element="about" value="5">
              <span className="text-gray-400">
                👆every folder in app/ is a route
              </span>
              <File value="6" isSelectable={false}>
                <p>page.js</p>
                <span className="text-white">
                  👈 served at (&quot;/about&quot;)
                </span>
              </File>
            </Folder>
            <Folder element="contact" value="7">
              <File value="8" isSelectable={false}>
                <p>page.js</p>
              </File>
            </Folder>
            <Folder element="api" value="9">
              <File value="10" isSelectable={false}>
                <p>route.js</p>
                <span className="text-white">
                  👈 API route (&quot;/api&quot;)
                </span>
              </File>
            </Folder>
          </Folder>
          <Folder element="components" value="14" />
          <span className="text-gray-400">👆Reusable UI components</span>
          <Folder element="styles" value="15" />
          <span className="text-gray-400">👆Global styles</span>
          <Folder element="lib" value="16" />
          <span className="text-gray-400">
            👆Utility functions or API calls
          </span>
          <Folder element="public" value="17" />
          <span className="text-gray-400">👆Static assets</span>
          <File value="18" isSelectable={false}>
            <p>middleware.js</p>
            <span className="text-white">
              👈Middleware (for authentication, etc.)
            </span>
          </File>
        </Folder>
      </Tree>
      <Link href="/mediator">
        <RainbowButton className="justify-self-end content-div ">Next</RainbowButton>
      </Link>
    </div>
  );
}
