import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export type TimelineProps = {
  date: {
    start: string
    end: string
  }
  title: string
  organization: {
    name: string
    logo: string | null
    url: string | null
  }
  location: string
  responsibilities: string[]
}

const Timeline = ({date, title, organization, location, responsibilities}: TimelineProps) => {

  const [ expanded, setExpanded ] = useState<boolean>(false)

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-2 md:gap-12 flex-shrink-0">
      <label className="text-gray-500 text-sm font-medium uppercase w-60 tracking-wide my-2">
        {date.start} - {date.end}
      </label>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="flex flex-col items-start justify-start gap-1">
          <h1 className="text-gray-200 text-lg font-medium tracking-tight">{title}</h1>
          <p className="text-gray-500 text-base font-medium">
            {organization.url && (
              <span className="inline-flex items-center mr-2 align-middle">
                <Image 
                  src={organization.logo ?? ""} 
                  alt={organization.name ?? ""} 
                  className="w-4 h-4 rounded-full"
                  width={16}
                  height={16}
                />
              </span>
            )}
            <Link
              href={organization.url || ""}
              target="_blank"
              className="text-gray-500 font-medium hover:underline underline-offset-2"
            >
              {organization.name}
            </Link>
            <span> - {location}</span>
            {/* <span className="hidden md:block">Philippines</span> */}
          </p>
        </div>
        <ul className="list-none list-outside pl-4 space-y-1 relative">
          {responsibilities
            .slice(0, expanded ? responsibilities.length : 10)
            .map((responsibility, index, arr) => {
              const isLast = index === arr.length - 1
              const hasShrunk = isLast && !expanded && responsibilities.length > 5
              return (
                <li key={index} className="text-gray-500 text-sm md:text-base before:absolute before:left-0 before:content-['♦'] before:text-gray-500">
                  {hasShrunk ? responsibility.slice(0, 25) : responsibility}
                  {hasShrunk && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-gray-200 text-sm md:text-base font-medium hover:underline underline-offset-2 ml-2"
                    > 
                      {expanded ? "...See Less" : "...See More"}
                    </button>
                  )}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Timeline