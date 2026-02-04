import React from 'react';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-navy">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a href="#home" className="footer-logo">
                            <img
                                src="https://www.kletec.nl/site/images/logo-transparent.png"
                                alt="Kletec Logo"
                            />
                        </a>
                        <p className="footer-tagline">
                            Dé expert in automatisering van eierverwerking.
                            Wereldwijd actief in meer dan 35 landen.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/74634073" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/kletecnl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCvcx2PwIcMLmmlLvkPgGyjg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Navigatie</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#vacatures">Vacatures</a></li>
                            <li><a href="#over-kletec">Over Kletec</a></li>
                            <li><a href="#waarom-wij">Waarom wij</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://www.kletec.nl" target="_blank" rel="noopener noreferrer">kletec.nl <ArrowRight size={14} /></a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-contact">
                            <li>Energieweg 23</li>
                            <li>3771 NA Barneveld</li>
                            <li><a href="tel:+31342703703">+31 (0)342 703 703</a></li>
                            <li><a href="mailto:werkenbij@kletec.nl">werkenbij@kletec.nl</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Kletec | <a href="#privacy">Privacyverklaring</a> | <a href="https://www.kletec.nl">Naar kletec.nl</a></p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
