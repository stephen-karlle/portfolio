import { EyeIcon, HeartIcon } from "../icons";


const tagClasses: { [key: string]: string } = {
  "React": "bg-blue-400/10 text-blue-500",
  "NodeJS": "bg-green-400/10 text-green-500",
  "MongoDB": "bg-green-400/10 text-green-500",
  "ExpressJS": "bg-yellow-400/10 text-yellow-500",
  "Cohere": "bg-orange-400/10 text-orange-500",
  "Cloudinary": "bg-purple-400/10 text-purple-500",
  "Vite": "bg-pink-400/10 text-pink-500",
  "Redis": "bg-red-400/10 text-red-500",
  "TailwindCSS": "bg-blue-400/10 text-blue-500",
  "JavaScript": "bg-yellow-400/10 text-yellow-500",
  "TypeScript": "bg-cyan-400/10 text-cyan-500",
  "Vercel": "bg-gray-400/10 text-gray-400",
  "Google Maps": "bg-green-400/10 text-green-500",
  "Render": "bg-gray-400/10 text-gray-400",
  "Socket": "bg-gray-400/10 text-gray-400",
}


type ProjectCardProps = {
  name: string;
  picture: string;
  link: string;
  tags: string[];
  description: string;
  isFeatured: boolean;
}

const ProjectCard = ({
  name,
  picture,
  link,
  tags,
  description,
  isFeatured
}: ProjectCardProps) => {


  const handleRedirect = () => {
    window.open(link, '_blank')
  }


  return (
    <div
      className="w-full h-[32rem] rounded-lg flex flex-col justify-start items-center overflow-clip ring-1 ring-gray-900"
    >
      <img
        src={picture} 
        alt={name} 
        className="w-full h-52 bg-gray-800 flex-shrink-0 object-cover cursor-pointer"
        onClick={handleRedirect} 
      />
      <div className="w-full h-full bg-gray-950 backdrop-blur-xl flex-col flex items-start justify-start p-4" >
        <div className="flex items-start justify-between w-full">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold tracking-tight text-xl text-start">{name}</h1>
          {isFeatured && (
            <span className="px-2 py-1  text-rose-500 rounded-md font-medium text-xs inline-flex items-center justify-center gap-1  ">
              <HeartIcon className="w-4 h-4 stroke-2 fill-rose-500" />
              Top Choice
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-4 text-start">{description}</p>
        <div className="flex items-start justify-start flex-wrap gap-2 mt-4 ">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 rounded-lg  text-xs font-medium ${tagClasses[tag]}`}
              >{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end w-full gap-2 flex-1 items-end">
          <button 
            onClick={handleRedirect}
            className="
            cursor-pointer px-4 py-2 bg-gray-950 flex items-center justify-center rounded-lg text-white font-medium text-sm gap-2 transition-all duration-300 ease-in-out ring-1 ring-gray-900
            hover:bg-gradient-to-b hover:from-gray-950 hover:to-gray-900
            "
            type="button"
          >
            <EyeIcon className="w-4 h-4 stroke-2 stroke-white" />
            Live Preview
          </button>

        </div>
      </div>
      


    </div>
  )
}

export default ProjectCard