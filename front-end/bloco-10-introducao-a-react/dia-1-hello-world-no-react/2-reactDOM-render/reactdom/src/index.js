import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const classeApp = 'App';

function tick() {
  const element = (
    <div className={classeApp}>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
