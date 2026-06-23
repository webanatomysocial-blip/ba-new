"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponentsCss/GredientScrollText.css";

import logo1 from '../../assets/images/HomeImages/secondsectionlogos/logo1.png';
import logo2 from '../../assets/images/HomeImages/secondsectionlogos/logo2.png';
import logo3 from '../../assets/images/HomeImages/secondsectionlogos/logo3.png';
import logo4 from '../../assets/images/HomeImages/secondsectionlogos/logo4.png';
import logo5 from '../../assets/images/HomeImages/secondsectionlogos/logo5.png';
import logo6 from '../../assets/images/HomeImages/secondsectionlogos/logo6.png';
import logo7 from '../../assets/images/HomeImages/secondsectionlogos/logo7.png';
import logo8 from '../../assets/images/HomeImages/secondsectionlogos/logo8.png';
import logo9 from '../../assets/images/HomeImages/secondsectionlogos/logo9.png';
import logo10 from '../../assets/images/HomeImages/secondsectionlogos/logo10.png';
import logo11 from '../../assets/images/HomeImages/secondsectionlogos/logo11.png';
import logo12 from '../../assets/images/HomeImages/secondsectionlogos/logo12.png';
import logo13 from '../../assets/images/HomeImages/secondsectionlogos/logo13.png';
import logo14 from '../../assets/images/HomeImages/secondsectionlogos/logo14.png';
import logo15 from '../../assets/images/HomeImages/secondsectionlogos/logo15.png';


// Import car image asset
import car1 from "@/assets/images/HomeImages/TextFadeSection/car1.avif";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const logosList = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14,logo15];

const GredientScrollText = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const plainChars = section.querySelectorAll(".char-span:not(.gradient-char)");
    const gradientChars = section.querySelectorAll(".gradient-char");
    const subContent = section.querySelector(".sub-content-container");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;



    if (prefersReducedMotion) {
      gsap.set(plainChars, { color: "#ffffff" });
      gsap.set(gradientChars, { color: "transparent" });
      gsap.set(subContent, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // 1. Stagger normal characters to white
      tl.to(plainChars, {
        color: "#ffffff",
        duration: 1.5,
        stagger: 0.04,
        ease: "power2.out",
      });

      // 2. Reveal gradient characters (color transparent reveals CSS gradient)
      tl.to(
        gradientChars,
        {
          color: "transparent",
          duration: 1.8,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=1.1" // Stagger overlap
      );

      // 3. Smoothly fade in subtitle & logos container without React state triggers (avoids layout jumping)
      tl.to(
        subContent,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6" // Overlay near the end of the text animations
      );
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, []);

  const textLines = [
    "Business Anatomy builds",
    "and elevates Digital",
    "Brands through strategy,",
    "design, and innovation.",
  ];

  const carouselCards = [
    {
      id: 1,
      category: "Brand Strategy & Vision",
      title: "AETHER DYNAMICS",
      desc: "Reimagining modern high-performance engineering through minimalist structural semantics and future-ready branding.",
      filterClass: "filter-monochrome",
    },
    {
      id: 2,
      category: "Digital UX & Design",
      title: "CHRONOS SYSTEM",
      desc: "Crafting beautiful timekeeping environments and immersive digital ecosystems that amplify product engagement.",
      filterClass: "filter-sunset",
    },
    {
      id: 3,
      category: "Innovation & Experience",
      title: "VORTEX SPATIAL",
      desc: "Pushing the boundaries of spatial interfaces and augmented brand architecture to inspire human connection.",
      filterClass: "filter-purple",
    },
  ];

  const nextSlide = () => {
    if (activeIndex < carouselCards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const getTrackTransform = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 30}px))`;
    }
    return `translateX(-${activeIndex * 430}px)`; // card width 400px + gap 30px
  };

  return (
    <div className="scroll-text-parent">
      {/* Sticky Text Reveal Section */}
      <section className="Text-Section" ref={sectionRef}>
        <video 
          className="bg-video"
          src="/videos/textScrollSectionHome/secondSection.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="sticky-wrapper">
          <div className="text-container">
            <h1 className="main-title">
              {textLines.map((line, lineIndex) => {
                const isGradientLine = lineIndex > 0;
                return (
                  <span key={lineIndex} className="line">
                    {line.split("").map((char, charIndex) => {
                      if (char === " ") {
                        return <span key={charIndex} className="space" />;
                      }
                      return (
                        <span
                          key={charIndex}
                          className={`char-span ${
                            isGradientLine ? "gradient-char" : ""
                          }`}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>

            {/* Subtitle and Partner Logos Row */}
            <div className="sub-content-container">
              <p className="text-subtitle">
                Turning bold visions into brands that inspire<br/>and thrive in the
                digital age.
              </p>

              <div className="logos-marquee-wrapper">
                <div className="logos-marquee-track">
                  {/* First copy */}
                  {logosList.map((logo, index) => (
                    <div key={`a-${index}`} className="partner-logo-wrapper" title={`Logo ${index + 1}`}>
                      <Image src={logo} alt={`logo${index + 1}`} width={150} />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {logosList.map((logo, index) => (
                    <div key={`b-${index}`} className="partner-logo-wrapper" title={`Logo ${index + 1}`}>
                      <Image src={logo} alt={`logo${index + 1}`} width={150} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default GredientScrollText;
