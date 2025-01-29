import { Link } from "react-router";
import { motion } from "framer-motion";

type ProjectCardProps = {
  name: string;
  images: string[];
  tags: string[];
  description: string;
  createdAt: string;
}

const ProjectCard = ({
  name,
  images,
  tags,
  description,
  createdAt
}: ProjectCardProps) => {

  return (
    <Link
      className="w-full rounded-lg flex flex-col justify-start items-center ring-1 ring-gray-900 p-2 relative overflow-hidden"
      to={`/project/${name}`}
    >
      <motion.img
        src={images[0]} 
        alt={name} 
        className="w-full h-32 bg-gray-800 flex-shrink-0 object-cover object-top cursor-pointer rounded-md"
        initial={{ filter: "blur(30px)", opacity: 0 }}
        animate={{ filter: "blur(0)", opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="w-full h-full bg-gray-950 backdrop-blur-xl flex-col flex items-start justify-start p-4">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold tracking-tight text-xl text-start">{name}</h1>
        <div className="flex items-end justify-between w-full flex-1 ">
          <p className="text-gray-400 text-xs mt-2 text-start line-clamp-2">{createdAt}</p>
        </div>
        <p className="text-gray-400 text-sm mt-4 text-start line-clamp-3">{description}</p>
        <div className="flex flex-wrap items-start justify-start gap-2 w-full mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-gray-400 text-xs px-2 py-1 bg-gray-400/10 rounded-md">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard;
