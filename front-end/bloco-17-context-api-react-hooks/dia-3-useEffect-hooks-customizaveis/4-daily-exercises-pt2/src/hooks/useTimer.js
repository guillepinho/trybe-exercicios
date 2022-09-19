import { useState, useEffect } from 'react'

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [randomNum, setRandomNum] = useState(0);
  const [bingo, setBingo] = useState(false);

  useEffect(() => {
    if (time === 0 ) {
      setBingo(randomNum % 3 === 0);
    }

    if(time >= 4) {
      setBingo(false);
    };

    if(time > 10) {
      const random = Math.floor(Math.random() * 101);
      setTime(0);
      setRandomNum(random);
    };

    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 101);
    setRandomNum(random);
  }, []);

  return [time, randomNum, bingo, setTime];
}

export default useTimer;