import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

// Contact section decorative icons
const GlobeIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="17" r="11" stroke="#c9a962" strokeWidth="1.5" />
        <ellipse cx="17" cy="17" rx="5" ry="11" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M6 17H28" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const MessageIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="18" rx="2" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M4 10L16 18L28 10" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const NetworkIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="24" cy="10" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <circle cx="17" cy="24" r="3" stroke="#c9a962" strokeWidth="1.5" />
        <path d="M12 12L22 12M22 12L15 22M12 12L15 22" stroke="#c9a962" strokeWidth="1.5" />
    </svg>
);

const contactDecorations = [
    { icon: <GlobeIcon />, x: 5, y: 15, delay: 0 },
    { icon: <MessageIcon />, x: 90, y: 30, delay: 0.8 },
    { icon: <NetworkIcon />, x: 8, y: 75, delay: 1.5 },
];

const Contact = () => {
    const contactInfo = [
        {
            icon: "📧",
            label: "Email",
            value: "2001subhchandandas@gmail.com",
            link: "mailto:2001subhchandandas@gmail.com"
        },
        {
            icon: "📱",
            label: "Phone",
            value: "+91 7381141577",
            link: "tel:+917381141577"
        },
        {
            icon: "💼",
            label: "LinkedIn",
            value: "linkedin.com/in/subh-chandan-das/",
            link: "https://linkedin.com/in/subh-chandan-das/"
        },
        {
            icon: "💻",
            label: "GitHub",
            value: "github.com/subhchandan-003",
            link: "https://github.com/subhchandan-003"
        }
    ];

    return (
        <section id="contact" className="contact section">
            {/* Section-specific decorations */}
            <div className="section-decorations">
                {contactDecorations.map((item, index) => (
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
                    <h2 className="section-title">Let's Connect</h2>
                    <div className="gold-line"></div>
                    <p className="section-subtitle">
                        I am always open to conversations around product management, AI-enabled innovation,
                        analytics, and business problem solving. If my work resonates with you, feel free to connect.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                whileHover={{ x: 10, borderColor: 'rgba(201, 169, 98, 0.3)' }}
                            >
                                <span className="contact-icon">{info.icon}</span>
                                <div className="contact-details">
                                    <span className="contact-label">{info.label}</span>
                                    <span className="contact-value">{info.value}</span>
                                </div>
                                <svg className="contact-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="contact-cta"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="cta-card">
                            <h3>Download My Resume</h3>
                            <p>For a detailed view of my academic background, work experience, certifications, projects, and achievements.</p>
                            <a href="/Subhchandan_Das_Resume.pdf" download="Subhchandan_Das_Resume.pdf" className="btn btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
