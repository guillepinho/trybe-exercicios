import React from 'react';

class About extends React.Component {
    render() {
        const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Jest', 'TDD'];
        const jsxSkills = skills.map((skill) => <li>{skill}</li>);
        return (<div><h1>Guilherme Pinho</h1><p>Estudante de Desenvolvimento WEB, 30 anos</p><h2>Minhas Habilidades</h2><ul>{jsxSkills}</ul></div>);
    }
}

export default About;