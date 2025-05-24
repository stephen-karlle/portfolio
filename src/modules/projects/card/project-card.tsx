import { ArrowIcon } from "@icons/index";
import Button from "@components/ui/button";
import Link from "next/link";
import Image from "next/image";


type ProjectCardProps = {
  name: string;
  images: string[];
  index: number;
}

const ProjectCard = ({
  name,
  images,
  index,
}: ProjectCardProps) => {
  

  return (
    <Link 
      href={{
        pathname: `/project/${name.toLowerCase().replace(/\s+/g, "-")}`,
      }}
      className="group hover:z-50 border-1 border-gray-900 bg-secondary hover:bg-gray-900 hover:border-gray-500 transition-colors w-full backdrop-blur-xl rounded-lg flex-shrink-0 cursor-pointer ease-in-out duration-300 transform-gpu will-change-transform relative flex flex-col items-center justify-center "
    >
      <div 
        className="w-full h-full bg-secondary hover:shadow-3xl hover:shadow-gray-600 border-l-[4px] border-b-[4px] hover:border-gray-200 border-gray-900 hover:shadow-3xl transition-color transition-transform hover:-translate-y-6 hover:translate-x-6 hover:shadow-xl transform-3d relative flex flex-col items-center justify-center rounded-lg animate-float hover:animate-none"
        style={{ animationDelay: `${index + 1}s`}}
      >
        <Image 
          src={images[0]} 
          alt="Project" 
          className="w-full object-cover rounded-t-lg aspect-video" 
          width={400}
          height={400}
        />
        <div className="w-full rounded-b-xl border-t-1 border-gray-900">
          <div className="w-full h-full flex items-center justify-start gap-2 p-4">
            <Image src="/vectors/color/react.svg" alt="React Logo" height={20} width={20} />
            <h1 className="text-gray-200 text-sm">
              {name.toLowerCase().replace(/\s+/g, "-")}.tsx
            </h1>
          </div>
        </div>
        <Button 
          variant="secondary" 
          className="absolute flex items-center justify-center opacity-0 border-l-[4px] border-b-[4px] border-gray-900 group-hover:opacity-100 scale-25 group-hover:scale-110 transition-all duration-300 top-16"
        >
          Open
          <ArrowIcon className="w-4 h-4 stroke-2 stroke-gray-100" />
        </Button>
      </div>
    </Link>
  )
}

export default ProjectCard;
