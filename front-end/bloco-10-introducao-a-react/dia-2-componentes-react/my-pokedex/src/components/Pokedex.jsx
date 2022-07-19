import React, { Component } from 'react';
import data from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
    render() {
        const pokeList = data.map(({ id, name, type, averageWeight, image }) => {
            return (<Pokemon id={id} name={name} type={type} averageWeight={averageWeight} image={image} />)
        });
        return pokeList;
    }
}

export default Pokedex;