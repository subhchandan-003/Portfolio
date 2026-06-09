import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Custom SVG Icons for business/MBA theme
const PlantIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35V20" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 25C20 25 15 22 12 18" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 22C20 22 25 19 28 15" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 28C20 28 14 26 10 23" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 25C20 25 26 23 30 20" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="20" cy="10" rx="8" ry="6" stroke="#c9a962" strokeWidth="2" />
        <path d="M20 4V8" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ChartIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="6" height="16" stroke="#c9a962" strokeWidth="2" rx="1" />
        <rect x="17" y="10" width="6" height="24" stroke="#c9a962" strokeWidth="2" rx="1" />
        <rect x="28" y="6" width="6" height="28" stroke="#c9a962" strokeWidth="2" rx="1" />
        <path d="M9 16L17 8L28 2" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
);

const PresentationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="20" rx="2" stroke="#c9a962" strokeWidth="2" />
        <path d="M4 28L20 34L36 28" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="12" width="16" height="2" rx="1" fill="#c9a962" />
        <rect x="12" y="17" width="12" height="2" rx="1" fill="#c9a962" />
        <circle cx="28" cy="24" r="3" stroke="#c9a962" strokeWidth="2" />
    </svg>
);

const MapIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10C8 10 14 6 20 8C26 10 32 6 32 6V30C32 30 26 34 20 32C14 30 8 34 8 34V10Z" stroke="#c9a962" strokeWidth="2" />
        <path d="M8 10V34" stroke="#c9a962" strokeWidth="2" />
        <path d="M32 10V34" stroke="#c9a962" strokeWidth="2" />
        <circle cx="20" cy="18" r="3" stroke="#c9a962" strokeWidth="2" />
        <path d="M14 24L20 20L26 24" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const GrowthIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 32L12 26L18 28L26 18L34 8" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 8V14H28" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="8" r="2" fill="#c9a962" />
        <path d="M10 30L14 28L18 30L22 26L26 28L30 22L34 18" stroke="#c9a962" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    </svg>
);

const TargetIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#c9a962" strokeWidth="2" />
        <circle cx="20" cy="20" r="10" stroke="#c9a962" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" stroke="#c9a962" strokeWidth="2" />
        <circle cx="20" cy="20" r="2" fill="#c9a962" />
    </svg>
);

const floatingIcons = [
    { icon: <PlantIcon />, x: 5, y: 15, delay: 0 },
    { icon: <ChartIcon />, x: 85, y: 20, delay: 1 },
    { icon: <PresentationIcon />, x: 10, y: 70, delay: 2 },
    { icon: <MapIcon />, x: 80, y: 65, delay: 0.5 },
    { icon: <GrowthIcon />, x: 70, y: 40, delay: 1.5 },
    { icon: <TargetIcon />, x: 15, y: 45, delay: 2.5 },
];

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-grid"></div>
                <div className="hero-gradient"></div>

                {/* Animated gradient orbs */}
                <div className="hero-orbs">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                </div>

                {/* Floating business/MBA themed icons */}
                <div className="floating-icons">
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="floating-icon"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0.8, 0],
                                scale: [0, 1, 1, 0],
                                y: [0, -30, -60, -30],
                                x: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: `${item.x}%`,
                                top: `${item.y}%`,
                            }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </div>

                {/* Market chart animation */}
                <div className="chart-animation">
                    <motion.div
                        className="chart-bar chart-bar-1"
                        animate={{ height: ['20%', '60%', '40%', '80%', '50%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="chart-bar chart-bar-2"
                        animate={{ height: ['30%', '70%', '50%', '90%', '60%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                        className="chart-bar chart-bar-3"
                        animate={{ height: ['40%', '80%', '60%', '100%', '70%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.div
                        className="chart-line"
                        animate={{
                            d: ["M0 80 Q 20 60, 40 70 T 80 40 T 120 50 T 160 20", "M0 60 Q 20 40, 40 50 T 80 20 T 120 30 T 160 10", "M0 80 Q 20 60, 40 70 T 80 40 T 120 50 T 160 20"]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Map with zoom effect */}
                <motion.div
                    className="map-animation"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MapIcon />
                </motion.div>

                {/* Animated geometric shapes */}
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>

                <div className="hero-particles">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                scale: [0, 1.5, 0],
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50]
                            }}
                            transition={{
                                duration: Math.random() * 4 + 3,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="badge-dot"></span>
                        IIM Sambalpur MBA Candidate
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Building AI-enabled products with{' '}
                        <span className="highlight">business clarity</span> and{' '}
                        <span className="highlight">execution depth</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        I am Subhchandan Das, an MBA candidate at IIM Sambalpur with a foundation in
                        computer science, analytics, and digital product building. I work at the intersection of
                        product thinking, AI, and business problem solving to design solutions that are
                        practical, scalable, and customer-relevant.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('#projects')}
                        >
                            <span>View My Work</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => scrollToSection('#contact')}
                        >
                            <span>Connect With Me</span>
                        </button>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">250+</span>
                            <span className="stat-label">Learners Mentored</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Datasets Analyzed</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">22</span>
                            <span className="stat-label">Podium Finishes</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="visual-card">
                        <div className="card-inner">
                            <div className="card-content">
                                <div className="profile-badge">
                                    <span>Product & Analytics</span>
                                </div>
                                <div className="profile-main">
                                    <div className="profile-avatar">
                                        <img src="/profile.png" alt="Subhchandan Das" />
                                    </div>
                                    <h3>Subhchandan Das</h3>
                                    <p>MBA Candidate</p>
                                </div>
                                <div className="profile-skills">
                                    <span className="skill-tag">Product Thinking</span>
                                    <span className="skill-tag">Data Analytics</span>
                                    <span className="skill-tag">AI Integration</span>
                                </div>
                            </div>
                            <div className="card-decoration">
                                <div className="circle circle-1"></div>
                                <div className="circle circle-2"></div>
                                <div className="circle circle-3"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => scrollToSection('#about')}
            >
                <motion.div
                    className="scroll-mouse"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="scroll-wheel"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
