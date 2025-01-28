import { frontendTechnologies, backendTechnologies } from "../assets/logos";
import { ArrowIcon, CheckIcon, CopyIcon, DownloadIcon } from "../icons";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import GridLines from "../components/GridLines";
import ProjectCard from "../components/ProjectCard";
import SoftGlows from "../components/SoftGlows";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const projects = [
  {
    name: "CloudSmiles",
    picture: "https://res.cloudinary.com/dueebthen/image/upload/v1738056606/works/is4itb0iw8v4mqk1ktm6.png",
    link: "https://www.vsdentalph.com",
    tags: ["React", "MongoDB", "ExpressJS", "Cohere", "Cloudinary", "Redis", "TypeScript", "TailwindCSS"],
    description: "A web-based system that allows patients to book an appointment, view their dental records, and chat with a chatbot assistant for dental questions.",
    isFeatured: true
  },
  {
    name: "SkillSwap",
    picture: "https://res.cloudinary.com/dueebthen/image/upload/v1738057246/works/rrhhaactvfqvqcxkms6h.png",
    link: "https://skillswap-nu.vercel.app/",
    tags: ["React", "NodeJS", "MongoDB", "JavaScript","Vite", "TailwindCSS", "Render", "Google Maps", "Socket"],
    description: "A social media platform that allows users to swap their skills with other users. Users can post their skills and search for other users with the skills they need.",
    isFeatured: true
  },
  {
    name: "DocuTrace",
    picture: "https://res.cloudinary.com/dueebthen/image/upload/v1738057014/works/ovwzw7elxx20o3xvyvha.png",
    link: "https://www.docutrace.website",
    year: "2024",
    tags: ["React", "NodeJS", "TypeScript", "MongoDB","Vite", "Redis", "Vercel"],
    description: "A cloud-based system that allows employees to track their documents, request for documents, and receive notifications for document updates.",
    isFeatured: false
  },
  {
    name: "Pampanga Tourista",
    picture: "https://res.cloudinary.com/dueebthen/image/upload/v1738057016/works/v1i4swzkdza9rjzshpen.png",
    link: "https://www.pampangatourista.com",
    tags: ["React", "NodeJS", "MongoDB", "TypeScript","Vite", "TailwindCSS", "Render", "Google Maps"],
    description: "A web-based system that allows tourists to view tourist spots in Pampanga, view reviews, and book a tour guide.",
    isFeatured: false
  },
  {
    name: "CerTrack",
    picture: "https://res.cloudinary.com/dueebthen/image/upload/v1738066032/works/mo1qnzv8l6nt1itre8dm.png",
    link: "https://www.doh-service.online/login",
    tags: ["React", "NodeJS", "MongoDB", "JavaScript","Vite", "TailwindCSS", "Render"],
    description: "A web-based system that allows users to track their certificates, request for certificates, and receive notifications for training updates.",
    isFeatured: false
  },
]
const LandingPage = () => {
  
  const scrollRef = useRef<HTMLElement>(null);
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
    <main 
      className="bg-gray-950 antialiased h-screen w-screen flex flex-col items-center relative font-display overflow-y-scroll overflow-x-hidden p-4"
      ref={scrollRef}
    >
      {/* Sticky Components */}
      <Navbar scrollRef={scrollRef} />

      {/* Absolute Components */}
      {/* Relative Components */}

      <section className="w-full flex flex-col justify-center items-center pt-20 pb-20 relative ">
        <SoftGlows position="top" />
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

        <GridLines
          width={150}
          height={150}
          x={0}
          y={0}
          className="[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] h-[50rem] "
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
                className="flex items-center justify-center gap-4 cursor-pointer w-32 h-20"
              >
                <img src={technology.logo} alt="logo" className="w-12 h-12" />
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
                className="flex items-center justify-center gap-4 cursor-pointer w-32 h-20"
              >
                <img src={technology.logo} alt="logo" className="w-12 h-12" />
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
          I've develop a variety of websites, from simple system to
          <span className="inline sm:block "> complex web applications. Here are the latest ones. </span>
        </p>

        <p className="text-amber-500 bg-amber-400/10 px-4 text-sm rounded-md text-center mt-4 py-2 inline-block items-center ">
          <span className="font-semibold">Note:{"  "}</span>
          These projects are hosted for free and may take a few seconds to load.
        </p>

        <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>


      </section>


      <section className="max-w-5xl relative w-full flex flex-col justify-center items-center pt-4 ">
        <SoftGlows position="bottom"/>
        <Footer />

      </section>

    </main>
  )
}

export default LandingPage