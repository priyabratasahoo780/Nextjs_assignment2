"use client";

import React from "react";

interface CourseTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const CourseTabs: React.FC<CourseTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "all", label: "All Courses" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "architecture", label: "Architecture" },
    { id: "fundamentals", label: "Fundamentals" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
              isActive
                ? "bg-blue-600 text-white shadow-xs font-semibold"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
