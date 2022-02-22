import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss'
const Navbar = () => {
  return (
    <div className="sum">
      <div className="logo">
        Bedrijf
      </div>
      <nav className="item">
        <ul className='ul'>
          <li>
            <Link to='/'>Rome</Link>
          </li>
          <li>
            <Link to='/astral'>Astral</Link>
          </li>
          <li>
            <Link to='/limbo'>Limbo</Link>
          </li>
          <li>
            <Link to='/project'>Project 42</Link>
          </li>
          <li>
            <Link to='/satellite'>Satellite</Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
