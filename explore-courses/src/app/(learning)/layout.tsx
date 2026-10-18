import React from "react";

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col">
      {children}
    </div>
  );
}
