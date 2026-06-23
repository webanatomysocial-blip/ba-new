"use client";

import React from 'react';
import WhiteButton from '../WhiteButton';
import '@/css/ServiceComponentsCss/AllServices.css';

const services = [
  { id: "01", icon: "AI", title: "AI Automation" },
  { id: "02", icon: "B", title: "Branding" },
  { id: "03", icon: "BC", title: "Business Development Consultant"},
  { id: "04", icon: "D", title: "Digital Marketing" },
  { id: "05", icon: "L", title: "Logistics" },
  { id: "06", icon: "WD", title: "Web Development" },
];

export default function AllServices() {
  return (
    <section className="all-services">
      <div className="servicesGrid">
        {services.map((service) => (
          <div className="serviceCard" key={service.id}>
            <span className="cardNumber">{service.id}</span>

            <div className="cardContent">
              <h1 className="cardIcon">{service.icon}</h1>
              <h3 className="cardTitle">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
