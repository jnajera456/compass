import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const location = useLocation();
  const previousLocation = useRef({
    pathname: location.pathname,
    hash: location.hash,
  });

  useEffect(() => {
    const pathnameChanged =
      previousLocation.current.pathname !== location.pathname;
    const hashChanged = previousLocation.current.hash !== location.hash;

    if (!pathnameChanged && !hashChanged) {
      return undefined;
    }

    previousLocation.current = {
      pathname: location.pathname,
      hash: location.hash,
    };

    const hashTarget = location.hash
      ? document.getElementById(location.hash.slice(1))
      : null;
    if (hashTarget?.matches('.topicDisclosure')) {
      return undefined;
    }

    if (!pathnameChanged) {
      return undefined;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const focusFrame = window.requestAnimationFrame(() => {
      document.querySelector('#main h1')?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [location.pathname, location.hash]);

  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
