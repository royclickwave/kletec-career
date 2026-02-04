import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
    const images = [
        'https://www.kletec.nl/site/upload/pictures/block_169/1/_mmr3067.jpg',
        'https://www.kletec.nl/site/upload/pictures/block_168/1/_mmr3081.jpg',
        'https://www.kletec.nl/site/upload/pictures/block_42/1/_mmr3091.jpg',
    ];

    return (
        <section id="team" className="section team">
            <div className="container">
                <div className="section-header text-center">
                    <h3>Team & Sfeer</h3>
                    <h2>Maak kennis met Kletec</h2>
                </div>

                <div className="team-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="team-image-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <img src={img} alt={`Kletec team sfeer ${index + 1}`} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="quote-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="quote-content">
                        <p className="quote-text">
                            "Bij Kletec krijg je de vrijheid om te experimenteren en je ideeën werkelijkheid te zien worden.
                            De machines die we hier bouwen, draaien overal ter wereld - dat maakt me trots."
                        </p>
                        <div className="quote-author">
                            <span className="author-name">Thijs van den Brink</span>
                            <span className="author-title">Mechanical Engineer</span>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Team;
