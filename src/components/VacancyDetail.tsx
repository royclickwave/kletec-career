import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import { ArrowLeft, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const VacancyDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const vacancy = vacancies.find(v => v.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!vacancy) {
        return (
            <div className="container section text-center" style={{ padding: '150px 0' }}>
                <h2>Vacature niet gevonden</h2>
                <p>De opgevraagde vacature bestaat niet of is inmiddels vervuld.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
                    Terug naar overzicht
                </Link>
            </div>
        );
    }

    return (
        <div className="vacancy-detail-page">
            {/* Mini Hero / Breadcrumbs */}
            <section className="detail-hero bg-navy">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={18} /> Terug naar alle vacatures
                    </Link>
                    <div className="detail-title-area">
                        <span className="vacancy-tag">{vacancy.tag}</span>
                        <h1>{vacancy.title}</h1>
                    </div>
                </div>
            </section>

            <section className="detail-content section">
                <div className="container">
                    <div className="detail-grid">
                        <motion.div
                            className="detail-main"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="content-block">
                                <h3>Over de functie</h3>
                                <p className="large-text">{vacancy.fullDescription}</p>
                            </div>

                            <div className="content-block">
                                <h3>Wat ga je doen?</h3>
                                <ul className="detail-list">
                                    {vacancy.tasks.map((task, i) => (
                                        <li key={i}><ChevronRight size={18} /> {task}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>Wat vragen wij?</h3>
                                <ul className="detail-list">
                                    {vacancy.requirements.map((req, i) => (
                                        <li key={i}><CheckCircle2 size={18} /> {req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>Wat bieden wij?</h3>
                                <ul className="detail-list benefits-list">
                                    {vacancy.benefits.map((benefit, i) => (
                                        <li key={i}><CheckCircle2 size={18} className="icon-gold" /> {benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.aside
                            className="detail-sidebar"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="sticky-sidebar">
                                <div className="sidebar-card">
                                    <h4>Interesse?</h4>
                                    <p>Ben jij de {vacancy.title} die we zoeken? Solliciteer direct!</p>
                                    <a href="#contact-bottom" className="btn btn-primary btn-block">
                                        Direct solliciteren <Send size={18} />
                                    </a>
                                </div>

                                <div className="sidebar-info">
                                    <div className="info-item">
                                        <strong>Locatie:</strong>
                                        <span>Barneveld</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Dienstverband:</strong>
                                        <span>Fulltime</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Niveau:</strong>
                                        <span>MBO / HBO</span>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>

            {/* Anchor for sidebar link */}
            <div id="contact-bottom" style={{ height: '1px' }}></div>
        </div>
    );
};

export default VacancyDetail;
