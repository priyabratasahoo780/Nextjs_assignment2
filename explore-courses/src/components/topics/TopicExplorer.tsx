import React from "react";
import Link from "next/link";

interface TopicExplorerProps {
  slug?: string[];
  routePattern?: string;
}

export const TopicExplorer: React.FC<TopicExplorerProps> = ({
  slug,
  routePattern = "/topics/[[...slug]]",
}) => {
  const currentPath = slug && slug.length > 0 ? slug.join("/") : "frontend/react";
  const displaySegments = slug && slug.length > 0 ? slug : ["frontend", "react"];

  const modules = [
    {
      moduleNum: "01",
      title: "Next.js App Router Fundamentals",
      lessons: "14 Lessons",
      level: "Intermediate",
      description:
        "Master nested layouts, parallel slots, intercepting routes, dynamic segment matching, and optimized loading boundaries in modern Next.js architectures.",
      instructorInitials: "AR",
      instructorName: "Alex Rivera",
      instructorRole: "Senior Platform Architect",
      slugPath: "/frontend/react/nextjs-fundamentals",
      courseId: "nextjs-app-router-fundamentals",
    },
    {
      moduleNum: "02",
      title: "Modern State Management & Signals",
      lessons: "10 Lessons",
      level: "Intermediate",
      description:
        "Compare atom-based paradigms, reactive signals, finite state machines, and context optimization strategies without unnecessary component re-renders.",
      instructorInitials: "AM",
      instructorName: "Aarav Mehta",
      instructorRole: "Reactive Systems Lead",
      slugPath: "/frontend/react/state-signals",
      courseId: "modern-state-management-signals",
    },
    {
      moduleNum: "03",
      title: "React Server Components Under the Hood",
      lessons: "8 Lessons",
      level: "Advanced",
      description:
        "Dissect serialized flight data streams, module boundary graph splitting, selective client hydration, and zero-bundle server logic primitives.",
      instructorInitials: "SL",
      instructorName: "Sarah Lin",
      instructorRole: "Compilers & Runtimes Researcher",
      slugPath: "/frontend/react/rsc-internals",
      courseId: "nextjs-app-router-fundamentals",
    },
    {
      moduleNum: "04",
      title: "Enterprise Monorepo Architectures with React",
      lessons: "12 Lessons",
      level: "Advanced",
      description:
        "Build isolated UI design component packages, orchestrate Turborepo pipelines, configure isolated bundlers, and enforce package isolation boundaries.",
      instructorInitials: "MC",
      instructorName: "Marcus Chen",
      instructorRole: "Enterprise Infrastructure Lead",
      slugPath: "/frontend/react/monorepo-systems",
      courseId: "typescript-enterprise-patterns",
    },
  ];

  const relatedPaths = [
    {
      title: "Frontend Architecture",
      subtitle: "Design systems, micro-frontends & testing at scale",
      tracksCount: "3 Tracks →",
      icon: (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Distributed Web",
      subtitle: "Edge computing, caching layers & geo-routing",
      tracksCount: "5 Tracks →",
      icon: (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "TypeScript Deep Dive",
      subtitle: "Conditional types, template literals & ASTs",
      tracksCount: "4 Tracks →",
      icon: (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-2">
      <div className="mb-6 p-2.5 bg-slate-50 border border-slate-200 rounded-md flex flex-wrap items-center justify-between text-xs font-mono text-slate-600 gap-2">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            Route pattern: <span className="font-semibold text-slate-900">{routePattern}</span> → resolved to:{" "}
            <span className="text-blue-600 font-semibold">/topics/{currentPath}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 font-sans">
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700">
            Optional Catch-All
          </span>
          <span className="text-[11px] text-slate-400">SSR Node Layer</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs mb-6">
        <div className="flex items-center gap-1.5 text-slate-500">
          <Link href="/courses" className="hover:text-blue-600 transition-colors">
            ← All Topics
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600">Topics</span>
          <span className="text-slate-300">/</span>
          {displaySegments.map((seg, idx) => (
            <React.Fragment key={idx}>
              <span className={idx === displaySegments.length - 1 ? "text-slate-900 font-medium capitalize" : "text-slate-600 capitalize"}>
                {seg}
              </span>
              {idx < displaySegments.length - 1 && <span className="text-slate-300">/</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-600 border border-blue-100 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Curriculum Track 2025
          </span>
          <span className="text-slate-500 text-xs">4 Modules Available</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 mb-7 shadow-xs">
        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-blue-600 bg-blue-50 uppercase mb-3">
          SPECIALIZED DOMAIN TRACK
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          React & Next.js Ecosystem
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Deep dive into component architecture, state machines, server rendering paradigms, and modern framework primitives designed for production-scale distributed applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 mt-6 border-t border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Total Content</span>
            <span className="font-bold text-slate-900 text-sm mt-0.5 block">44 Lessons</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Difficulty Range</span>
            <span className="font-bold text-slate-900 text-sm mt-0.5 block">Int. to Advanced</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Core Primitives</span>
            <span className="font-bold text-slate-900 text-sm mt-0.5 block">RSC, Hydration, Signals</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Verification</span>
            <span className="font-bold text-slate-900 text-sm mt-0.5 block">Peer-Reviewed</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-blue-50 text-blue-600 border border-blue-200">
            All React
          </button>
          <button className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">
            Server Components
          </button>
          <button className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">
            State & Signals
          </button>
          <button className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">
            Routing Architecture
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          <span>Sorted by Curriculum Sequence</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {modules.map((mod) => (
          <div
            key={mod.moduleNum}
            className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-600">
                  Module {mod.moduleNum}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <span>⏱</span> {mod.lessons} · {mod.level}
                </span>
              </div>

              <Link href={`/courses/${mod.courseId}`}>
                <h3 className="font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors leading-snug">
                  {mod.title}
                </h3>
              </Link>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {mod.description}
              </p>

              <div className="flex items-center gap-2 mt-4 text-xs text-slate-600">
                <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                  {mod.instructorInitials}
                </span>
                <span className="font-medium text-slate-900">{mod.instructorName}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 text-[11px]">{mod.instructorRole}</span>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] text-slate-400 truncate max-w-[180px]">
                Slug: {mod.slugPath}
              </span>

              <div className="flex items-center gap-3">
                <Link
                  href={`/courses/${mod.courseId}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  View course →
                </Link>
                <Link
                  href={`/courses/${mod.courseId}`}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold transition-colors shadow-2xs"
                >
                  Start topic
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Related Learning Paths</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Explore adjacent tracks in the curriculum graph to expand full-stack competency.
            </p>
          </div>
          <button className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1">
            Explore graph <span>✦</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  {path.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-xs">{path.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {path.subtitle}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600">
                {path.tracksCount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
