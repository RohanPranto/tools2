import React, { useState } from "react";
function Age() {
  const [birthDate, setBirthDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [age, setAge] = useState(null);
  const clear = () => {
    setBirthDate({
      year: "",
      month: "",
      day: "",
    });
    setAge(null);
  };
  const calculateAge = () => {
    const today = new Date();
    const birthYear = parseInt(birthDate.year);
    const birthMonth = parseInt(birthDate.month) - 1; // Months are zero-indexed in JavaScript
    const birthDay = parseInt(birthDate.day);
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    let yearDiff = currentYear - birthYear;
    let monthDiff = currentMonth - birthMonth;
    let dayDiff = currentDay - birthDay;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearDiff--;
      monthDiff += 12;
    }

    if (dayDiff < 0) {
      monthDiff--;
      const tempDate = new Date(today);
      tempDate.setMonth(birthMonth + monthDiff + 1, 0);
      dayDiff = tempDate.getDate() + dayDiff;
    }

    setAge({
      years: yearDiff,
      months: monthDiff,
      days: dayDiff,
    });
  };

  return (
    <div className="bmiDiv" style={{ gap: 10 }}>
      <h2 className="bmi_title" style={{ marginBottom: 0 }}>
        Age Calculator
      </h2>
      <input
        className="bmi_input"
        type="number"
        placeholder="Year of birth"
        value={birthDate.year}
        onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
      />
      <input
        className="bmi_input"
        type="number"
        placeholder="Month of birth"
        value={birthDate.month}
        onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value })}
      />
      <input
        className="bmi_input"
        type="number"
        placeholder="Day of birth"
        value={birthDate.day}
        onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
      />
      <button onClick={calculateAge}>Calculate age</button>
      <button onClick={clear}>Reset</button>
      {age && (
        <h2>
          Your age is {age.years} years {age.months} months {age.days} days
        </h2>
      )}
    </div>
  );
}

export default Age;
