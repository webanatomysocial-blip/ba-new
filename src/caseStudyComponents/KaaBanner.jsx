"use client";

import React from 'react'
import '@/caseStudiesCss/KaaBanner.css'
import { FaSquare } from 'react-icons/fa'
import Image from 'next/image'

export default function KaaBanner({title, subtitle, subPara, image}) {
  return (
    <div className='case-studies-inner-page'>
        <div className="case-studies-inner-page-header">
            <p className="clients-bullet">
                <FaSquare size={10} style={{ marginRight: '10px' }} />
                {subtitle}
            </p>
            <h1 className="head-text">{title}</h1>
            <p>{subPara}</p>
        </div>
        <div className="inner-page-banner-image">
            <div className="overlay"></div>
            <div className="inner-page-banner-content">
                <div className="left">
                    <p className='paragraph-text-white'>KAA Dental</p>
                    <p>Click Banner to Visit Link</p>
                </div> 
            </div>
        </div>
    </div>
  ) 
}
