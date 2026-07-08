"use client";
import KaaBanner from '@/caseStudyComponents/KaaBanner'
import React from 'react'

import soniva from '@/assets/images/caseStudies/soniva.jpg'
import Overview from '@/caseStudyComponents/InnerPageOverview'
import Details from '@/caseStudyComponents/Details';

export default function InnerPage() {
    return (
        <div>
            <KaaBanner
                title="SONIVA DENTAL"
                // subtitle='AVAILABLE FOR PROJECTS'
                // subPara='Strategy-led design that converts visitors into clients.'
                image={soniva}
            />

            <Overview
                // mainTitle='KAA DENTAL'
                // mainSubHead='INFORMATION'
                // mainPara="Got something in mind? Let's clear it up before we start."
                aboutProject='Soniva Dental required a modern digital identity that reflected its multi-location dental network and comprehensive dental services. The project focused on creating a stronger brand presence, improving the digital experience, and building a scalable marketing foundation across multiple locations.'
                sector='Healthcare & Multi-Location Dental Care'
                year='2024'
                scope={[
                    "Branding",
                    "Website Design",
                    "Website Development",
                    "SEO",
                    "Social Media Marketing",
                ]}
                technology={[ 
                    "WordPress",
                    "Google Search Console",
                    "Technical SEO",
                    "Responsive Development",
                    "Social Media Management", 
                ]}
                goals1="Soniva Dental required a digital platform that could effectively showcase its services, multiple locations, and patient-first approach. The objective was to strengthen brand consistency, improve online visibility, and create a modern digital experience that supports patient engagement and future growth."
                goals2="The website also needed to communicate the scale of the organization while making services and locations easily accessible to prospective patients."
                howWeHelped1="We developed a refreshed brand identity and designed a modern website experience that reflects Soniva Dental's scale and expertise. The website was structured to improve navigation, highlight services, and create a seamless patient journey."
                howWeHelped2="Alongside the website, we implemented SEO strategies to improve search visibility and supported the brand through social media content that strengthened engagement and reinforced its digital presence."
                results="The new digital ecosystem provides Soniva Dental with a stronger online presence that aligns with its growing network of clinics and comprehensive dental services. The combination of branding, website development, SEO, and social media has created a solid foundation for long-term digital growth."
            />

            <Details websiteUrl="https://sonivadental.com/" hideImage1 hideImage2 />
        </div>
    )
}
