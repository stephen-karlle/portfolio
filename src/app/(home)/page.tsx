"use client"

import Hero from "@modules/hero";
// import Skills from "@modules/skills";
import Projects from "@modules/projects";
import About from "@modules/about";
import Contact from "@modules/contact";


export default function Home() {
  return (
    <>
      <Hero />
{/*       <Skills /> */}
      <Projects />
      <About />
      <Contact />
    </>
  );
}
