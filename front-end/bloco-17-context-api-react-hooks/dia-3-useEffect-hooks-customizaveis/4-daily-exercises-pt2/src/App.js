import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  const [time, randomNum, bingo] = useTimer();
  return (
    <div className="App">
      <div>{time}</div>
      <div>{`O número gerado foi: ${randomNum}`}</div>
      { bingo === true ? (<span>BINGO!</span>) : <span /> }
    </div>
  );
}

export default App;
