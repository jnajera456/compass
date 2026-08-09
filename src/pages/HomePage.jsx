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
    <svg
      className="heroCompass"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Compass rose"
    >
      <circle
        cx="160"
        cy="160"
        r="150"
        fill="#ffffff"
        stroke="#8fbfa2"
        strokeWidth="2"
      />
      <circle
        cx="160"
        cy="160"
        r="120"
        fill="none"
        stroke="#e6dfcf"
        strokeWidth="1.5"
      />
      <g stroke="#2f5a46" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <line x1="160" y1="20" x2="160" y2="40" />
        <line x1="160" y1="280" x2="160" y2="300" />
        <line x1="20" y1="160" x2="40" y2="160" />
        <line x1="280" y1="160" x2="300" y2="160" />
      </g>
      <polygon points="160,55 142,160 178,160" fill="#2f5a46" />
      <polygon points="160,265 142,160 178,160" fill="#cf8a45" />
      <circle
        cx="160"
        cy="160"
        r="10"
        fill="#ffffff"
        stroke="#2f5a46"
        strokeWidth="2"
      />
      <g
        fill="#22282a"
        fontFamily="Fraunces, serif"
        fontSize="22"
        textAnchor="middle"
      >
        <text x="160" y="88">
          N
        </text>
        <text x="236" y="168">
          E
        </text>
        <text x="160" y="250">
          S
        </text>
        <text x="84" y="168">
          W
        </text>
      </g>
    </svg>
  );
}

function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="heroInner container">
          <div className="heroText">
            <p className="eyebrow">College well-being, made navigable</p>
            <h1 className="heroTitle">Find your way through college life.</h1>
            <p className="heroLede">
              College can pull you in a lot of directions at once. Compass
              points you toward clear, practical help for what weighs on
              students most, so you can steady yourself and keep moving forward.
            </p>
            <div className="heroActions">
              <a href="#directions" className="btnPrimary">
                Explore the four directions
              </a>
              <Link to="/resources" className="btnGhost">
                Need help now?
              </Link>
            </div>
          </div>
          <div className="heroArt">
            <HeroCompass />
          </div>
        </div>
      </section>

      <section className="directions container" id="directions">
        <div className="directionsHead">
          <p className="eyebrow">Four directions</p>
          <h2 className="directionsTitle">
            Wherever you are stuck, start here.
          </h2>
        </div>
        <div className="cardGrid">
          {categories.map(cat => (
            <Link key={cat.to} to={cat.to} className="dirCard">
              <span className="dirBadge" aria-hidden="true">
                {cat.dir}
              </span>
              <span className="dirName">{cat.name}</span>
              <span className="dirDesc">{cat.desc}</span>
              <span className="dirGo" aria-hidden="true">
                Explore
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
        </div>
      </section>

      <section className="supportBand">
        <div className="supportInner container">
          <div>
            <h2 className="supportTitle">
              You do not have to navigate the hard days alone.
            </h2>
            <p className="supportText">
              If you are in crisis or just need to talk to someone now, free and
              confidential help is available any time.
            </p>
          </div>
          <Link to="/resources" className="btnPrimary">
            See support resources
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
