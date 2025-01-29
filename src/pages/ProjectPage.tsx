import { useParams } from "react-router"
import { technologyColorsConstant } from "../constants/colors.constants"
import { projectsConstants } from "../constants/projects.constants"
import { EyeIcon } from "../icons"
import LandingLayout from "../layouts/LandingLayout"
import Carousel from "../components/Carousel"

const ProjectPage = () => {

  const { name } = useParams()
  const project = projectsConstants.find(project => project.name === name)
  
  return (
    <LandingLayout>
      <article className="flex flex-col items-center justify-center w-full">
        {project ? (
          <section className="w-full flex flex-col justify-center items-start pt-20 pb-20 max-w-3xl z-10">

            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-start leading-tight tracking-tight">
                  {project.name}
                </h1>
                <div className="flex items-center justify-start">    
                  <span className={`w-2 h-2 ${project.isDeployed ? "bg-green-500" : "bg-amber-500"} rounded-full mr-2 flex items-center justify-center relative`}>
                    <span className={`w-2 h-2 ${project.isDeployed ? "bg-green-500" : "bg-amber-500"} rounded-full animate-ping flex-shrink-0 absolute`} />
                  </span>
                  <p className={`${project.isDeployed ? "text-green-500" : "text-amber-500"} text-xs font-medium`}>
                    {project.isDeployed ? "Deployed" : "Prototype"}
                  </p>
                  <span className="w-2 h-[1px] bg-gray-400 rounded-full mx-2 flex items-center justify-center relative" />
                  <p className="text-gray-400 text-xs">
                    {project.createdAt}
                  </p>
                </div>
              </div>
              {project.isDeployed && (
                <button 
                  className="
                  cursor-pointer px-4 py-2 bg-gray-950 flex items-center justify-center rounded-lg text-white font-medium text-sm gap-2 transition-all duration-300 ease-in-out ring-1 ring-gray-900
                  hover:bg-gradient-to-b hover:from-gray-950 hover:to-gray-900
                  "
                  type="button"
                  onClick={() => project.link && window.open(project.link, "_blank")}
                >
                  <EyeIcon className="w-4 h-4 stroke-2 stroke-white" />
                  Visit Site
                </button>
              )}
            </div>
            <div className="flex flex-col w-full gap-2 mt-6">
              <label className="text-gray-400 text-sm">
                Technologies
              </label>
              <div className="flex items-start justify-start flex-wrap gap-2 ">
                {project.technologies.map((technology, index) => (
                  <span 
                    key={index} 
                    className={`px-2 py-1 rounded-lg  text-xs font-medium ${technologyColorsConstant[technology]}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-fit mt-8 overflow-hidden">
              <Carousel images={project.images} />
            </div>
            <div className="flex flex-col items-start justify-center  w-full gap-1 mt-12">

              <h1 className="text-gray-100 text-xl font-medium">
                Key Features
              </h1>
              <ul className="flex flex-col gap-2 w-full list-outside list-disc pl-4 mt-4 ">
                {project.features && project.features.map((feature, index) => (
                  <li key={index} className="text-gray-400 text-base">
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          </section>
        ) : (
          <div className="w-full flex items-center justify-center min-h-[40rem]">
            <p className="text-gray-400 text-lg">Project not found</p>
          </div>
        )}
      </article>
    </LandingLayout>
  )
}

export default ProjectPage