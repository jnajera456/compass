import React from 'react';
import '../styling-sheets/HomePage.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import logo from '../pickle-logo.png';

function HomePage() {
  return (
    <div>
      <div className="AppHeader">
        <div className="leftHeaderContainer">
          <h1 className="leftTitle">Got Yourself In A Pickle?</h1>
          <p className="mainParagraph">
            You don't have to "dill" with it alone! Find solutions to whatever’s
            weighing you down and reclaim your peace of mind! Explore tools
            designed to help you navigate college life with ease.
          </p>
        </div>
        <img src={logo} className="logoContainer" alt="logo" />
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
