import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <main className="bg-black text-white">

            {/* Hero на весь экран */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-6xl font-bold mb-6">
                    My 3D Portfolio
                </h1>
                <p className="text-xl opacity-70 max-w-2xl">
                    Explore my 3D projects, automotive renders, livery designs, and photorealistic visuals.
                </p>
            </section>

            {/* Галерея проектов */}
            <section className="py-16 px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

        </main>
    );
}
