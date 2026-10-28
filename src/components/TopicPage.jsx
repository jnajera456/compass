import React, { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import '../styling-sheets/TopicPage.css';

function SourcesSection({ sources }) {
  return (
    <aside className="sources">
      <h2 className="sourcesTitle">Sources</h2>
      <p className="sourcesNote">
        The guidance on this page draws on general recommendations from these
        organizations. For personal support, reach out to your campus counseling
        center or a licensed professional.
      </p>
      <ul className="sourcesList">
        {sources.map(source => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function TopicPage({ title, intro, topics, sources }) {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const detailsRefs = useRef(new Map());
  const initialTopicIdRef = useRef(
    topics.some(topic => topic.id === location.hash.slice(1))
      ? location.hash.slice(1)
      : topics[0]?.id
  );
  const initialHashRef = useRef(location.hash);
  const previousHash = useRef(location.hash);
  const isSyncingDetails = useRef(true);
  const suppressEmptyHashSync = useRef(false);
  const hasUserInteracted = useRef(false);

  const syncDetails = useCallback((topicId, { focus = true } = {}) => {
    const target = detailsRefs.current.get(topicId);
    if (!target) {
      return null;
    }

    isSyncingDetails.current = true;
    detailsRefs.current.forEach((details, id) => {
      details.open = id === topicId;
    });

    return window.requestAnimationFrame(() => {
      isSyncingDetails.current = false;
      if (!focus) {
        return;
      }

      target.querySelector('summary')?.focus({ preventScroll: true });
      const reduceMotion = window.matchMedia?.(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  }, []);

  useEffect(() => {
    const focusInitialHash = Boolean(initialHashRef.current);
    const focusFrame = syncDetails(initialTopicIdRef.current, {
      focus: focusInitialHash,
    });

    return () => {
      if (focusFrame !== null) {
        window.cancelAnimationFrame(focusFrame);
      }
    };
  }, [syncDetails]);

  useEffect(() => {
    if (previousHash.current === location.hash) {
      return undefined;
    }
    previousHash.current = location.hash;

    const topicId = location.hash.slice(1);
    if (!topicId) {
      if (suppressEmptyHashSync.current) {
        suppressEmptyHashSync.current = false;
        return undefined;
      }

      const focusFrame = syncDetails(topics[0]?.id, {
        focus: navigationType === 'POP',
      });
      return () => {
        if (focusFrame !== null) {
          window.cancelAnimationFrame(focusFrame);
        }
      };
    }

    if (!topics.some(topic => topic.id === topicId)) {
      return undefined;
    }

    const focusFrame = syncDetails(topicId);
    return () => {
      if (focusFrame !== null) {
        window.cancelAnimationFrame(focusFrame);
      }
    };
  }, [location.hash, navigationType, syncDetails, topics]);

  function handleToggle(topicId, event) {
    if (isSyncingDetails.current) {
      return;
    }

    if (!hasUserInteracted.current) {
      return;
    }

    const nextHash = `#${topicId}`;
    if (event.currentTarget.open) {
      isSyncingDetails.current = true;
      detailsRefs.current.forEach((details, id) => {
        if (id !== topicId) {
          details.open = false;
        }
      });
      window.requestAnimationFrame(() => {
        isSyncingDetails.current = false;
      });

      if (location.hash !== nextHash) {
        navigate(
          {
            pathname: location.pathname,
            search: location.search,
            hash: nextHash,
          },
          { replace: false }
        );
      }
      return;
    }

    if (location.hash === nextHash) {
      suppressEmptyHashSync.current = true;
      navigate(
        {
          pathname: location.pathname,
          search: location.search,
          hash: '',
        },
        { replace: true }
      );
    }
  }

  return (
    <div className="guide">
      <header className="guideHeader">
        <div className="container">
          <h1 className="guideTitle" tabIndex="-1">
            {title}
          </h1>
          {intro ? <p className="guideIntro">{intro}</p> : null}
        </div>
      </header>

      <div className="container guideDisclosureBody">
        <div className="topicDisclosureList">
          {topics.map((topic, index) => (
            <details
              key={topic.id}
              id={topic.id}
              ref={node => {
                if (node) {
                  detailsRefs.current.set(topic.id, node);
                } else {
                  detailsRefs.current.delete(topic.id);
                }
              }}
              className="topicDisclosure"
              onToggle={event => handleToggle(topic.id, event)}
            >
              <summary
                className="topicSummary"
                onClick={() => {
                  hasUserInteracted.current = true;
                }}
              >
                <h2 className="topicSummaryHeading">
                  <span className="topicNumber" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{topic.label}</span>
                  <svg
                    className="topicChevron"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </h2>
              </summary>

              <div className="topicDisclosureContent">
                <div className="topicEssentials">
                  <section className="part">
                    <h3 className="partLabel">Symptoms</h3>
                    <p className="partText">{topic.symptoms}</p>
                  </section>
                  <section className="part">
                    <h3 className="partLabel">Causes</h3>
                    <p className="partText">{topic.causes}</p>
                  </section>
                  <section className="part">
                    <h3 className="partLabel">Strategies</h3>
                    <p className="partText">{topic.strategies}</p>
                  </section>
                </div>

                <section className="adviceSection">
                  <h3 className="partLabel">Actionable advice</h3>
                  <ol className="adviceList">
                    {topic.advice.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </section>
              </div>
            </details>
          ))}
        </div>

        <SourcesSection sources={sources} />
      </div>
    </div>
  );
}

export default TopicPage;
