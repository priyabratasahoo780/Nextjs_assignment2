import { LessonNotFound } from "@/components/common/LessonNotFound";

export default function CourseNotFound() {
  return <LessonNotFound courseTitle="Next.js App Router" missingSegment="/courses/undefined-course-id" />;
}
