"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ════════════════════════════════════════════════════════════
   DATA: Pre-cached keyword-matched responses
   ════════════════════════════════════════════════════════════ */

interface StageResponses {
  research: { sourceCount: number; findings: string[] };
  analytics: { confidence: number; trend: string; insight: string };
  report: { title: string; summary: string; metrics: { label: string; value: string }[] };
  marketing: { channels: string[]; message: string };
}

function getResponses(topic: string): StageResponses {
  const t = topic.toLowerCase();

  if (/bitcoin|btc|crypto|eth|ethereum/.test(t)) {
    return {
      research: {
        sourceCount: 2847,
        findings: [
          "SEC approved 11 spot Bitcoin ETFs in January 2024, triggering $4.6B inflows in week one",
          "Institutional adoption surged 340% — BlackRock's IBIT became the fastest-growing ETF in history",
          "On-chain data shows 78% of BTC supply hasn't moved in 6+ months, indicating strong holder conviction",
          "Correlations between BTC and traditional equities dropped to 0.12, reinforcing the diversification thesis",
        ],
      },
      analytics: {
        confidence: 91,
        trend: "Strongly Bullish",
        insight:
          "Institutional inflows are accelerating while supply on exchanges hits a 5-year low — a classic supply-squeeze setup.",
      },
      report: {
        title: "Bitcoin ETF Market Impact Analysis",
        summary:
          "The approval of spot Bitcoin ETFs marks a structural shift in crypto markets. Institutional capital is flowing in at unprecedented rates, compressing available supply and creating asymmetric upside potential for the next 12-18 months.",
        metrics: [
          { label: "Market Sentiment", value: "92 / 100" },
          { label: "Inst. Adoption Rate", value: "+340%" },
          { label: "Supply Squeeze Index", value: "High" },
        ],
      },
      marketing: {
        channels: ["twitter", "linkedin", "email", "telegram"],
        message: "Ready to publish across 4 channels",
      },
    };
  }

  if (/\bai\b|artificial|machine.?learning|llm|gpt/.test(t)) {
    return {
      research: {
        sourceCount: 3214,
        findings: [
          "Global AI regulation frameworks are diverging — EU AI Act vs. US executive-order approach",
          "73% of Fortune 500 companies now have dedicated AI governance teams, up from 18% in 2022",
          "Open-source LLM adoption grew 290% YoY, challenging proprietary model dominance",
          "AI safety research funding reached $1.4B in 2024, a 5x increase over the previous year",
        ],
      },
      analytics: {
        confidence: 87,
        trend: "Rapid Evolution",
        insight:
          "Regulatory fragmentation is creating compliance moats for early adopters while smaller players face increasing barriers to entry.",
      },
      report: {
        title: "AI Regulation & Governance Outlook",
        summary:
          "The global AI regulatory landscape is bifurcating between prescriptive (EU) and principles-based (US) approaches. Companies that build compliance infrastructure now will gain first-mover advantage in cross-border AI deployment.",
        metrics: [
          { label: "Regulatory Risk", value: "Medium-High" },
          { label: "Compliance Readiness", value: "34%" },
          { label: "Market Opportunity", value: "$247B" },
        ],
      },
      marketing: {
        channels: ["twitter", "linkedin", "email", "telegram"],
        message: "Ready to publish across 4 channels",
      },
    };
  }

  if (/defi|decentralized.?finance|yield|liquidity/.test(t)) {
    return {
      research: {
        sourceCount: 1923,
        findings: [
          "Total DeFi TVL recovered to $112B, led by liquid staking and restaking protocols",
          "Real yield protocols now comprise 45% of DeFi activity, shifting away from inflationary tokenomics",
          "Cross-chain bridge volume hit $8.2B monthly as multi-chain DeFi becomes the norm",
          "Institutional DeFi participation via permissioned pools grew 420% in the last quarter",
        ],
      },
      analytics: {
        confidence: 84,
        trend: "Maturing Growth",
        insight:
          "DeFi is transitioning from speculative yield farming to sustainable, institutional-grade financial infrastructure.",
      },
      report: {
        title: "DeFi Trends & Institutional Adoption Report",
        summary:
          "The DeFi ecosystem is undergoing a maturation cycle. Real yield, restaking, and cross-chain interoperability are replacing unsustainable incentive models, attracting institutional capital at scale.",
        metrics: [
          { label: "TVL Growth", value: "+67% YoY" },
          { label: "Real Yield Avg.", value: "8.4% APY" },
          { label: "Inst. Participation", value: "+420%" },
        ],
      },
      marketing: {
        channels: ["twitter", "linkedin", "email", "telegram"],
        message: "Ready to publish across 4 channels",
      },
    };
  }

  if (/pactus/.test(t)) {
    return {
      research: {
        sourceCount: 1456,
        findings: [
          "Pactus launched mainnet with a novel Solid State Proof of Stake (SSPoS) consensus mechanism",
          "The network achieved 600+ validators in the first month with no minimum stake requirement",
          "Pactus GUI wallet enables non-technical users to run full validator nodes on consumer hardware",
          "Community growth surged 180% following mainnet launch, with active developer contributions rising steadily",
        ],
      },
      analytics: {
        confidence: 82,
        trend: "Early Traction",
        insight:
          "Pactus's zero-minimum-stake model and desktop validator approach could capture the underserved 'everyday user' segment of blockchain validation.",
      },
      report: {
        title: "Pactus Blockchain: Accessibility-First Infrastructure",
        summary:
          "Pactus is pioneering an accessibility-first approach to blockchain infrastructure. By eliminating minimum stake requirements and enabling GUI-based validation, it's lowering barriers that have historically locked out smaller participants.",
        metrics: [
          { label: "Validator Count", value: "600+" },
          { label: "Min. Stake Required", value: "0 PAC" },
          { label: "Community Growth", value: "+180%" },
        ],
      },
      marketing: {
        channels: ["twitter", "linkedin", "email", "telegram"],
        message: "Ready to publish across 4 channels",
      },
    };
  }

  // Default / generic
  return {
    research: {
      sourceCount: 2156,
      findings: [
        `Identified 2,156 relevant sources covering "${topic}" across news, research, and social media`,
        "Sentiment analysis reveals 64% positive, 22% neutral, 14% negative coverage in the last 30 days",
        "Key influencer activity has increased 85% around this topic in the past two weeks",
        "Three major market-moving events detected in the last 7 days correlating with this theme",
      ],
    },
    analytics: {
      confidence: 79,
      trend: "Emerging Interest",
      insight:
        "Growing attention from both institutional and retail audiences suggests this topic is approaching a critical inflection point in public discourse.",
    },
    report: {
      title: `${topic}: Market Intelligence Briefing`,
      summary: `Our multi-agent analysis of "${topic}" reveals an accelerating interest curve with strong engagement signals. The data suggests strategic opportunities for early movers who position thought-leadership content around this theme.`,
      metrics: [
        { label: "Interest Trend", value: "↑ 85%" },
        { label: "Audience Reach", value: "2.4M" },
        { label: "Content Gap Score", value: "High" },
      ],
    },
    marketing: {
      channels: ["twitter", "linkedin", "email", "telegram"],
      message: "Ready to publish across 4 channels",
    },
  };
}

