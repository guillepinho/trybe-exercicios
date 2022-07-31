import React, { Component } from 'react';
import Loading from './Loading';
import PersonInfoDiv from './PersonInfoDiv';

export class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
    };

    this.renderUserElement = this.renderUserElement.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({
      loading: true,
    }, async () => {
      try {
        const newUser = await fetch('https://api.randomuser.me/');
        const userJson = await newUser.json();
        const userToAdd = await userJson.results[0];

        this.setState({
          loading: false,
          user: userToAdd,
        });
      }
      catch (error) {
        console.log(error.message);
        this.forceUpdate();
      }
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (!nextState.user.dob) return true;
    const AGE = 50;
    if (nextState.user.dob.age > AGE) return false;
    return true;
  }

  renderUserElement(user) {
    return ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.large,
      gender: user.gender,
    });
  }

  render() {
    const { loading, user } = this.state;
    if (loading) return (
      <div className="App">
        <React.StrictMode>
          <Loading />
        </React.StrictMode>
      </div>);
    return (
      <div className="App">
        <React.StrictMode>
          <PersonInfoDiv person={this.renderUserElement(user)} />
        </React.StrictMode>
      </div>);
  }
}

export default Profile;