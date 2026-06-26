"use client";

import React from 'react'
import '@/serviceInnerPagesCss/DMBanner.css'

export default function DMBanner({title, subPara, bannerImage}) {
    return (
        <div className="digital-marketing">
            <div className="digital-marketing-header">
                <h1 className="head-text">{title}</h1>
                <p>{subPara}</p>
            </div> 
            <div className="inner-page-banner-image" style={{
                backgroundImage : `url(${bannerImage.src})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="overlay"></div>
                <div className="digital-marketing-content">
                </div>
            </div>
        </div>
    );
}