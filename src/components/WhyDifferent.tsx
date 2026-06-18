"use client";

/* ─── Differentiator data ─── */
const differentiators = [
  {
    title: "Autonomous Execution",
    description:
      "Our agents don't wait for instructions. They monitor, analyze, and act 24/7.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Compound Intelligence",
    description:
      "Every task makes the system smarter. Your agents learn from every data point.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "End-to-End Pipeline",
    description:
      "From raw data to published content, one unified system handles it all.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

/* ─── Comparison data ─── */
const traditional = ["Manual research", "Static reports", "Delayed publishing"];
const kyvra = ["Real-time intelligence", "Dynamic insights", "Instant distribution"];

/* ─── X mark icon ─── */
const XMark = () => (
  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ─── Checkmark icon ─── */
const CheckMark = () => (
  <svg className="w-4 h-4 text-[#00d4c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ─── Main component ─── */
export default function WhyDifferent() {
  return (
    <section
      className="relative py-20 sm:py-28 px-6 bg-gray-900/20 scroll-reveal-up"
    >
      {/* Subtle top-edge radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 30% at 50% 0%, rgba(0,178,169,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Heading ── */}
        <div
          className={`text-center mb-14 sm:mb-20 scroll-reveal-up`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Not Just Another Agency —{" "}
            <span className="gradient-text">An Intelligence Layer</span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ─ Left: Text content ─ */}
          <div>
            <p
              className={`text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg scroll-reveal-up`}
            >
              Most software agencies build what you ask for. Kyvra builds what you{" "}
              <em className="text-white not-italic font-medium">need</em> —
              autonomous AI systems that think, learn, and act on your behalf.
            </p>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((d, i) => (
                <div
                  key={d.title}
                  className={`group flex gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-500 hover:-translate-y-0.5 scroll-reveal-up`}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,178,169,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[#00b2a9] transition-colors duration-300 group-hover:text-[#00d4c7]"
                    style={{ background: "rgba(0,178,169,0.08)" }}
                  >
                    {d.icon}
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {d.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─ Right: Comparison card ─ */}
          <div
            className={`scroll-scale-in`}
          >
            <div className="gradient-border rounded-2xl overflow-hidden">
              <div className="bg-gray-900/70 rounded-2xl p-6 sm:p-8">
                {/* Traditional Agency */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Traditional Agency
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {traditional.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 pl-4 py-2.5 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <XMark />
                        <span className="text-gray-600 text-sm line-through decoration-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-800" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-gray-900/70 text-xs text-gray-600 uppercase tracking-widest">
                      vs
                    </span>
                  </div>
                </div>

                {/* Kyvra AI Ecosystem */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#00b2a9] dot-pulse" />
                    <h4 className="text-sm font-semibold text-[#00b2a9] uppercase tracking-wider">
                      Kyvra AI Ecosystem
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {kyvra.map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 pl-4 py-2.5 rounded-xl transition-all duration-500 scroll-reveal-up`}
                        style={{
                          background: "linear-gradient(135deg, rgba(0,178,169,0.06) 0%, rgba(0,212,199,0.03) 100%)",
                          border: "1px solid rgba(0,178,169,0.12)",
                        }}
                      >
                        <CheckMark />
                        <span className="text-gray-300 text-sm font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-5 border-t border-gray-800/60">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {["#3B82F6", "#00b2a9", "#8B5CF6", "#F97316"].map((c) => (
                          <span
                            key={c}
                            className="w-3 h-3 rounded-full ring-2 ring-gray-900"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        4 agents working in parallel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
