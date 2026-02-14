"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Need to create Badge or just use div

const projects = [
    {
        title: "QuitEasy",
        category: "Full Stack Web Application",
        description: "MERN-based platform with admin dashboard, authentication, and CRUD workflows.",
        status: "Live",
        link: "https://www.quiteasy.in/",
    },
    {
        title: "Fade Elegance (UAE)",
        category: "Business Website",
        description: "Admin-managed business website with secure backend APIs.",
        status: "Live",
        link: "https://www.fadedelegance.ae/",
    },
    {
        title: "Al Nsral Dahabi Tyres",
        category: "Static Business Website",
        description: "Responsive website developed with structured frontend architecture.",
        status: "Live",
        link: "https://www.alnsraldahabityres.com/",
    },
    {
        title: "Golden Extreme",
        category: "Business Platform",
        description: "Full-stack application with admin panel and role-based access control.",
        status: "Live",
        link: "https://www.goldenextreme.com/",
    },
];

export const Projects = () => {
    return (
        <SectionWrapper id="projects" className="min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                Selected Freelance Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="p-8 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs font-mono text-green-500 font-medium tracking-wider uppercase">{project.status}</span>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-sm font-medium text-primary/80 mb-4">
                                {project.category}
                            </p>

                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-border/50">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium flex items-center gap-2 text-foreground/80 group-hover:text-primary transition-colors cursor-pointer"
                                >
                                    View Project <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Background Glow Effect */}
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper >
    );
};
