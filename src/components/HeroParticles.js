// src/components/HeroParticles.js
"use client"; // 🔑 обязательный для клиентских компонентов

import Particles from "react-tsparticles";

export default function HeroParticles() {
    return (
        <Particles
            options={{
                background: { color: { value: "#111827" } },
                fpsLimit: 60,
                particles: {
                    color: { value: "#ffffff" },
                    number: { value: 50 },
                    size: { value: 2 },
                    move: { enable: true, speed: 0.5 },
                    opacity: { value: 0.3 },
                },
            }}
        />
    );
}
