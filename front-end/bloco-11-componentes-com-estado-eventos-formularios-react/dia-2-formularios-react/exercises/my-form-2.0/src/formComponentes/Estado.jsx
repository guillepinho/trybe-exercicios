import React, { Component } from 'react'
import lista from './data/listaEstados';

export class Estado extends Component {
  render() {
    const { value, func } = this.props;
    const listaEstados = lista.map((estado, index) => (<option key={index} name={estado.nome}>{estado.sigla}</option>));
    return (
      <label className="label" htmlFor="estado">
        Estado *
        <div className="control">
          <div className="select">
            <select name="estado" id="estado" value={value} onChange={func}>
              {listaEstados}
            </select>
          </div>
        </div>
      </label>
    )
  }
}

export default Estado;



