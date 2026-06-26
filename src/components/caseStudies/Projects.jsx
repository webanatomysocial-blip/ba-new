"use client";

import React from 'react'
import '../../css/caseStudiesCss/Projects.css'
import bg1 from '@/assets/images/caseStudies/kaa.avif'
import bg2 from '@/assets/images/caseStudies/pearl.avif'
import bg3 from '@/assets/images/caseStudies/cognitude.jpg'
// import bg4 from '@/assets/images/caseStudies/theart.avif'

import { FaArrowRight, FaSquare } from "react-icons/fa";
import BlueButton from "@/components/BlueButton";
import Link from "next/link";

export default function Projects() {
  const projectData = [
    { img: bg1, title: 'KAA Dentals', tags: 'End-End Marketing', href: '/case-studies/kaa' },
    { img: bg2, title: 'Pearl Dental Surgeries', tags: 'Brand Identity, Web Design', href: '/case-studies/pearl' },
    { img: bg3, title: 'Cognitude', tags: 'End-End Marketing', href: '/case-studies/cognitude' },
    // { img: bg4, title: 'ThreatSense AI', tags: 'Ads', href: '/case-studies/threatsense' },
  ];

  return (
    <section className='projects'>
      <div className="overview-header">
        <span className="clients-bullet">
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          PROJECTS
        </span>
        <h2 className="head-text-white">PROJECTS.</h2>
      </div>

      <div className="projects-container">
        {projectData.map((proj, idx) => (
          <Link
            href={proj.href}
            className="project-card"
            key={idx}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ overflow: 'hidden', borderRadius: '20px' }}>
              <img className='project-main-img' src={proj.img.src} alt={proj.title} />
            </div>

            <div className="project-card-content">
              <p className="project-title">{proj.title}</p>

              <div className="project-info">
                <p>{proj.tags}</p>
                <span className='arrow'><FaArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="view-more-container">
        <BlueButton text="View More" href="/case-studies" icon={true} />
      </div> */}
    </section>
  )
}
