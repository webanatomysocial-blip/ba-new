"use client";
import React from 'react';
import '@/css/AboutComponentsCss/Banner.css';
import { IoArrowDown } from "react-icons/io5";
 
export default function Banner({topHeading, spanHeading, background}) {
  const bgUrl = background && typeof background === 'object' ? background.src : background;
  return (
  <>
    <section className='aboutUsBanner' style={{ backgroundImage: `url(${bgUrl || ''})` }}>
        <div className="overlay"></div>
        <div className="bannerContent">
            <h1 className="head-text-white">{topHeading} <span>{spanHeading}</span></h1>
            <p className="scrollIndicator sub-para-text-white">SCROLL DOWN <span><IoArrowDown /></span></p>
        </div>
      </section>
      </>
  )
}
