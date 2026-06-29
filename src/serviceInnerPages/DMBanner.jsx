"use client";

import React from 'react'
import '@/serviceInnerPagesCss/DMBanner.css'
import { FaSquare } from 'react-icons/fa'

export default function DMBanner({subtitle, title, subPara, bannerImage}) {
    return (
        <div className="digital-marketing">
            <div className="case-studies-inner-page-header">
                <p className="clients-bullet">
                    {subtitle}
                </p>
                <h1 className="head-text">{title}</h1>
                <p>{subPara}</p>
            </div>

            <div className="inner-page-banner-image" style={{
                backgroundImage : `url(${bannerImage.src})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="digital-marketing-content">
                </div>
            </div>
        </div>
    );
}