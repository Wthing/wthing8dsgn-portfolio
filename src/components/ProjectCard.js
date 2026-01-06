// src/components/ProjectCard.js
import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg w-[400px] aspect-video">

                {/* Обложка проекта */}
                <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
                />

                {/* Текст поверх размытого изображения */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold text-center px-2">
                        {project.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}
