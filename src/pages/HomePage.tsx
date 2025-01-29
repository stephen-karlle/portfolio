import {  useState } from "react";
import { frontendTechnologies, backendTechnologies } from "../assets/logos";
import { ArrowIcon, CheckIcon, CopyIcon, DownloadIcon } from "../icons";
import { projectsConstants } from "../constants/projects.constants";
import Marquee from "react-fast-marquee";
import ProjectCard from "../components/ProjectCard";
import LandingLayout from "../layouts/LandingLayout";



const HomePage = () => {
  
  const [isCopied, setIsCopied] = useState(false);
  
  const email = import.meta.env.VITE_EMAIL || ""
  const github = import.meta.env.VITE_GITHUB || ""
  const cv = import.meta.env.VITE_CV || ""

  console.log(email, github, cv);

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

  const handleRedirect = (link: string) => {
    window.open(link, '_blank')
  }


  return (
    <LandingLayout>
      <section className="w-full flex flex-col justify-center items-center pt-20 pb-20 relative z-20">
        <button className="relative inline-flex h-6 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-4" disabled>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] " />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-2 font-normal text-sm text-white backdrop-blur-3xl ">
            Available now
          </span>
        </button>        
        <h1 className="text-5xl sm:text-6xl font-semibold text-center leading-tight z-10 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300">
            Stephen Karlle
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300">
            Full-Stack Developer
          </span>
        </h1>


        <p className="text-gray-400 text-center text-base sm:text-lg z-10 mt-4 leading-7">
          a developer with a passion for utilizing modern technologies.
          <span className="inline sm:block "> and developing solutions that make a difference.</span>
        </p>


        <div className="z-10 flex items-center justify-center gap-4 mt-6">
          <button 
            className="
            cursor-pointer px-4 py-2 bg-violet-500 flex items-center justify-center rounded-lg text-white font-medium text-sm gap-2 transition-all duration-300 ease-in-out 
            hover:bg-gradient-to-b hover:from-violet-500 hover:to-violet-400"
            type="button"
            onClick={handleDownload}
          >
           <DownloadIcon className="w-4 h-4 stroke-[2.5] stroke-white" />
           Download CV
          </button>
          <button 
            className="
            cursor-pointer px-4 py-2 bg-gray-950 flex items-center justify-center rounded-lg text-white font-medium text-sm gap-2 transition-all duration-300 ease-in-out ring-1 ring-gray-900
            hover:bg-gradient-to-b hover:from-gray-950 hover:to-gray-900
            "
            type="button"
            onClick={() => handleRedirect(github)}
          >
           GitHub
           <ArrowIcon className="w-4 h-4 stroke-[2.5] stroke-white" />
          </button>


        </div>

        <div className="z-10 flex items-center justify-center gap-2 mt-8">
          <button
            onClick={handleCopy}
            type="button"
            className="cursor-pointer "
          >
            {isCopied ? <CheckIcon className="w-4 h-4 stroke-[2.5] stroke-gray-400" /> : <CopyIcon className="w-4 h-4 stroke-[2.5] stroke-gray-400" />}
          </button>
          <p className="text-gray-400 text-sm tracking-wide font-mono">
            {email}
          </p>

        </div>


      </section>

      <section className="w-full flex flex-col justify-center items-center pt-20 pb-32">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center leading-tight z-10 tracking-tight">
          Tech-Stack
        </h1>

        <p className="text-gray-400 text-center text-base sm:text-lg z-10 mt-4 leading-7">
          I've had the opportunity to work with cutting-edge technologies and frameworks 
          <span className="inline sm:block "> Here are some of my personal favorites.</span>
        </p>

        <div className="w-full max-w-3xl flex flex-col mt-12 gap-8">
          <Marquee
            pauseOnHover
            gradient
            gradientColor="#030712"
            direction="left"
            >
            {frontendTechnologies.map((technology, index) => (
              <button
                key={index}
                onClick={() => handleRedirect(technology.link)}
                className="flex items-center justify-center gap-4 cursor-pointer w-28 h-20"
              >
                <img src={technology.logo} alt="logo" className="w-10 h-10" />
              </button>
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            gradient
            gradientColor="#030712"
            direction="right"
          >
            {backendTechnologies.map((technology, index) => (
              <button
                key={index}
                onClick={() => handleRedirect(technology.link)}
                className="flex items-center justify-center gap-4 cursor-pointer w-28 h-20"
              >
                <img src={technology.logo} alt="logo" className="w-10 h-10" />
              </button>
            ))}          
          </Marquee>
        </div>
      </section>

      <section className="relative w-full flex flex-col justify-center items-center pb-20 z-10">


        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center leading-tight z-10 tracking-tight">
          Latest Projects
        </h1>
        
        <p className="text-gray-400 text-center text-base sm:text-lg z-10 mt-4 leading-7">
          Over the past 6+ years, I've worked on a wide range of websites, from basic
          <span className="inline sm:block"> websites to complex web systems. Below are some of my recent projects. </span>
        </p>

        <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsConstants.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>


      </section>
    </LandingLayout>
  )
}

export default HomePage