import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Sidebar from "../components/Sidebar";
import Weather from "../components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from "../components/Calculator";
import Superhero from "../components/Superhero";
import Bmi from "../components/Bmi";
import Age from "../components/Age";
import Conversion from "../components/Conversion";
import Dictionary from "../components/Dictionary";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
function App() {
  // State to track whether the screen size is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Function to check the screen size and set isMobile accordingly
  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 767); // Adjust the screen width breakpoint as needed
  };

  useEffect(() => {
    // Initially, check the screen size when the component mounts
    checkScreenWidth();

    // Add a resize event listener to check the screen size when it changes
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        {isMobile ? (
          <>
            <Navbar /> {/* Render Navbar at the top for mobile */}
          </>
        ) : (
          <>
            <Sidebar /> {/* Render Sidebar at the top for desktop */}
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/superhero" element={<Superhero />} />
          <Route path="/conversion" element={<Conversion />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/age" element={<Age />} />                       
          <Route path="/dictionary" element={<Dictionary />} />                  
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
