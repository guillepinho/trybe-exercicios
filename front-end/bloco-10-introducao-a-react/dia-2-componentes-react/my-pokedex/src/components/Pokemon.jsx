import React, { Component } from 'react';
import Image from './Image';

class Pokemon extends Component {
    render () {
        const { id, name, type, averageWeight, image } = this.props;
        return (<div className='eachPoke' key={id}>
        <div>
            <span className='title'>{name}</span> <br />
            <span className={type}>{type}</span> <br />
            <span>Average Weigth: {averageWeight.value.toLocaleString('pt-BR')} {averageWeight.measurementUnit}</span>
        </div>
        <div>
            <Image imag={image} alternativeText={name}/>
        </div>
    </div>)
    }
}

export default Pokemon;