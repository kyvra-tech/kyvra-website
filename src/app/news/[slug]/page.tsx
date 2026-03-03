import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsArticles = {
  "pactus-grant-2025": {
    title:
      "Kyvra Tech Secures Grant from Pactus Blockchain for Node Tracker Development",
    date: "2025-10-18",
    category: "Partnership",
    image: "/partner/pactus_partner.png",
    tags: ["Blockchain", "Partnership", "Open Source", "Grant"],
    content: `
      <p class="text-xl text-gray-300 mb-6 leading-relaxed">
        We're thrilled to announce that <strong>Kyvra Tech</strong> has been selected for a prestigious grant
        under the <strong>Pactus FUSION Program</strong> to develop the comprehensive
        <strong>Pactus Nodes Tracker</strong> — an open-source monitoring and visualization
        system for the Pactus blockchain network.
      </p>

      <h2 class="text-3xl font-bold text-[#00b2a9] mb-6">Project Overview</h2>
      <p class="text-lg text-gray-300 mb-8">
        This strategic partnership will deliver a cutting-edge node tracking system developed
        in four comprehensive phases, each designed to enhance network visibility and
        community transparency.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-12">
        <div class="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
          <h3 class="text-base font-bold text-[#00b2a9] mb-3">Phase 1 — Bootstrap Node Health</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Monitor bootstrap nodes, score connectivity, and display daily health status
            with real-time analytics.
          </p>
        </div>

        <div class="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
          <h3 class="text-base font-bold text-[#00b2a9] mb-3">Phase 2 — Reachable Nodes</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Detect and display reachable nodes on an interactive map with comprehensive
            charts and public node directories.
          </p>
        </div>

        <div class="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
          <h3 class="text-base font-bold text-[#00b2a9] mb-3">Phase 3 — Node Crawler</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Develop an advanced node crawler based on the Nebula project to gather
            comprehensive network data and insights.
          </p>
        </div>

        <div class="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
          <h3 class="text-base font-bold text-[#00b2a9] mb-3">Phase 4 — Public APIs</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
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
          <div class="w-5 h-5 rounded-full bg-[#00b2a9]/10 border border-[#00b2a9]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
            <div class="w-1.5 h-1.5 bg-[#00b2a9] rounded-full"></div>
          </div>
          <span class="text-gray-300">Monitor network health in real-time with comprehensive analytics</span>
        </li>
        <li class="flex items-start space-x-3">
          <div class="w-5 h-5 rounded-full bg-[#00b2a9]/10 border border-[#00b2a9]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
            <div class="w-1.5 h-1.5 bg-[#00b2a9] rounded-full"></div>
          </div>
          <span class="text-gray-300">Identify connectivity issues proactively before they impact the network</span>
        </li>
        <li class="flex items-start space-x-3">
          <div class="w-5 h-5 rounded-full bg-[#00b2a9]/10 border border-[#00b2a9]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
            <div class="w-1.5 h-1.5 bg-[#00b2a9] rounded-full"></div>
          </div>
          <span class="text-gray-300">Provide transparency about global node distribution and network decentralization</span>
        </li>
        <li class="flex items-start space-x-3">
          <div class="w-5 h-5 rounded-full bg-[#00b2a9]/10 border border-[#00b2a9]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
            <div class="w-1.5 h-1.5 bg-[#00b2a9] rounded-full"></div>
          </div>
          <span class="text-gray-300">Offer robust public APIs for third-party developers and integrations</span>
        </li>
      </ul>

      <div class="bg-gray-900/50 border-l-4 border-[#00b2a9] p-6 rounded-r-2xl mb-12">
        <p class="text-gray-300 italic mb-3 leading-relaxed">
          "We're honored to partner with Pactus on this critical infrastructure project.
          The Nodes Tracker will not only enhance network monitoring capabilities but also
          demonstrate our commitment to building robust, open-source solutions for the
          blockchain community."
        </p>
        <p class="text-[#00b2a9] text-sm font-semibold">— Kyvra Tech Development Team</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 mb-12">
        <a
          href="https://tracker.kyvra.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold transition-all hover:scale-105 text-sm"
        >
          View Live Tracker
        </a>
        <a
          href="https://pactus.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center border border-gray-700 hover:border-[#00b2a9] text-gray-300 hover:text-[#00b2a9] px-8 py-3 rounded-full font-semibold transition-all text-sm"
        >
          Learn About Pactus
        </a>
      </div>
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = newsArticles[params.slug as keyof typeof newsArticles];

  if (!article) {
    return { title: "Article Not Found - Kyvra Tech" };
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
      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00b2a9] transition-colors text-sm mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#00b2a9]/10 text-[#00b2a9] border border-[#00b2a9]/20">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-[#00b2a9]/10 text-[#00b2a9]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Featured image */}
          <div className="relative h-56 md:h-80 mb-12 rounded-2xl overflow-hidden border border-gray-800">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">
              Share this article
            </h3>
            <div className="flex gap-3">
              <button className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-sm font-medium transition-colors">
                Twitter
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-sm font-medium transition-colors">
                LinkedIn
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-sm font-medium transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
