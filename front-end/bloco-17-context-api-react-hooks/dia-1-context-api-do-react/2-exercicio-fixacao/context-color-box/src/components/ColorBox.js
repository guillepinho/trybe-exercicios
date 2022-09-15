import React from 'react';
import '../styles/box.css';
import MyContext from '../MyContext';

class ColorBox extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <button
            type="button"
            className="box"
            style={{ backgroundColor: `${value.colors[value.actual]}` }}
            onClick={ value.changeColor }
          >
            Click me to change my color!
          </button>
        )}
      </MyContext.Consumer>
    )
  }
}

export default ColorBox;