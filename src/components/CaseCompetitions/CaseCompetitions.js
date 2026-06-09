import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CaseCompetitions.css';

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

const hallOfFameData = [
    {
        category: "win",
        label: "Winner",
        competitions: [
            { name: "PROD-IGY", domain: "Product Management", host: "SCMHRD × Skilled Sapiens", registrations: "356" },
            { name: "Founder's Edge Challenge", domain: "Product Management", host: "IIM Raipur × Lyntell (Tigrid Technologies)", registrations: "315" },
            { name: "Ops'escape Room", domain: "Operations", host: "IIM Sambalpur", registrations: "149" },
            { name: "Name Our Brand", domain: "Market Research", host: "Sojhi Ventures", registrations: "—" },
        ]
    },
    {
        category: "podium",
        label: "Runner-Up",
        competitions: [
            { name: "Opscura", domain: "Operations", host: "SIOM Nashik", registrations: "456", rank: "1st Runner-Up" },
            { name: "Policy Crossroads", domain: "Policy", host: "IIM Sambalpur", registrations: "176", rank: "1st Runner-Up" },
            { name: "HR Discourse", domain: "Human Resources", host: "IIM Sambalpur", registrations: "151", rank: "1st Runner-Up" },
            { name: "Prompt & Profit (BizMark'26)", domain: "Prompt Eng. & Applied AI", host: "DTU × Blogy", registrations: "—", rank: "1st Runner-Up" },
            { name: "Grant Thornton × Continuum 1.0", domain: "Operations", host: "IIM Sambalpur × Grant Thornton", registrations: "73", rank: "2nd Runner-Up" },
            { name: "Big Blog Theory", domain: "Content Writing", host: "OURT", registrations: "—", rank: "2nd Runner-Up" },
        ]
    },
    {
        category: "finalist",
        label: "Finalist",
        competitions: [
            { name: "Kotler's Maniac", domain: "Marketing", host: "IIT BHU", registrations: "426" },
            { name: "E-Stratega", domain: "Strategy", host: "IIM Sambalpur", registrations: "368" },
            { name: "Ops'timato", domain: "Operations", host: "IIM Sambalpur × Mix Masters", registrations: "288" },
            { name: "Technovate", domain: "Technology", host: "IIM Sambalpur", registrations: "129" },
            { name: "MudraBazar", domain: "Financial Analysis", host: "IIM Sambalpur", registrations: "—" },
            { name: "DataViz 3.0", domain: "Business Analytics", host: "IIM Sambalpur", registrations: "—" },
            { name: "Ultimate PM", domain: "Product Management", host: "IIM Sambalpur", registrations: "—" },
            { name: "BrandBaazi 8.0", domain: "Marketing", host: "IIM Sambalpur", registrations: "—" },
            { name: "Pronigma 7.0", domain: "Marketing", host: "IIM Sambalpur", registrations: "—" },
        ]
    },
    {
        category: "semi",
        label: "National Semi-Final",
        competitions: [
            { name: "NEST 2.0", domain: "Tech / Healthtech", host: "Novartis", registrations: "33,314" },
            { name: "VoyageHack 3.0", domain: "Tech Product Management", host: "tbo.com", registrations: "~11,000" },
            { name: "ET Gen AI", domain: "Generative AI", host: "Economic Times", registrations: "—" },
        ]
    },
];

const hofStats = [
    { number: "28", label: "Competitions" },
    { number: "5", label: "1st Place Wins" },
    { number: "11", label: "Podium Finishes" },
    { number: "9", label: "Finalist Runs" },
    { number: "3", label: "National Semi-Finals" },
    { number: "33K+", label: "Largest Field" },
];

