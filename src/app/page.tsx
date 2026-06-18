import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentPipeline from "@/components/AgentPipeline";
import LiveDemo from "@/components/LiveDemo";
import AnimatedMetrics from "@/components/AnimatedMetrics";
import WhyDifferent from "@/components/WhyDifferent";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Kyvra Tech - Autonomous Intelligence Ecosystem",
  description:
    "Kyvra builds autonomous AI systems that think, learn, and act on your behalf. Turn the world's noise into your signal.",
};

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
            Introducing the Kyvra AI Ecosystem
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            The Autonomous <span className="gradient-text">Intelligence Layer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build AI agent pipelines that monitor, analyze, and act on your behalf.
            Turn raw data into published insights automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold transition-all hover:scale-105 shadow-lg shadow-[#00b2a9]/25"
            >
              See It In Action
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 hover:border-[#00b2a9] hover:text-[#00b2a9] font-semibold transition-all"
            >
              View Case Studies
            </a>
          </div>

          <AnimatedMetrics />
        </div>
      </section>

      {/* Ecosystem Vision (Replaced with new interactive component) */}
      <AgentPipeline />

      {/* Live Demo */}
      <LiveDemo />

      {/* Why We're Different */}
      <WhyDifferent />

      {/* Projects */}
      <ProjectsShowcase />

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
                software development and AI technology.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team of expert developers and AI specialists deliver
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

      {/* New Waitlist CTA */}
      <section id="contact" className="py-28 px-6 bg-gray-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            Limited Availability
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Early Access to the <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            We are currently onboarding early design partners to build custom autonomous pipelines. Join the waitlist to secure your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-5 py-4 bg-[#0a0a0a] border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00b2a9] transition-colors"
            />
            <button className="px-8 py-4 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold transition-all hover:scale-105 shadow-xl shadow-[#00b2a9]/20 whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
