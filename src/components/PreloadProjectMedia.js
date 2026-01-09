// src/components/PreloadProjectMedia.js
"use client";

import { useEffect } from "react";

export default function PreloadProjectMedia({ projects }) {
    useEffect(() => {
        projects.forEach(project => {
            // Предзагрузка обложки
            const coverImg = new Image();
            coverImg.src = project.cover;

            // Предзагрузка медиа
            if (project.media) {
                project.media.forEach(item => {
                    if (item.type === "image" || item.type === "gif") {
                        const img = new Image();
                        img.src = item.src;
                    } else if (item.type === "video") {
                        const video = document.createElement("video");
                        video.src = item.src;
                        video.preload = "metadata"; // грузим только метаданные
                    }
                });
            }
        });
    }, [projects]);

    return null; // Компонент ничего не рендерит
}
