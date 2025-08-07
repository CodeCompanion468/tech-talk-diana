import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  return (
    <nav className="bg-[#0a192f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-[#64ffda] font-bold text-xl">
              Tech Talk
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-300 hover:text-[#64ffda]">
              Home
            </Link>
            <Link to="/articles" className="text-gray-300 hover:text-[#64ffda]">
              Articles
            </Link>
            <Link to="/videos" className="text-gray-300 hover:text-[#64ffda]">
              Videos
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-1">
          <Link to="/" className="block text-gray-300 hover:text-[#64ffda]">
            Home
          </Link>
          <Link to="/articles" className="block text-gray-300 hover:text-[#64ffda]">
            Articles
          </Link>
          <Link to="/videos" className="block text-gray-300 hover:text-[#64ffda]">
            Videos
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
