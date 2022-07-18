import './App.css';

const classe = 'class-name'

function helloWorld (nome, sobrenome) {
  return <h1 className={classe}>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

function App() {
  return (container);
}

export default App;
