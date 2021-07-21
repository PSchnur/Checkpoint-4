import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      {/* Mettre logo ou titre */}
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
