import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
