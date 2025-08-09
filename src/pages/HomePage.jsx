import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="fade-in">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to SimpleApp</h1>
          <p>
            A beautiful and modern React application that showcases clean design 
            and smooth user experience. Built with simplicity and elegance in mind.
          </p>
          <Link to="/contact" className="cta-button">
            Get In Touch
          </Link>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast & Modern</h3>
            <p>Built with the latest React technology for optimal performance and user experience.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Clean, modern interface with smooth animations and responsive design for all devices.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized for speed with minimal loading times and seamless navigation.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
