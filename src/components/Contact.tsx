import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        vacancy: 'Open sollicitatie',
        message: '',
        agree: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formState);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as any;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormState(prev => ({ ...prev, [name]: val }));
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Direct solliciteren?</h3>
                        <h2>Kom met ons in contact</h2>
                        <p className="contact-description">
                            Geïnteresseerd in een van onze functies? Neem direct contact met ons op
                            of stuur je CV. We nemen binnen 2 werkdagen contact met je op.
                        </p>

                        <div className="contact-methods">
                            <div className="method">
                                <div className="method-icon"><Mail size={20} /></div>
                                <div className="method-details">
                                    <span>E-mail</span>
                                    <a href="mailto:werkenbij@kletec.nl">werkenbij@kletec.nl</a>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><MessageSquare size={20} /></div>
                                <div className="method-details">
                                    <span>WhatsApp</span>
                                    <a href="https://wa.me/31613688156">06 13 68 81 56</a>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><Phone size={20} /></div>
                                <div className="method-details">
                                    <span>Telefoon</span>
                                    <a href="tel:+31342703703">+31 (0)342 703 703</a>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><MapPin size={20} /></div>
                                <div className="method-details">
                                    <span>Adres</span>
                                    <p>Energieweg 23, 3771 NA Barneveld</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Bedankt voor je sollicitatie!</h3>
                                <p>We hebben je gegevens ontvangen en nemen zo snel mogelijk contact met je op.</p>
                            </div>
                        ) : (
                            <form className="sollicitatie-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Naam *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Jouw volledige naam"
                                        value={formState.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">E-mailadres *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="naam@voorbeeld.nl"
                                            value={formState.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefoonnummer</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="06 12345678"
                                            value={formState.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="vacancy">Interesse in vacature</label>
                                    <select
                                        id="vacancy"
                                        name="vacancy"
                                        value={formState.vacancy}
                                        onChange={handleInputChange}
                                    >
                                        <option>Paneelbouwer</option>
                                        <option>Junior Inkoper</option>
                                        <option>Machinebouwer</option>
                                        <option>Mechanical Engineer</option>
                                        <option>Open sollicitatie</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Upload CV (Optioneel)</label>
                                    <div className="file-upload">
                                        <input type="file" id="cv" className="file-input" />
                                        <label htmlFor="cv" className="file-label">
                                            <Upload size={18} /> Kies bestand of sleep hierheen
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Motivatie (Optioneel)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Vertel ons kort waarom je bij Kletec wilt werken..."
                                        value={formState.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="form-group checkbox-group">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        name="agree"
                                        required
                                        checked={formState.agree}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="agree">Ik ga akkoord met de <a href="#privacy">privacyverklaring</a></label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Verstuur sollicitatie <Send size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
