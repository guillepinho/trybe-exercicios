import React, { Component } from 'react'

export class Cargo extends Component {
  render() {
    const { value, func } = this.props;
    let error = '';
    if (value.length >= 40) {
      error = 'Resuma o currículo, está bastante longo!';
    }
    return (
      <label className="label" htmlFor="cargo">
        Último Cargo *
        <div className="control">
          <textarea name="cargo" id="cargo" cols="50" rows="1" placeholder="Qual foi seu último cargo?" maxLength={40} value={value} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Cargo;