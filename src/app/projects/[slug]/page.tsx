import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/portfolio";
import ProjectDetail from "@/components/ProjectDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Amed Berzinar`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
