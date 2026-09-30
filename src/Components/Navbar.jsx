import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Estudio' },
    { to: '/projects', label: 'Proyectos' },
    { to: '/tarjetas-virtuales', label: 'Tarjetas Virtuales' },
    { to: '/desarrollo-web', label: 'Desarrollo Web' },
    { to: '/visual-concepts', label: 'Concepto Visual' },
    { to: '/tarjeta-digital', label: 'Tarjeta Digital' },
    { to: '/contact', label: 'Contacto' },
  ];

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="JD Studio Web"
            className="navbar-logo"
          />

          <div className="navbar-brand-text">
            <span>JD</span>
            <small>STUDIO WEB</small>
          </div>
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="navbar-menu">

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

        {/* CTA DESKTOP */}
        <Link
          to="/contact"
          className="navbar-cta"
        >
          <span className="navbar-cta-icon">○</span>
          Hablemos
        </Link>

        {/* BOTÓN MOBILE */}
        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MENÚ MOBILE */}
      <div className={`navbar-mobile ${isOpen ? 'show' : ''}`}>

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={closeMenu}
            className={({ isActive }) =>
              `navbar-mobile-link ${isActive ? 'active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <Link
          to="/contact"
          onClick={closeMenu}
          className="navbar-mobile-cta"
        >
          Hablemos →
        </Link>

      </div>

    </header>
  );
}

export default Navbar;