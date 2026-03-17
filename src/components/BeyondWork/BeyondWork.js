import React from 'react';
import { motion } from 'framer-motion';
import './BeyondWork.css';

// Beyond Work decorative icons
const CameraIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="28" height="20" rx="3" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="17" cy="18" r="6" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="17" cy="18" r="2.5" fill="#c9a962" />
        <path d="M11 8V6C11 5 12 4 13 4H21C22 4 23 5 23 6V8" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const HeartIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 26C15 26 4 18 4 11C4 7 7 4 10 4C12 4 14 5 15 7C16 5 18 4 20 4C23 4 26 7 26 11C26 18 15 26 15 26Z" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const SportsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M16 6V26M6 16H26M9 9L23 23M23 9L9 23" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const beyondDecorations = [
    { icon: <CameraIcon />, x: 90, y: 15, delay: 0 },
    { icon: <HeartIcon />, x: 5, y: 50, delay: 0.8 },
    { icon: <SportsIcon />, x: 88, y: 75, delay: 1.5 },
];

const BeyondWork = () => {
    const activities = [
        {
            icon: "🏐",
            title: "Sports",
            description: "Represented handball and volleyball at the state level",
        },
        {
            icon: "🤝",
            title: "Social Service",
            description: "Coordinated fundraising for Odisha Development Management Program and InAmigos Foundation",
        },
        {
            icon: "📷",
            title: "Photography",
            description: "Capturing moments and composing visuals with a focus on uniqueness",
        }
    ];

    const education = [
        {
            degree: "MBA",
            institution: "Indian Institute of Management Sambalpur",
            year: "Batch: 2025 - 2027",
            focus: "Product thinking, business problem solving, analytics, and AI-enabled innovation",
            grade: ""
        },
        {
            degree: "B.Tech",
            institution: "Institute of Technical Education and Research, SOA University",
            year: "2023",
            focus: "Built the technical foundation that now supports my product and business journey",
            grade: "84.50%"
        },
        {
            degree: "HSC",
            institution: "St. Xaviers High School, CBSE",
            year: "2019",
            focus: "",
            grade: "84.60%"
        },
        {
            degree: "SSC",
            institution: "St. Xaviers High School, CBSE",
            year: "2017",
            focus: "",
            grade: "95.00%"
        }
    ];

    return (
        <section className="beyond-work section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {beyondDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.35, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -12, 0],
                            x: [0, 8, 0]
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
                    <h2 className="section-title">Beyond Work</h2>
                    <div className="gold-line"></div>
                    <p className="section-subtitle">
                        Outside academics and professional work, I value teamwork, resilience, service, and creativity.
                    </p>
                </motion.div>

                {/* Activities */}
                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            className="activity-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className="activity-icon">{activity.icon}</span>
                            <h3 className="activity-title">{activity.title}</h3>
                            <p className="activity-description">{activity.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="beyond-reflection"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    This side of my journey reflects how I approach work as well: with discipline, observation, collaboration, and a strong sense of commitment.
                </motion.p>

                {/* Education */}
                <motion.div
                    className="education-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="education-title">Education</h3>
                    <div className="education-timeline">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="education-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            >
                                <div className="education-degree">{edu.degree}</div>
                                <div className="education-details">
                                    <h4 className="education-institution">{edu.institution}</h4>
                                    <div className="education-meta">
                                        {edu.year && <span>{edu.year}</span>}
                                        {edu.grade && <span className="education-grade">{edu.grade}</span>}
                                    </div>
                                    {edu.focus && <p className="education-focus">{edu.focus}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BeyondWork;
