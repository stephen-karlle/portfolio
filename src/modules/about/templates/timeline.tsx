import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export type TimelineProps = {
  date: { start: string; end: string }
  title: string
  organization: {
    name: string
    logo: string | null
    url: string | null
  }
  location: string
  responsibilities: string[]
}

const Timeline = ({ date, title, organization, location, responsibilities }: TimelineProps) => {
  const [expanded, setExpanded] = useState(false)
  const PREVIEW_COUNT = 3

  const visible = expanded ? responsibilities : responsibilities.slice(0, PREVIEW_COUNT)
  const hasMore = responsibilities.length > PREVIEW_COUNT

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-2 md:gap-12 flex-shrink-0">
      <label className="text-gray-500 text-sm font-medium uppercase w-60 tracking-wide my-2">
        {date.start} - {date.end}
      </label>

      <div className="w-full flex flex-col items-start justify-start gap-4">
        {/* Title + org row */}
        <div className="flex flex-col items-start gap-0.5">
  {/* Org name row — image + link only */}
  <div className="flex items-center gap-1.5">
    {organization.logo && (
      <Image
        src={organization.logo}
        alt={organization.name}
        className="w-4 h-4 rounded-full flex-shrink-0"
        width={16}
        height={16}
      />
    )}
    <Link
      href={organization.url || ""}
      target="_blank"
      className="text-gray-500 text-base font-medium hover:underline underline-offset-2"
    >
      {organization.name}
    </Link>
  </div>

  {/* Location on its own line — no wrapping issues */}
  <p className="text-gray-500 text-base font-medium pl-[22px]">
    {location}
  </p>
</div>

        {/* Responsibilities */}
        <ul className="list-none pl-0 space-y-1">
          {visible.map((responsibility, index) => (
            <li key={index} className="text-gray-500 text-sm md:text-base flex gap-2">
              <span className="shrink-0 text-gray-700 font-mono text-xs pt-[3px] w-4 text-right">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>

        {/* See more / less — clean, outside the list */}
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 text-sm font-medium hover:underline underline-offset-2 -mt-2"
          >
            {expanded ? "See less" : `See ${responsibilities.length - PREVIEW_COUNT} more`}
          </button>
        )}
      </div>
    </div>
  )
}

export default Timeline