import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "About | LearnSpace",
  description: "About LearnSpace - Disciplined academic minimalist curriculum engine.",
};

export default function AboutPage() {
  const architectures = [
    {
      title: "Static Routes",
      pattern: "/courses, /about",
      desc: "Prerendered at build time for instantaneous CDN delivery and zero server latency.",
      badge: "Static (○)",
    },
    {
      title: "Dynamic Segments",
      pattern: "/courses/[id]",
      desc: "Parametric routing resolved on-demand using asynchronous params resolution.",
      badge: "Dynamic (ƒ)",
    },
    {
      title: "Catch-All & Optional",
      pattern: "/topics/[[...slug]], /learn/[id]/[...lessonSlug]",
      desc: "Captures arbitrary multi-level nested segments and lesson players.",
      badge: "Catch-All ([...slug])",
    },
    {
      title: "Route Groups",
      pattern: "(catalog), (learning)",
      desc: "Isolates distinct layouts without altering public URL structures.",
      badge: "Route Groups ((group))",
    },
    {
      title: "Fail-Soft Boundaries",
      pattern: "error.tsx, not-found.tsx",
      desc: "Graceful segment recovery, isolated client boundaries, and custom 404 views.",
      badge: "Boundaries",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center text-xs text-slate-500 mb-6 font-normal">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Index
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-800 font-medium">About</span>
        </nav>

        <div className="mb-3">
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded uppercase">
            ABOUT LEARNSPACE
          </span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Disciplined Academic Curriculum Engine
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            LearnSpace is an online technical curriculum engine engineered to demonstrate modern Next.js App Router patterns, architectural isolation, and structured learning pathways.
          </p>
        </div>

        <div className="bg-[#f0f4ff] border border-blue-100 rounded-lg p-6 mb-10">
          <h2 className="text-sm font-bold text-slate-900 mb-1.5">
            Core Engineering Pedagogy
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            We reject shallow video-only tutorials in favor of rigorous, text-and-code walkthroughs, architectural diagrams, deterministic sandboxes, and deep system design mental models.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              App Router Architecture Matrix
            </h2>
            <span className="text-xs text-slate-400">Next.js 15+ Conventions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {architectures.map((arch, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-slate-900">
                      {arch.title}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {arch.badge}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 bg-slate-50 p-1.5 rounded mb-2.5 border border-slate-100">
                    {arch.pattern}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              Explore Available Curricula
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Browse full-stack development tracks, distributed caching, and state management paths.
            </p>
          </div>
          <Link
            href="/courses"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-semibold transition-colors shadow-xs shrink-0"
          >
            Browse Course Catalog →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
