import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

interface LessonNotFoundProps {
  courseTitle?: string;
  courseId?: string;
  missingSegment?: string;
}

export const LessonNotFound: React.FC<LessonNotFoundProps> = ({
  courseTitle = "Next.js App Router",
  courseId = "nextjs-app-router-fundamentals",
  missingSegment = "/lessons/undefined-module-id",
}) => {
  const suggestedLessons = [
    {
      num: "01",
      title: "Introduction & Philosophy",
      subtitle: "Course foundation & setup",
      slug: "introduction-philosophy",
    },
    {
      num: "02",
      title: "Server vs Client Components",
      subtitle: "RSC boundary primitives",
      slug: "server-vs-client-components",
    },
    {
      num: "03",
      title: "Nested Layouts & Templates",
      subtitle: "Route composition model",
      slug: "nested-layouts-templates",
    },
    {
      num: "04",
      title: "Dynamic & Catch-All Routes",
      subtitle: "Slug matchers & params",
      slug: "dynamic-catch-all-routes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <div className="flex items-center gap-1.5">
            <Link href="/courses" className="hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <span className="text-slate-300">/</span>
            <Link href={`/courses/${courseId}`} className="hover:text-blue-600 transition-colors">
              {courseTitle}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">Unresolved Lesson</span>
          </div>

          <Link
            href={`/courses/${courseId}`}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
          >
            ← Back to syllabus
          </Link>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-white shadow-xs max-w-2xl mx-auto my-4">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-blue-600 bg-blue-50 border border-blue-100 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              404 · Unresolved Lesson Route
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-50 border border-slate-200">
              HTTP 404
            </span>
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-4 mb-2">
            Lesson not found
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">
            The lesson or learning module you requested could not be located in this curriculum track. It may have been relocated, deprecated, or the lesson identifier syntax is invalid.
          </p>

          <div className="flex flex-wrap items-center gap-3 pb-8 mb-6 border-b border-slate-100">
            <Link
              href={`/courses/${courseId}`}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>←</span> Return to Course Overview
            </Link>
            <Link
              href="/courses"
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-colors flex items-center gap-1.5"
            >
              <span>📖</span> Browse All Courses
            </Link>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-semibold text-slate-700">
                Suggested alternative lessons in this course:
              </span>
              <span className="text-[11px] text-slate-400">4 Modules Available</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedLessons.map((item) => (
                <Link
                  key={item.num}
                  href={`/learn/${courseId}/${item.slug}`}
                  className="p-3 border border-slate-200 rounded-md bg-white hover:border-slate-300 hover:bg-slate-50/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">{item.num}</span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 ml-6">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform text-xs">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-blue-100 bg-[#f8faff] rounded-md p-4">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 tracking-wider font-mono uppercase mb-2">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>DIAGNOSTIC RUNTIME LOG</span>
            </div>

            <div className="bg-white border border-slate-100 rounded p-3 text-[11px] font-mono leading-relaxed space-y-1">
              <div className="text-red-600 font-semibold">
                &gt; Router boundary: notFound() triggered at segment {missingSegment}
              </div>
              <div className="text-slate-500">
                &gt; Code reference: return notFound() inside layout or page component
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto flex items-center justify-between text-xs text-slate-400 px-2 mt-4">
          <div className="flex items-center gap-1.5">
            <span>⏱</span>
            <span>Curriculum Track: Next.js App Router Architecture v14.2</span>
          </div>
          <button className="text-blue-600 hover:underline">
            Report broken link
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};
