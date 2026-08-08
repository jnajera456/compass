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

function Header() {
  return (
    <header className="siteHeader">
      <Link to="/" className="siteBrand">
        Compass
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
    </header>
  );
}

export default Header;
