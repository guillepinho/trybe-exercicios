import React, { useState, useEffect } from 'react';

function App() {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const [pokemonList, setPokemonList] = useState([]);

  //didMount
  useEffect(() => {
    const getPokemons = async () => {
      const { results } = await fetch(endpoint);
      const data = await results.json();
      setPokemonList(data);
    };
    getPokemons();
  }, []);

  return (
    <main>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonList.map(({ name }) => <li key={name}>
          {name}
        </li>) }
      </ul>
    </main>
  );
}