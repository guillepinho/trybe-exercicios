import React, { useState, useEffect } from 'react';
import AppBestPokemon from './AppBestPokemon.jsx';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [visible, setVisible] = useState(false);

  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  //didMount + didUpdate + shouldUpdate
  useEffect(() => {
    const getPokemons = async () => {
      const { results } = await fetch(endpoint);
      const data = await results.json();
      setPokemonList(data);
    };
    getPokemons();
  }, [limit]);

  // ^ Se colocarmos uma array vazia, será executado em qualquer mudança de estado, ao colocarmos uma variável, estamos dizendo passando um 'shouldUpdate'


  return (
    <main>
      <h1>Pokémon List</h1>
      <button
        type='button'
        onClick={ () => setLimit((prev) => prev + 10) }
      >
        + Pokémons
      </button>
      <button
        type='button'
        onClick={ () => setVisible(!visible) }
      >
        Mostrar o melhor
      </button>
      { visible ?? <AppBestPokemon />}
      <ul>
        {pokemonList.map(({ name }) => <li key={name}>
          {name}
        </li>)}
      </ul>
    </main>
  );
}