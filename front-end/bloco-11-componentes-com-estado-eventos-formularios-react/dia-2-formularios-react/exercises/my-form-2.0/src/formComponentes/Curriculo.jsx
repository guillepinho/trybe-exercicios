import React, { Component } from 'react'

export class Curriculo extends Component {
  render() {
    const { value, func } = this.props;
    let error = '';
    if (value.length >= 1000) {
      error = 'Resuma o currículo, está bastante longo!';
    }
    return (
      <label className="label" htmlFor="curriculo">
        Resumo Curricular *
        <div className="control">
          <textarea name="curriculo" id="curriculo" cols="50" rows="15" placeholder="Digite um resumo de seu currículo" maxLength={1000} value={value} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Curriculo;