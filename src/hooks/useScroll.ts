import { RefObject, useEffect, useState } from "react";

export const useScroll = (scrollRef: RefObject<HTMLElement | null>) => {

  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!scrollRef) return;
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScroll({ x: container.scrollLeft, y: container.scrollTop });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);
 
  return scroll;
}

