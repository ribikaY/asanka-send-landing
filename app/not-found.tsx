import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="m-4 min-h-[97vh] rounded-2xl relative noise bg-gradient-hero flex flex-col overflow-hidden">
      <div className="container flex flex-col justify-between flex-1 py-10 gap-10">
        {/* Top logo */}
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo/logo.svg"
            alt="Asanka Send Logo"
            width={176}
            height={50}
          />
        </div>

        {/* Center content */}
        <div className="flex flex-1 items-center justify-between gap-10 flex-col-reverse md:flex-row z-10">
          <div className="space-y-6 max-w-xl">
            <p className="uppercase tracking-[0.2em] text-sm text-foreground/60">
              Page not found
            </p>
            <h1 className="font-black text-5xl md:text-6xl text-asanka-foreground leading-tight">
              Looks like you took a wrong turn.
            </h1>
            <p className="font-light text-foreground/80 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back to where you can manage money back home from
              one app.
            </p>
            <div className="flex items-center gap-4 z-100">
              <Link href="/">
                <Button className="rounded-full bg-asanka-secondary hover:bg-asanka-secondary/90 font-light py-6 px-8">
                  Back to home
                </Button>
              </Link>
              <Link href="/" className="text-asanka-foreground underline-offset-4 hover:underline text-sm md:text-base">
                Contact support
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-xl aspect-square opacity-80">
            <Image
              src="/images/illustrations/404.svg"
              alt="404 Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}


