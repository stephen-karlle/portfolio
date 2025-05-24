import { SVGProps, useId } from "react";
import { twMerge } from "tailwind-merge";

type GridLinesProps = & SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

const GridLines = ({
  width = 150,
  height = 150,
  x = 0,
  y = 0,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridLinesProps) => {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={twMerge(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-800/30 stroke-gray-500/30 z-0",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}


export default GridLines;

