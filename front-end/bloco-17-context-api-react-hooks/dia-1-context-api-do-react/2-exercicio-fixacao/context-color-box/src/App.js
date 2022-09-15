import './App.css';
import ColorBox from './components/ColorBox';
import React from 'react';

import MyContext from './MyContext';

class App extends React.Component {
  state = {
    colors: ['blue', 'red', 'yellow'],
    actual: 0,
  }

  changeColor = () => {
    const { actual } = this.state;
    if (actual === 2) {
      this.setState({
        actual: 0,
      });
      return;
    }
    this.setState((prevState) => ({
      actual: prevState.actual + 1,
    }));
  }

  render() {
    const object = {
      colors: this.state.colors,
      actual: this.state.actual,
      changeColor: this.changeColor,
    }
    return (
      <MyContext.Provider value={ object }>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}

export default App;
