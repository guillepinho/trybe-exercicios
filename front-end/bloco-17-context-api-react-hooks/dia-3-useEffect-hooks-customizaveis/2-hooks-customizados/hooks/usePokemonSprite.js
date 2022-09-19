import { useState, useEffect } from 'react'

const usePokemonSprite = () => {
  const [pokemonUrl, setPokemonUrl] = useState('');
  const [pokemonImg, setPokemonImg] = useState('');
  useEffect(() => {
    const getPokemonImg = async () => {
      const data = await fetch(pokemonUrl);
      const { sprites } = await data.json();
      const { front_default: sprite } = sprites;
      setPokemonImg(sprite);
    }

    if(pokemonUrl) {
      getPokemonImg();
    }
  }, []);

  return [pokemonImg, setPokemonUrl];
}

export default usePokemonSprite;