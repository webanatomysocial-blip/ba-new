import DMBanner from "@/serviceInnerPages/DMBanner";
import DMBannerImage from "@/assets/images/servicesImages/digital-marketing/banner.avif";
import WhatWeDoImage from "@/assets/images/servicesImages/digital-marketing/what-we-do.avif";
import WhatWeDo from "@/serviceInnerPages/WhatWeDo";


export default function DigitalMarketingPage() {
    return (
        <>
            <DMBanner
                title="DIGITAL MARKETING."
                subPara={<>
                    We combine data, creativity, and strategy to help your business reach the right<br />audience — and keep them engaged.
                </>}
                bannerImage={DMBannerImage}
            />

            <WhatWeDo
                whatWeDoImage={WhatWeDoImage}
                subtitle='What We Do'
                subPara={<>
                    At BA, we believe impactful marketing is built on balance — where insight meets imagination, and performance meets<br />purpose. These four principles define how we<br />think and create.
                </>}
            />
        </>
    );
}