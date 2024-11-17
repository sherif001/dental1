import React from "react";
import "../styles/Home.css";
import smileImage from '../images/smile.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <main className="hero-section">
        <div className="hero-info">
          <h1>Your smile comes first</h1>
          <div className="info">
            <div className="practice-hours">
              <h2>Practice Hours</h2>
              <p>Monday–Tuesday: 09:00–21:00</p>
              <p>Friday: 09:00–19:00</p>
              <p>Saturday: 11:00–16:00</p>
            </div>
            <div className="current-day">
              <p>Today is Monday</p>
              <p>3:21 pm</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={smileImage}
            alt="Your smile"
            className="hero-photo"
          />
        </div>
      </main>

      <div className="cards">
        <div className="card">
          <h3>Discount 5%</h3>
          <p>For therapeutic treatment when registering via the website</p>
        </div>
        <div className="card">
          <h3>Free consultation</h3>
          <p>For all types of dental services</p>
        </div>
        <div className="card">
          <h3>Installments 0%</h3>
          <p>We will examine, make a treatment plan, and name the exact cost.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
