import { useEffect, useRef, useState } from "react";

export const useInView = <T extends HTMLElement = HTMLElement>(): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null!);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      {
        threshold: 0.6, // Adjust this based on how much of the element should be visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};
