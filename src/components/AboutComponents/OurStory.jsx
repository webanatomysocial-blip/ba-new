"use client";
import React from 'react'
import '@/css/AboutComponentsCss/OurStory.css'
import Image from 'next/image';
import leftImage from '@/assets/images/about-page/ourstory/left-image.avif';
import rightImage from '@/assets/images/about-page/ourstory/right-image.avif';
import client1 from '@/assets/images/about-page/ourstory/clientimg-1.avif';
import client2 from '@/assets/images/about-page/ourstory/clientimg-2.avif';
import client3 from '@/assets/images/about-page/ourstory/clientimg-3.avif';
import { FaSquare } from 'react-icons/fa';

export default function OurStory() {
  return (
      <section className="our-story-container">
        <div className="our-story-image">
          <Image src={leftImage} alt="Our story" />
        </div>

        <div className="our-story-right">
            <p className="clients-bullet  sub-para-text" style={{color : 'black'}}>
                <FaSquare size={10} style={{ marginRight: '10px' }} />
              OUR STORY
            </p>

            <h2 className="our-story-title sub-heading">
              BA started in 2020 with a single project and an uncompromising belief that construction done right changes everything. Not just the skyline. The standard.
            </h2>

            <div className="our-story-cta">
              <div className="our-story-avatar-group">
                <Image className="our-story-avatar" src={client1} alt="Client avatar" />
                <Image className="our-story-avatar" src={client2} alt="Client avatar" />
                <Image className="our-story-avatar" src={client3} alt="Client avatar" />
              </div>

              <div className="our-story-stat">
                <p className="our-story-number sub-big-heading">10,000</p>
                <p className="our-story-number-label sub-para-text">Satisfied Clients</p>
              </div>
            </div>

            <div className="story-description">
              <div className="story-top">
                <p className="our-story-description paragraph-text">
                  Over 5 years, we grew from a regional contractor into a full-scale construction force delivering commercial towers, residential developments, infrastructure projects, and everything in between.
                </p>

                <button className="our-story-button">
                  <span className='button-text-wrapper'>
                    <span className='text top'>Start a Project</span>
                    <span className='text bottom'>Start a Project</span>
                  </span>
                </button>

              </div>
              <div className="our-story-card">
                <Image src={rightImage} alt="Office interior" />
              </div>

            </div>
        </div>
      </section>
  )
}
