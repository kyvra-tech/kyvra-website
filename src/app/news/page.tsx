import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News & Updates - Kyvra Tech",
  description:
    "Stay updated with the latest news, partnerships, and project announcements from Kyvra Tech.",
};

const newsArticles = [
  {
    id: "pactus-grant-2025",
    title:
      "Kyvra Tech Secures Grant from Pactus Blockchain for Node Tracker Development",
    excerpt:
      "We're thrilled to announce that Kyvra Tech has been selected for a prestigious grant under the Pactus FUSION Program to develop the comprehensive Pactus Nodes Tracker.",
    date: "2025-10-18",
    category: "Partnership",
    image: "/partner/pactus_partner.png",
    featured: true,
    tags: ["Blockchain", "Partnership", "Open Source", "Grant"],
  },
  {
    id: "trendpost-launch-2024",
    title: "TrendPost Platform Successfully Launched",
    excerpt:
      "Our AI-powered social media management platform TrendPost is now live, helping creators and businesses streamline their content creation and scheduling.",
    date: "2024-09-15",
    category: "Product Launch",
    image: "/kyvra_logo.png",
    featured: false,
    tags: ["AI", "Social Media", "Product Launch"],
  },
  {
    id: "pactus-wallet-completion-2025",
    title: "Pactus Wallet Development Completed",
    excerpt:
      "We've successfully delivered a secure, cross-platform wallet solution for the Pactus blockchain, providing users with seamless digital asset management.",
    date: "2025-08-20",
    category: "Project Completion",
    image: "/wallet.png",
    featured: false,
    tags: ["Blockchain", "Wallet", "Security", "Cross-platform"],
  },
];

export default function NewsPage() {
  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#00b2a9] text-sm font-semibold uppercase tracking-widest mb-3">
            Kyvra Tech
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            News & <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay informed about our latest partnerships, project launches, and
            industry insights.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#00b2a9] uppercase tracking-widest">
                <span className="w-4 h-px bg-[#00b2a9]" />
                Featured Story
              </span>
            </div>
            <Link href={`/news/${featuredArticle.id}`}>
              <div className="group bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#00b2a9]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#00b2a9]/10 text-[#00b2a9] border border-[#00b2a9]/20">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00b2a9] transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featuredArticle.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#00b2a9] text-sm font-semibold group-hover:gap-3 transition-all">
                      Read Full Story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-white">All News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.id}`}>
                <div className="group flex flex-col h-full bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#00b2a9]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#00b2a9]/10 text-[#00b2a9] border border-[#00b2a9]/20">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#00b2a9] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-gray-500 text-xs px-2 py-1">
                          +{article.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[#00b2a9] text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gray-900/20 border-t border-gray-800/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00b2a9] transition-colors text-sm"
            />
            <button className="px-7 py-3 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold transition-all hover:scale-105 text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
