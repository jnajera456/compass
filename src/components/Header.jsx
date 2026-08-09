import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styling-sheets/Header.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/academic-stress', label: 'Academic Stress' },
  { to: '/emotional-wellbeing', label: 'Emotional Well-being' },
  { to: '/social-challenges', label: 'Social Challenges' },
  { to: '/life-balance', label: 'Life Balance' },
  { to: '/resources', label: 'Resources' },
];

function BrandMark() {
  return (
    <svg className="brandMark" viewBox="0 0 40 40" aria-hidden="true">
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <polygon points="20,7 15,20 25,20" fill="currentColor" />
      <polygon points="20,33 15,20 25,20" fill="#cf8a45" />
      <circle cx="20" cy="20" r="2.4" fill="#f6f3ec" />
    </svg>
  );
}

function Header() {
  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link to="/" className="siteBrand" aria-label="Compass home">
          <BrandMark />
          <span className="brandWord">Compass</span>
        </Link>
        <nav className="siteNav" aria-label="Primary">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
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
