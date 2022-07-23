import React, { Component } from 'react'

export class Cpf extends Component {
  render() {
    const { value, func } = this.props;
    let error = '';
    const cpf = value.replace(/[^0-9.]/g, '');
    if (value.length < 11 && value.length > 0) {
      error = 'CPF inválido!';
    }
    return (
      <label className="label" htmlFor="CPF">
        CPF *
        <div className="control">
          <input type="text" name="CPF" id="CPF" placeholder="Digite seu CPF aqui" maxLength={11} value={cpf} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Cpf;