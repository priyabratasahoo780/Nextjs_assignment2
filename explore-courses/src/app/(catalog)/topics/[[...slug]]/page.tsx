import React from "react";
import { TopicExplorer } from "@/components/topics/TopicExplorer";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const path = slug && slug.length > 0 ? slug.join("/") : "frontend/react";
  return {
    title: `React & Next.js Ecosystem | Topics | LearnSpace`,
    description: `Specialized domain track for /topics/${path}`,
  };
}

export default async function TopicsPage({ params }: PageProps) {
  const { slug } = await params;
  return <TopicExplorer slug={slug} routePattern="/topics/[[...slug]]" />;
}
