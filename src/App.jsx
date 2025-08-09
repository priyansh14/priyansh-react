import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={
            <>
              <Navbar />
              <main className="main-content">
                <HomePage />
              </main>
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <main className="main-content">
                <ContactPage />
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
