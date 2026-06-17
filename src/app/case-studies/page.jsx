import Banner from "@/components/AboutComponents/Banner";
import Projects from "@/components/caseStudies/Projects";
import CSFaq from "@/components/caseStudies/CSFaq";
import bannerimage from '@/assets/images/about-page/banner/aboutUsBanner.png';

export const metadata = {
  title: "Case Studies | BA",
  description: "Explore our successful projects and case studies.",
};

export default function CaseStudiesPage() {
    return (
        <>
            <Banner 
                topHeading={<> Our <br /> Work. </>}       
                background={bannerimage} 
            />
            <Projects />
            <CSFaq />
        </>
    );
}
