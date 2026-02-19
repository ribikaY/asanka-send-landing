"use client";

import { CopyCheck, CreditCard, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ComingSoonContent } from "./ComingSoon";

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      type: "spring" as const,
      stiffness: 80,
      damping: 25,
    },
  },
};

const stepsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const stepItemVariants = {
  hidden: { opacity: 0, x: 40, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 150,
      damping: 20,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

function HowItWorks() {
  return (
    <div id="how-it-works" className="container md:pt-5 overflow-hidden">
      <motion.div
        className="space-y-5 lg:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl text-asanka-foreground font-heading font-extrabold"
          variants={headerItemVariants}
        >
          How It Works <span className="font-sans font-bold">(</span>Simple and Fast<span className="font-sans font-bold">)</span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground/80 dark:text-foreground/60 leading-relaxed max-w-xl lg:mx-auto text-[15px] md:text-base"
          variants={headerItemVariants}
        >
          We adhere to the highest standards of quality in all our products and services. From design and development to manufacturing.
        </motion.p>
      </motion.div>
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-12 mt-8 md:mt-16">
        <motion.div
          className="relative w-full max-w-[596px] aspect-[596/497] self-end flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <Image
            src="/images/mock-ups/app-icon.webp"
            alt="app icon"
            fill
            priority={true}
            blurDataURL="/images/mock-ups/app-icon.webp"
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="space-y-9 lg:self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stepsContainerVariants}
        >
          <motion.div
            className="flex gap-6 items-center"
            variants={stepItemVariants}
          >
            <motion.div
              className="rounded-md bg-asanka-primary dark:bg-asanka-primary/10 dark:border dark:border-asanka-accent-muted/15 w-14 h-14 flex items-center justify-center flex-shrink-0"
              variants={iconVariants}
            >
              <Download size={23} className="text-white dark:text-asanka-accent" />
            </motion.div>
            <div className="space-y-1 md:space-y-1.5">
              <h3 className="text-lg lg:text-xl font-semibold dark:text-foreground/90">Download the App</h3>
              <p className="text-muted-foreground/80 dark:text-foreground/55 text-[15px] lg:text-base">Create an account and complete verification.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6 items-center"
            variants={stepItemVariants}
          >
            <motion.div
              className="rounded-md bg-asanka-primary dark:bg-asanka-primary/10 dark:border dark:border-asanka-accent-muted/15 w-14 h-14 flex items-center justify-center flex-shrink-0"
              variants={iconVariants}
            >
              <CreditCard size={23} className="text-white dark:text-asanka-accent" />
            </motion.div>
            <div className="space-y-1 md:space-y-1.5">
              <h3 className="text-lg lg:text-xl font-semibold dark:text-foreground/90">Add a payment method</h3>
              <p className="text-muted-foreground/80 dark:text-foreground/55 text-[15px] lg:text-base">Use your card or bank transfer depending on your country.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6 items-center"
            variants={stepItemVariants}
          >
            <motion.div
              className="rounded-md bg-asanka-primary dark:bg-asanka-primary/10 dark:border dark:border-asanka-accent-muted/15 w-14 h-14 flex items-center justify-center flex-shrink-0"
              variants={iconVariants}
            >
              <CopyCheck size={23} className="text-white dark:text-asanka-accent" />
            </motion.div>
            <div className="space-y-1 md:space-y-1.5">
              <h3 className="text-lg lg:text-xl font-semibold dark:text-foreground/90">Choose what you want to do</h3>
              <p className="text-muted-foreground/80 dark:text-foreground/55 text-[15px] lg:text-base">Send money, pay a bill, save, or invest.</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 pb-0 md:pb-10 xl:pb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={ctaVariants}
          >
            <h3 className="text-lg lg:text-xl font-semibold dark:text-foreground/90">That&apos;s it. No complexity. No back and forth.</h3>

            <Dialog>
              <div className="flex gap-2 md:gap-4">
                <DialogTrigger asChild>
                  <Button className="space-x-0.5 px-3 md:px-4 h-16 dark:bg-asanka-accent-muted/20 dark:text-asanka-accent dark:border dark:border-asanka-accent-muted/30 dark:hover:bg-asanka-accent-muted/30 dark:hover:border-asanka-accent-muted/40">
                    <Image
                      src="/images/icons/playstore.svg"
                      alt="Play Store"
                      width={34}
                      height={34}
                      className="w-7 h-7 lg:w-[34px] lg:h-[34px]"
                    />
                    <p className=" tracking-wide flex flex-col text-left font-light text-[13px] lg:text-sm">
                      GET IT ON
                      <span className="font-bold lg:text-lg">
                        Google Play
                      </span>
                    </p>
                  </Button>
                </DialogTrigger>

                <DialogTrigger asChild>
                  <Button variant="ghost" className="space-x-0.5 px-4 h-16 dark:text-foreground/60 dark:hover:text-foreground/80 dark:hover:bg-transparent">
                    <Image
                      src="/images/icons/app-store.svg"
                      alt="App Store"
                      width={34}
                      height={34}
                      className="w-7 h-7 lg:w-[34px] lg:h-[34px] dark:hidden"
                    />
                    <Image
                      src="/images/icons/app-store-white.webp"
                      alt="App Store"
                      width={34}
                      height={34}
                      className="w-7 h-7 lg:w-[34px] lg:h-[34px] hidden dark:block"
                    />
                    <p className="font-light tracking-wide flex flex-col text-left">
                      Download on the
                      <span className="font-semibold text-lg lg:text-2xl">
                        App Store
                      </span>
                    </p>
                  </Button>
                </DialogTrigger>
              </div>
              <ComingSoonContent />
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
export default HowItWorks;