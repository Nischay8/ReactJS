import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



export default function App() {

  const [step, setstep] = useState(1);

  function handelPrevious() {
    if (step > 1) {
      setstep(step - 1);
    }

  }

  function handelNext() {
    if (step < 3) {
      setstep(step + 1);

    }
  }


  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">Step {step}:{messages[step - 1]}</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: "fff" }} onClick={handelPrevious}>Previous</button>
        <button style={{ backgroundColor: '#7950f2', color: "fff" }} onClick={handelNext}>Next</button>
      </div>

    </div>

  )
}