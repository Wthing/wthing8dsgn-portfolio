// src/app/projects/[slug]/page.js
import { projects } from "@/data/projects";

// Серверный компонент
export default async function ProjectPage({ params }) {
    // params теперь Promise, поэтому нужно await
    const { slug } = await params;

    // Находим проект
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <p className="text-white text-center mt-20">Project not found</p>;
    }

    return (
        <main className="bg-black text-white min-h-screen px-6 py-12">
            <h1 className="text-5xl font-bold mb-6 text-center">{project.title}</h1>
            <p className="text-xl opacity-70 mb-12 text-center">{project.description}</p>

            {/* Галерея медиа */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {project.media.map((item, index) => (
                    <div key={index} className="relative group rounded-xl overflow-hidden">
                        {item.type === "image" && (
                            <img
                                src={item.src}
                                alt={item.caption || project.title}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {item.type === "gif" && (
                            <img
                                src={item.src}
                                alt={item.caption || project.title}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {item.type === "video" && (
                            <video
                                src={item.src}
                                controls
                                className="w-full h-full object-cover rounded-xl"
                            />
                        )}

                        {item.caption && (
                            <div className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                                {item.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
