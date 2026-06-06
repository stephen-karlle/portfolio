"use client";

import { technologyColors } from "@constants/colors";
import { projectsData } from "@data/projects";
import { useParams } from "next/navigation";
import { ShareIcon, ArrowIcon } from "@icons";
import Button from "@components/ui/button";
import Link from "next/link";
import FeatureIcon from "@modules/projects/feature-icon";
import ProjectGallery from "@modules/projects/project-gallery";

export default function ProjectPage() {
  const params = useParams();

  const project = projectsData.find((project) => {
    const paramName = Array.isArray(params?.name) ? params?.name[0] : params?.name;
    return project.name.toLowerCase().replace(/\s+/g, "-") === paramName?.toLowerCase().replace(/\s+/g, "-");
  });

  return (
    <article className="flex flex-col items-center justify-center w-full z-10">
          <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Aceternity-style spotlight */}
      <div
        className="pointer-events-none fixed top-[-20%] left-1/2 -translate-x-1/2 z-0"
        style={{
          width: "800px",
          height: "600px",
          background: "conic-gradient(from 180deg at 50% 50%, transparent 60deg, rgba(139,92,246,0.08) 120deg, rgba(99,102,241,0.1) 180deg, rgba(139,92,246,0.08) 240deg, transparent 300deg)",
          filter: "blur(48px)",
        }}
      />

      {/* Subtle top-center glow */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 z-0"
        style={{
          width: "560px",
          height: "280px",
          background: "radial-gradient(ellipse at top, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
      />
      {project ? (
        <section className="w-full flex flex-col justify-center items-start pt-20 pb-32 max-w-3xl gap-10">

          <Link
            href="/#projects"
            className="flex items-center gap-1.5 text-gray-600 hover:text-gray-400 transition-colors text-xs group"
          >
            <ArrowIcon className="w-3 h-3 stroke-2 stroke-current rotate-180 group-hover:-translate-x-0.5 transition-transform" />
            All projects
          </Link>

          <div className="w-full flex items-start justify-between gap-6 flex-wrap">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 ${project.isDeployed ? "bg-green-500" : "bg-amber-500"} rounded-full relative flex-shrink-0`}>
                  <span className={`w-1.5 h-1.5 ${project.isDeployed ? "bg-green-500" : "bg-amber-500"} rounded-full animate-ping absolute`} />
                </span>
                <p className={`${project.isDeployed ? "text-green-500" : "text-amber-500"} text-[11px]`}>
                  {project.isDeployed ? "Deployed" : "Prototype"}
                </p>
                <span className="w-3 h-px bg-gray-800" />
                <p className="text-gray-700 text-[11px]">{project.createdAt}</p>
              </div>
              <h1 className="text-3xl sm:text-[32px] font-semibold tracking-[-0.025em] leading-tight text-gray-100">
                {project.name}
              </h1>
              {project.description && (
                <p className="text-gray-500 text-sm leading-7 max-w-lg mt-1">
                  {project.description}
                </p>
              )}
            </div>

            {project.isDeployed && project.link && (
              <Button beam onClick={() => window.open(project.link, "_blank")}>
                Live Preview
                <ShareIcon className="w-3.5 h-3.5 stroke-2 stroke-white" />
              </Button>
            )}
          </div>

          <ProjectGallery images={project.images} />

          <div className="grid grid-cols-4 w-full border-y border-gray-900 py-5">
            {[
              { label: "Type", value: project.type ?? "Personal Project" },
              { label: "Role", value: project.role ?? "Full-Stack Developer" },
              { label: "Year", value: project.createdAt ?? "—" },
              { label: "Status", value: project.isDeployed ? "Live" : "Prototype" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <p className="text-[9px] uppercase tracking-[0.12em] text-gray-700">{label}</p>
                <p className="text-sm text-gray-400 font-medium">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-[9px] uppercase tracking-[0.12em] text-gray-700">Stack</p>
            <div className="flex items-start flex-wrap gap-1.5">
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${technologyColors[technology]}`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-3 w-full">
              <p className="text-[9px] uppercase tracking-[0.12em] text-gray-700">Key Features</p>
              <div className="flex flex-col gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="shrink-0 font-mono text-[10px] text-gray-700 pt-[3px] w-4 text-right">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-500 text-[12.5px] leading-[1.65]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      ) : (
        <div className="w-full flex items-center justify-center min-h-[40rem]">
          <p className="text-gray-600 text-xs">Project not found.</p>
        </div>
      )}
    </article>
  );
}