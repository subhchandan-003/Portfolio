import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import CaseCompetitions from './components/CaseCompetitions/CaseCompetitions';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills/Skills';
import BeyondWork from './components/BeyondWork/BeyondWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <CaseCompetitions />
                    <Achievements />
                    <Skills />
                    <BeyondWork />
                    <Contact />
                </main>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

export default App;
