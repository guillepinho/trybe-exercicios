import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Image extends Component {
  render() {
    const { imgLink, altTxt, className } = this.props;
    return (
      <img src={ imgLink } alt={ altTxt } className={ className } />
    );
  }
}

Image.propTypes = {
  imgLink: PropTypes.string.isRequired,
  altTxt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Image;
