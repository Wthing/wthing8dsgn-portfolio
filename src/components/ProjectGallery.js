// src/components/ProjectGallery.js
"use client";

import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";
import PreloadProjectMedia from "./PreloadProjectMedia";

export default function ProjectGallery({ projects }) {
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <>
            <PreloadProjectMedia projects={projects} />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="flex flex-col gap-6"
            >
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </Masonry>
        </>
    );
}
