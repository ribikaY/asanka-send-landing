"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const watermarkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      type: "spring" as const,
      stiffness: 60,
      damping: 25,
    },
  },
};

function Footer() {
  return (
    <div id="contact" className="pt-10 pb-2 bg-gradient-footer">
      <div className="container">
        <div className="md:flex justify-between items-start space-y-6 md:space-y-0">
          <Image
            src="/images/logo/logo.svg"
            alt="Asanka Send Logo"
            width={176}
            height={50}
          />

          <div className="grid md:grid-cols-2 w-full max-w-sm md:max-w-md lg:max-w-2xl">
            <div className="space-y-4 md:space-y-6">
              <p className="text-[13px] text-muted-foreground font-medium">SITE MAP</p>
              <div className="space-y-1.5">
                <p className="text-foreground/80 hover:text-foreground cursor-pointer font-light">
                  About Us
                </p>
                <p className="text-foreground/80 hover:text-foreground cursor-pointer font-light">
                  Contact
                </p>
              </div>
            </div>

            {/* contact section */}
            <div className="space-y-4 md:space-y-6 mt-5 md:mt-0">
              <Badge className="rounded-full bg-asanka-foreground text-sm font-bold py-2.5 px-5">Contact Us</Badge>
              <div className="space-y-3">
                <p className="text-sm tracking-wide text-foreground">customers@asankasend.com</p>
                <p className="text-sm tracking-wide text-foreground">+ (44) 33 3303 1342</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <Image
                      src="/images/icons/telegram.svg"
                      alt="t"
                      width={19}
                      height={19}
                    />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <Image
                      src="/images/icons/whatsapp.svg"
                      alt="w"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <Image
                      src="/images/icons/linkedin.svg"
                      alt="l"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm tracking-wide text-foreground leading-relaxed">Suite 1 Park plaza, Heath Hayes, Cannock, England, WS12 2DD
                Mon.-Fri : 8am - 5pm GMT</p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[1357px] mx-auto aspect-[1357/259] mt-6 sm:hidden">
          <Image
            src="/images/logo/logo-illustration.svg"
            alt="Asanka Send Logo"
            fill
            priority={true}
            blurDataURL="/images/logo/logo-illustration.svg"
            className="object-contain"
          />
        </div>
        
        <motion.div
          className="hidden sm:block relative w-full max-w-[1357px] mx-auto aspect-[1357/259] mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={watermarkVariants}
        >
          <Image
            src="/images/logo/logo-illustration.svg"
            alt="Asanka Send Logo"
            fill
            priority={true}
            blurDataURL="/images/logo/logo-illustration.svg"
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}
export default Footer;