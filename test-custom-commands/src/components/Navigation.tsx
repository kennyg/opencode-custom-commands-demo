import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">My React App</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}