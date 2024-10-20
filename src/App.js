import './App.css';
import Result from './components/Result';
import { useState } from 'react';
const num = Math.floor(Math.random() * 10) + 1;

function App() {
  const [term,setTerm] = useState("");

  function handleChange(e){
    setTerm(e.target.value);
  }
  return (
    <div className="App">
      <div className = "container">
        <div className = "header">
          <label>Guess the number from 1 to 10</label>
        </div>
        <input id = "term" type = "text" name = "term" onChange={handleChange}/>
        <Result term = {term} num = {num}/>
      </div>
    </div>
  )
}

export default App;