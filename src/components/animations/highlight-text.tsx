import { cn } from "@lib/utils"

type HighlightTextProps = {
  color?: "violet" | "indigo" | "amber" | "red" 
  className?: string
  text?: string
  highlights?: string[]
}

const HighlightText = ({
  className,
  text = "",
  highlights = [],
  color = "violet",
}: HighlightTextProps) => {
  const baseStyle = "text-gray-400 text-base leading-6"

  const escapeRegExp = (string: string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  const regex =
    highlights.length > 0
      ? new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "gi")
      : null

  const parts = regex ? text.split(regex) : [text]

  const colorClasses = {
    violet: "ring-violet-500 bg-violet-500/20 border-violet-500 text-violet-50",
    indigo: "ring-indigo-500 bg-violet-500/20 border-indigo-500 text-indigo-50",
    amber: "ring-amber-500 bg-amber-500/20 border-amber-500 text-amber-50",
    red: "ring-red-500 bg-red-500/20 border-red-500 text-red-50",
  }

  return (
    <p className={cn(baseStyle, className)}>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span key={i} className={cn(" text-sm md:text-base font-normal ring-1 rounded-l-sm px-1 py-px border-r", colorClasses[color as keyof typeof colorClasses])}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  )
}

export default HighlightText
