import "./App.css";
import { useState } from "react"; 
import { getRandomNums } from "./js/num-randomizer";

function App() {
  const [numbers] = useState(() => getRandomNums());

  return (
    <div className="App">
      <div className="calculator-container">
        <input type="text" className="display-text" />
        <div className="btn-container">
          <button class="btn-clear">CE</button>
          <button className="empty"></button>
          <button className="empty"></button>
          <button className="operation">&#43;</button>
          <button className="num-slot">{numbers[0]}</button>
          <button className="num-slot">{numbers[1]}</button>
          <button className="num-slot">{numbers[2]}</button>
          <button className="operation">&#45;</button>
          <button className="num-slot">{numbers[3]}</button>
          <button className="num-slot">{numbers[4]}</button>
          <button className="num-slot">{numbers[5]}</button>
          <button className="operation">&times;</button>
          <button className="num-slot">{numbers[6]}</button>
          <button className="num-slot">{numbers[7]}</button>
          <button className="num-slot">{numbers[8]}</button>
          <button className="operation">&divide;</button>
          <button className="empty"></button>
          <button className="num-slot">{numbers[9]}</button>
          <button className="dot">.</button>
          <button className="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
