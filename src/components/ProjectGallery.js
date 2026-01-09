"use client";

import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery({ projects }) {
    // Настройка брейкпоинтов для колонок
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="flex flex-col gap-6"
        >
            {projects.map((project, index) => (
                <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                >
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </Masonry>
    );
}
