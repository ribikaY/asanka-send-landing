"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { handleDownloadClick } from "@/lib/utils";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -40, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -40, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.2,
      type: "spring" as const,
      stiffness: 70,
      damping: 25,
    },
  },
};

function Download() {
  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center gap-4 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Left section */}
      <motion.div
        className="self-center space-y-5 md:pace-y-6 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textContainerVariants}
      >
        <motion.h1
          className="font-heading font-black text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] leading-8 md:leading-14 text-asanka-foreground max-w-xl"
          variants={textItemVariants}
        >
          Ready to Transform Your Financial Management?
        </motion.h1>
        <motion.p
          className="font-light text-foreground/70 leading-relaxed xl:max-w-3/5 text-[15px] md:text-base"
          variants={textItemVariants}
        >
          Experience the future of finance with our cutting-edge SaaS platform. Start optimizing your financial operations today!
        </motion.p>
        <motion.div variants={buttonVariants}>
          <Button
            asChild
            className="rounded-full bg-asanka-primary hover:bg-asanka-primary/90 font-normal py-6"
          >
            <Link href="#how-it-works" onClick={handleDownloadClick}>
              <span className="ml-6"> Download the App</span>
              <ArrowRight size={16} className="mr-6" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right section */}
      <motion.div
        className="relative w-full max-w-[638px] aspect-[638/561] flex-shrink-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={imageVariants}
      >
        <Image
          src="/images/mock-ups/app-transaction.png"
          alt="Features Illustration"
          fill
          priority={true}
          blurDataURL="/images/mock-ups/app-transaction.png"
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}
export default Download;