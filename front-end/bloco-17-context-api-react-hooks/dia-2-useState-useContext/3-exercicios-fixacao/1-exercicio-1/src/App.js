import './App.css';
import Answers from './components/Answers';
import Form from './components/Form';
import Provider from './utils/Provider';

function App() {
  return (
    <Provider>
      <Form />
      <Answers />
    </Provider>
  );
}

export default App;
