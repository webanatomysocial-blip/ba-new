"use client";
import React from 'react'
import '@/css/AboutComponentsCss/Team.css'
import { FaSquare } from 'react-icons/fa';

import team1 from '@/assets/images/about-page/team/1.avif';
import team2 from '@/assets/images/about-page/team/2.avif';
import team3 from '@/assets/images/about-page/team/3.avif';
import team4 from '@/assets/images/about-page/team/4.avif';
import team5 from '@/assets/images/about-page/team/5.avif';
import team6 from '@/assets/images/about-page/team/6.avif';

const teamMembers = [
  { name: 'Liam Brooks', role: 'UI/UX Designer', image: team1 },
  { name: 'Ethan Cole', role: 'Brand Designer', image: team2 },
  { name: 'Mason Hayes', role: 'Art Director', image: team3 },
  { name: 'Noah Lee', role: 'Visual Strategist', image: team4 },
  { name: 'Avery Quinn', role: 'Creative Lead', image: team5 },
  { name: 'Stella Reed', role: 'Product Designer', image: team6 },
]

export default function Team() {
  return (
    <section className="team">
      <div className="team-header">
        <p className="clients-bullet">
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          DESIGNERS
        </p>
        <h1 className="head-text">TEAM.</h1>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <article key={index} className="team-card">
            <img src={member.image?.src || member.image || ""} alt={member.name} className="team-card-image" />

            <div className="team-card-overlay">
              <div className="team-card-info">
                <h2 className="sub-heading-white">{member.name}</h2>
                <p className="sub-para-text-white">{member.role}</p>
              </div>
              <div className="team-card-actions">
                <button type="button" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8.75 17V10.5H6.25V17H8.75Z" fill="currentColor" />
                    <path d="M7.5 9.25C8.32843 9.25 9 8.57843 9 7.75C9 6.92157 8.32843 6.25 7.5 6.25C6.67157 6.25 6 6.92157 6 7.75C6 8.57843 6.67157 9.25 7.5 9.25Z" fill="currentColor" />
                    <path d="M11.25 17H13.75V13.5C13.75 12.5784 14.5784 11.75 15.5 11.75C16.4216 11.75 17.25 12.5784 17.25 13.5V17H19.75V13.25C19.75 11.35 18.15 9.75 16.25 9.75C15.3284 9.75 14.5 10.4216 14.5 11.25V12.75H13.75C13.75 12.75 13.75 17 13.75 17Z" fill="currentColor" />
                  </svg>
                </button>
                <button type="button" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </button>
                <button type="button" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6.5C21.3 6.82 20.55 7.03 19.77 7.12C20.56 6.56 21.16 5.72 21.42 4.74C20.67 5.23 19.86 5.58 18.99 5.79C18.29 5.03 17.27 4.52 16.15 4.52C13.87 4.52 12.11 6.29 12.11 8.56C12.11 8.88 12.14 9.2 12.21 9.49C8.86 9.3 5.8 7.8 3.93 5.42C3.53 6.05 3.31 6.76 3.31 7.52C3.31 8.91 4.12 10.12 5.33 10.72C4.76 10.7 4.22 10.53 3.75 10.27V10.31C3.75 12.28 5.13 13.95 6.96 14.28C6.6 14.36 6.2 14.4 5.8 14.4C5.51 14.4 5.22 14.38 4.95 14.33C5.52 15.99 7.01 17.2 8.75 17.24C7.44 18.34 5.8 18.95 4.12 18.95C3.8 18.95 3.49 18.93 3.18 18.88C4.93 20.06 7.05 20.68 9.32 20.68C16.14 20.68 19.66 15.1 19.66 10.08C19.66 9.92 19.66 9.77 19.65 9.61C20.44 9.05 21.1 8.34 21.6 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
