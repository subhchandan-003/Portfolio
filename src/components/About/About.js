import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// About section decorative icons
const GraduationIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 10V16C4 21.5 9.5 26 16 27C22.5 26 28 21.5 28 16V10L16 4Z" stroke="#c9a962" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 20H20M16 16V23" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const LightbulbIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4C10.5 4 7.5 7 7.5 10.5C7.5 13 9 15.5 11 16.5V20C11 21.5 12.5 23 14 23C15.5 23 17 21.5 17 20V16.5C19 15.5 20.5 13 20.5 10.5C20.5 7 17.5 4 14 4Z" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M10 25H18M9 28H19" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const PathIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="30" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="18" cy="20" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="30" cy="10" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M8 28L15 22M21 18L28 12" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const aboutDecorations = [
    { icon: <GraduationIcon />, x: 8, y: 20, delay: 0 },
    { icon: <LightbulbIcon />, x: 90, y: 15, delay: 1 },
    { icon: <PathIcon />, x: 5, y: 70, delay: 2 },
];

const About = () => {
    const aboutContent = {
        intro: "I am Subhchandan Das, an MBA candidate at IIM Sambalpur with a background in Computer Science and a growing professional focus on product management, analytics, and AI-enabled innovation.",
        body: `My journey began on the technical side, where I learned to build, debug, analyze, and solve problems through code. Over time, however, I became more interested in a larger question: how can technology be used not just to build systems, but to create better business outcomes, improve customer experience, and make products more relevant over time?

Before joining my MBA, I spent 23 months at Interface Software, where I mentored more than 250 learners in full-stack concepts and contributed to a 10 percent improvement in pass rates. I also worked as a Data Science Intern at RINEX, where I built EDA reports and dashboards on 50 plus datasets to support product and business decision making.`,
        focus: "I am especially interested in how AI can be integrated across the product lifecycle, from discovery and user research to prioritization, workflow automation, and continuous product improvement."
    };

    const timeline = [
        {
            year: "2023 - Present",
            title: "MBA Journey",
            description: "IIIM Sambalpur - Building capabilities in product thinking, business problem solving, analytics, and AI-enabled innovation."
        },
        {
            year: "2023 - 2025",
            title: "Interface Software",
            description: "Teaching Assistant - Mentored 250+ learners, designed analytics labs, built EDA workflows, created SOPs and feature flows."
        },
        {
            year: "2021",
            title: "RINEX",
            description: "Data Science Intern - Built EDA reports and dashboards on 50+ datasets for product and business decision making."
        }
    ];

    return (
        <section id="about" className="about section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {aboutDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.4, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "easeInOut"
                        }}
                        style={{ left: `${item.x}%`, top: `${item.y}%` }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="gold-line"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="about-intro">{aboutContent.intro}</p>

                        <div className="about-body">
                            {aboutContent.body.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <p className="about-focus">{aboutContent.focus}</p>
                    </motion.div>

                    <motion.div
                        className="about-timeline"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="timeline-title">My Journey</h3>
                        <div className="timeline">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 * index }}
                                >
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-year">{item.year}</span>
                                        <h4 className="timeline-title-item">{item.title}</h4>
                                        <p className="timeline-description">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="about-quote"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <blockquote>
                        "I position myself at the intersection of product, analytics, AI, and business problem solving. My technical foundation helps me execute, but my real focus is on understanding user needs, improving product decisions, and building systems that create measurable business value."
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
