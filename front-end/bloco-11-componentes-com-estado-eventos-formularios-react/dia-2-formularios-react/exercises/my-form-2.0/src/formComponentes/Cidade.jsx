import React, { Component } from 'react'

export class Cidade extends Component {
  render() {
    const { value, func, func2 } = this.props;
    let error = '';
    if (value.length >= 28) {
      error = 'Nem a maior cidade do Brasil tem tantas letras...';
    }
    return (
      <label className="label" htmlFor="cidade">
        Cidade *
        <div className="control">
          <input type="text" name="cidade" id="cidade" placeholder="Digite seu Endereço aqui" maxLength={28} value={value} onChange={func} onBlur={func2} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Cidade;