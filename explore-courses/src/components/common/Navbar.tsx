"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const isTopicsActive = pathname.startsWith("/topics");
  const isAboutActive = pathname === "/about";
  const isCoursesActive = (pathname === "/courses" || pathname.startsWith("/courses/") || pathname === "/") && !isTopicsActive && !isAboutActive;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/courses" className="flex items-center">
            <span className="font-extrabold text-2xl tracking-tight text-blue-600">
              LearnSpace
            </span>
          </Link>

          <div className="relative w-full max-w-xs hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search syllabus or topics..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-md bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <nav className="flex items-center gap-8 text-sm">
          <Link
            href="/courses"
            className={`relative pb-1 font-medium transition-colors ${
              isCoursesActive
                ? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/topics/frontend/react"
            className={`relative pb-1 font-medium transition-colors ${
              isTopicsActive
                ? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Topics
          </Link>
          <Link
            href="/about"
            className={`relative pb-1 font-medium transition-colors ${
              isAboutActive
                ? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="text-slate-600 hover:text-slate-900 transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Help & FAQ"
            className="text-slate-600 hover:text-slate-900 transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <span className="h-5 w-[1px] bg-slate-200" aria-hidden="true" />

          <button
            type="button"
            className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
