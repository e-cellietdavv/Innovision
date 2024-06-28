import React from 'react';
import './Cards.css';

const Card = ({ stage, title, description }) => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <h2>{stage}</h2>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">{stage}</small>
              <h3>{title}</h3>
              <div className="description">
                <div className="title">
                  <p className="title">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;