import { cn } from "@lib/utils";
import { Children, HTMLAttributes, ReactNode } from "react";

export type OrbitingCirclesProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  delay?: number;
  radius?: number;
  iconSize?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  radius = 160,
  iconSize = 30,
  ...props
}: OrbitingCirclesProps) {

  // const calculatedDuration = duration / speed;
  const calculatedDuration = 30

  return (
    Children.map(children, (child, index) => {
      const angle = (360 / Children.count(children)) * index;
      return (
        <div
          style={
            {
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            } as React.CSSProperties
          }
          className={cn(
            `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center z-40 pointer-events-none`,
            { "[animation-direction:reverse]": reverse },
            className,
          )}
          {...props}
        >
          {child}
        </div>
      );
    })
  );
}
