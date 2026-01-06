import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="p-12">
            <h1 className="text-4xl mb-4">{project.title}</h1>
            <p className="opacity-70 mb-10">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className="rounded-xl"
                    />
                ))}
            </div>
        </main>
    );
}
