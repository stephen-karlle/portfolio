"use client";

import { RefObject } from "react";
import { useScroll } from "@hooks/useScroll";
import { LOGO } from "@constants/images";
import { cn } from "@/lib/utils";
import { useAtomValue } from "jotai";
import { lightboxOpenAtom } from "@atoms/lightbox";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  scrollRef: RefObject<HTMLElement | null>;
};

const NAV_LINKS = ["home", "projects", "about"] as const;

const Navbar = ({ scrollRef }: NavbarProps) => {
  const { y } = useScroll(scrollRef);
  const hasScrolled = y > 30;
  const lightboxOpen = useAtomValue(lightboxOpenAtom);

  const handleNavigate = (id: string) => {
    if (id === "home") {
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      className={cn(
        "h-14 flex-shrink-0 max-w-5xl w-full sticky rounded-2xl z-50 flex items-center justify-between px-5",
        lightboxOpen
          ? "opacity-0 pointer-events-none transition-none"
          : "transition-all duration-500 ease-in-out",
        hasScrolled
          ? "top-2 bg-primary/70 backdrop-blur-md border border-white/[0.06]"
          : "top-0"
      )}
    >
      <Link href="/" prefetch={false}>
        <Image src={LOGO} alt="Karlle" width={20} height={20} style={{ width: 20, height: "auto" }} />
      </Link>

      <div className="flex items-center gap-1">
        {NAV_LINKS.map((item) => (
          <button
            key={item}
            onClick={() => handleNavigate(item)}
            className="text-sm text-gray-500 hover:text-gray-200 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-150 capitalize tracking-wide"
          >
            {item}
          </button>
        ))}

        <div className="w-px h-3.5 bg-white/10 mx-1" />

        <button
          onClick={() => handleNavigate("contact")}
          className="text-sm text-gray-400 hover:text-gray-200 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.14] hover:bg-white/5 transition-all duration-150 tracking-wide"
        >
          contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;