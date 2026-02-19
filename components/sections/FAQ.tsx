"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "motion/react";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const accordionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const accordionItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

function FAQ() {
  return (
    <div className="py-10 md:py-16 lg:py-24 dark:pb-20 lg:dark:pb-28 dark:relative">
      <div className="container rounded-lg bg-asanka-muted dark:bg-card/60 dark:border dark:border-border dark:relative dark:shadow-lg dark:shadow-black/20 dark:mb-8 dark:overflow-hidden pt-10 pb-16 md:py-16 flex flex-col lg:flex-row items-center justify-evenly gap-7 lg:gap-2">
        {/* Floating glow effects - only visible in dark theme */}
        <div className="hidden dark:block absolute -top-8 -left-8 w-32 h-32 rounded-full bg-asanka-accent-muted/20 blur-3xl pointer-events-none"/>
        <div className="hidden dark:block absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-asanka-accent-muted/10 blur-3xl pointer-events-none"/>
        <motion.div
          className="space-y-3.5 md:space-y-6 md:max-w-xl lg:max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textContainerVariants}
        >
          <motion.h1
            className="font-heading font-extrabold text-3xl md:text-5xl lg:leading-16 text-asanka-foreground dark:text-asanka-foreground"
            variants={textItemVariants}
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            className="font-light text-foreground/60 dark:text-foreground/70 leading-snug text-[15px] md:text-base"
            variants={textItemVariants}
          >
            Choose a plan that fits your business needs and budget. No hidden fees, no surprises - just straightforward pricing for powerful financial management.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="w-full md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={accordionContainerVariants}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          // defaultValue="item-1"
          >
            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-1"
                className="bg-white/45 dark:bg-[#0f160f] data-[state=open]:bg-white dark:data-[state=open]:bg-[#151e15] dark:data-[state=open]:border-border px-5 rounded-lg transition-all duration-200"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium dark:text-foreground/90">
                  What is Nicepay?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-foreground/75 text-sm pt-2">
                  <p className="leading-relaxed ">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-2"
                className="bg-white/45 dark:bg-[#0f160f] data-[state=open]:bg-white dark:data-[state=open]:bg-[#151e15] dark:data-[state=open]:border-border px-5 md:py-1 rounded-lg transition-all duration-200"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium dark:text-foreground/90">
                  How does Nicepay work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-foreground/75 text-sm pt-2">
                  {/* <p className="leading-relaxed">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p> */}
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-3"
                className="bg-white/45 dark:bg-[#0f160f] data-[state=open]:bg-white dark:data-[state=open]:bg-[#151e15] dark:data-[state=open]:border-border px-5 md:py-1 rounded-lg transition-all duration-200"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium dark:text-foreground/90">
                  Is Nicepay secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-foreground/75 text-sm pt-2">
                  {/* <p className="leading-relaxed">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p> */}
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-4"
                className="bg-white/45 dark:bg-[#0f160f] data-[state=open]:bg-white dark:data-[state=open]:bg-[#151e15] dark:data-[state=open]:border-border px-5 md:py-1 rounded-lg transition-all duration-200"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium dark:text-foreground/90">
                  Is Nicepay secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-foreground/75 text-sm pt-2">
                  {/* <p className="leading-relaxed">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p> */}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </motion.div>
      </div>
      {/* Visual separator for dark theme */}
      <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
      <div className="hidden dark:block absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-asanka-accent-muted/50 to-transparent blur-sm"></div>
    </div >
  )
}
export default FAQ;