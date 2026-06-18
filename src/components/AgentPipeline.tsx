"use client";

import { useState } from "react";

/* ───────────────────── Agent data ───────────────────── */
interface Agent {
  id: number;
  step: string;
  name: string;
  role: string;
  description: string;
  features: string[];
  color: string;
  colorRgb: string;
  glowClass: string;
  floatDelay: string;
  icon: React.ReactNode;
}

const agents: Agent[] = [
  {
    id: 0,
    step: "01",
    name: "Research Agent",
    role: "Intelligence Gathering",
    description:
      "Autonomously crawls multiple data sources, extracts key signals, and builds a real-time intelligence layer for downstream agents.",
    features: ["Multi-source crawling", "Signal extraction", "Real-time monitoring"],
    color: "#3B82F6",
    colorRgb: "59, 130, 246",
    glowClass: "glow-pulse-blue",
    floatDelay: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    id: 1,
    step: "02",
    name: "Analytics Agent",
    role: "Deep Analysis",
    description:
      "Detects emerging trends, scores confidence levels, and surfaces hidden patterns through multi-dimensional analysis.",
    features: ["Trend detection", "Confidence scoring", "Pattern recognition"],
    color: "#00b2a9",
    colorRgb: "0, 178, 169",
    glowClass: "glow-pulse-teal",
    floatDelay: "float-delay-1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    id: 2,
    step: "03",
    name: "Report Agent",
    role: "Narrative Synthesis",
    description:
      "Transforms raw analysis into polished narratives — summarized, formatted, and localized for every audience.",
    features: ["Automated summarization", "Multi-format output", "Localized content"],
    color: "#8B5CF6",
    colorRgb: "139, 92, 246",
    glowClass: "glow-pulse-violet",
    floatDelay: "float-delay-2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    id: 3,
    step: "04",
    name: "Marketing Agent",
    role: "Content Distribution",
    description:
      "Publishes across every channel, targets the right audiences, and continuously optimizes performance analytics.",
    features: ["Multi-channel publishing", "Audience targeting", "Performance analytics"],
    color: "#F97316",
    colorRgb: "249, 115, 22",
    glowClass: "glow-pulse-orange",
    floatDelay: "float-delay-3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98" />
        <path d="m15.41 6.51-6.82 3.98" />
      </svg>
    ),
  },
];

/* ────────────────── Connector SVG (horizontal) ────────────────── */
function HorizontalConnector({
  fromColor,
  toColor,
  active,
  index,
}: {
  fromColor: string;
  toColor: string;
  active: boolean;
  index: number;
}) {
  const gradientId = `hgrad-${index}`;
  return (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-16 xl:w-24 relative">
      <svg
        className="w-full h-12 overflow-visible"
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        {/* glow line behind */}
        <line
          x1="0" y1="12" x2="100" y2="12"
          stroke={`url(#${gradientId})`}
          strokeWidth={active ? "4" : "2"}
          className={`connector-glow transition-all duration-500`}
          style={{ filter: active ? "blur(4px)" : "blur(2px)" }}
        />
        {/* main dashed line */}
        <line
          x1="0" y1="12" x2="100" y2="12"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          className="dash-flow"
          style={{ opacity: active ? 1 : 0.5 }}
        />
      </svg>
      {/* traveling dot 1 */}
      <span
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: fromColor,
          boxShadow: `0 0 8px ${fromColor}`,
          offsetPath: `path('M 0 0 L ${100} 0')`,
          offsetRotate: "0deg",
          animation: `travelDot ${2 + index * 0.3}s ease-in-out infinite`,
          animationDelay: `${index * 0.4}s`,
          top: "50%",
          left: "0",
          marginTop: "-4px",
          opacity: active ? 1 : 0.4,
        }}
      />
      {/* traveling dot 2 (offset) */}
      <span
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{
          background: toColor,
          boxShadow: `0 0 6px ${toColor}`,
          offsetPath: `path('M 0 0 L ${100} 0')`,
          offsetRotate: "0deg",
          animation: `travelDot ${2.5 + index * 0.2}s ease-in-out infinite`,
          animationDelay: `${index * 0.4 + 1.2}s`,
          top: "50%",
          left: "0",
          marginTop: "-3px",
          opacity: active ? 1 : 0.3,
        }}
      />
    </div>
  );
}

/* ────────────────── Connector SVG (vertical — mobile) ────────────────── */
function VerticalConnector({
  fromColor,
  toColor,
  active,
  index,
}: {
  fromColor: string;
  toColor: string;
  active: boolean;
  index: number;
}) {
  const gradientId = `vgrad-${index}`;
  return (
    <div className="flex lg:hidden items-center justify-center h-16 relative">
      <svg
        className="h-full w-6 overflow-visible"
        viewBox="0 0 24 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <line
          x1="12" y1="0" x2="12" y2="100"
          stroke={`url(#${gradientId})`}
          strokeWidth={active ? "4" : "2"}
          className="connector-glow transition-all duration-500"
          style={{ filter: active ? "blur(4px)" : "blur(2px)" }}
        />
        <line
          x1="12" y1="0" x2="12" y2="100"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          className="dash-flow"
          style={{ opacity: active ? 1 : 0.5 }}
        />
      </svg>
      {/* traveling dot */}
      <span
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: fromColor,
          boxShadow: `0 0 8px ${fromColor}`,
          offsetPath: `path('M 0 0 L 0 64')`,
          offsetRotate: "0deg",
          animation: `travelDot ${2 + index * 0.3}s ease-in-out infinite`,
          animationDelay: `${index * 0.5}s`,
          left: "50%",
          top: "0",
          marginLeft: "-4px",
          opacity: active ? 1 : 0.4,
        }}
      />
    </div>
  );
}

