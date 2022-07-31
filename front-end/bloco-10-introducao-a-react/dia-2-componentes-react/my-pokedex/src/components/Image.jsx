import React, { Component } from "react";

class Image extends Component {
    render() {
        const { imag, alternativeText } = this.props;
        return (
            <img src={imag} alt={alternativeText} />
        )
    }
}

export default Image;