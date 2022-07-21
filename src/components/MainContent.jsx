import React from 'react';
import AboutContainer from './AboutContainer';
import TecnologiesContainer from './TecnologiesContainer';
import '../styles/components/maincontent.sass';

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TecnologiesContainer />
        </main>
    );
};

export default MainContent;
