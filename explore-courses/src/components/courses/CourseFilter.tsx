import React from "react";
import Link from "next/link";

interface CourseFilterProps {
  currentFilter?: string[];
}

export const CourseFilter: React.FC<CourseFilterProps> = ({ currentFilter = [] }) => {
  const levels = ["beginner", "intermediate", "advanced"];

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3 mb-6">
      <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
        Quick Filters:
      </span>
      <Link
        href="/courses"
        className={`px-3 py-1 text-xs rounded-full border transition-colors ${
          currentFilter.length === 0
            ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900"
            : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
        }`}
      >
        All
      </Link>
      {levels.map((lvl) => {
        const isSelected = currentFilter.includes(lvl);
        return (
          <Link
            key={lvl}
            href={`/filter/${lvl}`}
            className={`px-3 py-1 text-xs rounded-full border capitalize transition-colors ${
              isSelected
                ? "bg-blue-600 text-white border-blue-600"
                : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
            }`}
          >
            {lvl}
          </Link>
        );
      })}
    </div>
  );
};
