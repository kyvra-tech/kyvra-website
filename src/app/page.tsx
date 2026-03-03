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
