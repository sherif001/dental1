import React from 'react';
import '../styles/InfoCards.css';

const InfoCards = () => {
  const cards = [
    { title: "Discount 5%", description: "For therapeutic treatment when registering via the website." },
    { title: "Free consultation", description: "For all types of dental services." },
    { title: "Installments 0%", description: "We will examine, make a treatment plan, and name the exact cost." },
  ];

  return (
    <div className="info-cards">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
