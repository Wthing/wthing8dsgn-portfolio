import { projects } from "@/data/projects";
import HeroParticles from "@/components/HeroParticles";
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-900 bg-[url('/patterns/dots.svg')] bg-repeat">
                <HeroParticles />
                <div className="relative z-10">
                    <h1 className="text-9xl font-bold mb-6 font-empires">
                        ArseN ZhambekoV
                    </h1>
                    <p className="text-xl opacity-70 max-w-3xl">@wthing8dsgn</p>
                </div>
            </section>

            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-animated">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <ProjectGallery projects={projects} />
            </section>
        </main>
    );
}
