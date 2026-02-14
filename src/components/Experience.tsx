"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "JK Studio — Interior Design Company",
        role: "MERN Developer",
        period: "Dec 2024 – Dec 2025",
        description: [
            "Designed and developed an all-in-one internal management system for an interior design company.",
            "Built a custom CRM module to handle client information, project stages, and site progress.",
            "Implemented a billing system to track invoices, quotations, and expenses.",
            "Created dashboard views for financial overviews and project revenue.",
            "Implemented role-based access control (RBAC) for secure data management.",
            "Deployed on AWS VPS using Nginx.",
        ],
    },
    {
        company: "Brototype (Remote)",
        role: "MERN Stack Developer (Training)",
        period: "Oct 2023 – Nov 2024",
        description: [
            "Completed intensive MERN stack training focused on production-ready applications.",
            "Developed multiple full-stack projects following clean architecture and best practices.",
        ],
    },
];

export const Experience = () => {
    return (
        <SectionWrapper id="experience" className="min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                Experience
            </h2>
            <div className="max-w-4xl mx-auto px-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 mt-1.5 z-10" />

                        <div className="md:w-1/2" />

                        <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                                <span className="text-sm font-mono text-primary/80 mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                <h4 className="text-muted-foreground mb-4">{exp.company}</h4>
                                <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="leading-relaxed">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
