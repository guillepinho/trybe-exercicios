import React, { useState, useEffect } from 'react';
import usePokemonSprite from './hooks/usePokemonSprite';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  const [pokemonImg, setPokemonUrl] = usePokemonSprite();

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
      <img src={pokemonImg} alt='poke' />
      <ul>
        {pokemonList.map(({ name, url }) => (
          <li
            key={name}
            onClick={() => setPokemonUrl(url)}
          >
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}