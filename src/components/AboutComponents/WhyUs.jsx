"use client";
import React from 'react'
import '@/css/AboutComponentsCss/WhyUs.css'
import { FaSquare } from 'react-icons/fa';

export default function WhyUs() {
  const whyUsData = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C9.23858 3 7 5.23858 7 8V13C7 14.6569 8.34315 16 10 16H11V18H9C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18H13V16H14C15.6569 16 17 14.6569 17 13V8C17 5.23858 14.7614 3 12 3Z" fill="#4c1d95" />
          <path d="M9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8V13C15 14.1046 14.1046 15 13 15H11C9.89543 15 9 14.1046 9 13V8Z" fill="#ffffff" />
        </svg>
      ),
      title: 'Strategic Growth Experts',
      description: 'Helping businesses scale with clarity, strategy, and confidence.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4 2L4 13H10L8.4 22L15.8 11H10L11.4 2Z" fill="#4c1d95" />
        </svg>
      ),
      title: 'Faster Business Outcomes',
      description: 'Accelerating growth through focused execution and action.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6C5.89543 6 5 6.89543 5 8V16C5 18.2091 6.79086 20 9 20H15C17.2091 20 19 18.2091 19 16V9C19 7.89543 18.1046 7 17 7H12V5H17C19.2091 5 21 6.79086 21 9V16C21 19.3137 18.3137 22 15 22H9C5.68629 22 3 19.3137 3 16V8C3 5.79086 4.79086 4 7 4H12V6H7Z" fill="#4c1d95" />
          <path d="M8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H8Z" fill="#7c3aed" />
        </svg>
      ),
      title: 'Tailored To Your Business',
      description: 'Solutions designed around your unique business needs.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 18H7V11H5V18Z" fill="#4c1d95" />
          <path d="M10 18H12V7H10V18Z" fill="#7c3aed" />
          <path d="M15 18H17V13H15V18Z" fill="#4c1d95" />
          <path d="M19 18H21V9H19V18Z" fill="#7c3aed" />
        </svg>
      ),
      title: 'End-to-End Support',
      description: 'Guidance from strategy through implementation and growth.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.68629 2 6 4.68629 6 8V9H5C4.44772 9 4 9.44772 4 10V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V10C20 9.44772 19.5523 9 19 9H18V8C18 4.68629 15.3137 2 12 2Z" fill="#4c1d95" />
          <path d="M8 9V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V9H8Z" fill="#ffffff" />
          <path d="M12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5Z" fill="#ffffff" />
        </svg>
      ),
      title: 'UK Market Expertise',
      description: 'Built on deep knowledge of UK business landscapes.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C8.68629 3 6 5.68629 6 9V12H5C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H18V9C18 5.68629 15.3137 3 12 3Z" fill="#4c1d95" />
          <path d="M8 12V9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9V12H8Z" fill="#ffffff" />
        </svg>
      ),
      title: 'Results-Driven Approach',
      description: 'Focused on measurable growth, efficiency, and impact.'
    },
  ]

  return (
    <section className="why-us-section">
      <div className="overview-header">
        <span className="clients-bullet">
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          Extraordinary Creativity for Digital Success
        </span>
        <h2 className="head-text">WHY CHOOSE US.</h2>
      </div> 

      <div className="why-us-content">
        {whyUsData.map((item, index) => (
          <div key={index} className="why-us-card">
            <div className="icon">{item.icon}</div>
            <div className="card-details">
              <h2 className="card-title sub-heading">{item.title}</h2>
              <p className="card-description paragraph-text">{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
