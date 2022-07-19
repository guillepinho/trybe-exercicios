import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render() {
        return (conteudos.map((content) => {
            const { conteudo, status, bloco } = content;
            return (<p className='Card'><span key={conteudo}>O conteúdo é: {conteudo}.</span><br />
            <span>Status: {status}.</span><br />
            <span>Bloco: {bloco}.</span></p>);
        }));
    }
}

export default Content;