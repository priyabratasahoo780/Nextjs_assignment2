import React from "react";
import Link from "next/link";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all duration-200 min-h-[250px]">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-[#eef2ff] text-[#4f46e5]">
            {course.category}
          </span>
          <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200">
            {course.level}
          </span>
        </div>

        <Link href={`/courses/${course.id}`}>
          <h3 className="font-bold text-slate-900 text-[15px] hover:text-blue-600 transition-colors leading-snug">
            {course.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
          <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="truncate">{course.instructor.name}</span>
        </div>

        <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {course.headline}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-slate-500">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>{course.lessonsCount} Lessons</span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 transition-colors"
        >
          View course <span>→</span>
        </Link>
      </div>
    </div>
  );
};
