import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {
        name: 'linkedin',
        icon: <FaLinkedinIn />,
        URL: 'https://www.linkedin.com/in/joaomariano52/',
    },
    {
        name: 'github',
        icon: <FaGithub />,
        URL: 'https://github.com/JoonMarion',
    },
    {
        name: 'instagram',
        icon: <FaInstagram />,
        URL: 'https://www.instagram.com/jerj.tsx/',
    },
];

function SocialNetworks() {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.URL} className="social-btn" id={network.name} key={network.name} target="_blank">
                    {network.icon}
                </a>
            ))}
        </section>
    );
}

export default SocialNetworks;
