"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface FloatingOrbProps {
  className?: string;
}

export default function FloatingOrb({ className }: FloatingOrbProps) {
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = orbRef.current;
    if (!el) return;

    const doc = document.documentElement;

    const getProgress = () => {
      const scrollY = window.scrollY || 0;
      const innerHeight = window.innerHeight;
      const maxScroll = Math.max(1, doc.scrollHeight - innerHeight);
      return Math.min(1, Math.max(0, scrollY / maxScroll));
    };

    const applyGlowTransform = (progress: number) => {
      const eased = progress * progress;

      // Slightly increased movement (still subtle)
      const translateX = Math.sin(eased * Math.PI * 2) * 12;
      const translateY = eased * -35;

      // Slight scale variation
      const scale = 1.02 + 0.025 * (1 - eased);

      // More noticeable but controlled opacity
      const opacity = 0.22 + 0.12 * (1 - eased);

      el.style.transform = `translate3d(${translateX.toFixed(
        2
      )}px, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;

      el.style.opacity = `${Math.max(0.18, Math.min(0.35, opacity)).toFixed(
        3
      )}`;
    };

    const reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reducedMotion) {
      applyGlowTransform(getProgress());
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      applyGlowTransform(getProgress());
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    applyGlowTransform(getProgress());

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "hidden dark:block dark:lg:hidden fixed top-[-90px] left-[-90px] w-[290px] h-[290px] pointer-events-none z-0",
        className
      )}
    >
      <div
        ref={orbRef}
        className="w-full h-full rounded-full blur-3xl"
        style={{
          opacity: 0.28,
          transform: "translate3d(0px, 0px, 0) scale(1.02)",
          background:
            "radial-gradient(circle at 40% 30%, rgba(165,214,167,0.6) 0%, rgba(165,214,167,0.3) 32%, rgba(165,214,167,0.12) 55%, rgba(165,214,167,0) 75%)",
          filter: "saturate(1.3) brightness(1.1)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
}