/* ════════════════════════════════════════════════════════════
   STAGE METADATA
   ════════════════════════════════════════════════════════════ */

interface Stage {
  id: number;
  name: string;
  color: string;
  colorRGB: string;
  processingLabel: string;
  duration: number;
  icon: React.ReactNode;
}

const STAGES: Stage[] = [
  {
    id: 0,
    name: "Research Agent",
    color: "#3B82F6",
    colorRGB: "59,130,246",
    processingLabel: "Scanning sources...",
    duration: 2000,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 1,
    name: "Analytics Agent",
    color: "#00b2a9",
    colorRGB: "0,178,169",
    processingLabel: "Analyzing patterns...",
    duration: 2000,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Report Agent",
    color: "#8B5CF6",
    colorRGB: "139,92,246",
    processingLabel: "Generating report...",
    duration: 2000,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Marketing Agent",
    color: "#F97316",
    colorRGB: "249,115,22",
    processingLabel: "Preparing distribution...",
    duration: 1500,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

const SUGGESTION_CHIPS = ["Bitcoin ETF", "AI Regulation", "DeFi Trends", "Pactus Blockchain"];

/* Channel Icons */
const ChannelIcon = ({ channel }: { channel: string }) => {
  switch (channel) {
    case "twitter":
      return (
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">X / Twitter</span>
        </div>
      );
    case "linkedin":
      return (
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">LinkedIn</span>
        </div>
      );
    case "email":
      return (
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">Email</span>
        </div>
      );
    case "telegram":
      return (
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-[#26A5E4]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">Telegram</span>
        </div>
      );
    default:
      return null;
  }
};

/* ════════════════════════════════════════════════════════════
   TYPEWRITER HOOK
   ════════════════════════════════════════════════════════════ */

function useTypewriter(text: string, speed: number = 18, enabled: boolean = false) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayed("");
      indexRef.current = 0;
      return;
    }
    setDisplayed("");
    indexRef.current = 0;

    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return displayed;
}

/* ════════════════════════════════════════════════════════════
   COUNTER HOOK (animated number)
   ════════════════════════════════════════════════════════════ */

function useCounter(target: number, duration: number = 1400, enabled: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setCount(0);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration, enabled]);

  return count;
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════ */

