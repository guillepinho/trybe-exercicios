import './App.css';
import Greeting from './Greetings';

const num = 2;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name='Guille' lastName={num} />
        </header>
    </div>
  );
}

export default App;
