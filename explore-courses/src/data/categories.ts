import { Category } from "@/types/category";

export const CATEGORIES: Category[] = [
  {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Learn full-stack, frontend, and backend web technologies.",
    subcategories: ["frontend", "backend", "fullstack", "nextjs", "react"],
  },
  {
    id: "data-science",
    name: "Data Science & AI",
    slug: "data-science",
    description: "Master Python, Machine Learning, Deep Learning, and AI systems.",
    subcategories: ["machine-learning", "python", "deep-learning", "genai"],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design intuitive interfaces and remarkable digital user experiences.",
    subcategories: ["figma", "wireframing", "design-systems"],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "Deploy and manage resilient distributed applications in the cloud.",
    subcategories: ["docker", "kubernetes", "aws"],
  },
];
