import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

export default function Header({ data, setCount }) {
  return (
    <header className="App-header">
      <ul className='nav-bar'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/planets">Planets</NavLink></li>
        <li><NavLink to="people">People</NavLink></li>
        <li><NavLink to="ships">Spaceships</NavLink></li>
      </ul>
    </header>
  )
}
