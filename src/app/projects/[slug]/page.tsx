import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData, allProjectSlugs } from "@/data/projects";

/* ─── Static generation ─── */
export function generateStaticParams() {
  return allProjectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return { title: "Project Not Found – Kyvra Tech" };
  }

  return {
    title: `${project.title} – ${project.subtitle} | Kyvra Tech`,
    description: project.description,
  };
}

/* ─── Status badge (server-safe) ─── */
function StatusBadge({ status }: { status: "completed" | "in-progress" }) {
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

/* ─── Architecture card icon ─── */
function ArchIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="4" />
    </svg>
  );
}

/* ─── Page ─── */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const accentColor = project.heroColor;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Radial glow in hero color */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 40% at 50% -5%, ${accentColor}18 0%, transparent 60%)`,
          }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00b2a9] transition-colors text-sm mb-10 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </Link>

          {/* Title row */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {project.title}
            </h1>
            <p
              className="text-lg md:text-xl font-medium"
              style={{ color: accentColor }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors"
                style={{
                  borderColor: `${accentColor}30`,
                  color: accentColor,
                  backgroundColor: `${accentColor}10`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-black font-semibold text-sm transition-all hover:scale-105 shadow-lg"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 8px 30px ${accentColor}30`,
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-[#00b2a9] hover:text-[#00b2a9] font-semibold text-sm transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-800 text-gray-600 font-semibold text-sm cursor-not-allowed">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Private
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ OVERVIEW + RESULTS ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
                Overview
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Results 2×2 grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center hover:border-gray-700 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-gray-500">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE CHALLENGE ═══════════ */}
      <section className="py-20 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 border-l-4"
            style={{
              borderLeftColor: accentColor,
              backgroundColor: `${accentColor}06`,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
              The Challenge
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR SOLUTION ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
            Our Solution
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            {project.solution}
          </p>
        </div>
      </section>

      {/* ═══════════ ARCHITECTURE HIGHLIGHTS ═══════════ */}
      <section className="py-20 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
            Architecture Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How We <span className="gradient-text">Built It</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {project.architectureNotes.map((note, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div style={{ color: accentColor }}>
                    <ArchIcon />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECT DETAILS ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
            Project Details
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            At a <span className="gradient-text">Glance</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* Timeline */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Timeline
                </p>
              </div>
              <p className="text-white text-lg font-semibold">{project.timeline}</p>
            </div>

            {/* Team */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Team
                </p>
              </div>
              <p className="text-white text-lg font-semibold">{project.team}</p>
            </div>

            {/* Tech stack */}
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Tech Stack
                </p>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {project.techStack.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-2xl p-10 md:p-14 border"
            style={{
              borderColor: `${accentColor}20`,
              background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accentColor}08 0%, transparent 60%)`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a similar{" "}
              <span className="gradient-text">project</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              We&apos;d love to hear about your idea. Let&apos;s talk about how
              we can bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:support@kyvra.xyz"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold transition-all hover:scale-105 shadow-lg shadow-[#00b2a9]/20"
              >
                Start a Conversation
                <svg
                  className="w-4 h-4"
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
              </a>
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 hover:border-[#00b2a9] hover:text-[#00b2a9] font-semibold transition-all"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
