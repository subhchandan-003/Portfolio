import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

// Achievements section decorative icons
const TrophyIcon = () => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14H28V20C28 24 24 27 19 27H19C14 27 10 24 10 20V14Z" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M8 14V11C8 9 10 7 13 7H25C28 7 30 9 30 11V14" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M19 27V32M14 32H24" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 10H25" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const MedalIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="17" r="10" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="5" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M17 4V7M17 27V30M4 17H7M27 17H30" stroke="#c9a962" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const StarIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L19.5 11.5L28 12.5L21.5 18.5L23 27L16 23L9 27L10.5 18.5L4 12.5L12.5 11.5L16 4Z" stroke="#c9a962" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const achievementsDecorations = [
    { icon: <TrophyIcon />, x: 92, y: 15, delay: 0 },
    { icon: <MedalIcon />, x: 6, y: 55, delay: 0.8 },
    { icon: <StarIcon />, x: 88, y: 75, delay: 1.5 },
];

const Achievements = () => {
    const achievements = [
        {
            category: "Scholarships",
            items: [
                { title: "State Medhabruti Scholarship", description: "Earned for academic merit", icon: "🎓" },
                { title: "University Performance Scholarship", description: "Totaling Rs. 1.8 lakhs", icon: "📚" },
            ]
        },
        {
            category: "Awards",
            items: [
                { title: "Perfect 10.0 CGPA", description: "10th board exams - Rs. 20,000 cash prize", icon: "🏅" },
            ]
        },
        {
            category: "Creative Work",
            items: [
                { title: "Freelance Projects", description: "20+ projects delivered", icon: "✍️" },
                { title: "Portfolio Assets", description: "50+ creative assets", icon: "🎨" },
            ]
        }
    ];

    const certifications = [
        { name: "HelloPM Fellowship", year: "2026", desc: "Product strategy, analytics, AI-enabled workflows" },
        { name: "Product Analytics", year: "2025", desc: "Metrics, prioritization, adoption-retention frameworks" },
        { name: "AI for Product Management", year: "2025", desc: "GenAI, agentic AI, workflow automation" },
        { name: "Lean Six Sigma Green Belt", year: "2025", desc: "DMAIC, process improvement, waste reduction" },
        { name: "Agile Project Management", year: "2025", desc: "Scrum, Kanban, sprint planning, Jira" },
    ];

    return (
        <section className="achievements section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {achievementsDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.35, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -12, 0],
                            rotate: [0, 8, -8, 0]
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
                    <h2 className="section-title">Achievements & Certifications</h2>
                    <div className="gold-line"></div>
                </motion.div>

                {/* Achievements */}
                <div className="achievements-grid">
                    {achievements.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="achievement-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <h3 className="category-title">{category.category}</h3>
                            <div className="category-items">
                                {category.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={itemIndex}
                                        className="achievement-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + itemIndex * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <span className="achievement-icon">{item.icon}</span>
                                        <div className="achievement-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    className="certifications-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="certifications-title">Certifications</h3>
                    <p className="certifications-intro">
                        My certifications are aligned around one clear goal: becoming stronger in product thinking,
                        analytics, AI-enabled innovation, agile execution, and process optimization.
                    </p>

                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="certification-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.03, borderColor: 'rgba(201, 169, 98, 0.4)' }}
                            >
                                <span className="cert-year">{cert.year}</span>
                                <h4 className="cert-name">{cert.name}</h4>
                                <p className="cert-desc">{cert.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
