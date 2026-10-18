"use client";

import React, { useState } from "react";
import { Course } from "@/types/course";
import { CourseTabs } from "./CourseTabs";
import { MetricsBar } from "./MetricsBar";
import { CourseGrid } from "./CourseGrid";

interface CourseExplorerProps {
  initialCourses: Course[];
}

export const CourseExplorer: React.FC<CourseExplorerProps> = ({ initialCourses }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = initialCourses.filter((course) => {
    if (activeTab === "all") return true;
    if (activeTab === "frontend") return course.category.toLowerCase() === "frontend";
    if (activeTab === "backend") return course.category.toLowerCase() === "backend" || course.category.toLowerCase() === "database";
    if (activeTab === "architecture") return course.category.toLowerCase() === "architecture";
    if (activeTab === "fundamentals") return course.level.toLowerCase() === "beginner" || course.category.toLowerCase() === "language";
    return true;
  });

  return (
    <div>
      <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <MetricsBar />

      <CourseGrid courses={filteredCourses} />

      <div className="mt-10 bg-[#f0f4ff] border border-blue-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">
            Curriculum Sequencing Engine
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
            LearnSpace verifies prerequisite competency via deterministic automated assessments prior to advancing modules.
          </p>
        </div>
        <button
          type="button"
          className="bg-white border border-slate-200 rounded-md px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors shrink-0"
        >
          Browse Prerequisite Map
        </button>
      </div>
    </div>
  );
};
