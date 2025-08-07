import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  const baseLink =
    'text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200';
  const activeClass = 'bg-[#64ffda] text-[#0a192f]';

  return (
    <nav className="bg-[#112240]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Site title */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-lg font-bold text-[#64ffda] hover:text-[#64ffda]"
              onClick={() => setOpen(false)}
            >
              Tech Talk with Diana
            </NavLink>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : 'hover:bg-[#112240] hover:text-[#64ffda]'}`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : 'hover:bg-[#112240] hover:text-[#64ffda]'}`
                }
              >
                Articles
              </NavLink>
              <NavLink
                to="/videos"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : 'hover:bg-[#112240] hover:text-[#64ffda]'}`
                }
              >
                Videos
              </NavLink>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-[#0a192f] hover:text-[#64ffda] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#64ffda]"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              {!open ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu items */}
      {open && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} block ${isActive ? activeClass : 'hover:bg-[#112240] hover:text-[#64ffda]'}`
              }
              onClick={() => setOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `${baseLink} block ${isActive ? activeClass : 'hover:bg-[#112240] hover:text-[#64ffda]'}`
              }
              onClick={() => setOpen(false)}
            >
              Articles
            </NavLink>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                `${baseLink} block ${isActive ? activeClass : 'hover:bg-[#112240] hover:text-[#64ffda]'}`
              }
              onClick={() => setOpen(false)}
            >
              Videos
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
