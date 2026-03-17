import React from 'react';
import { motion } from 'framer-motion';
import './CaseCompetitions.css';

// Case Competitions decorative icons
const BrainIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 4C13 4 10 7 10 11C10 14 12 17 15 18.5V24C15 25 16 26 17 26C18 26 19 25 19 24V18.5C22 17 24 14 24 11C24 7 21 4 17 4Z" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M8 11H26" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="1.5" fill="#c9a962" />
        <circle cx="22" cy="9" r="1.5" fill="#c9a962" />
    </svg>
);

const ChessIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 12H12L16 4Z" stroke="#c9a962" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="11" y="12" width="10" height="4" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="10" y="16" width="12" height="2" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="12" y="18" width="8" height="2" stroke="#c9a962" strokeWidth="1.5" />
        <rect x="11" y="20" width="10" height="8" rx="1" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const TargetIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="12" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="8" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="4" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="1.5" fill="#c9a962" />
    </svg>
);

const caseDecorations = [
    { icon: <BrainIcon />, x: 5, y: 20, delay: 0.2 },
    { icon: <ChessIcon />, x: 90, y: 50, delay: 1 },
    { icon: <TargetIcon />, x: 8, y: 80, delay: 1.8 },
];

const CaseCompetitions = () => {
    const highlights = [
        { title: "Novartis NEST 2.0", type: "Semi-Finalist", icon: "🏆" },
        { title: "TBO.com VoyageHack 3.0", type: "Semi-Finalist", icon: "⚓" },
    ];

    const stats = [
        { number: "30+", label: "National Finalist Finishes" },
        { number: "9", label: "National Wins" },
        { number: "OpsWise, ProdX", label: "Key Competition Wins" },
    ];

    return (
        <section className="case-competitions section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {caseDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.35, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
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
                    <h2 className="section-title">Case Competitions</h2>
                    <div className="gold-line"></div>
                    <p className="section-subtitle">
                        Case competitions have been one of the strongest practical outlets for my business thinking.
                        They have helped me sharpen structured problem solving, teamwork, prioritization, and business storytelling under pressure.
                    </p>
                </motion.div>

                <motion.div
                    className="competitions-highlights"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="highlight-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="highlight-icon">{item.icon}</span>
                            <div className="highlight-content">
                                <h3>{item.title}</h3>
                                <span className="highlight-badge">{item.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="competitions-stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="competitions-reflection"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p>
                        These experiences strengthened my ability to solve open-ended business problems,
                        structure recommendations clearly, and communicate ideas in competitive, real-world settings.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseCompetitions;
