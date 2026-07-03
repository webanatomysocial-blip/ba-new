import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/inner-service/digital-marketing/banner.avif";
import WhatWeDoImage from "@/assets/images/servicesImages/inner-service/digital-marketing/what-we-do.avif";
import WhatWeDo from "@/serviceInnerPages/WhatWeDo";
import ServicesOffered from '@/serviceInnerPages/ServicesOffered'
import ServiceHowDoWeWork from "@/serviceInnerPages/ServiceHowDoWeWork";
import ThreeServices from '@/serviceInnerPages/ThreeServices';
import AboutCTA from '@/components/AboutComponents/AboutCTA';

import image1 from "@/assets/images/HomeImages/howdowework/1.avif";
import image2 from "@/assets/images/HomeImages/howdowework/2.avif";
import image3 from "@/assets/images/HomeImages/howdowework/3.avif";

export default function AIAutomationPage() {
    return (
        <>
            <DMBanner
                title="BRANDING SERVICE"
                subPara={<>
                    Our Branding Services help businesses create a memorable identity. We ensure<br/>consistency across logos, visuals, strategy, and messaging, enhancing recognition,<br/>building trust, and connecting effectively with your audience.
                </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    Branding shapes how your business is seen and remembered.<br/>It defines your visual identity and builds trust through consistent<br/>communication. Strong branding helps you stand out with clarity and<br/>confidence.
                </>}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServicesOffered
                subtitle='SERVICES OFFERED'
                para={null}
                services= {[
                    {
                        number: '01',
                        title: 'Logo Design',
                        text: 'Our Logo Design service creates unique, memorable, and professional logos that reflect your brand’s identity and values.'
                    },
                    {
                        number: '02',
                        title: 'Brand Strategy',
                        text: 'Our Brand Strategy service helps businesses define their vision, mission, target audience, and market positioning.'
                    },
                    {
                        number: '03',
                        title: 'Visual Design',
                        text: 'Our Visual Design service crafts cohesive visual elements, including color schemes, typography, and design patterns, to create a recognizable brand image.'
                    },
                    {
                        number: '04',
                        title: 'Packaging Design',
                        text: 'Our Packaging Design service delivers attractive, functional, and brand-aligned packaging solutions. We combine creativity and practicality to create packaging that not only protects products but also enhances appeal and communicates your brand values.'
                    },
                    {
                        number: '05',
                        title: 'Digital Branding',
                        text: 'Our Digital Branding service establishes a strong online presence through websites, social media, and digital campaigns. We create consistent visuals, messaging, and engagement strategies to connect with your audience effectively.'
                    }
                ]}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServiceHowDoWeWork 
                subtitle="DISCOVER. STRATEGIZE. BUILD. ELEVATE."
                title="HOW DO WE WORK."
                processSteps={[
                    {
                        id: "01",
                        title: "Discover & Define",
                        desc: "Identifying the foundations that shape your brand identity.",
                        imgUrl: image1
                    },
                    {
                        id: "02",
                        title: "Strategize & Structure",
                        desc: "Developing brand strategies that create lasting connections.",
                        imgUrl: image2
                    },
                    {
                        id: "03",
                        title: "Design & Develop",
                        desc: "Transforming ideas into memorable visual experiences.",
                        imgUrl: image3
                    },
                    {
                        id: "04",
                        title: "Launch & Elevate",
                        desc: "Expanding your brand presence with purpose and impact.",
                        imgUrl: image1
                    }
                ]}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ThreeServices />

            <AboutCTA />

        </>
    );
}