"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import '../../css/caseStudiesCss/ProjectCarousel.css';
import img1 from '@/assets/images/caseStudies/kaa.avif';
import img2 from '@/assets/images/caseStudies/pearl.avif';
import img3 from '@/assets/images/caseStudies/prugens.avif';
import img4 from '@/assets/images/caseStudies/theart.avif';

const images = [
  img1, img2, img3, img4
];

export default function ProjectCarousel() {
  return (
    <div className="project-carousel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,     // optional but nice
        }}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide-item">
            <img src={img.src} alt={`Project ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}