import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/inner-service/ai-auto/ai-auto-banner.jpeg";
import WhatWeDoImage from "@/assets/images/servicesImages/inner-service/ai-auto/ai-what-we-do.jpeg";

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
                title="AI AUTOMATION."
                subPara={<>
                    AI Automation uses intelligent technologies to automate repetitive tasks, improve<br />decision-making, and streamline business operations. It helps businesses work faster,<br />smarter, and more efficiently while allowing teams to focus on higher-value activities.
                </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    Our AI Automation services help businesses streamline operations,<br />automate repetitive tasks, and improve efficiency through intelligent<br/>solutions. We create smarter workflows that save time, reduce costs,<br/>and support business growth
                </>}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServicesOffered
                subtitle='SERVICES OFFERED'
                para={null}
                services= {[
                    {
                        number: '01',
                        title: 'AI Chatbots',
                        text: 'Our AI chatbots provide instant customer support, answer enquiries, and improve customer engagement around the clock. They help businesses deliver faster responses while reducing manual workloads.'
                    },
                    {
                        number: '02',
                        title: 'Workflow Automation',
                        text: 'We automate repetitive business processes such as approvals, notifications, data entry, and task management, improving efficiency and reducing operational delays.'
                    },
                    {
                        number: '03',
                        title: 'Lead Automation',
                        text: 'Our lead automation solutions capture, qualify, and nurture potential customers automatically, helping businesses improve response times and conversion opportunities.'
                    },
                    {
                        number: '04',
                        title: 'Customer Support Automation',
                        text: 'AI-powered support systems help manage customer enquiries, ticketing, and communication workflows, providing consistent service experiences.'
                    },
                    {
                        number: '05',
                        title: 'Reporting & Analytics',
                        text: 'Automated reporting solutions transform data into actionable insights, helping businesses make informed decisions with real-time performance tracking.'
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
                        title: "Analyze & Identify",
                        desc: "Understanding processes to uncover automation opportunities.",
                        imgUrl: image1
                    },
                    {
                        id: "02",
                        title: "Design & Integrate",
                        desc: "Building AI solutions tailored to your business needs.",
                        imgUrl: image2
                    },
                    {
                        id: "03",
                        title: "Automate & Optimize",
                        desc: "Implementing workflows that improve efficiency and performance.",
                        imgUrl: image3
                    },
                    {
                        id: "04",
                        title: "Scale & Evolve",
                        desc: "Continuously refining systems to support business growth.",
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