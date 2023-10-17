import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setCounter] = useState(15);
  const addValue = () =>{
    if(counter<20)
    counter=counter+1;
    setCounter(counter);
  }
  const removeValue=() =>{
    if(counter>0)
    counter=counter-1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Our Counter {counter}</h1>
    <button onClick={addValue}>Increase Counter {counter}</button>
    <br/>
    <button onClick={removeValue}>Decrease Counter {counter}</button>
    </>
  );
}

export default App;
