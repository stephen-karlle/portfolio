import { backendTechnologies, frontendTechnologies } from "@constants/list"
import { OrbitingCircles } from "@components/animations/orbiting-circles"
import Vignette from "@components/effects/vignette"
import Image from "next/image"
import Glows from "@components/effects/glows"
import Compass from "./compass"

const glows = [
  "absolute left-48 top-28 w-32 h-24 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500 blur-3xl opacity-20 z-10 mix-blend-multiply ",
  "absolute right-48 top-28 w-44 h-12 bg-gradient-to-l from-indigo-600 via-indigo-400 to-indigo-600 blur-3xl opacity-30 z-10"
]

const Skills = () => {
  
  return (
      <section className="w-full flex flex-col justify-center items-center max-w-4xl z-10 -mt-20">

        <div className="w-full h-80 overflow-clip relative mt-10 flex items-center justify-center ">
          <Vignette top left right size="32" color=" from-primary to-transparent" className="z-20" />
          <Glows glows={glows} />

          <div className="w-full h-full flex items-center justify-center perspective-[2000px] absolute -top-[24rem]">
            <div className="w-[700px] h-[700px] absolute rotate-x-60 flex items-start justify-center scale-200">
              {/* <div className="w-180 h-180 absolute ring-1 rounded-full ring-gray-900" />  */}
              <OrbitingCircles 
                className="flex items-center justify-center gap-4 w-full h-full p-4 z-30 rotate-6 " 
                radius={350} 
              >
                {Array(3).fill([...frontendTechnologies, ...backendTechnologies]).flat().map((technology, index) => (
                  <Image 
                    onClick={() => window.open(technology.url, "_blank")}
                    key={index}
                    src={technology.logo} 
                    alt="logo"  
                    width={12} 
                    height={12}
                    className="w-3 h-3 object-contain z-40 pointer-events-auto cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out hover:opacity-100 opacity-80"
                  />
                ))}
              </OrbitingCircles>
              <Compass />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills
      
