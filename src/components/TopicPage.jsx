import React from 'react';
import '../styling-sheets/TopicPage.css';

function scrollToSection(id) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}

function TopicPage({ title, intro, topics, sources }) {
  return (
    <div className="guide">
      <header className="guideHeader">
        <div className="container">
          <p className="eyebrow">Compass guide</p>
          <h1 className="guideTitle">{title}</h1>
          {intro ? <p className="guideIntro">{intro}</p> : null}
          <nav className="topicNav" aria-label="Topics on this page">
            {topics.map(topic => (
              <button
                key={topic.id}
                type="button"
                className="topicChip"
                onClick={() => scrollToSection(topic.id)}
              >
                {topic.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="container guideBody">
        {topics.map(topic => (
          <article key={topic.id} id={topic.id} className="topicBlock">
            <h2 className="topicTitle">{topic.label}</h2>
            <div className="topicGrid">
              <section className="part">
                <p className="partLabel">Symptoms</p>
                <p className="partText">{topic.symptoms}</p>
              </section>
              <section className="part">
                <p className="partLabel">Causes</p>
                <p className="partText">{topic.causes}</p>
              </section>
              <section className="part">
                <p className="partLabel">Strategies</p>
                <p className="partText">{topic.strategies}</p>
              </section>
              <section className="part partWide">
                <p className="partLabel">Actionable advice</p>
                <ol className="adviceList">
                  {topic.advice.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            </div>
          </article>
        ))}

        <aside className="sources">
          <h2 className="sourcesTitle">Sources</h2>
          <p className="sourcesNote">
            The guidance on this page draws on general recommendations from
            these organizations. For personal support, reach out to your campus
            counseling center or a licensed professional.
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
      </div>
    </div>
  );
}

export default TopicPage;
