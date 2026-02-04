import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const stats = [
        { label: 'Wereldwijd actief', value: '35+', sub: 'landen' },
        { label: 'Ervaring in de branche', value: '25+', sub: 'jaar' },
        { label: 'Storingsvrije machines', value: '98%', sub: 'kwaliteit' },
    ];

    return (
        <section id="over-kletec" className="section about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Wie is Kletec?</h3>
                        <h2>Expert in automatisering</h2>
                        <p>
                            Kletec is dé expert op het gebied van automatisering in de eierverwerking.
                            Vanuit ons hoofdkantoor in Barneveld ontwikkelen, bouwen en leveren we slimme
                            machines en robotsystemen die wereldwijd draaien in meer dan 35 landen.
                        </p>
                        <p>
                            Onze no-nonsense aanpak en focus op kwaliteit zorgen ervoor dat onze machines
                            vrijwel nooit stilstaan. De vraag naar onze innovatieve oplossingen groeit -
                            en daarmee ons team. Ben jij klaar om mee te groeien?
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-wrapper">
                            <img
                                src="https://www.kletec.nl/site/upload/pictures/block_20/1/_mg_0091-cirkel.png"
                                alt="Kletec Machine"
                            />
                            <div className="image-decoration"></div>
                        </div>
                    </motion.div>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-sub">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default About;
