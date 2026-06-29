import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/digital-marketing/banner.avif";
import WhatWeDoImage from "@/assets/images/servicesImages/digital-marketing/what-we-do.avif";
import WhatWeDo from "@/serviceInnerPages/WhatWeDo";
import ServicesOffered from '@/serviceInnerPages/ServicesOffered'
import HowDoWeWork from "@/components/HomeComponents/HowDoWeWork";
import ThreeServices from '@/serviceInnerPages/ThreeServices';


export default function DigitalMarketingPage() {
    return (
        <>
            <DMBanner
                title="DIGITAL MARKETING."
                // subPara={<>
                //     We combine data, creativity, and strategy to help your business reach the right<br />audience — and keep them engaged.
                // </>}
                bannerImage={DMBannerImage}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='WHAT WE DO'
                subPara={<>
                    Digital marketing promotes brands online using SEO,<br />social media, email, and ads to boost visibility, engagement,<br />and business growth.
                </>}
            />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ServicesOffered
                subtitle='SERVICES OFFERED'
                para={<>
                    Digital Marketing helps your business grow online through<br />strategic social, search and advertising channels. It boosts<br />visibility, strengthens engagement and drives consistent<br />results. Your brand becomes easier to find and faster to trust.
                </>}
                services= {[
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

            <HowDoWeWork />

            <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '0 20px' }} />

            <ThreeServices />

        </>
    );
}