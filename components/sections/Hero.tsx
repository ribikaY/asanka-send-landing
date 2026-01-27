"use client";

import Image from "next/image";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { handleDownloadClick } from "@/lib/utils";

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const textItemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, x: -50, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            delay: 0.5,
            type: "spring" as const,
            stiffness: 120,
            damping: 18,
        },
    },
};

const phoneVariants = {
    hidden: { opacity: 0, x: 80, y: 40, rotate: -5 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
            duration: 1,
            delay: 0.3,
            type: "spring" as const,
            stiffness: 70,
            damping: 25,
        },
    },
};

const getBubbleVariants = (index: number) => {
    const directions = [
        { x: -60, y: -40 },
        { x: 60, y: -20 },
        { x: -40, y: 40 },
    ];

    return {
        hidden: {
            opacity: 0,
            x: directions[index].x,
            y: directions[index].y,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: 0.8 + (index * 0.15),
                type: "spring" as const,
                stiffness: 150,
                damping: 18,
            },
        },
    };
};

const learnMoreVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 1.2,
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="m-4 mb-0 md:min-h-screen rounded-2xl relative noise bg-gradient-hero flex flex-col justify-between overflow-hidden">
            <Header />
            <div className="container px-5 lg:px-6 flex flex-col xl:flex-row justify-between items-center xl:items-end z-10 gap-10 md:gap-0 pb-0">
                {/* Left section */}
                <motion.div
                    className="self-center space-y-6 md:space-y-4 flex-1 max-w-md md:min-w-xl text-center xl:text-left pt-10 md:pt-16 xl:pt-0"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={textContainerVariants}
                    suppressHydrationWarning
                >
                    <motion.h1
                        className="font-light text-[40px] sm:text-5xl md:text-6xl leading-12 sm:leading-13 md:leading-16 xl:leading-14"
                        variants={textItemVariants}
                    >
                        Manage Money Back Home From <span className="font-heading font-extrabold text-[#1B814B] md:leading-snug">One App</span>
                    </motion.h1>
                    <motion.p
                        className="font-light text-foreground/80 leading-relaxed 2xl:max-w-xl mb-5 lg:mb-0 text-[15px] sm:text-base"
                        variants={textItemVariants}
                    >
                        Asanka Send is a secure financial app built for immigrants who want full control over how their money supports family and builds the future back home.
                    </motion.p>
                    <motion.div variants={buttonVariants}>
                        <Button
                            asChild
                            className="rounded-full bg-asanka-secondary hover:bg-asanka-secondary/90 font-light py-7 z-10 md:mb-16 md:mt-5 w-full md:w-auto"
                        >
                            <Link href="#how-it-works" onClick={handleDownloadClick}>
                                <span className="ml-6"> Download the app</span>
                                <Download size={16} className="mr-6" />
                            </Link>
                        </Button>
                    </motion.div>
                    <motion.p
                        className="hidden xl:flex gap-4 items-center text-lg font-light text-foreground/80 relative top-36 xl:top-44 2xl:top-52"
                        initial="hidden"
                        animate={isMounted ? "visible" : "hidden"}
                        variants={learnMoreVariants}
                    >
                        Learn more about asanka
                        <ArrowDown size={16} className="animate-bounce" />
                    </motion.p>
                </motion.div>

                {/* Right section */}
                <motion.div
                    className="relative w-full max-w-[450px] md:max-w-200 2xl:max-w-222.5 aspect-square shrink-0"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={phoneVariants}
                    suppressHydrationWarning
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/mock-ups/hero-mockup.webp"
                            alt="Hero Illustration"
                            width={644}
                            height={644}
                            className="w-full h-full object-contain"
                        />

                        <motion.div
                            className="backdrop-blur-md bg-white/50 dark:bg-black/50 px-4 py-2 md:px-8 md:py-3 border border-white/80 rounded-full absolute top-[16%] left-[25%] md:left-[30%] shadow-xs"
                            initial="hidden"
                            variants={getBubbleVariants(0)}
                            animate={isMounted ? {
                                opacity: 1,
                                x: 0,
                                y: [0, -8, 0],
                                scale: 1,
                            } : "hidden"}
                            style={{ willChange: 'transform' }}
                            suppressHydrationWarning
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 0.8,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 0.8,
                                    type: "spring" as const,
                                    stiffness: 150,
                                    damping: 18,
                                },
                                scale: {
                                    duration: 0.7,
                                    delay: 0.8,
                                    type: "spring" as const,
                                    stiffness: 150,
                                    damping: 18,
                                },
                                y: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5,
                                },
                            }}
                        >
                            <p className="text-[#084B27] italic text-xs md:text-[19px] whitespace-nowrap">Send money</p>
                        </motion.div>

                        <motion.div
                            className="backdrop-blur-md bg-white/60 dark:bg-black/50 px-4 py-2 md:px-8 md:py-3 border border-white/80 rounded-full absolute top-[35%] right-0 md:top-[33%] md:right-[11%] shadow-xs"
                            initial="hidden"
                            variants={getBubbleVariants(1)}
                            animate={isMounted ? {
                                opacity: 1,
                                x: 0,
                                y: [0, -10, 0],
                                scale: 1,
                            } : "hidden"}
                            style={{ willChange: 'transform' }}
                            suppressHydrationWarning
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 0.95,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 0.95,
                                    type: "spring" as const,
                                    stiffness: 150,
                                    damping: 18,
                                },
                                scale: {
                                    duration: 0.7,
                                    delay: 0.95,
                                    type: "spring" as const,
                                    stiffness: 150,
                                    damping: 18,
                                },
                                y: {
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.7,
                                },
                            }}
                        >
                            <p className="text-[#084B27] italic text-xs md:text-[19px] whitespace-nowrap">Pay bills directly</p>
                        </motion.div>

                        <motion.div
                            className="backdrop-blur-xl bg-white/55 md:bg-white/50 dark:bg-black/50 px-4 py-2 md:px-8 md:py-3.5 border border-white/40 rounded-full absolute top-[53%] left-[8%] md:top-auto md:bottom-[43%] md:left-[20%] shadow-xs"
                            initial="hidden"
                            variants={getBubbleVariants(2)}
                            animate={isMounted ? {
                                opacity: 1,
                                x: 0,
                                y: [0, -7, 0],
                                scale: 1,
                            } : "hidden"}
                            style={{ willChange: 'transform' }}
                            suppressHydrationWarning
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 1.1,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 1.1,
                                    type: "spring" as const,
                                    stiffness: 150,
                                    damping: 18,
                                },
                                scale: {
                                    duration: 0.7,
                                    delay: 1.1,
                                    type: "spring" as const,
                                    stiffness: 150,
                                    damping: 18,
                                },
                                y: {
                                    duration: 2.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.9,
                                },
                            }}
                        >
                            <p className="text-[#084B27] italic text-xs md:text-[19px] whitespace-nowrap">Save and invest back home</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Hero;
