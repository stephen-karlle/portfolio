
import { ArrowIcon, CheckIcon, CopyIcon, DownloadIcon, SparklesIcon } from "@icons/index";
import { RotatingText } from "@components/animations/rotating-text";
import { useState } from "react";
import SpinningBorder from "@components/animations/spinning-border";
import GridLines from "@components/effects/grid-lines";
import Glows from "@components/effects/glows";
import Button from "@components/ui/button";
import Link from "next/link";

const squares: Array<[x: number, y: number]> = [[4, 4],[5, 1],[8, 2],[5, 3],[5, 5],[10, 10],[12, 15],[15, 10],[10, 15],];
const glows = [
  'absolute -top-10 right-80 w-[20rem] h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500',
  'absolute -top-24 left-0 w-24 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500',
  'absolute -top-40 left-48 w-48 h-40 rounded-full blur-3xl opacity-50 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500',
  'absolute top-24 left-100 w-24 h-80 rotate-45 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600',
  'absolute -top-20 -right-20 w-[32rem] h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500',
];

const Hero = () => {

  const [isCopied, setIsCopied] = useState(false);
  const email = process.env.NEXT_PUBLIC_EMAIL || ""
  const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN || ""
  const cv = process.env.NEXT_PUBLIC_CV || ""


  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const handleDownload = () => {
    window.open(cv, '_blank')
  };

  return (
    <section className="w-full flex flex-col justify-center items-center pt-20 relative z-20 ">
      <div className="pointer-events-none flex absolute w-full h-full max-w-5xl items-center justify-center">
        <Glows glows={glows} />
      </div>
      
      <GridLines className="[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] h-[50rem] z-0 absolute -top-20" squares={squares} />
      <div className="p-2 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent rounded-full mb-4">
{/*         <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <SpinningBorder />
          <p className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-primary px-3 py-1 font-normal text-xs md:text-sm text-white ">
            <SparklesIcon className="w-4 h-4 fill-gray-200 inline mr-1" />
      
            Working at{" "}    
            <Link href="https://la-rose-noire.com" className="font-medium ml-1 hover:underline underline-offset-2 decoration-white" target="_blank" rel="noopener noreferrer">
              La Rose Noire
            </Link>
          </p>
        </span> */}
      </div>        
      <h1 className="text-5xl sm:text-6xl font-semibold text-center leading-tight z-10 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 ">
          Stephen Karlle
        </span>
        <br />
        <RotatingText 
          className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 -mt-2" 
          words={["Full-Stack Developer", "UI/UX Designer", "Software Engineer", "Graphic Designer"]}
        />
      </h1>


      <p className="text-gray-400 text-center text-base">
        a developer with a passion for utilizing modern technologies.
        <span className="inline sm:block "> and developing solutions that make a difference.</span>
      </p>


      <div className="z-10 flex items-center justify-center gap-4 mt-6">
        <Button onClick={handleDownload} beam>
          <DownloadIcon className="w-4 h-4 stroke-[2.5] stroke-white" />
          Download CV
        </Button>
        <Button 
          variant="secondary"
          onClick={() => window.open(linkedIn, '_blank')}
        >
          LinkedIn
          <ArrowIcon className="w-4 h-4 stroke-[2.5] stroke-white" />
        </Button>
      </div>

      <div className="z-10 flex items-center justify-center gap-2 mt-8">
        <button
          onClick={handleCopy}
          type="button"
          className="flex flex-row items-center justify-center gap-2 cursor-copy"
        >
          {isCopied ? <CheckIcon className="w-4 h-4 stroke-[2.5] stroke-gray-400" /> : <CopyIcon className="w-4 h-4 stroke-[2.5] stroke-gray-400" />}
          <p className="text-gray-400 text-sm tracking-wide font-mono">
            {email}
          </p>
        </button>
      </div>
    </section>
  )
}

export default Hero