type PipelineState = "idle" | "processing" | "complete";

export default function LiveDemo() {
  const [topic, setTopic] = useState("");
  const [pipelineState, setPipelineState] = useState<PipelineState>("idle");
  const [activeStage, setActiveStage] = useState(-1);
  const [completedStages, setCompletedStages] = useState<Set<number>>(new Set());
  const [responses, setResponses] = useState<StageResponses | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* Source counter animated for stage 0 */
  const sourceCount = useCounter(
    responses?.research.sourceCount ?? 0,
    1600,
    activeStage >= 0
  );

  /* Typewriter for report summary (stage 2) */
  const reportSummary = useTypewriter(
    responses?.report.summary ?? "",
    14,
    completedStages.has(2)
  );

  /* Cleanup timeouts on unmount */
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const runPipeline = useCallback(
    (inputTopic: string) => {
      const t = inputTopic.trim();
      if (!t) return;

      // Reset
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
      setCompletedStages(new Set());
      setActiveStage(-1);

      const data = getResponses(t);
      setResponses(data);
      setTopic(t);
      setPipelineState("processing");

      // Sequence stages
      let cumulativeDelay = 300; // small initial delay

      STAGES.forEach((stage, idx) => {
        // Activate stage
        const activateT = setTimeout(() => {
          setActiveStage(idx);
        }, cumulativeDelay);
        timeoutsRef.current.push(activateT);

        // Complete stage after its duration
        cumulativeDelay += stage.duration;
        const completeT = setTimeout(() => {
          setCompletedStages((prev) => new Set([...prev, idx]));
        }, cumulativeDelay);
        timeoutsRef.current.push(completeT);
      });

      // All done
      const doneT = setTimeout(() => {
        setPipelineState("complete");
      }, cumulativeDelay + 400);
      timeoutsRef.current.push(doneT);
    },
    []
  );

  const handleReset = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setPipelineState("idle");
    setActiveStage(-1);
    setCompletedStages(new Set());
    setResponses(null);
    setTopic("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runPipeline(topic);
  };

  /* ─── Stage Status Helper ─── */
  const getStageStatus = (idx: number): "pending" | "active" | "completed" => {
    if (completedStages.has(idx)) return "completed";
    if (activeStage === idx) return "active";
    return "pending";
  };

  /* ═══════════════ RENDER ═══════════════ */
  return (
    <section id="demo" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#00b2a9]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b2a9]/10 border border-[#00b2a9]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00b2a9] dot-pulse" />
            <span className="text-sm font-medium text-[#00b2a9]">Try It Live</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            See the Agents{" "}
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Enter any topic and watch our AI pipeline transform it from raw intelligence to actionable insight.
          </p>
        </div>

        {/* ─── Input Area ─── */}
        {pipelineState === "idle" && (
          <div className="feed-slide-in max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="relative flex gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter a topic… (e.g., Bitcoin ETF, AI regulation, DeFi trends)"
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00b2a9] focus:ring-1 focus:ring-[#00b2a9]/30 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                disabled={!topic.trim()}
                className="px-6 py-3.5 rounded-2xl bg-[#00b2a9] hover:bg-[#00d4c7] text-black font-semibold text-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#00b2a9]/25 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed"
              >
                Run Pipeline
              </button>
            </form>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="text-xs text-gray-500 mr-1">Quick try:</span>
              {SUGGESTION_CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setTopic(chip);
                    runPipeline(chip);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-gray-800/60 border border-gray-700 text-xs text-gray-300 hover:border-[#00b2a9]/60 hover:text-[#00d4c7] transition-all duration-200 hover:scale-105"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─── Pipeline Visualization ─── */}
        {pipelineState !== "idle" && (
          <div className="feed-slide-in">
            {/* Active Topic pill */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/70 border border-gray-700">
                <svg className="w-4 h-4 text-[#00b2a9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-300">
                  Analyzing: <span className="text-white font-semibold">&ldquo;{topic}&rdquo;</span>
                </span>
              </div>
            </div>

            {/* Stage Cards */}
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical progress line */}
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gray-800">
                <div
                  className="w-full bg-gradient-to-b from-[#3B82F6] via-[#00b2a9] via-[#8B5CF6] to-[#F97316] transition-all duration-700 ease-out"
                  style={{
                    height:
                      completedStages.size === 0
                        ? activeStage >= 0
                          ? "12%"
                          : "0%"
                        : `${Math.min(((Math.max(...completedStages) + 1) / STAGES.length) * 100, 100)}%`,
                  }}
                />
              </div>

              <div className="space-y-4">
                {STAGES.map((stage, idx) => {
                  const status = getStageStatus(idx);
                  const isVisible = activeStage >= idx;

                  return (
                    <div
                      key={stage.id}
                      className={`relative pl-14 sm:pl-16 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-3 sm:left-4 top-5 z-10">
                        {status === "completed" ? (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 flex items-center justify-center scale-pop">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : status === "active" ? (
                          <div className="relative">
                            <div
                              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                              style={{ backgroundColor: stage.color }}
                            />
                            <div
                              className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full pulse-ring"
                              style={{ backgroundColor: stage.color }}
                            />
                          </div>
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-700 border-2 border-gray-600" />
                        )}
                      </div>

                      {/* Stage Card */}
                      <div
                        className={`rounded-2xl border p-5 sm:p-6 transition-all duration-500 ${
                          status === "active"
                            ? "bg-gray-900/80 border-gray-700"
                            : status === "completed"
                            ? "bg-gray-900/50 border-gray-800"
                            : "bg-gray-900/30 border-gray-800/50"
                        }`}
                        style={
                          status === "active"
                            ? {
                                boxShadow: `0 0 30px rgba(${stage.colorRGB}, 0.12), 0 0 60px rgba(${stage.colorRGB}, 0.06)`,
                                borderColor: `rgba(${stage.colorRGB}, 0.4)`,
                              }
                            : undefined
                        }
                      >
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor:
                                status === "pending"
                                  ? "rgb(55,65,81)"
                                  : `rgba(${stage.colorRGB}, 0.15)`,
                              color: status === "pending" ? "rgb(156,163,175)" : stage.color,
                            }}
                          >
                            {stage.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4
                              className="font-semibold text-sm sm:text-base"
                              style={{
                                color: status === "pending" ? "rgb(156,163,175)" : "white",
                              }}
                            >
                              {stage.name}
                            </h4>
                          </div>
                          {status === "active" && (
                            <div className="flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded-full border-2 border-t-transparent process-spin"
                                style={{ borderColor: stage.color, borderTopColor: "transparent" }}
                              />
                              <span className="text-xs font-medium" style={{ color: stage.color }}>
                                Processing
                              </span>
                            </div>
                          )}
                          {status === "completed" && (
                            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Complete
                            </span>
                          )}
                        </div>

                        {/* Active: Progress Bar */}
                        {status === "active" && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                              <span>{stage.processingLabel}</span>
                              {idx === 0 && (
                                <span style={{ color: stage.color }}>
                                  {sourceCount.toLocaleString()} sources
                                </span>
                              )}
                            </div>
                            <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  backgroundColor: stage.color,
                                  animation: `progressFill ${stage.duration}ms ease-out forwards`,
                                }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Completed Content */}
                        {status === "completed" && responses && (
                          <div className="mt-3 feed-slide-in">
                            {/* Stage 0: Research findings */}
                            {idx === 0 && (
                              <div className="space-y-2">
                                <div className="text-xs text-gray-500 mb-2">
                                  Found {responses.research.sourceCount.toLocaleString()} sources • Key findings:
                                </div>
                                {responses.research.findings.map((finding, fIdx) => (
                                  <div
                                    key={fIdx}
                                    className="flex items-start gap-2 text-sm text-gray-300"
                                    style={{ animationDelay: `${fIdx * 80}ms` }}
                                  >
                                    <span className="text-[#3B82F6] mt-0.5 shrink-0">▸</span>
                                    <span className="leading-relaxed">{finding}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Stage 1: Analytics */}
                            {idx === 1 && (
                              <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-800/40 rounded-xl p-3 text-center">
                                  <div className="text-2xl font-bold text-[#00b2a9]">
                                    {responses.analytics.confidence}%
                                  </div>
                                  <div className="text-[10px] text-gray-500 mt-0.5">Confidence</div>
                                </div>
                                <div className="bg-gray-800/40 rounded-xl p-3 text-center">
                                  <div className="text-sm font-semibold text-white">
                                    {responses.analytics.trend}
                                  </div>
                                  <div className="text-[10px] text-gray-500 mt-0.5">Trend</div>
                                </div>
                                <div className="col-span-1 bg-gray-800/40 rounded-xl p-3">
                                  <div className="text-[10px] text-gray-500 mb-1">Key Insight</div>
                                  <div className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                                    {responses.analytics.insight}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Stage 2: Report */}
                            {idx === 2 && (
                              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                                <h5 className="text-sm font-semibold text-white mb-2">
                                  📄 {responses.report.title}
                                </h5>
                                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                                  {reportSummary}
                                  <span className="inline-block w-0.5 h-3.5 bg-[#8B5CF6] ml-0.5 align-middle cursor-blink" />
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {responses.report.metrics.map((m, mIdx) => (
                                    <div
                                      key={mIdx}
                                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-900/60 border border-gray-700/50"
                                    >
                                      <span className="text-[10px] text-gray-500">{m.label}:</span>
                                      <span className="text-xs font-semibold text-[#8B5CF6]">{m.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Stage 3: Marketing */}
                            {idx === 3 && (
                              <div>
                                <div className="flex items-center justify-center gap-6 mb-3">
                                  {responses.marketing.channels.map((ch) => (
                                    <ChannelIcon key={ch} channel={ch} />
                                  ))}
                                </div>
                                <div className="flex items-center justify-center gap-2 text-sm text-emerald-400 font-medium">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {responses.marketing.message}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Complete state - Run Again */}
            {pipelineState === "complete" && (
              <div className="text-center mt-10 feed-slide-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-emerald-400">Pipeline Complete</span>
                </div>
                <div className="block">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-[#00b2a9]/50 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                  >
                    ↻ Run Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
