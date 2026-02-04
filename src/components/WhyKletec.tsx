import React from 'react';
import { Cpu, Users, TrendingUp, RefreshCw, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyKletec: React.FC = () => {
    const benefits = [
        {
            title: 'Innovatief werk',
            icon: <Cpu size={32} />,
            text: 'Werk aan cutting-edge machines en robotsystemen die wereldwijd impact maken.',
        },
        {
            title: 'Informele sfeer',
            icon: <Users size={32} />,
            text: 'Korte lijnen, directe communicatie en een hecht team waarin jouw input telt.',
        },
        {
            title: 'Groei & ontwikkeling',
            icon: <TrendingUp size={32} />,
            text: 'Ruimte om te leren, te groeien en je vaardigheden te ontwikkelen.',
        },
        {
            title: 'Afwisselend werk',
            icon: <RefreshCw size={32} />,
            text: 'Geen dag is hetzelfde - van ontwikkeling tot installatie bij klanten.',
        },
        {
            title: 'Internationale exposure',
            icon: <Globe size={32} />,
            text: 'Werk voor klanten in 35+ landen en zie je werk wereldwijd draaien.',
        },
        {
            title: 'Barneveld',
            icon: <MapPin size={32} />,
            text: 'Werken in het hart van de Foodvalley, goed bereikbaar en gratis parkeren.',
        },
    ];

    return (
        <section id="waarom-wij" className="section bg-navy why-kletec">
            <div className="container">
                <div className="section-header text-center">
                    <h3 style={{ color: 'var(--color-secondary)' }}>Waarom Kletec?</h3>
                    <h2 style={{ color: 'var(--color-white)' }}>Waarom kiezen voor Kletec?</h2>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h4 className="benefit-title">{benefit.title}</h4>
                            <p className="benefit-text">{benefit.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default WhyKletec;
