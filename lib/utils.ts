import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { MouseEvent } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleDownloadClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  const target = document.getElementById("how-it-works");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (typeof window !== "undefined") {
    window.location.hash = "how-it-works";
  }
}
