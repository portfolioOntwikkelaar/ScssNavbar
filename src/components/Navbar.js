import React from 'react'
import { Link } from 'react-router-dom'
import Careers from './Careers'

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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/careers' >Astral</Link>
          </li>
          <li>
            <Link to='/limbo'>Limbo</Link>
          </li>
          <li>
            <Link to='/project'>Project42</Link>
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
