"use client";

import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery({ projects }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadedCount = 0;
        const totalMedia = [];

        // Собираем все изображения для предзагрузки
        projects.forEach(project => {
            totalMedia.push(project.cover);
            if (project.media) {
                project.media.forEach(item => totalMedia.push(item.src));
            }
        });

        // Предзагрузка изображений
        totalMedia.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount >= totalMedia.length) {
                    setLoading(false); // Все медиа загружены
                }
            };
        });
    }, [projects]);

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <div className="relative">
            {/* Спиннер по центру экрана */}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="loader"></div>
                </div>
            )}

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="flex flex-col gap-6"
            >
                {!loading &&
                    projects.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
            </Masonry>
        </div>
    );
}
