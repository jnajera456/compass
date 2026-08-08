import React from 'react';
import '../styling-sheets/Resources.css';

function Resources() {
  return (
    <div className="resources">
      <h1 className="resourcesTitle">Resources</h1>
      <p className="resourcesIntro">
        If you are in crisis or just need to talk to someone now, help is
        available 24 hours a day. These lines are free and confidential.
      </p>

      <div className="resourceCard">
        <h2 className="resourceName">988 Suicide and Crisis Lifeline</h2>
        <p className="resourceText">
          Call or text 988 to reach trained counselors any time, day or night.
        </p>
        <div className="resourceActions">
          <a className="resourceButton" href="tel:988">
            Call 988
          </a>
          <a className="resourceButton" href="sms:988">
            Text 988
          </a>
          <a
            className="resourceLink"
            href="https://988lifeline.org/"
            target="_blank"
            rel="noreferrer"
          >
            Visit 988lifeline.org
          </a>
        </div>
      </div>

      <div className="resourceCard">
        <h2 className="resourceName">Crisis Text Line</h2>
        <p className="resourceText">
          Text HOME to 741741 to connect with a trained crisis counselor.
        </p>
        <div className="resourceActions">
          <a className="resourceButton" href="sms:741741">
            Text 741741
          </a>
          <a
            className="resourceLink"
            href="https://www.crisistextline.org/"
            target="_blank"
            rel="noreferrer"
          >
            Visit crisistextline.org
          </a>
        </div>
      </div>

      <div className="resourceCard">
        <h2 className="resourceName">Your campus counseling center</h2>
        <p className="resourceText">
          Most colleges offer free, confidential counseling for students. Look
          up your school&apos;s counseling or student health services to make an
          appointment.
        </p>
      </div>

      <p className="resourcesNote">
        If you or someone else is in immediate danger, call 911. Compass is a
        student resource and a starting point. It is not a substitute for
        professional help.
      </p>
    </div>
  );
}

export default Resources;
