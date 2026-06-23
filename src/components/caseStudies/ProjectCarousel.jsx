"use client";

import React, { useState, useRef, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import '../../css/caseStudiesCss/ProjectCarousel.css';
import img1 from '@/assets/images/caseStudies/kaa.avif';
import img2 from '@/assets/images/caseStudies/pearl.avif';
import img3 from '@/assets/images/caseStudies/prugens.avif';

const images = [
  img1, img2, img3
];

export default function ProjectCarousel() {

  const [positions, setPositions] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => [(prev[0] + 1) % 3, (prev[1] + 1) % 3, (prev[2] + 1) % 3]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-carousel-container">
      <div className="faq-top">
        <img className={`carousal-img pos-${positions[0]}`} src={img1.src} alt="Carousal 1" />
        <img className={`carousal-img pos-${positions[1]}`} src={img2.src} alt="Carousal 2" />
        <img className={`carousal-img pos-${positions[2]}`} src={img3.src} alt="Carousal 3" />
      </div>
    </div>
  );
}