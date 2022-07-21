import React from 'react';
import './App.css';

class AppFixate extends React.Component {
    constructor() {
        super();
        this.handleBut1 = this.handleBut1.bind(this);
        this.handleBut2 = this.handleBut2.bind(this);
        this.handleBut3 = this.handleBut3.bind(this);

        this.state = {
          clicksBtn1: 0,
          clicksBtn2: 0,
          clicksBtn3: 0,
        };
    }

    handleBut1() {
        this.setState((estadoAnterior, _props) => ({
            clicksBtn1: estadoAnterior.clicksBtn1 + 1,
        }))
    }
    handleBut2() {
        this.setState((estadoAnterior, _props) => ({
            clicksBtn2: estadoAnterior.clicksBtn2 + 1,
        }))
    }
    handleBut3() {
        this.setState((estadoAnterior, _props) => ({
            clicksBtn3: estadoAnterior.clicksBtn3 + 1,
        }))
    }

    butColor(num) {
        return num % 2 === 0? 'lightgreen' : 'white';
    }

    render() {
        const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
        return (
        <div>
        <button onClick={ this.handleBut1 } style={{backgroundColor: this.butColor(clicksBtn1)}}>Botão 1 - {this.state.clicksBtn1}</button>
        <button onClick={ this.handleBut2 } style={{backgroundColor: this.butColor(clicksBtn2)}}>Botão 2 - {this.state.clicksBtn2}</button>
        <button onClick={ this.handleBut3 } style={{backgroundColor: this.butColor(clicksBtn3)}}>Botão 3 - {this.state.clicksBtn3}</button>
      </div>
    )}
}

export default AppFixate;