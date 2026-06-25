"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/HomeComponentsCss/PinCardsHome.css";
import { FaSquare } from 'react-icons/fa';

import kaa from '@/assets/images/caseStudies/kaa.avif';
import pearl from '@/assets/images/caseStudies/pearl.avif';
import prugens from '@/assets/images/caseStudies/prugens.avif';
import cognitude from '@/assets/images/caseStudies/cognitude.jpg';


const projects = [
  {
    id: "01",
    total: "03",
    title: "KAA Dentals",
    year: "2024",
    services: ["Brand strategy", "Website Development", "SEO", "Social Media Marketing", "Paid advertising"],
    image: kaa,
    desc: "KAA Dental represents a full-service partnership where strategy, design, marketing, and performance work together to support measurable growth."
  },
  {
    id: "02",
    total: "03",
    title: "Pearl Dental Surgery",
    year: "2024",
    services: ["Brand strategy", "Website Development", "SEO", "Social Media Marketing"],
    image: pearl,
    desc: "Strengthening a trusted dental practice through website development, search visibility, and ongoing digital marketing."
  },
  {
    id: "03",
    total: "03",
    title: "Cognitude",
    year: "2024",
    services: ["Website Design", "Website Development", "UX/UI Design","Digital Experience Design"],
    image: cognitude,
    desc: "Designing a digital experience that showcases innovation across neuroscience, artificial intelligence, and human-centred research."
  },

];

export default function PinCardsHome() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return;
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const pinCards = cardsRef.current;

      pinCards.forEach((eachCard, index) => {
        if (index < pinCards.length - 1) {
          ScrollTrigger.create({
            trigger: eachCard,
            start: "top 50px",
            endTrigger: pinCards[pinCards.length - 1],
            end: "top 50px",
            pin: true,
            pinSpacing: false
          });

          ScrollTrigger.create({
            trigger: pinCards[index + 1],
            start: "top bottom",
            end: "top 50px",
            onUpdate: (self) => {
              const progress = self.progress;
              const inner = eachCard.querySelector('.pin-card-inner');
              // 3D Stacking animation logic applied to inner wrapper to prevent Pin conflict
              if (inner) {
                gsap.set(inner, {
                  scale: 1 - progress * 0.25,
                  rotation: index % 2 === 0 ? progress * 5 : -progress * 5,
                  rotationX: progress * 40,
                });
                gsap.set(inner.querySelector(".pin-card-overlay"), {
                  opacity: progress * 0.4
                });
              }
            }
          });
        }
      });

      // Wait a frame and refresh for accurate pinning size calculation
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pin-cards-container" ref={containerRef}>
      <div className="overview-header">
        <span className="clients-bullet">
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          REAL RESULTS. REAL GROWTH.
        </span>
        <h2 className="head-text-white"><span>CASE</span> <span>STUDIES</span></h2>
      </div>


      {projects.map((project, i) => (
        <div
          key={project.id}
          className="pin-card-wrapper"
          ref={addToRefs}
          style={{ zIndex: i + 10 }} // Ensure proper stacking
        >
          <div className="pin-card-inner">
            {/* Blurred Background inherits image */}
            <div
              className="pin-card-bg"
              style={{ backgroundImage: `url(${project.image.src})` }}
            />
            {/* Dark Overlay animated by GSAP */}
            <div className="pin-card-overlay" />

            {/* Foreground Content */}
            <div className="pin-card-content">

              <div className="pc-left">
                <p className="pc-desc para-text-white">{project.desc}</p>
                <div className="pc-left-bottom">
                  <span className="pc-count">{project.id} / {project.total}</span>
                  <h2 className="head-text-white pc-title">{project.title}</h2>
                </div>
              </div>

              <div className="pc-center">
                <img src={project.image.src} alt={project.title} className="pc-center-image" />
              </div>

              <div className="pc-right">
                <div className="pc-year">
                  <span className="para-text-white">Year</span>
                  <h3 className="sub-heading-white">{project.year}</h3>
                </div>
                <div className="pc-services">
                  <span className="para-text-white">Services</span>
                  <ul>
                    {project.services.map((service, idx) => (
                      <li key={idx} className="sub-para-text-white">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
