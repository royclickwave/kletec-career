import React, { useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import { ArrowLeft, CheckCircle2, ChevronRight, Send, MapPin, Clock, GraduationCap, Calendar, Coffee, Heart, Rocket, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const VacancyDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const vacancy = vacancies.find(v => v.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

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

    const recruitmentProcess = [
        { icon: <Send size={20} />, title: "Solliciteer", text: "Stuur direct je CV en motivatie." },
        { icon: <Calendar size={20} />, title: "Kennismaking", text: "We nodigen je uit voor een kop koffie." },
        { icon: <UserCheck size={20} />, title: "Tweede gesprek", text: "Maak kennis met je directe teamleden." },
        { icon: <Rocket size={20} />, title: "Onboarding", text: "Welkom bij Kletec! We gaan van start." },
    ];

    return (
        <div className="vacancy-detail-page">
            {/* Header / Hero Section */}
            <section className="detail-hero bg-navy">
                <div className="container">
                    <button onClick={() => navigate(-1)} className="back-link btn-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        <ArrowLeft size={18} /> Terug naar overzicht
                    </button>
                    <div className="detail-title-area">
                        <span className="vacancy-tag">{vacancy.tag}</span>
                        <h1>{vacancy.title}</h1>
                        <div className="hero-meta" style={{ display: 'flex', gap: '20px', marginTop: '20px', color: 'rgba(255,255,255,0.7)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> Barneveld</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={18} /> Fulltime</span>
                        </div>
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
                                <h3>De uitdaging</h3>
                                <p className="large-text">{vacancy.fullDescription}</p>
                            </div>

                            <div className="content-block">
                                <h3>Jouw verantwoordelijkheden</h3>
                                <ul className="detail-list">
                                    {vacancy.tasks.map((task, i) => (
                                        <li key={i}>
                                            <div className="list-icon"><ChevronRight size={18} /></div>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                                <div className="content-block">
                                    <h3>Wat neem je mee?</h3>
                                    <ul className="detail-list">
                                        {vacancy.requirements.map((req, i) => (
                                            <li key={i}>
                                                <div className="list-icon"><CheckCircle2 size={18} /></div>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="content-block">
                                    <h3>Wat krijg je van ons?</h3>
                                    <ul className="detail-list benefits-list">
                                        {vacancy.benefits.map((benefit, i) => (
                                            <li key={i}>
                                                <div className="list-icon"><Heart size={18} className="icon-gold" /></div>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="content-block bg-gray" style={{ padding: '40px', borderRadius: '20px', marginTop: '40px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                                    <Coffee size={32} color="#C5081D" />
                                    <h3 style={{ margin: 0, border: 'none', padding: 0 }}>De sfeer bij Kletec</h3>
                                </div>
                                <p>Je komt terecht in een innovatief en groeiend bedrijf waar we niet alleen hard werken aan de beste machines, maar ook tijd maken voor gezelligheid. Maandelijks hebben we een borrel, we vieren successen en er is altijd ruimte voor een grapje op de werkvloer. Professionaliteit combineren we met een informele sfeer.</p>
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
                                    <h4>Klaar voor de start?</h4>
                                    <p>Word jij onze nieuwe {vacancy.title}? Laat van je horen!</p>
                                    <a href="/#contact" className="btn btn-primary btn-block">
                                        Nu solliciteren <Send size={18} />
                                    </a>
                                </div>

                                <div className="sidebar-info">
                                    <div className="info-item">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} /> <strong>Locatie</strong></div>
                                        <span>Barneveld</span>
                                    </div>
                                    <div className="info-item">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Clock size={16} /> <strong>Dienstverband</strong></div>
                                        <span>Fulltime</span>
                                    </div>
                                    <div className="info-item">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><GraduationCap size={16} /> <strong>Niveau</strong></div>
                                        <span>MBO / HBO</span>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Recruitment</h3>
                        <h2>Hoe ziet je sollicitatieproces eruit?</h2>
                        <p>Snel, duidelijk en persoonlijk</p>
                    </div>

                    <div className="process-steps">
                        {recruitmentProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                className="step"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="step-number">{index + 1}</div>
                                <div style={{ color: '#C5081D', marginBottom: '10px' }}>{step.icon}</div>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VacancyDetail;
