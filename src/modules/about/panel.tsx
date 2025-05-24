import Timeline, { TimelineProps } from "./templates/timeline"
import ListItem, { ListProps } from "./templates/list"
import { informationColors } from "@constants/colors"
import { IconProps } from "@icons/icon"
import { JSX } from "react"
import { cn } from "@lib/utils"
import HighlightText from "@components/animations/highlight-text"
import Skeleton from "./skeleton"

export type PanelProps<T extends "timeline" | "list"> = {
  name: string
  title: string
  description: string
  highlights: string[]
  icon: (props: IconProps) => JSX.Element
  color: "violet" | "indigo" | "amber" | "red" 
  type: T 
  data: T extends "timeline" ? TimelineProps[] : ListProps[]
}

const Panel = <T extends "timeline" | "list">({ 
  title, 
  description, 
  highlights,
  icon: Icon, 
  color,
  type, 
  data 
}: PanelProps<T>) => {

  const [background, stroke] = informationColors[color]

  return (
    <div className="flex flex-col items-start justify-start w-full h-full flex-grow py-8 px-8 md:py-12 md:px-24">
      <figure className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", background)} >
        <Icon className={cn("w-6 h-6 stroke-2", stroke )} />
      </figure>
      <div className="flex flex-col items-start justify-start gap-4 w-full pb-6 pt-12 mb-6 border-b-1 border-gray-900 flex-shrink-0">
        <h1 className="text-2xl text-gray-200 font-medium tracking-tight w-full ">{title}</h1>
        <HighlightText 
          color={color}
          text={description} 
          highlights={highlights} 
          className="text-gray-400 text-base leading-6 mb-4" 
        />
      </div>
      <div className="flex flex-col gap-6">
        {type === "list" && (
          (data as ListProps[]).map((item, index) => (
            <ListItem key={index} {...item} />
          ))
        )}
        {type === "timeline" && (
          (data as TimelineProps[]).map((item, index) => (
            <Timeline key={index} {...item} />
          ))
        )}
        <Skeleton 
          lines={8} 
          paragraphs={1} 
        />
      </div>
      {/* Safe Reading */}
    </div>
  )
}

export default Panel