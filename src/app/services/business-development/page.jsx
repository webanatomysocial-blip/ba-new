import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/inner-service/business/business-banner.jpeg";
import WhatWeDoImage from "@/assets/images/servicesImages/inner-service/business/business-what-we-do.jpeg";
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
                title="BUSINESS DEVELOPMENT CONSULTANT"
                subPara={<>
                    Business consulting helps companies improve efficiency, solve challenges, and achieve goals.<br/>Consultants provide expert strategies, insights, and solutions to boost performance, growth,<br/>and profitability in today’s competitive business environment.
                </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    Business Consulting gives you clear guidance to solve challenges<br/>and improve operations. It strengthens decision-making and aligns<br/>your business with the right growth path. With expert support, you<br/>build stronger and scale smarter.
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
                        title: 'Strategic Planning',
                        text: 'Our Strategic Planning services help organizations define a clear direction for growth and success. We collaborate with businesses to identify goals, analyze market conditions, and design effective strategies that align with their vision.'
                    },
                    {
                        number: '02',
                        title: 'Process Improvement',
                        text: 'Our Process Improvement service focuses on enhancing efficiency and reducing operational costs across all business functions. We analyze existing workflows, identify bottlenecks, and implement effective strategies to boost productivity.'
                    },
                    {
                        number: '03',
                        title: 'Market Research',
                        text: 'Our Market Research service provides valuable insights to help organizations make informed decisions and stay competitive. We study market trends, consumer behavior, and competitor strategies to identify new opportunities and potential challenges.'
                },
                    {
                        number: '04',
                        title: 'Risk Consulting',
                        text: 'Our Risk Consulting service helps organizations manage uncertainty and make confident financial decisions. We assess potential risks, evaluate financial performance, and design strategies that ensure stability and long-term growth.'
                    },
                    {
                        number: '05',
                        title: 'Business Transformation',
                        text: 'Our Business Transformation service empowers organizations to adapt, innovate, and thrive in a rapidly changing market. We guide businesses through digital transformation, operational restructuring, and performance enhancement to achieve long-term success.'
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
                        title: "Discover & Diagnose",
                        desc: "Identifying opportunities that shape your business future.",
                        imgUrl: image1
                    },
                    {
                        id: "02",
                        title: "Strategize & Design",
                        desc: "Designing solutions aligned with your business goals.",
                        imgUrl: image2
                    },
                    {
                        id: "03",
                        title: "Implement & Transform",
                        desc: "Delivering strategies that create lasting impact.",
                        imgUrl: image3
                    },
                    {
                        id: "04",
                        title: "Evaluate & Evolve",
                        desc: "Refining performance for long-term business growth.",
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