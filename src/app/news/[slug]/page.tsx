import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - replace with your data source
const newsArticles = {
  "pactus-grant-2024": {
    title: "Kyvra Tech Secures Grant from Pactus Blockchain for Node Tracker Development",
    date: "2024-10-18",
    category: "Partnership",
    image: "/partner/pactus_partner.png",
    tags: ["Blockchain", "Partnership", "Open Source", "Grant"],
    content: `
      <p class="text-xl text-gray-300 mb-6 leading-relaxed">
        We're thrilled to announce that <strong>Kyvra Tech</strong> has been selected for a prestigious grant 
        under the <strong>Pactus FUSION Program</strong> to develop the comprehensive 
        <strong>Pactus Nodes Tracker</strong> - an open-source monitoring and visualization 
        system for the Pactus blockchain network.
      </p>
      
      <h2 class="text-3xl font-bold text-[#00b2a9] mb-6">Project Overview</h2>
      <p class="text-lg text-gray-300 mb-8">
        This strategic partnership will deliver a cutting-edge node tracking system developed 
        in four comprehensive phases, each designed to enhance network visibility and 
        community transparency.
      </p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-600">
          <h3 class="text-lg font-bold text-[#00b2a9] mb-3">Phase 1: Bootstrap Node Health</h3>
          <p class="text-gray-300 text-sm">
            Monitor bootstrap nodes, score connectivity, and display daily health status 
            with real-time analytics.
          </p>
        </div>
        
        <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-600">
          <h3 class="text-lg font-bold text-[#00b2a9] mb-3">Phase 2: Reachable Nodes</h3>
          <p class="text-gray-300 text-sm">
            Detect and display reachable nodes on an interactive map with comprehensive 
            charts and public node directories.
          </p>
        </div>
        
        <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-600">
          <h3 class="text-lg font-bold text-[#00b2a9] mb-3">Phase 3: Node Crawler</h3>
          <p class="text-gray-300 text-sm">
            Develop an advanced node crawler based on the Nebula project to gather 
            comprehensive network data and insights.
          </p>
        </div>
        
        <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-600">
          <h3 class="text-lg font-bold text-[#00b2a9] mb-3">Phase 4: Public APIs</h3>
          <p class="text-gray-300 text-sm">
            Provide and document robust public APIs in JSON-RPC format for seamless 
            third-party integrations.
          </p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-[#00b2a9] mb-6">Impact on the Pactus Ecosystem</h2>
      <p class="text-lg text-gray-300 mb-6">
        This tracker will provide critical infrastructure visibility, enabling the Pactus 
        community to:
      </p>
      
      <ul class="space-y-4 mb-12">
        <li class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-[#00b2a9] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-300">Monitor network health in real-time with comprehensive analytics</span>
        </li>
        <li class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-[#00b2a9] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-300">Identify connectivity issues proactively before they impact the network</span>
        </li>
        <li class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-[#00b2a9] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-300">Provide transparency about global node distribution and network decentralization</span>
        </li>
        <li class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-[#00b2a9] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-300">Offer robust public APIs for third-party developers and integrations</span>
        </li>
      </ul>
      
      <div class="bg-gradient-to-r from-[#00b2a9]/10 to-transparent p-6 rounded-xl border-l-4 border-[#00b2a9] mb-12">
        <p class="text-lg text-gray-300 italic mb-4">
          "We're honored to partner with Pactus on this critical infrastructure project. 
          The Nodes Tracker will not only enhance network monitoring capabilities but also 
          demonstrate our commitment to building robust, open-source solutions for the 
          blockchain community."
        </p>
        <p class="text-[#00b2a9] font-semibold">— Kyvra Tech Development Team</p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="https://tracker.kyvra.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#00b2a9] hover:bg-[#00d4c7] px-8 py-3 rounded-full text-center font-semibold transition-all hover:scale-105"
        >
          View Live Tracker
        </a>
        <a
          href="https://pactus.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-[#00b2a9] text-[#00b2a9] hover:bg-[#00b2a9] hover:text-black px-8 py-3 rounded-full text-center font-semibold transition-all"
        >
          Learn About Pactus
        </a>
      </div>
    `,
  },
  // Add more articles here
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = newsArticles[params.slug as keyof typeof newsArticles];
  
  if (!article) {
    return {
      title: "Article Not Found - Kyvra Tech",
    };
  }

  return {
    title: `${article.title} - Kyvra Tech`,
    description: article.title,
  };
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug as keyof typeof newsArticles];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/kyvra_logo.png"
                alt="Kyvra Tech Logo"
                width={30}
                height={47}
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold color-white">Kyvra Tech</div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="hover:text-[#00b2a9] transition-colors">About</Link>
              <Link href="/#services" className="hover:text-[#00b2a9] transition-colors">Services</Link>
              <Link href="/#projects" className="hover:text-[#00b2a9] transition-colors">Projects</Link>
              <Link href="/news" className="text-[#00b2a9]">News</Link>
              <Link href="/#contact" className="hover:text-[#00b2a9] transition-colors">Contact</Link>
            </div>
            <Link href="/#contact" className="bg-[#00b2a9] hover:bg-[#00d4c7] px-6 py-2 rounded-full transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to News */}
          <Link href="/news" className="inline-flex items-center text-[#00b2a9] hover:text-[#00d4c7] transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-gray-400">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share Section */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
                Twitter
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
                LinkedIn
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}