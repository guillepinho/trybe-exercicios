import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div>
        <img className="load" src="https://openclipart.org/image/2000px/311354" alt="Carregando..." />
      </div>);
  }
}

export default Loading