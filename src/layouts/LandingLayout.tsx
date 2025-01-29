import { ReactNode, useRef } from 'react'
import Navbar from '../components/Navbar';
import SoftGlows from '../components/SoftGlows';
import Footer from '../components/Footer';
import GridLines from '../components/GridLines';

const LandingLayout = ({
  children
}:{
  children: ReactNode
}) => {
    const scrollRef = useRef<HTMLElement>(null);
  
  return (
    <main 
      className="bg-gray-950 antialiased relative h-screen w-screen flex flex-col items-center font-display overflow-y-scroll overflow-x-hidden p-4"
      ref={scrollRef}
    >
      {/* .-. */}
      <article className="z-10 w-full flex flex-col items-center justify-center ">
        <Navbar scrollRef={scrollRef} />
        <div>
          {children}
        </div>
        <section className="max-w-5xl relative w-full flex flex-col justify-center items-center pt-4 ">
          <SoftGlows position="bottom"/>
          <Footer />
        </section>
      </article>
      {/* .-. */}
      <SoftGlows position="top" />
      <GridLines
        width={150}
        height={150}
        x={0}
        y={0}
        className="[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] h-[50rem] z-0"
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
      />
    </main>
  )
}

export default LandingLayout