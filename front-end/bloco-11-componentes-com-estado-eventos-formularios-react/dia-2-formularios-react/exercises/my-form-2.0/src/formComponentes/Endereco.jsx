import React, { Component } from 'react'

export class Endereco extends Component {
  render() {
    const { value, func } = this.props;
    const address = value.replace(/[^\w ]/g, '');
    let error = '';
    if (value.length >= 200) {
      error = 'Endereço bastante longo, hein!';
    }
    return (
      <label className="label" htmlFor="endereco">
        Endereço *
        <div className="control">
          <input type="text" name="endereco" id="endereco" placeholder="Digite seu Endereço aqui" maxLength={200} value={address} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Endereco;