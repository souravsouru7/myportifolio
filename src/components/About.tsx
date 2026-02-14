"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <SectionWrapper id="about" className="min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                About Me
            </h2>
            <div className="max-w-4xl mx-auto px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center"
                >
                    I am a Full Stack Developer with 1 year of hands-on experience building and deploying
                    real-world MERN applications for business clients. Experienced in developing CRM systems,
                    financial tracking modules, billing workflows, and admin dashboards. Strong understanding
                    of REST APIs, authentication, database design, and AWS-based deployment. I combine
                    technical execution with business-oriented problem solving to deliver high-quality solutions.
                </motion.p>
            </div>
        </SectionWrapper>
    );
};
