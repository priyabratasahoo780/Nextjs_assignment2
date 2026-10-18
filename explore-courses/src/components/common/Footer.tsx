import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © 2025 LearnSpace Inc. Disciplined academic minimalist curriculum engine.
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            Documentation
          </Link>
          <Link href="/courses" className="hover:text-slate-900 transition-colors">
            Curriculum Index
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            Privacy
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            Terms
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            System Status
          </Link>
        </div>
      </div>
    </footer>
  );
};
