import { Instructor } from "./instructor";

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  duration: string;
  isFreePreview?: boolean;
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  headline: string;
  description: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  category: string;
  subCategory?: string;
  rating: number;
  reviewCount: number;
  durationHours: number;
  lessonsCount: number;
  instructor: Instructor;
  curriculum: Section[];
  skills: string[];
}
