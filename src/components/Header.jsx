import React from 'react';
import '../styling-sheets/Header.css';

const randomVar = 'pablo';

function Header() {
  return (
    <header>
      {
        <div>
          <a>Home</a>
          <a>About</a>
          <a>Resources</a>
          <a>Testimonials</a>
          <a>How It Works</a>
        </div>
        /* Content of the header will go here */
      }
    </header>
  );
}
