"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

interface Language {
    code: string;
    label: string;
    icon: string;
}

function Header() {
    const languages: Language[] = [
        { code: "en", label: "EN", icon: "CA" },
        { code: "fr", label: "FR", icon: "FR" },
    ];

    return (
        <div className="py-3 md:py-5">
            <div className="container hidden md:flex justify-between items-center">
                <Image
                    src="/images/logo/logo.svg"
                    alt="Asanka Send Logo"
                    width={176}
                    height={50}
                    className="z-10"
                />
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex gap-6 text-foreground/70 z-10 relative">
                        <Link href="#about" className="hover:text-foreground/90 transition relative z-10">About</Link>
                        <Link href="#contact" className="hover:text-foreground/90 transition relative z-10">Contact</Link>
                        <Link href="#features" className="hover:text-foreground/90 transition relative z-10">Features</Link>
                    </nav>
                    <Button
                        asChild
                        className="lg:ml-6 rounded-full bg-asanka-secondary hover:bg-asanka-secondary/90 font-light py-5 z-10"
                    >
                        <Link href="#how-it-works">
                            Download
                            <Smartphone size={16} />
                        </Link>
                    </Button>
                    <Select defaultValue="en">
                        <SelectTrigger className="py-5 rounded-full bg-white dark:bg-background text-primary cursor-pointer z-10 shadow-none">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent className="shadow-xs">
                            <SelectGroup>
                                <SelectLabel>Languages</SelectLabel>
                                {
                                    languages.map((language) => (
                                        <SelectItem key={language.code} value={language.code}>
                                            <Image
                                                src={`/images/flags/${language.icon}.svg`}
                                                alt={`${language.label} flag`}
                                                width={20}
                                                height={15}
                                            />
                                            <span className="font-semibold text-[13px]">{language.label}</span>
                                        </SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
export default Header;