// @modules/github/index.tsx
"use client"

import { GitBranchIcon } from "@icons"
import { useQuery } from "@tanstack/react-query"

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ContributionData = {
  total: { [year: string]: number }
  contributions: Contribution[]
}

const LEVELS: Record<number, string> = {
  0: "bg-gray-900",
  1: "bg-violet-900/60",
  2: "bg-violet-700/70",
  3: "bg-violet-600",
  4: "bg-violet-500",
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const fetchContributions = async (): Promise<ContributionData> => {
  const res = await fetch("https://github-contributions-api.jogruber.de/v4/stephen-karlle?y=last")
  if (!res.ok) throw new Error("Failed to fetch contributions")
  return res.json()
}

const GitHub = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-contributions"],
    queryFn: fetchContributions,
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  const contributions = data?.contributions ?? []
  const totalThisYear = data?.total[new Date().getFullYear()] ?? 0

  const firstDay = contributions[0] ? new Date(contributions[0].date).getDay() : 0
  const padded = [...Array(firstDay).fill(null), ...contributions]

  const weeks: (Contribution | null)[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }

  const monthLabels: { label: string; col: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, col) => {
    const firstReal = week.find(Boolean) as Contribution | undefined
    if (!firstReal) return
    const month = new Date(firstReal.date).getMonth()
    if (month !== lastMonth) {
      monthLabels.push({ label: MONTHS[month], col })
      lastMonth = month
    }
  })

  return (
    <section className="w-full flex flex-col justify-center items-center z-10 max-w-4xl relative">

      <div className="w-full flex flex-col items-center md:items-start justify-center mb-8">
        <div className="flex flex-row items-center justify-center mb-4">
          <GitBranchIcon className="w-4 h-4 stroke-2 stroke-violet-500" />
          <p className="text-gray-200 text-sm font-medium ml-2">
            Activity
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center md:text-start leading-tight tracking-tight">
          Always building
        </h1>
        <p className="text-gray-400 text-center md:text-start text-sm md:text-base mt-2 md:leading-7">
          A live look at my contributions and open-source activity.
        </p>
      </div>

      <div className="w-full rounded-xl p-2 bg-primary border border-gray-900">
        <div className="w-full rounded-lg bg-secondary flex flex-col p-6 gap-6">

          {isLoading && (
            <div className="w-full h-32 flex items-center justify-center">
              <p className="text-gray-600 text-xs font-mono animate-pulse">
                Loading contributions...
              </p>
            </div>
          )}

          {isError && (
            <div className="w-full h-32 flex items-center justify-center">
              <p className="text-gray-600 text-xs font-mono">
                Failed to load contributions.
              </p>
            </div>
          )}

          {data && (
            <>
              <div className="overflow-x-auto w-full">
                <div
                  className="grid gap-[3px] w-fit"
                  style={{ gridTemplateColumns: `repeat(${weeks.length}, 10px)` }}
                >
                  {/* Month labels */}
                  {weeks.map((_, col) => {
                    const label = monthLabels.find((m) => m.col === col)
                    return (
                      <div key={`m-${col}`} className="h-4 flex items-center">
                        {label && (
                          <span className="text-[10px] text-gray-600 font-mono whitespace-nowrap">
                            {label.label}
                          </span>
                        )}
                      </div>
                    )
                  })}

                  {/* Squares */}
                  {weeks.map((week, col) =>
                    week.map((day, row) => (
                      <div
                        key={`${col}-${row}`}
                        title={day ? `${day.count} contributions on ${day.date}` : ""}
                        className={`w-[10px] h-[10px] rounded-[2px] transition-opacity ${
                          day ? LEVELS[day.level] : "opacity-0"
                        }`}
                      />
                    ))
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-gray-900 pt-4 flex-wrap gap-3">
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">Profile</p>
                  <a
                    href="https://github.com/stephen-karlle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors font-mono"
                  >
                    github.com/stephen-karlle
                  </a>
                </div>

                <div className="flex flex-col gap-0.5 text-right">
                  <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">This year</p>
                  <p className="text-sm text-gray-300 font-mono">
                    {totalThisYear.toLocaleString()} contributions
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-gray-600 font-mono">Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <div key={l} className={`w-[10px] h-[10px] rounded-[2px] ${LEVELS[l]}`} />
                  ))}
                  <span className="text-xs text-gray-600 font-mono">More</span>
                </div>
              </div>
            </>
          )}

        </div>
      </div>

    </section>
  )
}

export default GitHub