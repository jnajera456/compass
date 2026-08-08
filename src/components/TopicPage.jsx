import React from 'react';
import '../styling-sheets/TopicPage.css';

function scrollToSection(id) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
}

function TopicPage({ title, intro, topics, sources }) {
  return (
    <div>
      <div className="headerContainer">
        <h1 className="mainTitle">{title}</h1>
        <div className="buttonsContainer">
          {topics.map(topic => (
            <button
              key={topic.id}
              type="button"
              className="button"
              onClick={() => scrollToSection(topic.id)}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      <div className="body">
        {intro ? <p className="pageIntro">{intro}</p> : null}
        {topics.map(topic => (
          <div key={topic.id} id={topic.id}>
            <h2 className="sectionTitle">{topic.label}</h2>
            <div className="infoContainer">
              <h3 className="subsectionTitle">Symptoms</h3>
              <p className="infoParagraph">{topic.symptoms}</p>

              <h3 className="subsectionTitle">Causes</h3>
              <p className="infoParagraph">{topic.causes}</p>

              <h3 className="subsectionTitle">Strategies</h3>
              <p className="infoParagraph">{topic.strategies}</p>

              <h3 className="subsectionTitle">Actionable Advice</h3>
              <ol className="adviceList">
                {topic.advice.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}

        <div className="sources">
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
        </div>
      </div>
    </div>
  );
}

export default TopicPage;
