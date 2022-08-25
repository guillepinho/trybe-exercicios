import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { func, insText } = this.props;
    return (
      <button type="button" onClick={ func }>{ insText }</button>
    );
  }
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
  insText: PropTypes.string.isRequired,
};

export default Button;
