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

            />
        </div>
    )
}
