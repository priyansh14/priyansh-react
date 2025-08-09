import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

// Wrapper component to handle navigation
function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  // Check if user is authenticated on app load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
    // Navigate to landing page after logout
    navigate('/')
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={
          <>
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="main-content">
              <HomePage />
            </main>
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="main-content">
              <ContactPage />
            </main>
          </>
        } />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
