import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleNumberClick(number) {
    setValue(value + number);
  }

  function handleOperatorClick(op) {
    if (firstValue !== null && value !== null) {
      let result;
      if (operator === '+') {
        result = parseFloat(firstValue) + parseFloat(value);
      } else if (operator === '-') {
        result = parseFloat(firstValue) - parseFloat(value);
      } else if (operator === '*') {
        result = parseFloat(firstValue) * parseFloat(value);
      } else if (operator === '/') {
        result = parseFloat(firstValue) / parseFloat(value);
      } else {
        result = parseFloat(value);
      }
      setValue(result);
    }
    setOperator(op);
    setFirstValue(value);
    setValue('');
  }

  function handleEqualClick() {
    if (firstValue !== null && value !== null) {
      let result;
      if (operator === '+') {
        result = parseFloat(firstValue) + parseFloat(value);
      } else if (operator === '-') {
        result = parseFloat(firstValue) - parseFloat(value);
      } else if (operator === '*') {
        result = parseFloat(firstValue) * parseFloat(value);
      } else if (operator === '/') {
        result = parseFloat(firstValue) / parseFloat(value);
      } else {
        result = parseFloat(value);
      }
      setValue(result);
      setFirstValue(null);
      setOperator(null);
    }
  }

  return (
    <div className="calculator">
      <div className="display">{value}</div>
      <div className="numbers">
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => setValue('')}>C</button>
      </div>
      <div className="operators">
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>x</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
}

export default App;
