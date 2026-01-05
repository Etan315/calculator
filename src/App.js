import "./App.css";
import { useState } from "react"; 
import { getRandomNums } from "./js/numRandomizer";
import { solveExpression } from "./js/solveExpression";

function App() {
  const [numbers] = useState(() => getRandomNums());
  const [display, setDisplay] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleNumDisplay = (val) =>{
    setDisplay(display + val);
  }

  const calculateResult = () => {
    const result = solveExpression(display);
    setDisplay(result)
  }

  const clearDisplay = () => {
    setDisplay("")
  }

  const deleteOne = () => {
    const result = display.slice(0, -1);
    setDisplay(result);
  }

  return (
    <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
      <button 
          className="theme-toggle" 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        
      <div className="calculator-container">
        <input type="text" className="display-text" value={display} />
        <div className="btn-container">
          <button className="btn-clear" onClick={clearDisplay}>CE</button>
          <button className="btn-del" onClick={deleteOne}>DEL</button>
          <button className="empty"></button>
          <button className="operation"  onClick={() => handleNumDisplay("+")}>&#43;</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[0])}>{numbers[0]}</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[1])}>{numbers[1]}</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[2])}>{numbers[2]}</button>
          <button className="operation"  onClick={() => handleNumDisplay("-")}>&#45;</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[3])}>{numbers[3]}</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[4])}>{numbers[4]}</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[5])}>{numbers[5]}</button>
          <button className="operation"  onClick={() => handleNumDisplay("×")}>&times;</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[6])}>{numbers[6]}</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[7])}>{numbers[7]}</button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[8])}>{numbers[8]}</button>
          <button className="operation"  onClick={() => handleNumDisplay("÷")}>&divide;</button>
          <button className="empty"></button>
          <button className="num-slot" onClick={() => handleNumDisplay(numbers[9])}>{numbers[9]}</button>
          <button className="dot" onClick={() => handleNumDisplay(".")}>.</button>
          <button className="equal" onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
