import { cn } from "@lib/utils"

type SkeletonProps = {
  paragraphs?: number
  lines?: number
  className?: string
}

const Skeleton = ({
  paragraphs = 2,
  lines = 1,
  className = "",
}: SkeletonProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-2 md:gap-12 flex-shrink-0 w-full">
      <span className="w-60 h-1 my-2 bg-gray-900 rounded-full " />
      <div className={cn("w-full flex flex-col", className)}>
        {Array.from({ length: paragraphs }, (_, index) => (
          <div className="flex flex-col gap-4" key={index}>
            {Array.from({ length: lines }, (_, lineIndex) => {
              const words = lineIndex % 2 === 0 ? 4 : 6
              return(
                <div 
                  className="flex items-center gap-3"
                  key={lineIndex}
                >
                  {Array.from({ length: words }, (_, wordIndex) => (
                    <div
                      key={wordIndex}
                      className="h-1 bg-gray-900 rounded-full"
                      style={{ 
                        width: wordIndex % 2 === 0 ? "30%" : "50%",
                      }}
                    />
                  ))}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skeleton