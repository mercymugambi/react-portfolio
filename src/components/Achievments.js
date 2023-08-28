import React from 'react';

function Achievements() {
  return (
    <div className="achievement-container">
      <h2 className="achievement-heading">Achievement</h2>
      <div className="achievement-content">
        <img
          src="/images/hackathon.jpg"
          alt="Hackathon Achievement"
          className="achievement-image"
        />
        <p className="achievement-description">
          I attended a hackathon in a team of 5 and emerged as the top
        </p>
      </div>
    </div>
  );
}

export default Achievements;
