import React from "react";

export const MetricsBar: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        <div className="lg:pr-4">
          <span className="text-xs text-slate-500 font-normal block">Published Tracks</span>
          <span className="text-sm font-bold text-slate-900 mt-1 block">6 Core Units</span>
        </div>

        <div className="pt-4 lg:pt-0 lg:px-6">
          <span className="text-xs text-slate-500 font-normal block">Interactive Syllabus</span>
          <span className="text-sm font-bold text-slate-900 mt-1 block">78 Lessons</span>
        </div>

        <div className="pt-4 lg:pt-0 lg:px-6">
          <span className="text-xs text-slate-500 font-normal block">Evaluation Mode</span>
          <span className="text-sm font-bold text-slate-900 mt-1 block">Rigorous Peer Review</span>
        </div>

        <div className="pt-4 lg:pt-0 lg:pl-6">
          <span className="text-xs text-slate-500 font-normal block">Status</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-sm font-bold text-blue-600">Live Cohort</span>
          </div>
        </div>
      </div>
    </div>
  );
};
