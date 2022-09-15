import './App.css';
import MyComponent from './components/MyComponent';
import { GreatGrandfather } from './components/Apper'

function App() {
  return (
      <div className="App">
        <GreatGrandfather />
        <MyComponent />
      </div>
  );
}

export default App;
