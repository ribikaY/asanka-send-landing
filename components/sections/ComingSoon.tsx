"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { ReactNode } from "react";

export function ComingSoonContent() {
    return (
        <DialogContent className="rounded-2xl py-8 md:py-12 md:max-w-xl">
            <DialogHeader>
                <DialogTitle className="text-asanka-primary text-4xl md:text-5xl font-heading text-center">Coming Soon</DialogTitle>
                <DialogDescription className="text-center md:text-base">
                    Asanka Send is launching soon.
                    <span className="block pt-2 md:pt-2.5">Join the waitlist to get notified as soon as the app is available and be among the first to send money with confidence.</span>
                </DialogDescription>
            </DialogHeader>
            <Image
                src="/images/mock-ups/coming-soon.webp"
                alt="Coming Soon"
                width={290}
                height={309}
                className="mx-auto md:mt-3"
                priority={true}
                blurDataURL="/images/mock-ups/coming-soon.webp"
            />
            <DialogFooter className="flex justify-center sm:justify-center mt-2 md:mt-3">
                <DialogClose asChild>
                    <Button className="rounded-full bg-asanka-secondary hover:bg-asanka-secondary/90 font-normal py-6 md:py-7 w-full sm:w-[300px]">Join the waitlist</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}

interface ComingSoonProps {
    children?: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
    return (
        <Dialog>
            {children && (
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
            )}
            <ComingSoonContent />
        </Dialog>
    )
}

export default ComingSoon;