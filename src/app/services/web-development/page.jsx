import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/inner-service/web-dev/web-dev-banner.jpeg";
import WhatWeDoImage from "@/assets/images/servicesImages/inner-service/web-dev/web-dev-what-we-do.jpeg";

import WhatWeDo from "@/serviceInnerPages/WhatWeDo";
import ServicesOffered from '@/serviceInnerPages/ServicesOffered'
import ThreeServices from '@/serviceInnerPages/ThreeServices';
import AboutCTA from '@/components/AboutComponents/AboutCTA';
import ServiceHowDoWeWork from "@/serviceInnerPages/ServiceHowDoWeWork";

import image1 from "@/assets/images/HomeImages/howdowework/1.avif";
import image2 from "@/assets/images/HomeImages/howdowework/2.avif";
import image3 from "@/assets/images/HomeImages/howdowework/3.avif";


export default function DigitalMarketingPage() {
    return (
        <>
            <DMBanner
                title="WEBSITE DEVELOPMENT."
                subPara={<>
                    Website development is the process of creating digital
                    platforms that represent your business online. <br />A well-designed
                    website combines functionality, performance, and user experience to
                    help businesses<br />attract customers and achieve their goals.

                </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    We create modern, responsive, and user-focused websites<br/>that help businesses establish a strong digital presence. Our<br/>websites are designed to engage visitors, build trust, and support<br/>long-term business growth.
                </>}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServicesOffered
                subtitle='SERVICES OFFERED'
                // para={<>
                //     Digital Marketing helps your business grow online through<br />strategic social, search and advertising channels. It boosts<br />visibility, strengthens engagement and drives consistent<br />results. Your brand becomes easier to find and faster to trust.
                // </>}
                services= {[
                    {
                        number: '01',
                        title: 'Business Websites',
                        text: 'Professional websites designed to showcase your business, services, and brand while creating a strong first impression.'
                    },
                    {
                        number: '02',
                        title: 'E-Commerce Websites',
                        text: 'Scalable online stores that provide seamless shopping experiences and support business growth.'
                    },
                    {
                        number: '03',
                        title: 'Custom Web Development',
                        text: 'Tailored website solutions built around your business requirements, functionality, and objectives.'
                },
                    {
                        number: '04',
                        title: 'Responsive Design',
                        text: 'Websites optimized for desktops, tablets, and mobile devices to ensure a consistent user experience.'
                    },
                    {
                        number: '05',
                        title: 'Website Maintenance',
                        text: 'Ongoing support, updates, performance improvements, and security management to keep your website running smoothly.'
                    },
                    // {
                    //     number: '06',
                    //     title: '',
                    //     text: ''
                    // },
                ]}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServiceHowDoWeWork 
                subtitle="DISCOVER. STRATEGIZE. BUILD. ELEVATE."
                title="HOW DO WE WORK."
                processSteps={[
                    {
                        id: "01",
                        title: "Discover & Understand",
                        desc: "Understanding your business goals, audience, and digital requirements.",
                        imgUrl: image1
                    },
                    {
                        id: "02",
                        title: "Plan & Design",
                        desc: "Creating user-focused designs that align with your brand.",
                        imgUrl: image2
                    },
                    {
                        id: "03",
                        title: "Develop & Launch",
                        desc: "Building responsive websites that deliver seamless experiences.",
                        imgUrl: image3
                    },
                    {
                        id: "04",
                        title: "Optimize & Grow",
                        desc: "Enhancing performance to support long-term business growth.",
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