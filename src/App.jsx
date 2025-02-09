import { useState } from 'react'
import './App.css'

function App() {
  const [number,setNum]=useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function increase(){
    setNum(number+5)
  }

  function decrease(){
    var num=number-5
    if (num<0){
      num=0
    }
    setNum(num)
  }
  
  function start() {
    if (!isRunning) {
      setIsRunning(true);
      const intervalId = setInterval(function() {
        setNum(function(prevNum) {
          if (prevNum <= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          }
          return prevNum - 1;
        });
      }, 1000);
    }
  }

  function stop(){
    setIsRunning(false);
  }

  return(
  <div>
    <h1>{number}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={start}>start</button>
    <button onClick={stop}>stop</button>
  </div>
  )
}

export default App
