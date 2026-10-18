import { COURSES } from "@/data/courses";
import { CATEGORIES } from "@/data/categories";
import { INSTRUCTORS } from "@/data/instructors";
import { Course } from "@/types/course";

export async function getAllCourses(): Promise<Course[]> {
  return COURSES;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  return COURSES.find((c) => c.id === id || c.slug === id);
}

export async function getCoursesByCategory(categorySlug: string): Promise<Course[]> {
  return COURSES.filter((c) => c.category === categorySlug || c.subCategory === categorySlug);
}

export async function getCategories() {
  return CATEGORIES;
}

export async function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export async function getInstructors() {
  return INSTRUCTORS;
}

export async function getInstructorById(id: string) {
  return INSTRUCTORS.find((ins) => ins.id === id);
}
