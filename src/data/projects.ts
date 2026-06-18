export type ProjectStatus = "completed" | "in-progress";

export interface ProjectResult {
  metric: string;
  label: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  heroColor: string;
  description: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  techStack: string[];
  timeline: string;
  team: string;
  architectureNotes: string[];
  demoUrl: string;
  githubUrl: string | null;
}

export const projectsData: Record<string, ProjectData> = {
  "pactus-wallet": {
    slug: "pactus-wallet",
    title: "Pactus Wallet",
    subtitle: "Cross-Platform Blockchain Wallet",
    status: "completed",
    heroColor: "#00b2a9",
    description:
      "A secure, cross-platform wallet solution for managing digital assets on the Pactus blockchain. Built with a focus on security, performance, and seamless user experience across web and desktop platforms.",
    challenge:
      "The Pactus blockchain needed a wallet that could handle its unique consensus mechanism while providing a familiar, intuitive interface for both technical and non-technical users.",
    solution:
      "We built a React-based progressive web app with TypeScript, implementing custom Web3 integrations for the Pactus network. The wallet features HD key derivation, multi-account support, and real-time transaction monitoring.",
    results: [
      { metric: "99.9%", label: "Uptime" },
      { metric: "<2s", label: "Transaction Time" },
      { metric: "5K+", label: "Active Users" },
      { metric: "0", label: "Security Incidents" },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Web3.js",
      "Pactus SDK",
      "IndexedDB",
      "Service Workers",
    ],
    timeline: "6 months",
    team: "4 engineers",
    architectureNotes: [
      "Client-side key management with AES-256 encryption",
      "Offline-first architecture with service worker caching",
      "Real-time WebSocket connection for transaction updates",
      "Multi-layer security with biometric auth support",
    ],
    demoUrl: "https://wallet.pactus.org/",
    githubUrl: "https://github.com/orgs/pactus-project/teams/wallet",
  },
  trendpost: {
    slug: "trendpost",
    title: "TrendPost",
    subtitle: "AI-Powered Social Media Platform",
    status: "completed",
    heroColor: "#00b2a9",
    description:
      "An AI-powered social media management platform that helps creators and businesses create, schedule, and analyze content with a consistent brand presence across all channels.",
    challenge:
      "Content creators and businesses struggle to maintain a consistent posting schedule across multiple social media platforms while keeping content fresh and engaging.",
    solution:
      "We developed an AI engine that analyzes trending topics, generates content suggestions, and automates scheduling across platforms. The system learns from engagement data to continuously improve content quality.",
    results: [
      { metric: "3x", label: "Engagement Increase" },
      { metric: "80%", label: "Time Saved" },
      { metric: "12K+", label: "Posts Managed" },
      { metric: "98%", label: "Client Satisfaction" },
    ],
    techStack: [
      "Next.js",
      "Python",
      "OpenAI API",
      "PostgreSQL",
      "Redis",
      "Social Media APIs",
    ],
    timeline: "8 months",
    team: "5 engineers",
    architectureNotes: [
      "Microservices architecture with event-driven messaging",
      "AI content pipeline with multi-model ensemble",
      "Real-time analytics dashboard with WebSocket updates",
      "Multi-tenant SaaS with role-based access control",
    ],
    demoUrl: "https://trendpost.co/",
    githubUrl: null,
  },
  "pactus-node-tracker": {
    slug: "pactus-node-tracker",
    title: "Pactus Node Tracker",
    subtitle: "Blockchain Network Monitoring",
    status: "in-progress",
    heroColor: "#F97316",
    description:
      "A comprehensive monitoring system for Pactus blockchain nodes worldwide, providing geographic distribution visualization, health analytics, and real-time network status.",
    challenge:
      "The Pactus network needed visibility into its growing node infrastructure — where nodes are located, their health status, and network-wide performance metrics.",
    solution:
      "We're building a Golang backend that periodically crawls the Pactus network, collecting node metadata, geographic data, and performance metrics. The Next.js frontend provides real-time visualization with an interactive world map.",
    results: [
      { metric: "500+", label: "Nodes Tracked" },
      { metric: "30+", label: "Countries" },
      { metric: "<1min", label: "Update Interval" },
      { metric: "99.5%", label: "Data Accuracy" },
    ],
    techStack: [
      "Golang",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "WebSocket",
      "Mapbox GL",
    ],
    timeline: "4 months (ongoing)",
    team: "3 engineers",
    architectureNotes: [
      "High-performance Golang crawler with concurrent node polling",
      "Geographic data enrichment via IP geolocation",
      "Time-series database for historical metrics",
      "Interactive map with real-time node status overlay",
    ],
    demoUrl: "https://tracker.kyvra.xyz/",
    githubUrl: null,
  },
};

export const allProjectSlugs = Object.keys(projectsData);
export const allProjects = Object.values(projectsData);
