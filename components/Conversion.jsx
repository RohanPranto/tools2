import React, { useState } from "react";

const Conversion = () => {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [centimeters, setCentimeters] = useState(0);

  const handleFeetChange = (e) => {
    const feetValue = parseInt(e.target.value, 10);
    setFeet(feetValue);
    convertToCentimeters(feetValue, inches);
  };

  const handleInchesChange = (e) => {
    const inchesValue = parseInt(e.target.value, 10);
    setInches(inchesValue);
    convertToCentimeters(feet, inchesValue);
  };

  const convertToCentimeters = (feet, inches) => {
    const totalInches = feet * 12 + inches;
    const centimetersValue = totalInches * 2.54;
    setCentimeters(centimetersValue.toFixed(2));
  };

  return (
    <div style={{ margin: 20 }}>
      <h2>Conversion: Feet to Centimeters</h2>

      <div style={{ paddingBottom: 20 }}>
        <label>Feet:</label>
        <input type="number" value={feet} onChange={handleFeetChange} />
      </div>
      <div style={{ paddingBottom: 20 }}>
        <label>Inches:</label>
        <input type="number" value={inches} onChange={handleInchesChange} />
      </div>
      <div>
        <label>Centimeters:</label>
        <span>{centimeters}</span>
      </div>
    </div>
  );
};

export default Conversion;
