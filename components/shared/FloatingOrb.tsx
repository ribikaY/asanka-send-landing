"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface FloatingOrbProps {
  className?: string;
}

export default function FloatingOrb({ className }: FloatingOrbProps) {
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = orbRef.current;
    if (!el) return;

    const doc = document.documentElement;

    const getProgress = () => {
      const scrollY = window.scrollY || 0;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      return Math.min(1, Math.max(0, scrollY / maxScroll));
    };

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reducedMotion) {
      const progress = getProgress();
      const translateX = Math.sin(progress * Math.PI * 2) * 6;
      const translateY = progress * -18;
      const scale = 1.02;

      el.style.transform = `translate3d(${translateX.toFixed(
        2
      )}px, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      el.style.opacity = "0.26";

      const onScroll = () => {
        const p = getProgress();
        const tx = Math.sin(p * Math.PI * 2) * 6;
        const ty = p * -18;
        el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(
          2
        )}px, 0) scale(${scale.toFixed(3)})`;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    let rafId: number | null = null;

    const tick = (time: number) => {
      const progress = getProgress();
      const t = time / 1000;

      // Gentle drift with time + scroll progress (kept intentionally small).
      const driftX = Math.sin(progress * Math.PI * 2) * 10;
      const driftY = progress * -26 + Math.sin(t * 0.9) * 6;

      const scale = 1 + 0.04 * Math.sin((progress + t * 0.03) * Math.PI * 2);
      const opacity =
        0.22 + 0.05 * (1 - progress) + Math.sin(t * 0.9) * 0.02;

      el.style.transform = `translate3d(${driftX.toFixed(
        2
      )}px, ${driftY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      el.style.opacity = `${Math.max(0, Math.min(0.35, opacity)).toFixed(3)}`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "hidden dark:block dark:md:hidden fixed top-[-90px] left-[-90px] w-[280px] h-[280px] pointer-events-none z-0",
        className
      )}
    >
      <div
        ref={orbRef}
        className="w-full h-full rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(165,214,167,0.55) 0%, rgba(165,214,167,0.25) 35%, rgba(165,214,167,0.08) 55%, rgba(165,214,167,0) 70%)",
          filter: "saturate(1.1)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
}

