"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <SectionWrapper id="contact" className="min-h-screen flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
                I’m currently looking for new opportunities. Whether you have a question or just want to say hi,
                I’ll try my best to get back to you!
            </p>

            <div className="flex flex-col items-center gap-6 mb-12">
                <a href="mailto:souravr0707@gmail.com" className="flex items-center gap-3 text-xl hover:text-primary transition-colors">
                    <Mail className="w-6 h-6" />
                    souravr0707@gmail.com
                </a>
                <a href="tel:+919061650463" className="flex items-center gap-3 text-xl hover:text-primary transition-colors">
                    <Phone className="w-6 h-6" />
                    +91-9061650463
                </a>
            </div>

            <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </Button>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-24 text-sm text-muted-foreground/50"
            >
                © {new Date().getFullYear()} Sourav R. All rights reserved.
            </motion.div>
        </SectionWrapper>
    );
};
