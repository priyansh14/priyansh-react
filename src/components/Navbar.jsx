import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">SimpleApp</div>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
