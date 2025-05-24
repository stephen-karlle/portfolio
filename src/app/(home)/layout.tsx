"use client";

import { ReactNode, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Layout({ children }: { children: ReactNode }) {

  const scrollRef = useRef<HTMLElement>(null);

  return (
    <main 
      ref={scrollRef}
      className="bg-primary antialiased relative h-screen w-screen flex flex-col items-center font-display overflow-y-scroll overflow-x-hidden p-4"
    >
      <Navbar scrollRef={scrollRef} />
        {children}
      <Footer />
    </main>
  )
}