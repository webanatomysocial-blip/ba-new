import Banner from "@/components/AboutComponents/Banner";
import AboutCTA from "@/components/AboutComponents/AboutCTA";
import AllServices from "@/components/ServiceComponents/AllServices";
import bannerimage from '@/assets/images/servicesImages/servicesBanner.png';

export const metadata = {
  title: "Services | BA",
  description: "Explore our creative and construction services.",
};

export default function ServicesPage() {
    return (
        <>
            <Banner 
                topHeading={<> Our <br /> Services. </>}       
                background={bannerimage} 
            />
            <AllServices />
            <AboutCTA />
        </>
    );
}
