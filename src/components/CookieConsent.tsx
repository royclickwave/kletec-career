import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('kletec-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('kletec-cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="container cookie-container">
                <p>
                    Wij gebruiken cookies om uw ervaring op onze website te verbeteren.
                    Door verder te gaan gaat u akkoord met ons <a href="#privacy">cookiebeleid</a>.
                </p>
                <button className="btn btn-primary btn-sm" onClick={handleAccept}>
                    Akkoord
                </button>
            </div>

        </div>
    );
};

export default CookieConsent;
