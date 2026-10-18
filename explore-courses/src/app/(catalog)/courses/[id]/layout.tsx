import React from "react";

export default function CourseDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="course-detail-layout">
      {children}
    </div>
  );
}
