import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

// Experience section decorative icons
const BriefcaseIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="28" height="22" rx="2" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M12 8V6C12 4.5 13 3 15 3H21C23 3 24 4.5 24 6V8" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M15 15H21M15 19H19" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const BuildingIcon = () => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="26" height="22" rx="1" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="12" y="18" width="5" height="5" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="21" y="18" width="5" height="5" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="12" y="26" width="5" height="5" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="21" y="26" width="5" height="5" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M19 3V8M19 3L15 6H23L19 3Z" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const TeamIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M6 24C6 21 8.5 18 12 18C13.5 18 15 18.5 16 19.5" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="22" cy="10" r="4" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M28 22C28 19 25.5 16 22 16C20.5 16 19 16.5 18 17.5" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="17" cy="22" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M17 25V28" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const experienceDecorations = [
    { icon: <BriefcaseIcon />, x: 92, y: 15, delay: 0.5 },
    { icon: <BuildingIcon />, x: 5, y: 60, delay: 1 },
    { icon: <TeamIcon />, x: 90, y: 75, delay: 1.5 },
];

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Business Analytics Intern",
            company: "Parry Enterprises India Ltd. (Murugappa Group)",
            period: "Apr 2026 – May 2026",
            description: "Designed and shipped AI-powered analytics products during a 2-month internship with one of India's leading conglomerates, working across product strategy, BI, and GTM.",
            highlights: [
                "Designed AI-powered sales intelligence product via Claude API; shipped live tool beyond original project scope",
                "Built & deployed a 6-screen BI dashboard enabling self-serve sales analytics across 5 years of transactional data",
                "Designed GTM strategy for 3 product categories covering pricing models, phased roadmap & KPIs",
                "Authored 7,200-word product spec with 25+ design tokens & 6-screen interaction states adopted by design team"
            ],
            lesson: "This internship showed me that a clear product spec and a well-structured BI layer can transform how sales teams access and act on data — the best tools are the ones people actually use.",
            icon: "🏢"
        },
        {
            id: 2,
            role: "Teaching Assistant",
            company: "Interface Software",
            period: "Jul 2023 - May 2025",
            description: "Worked across technical mentoring, analytics education, product-like learning systems, and workflow optimization to improve learning delivery and student outcomes.",
            highlights: [
                "Mentored 250+ learners in full-stack development and improved pass rate by 10%",
                "Designed analytics labs using NumPy, Pandas, and Matplotlib",
                "Built reproducible EDA notebooks and automated data-cleaning workflows",
                "Created feature flows, user stories, SOPs, workflow diagrams, and release notes",
                "Supported MERN architecture and API optimization for scalable performance",
                "Standardized code reviews and LMS-based sets to improve engagement and consistency"
            ],
            lesson: "This role helped me understand that good execution is not only about solving problems technically. It is about designing better systems, improving user experience, reducing friction, and making delivery repeatable and scalable.",
            icon: "🎓"
        },
        {
            id: 3,
            role: "Data Science Intern",
            company: "RINEX",
            period: "Nov 2021 - Dec 2021",
            description: "Worked on exploratory data analysis and dashboard-driven decision support across multiple datasets.",
            highlights: [
                "Built EDA reports and dashboards on 50+ datasets",
                "Generated actionable insights for product and business stakeholders",
                "Integrated and analyzed datasets to support decision making",
                "Developed AI-driven decision-support models for efficient data exploration"
            ],
            lesson: "This internship strengthened my belief that data is most valuable when it helps teams prioritize clearly, act faster, and make better decisions.",
            icon: "📊"
        }
    ];

    return (
        <section id="experience" className="experience section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {experienceDecorations.map((item, index) => (
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
                    <h2 className="section-title">Experience</h2>
                    <div className="gold-line"></div>
                    <p className="section-subtitle">
                        My experience reflects a combination of customer-facing execution, analytical problem solving,
                        technical depth, and process improvement.
                    </p>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="experience-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="experience-header">
                                <div className="experience-icon">{exp.icon}</div>
                                <div className="experience-meta">
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <p className="experience-company">{exp.company}</p>
                                    <span className="experience-period">{exp.period}</span>
                                </div>
                            </div>

                            <p className="experience-description">{exp.description}</p>

                            <div className="experience-highlights">
                                <h4>Key Highlights</h4>
                                <ul>
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>
                                            <span className="highlight-bullet">▹</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="experience-lesson">
                                <div className="lesson-icon">💡</div>
                                <p>{exp.lesson}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
