import { useState } from 'react';
import './App.css';

function App() {
  const [counter1, setCounter1] = useState(window.localStorage.getItem('counter1') || 200);
  const [counter2, setCounter2] = useState(window.localStorage.getItem('counter2') || 200);
  const [disable, setDisable] = useState(true);
 

  const handleClick = (isIncrement) => {
    let val = parseInt(counter1);
    if (isIncrement) {
      val -= 1;
    } else {
      val -= 5;
    }

    setCounter1(val);
    window.localStorage.setItem('counter1', val);

  }

  const handleReset = () => {
    let val = parseInt(counter1);
    val = 200
    setCounter1(200);
    window.localStorage.setItem('counter1', val);

  }

  const handleClick2 = (isIncrement) => {
    let val = parseInt(counter2);
    if (isIncrement) {
      val -= 1;
    } else {
      val -= 5;
    }

    setCounter2(val);
    window.localStorage.setItem('counter2', val);

  }

  const handleReset2 = () => {
    let val = parseInt(counter2);
    val = 200
    setCounter2(200);
    window.localStorage.setItem('counter2', val);

  }




  return (
    <div className='app-main'>
      
      <div className="App">
        <h1> Polina: {counter1}</h1>
        <div className='btn-container'>
          <button onClick={() => handleClick(false)}>-5</button>
          <button onClick={() => handleClick(true)}>-1</button>
        </div>
        <button  className='btn-reset' onClick={handleReset}>Reset to 200</button>
      </div>

      <div className="App">
        <h1>Michael: {counter2}</h1>
        <div className='btn-container'>
          <button onClick={() => handleClick2(false)}>-5</button>
          <button onClick={() => handleClick2(true)}>-1</button>
        </div>
        <button  className='btn-reset' onClick={handleReset2}>Reset to 200</button>
      </div>

    </div>
  );
}

export default App;
