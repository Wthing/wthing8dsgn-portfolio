import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                <img
                    src={project.cover}
                    alt={project.title}
                    className="
            w-full
            h-auto
            object-contain
            transition-transform duration-300
            group-hover:scale-[1.03]
            group-hover:blur-sm
          "
                />
                <div className="
          absolute inset-0
          flex items-center justify-center
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        ">
                    <h3 className="text-white text-lg font-bold text-center px-4">
                        {project.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}
