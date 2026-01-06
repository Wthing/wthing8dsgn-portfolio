// src/components/ProjectGallery.js
"use client"; // framer-motion работает только на клиенте

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Анимация контейнера с задержкой появления дочерних элементов
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15, // задержка между карточками
        },
    },
};

// Анимация для каждой карточки
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectGallery({ projects }) {
    return (
        <motion.div
            className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {projects.map((project) => (
                <motion.div key={project.slug} variants={cardVariants}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>
    );
}
