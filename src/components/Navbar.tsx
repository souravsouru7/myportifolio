"use client";

import { motion } from "framer-motion";
import { Home, User, Lightbulb, Briefcase, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Lightbulb },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
    const [activebase, setActivebase] = useState("#");

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <div className="flex items-center gap-1 md:gap-2 px-4 py-3 rounded-full bg-background/80 backdrop-blur-lg border border-border/50 shadow-2xl pointer-events-auto">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActivebase(item.href)}
                        className={cn(
                            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary",
                            activebase === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                        )}
                    >
                        <span className="md:hidden">
                            <item.icon className="w-5 h-5" />
                        </span>
                        <span className="hidden md:block">
                            {item.name}
                        </span>
                        {activebase === item.href && (
                            <motion.div
                                layoutId="bubble"
                                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};
