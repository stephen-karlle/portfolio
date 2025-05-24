import { backendTechnologies, frontendTechnologies, programmingLanguages } from "@constants/list"
import Image from "next/image"
import Link from "next/link"


export type ListProps = {
  header: string
  description: string
  items: string[] 
}


const ListItem = ({ header, description, items }: ListProps ) => {


  return(
    <div className="flex flex-col items-start justify-start gap-2 w-full mb-4">
      <h1 className="text-gray-200 text-lg font-medium tracking-tight flex-shrink-0">{header}</h1>
      <p className="text-gray-500 text-base leading-6">{description}</p>
      <div className="flex flex-wrap items-start justify-start gap-x-2 w-full mt-2">
        {items.map((subItem, subIndex) => {
          const technologies = [...backendTechnologies, ...frontendTechnologies, ...programmingLanguages]
          const { logo, url } = technologies.find(technology => technology.name === subItem) || { name: "", logo: "" }
          
          return (
            url ? (
              <Link href={url} key={subIndex} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 ">
                <Image src={logo} alt="logo" width={24} height={24} />
              </Link>
            ) : null
          )
        })}
      </div>
    </div>
  )
}


export default ListItem