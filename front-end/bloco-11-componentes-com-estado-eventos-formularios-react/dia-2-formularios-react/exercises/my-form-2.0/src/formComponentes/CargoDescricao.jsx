import React, { Component } from 'react'

export class CargoDescricao extends Component {
  render() {
    const { value, func } = this.props;
    const placer = "Digite um breve resumo das suas atividades no último cargo";
    let error = '';
    if (value.length >= 500) {
      error = 'Resuma melhor suas atividades no último cargo!';
    }
    return (
      <label className="label" htmlFor="cargoDescricao">
        Descrição do Último Cargo *
        <div className="control">
          <textarea name="cargoDescricao" id="cargoDescricao" cols="50" rows="10" placeholder={placer} maxLength={500} value={value} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default CargoDescricao;