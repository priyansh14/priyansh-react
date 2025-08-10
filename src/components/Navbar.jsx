import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

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
                to="/home" 
                className={location.pathname === '/home' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li >
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact Us
              </Link>
            </li>
           
          </ul>
          <Profile className="profile"/>
          <LogoutButton className="auth0-login-btn"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
