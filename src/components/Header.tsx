import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Vacatures', href: '/#vacatures' },
        { name: 'Over Kletec', href: '/#over-kletec' },
        { name: 'Waarom wij', href: '/#waarom-wij' },
        { name: 'Contact', href: '#contact' },
    ];

    const isHome = location.pathname === '/';

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img
                        src="https://www.kletec.nl/site/images/kletec.png"
                        alt="Kletec Logo"
                    />
                </Link>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.href.startsWith('#') || (isHome && link.href.startsWith('/#')) ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://www.kletec.nl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-external"
                            >
                                kletec.nl →
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <Link to="/#vacatures" className="btn btn-primary btn-sm hide-mobile">
                        Bekijk vacatures
                    </Link>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
