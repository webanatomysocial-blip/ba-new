"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/HomeComponentsCss/PinCardsHome.css";
import { FaSquare } from 'react-icons/fa';

import kaa from '@/assets/images/caseStudies/kaa.avif';
import pearl from '@/assets/images/caseStudies/pearl.avif';
import cognitude from '@/assets/images/caseStudies/cognitude.jpg';
import dfnp from '@/assets/images/caseStudies/inner-case-study/inner-1.jpeg';
import soniva from '@/assets/images/caseStudies/inner-case-study/inner-2.jpeg';

const projects = [
  {
    id: "01",
    total: "05",
    title: "KAA Dentals",
    year: "2024",
    services: ["Brand strategy", "Website Development", "SEO", "Social Media Marketing", "Paid advertising"],
    image: kaa,
    desc: "KAA Dentals represents a full-service partnership where strategy, design, marketing, and performance work together to support measurable growth."
  },
  {
    id: "02",
    total: "05",
    title: "Pearl Dental Surgery",
    year: "2024",
    services: ["Brand strategy", "Website Development", "SEO", "Social Media Marketing"],
    image: pearl,
    desc: "Strengthening a trusted dental practice through website development, search visibility, and ongoing digital marketing."
  },
  {
    id: "03",
    total: "05",
    title: "Cognitude",
    year: "2024",
    services: ["Website Design", "Website Development", "UX/UI Design", "Digital Experience Design"],
    image: cognitude,
    desc: "Designing a digital experience that showcases innovation across neuroscience, artificial intelligence, and human-centred research."
  },
  {
    id: "04",
    total: "05",
    title: "Soniva Dental",
    year: "2024",
    services: ["Branding", "Website Development", "Website Design", "SEO", "Social Media Marketing"],
    image: soniva,
    desc: "Redefining the visual identity and online presence for Soniva Dental."
  },
  {
    id: "05",
    total: "05",
    title: "Dentistry For Nervous Patients",
    year: "2025",
    services: ["Website Design", "Website Development", "UX/UI Design", "Digital Experience Design"],
    image: dfnp,
    desc: "Designing a calming digital experience that helps nervous patients feel reassured and supported."
  },
];

export default function PinCardsHome() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 768) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.pin-card-wrapper'));
    const triggers = [];

    cards.forEach((card, index) => {
      if (index >= cards.length - 1) return; // last card doesn't need this

      const nextCard = cards[index + 1];
      if (!nextCard) return;

      // ScrollTrigger only reads scroll position and calls onUpdate.
      // No pin, no DOM mutations — CSS sticky handles the stacking.
      const t = ScrollTrigger.create({
        trigger: nextCard,
        start: "top bottom",
        end: "top 50px",
        onUpdate: (self) => {
          const progress = self.progress;
          const inner = card.querySelector('.pin-card-inner');
          if (!inner) return;

          gsap.set(inner, {
            scale: 1 - progress * 0.1,
            rotation: index % 2 === 0 ? progress * 3 : -progress * 3,
            rotationX: progress * 20,
            transformOrigin: "center center",
          });

          const overlay = inner.querySelector(".pin-card-overlay");
          if (overlay) gsap.set(overlay, { opacity: progress * 0.5 });
        },
        onLeave: (self) => {
          // Snap to final state when fully scrolled past
          const inner = card.querySelector('.pin-card-inner');
          if (!inner) return;
          gsap.set(inner, { scale: 0.9, rotationX: 20 });
          const overlay = inner.querySelector(".pin-card-overlay");
          if (overlay) gsap.set(overlay, { opacity: 0.5 });
        },
        onEnterBack: (self) => {
          // Reset when scrolling back up
          const inner = card.querySelector('.pin-card-inner');
          if (!inner) return;
          gsap.set(inner, { scale: 1, rotation: 0, rotationX: 0 });
          const overlay = inner.querySelector(".pin-card-overlay");
          if (overlay) gsap.set(overlay, { opacity: 0 });
        }
      });

      triggers.push(t);
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      // Kill only the triggers we created — no ctx.revert() touching the DOM
      triggers.forEach((t) => t.kill());
    };
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

      <div className="pin-cards-stack">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="pin-card-wrapper"
            style={{ zIndex: i + 10, top: `${50 + i * 10}px` }}
          >
            <div className="pin-card-inner">
              {/* Blurred Background */}
              <div
                className="pin-card-bg"
                style={{ backgroundImage: `url(${project.image.src})` }}
              />
              {/* Dark Overlay — animated by GSAP set() only */}
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
      </div>
    </section>
  );
}
