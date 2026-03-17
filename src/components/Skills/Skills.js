import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Skills section decorative icons
const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8L4 16L10 24" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8L28 16L22 24" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6L14 26" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const DatabaseIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="17" cy="8" rx="10" ry="3" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M7 8V22C7 25.5 11.5 28 17 28C22.5 28 27 25.5 27 22V8" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M7 16C7 19.5 11.5 22 17 22C22.5 22 27 19.5 27 16" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const ChartPieIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M16 6V16L22 20" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const skillsDecorations = [
    { icon: <CodeIcon />, x: 8, y: 25, delay: 0 },
    { icon: <DatabaseIcon />, x: 88, y: 20, delay: 0.8 },
    { icon: <ChartPieIcon />, x: 5, y: 75, delay: 1.5 },
];

const Skills = () => {
    const skillCategories = [
        {
            title: "Product & Business",
            icon: "🎯",
            skills: [
                "Product thinking", "User stories", "Feature flows", "Product analytics",
                "Business case building", "Process optimization", "Workflow design", "Customer-centric execution"
            ]
        },
        {
            title: "Analytics & Data",
            icon: "📊",
            skills: [
                "Power BI", "SQL", "DAX", "EDA",
                "Dashboarding", "Snowflake", "BigQuery", "Data visualization", "Star-schema modeling"
            ]
        },
        {
            title: "Development",
            icon: "💻",
            skills: [
                "Java", "Python", "MERN Stack", "React",
                "Node.js", "Express", "MongoDB", "API design"
            ]
        },
        {
            title: "AI & Systems",
            icon: "🤖",
            skills: [
                "Generative AI workflows", "Agentic AI concepts", "Basic ML",
                "LSTM forecasting", "AI-enabled product workflows", "IoT prototyping"
            ]
        },
        {
            title: "Design & Collaboration",
            icon: "🎨",
            skills: [
                "Figma", "Figma-to-React handoff", "Workflow diagrams",
                "SOP documentation", "Release notes", "Jira", "Asana", "Trello"
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {skillsDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.35, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 3, -3, 0]
                        }}
                        transition={{
                            duration: 5,
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
                    <h2 className="section-title">Skills & Tools</h2>
                    <div className="gold-line"></div>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-name">{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
