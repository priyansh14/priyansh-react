import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../components/LoginButton'

const LandingPage = () => {
  return (
    <div className="landing-container fade-in">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">SimpleApp</span>
          </h1>
          <p className="hero-subtitle">
            Experience the future of modern web applications. 
            Built with cutting-edge technology and beautiful design.
          </p>
          <div className="hero-buttons">
           <LoginButton className="login-btn"/>
            <a href="#features" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-icon">🚀</div>
            <h3>Fast & Modern</h3>
            <p>Built with React 18 & Vite</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="landing-features">
        <div className="container">
          <h2 className="section-title">Why Choose SimpleApp?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance with minimal loading times and instant navigation.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern UI with glassmorphism effects, smooth animations, and responsive design.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Built with security best practices and reliable authentication system.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Mobile First</h3>
              <p>Perfect experience across all devices - desktop, tablet, and mobile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of users who trust SimpleApp for their daily needs.</p>
            <Link to="/home" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>SimpleApp</h3>
              <p>Modern web applications made simple.</p>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SimpleApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
