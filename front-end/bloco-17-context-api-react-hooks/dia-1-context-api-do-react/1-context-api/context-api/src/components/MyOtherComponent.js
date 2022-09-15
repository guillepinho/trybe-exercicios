import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <div>
          { `Fala pessoal, toma ${value}` }
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default MyOtherComponent;