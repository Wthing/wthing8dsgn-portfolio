import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
            </div>
        </Link>
    );
}
