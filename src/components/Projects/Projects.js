import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Projects section decorative icons
const RocketIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L22 14H26L18 28L10 14H14L18 4Z" stroke="#c9a962" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 18H22M12 22H24" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const GearIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="17" r="8" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M17 2V5M17 29V32M2 17H5M29 17H32M5.5 5.5L7.5 7.5M26.5 26.5L28.5 28.5M5.5 28.5L7.5 26.5M26.5 7.5L28.5 5.5" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const LightbulbIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4C11.5 4 8.5 7 8.5 10.5C8.5 13 10 15.5 12 16.5V20C12 21.5 13.5 23 15 23C16.5 23 18 21.5 18 20V16.5C20 15.5 21.5 13 21.5 10.5C21.5 7 18.5 4 15 4Z" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M11 26H19M10 28H20" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const projectsDecorations = [
    { icon: <RocketIcon />, x: 90, y: 10, delay: 0.3 },
    { icon: <GearIcon />, x: 5, y: 65, delay: 1 },
    { icon: <LightbulbIcon />, x: 92, y: 80, delay: 1.8 },
];

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Froggy",
            subtitle: "Agentic Product Copilot",
            year: "2025",
            description: "Froggy is a concept for an autonomous agentic AI system designed to automate complex workflows and reduce manual cognitive effort.",
            features: [
                "Automates multi-step work across emails, PDFs, docs, and related artifacts",
                "Uses agentic reasoning loops for structured task execution",
                "Supports end-to-end automation for report drafting and workflow support"
            ],
            tech: ["AI Agents", "Automation", "Workflow"],
            icon: "🐸",
            accent: "#4ade80"
        },
        {
            id: 2,
            title: "Insight Engine",
            subtitle: "Strategic Analytics Dashboard",
            year: "2025",
            description: "A strategic analytics project designed to turn fragmented business data into clear, actionable dashboards for decision support.",
            features: [
                "Integrates data using Snowflake and BigQuery",
                "Builds 10+ scalable data products",
                "Uses star schemas, DAX, and live interactive dashboards",
                "Converts raw metrics into actionable insights"
            ],
            tech: ["Power BI", "SQL", "Snowflake", "BigQuery"],
            icon: "📈",
            accent: "#60a5fa"
        },
        {
            id: 3,
            title: "AQI Monitoring System",
            subtitle: "IoT + Predictive Analytics",
            year: "2023",
            description: "An environmental monitoring MVP built to forecast air quality trends and support faster hazard response.",
            features: [
                "Uses calibrated multi-sensor IoT nodes",
                "Runs a real-time telemetry pipeline",
                "Applies LSTM forecasting models",
                "Displays KPIs and risk alerts through a dashboard"
            ],
            tech: ["IoT", "LSTM", "Python", "Analytics"],
            icon: "🌬️",
            accent: "#f472b6"
        },
        {
            id: 4,
            title: "VLaaS",
            subtitle: "Portable AR/VR Learning Concept",
            year: "2023",
            description: "A concept for an offline-first, portable AR/VR science learning environment designed to make experimentation more accessible and hands-on.",
            features: [
                "Addresses limited lab access in schools",
                "Increases hands-on exposure for students",
                "Solves scalability issues in science education"
            ],
            tech: ["AR/VR", "Education Tech", "Product Design"],
            icon: "🥽",
            accent: "#a78bfa"
        }
    ];

    return (
        <section id="projects" className="projects section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {projectsDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.35, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
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
                    <h2 className="section-title">Projects</h2>
                    <div className="gold-line"></div>
                    <p className="section-subtitle">
                        My projects reflect how I like to work: identify a real problem, structure the solution thoughtfully,
                        and build something that is practical, scalable, and insight-driven.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="project-header" style={{ borderColor: project.accent }}>
                                <span className="project-icon">{project.icon}</span>
                                <div className="project-title-group">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-subtitle">{project.subtitle}</span>
                                </div>
                                <span className="project-year">{project.year}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-features">
                                <h4>What it does</h4>
                                <ul>
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag" style={{
                                        borderColor: project.accent,
                                        color: project.accent
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-hover-content">
                                <span>View Details</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
