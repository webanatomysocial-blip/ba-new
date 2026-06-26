"use client";

import React from 'react'
import { FaSquare } from 'react-icons/fa'
import '@/serviceInnerPagesCss/WhatWeDo.css'

export default function WhatWeDo({whatWeDoImage, subtitle, subPara}) {
  return (
    <div className='what-we-do'>
        <div className="what-we-do-left" style={{
            backgroundImage : `url(${whatWeDoImage.src})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}>
        </div>
        <div className="what-we-do-right">
            <p className="clients-bullet">
                <FaSquare size={10} style={{ marginRight: '10px' }} />
                {subtitle}
            </p>
            <p className='paragraph-text-white'>{subPara}</p>
        </div>
    </div>
  )
}
