import Banner from "@/components/AboutComponents/Banner";
import ContactForm from "@/components/ContactUsComponents/ContactForm";
import bannerimage from '@/assets/images/about-page/banner/aboutUsBanner.png';
import AboutCTA from "@/components/AboutComponents/AboutCTA";

export const metadata = {
    title: "Contact Us | BA",
    description: "Get in touch with the Business Anatomy team.",
};

export default function ContactUsPage() {
    return (
        <>
            <Banner
                topHeading={<> Contact <br /> Us. </>}
                background={bannerimage}
            />
            <ContactForm />
            <AboutCTA />
        </>
    );
}
