// TODO:
// Prevent operator repetition "++" or "--"
// Handle "="
// Implement "AC" (clear)
// Handle "%", "+/-"
import { useState } from 'react'
import CButton from './components/C-Button'
import XButton from './components/X-Button'
import Screen from './components/Screen'
import { evaluate } from "mathjs";


function App() {
    const [display, setDisplay] = useState('0')
    const handleClick = (value) => {
        const operators = ["+", "-", "*", "/", "%"];
        
        setDisplay((prev) => {
        const lastChar = prev.slice(-1);
        if(prev === '0' && value !== '.') {
            return value;
        }
        if (operators.includes(value) && prev === "") {
          return prev;
        }


      if (operators.includes(value) && operators.includes(lastChar)) {
        return prev.slice(0, -1) + value;
      }

        return prev + value;
        });
  };
  return (
    <>
      <main id="container">
          <div id="first-row">
            <Screen value={display}/>
          </div>
          <div id="second-row" className="row">
            <CButton text="AC" onClick={handleClick} />
            <CButton text="+/-" onClick={handleClick}/>
            <CButton text="%" onClick={handleClick}/>
            <XButton text="/" onClick={handleClick}/>
          </div>
          <div id="third-row" className="row">
            <CButton text="7" onClick={handleClick}/>
            <CButton text="8" onClick={handleClick}/>
            <CButton text="9" onClick={handleClick}/>
            <XButton text="*" onClick={handleClick}/>
          </div>

          <div id="fourth-row" className="row">
            <CButton text="4" onClick={handleClick}/>
            <CButton text="5" onClick={handleClick}/>
            <CButton text="6" onClick={handleClick}/>
            <XButton text="-" onClick={handleClick}/>
          </div>
            
          <div id="fifth-row" className="row">
              <CButton text="1" onClick={handleClick}/>
              <CButton text="2" onClick={handleClick}/>
              <CButton text="3" onClick={handleClick}/>
              <XButton text="+" onClick={handleClick}/>
            </div>

          <div id="last-row" className="row">
            <CButton text="0" onClick={handleClick}/>
            <CButton text="." onClick={handleClick}/>
            <XButton text="=" onClick={handleClick}/>
          </div>
      </main>
    </>
  )
}

export default App
