"use client";

import { LOGO } from "@constants/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const behance = process.env.NEXT_PUBLIC_BEHANCE!;
  const github = process.env.NEXT_PUBLIC_GITHUB!;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN!;

  const handleNavigate = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const socials: { label: string; url: string }[] = [
    { label: "Behance", url: behance },
    { label: "GitHub", url: github },
    { label: "LinkedIn", url: linkedin },
    { label: "Indeed", url: "#" },
  ];

  const navLinks = ["home", "skills", "projects", "contact"];

  return (
    <footer className="flex-shrink-0 w-full flex items-start justify-center z-10 border-t border-white/[0.06]">
      <section className="flex flex-col gap-10 p-8 py-12 max-w-4xl w-full">

        {/* Top */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" prefetch={false}>
                <Image src={LOGO} alt="Karlle" width={20} height={20} />
              </Link>
              <span className="text-sm font-medium text-gray-200 tracking-tight">
                Stephen Karlle
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              San Fernando, Pampanga<br />
              Philippines
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-[6px] w-[6px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500" />
              </span>
              <span className="text-xs text-gray-600 tracking-wide">
                All systems operational
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">
                Socials
              </p>
              {socials.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-150 w-fit"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-1">
                General
              </p>
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-150 capitalize text-start w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-white/[0.04] pt-6 flex-wrap gap-3">
          <p className="text-[11px] text-gray-700 tracking-wide">
            © 2025 <span className="text-gray-600">Stephen Karlle</span>. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-700 tracking-wide">
            Built with Next.js & Tailwind
          </p>
        </div>

      </section>
    </footer>
  );
};

export default Footer;