import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Videos from './pages/Videos'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white" style={{ backgroundColor: '#0a192f' }}>
      {/* Navigation bar shown on all pages */}
      <Navbar />

      {/* Main content area with responsive padding */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </main>

      {/* Simple footer */}
      <footer className="text-center py-4" style={{ backgroundColor: '#112240' }}>
        <p className="text-sm">&copy; {new Date().getFullYear()} Tech Talk with Diana</p>
      </footer>
    </div>
  )
}

export default App
