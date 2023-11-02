import React from 'react';
import { Link } from 'react-router-dom';
import '../src/Sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <Link className='links' to="/" activeClassName="active" exact>
        Home
      </Link>
      <Link className='links' to="/weather" activeClassName="active">
        Weather
      </Link>
      <Link className='links' to="/calculator" activeClassName="active">
        Calculator
      </Link>
      <Link className='links' to="/superhero" activeClassName="active">
        Superhero
      </Link>
      <Link className='links' to="/bmi" activeClassName="active">
        BMI
      </Link>
      <Link className='links' to="/age" activeClassName="active">
        Age
      </Link>
      <Link className='links' to="/dictionary" activeClassName="active">
      Dictionary
      </Link>
    </div>
  );
}

export default Sidebar;
