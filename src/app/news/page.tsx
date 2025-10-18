import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Updates - Kyvra Tech",
  description: "Stay updated with the latest news, partnerships, and project announcements from Kyvra Tech.",
};

// Mock data - you can later replace this with a CMS or database
const newsArticles = [
  {
    id: "pactus-grant-2025",
    title: "Kyvra Tech Secures Grant from Pactus Blockchain for Node Tracker Development",
    excerpt: "We're thrilled to announce that Kyvra Tech has been selected for a prestigious grant under the Pactus FUSION Program to develop the comprehensive Pactus Nodes Tracker.",
    date: "2025-10-18",
    category: "Partnership",
    image: "/partner/pactus_partner.png",
    featured: true,
    tags: ["Blockchain", "Partnership", "Open Source", "Grant"],
  },
  {
    id: "trendpost-launch-2024",
    title: "TrendPost Platform Successfully Launched",
    excerpt: "Our AI-powered social media management platform TrendPost is now live, helping creators and businesses streamline their content creation and scheduling.",
    date: "2024-09-15",
    category: "Product Launch",
    image: "/kyvra_logo.png",
    featured: false,
    tags: ["AI", "Social Media", "Product Launch"],
  },
  {
    id: "pactus-wallet-completion-2025",
    title: "Pactus Wallet Development Completed",
    excerpt: "We've successfully delivered a secure, cross-platform wallet solution for the Pactus blockchain, providing users with seamless digital asset management.",
    date: "2025-08-20",
    category: "Project Completion",
    image: "/wallet.png",
    featured: false,
    tags: ["Blockchain", "Wallet", "Security", "Cross-platform"],
  },
];

export default function NewsPage() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation - Same as homepage */}
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
              <Link href="/#about" className="hover:text-[#00b2a9] transition-colors">
                About
              </Link>
              <Link href="/#services" className="hover:text-[#00b2a9] transition-colors">
                Services
              </Link>
              <Link href="/#projects" className="hover:text-[#00b2a9] transition-colors">
                Projects
              </Link>
              <Link href="/news" className="text-[#00b2a9]">
                News
              </Link>
              <Link href="/#contact" className="hover:text-[#00b2a9] transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/#contact" className="bg-[#00b2a9] hover:bg-[#00d4c7] px-6 py-2 rounded-full transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            News & <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest partnerships, project launches, and industry insights.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-4 py-2 rounded-full text-sm font-medium">
                Featured Story
              </span>
            </div>
            <Link href={`/news/${featuredArticle.id}`}>
              <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden transition-all hover:scale-[1.02] cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:py-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-sm">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 hover:text-[#00b2a9] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag) => (
                        <span key={tag} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-[#00b2a9] font-semibold hover:text-[#00d4c7] transition-colors">
                      Read Full Story
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Regular Articles Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">All News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.id}`}>
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden transition-all hover:scale-105 cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#00b2a9]/20 text-[#00b2a9] px-3 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-[#00b2a9] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                          +{article.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center text-[#00b2a9] text-sm font-semibold hover:text-[#00d4c7] transition-colors">
                      Read More
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#00b2a9]"
            />
            <button className="bg-[#00b2a9] hover:bg-[#00d4c7] px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image
                  src="/kyvra_logo.png"
                  alt="Kyvra Tech Logo"
                  width={30}
                  height={57}
                  className="w-8 h-8 color-white"
                />
                <div className="text-2xl font-bold color-white">Kyvra Tech</div>
              </Link>
              <p className="text-gray-400 mb-6">
                Leading innovation in software development and cryptocurrency technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#about" className="hover:text-[#00b2a9] transition-colors">About</Link></li>
                <li><Link href="/#services" className="hover:text-[#00b2a9] transition-colors">Services</Link></li>
                <li><Link href="/#projects" className="hover:text-[#00b2a9] transition-colors">Projects</Link></li>
                <li><Link href="/news" className="hover:text-[#00b2a9] transition-colors">News</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@kyvra.xyz</li>
                <li>github.com/kyvra-tech</li>
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