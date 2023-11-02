import React, { useState } from "react";
import ReactDOM from "react-dom";
import Conversion from "../components/Conversion";
import "../src/Bmi.css";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [result, setResult] = useState("");
  const clear = () => {
    setWeight("");
    setHeight("");
    setBMI("");
    setResult("");
  };
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.6) {
      setResult(`Underweight : ${bmiValue}`);
    } else if (bmiValue >= 18.6 && bmiValue < 24.9) {
      setResult(`Normal : ${bmiValue}`);
    } else {
      setResult(`Overweight : ${bmiValue}`);
    }
  };

  const openConversionPopup = () => {
    const newWindow = window.open("", "_blank", "width=400,height=300");
    const conversionElement = <Conversion />;
    ReactDOM.render(conversionElement, newWindow.document);
    newWindow.title = "Conversion";
  };

  return (
    <div className="bmiDiv">
      <h2 className="bmi_title">BMI Calculator</h2>
      <input
        className="bmi_input"
        placeholder="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />

      <input
        className="bmi_input"
        placeholder="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <h6
        className="conv"
        style={{ cursor: "pointer", fontSize: 14 }}
        onClick={openConversionPopup}
      >
        Click here for unit conversion
      </h6>

      <button
        style={{ marginBottom: 15, marginTop: 10 }}
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>
      <button onClick={clear}>Reset</button>

      <p style={{ fontSize: 28 }}>{result}</p>
    </div>
  );
}

export default Bmi;
