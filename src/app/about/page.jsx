import Banner from "@/components/AboutComponents/Banner";
import OurStory from "@/components/AboutComponents/OurStory";
import WhyUs from "@/components/AboutComponents/WhyUs";
import Numbers from "@/components/AboutComponents/Numbers";
import Mission from "@/components/AboutComponents/Mission";
import Team from "@/components/AboutComponents/Team";
import AboutCTA from "@/components/AboutComponents/AboutCTA";
import bannerimage from '@/assets/images/about-page/banner/aboutUsBanner.png';

export const metadata = {
  title: "About Us | BA",
  description: "Learn more about our mission, vision, and team at BA.",
};

export default function AboutPage() {
    return (
        <>
            <Banner 
                topHeading={<> About <br /> Us. </>}       
                background={bannerimage} 
            />
            <OurStory />
            <Mission />
            <WhyUs />
            <Numbers />
            
            <Team />
            <AboutCTA />
        </>
    );
}