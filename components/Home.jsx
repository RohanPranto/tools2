import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mt-1">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">Perform calculations.</p>
              <Link to="/calculator" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Age Calculator</h5>
              <p className="card-text">Find out your age in seconds.</p>
              <Link to="/age" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">BMI Calculator</h5>
              <p className="card-text">Calculate your Body Mass Index.</p>
              <Link to="/bmi" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dictionary</h5>
              <p className="card-text">FInd definitions & meanings.</p>
              <Link to="/dictionary" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Weather Check</h5>
              <p className="card-text">Get the latest weather updates.</p>
              <Link to="/weather" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Superhero Name Generator</h5>
              <p className="card-text">Discover your superhero name.</p>
              <Link to="/superhero" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>
        {/* Add more feature cards here */}
      </div>
    </div>
  );
}
