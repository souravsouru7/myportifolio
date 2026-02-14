"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "C"],
    Frontend: ["React.js", "Redux", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
    Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Socket.IO"],
    Databases: ["MongoDB", "SQL", "Firebase"],
    "Cloud & DevOps": ["AWS (EC2, S3, Route53)", "Nginx", "VPS Deployment"],
    "Tools & Concepts": ["Git", "GitHub", "Postman", "MVC Architecture", "RBAC", "DSA"],
};

export const Skills = () => {
    return (
        <SectionWrapper id="skills" className="min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary transition-colors">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm bg-secondary/50 text-secondary-foreground border border-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
