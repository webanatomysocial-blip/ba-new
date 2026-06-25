"use client";
import KaaBanner from '@/caseStudyComponents/KaaBanner'
import React from 'react'

import bannerBg from '@/assets/images/caseStudies/kaa.avif'
import Overview from '@/caseStudyComponents/InnerPageOverview'

export default function InnerPage() {
    return (
        <div>
            <KaaBanner
                title="COGNITUDE"
                subtitle='AVAILABLE FOR PROJECTS'
                subPara='Strategy-led design that converts visitors into clients.'
                image={bannerBg}
            />

            <Overview
                // mainTitle='KAA DENTAL'
                // mainSubHead='INFORMATION'
                // mainPara="Got something in mind? Let's clear it up before we start."
                aboutProject='Cognitude required a modern digital platform to showcase its work in neuroscience, artificial intelligence, cognitive research, and human-centred innovation. The website was designed to present its services, expertise, and collaborative approach through an engaging digital experience.'
                sector='Neuroscience Research & AI Innovation'
                year='2025'
                scope={[
                    "Website Design",
                    "Website Development",
                    "UI/UX Design",
                    "Digital Experience Design",
                ]}
                technology={[ 
                    "WordPress",
                    "Figma",
                    "Responsive Development",
                    "Interactive UI", 
                ]}
                goals1="Cognitude needed a digital platform that effectively presented its services, research initiatives, and areas of expertise. The objective was to establish a strong online presence that communicates its vision and creates opportunities for collaboration, research, and engagement."
                goals2="The website also needed to showcase its multidisciplinary approach across neuroscience, artificial intelligence, creativity, and human-centred innovation."
                howWeHelped1="We designed and developed a modern website that showcases Cognitude's services, research areas, and collaborative initiatives through a clear and engaging user experience. The platform was structured to improve navigation, highlight key offerings, and strengthen the brand's digital presence."
                howWeHelped2="Our approach focused on creating a balance between innovation, functionality, and visual storytelling to reflect Cognitude's unique identity."
                results="The new website provides Cognitude with a distinctive digital presence that effectively communicates its services, expertise, and vision. The platform supports collaboration opportunities while strengthening the organisation's position within neuroscience and AI innovation."
            />
        </div>
    )
}
