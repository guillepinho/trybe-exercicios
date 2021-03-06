import React from 'react';
import Album from './Album';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/7/77/Myloxyloto.jpg',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

// Vamos refatorar essa coisa feia e longa?    
// Retorno do que será renderizado
//     return (
//       <article>
//         <section>
//           <img src={ album01.image } alt={ album01.title } />
//           <h2>{ album01.title }</h2>
//           <p>Lançamento: { album01.releaseDate.year }</p>
//           <p>Gravadora: { album01.others.recordCompany }</p>
//           <p>Formatos: { album01.others.formats }</p>
//         </section>
//         <section>
//           <img src={ album02.image } alt={ album02.title } />
//           <h2>{ album02.title }</h2>
//           <p>Lançamento: { album02.releaseDate.year }</p>
//           <p>Gravadora: { album02.others.recordCompany }</p>
//           <p>Formatos: { album02.others.formats }</p>
//         </section>
//       </article>
//     );

const joao = {
  id: 102,
  name: "João",
  email: "joao@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
};

const amelia = {
  id: 77,
  name: "Amélia",
  email: "amelia@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
};

    return (<div>
      <Album album={ album01 } />
      <Album album={ album02 } />
      <UserProfile user={ joao } />
      <UserProfile user={ amelia } />
    </div>)
  }
}



export default App;