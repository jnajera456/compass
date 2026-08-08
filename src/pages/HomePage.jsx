import React from 'react';
import '../styling-sheets/HomePage.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';

function HomePage() {
  return (
    <div>
      <div className="AppHeader">
        <div className="leftHeaderContainer">
          <h1 className="leftTitle">Find your way through college life.</h1>
          <p className="mainParagraph">
            College can pull you in a lot of directions at once. Compass points
            you toward clear, practical help for what weighs on students most,
            so you can steady yourself and keep moving forward.
          </p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/compass.svg`}
          className="logoContainer"
          alt="Compass logo"
        />
      </div>
      <div className="pageNavigatorsContainer">
        <Link to="/academic-stress" className={cx('pageNavigator', 'shadow')}>
          Academic Stress
        </Link>
        <Link
          to="/emotional-wellbeing"
          className={cx('pageNavigator', 'shadow')}
        >
          Emotional Well-being
        </Link>
        <Link to="/social-challenges" className={cx('pageNavigator', 'shadow')}>
          Social Challenges
        </Link>
        <Link to="/life-balance" className={cx('pageNavigator', 'shadow')}>
          Life Balance
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
