"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "motion/react";

const getCardVariants = (position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
  const directions = {
    'top-left': { x: -40, y: -40 },
    'top-right': { x: 40, y: -40 },
    'bottom-left': { x: -40, y: 40 },
    'bottom-right': { x: 40, y: 40 },
  };

  const delays = {
    'top-left': 0,
    'top-right': 0.15,
    'bottom-left': 0.3,
    'bottom-right': 0.45,
  };

  return {
    hidden: {
      opacity: 0,
      x: directions[position].x,
      y: directions[position].y,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: delays[position],
        duration: 0.7,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function WhyUs() {
  return (
    <div id="about" className="mt-14 md:mt-0 py-14 md:py-20 lg:py-24 relative">
      <div className="container flex flex-col xl:flex-row xl:items-center justify-between gap-14 md:gap-8 z-20">
        <motion.div
          className="space-y-4 md:space-y-7 lg:min-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-[65px] font-heading font-extrabold text-asanka-foreground leading-[1.1] lg:leading-[1.05]"
            variants={textItemVariants}
          >
            What Makes <br />Asanka Send Different
          </motion.h1>
          <motion.p
            className="font-light text-muted-foreground leading-relaxed text-[15px] md:text-base"
            variants={textItemVariants}
          >
            Most remittance apps stop at sending cash. <br />Asanka Send helps you decide how money is used after it arrives.
          </motion.p>
          <motion.p
            className="font-light text-muted-foreground text-[15px] md:text-base"
            variants={textItemVariants}
          >
            All from one simple mobile app.
          </motion.p>
        </motion.div>

        <div className="space-y-4 z-20">
          <div className="flex gap-4 items-stretch md:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={getCardVariants('top-left')}
              className="w-1/2 flex md:block"
            >
              <Card className="bg-asanka-card-bg1 shadow-none w-full h-full md:h-auto border-none gap-0 justify-between flex flex-col">
                <CardContent>
                  <div className="relative mx-auto w-full max-w-[330px] aspect-square">
                    <Image
                      src="/images/illustrations/bank.webp"
                      alt="Bank illustration"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-sm sm:text-lg lg:text-2xl font-heading lg:font-extrabold text-[#170963] leading-4 sm:leading-tight lg:leading-6 px-3 md:px-6">
                  Explore investment <br />opportunities
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={getCardVariants('top-right')}
              className="w-1/2 flex md:block"
            >
              <Card className="bg-asanka-card-bg2 shadow-none w-full h-full md:h-auto border-none justify-between flex flex-col">
                <CardContent>
                  <div className="relative mx-auto w-full max-w-[330px] aspect-square">
                    <Image
                      src="/images/illustrations/money.webp"
                      alt="Money illustration"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-sm sm:text-lg lg:text-2xl font-heading lg:font-extrabold text-[#034220] leading-4 sm:leading-tight lg:leading-6 px-3 md:px-6">
                  Send money instantly
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <div className="flex gap-4 items-stretch md:items-start xl:relative xl:left-5 2xl:left-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={getCardVariants('bottom-left')}
              className="w-1/2 flex md:block"
            >
              <Card className="bg-linear-to-tr from-[#e8f1fe] to-[#fff] shadow-none w-full h-full md:h-auto border-none gap-2 justify-between flex flex-col">
                <CardContent>
                  <div className="relative mx-auto w-full max-w-[330px] aspect-square">
                    <Image
                      src="/images/illustrations/transaction.webp"
                      alt="Transaction illustration"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-sm sm:text-lg lg:text-2xl font-heading lg:font-extrabold text-[#002654] leading-4 sm:leading-tight lg:leading-6 px-3 md:px-6">
                  Pay school fees, utilities, and airtime directly
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={getCardVariants('bottom-right')}
              className="w-1/2 flex md:block"
            >
              <Card className="bg-asanka-card-bg4 shadow-none w-full h-full md:h-auto border-none gap-2 justify-between flex flex-col">
                <CardContent>
                  <div className="relative mx-auto w-full max-w-[330px] aspect-square">
                    <Image
                      src="/images/illustrations/cash-store.webp"
                      alt="Bank illustration"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-sm sm:text-lg lg:text-2xl font-heading lg:font-extrabold text-[#362600] leading-4 sm:leading-tight lg:leading-6 px-3 md:px-6">
                  Save toward future goals back home
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* logo illustration */}
      <Image
        src="/images/logo/logo-icon-illustration.svg"
        alt="Asanka Illustration"
        width={450}
        height={633}
        className="absolute top-0 md:top-32 right-0 md:left-0 opacity-80 select-none pointer-events-none transform scale-x-[-1] scale-y-[-1] md:scale-x-[1] md:scale-y-[1] z-10 w-[300px] h-[422px] md:w-[450px] md:h-[633px]"
      />

    </div>
  )
}
export default WhyUs;