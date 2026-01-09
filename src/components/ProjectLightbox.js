"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectLightbox({ media, index, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(index);

    const prev = () =>
        setCurrentIndex((currentIndex - 1 + media.length) % media.length);
    const next = () => setCurrentIndex((currentIndex + 1) % media.length);

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Закрыть */}
                    <button
                        className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                    {/* Влево */}
                    <button
                        className="absolute left-5 text-white text-3xl font-bold z-50"
                        onClick={prev}
                    >
                        &#8592;
                    </button>

                    {/* Вправо */}
                    <button
                        className="absolute right-5 text-white text-3xl font-bold z-50"
                        onClick={next}
                    >
                        &#8594;
                    </button>

                    {/* Медиа */}
                    <motion.div
                        key={currentIndex}
                        className="flex items-center justify-center max-w-full max-h-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {media[currentIndex].type === "video" ? (
                            <video
                                src={media[currentIndex].src}
                                controls
                                autoPlay
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                        ) : (
                            <img
                                src={media[currentIndex].src}
                                alt={media[currentIndex].caption}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                        )}
                    </motion.div>

                    {/* Подпись */}
                    {media[currentIndex].caption && (
                        <p className="absolute bottom-5 text-white text-center w-full px-4">
                            {media[currentIndex].caption}
                        </p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
