// src/app/projects/[slug]/page.js
import { projects } from "@/data/projects";
import ProjectMediaGrid from "@/components/ProjectMediaGrid";

export default async function ProjectPage({ params }) {
    const { slug } = await params;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <p className="text-white text-center mt-20">
                Project not found
            </p>
        );
    }

    return (
        <main className="bg-black text-white min-h-screen px-6 py-16 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-6 text-center">
                {project.title}
            </h1>

            <div className="max-w-3xl text-center mb-16">
                <p className="text-xl opacity-70">
                    {project.description}
                </p>
            </div>

            <ProjectMediaGrid media={project.media} />
        </main>

    );
}
