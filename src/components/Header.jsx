import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styling-sheets/Header.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/academic-stress', label: 'Academic Stress' },
  { to: '/emotional-wellbeing', label: 'Emotional Well-being' },
  { to: '/social-challenges', label: 'Social Challenges' },
  { to: '/life-balance', label: 'Life Balance' },
];

function BrandMark() {
  return (
    <img
      className="brandMark"
      src={`${process.env.PUBLIC_URL}/compass.svg`}
      alt=""
    />
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  function focusCurrentPage() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.requestAnimationFrame(() => {
      document.querySelector('#main h1')?.focus({ preventScroll: true });
    });
  }

  function handleNavigation(to) {
    setIsMenuOpen(false);
    if (location.pathname === to) {
      focusCurrentPage();
    }
  }

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link
          to="/"
          className="siteBrand"
          aria-label="Compass home"
          onClick={() => handleNavigation('/')}
        >
          <BrandMark />
          <span className="brandWord">Compass</span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="menuButton"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(open => !open)}
        >
          <span>Menu</span>
          <span className="menuIcon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav
          id="primary-navigation"
          className="siteNav"
          data-open={isMenuOpen ? 'true' : 'false'}
          aria-label="Primary"
        >
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => handleNavigation(item.to)}
              className={({ isActive }) =>
                isActive ? 'navLink navLinkActive' : 'navLink'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
