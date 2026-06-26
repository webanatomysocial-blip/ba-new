import React from "react";
import { FaSquare } from 'react-icons/fa';
import "@/css/HomeComponentsCss/OverviewHome.css";

export default function OverviewHome() {
  const cards = [
    {
      value: "50+",
      label: "Global Clients"
    },
    {
      value: "100+",
      label: "Projects Delivered"
    },
    {
      value: "6+",
      label: "Years of Craft"
    },
    {
      value: "25+",
      label: "Expert Team"
    }
  ];

  return (
    <section className="overview-section">
      <div className="overview-header">
        <span className="clients-bullet">
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          BUILD WITH STRUCTURE. SCALE WITH CONFIDENCE.
        </span>
        <h2 className="head-text-white">OVERVIEW.</h2>
      </div>

      <div className="overview-grid">
        {cards.map((card, index) => (
          <div key={index} className="overview-card">
            <h3 className="card-value head-text-white">{card.value}</h3>
            <p className="card-label sub-para-text-white">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
