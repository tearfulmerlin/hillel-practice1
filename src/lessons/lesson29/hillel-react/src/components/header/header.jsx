import React from 'react'

export default function Header({ data, setCount }) {
  return (
    <header className="App-header">
      <ul className='nav-bar'>
        <li>Home</li>
        <li>Planets</li>
        <li>People</li>
        <li>Spaceships</li>
      </ul>
    </header>
  )
}
