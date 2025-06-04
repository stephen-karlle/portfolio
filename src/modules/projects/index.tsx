"use client"

import { ContainerIcon } from "@icons"
import { projectsData } from "@data/projects"
import { useInView } from "@hooks/useInView"
import { motion } from "motion/react"
import NavigationSidebar from "./sidebar/navigation-sidebar"
import StorageSidebar from "./sidebar/storage-sidebar"
import GridHeader from "./header/grid-header"
import FolderCard from "./card/folder-card"
import ProjectCard from "./card/project-card"
import Header from "./header/header"
import Glows from "@components/effects/glows"

const glows = [
  "absolute rotate-45 right-45 top-45 w-[20rem] h-12 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500",
]

const Projects = () => {

  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="relative w-full flex flex-col justify-center items-center z-10 max-w-4xl gap-20">
      <div className="w-full flex flex-col items-center justify-center"> 
        <div className="flex flex-row items-center justify-center mb-4">
          <ContainerIcon className="w-4 h-4 stroke-2 stroke-red-500" />
          <p className="text-gray-200 text-sm font-medium ml-2 ">
            Projects
          </p>
        </div>
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center leading-tight z-10 tracking-tight">
          Latest Projects
        </h1>

        <p className="text-gray-400 text-center text-sm md:text-base z-10 w-8/12 ">
          I&apos;ve worked on a wide range of websites, from basic
          websites to complex web systemsHere are some of my personal favorites.
        </p>
      </div>

      <div className="relative h-72 md:h-[50rem] w-full flex items-center justify-center transform-3d transform-gpu will-change-transform scale-40 md:scale-75 lg:scale-100 ">
        <div 
          className="p-2 w-[80rem] h-[50rem] bg-gradient-to-r from-secondary to-primary ring-1 ring-gray-900 rounded-xl absolute rotate-25 -rotate-x-45 -rotate-z-45" 
          ref={ref}
        >
          <Glows glows={glows} />
          <div className="flex items-center justify-center rounded-lg w-full h-full relative ">
            <NavigationSidebar inView={inView} />
            <StorageSidebar inView={inView} />
            <motion.div 
              className="w-full h-full flex flex-col"
              initial={{ opacity: 0, y: -180, x: 180, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)"} : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
            >
              <Header />
              <GridHeader name="Folders" />
              <div className="grid grid-cols-3 gap-6 p-6 w-full h-fit">
                {["CloudSmiles", "SkillSwap", "Thomazy"].map((project, index) => {
                  return <FolderCard key={index} project={project} />
                })}
              </div>
              <GridHeader name="Files" />
              <div className="grid grid-cols-3 gap-6 p-6 w-full h-fit">
                {projectsData.map((project, index) => {
                  return <ProjectCard key={index} index={index} name={project.name} images={project.images}/>
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects