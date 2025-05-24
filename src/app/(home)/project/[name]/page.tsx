"use client";

import { technologyColors } from "@constants/colors";
import { projectsData } from "@data/projects";
import { useParams } from "next/navigation";
import { ShareIcon } from "@icons";
import Button from "@components/ui/button";
import Carousel from "@components/ui/carousel";



export default function ProjectPage() {
  const params = useParams() 

  const project = projectsData.find(
    (project) => {
      const paramName = Array.isArray(params?.name) ? params?.name[0] : params?.name;
      return project.name.toLowerCase().replace(/\s+/g, "-") === paramName?.toLowerCase().replace(/\s+/g, "-");
    }
  );

  return (
    <article className="flex flex-col items-center justify-center w-full z-10">
      {project ? (
        <section className="w-full flex flex-col justify-center items-start pt-20 pb-20 max-w-4xl">
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
              <Button 
                variant="secondary"
                onClick={() => project.link && window.open(project.link, "_blank")}
              >
                Live Preview
                <ShareIcon className="w-4 h-4 stroke-2 stroke-white" />
              </Button>
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
                  className={`px-2 py-1 rounded-lg  text-xs font-medium ${technologyColors[technology]}`}
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
  );
}
