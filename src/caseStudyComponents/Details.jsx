import React from 'react'
import { FaSquare } from 'react-icons/fa'

import '@/caseStudiesCss/Details.css'

import BlueButton from '@/components/BlueButton'

import recognizedImage from '@/assets/images/caseStudies/inner-case-study/recognized.avif'
import sonivaInner from '@/assets/images/caseStudies/inner-case-study/soniva-inner.jpeg'
import innerImg2 from '@/assets/images/caseStudies/inner-case-study/inner-2.jpeg'

export default function Details({ websiteUrl, hideImage1, hideImage2, hideImage3, image1Src, image2Src, image3Src }) {
    const img1 = image1Src || recognizedImage;
    const img2 = image2Src || sonivaInner;
    const img3 = image3Src || innerImg2;

    return (
        <section className='details'>
            <div className="case-studies-inner-page-header">
                <p className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    DETAILS
                </p>
                <h1 className="sub-big-heading" style={{ fontSize: '40px', color: 'var(--white)' }}>PROJECT DETAILS</h1>
                {/* <p>Strategy-led design that converts visitors into clients.</p> */}
            </div>
            <div className="details-images">
                {!hideImage1 && (
                  <div className="image-one">
                      <img src={img1.src || img1} alt="recognizedImage" loading="lazy" decoding="async" />
                  </div>
                )}
                {!hideImage3 && (
                  <div className="image-three">
                      <img src={img3.src || img3} alt="innerImg2" loading="lazy" decoding="async" />
                  </div>
                )}
                {!hideImage2 && (
                  <div className="image-two">
                      <img src={img2.src || img2} alt="sonivaInner" loading="lazy" decoding="async" />
                  </div>
                )}
                <BlueButton
                    text={'View Website'}
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={true}
                />
            </div>
        </section>
    )
}
