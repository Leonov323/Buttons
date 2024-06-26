import React from 'react';
import logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <header>
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
        <h2>
          short<span>rays</span>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">HOME</Link>
          </li>
          <li>
            <Link to="/admin-profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/admin-contacts">CONTACTS</Link>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
