import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyvra Tech - Software & Crypto Technology Solutions",
  description:
    "Leading innovation in software development and cryptocurrency technology. Building the future of digital solutions.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/kyvra_logo.png"
                alt="Kyvra Tech Logo"
                width={30}
                height={47}
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold color-white">Kyvra Tech</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-[#00b2a9] transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-[#00b2a9] transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="hover:text-[#00b2a9] transition-colors"
              >
                Projects
              </a>
              <Link href="/news" className="hover:text-[#00b2a9] transition-colors">News</Link>
              <a
                href="#contact"
                className="hover:text-[#00b2a9] transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-[#00b2a9] hover:bg-[#00d4c7] px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the Future of{" "}
            <span className="gradient-text">Digital Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading-edge software development and cryptocurrency technology
            solutions that transform ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#00b2a9] hover:bg-[#00d4c7] px-8 py-4 rounded-full text-lg font-semibold transition-all glow-effect hover:scale-105">
              Explore Our Solutions
            </button>
            <button className="border border-[#00b2a9] text-[#00b2a9] hover:bg-[#00b2a9] hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700  transition-all hover:scale-105">
              <div className="w-12 h-12 bg-[#00b2a9] rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-300">
                Custom software solutions built with cutting-edge technologies
                and modern development practices.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-[#00b2a9] rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-13a1 1 0 011-1h3a2 2 0 012 2v11a3 3 0 11-6 0V4a1 1 0 011-1zm6 2a1 1 0 00-1 1v8a1 1 0 102 0V5a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Blockchain Technology</h3>
              <p className="text-gray-300">
                Advanced cryptocurrency and blockchain solutions for the
                decentralized future.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-[#00b2a9] rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web3 Development</h3>
              <p className="text-gray-300">
                Next-generation web applications leveraging decentralized
                technologies and smart contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pactus Wallet */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <Image src="/wallet.png" alt="Pactus Logo" width={100} height={100} />
                </div>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pactus Wallet</h3>
              <p className="text-gray-300 mb-6">
                Pactus Wallet is a cross-platform wallet solution for managing
                digital assets on the Pactus blockchain. Built with security and
                usability in mind, it provides a seamless experience for users
                to create wallets, manage accounts, and perform transactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Web3
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Blockchain
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://wallet.pactus.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00b2a9] px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/orgs/pactus-project/teams/wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#00b2a9] text-[#00b2a9] hover:text-black px-6 py-2 rounded-full text-sm font-semibold transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* TrendPost */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700  transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#00b2a9] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">TrendPost</h3>
              <p className="text-gray-300 mb-6">
                Features that turn ideas into Social Media Success. Create,
                schedule, and analyze your content with our comprehensive suite
                of AI-powered tools. Save hours of work while maintaining a
                consistent brand presence across all platforms.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  AI-Powered
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Social Media
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Content Creation
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Analytics
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://trendpost.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00b2a9] hover:bg-[#00d4c7] px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                >
                  Live Demo
                </a>
                <button className="border border-gray-600 text-gray-400 px-6 py-2 rounded-full text-sm font-semibold cursor-not-allowed">
                  GitHub
                </button>
              </div>
            </div>

            {/* Pactus Node Tracker */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700  transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                 <Image src="/pactus.png" alt="Pactus Node Tracker" width={100} height={100} />
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                  In Progress
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pactus Node Tracker</h3>
              <p className="text-gray-300 mb-6">
                A comprehensive monitoring system for Pactus blockchain nodes
                worldwide. Displays active nodes, geographical distribution, and
                bootstrap node health status.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Golang
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Monitoring
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  Analytics
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://tracker.kyvra.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00b2a9] px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                >
                  Live Demo
                </a>
                <button className="border border-gray-600 text-gray-400 px-6 py-2 rounded-full text-sm font-semibold cursor-not-allowed">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Innovation at the <span className="gradient-text">Core</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                At Kyvra Tech, we're passionate about pushing the boundaries of
                what's possible in software development and cryptocurrency
                technology.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Our team of expert developers and blockchain specialists work
                tirelessly to deliver solutions that not only meet today's needs
                but anticipate tomorrow's challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full">
                  React & Next.js
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full">
                  Mobile Development
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full">
                  Solidity
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full">
                  Node.js
                </span>
                <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full">
                  Web3
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00b2a9]/20 to-transparent p-8 rounded-2xl border border-[#00b2a9]/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#00b2a9] rounded-full"></div>
                    <span className="text-lg">10+ Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#00b2a9] rounded-full"></div>
                    <span className="text-lg">50+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#00b2a9] rounded-full"></div>
                    <span className="text-lg">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#00b2a9] rounded-full"></div>
                    <span className="text-lg">Global Client Base</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to <span className="gradient-text">Transform</span> Your
            Ideas?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how we can help bring your vision to life with
            cutting-edge technology.
          </p>
          <button className="bg-[#00b2a9] px-12 py-4 rounded-full text-xl font-semibold transition-all glow-effect hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/kyvra_logo.png"
                  alt="Kyvra Tech Logo"
                  width={30}
                  height={57}
                  className="w-8 h-8 color-white"
                />
                <div className="text-2xl font-bold color-white">
                  Kyvra Tech
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Leading innovation in software development and cryptocurrency
                technology.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00b2a9] transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00b2a9] transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/kyvra-tech"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00b2a9] transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#00b2a9] transition-colors"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#00b2a9] transition-colors"
                  >
                    Blockchain Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#00b2a9] transition-colors"
                  >
                    Web3 Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#00b2a9] transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Send us an email: support@kyvra.xyz</li>
                <li>Follow us on GitHub: https://github.com/kyvra-tech</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kyvra Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
