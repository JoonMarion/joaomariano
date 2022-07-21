import React from 'react';
import Avatar from '../img/joao.jpeg';
import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="João Mariano" />
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a
                href="https://drive.google.com/file/d/13u3YmM9c9q2hfLO0RhCqbYjT_9Dl2Td_/view"
                className="btn"
                target="_blank"
            >
                Download Currículo
            </a>
        </aside>
    );
};

export default Sidebar;
