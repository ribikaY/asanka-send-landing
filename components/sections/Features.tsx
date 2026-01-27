"use client";

import Image from "next/image";
import { BanknoteArrowUp, DiamondPercent, Goal, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const headingVariants = {
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

const featureListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -35, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      type: "spring" as const,
      stiffness: 110,
      damping: 18,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.75, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 180,
      damping: 15,
    },
  },
};

const illustrationVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.4,
      type: "spring" as const,
      stiffness: 70,
      damping: 25,
    },
  },
};

function Features() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="features" className="container md:pt-16 flex flex-col lg:flex-row gap-2 overflow-hidden xl:overflow-visible">
      <div className="space-y-12 lg:space-y-24">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-asanka-accent-muted leading-10 md:leading-14 md:min-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          Trusted by diaspora communities across the UK, Europe, the United States, Canada, and the UAE
        </motion.h2>
        <motion.div
          className="space-y-5 md:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={featureListVariants}
        >
          <motion.div
            className="flex gap-4 md:gap-8 items-center"
            variants={featureItemVariants}
          >
            <motion.div
              variants={iconVariants}
              className="md:hidden"
            >
              <DiamondPercent className="w-8 h-8 text-primary/80 md:text-asanka-accent" />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md bg-asanka-accent hidden md:flex items-center justify-center"
              variants={iconVariants}
            >
              <Image
                src="/images/icons/weights.svg"
                alt="Security Icon"
                width={32}
                height={32}
              />
            </motion.div>
            <p className="text-base md:text-xl font-light text-foreground/70 md:text-foreground md:font-medium">Transparent exchange rates</p>
          </motion.div>
          <motion.div
            className="flex gap-4 md:gap-8 items-center md:ml-4"
            variants={featureItemVariants}
          >
            <motion.div
              variants={iconVariants}
              className="md:hidden"
            >
              <BanknoteArrowUp className="w-8 h-8 text-primary/80 md:text-asanka-accent" />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md bg-asanka-accent hidden md:flex items-center justify-center"
              variants={iconVariants}
            >
              <Image
                src="/images/icons/fruit.svg"
                alt="Security Icon"
                width={32}
                height={32}
              />
            </motion.div>
            <p className="text-base md:text-xl font-light text-foreground/70 md:text-foreground md:font-medium">Direct payments to services in Africa</p>
          </motion.div>
          <motion.div
            className="flex gap-4 md:gap-8 items-center md:ml-8"
            variants={featureItemVariants}
          >
            <motion.div
              variants={iconVariants}
              className="md:hidden"
            >
              <ShieldCheck className="w-8 h-8 text-primary/80 md:text-asanka-accent" />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md bg-asanka-accent hidden md:flex items-center justify-center"
              variants={iconVariants}
            >
              <Image
                src="/images/icons/reload.svg"
                alt="Security Icon"
                width={32}
                height={32}
              />
            </motion.div>
            <p className="text-base md:text-xl font-light text-foreground/70 md:text-foreground md:font-medium">Secure and compliant</p>
          </motion.div>
          <motion.div
            className="flex gap-4 md:gap-8 items-center md:ml-12"
            variants={featureItemVariants}
          >
            <motion.div
              variants={iconVariants}
              className="md:hidden"
            >
              <Goal className="w-8 h-8 text-primary/80 md:text-asanka-accent" />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md bg-asanka-accent hidden md:flex items-center justify-center"
              variants={iconVariants}
            >
              <Image
                src="/images/icons/person.svg"
                alt="Security Icon"
                width={32}
                height={32}
              />
            </motion.div>
            <p className="text-base md:text-xl font-light text-foreground/70 md:text-foreground md:font-medium">Built for long-term financial goals</p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={illustrationVariants}
        className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[748px] mx-auto lg:mx-0 flex-shrink-0"
        style={{ aspectRatio: '748/882', willChange: 'transform' }}
        animate={isMounted ? {
          y: [0, -12, 0],
          scale: [1, 1.03, 1],
        } : {}}
        suppressHydrationWarning
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.3,
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.3,
          },
        }}
      >
        <Image
          src="/images/illustrations/world.svg"
          alt="Features Illustration"
          width={748}
          height={882}
          priority={true}
          blurDataURL="/images/illustrations/world.svg"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  )
}
export default Features;