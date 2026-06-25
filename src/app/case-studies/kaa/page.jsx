"use client";
import KaaBanner from '@/caseStudyComponents/KaaBanner'
import React from 'react'

import bannerBg from '@/assets/images/caseStudies/kaa.avif'
import Overview from '@/caseStudyComponents/InnerPageOverview'

export default function InnerPage() {
    return (
        <div>
            <KaaBanner
                title="KAA DENTAL"
                subtitle='AVAILABLE FOR PROJECTS'
                subPara='Strategy-led design that converts visitors into clients.'
                image={bannerBg}
            />

            <Overview
                mainTitle=''
                mainSubHead=''
                mainPara=''
                aboutProject='KAA Dental was established with a vision to create a modern and patient-focused dental practice. We partnered with the brand from the ground up, delivering a complete digital and marketing ecosystem designed to support long-term growth.'
                sector='Healthcare'
                year='2024'
                scope={[
                    "Website Development",
                    "SEO",
                    "Social Media Marketing",
                    "Paid Advertising",
                    "Creative Design"
                ]}
                technology={[
                    "WordPress",
                    "Google Search Console",
                    "Google Analytics",
                    "Meta Ads",
                    "Google Ads"
                ]}
                goals1='KAA Dental required a complete digital foundation to establish its presence within the local market. The objective was to build a trusted brand identity, improve online visibility, and create a seamless patient journey across every digital touchpoint.'
                goals2='The goal was not only to launch a new practice but to create a scalable marketing ecosystem that supports patient acquisition and long-term growth.'
                howWeHelped1='We developed a complete brand identity that positioned KAA Dental as a modern and trusted practice. A patient-focused website was created to improve user experience and support appointment enquiries.'
                howWeHelped2='Our team implemented SEO strategies to improve search visibility while social media management and creative campaigns strengthened brand awareness. Paid advertising campaigns were introduced to generate qualified patient enquiries and support ongoing growth.'
                results='KAA Dental now benefits from a consistent brand identity, a professional digital presence, and an integrated marketing strategy. The combination of branding, website development, SEO, and advertising has created a strong foundation for sustainable growth and patient engagement.'
            />
        </div>
    )
}
