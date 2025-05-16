import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#132c52] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[90px]">

        {/* Logo y nombre */}
        <div className="flex items-center space-x-2">
          <img 
               src={logo} 
               alt="Logo" 
               className= "h-[80px] w-auto object-contain"
          />

          <div className="flex flex-col justify-center leading-none font-poppins">
              <span className="text-[#0d9488] font-bold text-2xl sm:text-3xl text-center">JD</span>
              <span className="text-[#f1f0ec] font-medium text-xs sm:text-sm">STUDIO WEB</span>
          </div>
        </div>

        {/* Botón hamburguesa */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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

        {/* Menú en pantallas grandes */}
        <div className="hidden sm:flex space-x-6 text-white">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >
            Sobre Mi
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >        
            Contacto
          </NavLink>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div
          className={`sm:hidden px-4 pb-4 flex flex-col space-y-2 text-white transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >
               Sobre Mi
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#0d9488] font-semibold'
                : 'hover:text-[#0d9488]'
            }
          >   
            Contacto
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
