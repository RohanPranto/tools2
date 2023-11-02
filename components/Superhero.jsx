import React, { useState } from "react";
import superheroes from "superheroes";
import supervillains from "supervillains";
import "../src/Superhero.css";
function Superhero() {
  const [randomName, setRandomName] = useState("");
  const [randomVillainName, setRandomVillainName] = useState("");

  const generateHeroName = () => {
    const name = superheroes.random();
    setRandomName(name);
  };

  const generateVillainName = () => {
    const villainName = supervillains.random();
    setRandomVillainName(villainName);
  };

  const clear = () => {
    setRandomName("");
  };
  const clearv = () => {
    setRandomVillainName("");
  };
  return (
    <div style={{padding:20}} className="randomName">
      <p className="nameClass">Generate Random Superhero Name</p>

      <p className="nameClass nc2">{randomName}</p>
      <button style={{marginRight:10}} onClick={generateHeroName}>Generate</button>
      <button onClick={clear}>Clear</button>
      <p style={{ marginBottom: 70 }}></p>

      <p className="nameClass">Generate Random Supervillain Name</p>
      <p className="nameClass nc2">{randomVillainName}</p>
      <button style={{marginRight:10}} onClick={generateVillainName}>Generate</button>

      <button onClick={clearv}>Clear</button>
    </div>
  );
}

export default Superhero;
