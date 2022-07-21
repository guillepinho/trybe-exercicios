import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick(event) {
  console.log(event.target.classList[0]);
}

class App extends React.Component {
  render() {
    const { classe } = this.props;
    /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
    return <button className={classe} onClick={handleClick}>Meu botão</button>
  }
}

export default App;
