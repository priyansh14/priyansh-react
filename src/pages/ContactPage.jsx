import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="fade-in">
      <div className="container">
        <div className="contact-section">
          <h1>Contact Us</h1>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
              />
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p>hello@simpleapp.com</p>
            </div>
            
            <div className="info-card">
              <div className="icon">📱</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className="info-card">
              <div className="icon">📍</div>
              <h3>Location</h3>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
