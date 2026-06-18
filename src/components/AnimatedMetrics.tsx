"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Metric definitions ─── */
interface Metric {
  label: string;
  value: number;
  suffix: string;
  prefix: string;
  decimals: number;
}

const metrics: Metric[] = [
  { label: "Uptime", value: 99.9, suffix: "%", prefix: "", decimals: 1 },
  { label: "Data Points Processed", value: 12, suffix: "M+", prefix: "", decimals: 0 },
  { label: "Response Time", value: 50, suffix: "ms", prefix: "<", decimals: 0 },
  { label: "Active Monitoring", value: 24, suffix: "/7", prefix: "", decimals: 0 },
];

/* ─── Agent activity messages ─── */
interface Activity {
  id: number;
  agent: string;
  color: string;
  message: string;
}

const activityTemplates: Omit<Activity, "id">[] = [
  { agent: "Research", color: "#3B82F6", message: "Research Agent scanned 142 new sources" },
  { agent: "Analytics", color: "#00b2a9", message: "Analytics Agent detected bullish trend in DeFi sector" },
  { agent: "Report", color: "#8B5CF6", message: "Report Agent generated weekly crypto summary" },
  { agent: "Marketing", color: "#F97316", message: "Marketing Agent published to 3 channels" },
  { agent: "Research", color: "#3B82F6", message: "Research Agent monitoring 2,847 active feeds" },
  { agent: "Analytics", color: "#00b2a9", message: "Analytics Agent confidence: 94.2% on latest analysis" },
  { agent: "Supervisor", color: "#EC4899", message: "Supervisor Agent resolved routing conflict" },
  { agent: "Report", color: "#8B5CF6", message: "Report Agent translated summary to Vietnamese" },
  { agent: "Research", color: "#3B82F6", message: "Research Agent indexed 58 whitepapers" },
  { agent: "Marketing", color: "#F97316", message: "Marketing Agent optimized audience targeting" },
];

/* ─── Metric icons ─── */
const MetricIcon = ({ index }: { index: number }) => {
  const icons = [
    // Uptime — shield check
    <svg key="uptime" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    // Data Points — chart
    <svg key="data" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>,
    // Response Time — bolt
    <svg key="speed" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>,
    // Active Monitoring — eye
    <svg key="monitor" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
  ];
  return icons[index];
};

/* ─── Animated counter hook ─── */
function useCountUp(end: number, decimals: number, trigger: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setValue(Number(current.toFixed(decimals)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [trigger, end, decimals, duration]);

  return value;
}

/* ─── Single stat card ─── */
function StatCard({ metric, index, triggered }: { metric: Metric; index: number; triggered: boolean }) {
  const count = useCountUp(metric.value, metric.decimals, triggered);

  return (
    <div
      className="relative group rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,178,169,0.05) 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ boxShadow: "inset 0 0 40px rgba(0,178,169,0.06)" }} />

      <div className="relative z-10 flex flex-col items-center text-center gap-2">
        <div className="text-[#00b2a9] mb-1">
          <MetricIcon index={index} />
        </div>
        <div className={`text-3xl sm:text-4xl font-bold text-white tracking-tight ${triggered ? "count-up" : "opacity-0"}`}>
          {metric.prefix}{count}{metric.suffix}
        </div>
        <div className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-widest">
          {metric.label}
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function AnimatedMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [visibleActivities, setVisibleActivities] = useState<Activity[]>([]);
  const cycleIndex = useRef(0);
  const activityIdCounter = useRef(0);

  /* IntersectionObserver — fire once */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Build a new activity with a unique id */
  const buildActivity = useCallback((templateIndex: number): Activity => {
    const template = activityTemplates[templateIndex % activityTemplates.length];
    activityIdCounter.current += 1;
    return { ...template, id: activityIdCounter.current };
  }, []);

  /* Initialise 3 activities */
  useEffect(() => {
    const initial: Activity[] = [];
    for (let i = 0; i < 3; i++) {
      initial.push(buildActivity(i));
    }
    cycleIndex.current = 3;
    setVisibleActivities(initial);
  }, [buildActivity]);

  /* Cycle activities every 3s */
  useEffect(() => {
    const timer = setInterval(() => {
      const newActivity = buildActivity(cycleIndex.current);
      cycleIndex.current += 1;
      setVisibleActivities((prev) => [newActivity, ...prev.slice(0, 2)]);
    }, 3000);
    return () => clearInterval(timer);
  }, [buildActivity]);

  /* Timestamps for display */
  const timestamps = ["just now", "2s ago", "5s ago", "9s ago", "14s ago"];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── Outer gradient-bordered card ── */}
        <div className="gradient-border rounded-2xl overflow-hidden">
          <div className="relative bg-gray-900/50 rounded-2xl p-6 sm:p-10">
            {/* Shimmer overlay */}
            <div className="shimmer absolute inset-0 pointer-events-none rounded-2xl" />

            {/* Section header */}
            <div className="relative z-10 text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700/60 bg-gray-800/40 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b2a9] dot-pulse" />
                <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                  Live System Metrics
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Performance at <span className="gradient-text">Scale</span>
              </h2>
            </div>

            {/* ── Stats grid ── */}
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {metrics.map((m, i) => (
                <StatCard key={m.label} metric={m} index={i} triggered={triggered} />
              ))}
            </div>

            {/* ── Live activity feed ── */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Live Agent Activity
                </span>
              </div>

              <div
                className="custom-scrollbar rounded-xl overflow-hidden"
                style={{
                  maxHeight: 220,
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="p-3 sm:p-4 space-y-2">
                  {visibleActivities.map((activity, idx) => (
                    <div
                      key={activity.id}
                      className={`flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-white/[0.03] ${
                        idx === 0 ? "feed-slide-in" : ""
                      }`}
                    >
                      {/* Agent color dot */}
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0 dot-pulse"
                        style={{ backgroundColor: activity.color }}
                      />

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300 leading-snug truncate">
                          {activity.message}
                        </p>
                      </div>

                      <span className="text-[10px] text-gray-600 whitespace-nowrap mt-0.5 shrink-0">
                        {timestamps[idx] ?? `${idx * 4}s ago`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
