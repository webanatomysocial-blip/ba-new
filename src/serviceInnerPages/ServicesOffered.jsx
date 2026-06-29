"use client";

import React from 'react'
import { FaSquare } from 'react-icons/fa'
import '@/serviceInnerPagesCss/ServicesOffered.css'

export default function ServicesOffered({subtitle, para, services}) {

  return (
    <div className='services-offered'>
        <div className="services-offered-header">
            <p className="clients-bullet">
                <FaSquare size={10} style={{ marginRight: '10px' }} />
                {subtitle}
            </p>
            <p className='paragraph-text-white'>{para}</p>
        </div>
        
        <div className="services-offered-grid">
            {services?.map((service, index) => (
                <div key={index} className="service-card">
                    <h2 className="service-number">{service.number}</h2>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-text">{service.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}