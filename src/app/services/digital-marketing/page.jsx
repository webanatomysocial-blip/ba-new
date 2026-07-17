import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/inner-service/digital-marketing/dm-what-we-do.jpg";
import WhatWeDoImage from "@/assets/images/servicesImages/inner-service/digital-marketing/digital-marketing.jpg";

import WhatWeDo from "@/serviceInnerPages/WhatWeDo";
import ServicesOffered from '@/serviceInnerPages/ServicesOffered'
import ServiceHowDoWeWork from "@/serviceInnerPages/ServiceHowDoWeWork";
import ThreeServices from '@/serviceInnerPages/ThreeServices'; 
import AboutCTA from "@/components/AboutComponents/AboutCTA";

import image1 from "@/assets/images/HomeImages/howdowework/1.avif";
import image2 from "@/assets/images/HomeImages/howdowework/2.avif";
import image3 from "@/assets/images/HomeImages/howdowework/3.avif";


export default function DigitalMarketingPage() {
    return (
        <>
            <DMBanner
                title="DIGITAL MARKETING."
                subPara={<>
                    Digital marketing promotes brands online using SEO, social media, mail, <br className="desktop-br" /> and ads to boost visibility, engagement, and business growth.
                </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    We help businesses build a stronger online presence through <br className="desktop-br" /> data-driven digital marketing strategies. From increasing visibility <br className="desktop-br" /> to generating quality leads, we create campaigns that deliver <br className="desktop-br" /> measurable business growth.
                </>}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServicesOffered
                subtitle='SERVICES OFFERED'
                para={<>
                    Digital Marketing helps your business grow online through <br className="desktop-br" /> strategic social, search and advertising channels. It boosts <br className="desktop-br" /> visibility, strengthens engagement and drives consistent <br className="desktop-br" /> results. Your brand becomes easier to find and faster to trust.
                </>}
                services={[
                    {
                        number: '01',
                        title: 'Google SEO',
                        text: 'Google SEO services are designed to improve your website’s visibility and ranking on search engine results.Boost your online presence with optimized content, effective keywords to rank higher on Google.'
                    },
                    {
                        number: '02',
                        title: 'SEO',
                        text: 'SEO services help businesses improve their online visibility and attract more organic traffic through strategic keyword research, on-page and off-page optimization, and quality content creation.'
                    },
                    {
                        number: '03',
                        title: 'Social Media Marketing',
                        text: 'Social media marketing services help businesses build brand awareness, engage audiences, and drive sales through platforms like Facebook, Instagram, LinkedIn, and Twitter.'
                    },
                    {
                        number: '04',
                        title: 'Performance Marketing',
                        text: 'Performance marketing services focus on achieving measurable results such as clicks, leads, and sales through data-driven digital advertising strategies.'
                    },
                    {
                        number: '05',
                        title: 'Growth Partner',
                        text: 'Growth partner services in digital marketing focus on helping businesses achieve long-term, scalable success through data-driven strategies and personalized support.'
                    },
                    {
                        number: '06',
                        title: 'E-Commerce Marketing',
                        text: 'E-commerce marketing services help online businesses attract customers, increase sales, and build strong digital brands. These services include SEO, social media marketing, email campaigns, paid advertising, and conversion optimization.'
                    },
                ]}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServiceHowDoWeWork
                subtitle="DISCOVER. STRATEGIZE. BUILD. ELEVATE."
                title="HOW DO WE WORK."
                processSteps={[
                    {
                        id: "01",
                        title: "Analyze & Understand",
                        desc: "Understanding your brand, audience, and opportunities for growth.",
                        imgUrl: image1
                    },
                    {
                        id: "02",
                        title: "Strategize & Position",
                        desc: "Creating tailored strategies aligned with your business goals.",
                        imgUrl: image2
                    },
                    {
                        id: "03",
                        title: "Engage & Amplify",
                        desc: "Executing campaigns that build visibility and meaningful engagement.",
                        imgUrl: image3
                    },
                    {
                        id: "04",
                        title: "Optimize & Scale",
                        desc: "Refining performance to drive sustainable growth and better results",
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