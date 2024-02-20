"use client";

import { useRef } from "react";

import React from "react";
import Hero from "@/components/hero";
import Guide from "@/components/guide";
import Canvas from "@/components/canvas";
import { Progressbar } from "@/components/ui/progressbar";
import Link from "next/link";
import NoticeUpdate from "@/components/notice-update";

export default function CanvasPage() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <div className="space-y-40 mb-40">
        
        <Hero />
        <Guide />
        <Canvas />
        <NoticeUpdate/>

  
      </div>
    </main>
  );
}