const categoryConfig = {
    win:      { badge: "Winner",              color: "#c9a962", bg: "rgba(201,169,98,0.12)",  icon: "🏆" },
    podium:   { badge: "Runner-Up",           color: "#a8b5c4", bg: "rgba(168,181,196,0.10)", icon: "🥈" },
    finalist: { badge: "Finalist",            color: "#7d9b8c", bg: "rgba(125,155,140,0.10)", icon: "🎖️" },
    semi:     { badge: "National Semi-Final", color: "#9b8fc4", bg: "rgba(155,143,196,0.10)", icon: "🚩" },
};

const FILTERS = ["All", "Wins", "Runner-Up", "Finalists", "Semi-Finals"];
const filterMap = { All: null, Wins: "win", "Runner-Up": "podium", Finalists: "finalist", "Semi-Finals": "semi" };

const CaseCompetitions = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const highlights = [
        { title: "PROD-IGY", type: "Winner · 1st of 356", icon: "🏆", host: "SCMHRD × Skilled Sapiens" },
        { title: "Novartis NEST 2.0", type: "National Semi-Finalist · 33,314 teams", icon: "🚀", host: "Novartis" },
        { title: "TBO.com VoyageHack 3.0", type: "National Semi-Finalist · 11K+ teams", icon: "⚓", host: "TBO.com" },
    ];

    const visibleCategories = hallOfFameData.filter(cat =>
        filterMap[activeFilter] === null || cat.category === filterMap[activeFilter]
    );

    return (
        <section className="case-competitions section">
            <div className="section-decorations">
                {caseDecorations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="section-decoration-icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.35, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                        style={{ left: `${item.x}%`, top: `${item.y}%` }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>

            <div className="container">
                {/* Section Header */}
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

                {/* Featured Highlights */}
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
                                <p className="highlight-host">{item.host}</p>
                                <span className="highlight-badge">{item.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Hall of Fame */}
                <motion.div
                    className="hof-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="hof-header">
                        <span className="hof-trophy">🏅</span>
                        <div>
                            <h3 className="hof-title">Hall of Fame</h3>
                            <p className="hof-subtitle">Full competition record across IIMs, IITs & national challenges</p>
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="hof-stats-grid">
                        {hofStats.map((s, i) => (
                            <motion.div
                                key={i}
                                className="hof-stat"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                            >
                                <span className="hof-stat-number">{s.number}</span>
                                <span className="hof-stat-label">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Filter Tabs */}
                    <div className="hof-filters">
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                className={`hof-filter-btn ${activeFilter === f ? 'active' : ''}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Competition Cards by Category */}
                    {visibleCategories.map((cat, catIdx) => {
                        const cfg = categoryConfig[cat.category];
                        return (
                            <motion.div
                                key={cat.category}
                                className="hof-category"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            >
                                <div className="hof-category-header">
                                    <span className="hof-category-icon">{cfg.icon}</span>
                                    <span className="hof-category-label" style={{ color: cfg.color }}>{cfg.badge}</span>
                                    <span className="hof-category-count">{cat.competitions.length}</span>
                                </div>

                                <div className="hof-cards-grid">
                                    {cat.competitions.map((comp, i) => (
                                        <motion.div
                                            key={i}
                                            className="hof-card"
                                            style={{ '--cat-color': cfg.color, '--cat-bg': cfg.bg }}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.35, delay: i * 0.05 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="hof-card-top">
                                                <span className="hof-card-badge" style={{ color: cfg.color, background: cfg.bg }}>
                                                    {comp.rank || cfg.badge}
                                                </span>
                                                {comp.registrations !== "—" && (
                                                    <span className="hof-card-reg">{comp.registrations} teams</span>
                                                )}
                                            </div>
                                            <h4 className="hof-card-name">{comp.name}</h4>
                                            <p className="hof-card-domain">{comp.domain}</p>
                                            <p className="hof-card-host">{comp.host}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Reflection */}
                <motion.div
                    className="competitions-reflection"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p>
                        These experiences strengthened my ability to solve open-ended business problems,
                        structure recommendations clearly, and communicate ideas in competitive, real-world settings
                        — across domains from Product Management and Strategy to Operations, AI, and Policy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseCompetitions;
