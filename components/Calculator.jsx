import React, { useState, useEffect, useRef } from 'react';
import '../src/Calculator.css';

function Calculator() {
  // State to keep track of the current input and result
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  // Ref to track whether the event listener for keydown is attached
  const keydownListenerAttached = useRef(false);

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      // Calculate the result when the "=" button is clicked
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setInput(calculatedResult.toString()); // Set the input to the calculated result for future calculations
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'clear') {
      // Clear the input and result when the "C" button is clicked
      setInput('');
      setResult(0);
    } else {
      // Append the clicked button's value to the input
      setInput((prevInput) => prevInput + value);
    }
  };

  // Function to handle key presses
  const handleKeyPress = (event) => {
    const keyValue = event.key;
    console.log('Key Pressed:', keyValue); // Log the pressed key for debugging
    const allowedCharacters = /^[0-9+\-*/.=\r\n\b]$/; // Allow digits, operators, "=", enter, and backspace keys
    if (allowedCharacters.test(keyValue)) {
      if (keydownListenerAttached.current && (keyValue === 'Enter' || keyValue === '=')) {
        event.preventDefault(); // Prevent form submission
        handleButtonClick('=');
      } else if (keyValue === 'Backspace' || keyValue === '\b') {
        // Handle backspace key
        setInput((prevInput) => prevInput.slice(0, -1));
      } else {
        handleButtonClick(keyValue);
      }
    }
  };

  // Effect to add event listener for keydown when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    keydownListenerAttached.current = true; // Mark the event listener as attached

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      keydownListenerAttached.current = false; // Mark the event listener as detached
    };
  }, []);

  return (
    <div className="randomName" style={{backgroundColor:"inherit", boxShadow:"none"}}>
      <div className="calculator">
        <div className="screen">{input || result}</div>
        <div className="buttons">
          <div className="numbers">
            <button onClick={() => handleButtonClick(9)} data-val={9}>
              9
            </button>
            <button onClick={() => handleButtonClick(8)} data-val={8}>
              8
            </button>
            <button onClick={() => handleButtonClick(7)} data-val={7}>
              7
            </button>
            <button onClick={() => handleButtonClick(6)} data-val={6}>
              6
            </button>
            <button onClick={() => handleButtonClick(5)} data-val={5}>
              5
            </button>
            <button onClick={() => handleButtonClick(4)} data-val={4}>
              4
            </button>
            <button onClick={() => handleButtonClick(3)} data-val={3}>
              3
            </button>
            <button onClick={() => handleButtonClick(2)} data-val={2}>
              2
            </button>
            <button onClick={() => handleButtonClick(1)} data-val={1}>
              1
            </button>
            <button onClick={() => handleButtonClick('clear')} data-val="clear">
              C
            </button>
            <button onClick={() => handleButtonClick('.')} data-val="." disabled={input.includes('.')}>
              .
            </button>
            <button onClick={() => handleButtonClick(0)} data-val={0}>
              0
            </button>
          </div>
          <div className="operators">
            <button onClick={() => handleButtonClick('/')} data-val="÷">
              ÷
            </button>
            <button onClick={() => handleButtonClick('*')} data-val="x">
              x
            </button>
            <button onClick={() => handleButtonClick('-')} data-val="-">
              -
            </button>
            <button onClick={() => handleButtonClick('+')} data-val="+">
              +
            </button>
            <button onClick={() => handleButtonClick('=')} data-val="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
