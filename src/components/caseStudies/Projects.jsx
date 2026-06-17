"use client";

import React from 'react'
import '../../css/caseStudiesCss/Projects.css'
import bg1 from '@/assets/images/caseStudies/kaa.avif'
import bg2 from '@/assets/images/caseStudies/pearl.avif'
import bg3 from '@/assets/images/caseStudies/prugens.avif'
import bg4 from '@/assets/images/caseStudies/theart.avif'

import { FaArrowRight, FaSquare } from "react-icons/fa";
import BlueButton from "@/components/BlueButton";

export default function Projects() {
  const projectData = [
    { img: bg1, title: 'KAA Dentals', tags: 'End-End Marketing' },
    { img: bg2, title: 'Pearl', tags: 'End-End Marketing' },
    { img: bg3, title: 'Prugens', tags: 'End-End Marketing' },
    { img: bg4, title: 'The Art', tags: 'End-End Marketing' },
  ];

  return (
    <section className='projects'>
      <div className="projects-heading">
        <p className='project-side-heading clients-bullet sub-para-text-white'>
          <FaSquare size={10} />
          PROJECTS
        </p>
        <h1 className="head-text-white">PROJECTS.</h1>
      </div>

      <div className="projects-container">
        {projectData.map((proj, idx) => (
          <div className="project-card" key={idx}>
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
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <BlueButton text="View More" href="/case-studies" icon={true} />
      </div>
    </section>
  )
}
