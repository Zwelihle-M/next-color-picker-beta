"use client";

import { useRef } from "react";

import React from "react";
import Hero from "@/components/hero";
import Guide from "@/components/guide";
import Canvas from "@/components/canvas";
import { Progressbar } from "@/components/ui/progressbar";
import Link from "next/link";

export default function CanvasPage() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <div className="space-y-40 mb-40">
        <Progressbar target={mainRef} />
        <Hero />
        <Guide />
        <Canvas />

        <Link href="/home">Home</Link>
        Made with ❤️ by{" Senzo masango"}
      </div>
    </main>
  );
}




