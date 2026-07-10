"use client";

import React from 'react'
import '@/css/caseStudiesCss/Projects.css'

import bg1 from '@/assets/images/caseStudies/kaa.avif'
import bg2 from '@/assets/images/caseStudies/pearl.avif'
import bg3 from '@/assets/images/caseStudies/cognitude.jpg'
import bg4 from '@/assets/images/caseStudies/soniva.jpg'
import bg5 from '@/assets/images/caseStudies/inner-case-study/inner-1.jpeg'

import { FaArrowRight, FaSquare } from "react-icons/fa";
import BlueButton from "@/components/BlueButton";
import Link from "next/link";

const allProjects = [
    { slug: 'kaa', img: bg1, title: 'KAA Dentals', tags: 'End-End Marketing', href: '/case-studies/kaa' },
    { slug: 'pearl', img: bg2, title: 'Pearl Dental Surgeries', tags: 'Brand Identity, Web Design', href: '/case-studies/pearl' },
    { slug: 'cognitude', img: bg3, title: 'Cognitude', tags: 'Web Design and Development', href: '/case-studies/cognitude' },
    { slug: 'soniva-dental', img: bg4, title: 'Soniva Dental', tags: 'End-End Marketing', href: '/case-studies/soniva-dental' },
    { slug: 'dentistry-for-nervous-patients', img: bg5, title: 'Dentistry for Nervous Patients', tags: 'Brand Identity, Web Design', href: '/case-studies/dentistry-for-nervous-patients' },
];

export default function OtherCaseStudies({ currentSlug }) {
    const otherProjects = allProjects.filter(p => p.slug !== currentSlug).slice(0, 3);

    return (
        <section className='projects'>
            <div className="projects-header">
                <span className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    OTHER CASE STUDIES
                </span>
                <BlueButton text="All Case Studies" href="/case-studies" icon={true} />
            </div>

            <div className="projects-container three-col">
                {otherProjects.map((proj, idx) => (
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
        </section>
    )
}
