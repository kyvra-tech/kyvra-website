import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import type { ProjectStatus } from "@/data/projects";

/* ─── Status badge ─── */
function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        Completed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
      In Progress
    </span>
  );
}

/* ─── Project logo resolver ─── */
function ProjectLogo({ slug, title }: { slug: string; title: string }) {
  if (slug === "pactus-wallet") {
    return (
      <Image
        src="/wallet.png"
        alt={title}
        width={56}
        height={56}
        className="object-contain"
      />
    );
  }
  if (slug === "pactus-node-tracker") {
    return (
      <Image
        src="/pactus.png"
        alt={title}
        width={56}
        height={56}
        className="object-contain"
      />
    );
  }
  /* TrendPost — inline SVG icon */
  return (
    <svg
      className="w-7 h-7 text-[#00b2a9]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ─── Main showcase ─── */
export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#00b2a9] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#00b2a9]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.heroColor}, transparent)`,
                }}
              />

              <div className="p-6 flex-1 flex flex-col">
                {/* Logo + badge row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-800/60 flex items-center justify-center">
                    <ProjectLogo slug={project.slug} title={project.title} />
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-[#00b2a9] transition-colors">
                  {project.title}
                </h3>
                <p
                  className="text-xs font-medium mb-3"
                  style={{ color: project.heroColor }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Results preview — top 2 */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.results.slice(0, 2).map((r) => (
                    <div
                      key={r.label}
                      className="text-center p-3 rounded-xl bg-gray-800/40 border border-gray-800/60"
                    >
                      <div className="text-lg font-bold gradient-text">
                        {r.metric}
                      </div>
                      <div className="text-xs text-gray-500">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#00b2a9]/10 text-[#00b2a9]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer — view case study CTA */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between pt-4 border-t border-gray-800/60">
                  <span className="text-sm font-medium text-gray-500 group-hover:text-[#00b2a9] transition-colors">
                    View Case Study
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-[#00b2a9] transition-all group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
