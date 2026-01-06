// src/app/page.js
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import HeroParticles from "@/components/HeroParticles";

export default function Home() {
    return (
        <main className="bg-black text-white">

            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-900 bg-[url('/patterns/dots.svg')] bg-repeat">
                {/* Фон частиц */}
                <HeroParticles />

                {/* Контент поверх */}
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold mb-6">Arsen Zhambekov</h1>
                    <p className="text-xl opacity-70 max-w-3xl">
                        @wthing8dsgn
                    </p>
                </div>
            </section>

            {/* Галерея */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-animated">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

                <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

        </main>
    );
}
