import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Home extends Component {
  render() {
    return (
      <div className="content-hero">Home</div>
    )
  };
}

export default connect(null, null)(Home);