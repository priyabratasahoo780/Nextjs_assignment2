import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseById } from "@/lib/courses";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) return { title: "Course Not Found | LearnSpace" };
  return {
    title: `${course.title} | LearnSpace`,
    description: course.description,
  };
}

const LESSON_DESCRIPTIONS: Record<string, string> = {
  "les-01": "Mental shift from Pages router to React Server Components (RSC).",
  "les-02": "The 'use client' directive boundary, component trees, and serialization.",
  "les-03": "State preservation between route segments and template remounting.",
  "les-04": "Parametric patterns, optional catch-all brackets, and type safety.",
  "les-05": "Extended fetch API, request memoization, and Data Cache mechanics.",
  "les-06": "Time-based ISR versus on-demand revalidatePath and revalidateTag.",
  "les-07": "Simultaneous contextual displays, modals, and conditional slots.",
  "les-08": "Progressive enhancement, pending states with useFormStatus and useActionState.",
  "les-09": "Segment error recovery, nested fail-soft UI trees, and 404 responses.",
  "les-10": "Granular streaming architectures and skeleton boundary segmentation.",
  "les-11": "Building RESTful primitives, signature verifications, and custom responses.",
  "les-12": "Static and dynamic metadata, file-based OG generation with ImageResponse.",
  "les-13": "Pre-rendering dynamic routes ahead of time for edge deployment latency.",
  "les-14": "Analyzing bundle size, server-timing headers, and node runtime diagnostics.",
};

const MODULE_STATS = [
  "4 lessons · 55 min",
  "3 lessons · 48 min",
  "4 lessons · 54 min",
  "3 lessons · 42 min",
];

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  const firstLesson = course.curriculum[0]?.lessons[0];

  return (
    <div className="max-w-6xl mx-auto py-2">
      <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/courses" className="hover:text-blue-600 transition-colors">
            Courses
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium">{course.title}</span>
        </div>
        <Link
          href="/courses"
          className="text-slate-600 hover:text-slate-900 flex items-center gap-1 font-medium transition-colors"
        >
          ← Back to courses
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200">
              {course.level}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200">
              {course.lessonsCount} Lessons
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200">
              Estimated {course.durationHours} hrs
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-medium text-blue-600 bg-blue-50 border border-blue-100 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Open Access
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {course.title}
          </h1>

          <div className="flex items-center gap-3 mt-4 mb-5">
            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">
              AR
            </div>
            <div>
              <div className="font-semibold text-slate-900 text-xs">
                {course.instructor.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {course.instructor.role}
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-6">
            {course.description}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={firstLesson ? `/learn/${course.id}/${firstLesson.slug}` : `#`}
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs"
            >
              Start learning
            </Link>
            <a
              href="#syllabus"
              className="px-5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-colors"
            >
              View syllabus
            </a>
          </div>
        </div>

        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-lg p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-700">
              Curriculum Structure
            </span>
            <span className="text-xs text-slate-400 font-mono">
              v14.2 / stable
            </span>
          </div>

          <div className="py-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Zero Dependencies</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                  Self-contained browser sandboxes and local execution paths.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Code-Centric Pedagogy</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                  Structured architecture blueprints and source comparisons.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Production Auditing</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                  Includes cache profiling and server mutation boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Progress tracking</span>
            <span className="font-semibold text-blue-600">Unenrolled · Free</span>
          </div>
        </div>
      </div>

      <div id="syllabus" className="pt-4 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Course Curriculum</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {course.curriculum.length} Modules · {course.lessonsCount} Comprehensive Technical Lessons
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              Text & Code
            </span>
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Guided Walkthroughs
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {course.curriculum.map((module, mIndex) => {
            const moduleNumber = mIndex + 1;
            const stats = MODULE_STATS[mIndex] || `${module.lessons.length} lessons`;

            return (
              <div
                key={module.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden"
              >
                <div className="p-4 bg-slate-50/50 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                      Module {moduleNumber}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-0.5">
                      {module.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-normal">
                    {stats}
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {module.lessons.map((lesson, lIndex) => {
                    const prevCount = course.curriculum
                      .slice(0, mIndex)
                      .reduce((acc, curr) => acc + curr.lessons.length, 0);
                    const lessonNum = String(prevCount + lIndex + 1).padStart(2, "0");
                    const subtext =
                      LESSON_DESCRIPTIONS[lesson.id] ||
                      "Core conceptual patterns, implementation benchmarks, and syntax exploration.";

                    return (
                      <Link
                        key={lesson.id}
                        href={`/learn/${course.id}/${lesson.slug}`}
                        className="p-4 flex items-center justify-between hover:bg-slate-50/80 transition-colors group block"
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="text-xs font-mono text-slate-400 mt-0.5 shrink-0">
                            {lessonNum}
                          </span>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {lesson.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                              {subtext}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0 ml-4">
                          <span>{lesson.duration}</span>
                          <span className="group-hover:translate-x-0.5 transition-transform">›</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#f0f4ff] border border-blue-100 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">
            Ready to start Module 1?
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Begin with Lesson 01: Introduction & Philosophy. No prerequisites required.
          </p>
        </div>
        <Link
          href={firstLesson ? `/learn/${course.id}/${firstLesson.slug}` : `#`}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shrink-0 shadow-xs"
        >
          Start learning
        </Link>
      </div>
    </div>
  );
}
