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
    <div className="py-10 md:py-16 lg:py-24">
      <div className="container rounded-lg bg-asanka-muted pt-10 pb-16 md:py-16 flex flex-col lg:flex-row items-center justify-evenly gap-7 lg:gap-2">
        <motion.div
          className="space-y-3.5 md:space-y-6 md:max-w-xl lg:max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textContainerVariants}
        >
          <motion.h1
            className="font-heading font-extrabold text-3xl md:text-5xl lg:leading-16 text-asanka-foreground"
            variants={textItemVariants}
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            className="font-light text-foreground/60 leading-snug text-[15px] md:text-base"
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
                className="bg-white/45 data-[state=open]:bg-white px-5 rounded-lg"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium">
                  What is Nicepay?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pt-2">
                  <p className="leading-relaxed ">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-2"
                className="bg-white/45 data-[state=open]:bg-white px-5 md:py-1 rounded-lg"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium">
                  How does Nicepay work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pt-2">
                  {/* <p className="leading-relaxed">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p> */}
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-3"
                className="bg-white/45 data-[state=open]:bg-white px-5 md:py-1 rounded-lg"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium">
                  Is Nicepay secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pt-2">
                  {/* <p className="leading-relaxed">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p> */}
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={accordionItemVariants}>
              <AccordionItem
                value="item-4"
                className="bg-white/45 data-[state=open]:bg-white px-5 md:py-1 rounded-lg"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium">
                  Is Nicepay secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pt-2">
                  {/* <p className="leading-relaxed">
                    Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and make secure transactions for businesses of all sizes.
                  </p> */}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </motion.div>
      </div>
    </div >
  )
}
export default FAQ;