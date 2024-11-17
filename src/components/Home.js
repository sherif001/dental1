import React from "react";
import "../styles/Home.css";
import smileImage from './images/smile.jpg';

const Home = () => {
    return (
      <div className="home-page">
        <main className="hero-section">
          <div className="hero-text">
            <h1>Your Smile First</h1>
            <p>We prioritize your smile with exceptional dental care. Book your appointment today and enjoy exclusive offers!</p>
          </div>
        </main>
  
        {/* البطاقات مع العروض */}
        <div className="cards">
          <div className="card">
            <h3>5% Discount</h3>
            <p>For therapeutic treatments when registering via our website.</p>
          </div>
          <div className="card">
            <h3>Free Consultation</h3>
            <p>For all types of dental services, book your free consultation today!</p>
          </div>
          <div className="card">
            <h3>0% Installments</h3>
            <p>We offer 0% installments for your treatments. Get the care you deserve.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;