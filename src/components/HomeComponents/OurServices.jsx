"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/HomeComponentsCss/OurServices.css";
import BlueButton from "@/components/BlueButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "01",
    title: "Digital Marketing\nStrategies",
    desc: "Campaigns that convert: content strategy, ads, funnels, SEO, and digital positioning tailored to growth.",
    tags: ["Strategy", "Creatives", "Analytics & Optimization"],
    video: "/videos/services/digitalMarketing.mp4",
    link: "/services/digital-marketing"
  },
  {
    id: "02",
    title: "Web\nDevelopment",
    desc: "Building scalable, high-performance web applications tailored to your business needs.",
    tags: ["Frontend", "Backend", "Performance"],
    video: "/videos/services/web.mp4",
    link: "/services/web-development"
  },
  {
    id: "03",
    title: "AI\nAutomation",
    desc: "Leveraging artificial intelligence to streamline operations, enhance productivity, and automate complex workflows.",
    tags: ["Machine Learning", "Workflow", "Integration"],
    video: "/videos/services/aiAutomation.mp4",
    link: "/services/ai-automation"
  },
  {
    id: "04",
    title: "Business Development\nConsultant",
    desc: "Strategic consulting to drive growth, expand markets, and optimize business processes for long-term success.",
    tags: ["Strategy", "Consulting", "Growth"],
    video: "/videos/services/Business.mp4",
    link: "/services/business-development"
  }
];

const OurServices = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  // Clear refs on each render to avoid duplicates in strict mode
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };


  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const cards = cardsRef.current.filter(Boolean);
        if (cards.length === 0) return;

        cards.forEach((card, index) => {
          const isLast = index === cards.length - 1;

          // Scale animation as cards stack
          if (!isLast) {
            gsap.to(card.querySelector(".service-card"), {
              scale: 1 - ((cards.length - 1 - index) * 0.05),
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top 85%",
                endTrigger: cards[cards.length - 1],
                end: "top 15%",
                scrub: true,
              },
            });
          }
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);
 
  return (
    <div className="our-services-container" ref={containerRef}>
      <div className="services-cards-wrapper">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card-container"
            ref={addToRefs}
            style={{ 
              zIndex: index + 10,
              top: `calc(15vh + ${index * 15}px)`
            }}
          >
            <div className="service-card">
              <div className="sc-content">
                <div className="sc-number">{service.id}</div>
                <div className="sc-text-col">
                  <h3 className="sc-title">
                    {service.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== service.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="sc-desc">{service.desc}</p>
                  
                  <div className="sc-tags">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="sc-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="sc-btn-wrapper">
                    <BlueButton text="Explore Now" href={service.link} icon={true} />
                  </div>
                </div>
              </div>

              <div className="sc-media-col">
                <div className="sc-video-wrapper">
                  <video
                    src={service.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="sc-video"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
