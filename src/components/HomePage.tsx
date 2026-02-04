import React from 'react';
import Hero from './Hero';
import About from './About';
import Vacancies from './Vacancies';
import WhyKletec from './WhyKletec';
import Team from './Team';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Vacancies />
            <WhyKletec />
            <Team />
        </>
    );
};

export default HomePage;
