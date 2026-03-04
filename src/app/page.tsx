import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kyvra Tech - Software & Crypto Technology Solutions",
  description:
    "Leading innovation in software development and cryptocurrency technology. Building the future of digital solutions.",
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
    title: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technologies and modern development practices.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-13a1 1 0 011-1h3a2 2 0 012 2v11a3 3 0 11-6 0V4a1 1 0 011-1zm6 2a1 1 0 00-1 1v8a1 1 0 102 0V5a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Blockchain Technology",
    description:
      "Advanced cryptocurrency and blockchain solutions for the decentralized future.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Web3 Development",
    description:
      "Next-generation web applications leveraging decentralized technologies and smart contracts.",
  },
];

const agents = [
  {
    step: "01",
    name: "Research Agent",
    role: "Intelligence Gathering",
    description:
      "Continuously monitors thousands of sources — news feeds, APIs, social signals — extracting high-signal information in real time.",
    features: ["Multi-source crawling", "Signal extraction", "Real-time monitoring"],
    accentHex: "#3B82F6",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    step: "02",
    name: "Analytics Agent",
    role: "Deep Analysis",
    description:
      "Transforms raw data into structured insights through pattern recognition, trend detection, and multi-dimensional confidence scoring.",
    features: ["Trend detection", "Confidence scoring", "Pattern recognition"],
    accentHex: "#00b2a9",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    step: "03",
    name: "Report Agent",
    role: "Narrative Synthesis",
    description:
      "Distills complex analysis into clear, compelling narratives — structured reports and summaries tailored to your audience.",
    features: ["Automated summarization", "Multi-format output", "Localized content"],
    accentHex: "#8B5CF6",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    step: "04",
    name: "Marketing Agent",
    role: "Content Distribution",
    description:
      "Crafts and distributes targeted content across channels automatically — optimizing reach, engagement, and conversion at scale.",
    features: ["Multi-channel publishing", "Audience targeting", "Performance analytics"],
    accentHex: "#F97316",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "3", label: "Open Source Tools" },
  { value: "24/7", label: "Support" },
];

const techStack = [
  "React & Next.js",
  "TypeScript",
  "Golang",
  "Solidity",
  "Node.js",
  "Web3",
  "Mobile Dev",
];

const projects = [
  {
    logo: <Image src="/wallet.png" alt="Pactus Wallet" width={56} height={56} className="object-contain" />,
    title: "Pactus Wallet",
    status: "completed" as const,
    description:
      "Cross-platform wallet solution for managing digital assets on the Pactus blockchain with security and seamless UX.",
    tags: ["React", "TypeScript", "Web3", "Blockchain"],
    demoUrl: "https://wallet.pactus.org/",
    githubUrl: "https://github.com/orgs/pactus-project/teams/wallet",
  },
  {
    logo: (
      <svg className="w-7 h-7 text-[#00b2a9]" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "TrendPost",
    status: "completed" as const,
    description:
      "AI-powered social media management platform to create, schedule, and analyze content with a consistent brand presence.",
    tags: ["AI-Powered", "Social Media", "Analytics"],
    demoUrl: "https://trendpost.co/",
    githubUrl: null,
  },
  {
    logo: <Image src="/pactus.png" alt="Pactus Node Tracker" width={56} height={56} className="object-contain" />,
    title: "Pactus Node Tracker",
    status: "in-progress" as const,
    description:
      "Comprehensive monitoring system for Pactus blockchain nodes worldwide with geographic distribution and health analytics.",
    tags: ["Golang", "Next.js", "Monitoring", "Analytics"],
    demoUrl: "https://tracker.kyvra.xyz/",
    githubUrl: null,
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b2a9]/10 border border-[#00b2a9]/30 text-[#00b2a9] text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#00b2a9] rounded-full animate-pulse" />
            Now building Pactus Node Tracker
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Building the Future of{" "}
            <span className="gradient-text">Digital Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Leading-edge software development and cryptocurrency technology
            solutions that transform ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold transition-all hover:scale-105 shadow-lg shadow-[#00b2a9]/25"
            >
              View Our Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 hover:border-[#00b2a9] hover:text-[#00b2a9] font-semibold transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-800/50 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0a0a0a] px-6 py-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Vision */}
      <section id="ecosystem" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
              The Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Kyvra <span className="gradient-text">AI Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A unified network of specialized AI agents — each mastering its domain,
              working in concert to automate intelligence from raw data to published insights.
            </p>
          </div>

          {/* Agent Pipeline */}
          <div className="relative">
            {/* Horizontal connector line (desktop only) */}
            <div
              className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px z-0 opacity-40"
              style={{ background: "linear-gradient(90deg, #3B82F6, #00b2a9, #8B5CF6, #F97316)" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="group relative p-6 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${agent.accentHex}, transparent)` }}
                  />
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: `${agent.accentHex}33` }}
                  >
                    {agent.step}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${agent.accentHex}1A`, color: agent.accentHex }}
                  >
                    {agent.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{agent.name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: agent.accentHex }}>{agent.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{agent.description}</p>
                  <ul className="space-y-2">
                    {agent.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: agent.accentHex }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Supervisor note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl max-w-xl text-left" style={{ background: "linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(90deg, #3B82F6, #00b2a9, #8B5CF6, #F97316) border-box", border: "1px solid transparent" }}>
              <div className="w-9 h-9 bg-[#00b2a9]/10 rounded-lg flex items-center justify-center text-[#00b2a9] flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Coordinated by a{" "}
                <span className="text-[#00b2a9] font-semibold">Supervisor Agent</span>
                {" "}— an AI orchestrator that routes tasks, resolves conflicts, and ensures
                coherent output across the entire pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00b2a9] text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#00b2a9]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#00b2a9]/10 rounded-xl mb-6 flex items-center justify-center text-[#00b2a9] group-hover:bg-[#00b2a9] group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00b2a9] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#00b2a9]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-800/60 flex items-center justify-center">
                      {project.logo}
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#00b2a9]/10 text-[#00b2a9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black text-sm font-semibold transition-all"
                  >
                    Live Demo
                  </a>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-[#00b2a9] hover:text-[#00b2a9] text-sm font-semibold transition-all"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="flex-1 text-center px-4 py-2 rounded-full border border-gray-800 text-gray-600 text-sm font-semibold cursor-not-allowed">
                      Private
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00b2a9] text-sm font-semibold uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Innovation at the <span className="gradient-text">Core</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                At Kyvra Tech, we push the boundaries of what&apos;s possible in
                software development and cryptocurrency technology.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team of expert developers and blockchain specialists deliver
                solutions that not only meet today&apos;s needs but anticipate
                tomorrow&apos;s challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-[#00b2a9]/50 hover:text-[#00b2a9] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 text-center hover:border-[#00b2a9]/30 transition-all"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-8">
            Trusted Partners
          </p>
          <div className="flex justify-center items-center">
            <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/partner/pactus_partner.png"
                alt="Pactus"
                width={640}
                height={548}
                className="h-120 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to <span className="gradient-text">Transform</span> Your
            Ideas?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Let&apos;s build something extraordinary together. Reach out and
            let&apos;s discuss your vision.
          </p>
          <a
            href="mailto:support@kyvra.xyz"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black text-lg font-semibold transition-all hover:scale-105 shadow-xl shadow-[#00b2a9]/20"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
