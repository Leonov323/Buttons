import React from 'react';
import logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <div className="logo container-fluid">
        <img className="logo" src={logo} alt="logo" />
        <h2>
          short<span>rays</span>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/contacts">CONTACTS</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
