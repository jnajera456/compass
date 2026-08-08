import React from 'react';
import { Link } from 'react-router-dom';
import '../styling-sheets/ComingSoon.css';

function ComingSoon({ title }) {
  return (
    <div className="comingSoon">
      <h1 className="comingSoonTitle">{title}</h1>
      <p className="comingSoonText">
        This section is coming soon. We are putting together grounded, practical
        guidance for {title.toLowerCase()}. Check back shortly.
      </p>
      <Link to="/" className="comingSoonBack">
        Back to home
      </Link>
    </div>
  );
}

export default ComingSoon;
