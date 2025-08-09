import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ isAuthenticated, onLogout }) => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">SimpleApp</div>
          <ul className="nav-links">
            <li>
              <Link 
                to="/home" 
                className={location.pathname === '/home' ? 'active' : ''}
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
            {isAuthenticated && (
              <li>
                <button 
                  onClick={onLogout}
                  className="logout-btn"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
