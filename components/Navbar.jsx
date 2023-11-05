import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "../src/Navbar.css"; // Import custom Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tools</Link> {/* Use Link instead of anchor tag */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Use Link instead of anchor tag */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">Weather</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/superhero">Superhero</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bmi">BMI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/age">Age</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dictionary">Dictionary</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
