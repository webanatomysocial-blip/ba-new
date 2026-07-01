import React from 'react'
import { FaSquare } from 'react-icons/fa'

import '@/caseStudiesCss/Details.css'

import BlueButton from '@/components/BlueButton'

import recognizedImage from '@/assets/images/caseStudies/inner-case-study/recognized.avif'
import innerImg1 from '@/assets/images/caseStudies/inner-case-study/inner-1.jpeg'
import innerImg2 from '@/assets/images/caseStudies/inner-case-study/inner-2.jpeg'

export default function Details() {
    return (
        <section className='details'>
            <div className="case-studies-inner-page-header">
                <p className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    DETAILS
                </p>
                <h1 className="sub-big-heading" style={{ fontSize: '40px', color: 'var(--white)' }}>PROJECT DETAILS</h1>
                <p>Strategy-led design that converts visitors into clients.</p>
            </div>
            <div className="details-images">
                <div className="image-one">
                    <img src={recognizedImage.src} alt="recognizedImage" />
                </div>
                <div className="image-two">
                    <img src={innerImg1.src} alt="innerImg1" />
                </div>
                <div className="image-three">
                    <img src={innerImg2.src} alt="innerImg2" />
                </div>
                <BlueButton
                    text={'View Live Website'}
                    // href={'https://www.sonivadental.com/'}
                    icon={true}
                />
            </div>
        </section>
    )
}
