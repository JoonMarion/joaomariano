import React from 'react';

import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiSass, DiBootstrap, DiDjango, DiPython } from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJavascript1 /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'python', name: 'Python', icon: <DiPython /> },
    { id: 'django', name: 'Django', icon: <DiDjango /> },
    { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap /> },
    { id: 'sass', name: 'Sass', icon: <DiSass /> },
];

const TecnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="card" id={tech.id} key={tech.key}>
                        <div className="icon">{tech.icon}</div>
                        <div className="info">
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TecnologiesContainer;
