import dynamic from "next/dynamic";

import GredientScrollText from "@/components/HomeComponents/GredientScrollText";
import OverviewHome from "@/components/HomeComponents/OverviewHome";
import ServicesHomeBoxes from "@/components/HomeComponents/ServicesHomeBoxes";
import HomeBanner from "@/components/HomeComponents/HomeBanner";

const PinCardsHome = dynamic(() => import("@/components/HomeComponents/PinCardsHome"));
const HowDoWeWork = dynamic(() => import("@/components/HomeComponents/HowDoWeWork"));
const HomeVideoSection = dynamic(() => import("@/components/HomeComponents/HomeVideoSection"));
const OurClients = dynamic(() => import("@/components/HomeComponents/OurClients"));
const Faq = dynamic(() => import("@/components/Faq"));
const LetBaSpark = dynamic(() => import("@/components/HomeComponents/LetBaSpark"));
const GetInTouch = dynamic(() => import("@/components/HomeComponents/GetInTouch"));
const GlobalReach = dynamic(() => import("@/components/HomeComponents/GlobalReach"));

import "@/app/globals.css";

export const metadata = {
  title: "Home | Business Anatomy",
  description:
    "Business Anatomy builds and elevates digital brands through strategy, design, and innovation — digital marketing, web development, branding, and business growth consulting.",
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <GredientScrollText />
      <OverviewHome />
      <ServicesHomeBoxes />
      <PinCardsHome />
      <HowDoWeWork />
      <HomeVideoSection />
      <OurClients />
      <Faq />
      <LetBaSpark />
      <GetInTouch />
      <GlobalReach />
    </>
  );
}
