import React, { Component } from 'react'

export class Email extends Component {
  render() {
    const { value, func } = this.props;
    let error = '';
    if (!value.match(/^\S+@\S+$/i) && value.length > 0) {
      error = 'E-mail inválido!';
    }
    return (
      <label className="label" htmlFor="email">
        E-mail *
        <div className="control">
          <input type="text" name="email" id="email" placeholder="Digite seu e-mail aqui" maxLength={50} value={value} onChange={func} />
        </div>
        <span style={{color: "red", fontWeight: "100"}}>{error}</span>
      </label>
    )
  }
}

export default Email;