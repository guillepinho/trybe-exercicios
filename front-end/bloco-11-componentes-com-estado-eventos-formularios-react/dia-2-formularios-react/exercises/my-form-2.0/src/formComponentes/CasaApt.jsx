import React, { Component } from 'react'

export class CasaApt extends Component {
  render() {
    const { func } = this.props;
    return (
      <label className="label" htmlFor="casaApt">
        Tipo de Residência *
        <div className="control">
            <label className="radio">
              <input type="radio" name="casaApt" className="casaApt" value="casa" onChange={func} />
              Casa
            </label>
            <label className="radio">
              <input type="radio" name="casaApt" className="casaApt" value="apt" onChange={func} />
              Apartamento
            </label>
        </div>
      </label>
    )
  }
}

export default CasaApt;