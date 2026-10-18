"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LessonReaderPage() {
  const params = useParams();
  const id = (params?.id as string) || "nextjs-app-router-fundamentals";
  const lessonSlug = params?.lessonSlug as string[] | undefined;
  const currentSlug = lessonSlug ? lessonSlug[lessonSlug.length - 1] : "dynamic-catch-all-routes";

  const [copied, setCopied] = useState(false);
  const [checklist, setChecklist] = useState({
    item1: true,
    item2: false,
    item3: false,
  });

  const handleCopy = () => {
    const code = `// app/blog/[...slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold">
        Viewing slug path: {slug.join('/')}
      </h1>
    </section>
  );
}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modules = [
    {
      title: "Module 1: Routing Architecture",
      status: "3/4 Done",
      lessons: [
        { num: "01", title: "Introduction & Philosophy", duration: "12m", completed: true, slug: "introduction-philosophy" },
        { num: "02", title: "Server vs Client Components", duration: "18m", completed: true, slug: "server-vs-client-components" },
        { num: "03", title: "Nested Layouts & Templates", duration: "15m", completed: true, slug: "nested-layouts-templates" },
        { num: "04", title: "Dynamic & Catch-All Routes", duration: "6m", completed: false, active: true, slug: "dynamic-catch-all-routes" },
      ],
    },
    {
      title: "Module 2: Data Fetching & Caching",
      status: "0/3",
      lessons: [
        { num: "05", title: "Server-side Fetching & Cache", duration: "22m", completed: false, slug: "server-side-fetching-cache" },
        { num: "06", title: "Revalidation Strategies", duration: "14m", completed: false, slug: "revalidation-strategies" },
        { num: "07", title: "Parallel & Intercepting Routes", duration: "25m", completed: false, slug: "parallel-intercepting-routes" },
      ],
    },
    {
      title: "Module 3: Mutation & Boundary",
      status: "0/2",
      lessons: [
        { num: "08", title: "Server Actions & Forms", duration: "30m", completed: false, slug: "server-actions-forms" },
        { num: "09", title: "Error Boundaries & notFound()", duration: "16m", completed: false, slug: "error-boundaries-notfound" },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-screen bg-white">
      <aside className="w-full md:w-80 border-r border-slate-200 bg-white flex flex-col justify-between shrink-0">
        <div>
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase block">
                COURSE CURRICULUM
              </span>
              <Link href={`/courses/${id}`} className="font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors mt-0.5 block">
                Next.js App Router
              </Link>
            </div>
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              3 Modules
            </span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {modules.map((mod, mIdx) => (
              <div key={mIdx} className="py-2">
                <div className="px-4 py-2 flex items-center justify-between font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span>{mod.title}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-normal">{mod.status}</span>
                </div>

                <div className="space-y-0.5 mt-1">
                  {mod.lessons.map((les) => {
                    const isActive = les.slug === currentSlug || les.active;
                    return (
                      <Link
                        key={les.num}
                        href={`/learn/${id}/${les.slug}`}
                        className={`px-4 py-2 flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-[#eef2ff] text-blue-600 font-semibold border-l-2 border-blue-600"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {les.completed ? (
                            <span className="w-3.5 h-3.5 rounded-full border border-blue-600 bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">
                              ✓
                            </span>
                          ) : isActive ? (
                            <span className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[8px] text-white">
                              ●
                            </span>
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-slate-300"></span>
                          )}
                          <span className="truncate max-w-[180px]">
                            {les.num} {les.title}
                          </span>
                        </div>
                        <span className={`text-[11px] ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                          {les.duration}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <span>&lt;&gt;</span> Exercise Sandbox
          </button>
          <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <span className="w-3.5 h-3.5 rounded-full border border-slate-400 flex items-center justify-center text-[10px]">
              ?
            </span>{" "}
            Help
          </button>
        </div>
      </aside>

      <main className="flex-1 max-w-4xl px-6 md:px-12 py-8 overflow-y-auto">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/courses" className="hover:text-slate-700">Courses</Link>
          <span>/</span>
          <Link href={`/courses/${id}`} className="hover:text-slate-700">Next.js App Router</Link>
          <span>/</span>
          <span>Module 1</span>
          <span>/</span>
          <span className="text-slate-700 font-medium">Dynamic & Catch-All Routes</span>
        </nav>

        <div className="flex items-center gap-2.5 mb-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
            Module 1 · Lesson 04
          </span>
          <span className="text-xs text-slate-500 font-medium">
            System Design Foundations
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          04 Dynamic & Catch-All Routes
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pb-6 mb-6 border-b border-slate-100">
          <span className="flex items-center gap-1">
            6 min read
          </span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-1 text-blue-600 font-medium">
            Code Practice Available
          </span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-1 text-slate-600">
            <span>✓</span> Updated for Next.js 15+
          </span>
        </div>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            When building data-driven web platforms, URLs rarely map to static directory names alone. The Next.js App Router utilizes strict directory conventions to resolve dynamic segments without requiring custom regex routing tables.
          </p>

          <p>
            A dynamic segment is defined by wrapping a folder name in square brackets:{" "}
            <code className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-xs">[slug]</code> or{" "}
            <code className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-xs">[id]</code>. This segment parameter is passed directly to the route&apos;s layout, page, and route handler functions via the asynchronous{" "}
            <code className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-xs">params</code> promise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-800 tracking-wider uppercase">
                SINGLE DYNAMIC SEGMENT
              </span>
              <span className="text-xs font-mono text-blue-600">[param]</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal mb-3">
              Matches a single path element. For instance, <span className="font-mono text-slate-700">app/posts/[id]/page.tsx</span> matches <span className="font-mono text-slate-700">/posts/alpha</span>.
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded font-mono text-xs text-slate-800">
              params: &#123; id: &quot;alpha&quot; &#125;
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-800 tracking-wider uppercase">
                CATCH-ALL SEGMENT
              </span>
              <span className="text-xs font-mono text-blue-600">[...slug]</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal mb-3">
              Captures multiple arbitrary nested segments sequentially into a string array.
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded font-mono text-xs text-slate-800">
              params: &#123; slug: [&quot;docs&quot;, &quot;v2&quot;, &quot;routing&quot;] &#125;
            </div>
          </div>
        </div>

        <div className="space-y-4 my-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            The Catch-All Convention (<span className="text-blue-600 font-mono text-lg">[...slug]</span>)
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            In hierarchical taxonomies such as documentation trees, e-commerce categorization, or multi-tenant CMS architectures, the path depth cannot always be predicted at build time. By prefixing the folder identifier with an ellipsis (<span className="font-mono text-slate-800">...</span>), you instruct the router to consume all child route segments into an array.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg overflow-hidden my-6 bg-white shadow-xs">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-mono text-slate-600">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>app/blog/[...slug]/page.tsx</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-slate-500 font-medium px-2 py-0.5 rounded bg-white border border-slate-200">
                TypeScript
              </span>
              <button
                onClick={handleCopy}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <span className="text-emerald-600 text-[10px]">Copied!</span>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <pre className="p-4 text-xs font-mono text-slate-800 leading-relaxed overflow-x-auto bg-slate-50/30">
            <code>
{`// app/blog/[...slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold">
        Viewing slug path: {slug.join('/')}
      </h1>
    </section>
  );
}`}
            </code>
          </pre>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed my-6">
          Note that standard catch-all routes will return a 404 error if the base segment is requested without parameters (e.g., querying <code className="px-1 py-0.5 bg-slate-100 rounded font-mono">/blog</code> directly). If you wish to match the parent route as well, wrap the folder in double brackets: <code className="px-1 py-0.5 bg-blue-50 text-blue-700 rounded font-mono">[[...slug]]</code> (Optional Catch-all).
        </p>

        <div className="bg-[#f0f4ff] border border-blue-100 rounded-lg p-5 flex items-start gap-3 my-6">
          <div className="text-blue-600 mt-0.5 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Key Takeaway</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Catch-all routes (<code className="font-mono text-blue-700">[...slug]</code>) capture all nested path segments into an array of strings. Always remember that starting in modern Next.js versions, the <code className="font-mono text-blue-700">params</code> prop must be awaited before accessing its constituent segments.
            </p>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 my-8 bg-white shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <h3 className="font-bold text-xs text-slate-900">Self-Assessment Checklist</h3>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={checklist.item1}
                onChange={(e) => setChecklist({ ...checklist, item1: e.target.checked })}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
              />
              <span>I understand how folder naming maps brackets to runtime URL resolution.</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={checklist.item2}
                onChange={(e) => setChecklist({ ...checklist, item2: e.target.checked })}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
              />
              <span>I can differentiate between single segment [slug] and catch-all array [...slug].</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={checklist.item3}
                onChange={(e) => setChecklist({ ...checklist, item3: e.target.checked })}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
              />
              <span>I have verified how async params resolution functions in Next.js 15 Server Components.</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 my-10 border-t border-slate-100">
          <Link
            href={`/learn/${id}/nested-layouts-templates`}
            className="w-full sm:w-auto p-3.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors flex items-center gap-3 text-left shadow-2xs"
          >
            <span className="text-slate-400">←</span>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                PREVIOUS LESSON
              </span>
              <span className="font-bold text-xs text-slate-900 block mt-0.5">
                03 Nested Layouts & Templates
              </span>
            </div>
          </Link>

          <Link
            href={`/learn/${id}/server-side-fetching-cache`}
            className="w-full sm:w-auto p-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-between sm:justify-end gap-3 text-right shadow-2xs text-white"
          >
            <div>
              <span className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider block">
                NEXT LESSON
              </span>
              <span className="font-bold text-xs text-white block mt-0.5">
                05 Server-side Fetching & Cache
              </span>
            </div>
            <span>→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
