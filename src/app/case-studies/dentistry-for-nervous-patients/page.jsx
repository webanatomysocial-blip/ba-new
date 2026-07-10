"use client";
import KaaBanner from '@/caseStudyComponents/KaaBanner'
import React from 'react'

// import bannerBg from '@/assets/images/caseStudies/cognitude.jpg'
import bannerBg from '@/assets/images/caseStudies/inner-case-study/inner-1.jpeg'
import Overview from '@/caseStudyComponents/InnerPageOverview'
import Details from '@/caseStudyComponents/Details';
import OtherCaseStudies from '@/caseStudyComponents/OtherCaseStudies'

export default function DentistryForNervousPatientsPage() {
    return (
        <div>
            <KaaBanner
                title="DENTISTRY FOR NERVOUS PATIENTS"
                // subtitle='AVAILABLE FOR PROJECTS'
                // subPara='Strategy-led design that converts visitors into clients.'
                image={bannerBg}
            />

            <Overview
                aboutProject="Dentistry for Nervous Patients required a calming digital experience that reflects its patient-first approach to dental anxiety. The website was designed to create a sense of comfort, reassurance, and trust for patients who may feel anxious about seeking dental care."
                sector='Specialist Dental Care'
                year='2025'
                scope={[
                    "Website Design",
                    "Website Development",
                    "User Experience Design",
                ]}
                technology={[ 
                    "WordPress",
                    "Responsive Development",
                    "SEO Optimisation",
                    "Performance Optimisation"
                ]}
                goals1="The objective was to create a calming and reassuring digital experience for nervous patients. The website needed to reduce anxiety, build trust, and provide clear information in an environment that feels welcoming and supportive."
                goals2="In addition, the website required a strong SEO foundation to improve online visibility and help patients easily discover the service."
                howWeHelped1="We designed and developed a website experience centred around comfort and reassurance. Soft visual elements, calming colours, intuitive navigation, and thoughtful content layouts were used to create an environment that feels approachable and relaxing."
                howWeHelped2="Alongside the website development, we implemented on-page SEO best practices to improve search visibility and establish a strong digital foundation for future growth."
                results="The new website successfully reflects the practice's compassionate approach to patient care. By prioritising calmness, accessibility, and trust, the digital experience helps nervous patients feel more comfortable before they even step into the clinic"
            />

            <Details websiteUrl="https://dentistryfornervouspatients.co.uk/" hideImage1 hideImage3 />

            <OtherCaseStudies currentSlug="dentistry-for-nervous-patients" />
        </div>
    )
}
