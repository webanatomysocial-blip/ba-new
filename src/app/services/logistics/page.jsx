import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/inner-service/logistics/logistics-2.jpeg";
import WhatWeDoImage from "@/assets/images/servicesImages/inner-service/logistics/logistics-3.jpeg";
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
                title="LOGISTICS."
                subPara={<>
                    Our Logistics Services provide efficient transportation, warehousing, and supply chain<br/>solutions. We ensure timely delivery, streamlined operations, and cost-effective<br/>performance to help businesses run smoothly and enhance customer satisfaction.
                </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    Logistics ensures your products are sourced, handled,<br/>and delivered efficiently. It streamlines movement from<br/>supplier to destination with reliability. Smooth logistics<br/>keeps your business running without interruptions.
                </>}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServicesOffered
                subtitle='SERVICES OFFERED'
                para={null}
                services= {[
                    {
                        number: '01',
                        title: 'Courier Services',
                        text: 'Our Courier Services provide fast, reliable, and secure delivery of documents, parcels, and packages. With real time tracking, customers can monitor their shipments every step of the way.'
                    },
                    {
                        number: '02',
                        title: 'Freight Services',
                        text: 'Freight Services handle the transportation of large scale shipments efficiently and safely. Whether by road, air, or sea, we manage bulk cargo with careful planning, route optimization, and timely delivery.'
                    },
                    {
                        number: '03',
                        title: 'Warehousing Solutions',
                        text: 'Our Warehousing Solutions offer safe, organized, and flexible storage for businesses of all sizes. Equipped with advanced inventory management systems, we track goods in real-time, ensuring accuracy and accessibility.'
                    },
                    {
                        number: '04',
                        title: 'Distribution Management',
                        text: 'Distribution Management ensures your products reach the right place at the right time. We coordinate inventory movement from warehouses to retail outlets or directly to customers, optimizing routes and reducing delays.'
                    },
                    {
                        number: '05',
                        title: 'Last Mile Delivery',
                        text: 'Last Mile Delivery focuses on the final step of the logistics chain: getting products directly to the customer’s doorstep. We combine speed, accuracy, and reliability to ensure every order reaches its destination on time.'
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
                        title: "Planning & Coordination",
                        desc: "Designing logistics strategies that support business efficiency.",
                        imgUrl: image1
                    },
                    {
                        id: "02",
                        title: "Sourcing & Procurement",
                        desc: "Connecting businesses with reliable global supply networks.",
                        imgUrl: image2
                    },
                    {
                        id: "03",
                        title: "Shipment & Tracking",
                        desc: "Ensuring seamless movement through end-to-end visibility.",
                        imgUrl: image3
                    },
                    {
                        id: "04",
                        title: "Delivery & Optimization",
                        desc: "Optimising supply chains for long-term operational success.",
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