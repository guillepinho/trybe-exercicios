import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const activities = ['acordar', 'tomar café', 'trabalhar', 'almoçar', 'estudar', 'estudar futebol', 'jantar', 'relaxar'];

const activitiesMap = activities.map((act) => Task(act));

function App() {
  return (
    <div className="App">{activitiesMap}</div>
  );
}

export default App;
