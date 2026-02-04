import { Link } from 'react-router-dom';
import { Bolt, Package, Wrench, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { vacancies } from '../data/vacancies';

const Vacancies: React.FC = () => {
    const icons: Record<string, React.ReactNode> = {
        'paneelbouwer': <Bolt size={24} />,
        'junior-inkoper': <Package size={24} />,
        'machinebouwer': <Wrench size={24} />,
        'mechanical-engineer': <Settings size={24} />,
    };

    return (
        <section id="vacatures" className="section bg-gray vacancies">
            <div className="container">
                <div className="section-header text-center">
                    <h3>Vacatures</h3>
                    <h2>Onze openstaande vacatures</h2>
                    <p>{vacancies.length} posities beschikbaar</p>
                </div>

                <div className="vacancies-grid">
                    {vacancies.map((job, index) => (
                        <motion.div
                            key={job.id}
                            className="vacancy-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="vacancy-accent"></div>
                            <div className="vacancy-icon">{icons[job.id] || <Settings size={24} />}</div>
                            <div className="vacancy-tag">{job.tag}</div>
                            <h4 className="vacancy-title">{job.title}</h4>
                            <p className="vacancy-text">{job.shortDescription}</p>
                            <Link to={`/vacature/${job.id}`} className="vacancy-link">
                                Lees meer <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vacancies;
