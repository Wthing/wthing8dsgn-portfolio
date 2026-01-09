// src/components/ProjectCard.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);
    const [showSlideshow, setShowSlideshow] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    // Таймер появления слайдшоу через 2.5 секунды
    useEffect(() => {
        let timeout;
        if (hovered) {
            timeout = setTimeout(() => setShowSlideshow(true), 2500);
        } else {
            setShowSlideshow(false);
            setSlideIndex(0);
        }
        return () => clearTimeout(timeout);
    }, [hovered]);

    // Автоматическая смена слайдов
    useEffect(() => {
        if (!showSlideshow || !project.media || project.media.length <= 1) return;

        const interval = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % project.media.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [showSlideshow, project.media]);

    const currentMedia =
        project.media && project.media.length > 0
            ? project.media[slideIndex]
            : null;

    return (
        <Link href={`/projects/${project.slug}`}>
            <div
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg w-full"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Слайд-шоу под обложкой */}
                <AnimatePresence>
                    {showSlideshow && currentMedia && (
                        <motion.div
                            key={slideIndex}
                            className="absolute inset-0 flex items-center justify-center rounded-xl overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {currentMedia.type === "video" ? (
                                <motion.video
                                    src={currentMedia.src}
                                    muted
                                    autoPlay
                                    loop
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            ) : (
                                <motion.img
                                    src={currentMedia.src}
                                    alt={currentMedia.caption || project.title}
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Обложка проекта поверх слайд-шоу */}
                <motion.img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                    animate={{ opacity: showSlideshow ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Overlay с текстом, стрелкой и затемнением */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50 pointer-events-none rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-white text-lg font-bold mb-2">
                                {project.title}
                            </h3>
                            {project.shortDescription && (
                                <p className="text-white/80 text-sm mb-4">
                                    {project.shortDescription}
                                </p>
                            )}
                            <span className="text-white text-2xl animate-bounce">&#8594;</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Link>
    );
}
