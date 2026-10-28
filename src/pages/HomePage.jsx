import React from 'react';
import '../styling-sheets/HomePage.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    dir: 'N',
    name: 'Academic Stress',
    desc: 'Procrastination, time, focus, and the pressure to perform.',
    to: '/academic-stress',
  },
  {
    dir: 'E',
    name: 'Emotional Well-being',
    desc: 'Anxiety, low mood, overwhelm, and finding steadier ground.',
    to: '/emotional-wellbeing',
  },
  {
    dir: 'S',
    name: 'Social Challenges',
    desc: 'Friendships, roommates, boundaries, and belonging.',
    to: '/social-challenges',
  },
  {
    dir: 'W',
    name: 'Life Balance',
    desc: 'Sleep, money, health, and the rhythm that holds it together.',
    to: '/life-balance',
  },
];

function HeroCompass() {
  return (
    <img
      className="heroCompass"
      src={`${process.env.PUBLIC_URL}/compass-mark.svg`}
      alt="Compass logo combining a profile and navigation needle"
    />
  );
}

function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="heroInner container">
          <div className="heroText">
            <h1 className="heroTitle" tabIndex="-1">
              Find your way through college life.
            </h1>
            <p className="heroLede">
              College can pull you in a lot of directions at once. Compass
              points you toward clear, practical help for what weighs on
              students most, so you can steady yourself and keep moving forward.
            </p>
            <div className="heroActions">
              <a href="#directions" className="primaryAction">
                Explore the four directions
              </a>
            </div>
          </div>
          <div className="heroArt">
            <HeroCompass />
          </div>
        </div>
      </section>

      <section className="directions container" id="directions" tabIndex="-1">
        <div className="directionsHead">
          <h2 className="directionsTitle">
            Wherever you are stuck, start here.
          </h2>
        </div>
        <nav className="directionIndex" aria-label="Compass guides">
          {categories.map(cat => (
            <Link key={cat.to} to={cat.to} className="directionRow">
              <span className="directionCode" aria-hidden="true">
                {cat.dir}
              </span>
              <span className="directionCopy">
                <span className="directionName">{cat.name}</span>
                <span className="directionDesc">{cat.desc}</span>
              </span>
              <span className="directionArrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
}

export default HomePage;
