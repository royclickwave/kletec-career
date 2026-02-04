import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import VacancyDetail from './components/VacancyDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

import './index.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vacature/:id" element={<VacancyDetail />} />
          </Routes>
          <Contact />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App
