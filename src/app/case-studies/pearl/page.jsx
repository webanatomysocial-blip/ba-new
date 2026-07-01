"use client";
import KaaBanner from '@/caseStudyComponents/KaaBanner'
import React from 'react'

import bannerBg from '@/assets/images/caseStudies/pearl.avif';
import Overview from '@/caseStudyComponents/InnerPageOverview'
import Details from '@/caseStudyComponents/Details';

export default function InnerPage() {
    return (
        <div>
            <KaaBanner
                title="PEARL DENTAL SURGERY"
                subtitle='AVAILABLE FOR PROJECTS'
                subPara='Strategy-led design that converts visitors into clients.'
                image={bannerBg}
            />

            <Overview
                // mainTitle='KAA DENTAL'
                // mainSubHead='INFORMATION'
                // mainPara="Got something in mind? Let's clear it up before we start."
                aboutProject='Pearl Dental Surgery is a trusted family dental practice with a long-standing reputation for patient care. Our partnership focused on strengthening its digital presence through a modern website, improved search visibility, and ongoing social media marketing.'
                sector='Healthcare'
                year='2024'
                scope={[
                    "Website Development",
                    "SEO",
                    "Social Media Marketing",
                    "Content Strategy",
                ]}
                technology={[
                    "WordPress",
                    "Google Search Console",
                    "Google Analytics",
                    "Meta Platforms",
                ]}
                goals1='Pearl Dental Surgery required a modern digital presence that reflected its reputation and expertise. The objective was to improve online visibility, enhance patient engagement, and create a user-friendly experience that supports enquiries and long-term growth.'
                goals2='The practice also aimed to strengthen its local presence through consistent marketing and improved search performance.'
                howWeHelped1="We designed and developed a patient-focused website that provides a seamless user experience and clearly communicates the practice's services and values. The website was built to improve accessibility, engagement, and enquiry generation."
                howWeHelped2="Alongside the website, we implemented ongoing SEO strategies to improve local search visibility and managed social media activities to strengthen brand awareness and patient engagement. This integrated approach continues to support the practice's digital growth."
                results="Pearl Dental Surgery now benefits from a stronger digital presence that aligns with its reputation and patient-first approach. Through ongoing SEO and social media efforts, the practice continues to improve visibility, engage with its audience, and support long-term growth."
            />

            <Details />
        </div>
    )
}
