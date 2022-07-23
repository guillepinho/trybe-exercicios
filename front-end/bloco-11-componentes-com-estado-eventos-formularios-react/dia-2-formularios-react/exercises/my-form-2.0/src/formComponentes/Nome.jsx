import React, { Component } from 'react'

export class Nome extends Component {
  render() {
    const { value, func } = this.props;
    let error = '';
    if (value.length >= 40) {
      error = 'Nome bastante longo, hein!';
    }
    return (
      <label className="label" htmlFor="nome">
        Nome *
        <div className="control">
          <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui" maxLength={40} value={value.toUpperCase()} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Nome;