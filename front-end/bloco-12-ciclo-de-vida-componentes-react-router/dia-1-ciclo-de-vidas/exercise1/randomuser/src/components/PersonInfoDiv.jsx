import React, { Component } from 'react';

export class PersonInfoDiv extends Component {
  render() {
    const { person: {name, email, age, image, gender} } = this.props;
    return (
      <div>
        <img src={ image } alt={ name } />
        <p>{name}, {age} yo</p>
        <p>{gender}</p>
        <p>{email}</p>
      </div>
    )
  }
};

export default PersonInfoDiv;