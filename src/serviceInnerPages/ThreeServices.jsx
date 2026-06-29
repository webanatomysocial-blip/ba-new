"use client";

import React from 'react';
import BlueButton from '@/components/BlueButton';
import { FaSquare } from 'react-icons/fa6';
import '@/serviceInnerPagesCss/ThreeServices.css'

const services = [
  { id: "01", icon: "B", title: "Branding" },
  { id: "02", icon: "D", title: "Digital Marketing" },
  { id: "03", icon: "WD", title: "Web Development" },
];

export default function AllServices() {
  return (
    <section className="three-services">
        <div className="services-offered-header">
            <p className="clients-bullet">
                <FaSquare size={10} style={{ marginRight: '10px' }} />
                OTHER SERVICES
            </p>
            <div className="view-more-container">
                <BlueButton text="All Services" href="/services" icon={true} />
            </div>
        </div>

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
