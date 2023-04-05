import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pizza/4">Pizza List</NavLink>
    </header>
  )
}
