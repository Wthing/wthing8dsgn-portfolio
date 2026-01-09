"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import Lightbox from "./ProjectLightbox";

export default function ProjectMediaGrid({ media }) {
    const [activeIndex, setActiveIndex] = useState(null);

    // Настройка колонок под брейкпоинты
    const breakpointColumnsObj = {
        default: 3, // 3 колонки на десктопе
        1024: 2,    // 2 колонки на планшете
        640: 1,     // 1 колонка на мобильном
    };

    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="flex flex-col gap-6"
            >
                {media.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                    >
                        <div
                            onClick={() => setActiveIndex(index)}
                            className="relative group cursor-pointer rounded-xl overflow-hidden"
                        >
                            {(item.type === "image" || item.type === "gif") && (
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="
                    w-full h-auto object-cover
                    transition-all duration-500
                    group-hover:scale-[1.03]
            group-hover:blur-sm
                  "
                                />
                            )}
                            {item.type === "video" && (
                                <video
                                    src={item.src}
                                    muted
                                    className="
                    w-full h-auto object-cover
                    transition-all duration-500
                    group-hover:scale-[1.03]
            group-hover:blur-sm
                  "
                                />
                            )}
                            {item.caption && (
                                <div className="
          absolute inset-0
          flex items-center justify-center
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        ">
                                    <h3 className="text-white text-lg font-bold text-center px-4">
                                        {item.caption}
                                    </h3>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </Masonry>

            {activeIndex !== null && (
                <Lightbox
                    media={media}
                    index={activeIndex}
                    onClose={() => setActiveIndex(null)}
                />
            )}
        </>
    );
}
