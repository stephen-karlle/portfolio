"use client";

import { RefObject } from "react";
import { useScroll } from "@hooks/useScroll";
import { LOGO } from "@constants/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


type NavbarProps = {
  scrollRef: RefObject<HTMLElement | null>; 
}

const Navbar = ({ scrollRef }: NavbarProps) => {
  
  const { y } = useScroll(scrollRef);
  const hasScrolled = y > 30;

  const handleNavigate = (id: string | number) => {
    if (id === "home" && scrollRef) {
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (typeof id === "number") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className={cn("rounded-xl h-14 flex-shrink-0 inset-0 sticky z-[50] w-full flex items-center justify-between px-6 transition-all duration-500 ease-in-out ", {
      "top-0 max-w-5xl": !hasScrolled,
      "top-2 max-w-4xl backdrop-blur-sm ring-1 ring-gray-900 bg-primary/50": hasScrolled,
    })}>
      <Link
        className="text-white text-lg font-medium text-center flex-shrink-0 cursor-pointer"
        href="/"
        prefetch={false}
      >
        <Image src={LOGO} alt="Karlle" width={20} height={20} />
      </Link>
      <div className="flex items-center w-full justify-end space-x-6">
        {["home", "projects", "about", "contact"].map((item, index) => (
          <button
            key={index}
            className="text-gray-200 font-normal text-sm tracking-tight cursor-pointer capitalize"
            onClick={() => handleNavigate(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
