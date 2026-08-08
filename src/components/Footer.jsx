import React from 'react';
import { Link } from 'react-router-dom';
import '../styling-sheets/Footer.css';

function Footer() {
  return (
    <footer className="siteFooter">
      <p className="siteFooterText">
        Compass is a student resource, not a substitute for professional help.
        If you are in crisis, call or text <a href="tel:988">988</a>, or see the{' '}
        <Link to="/resources">Resources</Link> page.
      </p>
    </footer>
  );
}

export default Footer;