/* ────────────────── Agent Card ────────────────── */
function AgentCard({
  agent,
  isActive,
  onHover,
  onLeave,
  onClick,
}: {
  agent: Agent;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <div
      className={`float ${agent.floatDelay} group relative flex-1 min-w-0`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer
          bg-[#0a0a0a]
          ${isActive
            ? `border-[${agent.color}]/50 -translate-y-2 scale-[1.02] ${agent.glowClass}`
            : "border-gray-800 hover:border-gray-700 hover:-translate-y-1"
          }
        `}
        style={{
          borderColor: isActive ? agent.color + "80" : undefined,
          boxShadow: isActive
            ? `0 0 32px rgba(${agent.colorRgb}, 0.25), 0 8px 32px rgba(0,0,0,0.4)`
            : undefined,
        }}
      >
        {/* ── Top accent bar ── */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${agent.color}, ${agent.color}88)`,
          }}
        />

        <div className="p-5 lg:p-6">
          {/* Step number */}
          <span
            className="absolute top-4 right-4 text-4xl lg:text-5xl font-black select-none pointer-events-none"
            style={{ color: agent.color, opacity: 0.08 }}
          >
            {agent.step}
          </span>

          {/* Icon container */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `rgba(${agent.colorRgb}, 0.12)`,
              color: agent.color,
            }}
          >
            {agent.icon}
          </div>

          {/* Name & role */}
          <h3 className="text-white font-semibold text-base lg:text-lg leading-tight mb-1">
            {agent.name}
          </h3>
          <p
            className="text-xs font-medium uppercase tracking-wider mb-3"
            style={{ color: agent.color }}
          >
            {agent.role}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {agent.description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5">
            {agent.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: agent.color }}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Active indicator dot */}
        {isActive && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: agent.color,
                boxShadow: `0 0 8px ${agent.color}`,
              }}
            />
            <span className="text-[10px] font-medium uppercase tracking-widest" style={{ color: agent.color }}>
              Active
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   MAIN COMPONENT — AgentPipeline
   ════════════════════════════════════════════════════ */
export default function AgentPipeline() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleHover = (id: number) => setActiveId(id);
  const handleLeave = () => setActiveId(null);
  const handleClick = (id: number) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <section
      id="ecosystem"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 dot-pulse" />
            <span className="text-violet-400 text-xs font-medium uppercase tracking-widest">
              The Vision
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kyvra{" "}
            <span className="gradient-text">AI Ecosystem</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-base lg:text-lg leading-relaxed">
            A unified network of specialized AI agents that work together —
            researching, analyzing, synthesizing, and distributing intelligence
            in a seamless, autonomous pipeline.
          </p>
        </div>

        {/* ── Background connector gradient (desktop) ── */}
        <div className="hidden lg:block absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-4 pointer-events-none">
          <div
            className="w-full h-px connector-glow"
            style={{
              background:
                "linear-gradient(90deg, #3B82F6, #00b2a9, #8B5CF6, #F97316)",
              filter: "blur(6px)",
              opacity: 0.2,
            }}
          />
        </div>

        {/* ── Pipeline row ── */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-0">
          {agents.map((agent, i) => (
            <div key={agent.id} className="contents">
              <AgentCard
                agent={agent}
                isActive={activeId === agent.id}
                onHover={() => handleHover(agent.id)}
                onLeave={handleLeave}
                onClick={() => handleClick(agent.id)}
              />
              {/* Connector between cards (not after the last) */}
              {i < agents.length - 1 && (
                <>
                  <HorizontalConnector
                    fromColor={agents[i].color}
                    toColor={agents[i + 1].color}
                    active={
                      activeId === agents[i].id || activeId === agents[i + 1].id
                    }
                    index={i}
                  />
                  <VerticalConnector
                    fromColor={agents[i].color}
                    toColor={agents[i + 1].color}
                    active={
                      activeId === agents[i].id || activeId === agents[i + 1].id
                    }
                    index={i}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* ── Supervisor Note ── */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <div className="gradient-border rounded-2xl max-w-2xl w-full">
            <div className="flex items-start gap-4 p-5 lg:p-6">
              {/* Orchestrator icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-gray-300"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                  <path d="M8.56 9.44A4.002 4.002 0 0 1 12 2" />
                  <path d="M12 22v-4" />
                  <path d="m15 18-3 3-3-3" />
                  <circle cx="12" cy="14" r="2" />
                  <path d="M5 10h2" />
                  <path d="M17 10h2" />
                  <path d="m7.5 15.5-1.5 1.5" />
                  <path d="m16.5 15.5 1.5 1.5" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                Coordinated by a{" "}
                <strong className="text-white font-semibold">
                  Supervisor Agent
                </strong>{" "}
                — an AI orchestrator that routes tasks, resolves conflicts, and
                ensures coherent output across the entire pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
