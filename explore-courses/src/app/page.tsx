import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { getAllCourses } from "@/lib/courses";
import { CourseExplorer } from "@/components/courses/CourseExplorer";

export const metadata = {
  title: "Explore courses | LearnSpace",
  description: "Browse curriculum modules, system design paths, and full-stack development tracks.",
};

export default async function HomePage() {
  const courses = await getAllCourses();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center text-xs text-slate-500 mb-6 font-normal">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Index
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-700 font-medium">Courses</span>
        </nav>

        <div className="mb-3">
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded uppercase">
            CURRICULUM DIRECTORY 2025
          </span>
        </div>

        <div className="mb-7">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore courses
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Browse curriculum modules, system design paths, and full-stack development tracks.
          </p>
        </div>

        <CourseExplorer initialCourses={courses} />
      </main>

      <Footer />
    </div>
  );
}
