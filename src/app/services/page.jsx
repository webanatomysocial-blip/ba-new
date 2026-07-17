import Banner from "@/components/AboutComponents/Banner";
import AboutCTA from "@/components/AboutComponents/AboutCTA";
import AllServices from "@/components/ServiceComponents/AllServices";
import bannerimage from '@/assets/images/servicesImages/servicesBanner.png';
import OurServices from "@/components/HomeComponents/OurServices";

export const metadata = {
  title: "Services | BA",
  description: "Explore our creative and construction services.",
};

export default function ServicesPage() {
    return (
        <>
            <Banner 
                topHeading={<> Our  <br className="desktop-br" />  Services. </>}       
                background={bannerimage} 
            />
            {/* <AllServices /> */}
            <OurServices />
            <AboutCTA />
        </>
    );
}
