import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    const { ship } = this.props.match.params;
    const { name } = this.props;
    return (
      <h1>Meu perfil: { name }, o bucaneiro do navio { ship }</h1>
    )
  }
};

export default Profile;