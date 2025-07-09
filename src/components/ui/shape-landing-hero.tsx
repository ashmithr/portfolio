"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import './shape-landing-hero.css';

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={`elegant-shape ${className}`}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="shape-container"
            >
                <div className="shape-inner" />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <div className="hero-geometric">
            <div className="hero-background-gradient" />

            <div className="shapes-container">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    className="shape-1"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    className="shape-2"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    className="shape-3"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    className="shape-4"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    className="shape-5"
                />
            </div>

            <div className="hero-content-geometric">
                <div className="hero-content-inner">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                        className="hero-badge"
                    >
                        <Circle className="badge-icon" />
                        <span className="badge-text">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                    >
                        <h1 className="hero-title-geometric">
                            <span className="title-part-1">
                                {title1}
                            </span>
                            <br />
                            <span className="title-part-2">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.9 }}
                    >
                        <p className="hero-subtitle-geometric">
                            A versatile AI/ML & Full Stack Developer living in Bengaluru, India.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="hero-overlay" />
        </div>
    );
}

export { HeroGeometric };
