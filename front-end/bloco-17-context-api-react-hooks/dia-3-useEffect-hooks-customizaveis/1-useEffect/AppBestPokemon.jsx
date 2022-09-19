import React, { useEffect } from 'react';

function AppBestPokemon() {
  //willUnmount
  useEffect(() => {

    return () => {
      console.log('desmontou');
    }
  }, []);

  return (
    <img
      src=""
      alt="squirtle"
      width={250}
    />
  );
}

export default AppBestPokemon;