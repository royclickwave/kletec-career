import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-subtitle">Carrière bij Kletec</span>
                    <h1 className="hero-title">
                        Bouw mee aan de toekomst van <br />
                        <span>automatisering</span>
                    </h1>
                    <p className="hero-description">
                        Innovatieve machines. Wereldwijde impact. Jouw talent.
                    </p>
                    <div className="hero-actions">
                        <a href="#vacatures" className="btn btn-primary">
                            Bekijk onze vacatures <ChevronRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="circle-decoration decoration-1"></div>
            <div className="circle-decoration decoration-2"></div>

        </section>
    );
};

export default Hero;
