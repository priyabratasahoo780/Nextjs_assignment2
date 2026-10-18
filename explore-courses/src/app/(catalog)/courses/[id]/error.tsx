"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CourseDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Course Detail Error:", error);
  }, [error]);

  return (
    <div className="py-16 text-center max-w-md mx-auto">
      <div className="w-16 h-16 bg-red-50 dark:bg-red-950/50 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        !
      </div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Failed to load course</h2>
      <p className="mt-2 text-sm text-slate-500">
        There was an issue loading the requested course details.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/courses"
          className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
        >
          Browse Catalog
        </Link>
      </div>
    </div>
  );
}
