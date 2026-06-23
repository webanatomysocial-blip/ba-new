"use client";

import React, { useState } from "react";
import "../../css/caseStudiesCss/CSFaq.css";
import ProjectCarousel from "./ProjectCarousel";
import BlueButton from "@/components/BlueButton";
import { FaSquare } from "react-icons/fa";

export default function CSFaq() {
  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "We work on a diverse range of projects including comprehensive digital marketing, custom web design, brand identity systems, and high-performance Framer websites. Every project is tailored to our clients' unique goals.",
    },
    {
      question: "How long does a typical project take?",
      answer: "A standard web or branding project generally takes anywhere from 4 to 8 weeks, depending on complexity, deliverables, and revision cycles.",
    },
    {
      question: "Do you only design in Framer?",
      answer: "While Framer is one of our specialty tools for high-quality, animated web experiences, we also utilize robust stacks like Next.js, React, and other modern technologies based on your specific requirements.",
    },
    {
      question: "How do you approach digital strategy?",
      answer: "Our digital strategy is data-driven. We analyze your market, competitors, and target audience to craft custom marketing funnels and branding initiatives that deliver measurable growth.",
    },
    {
      question: "Can you help build a design system for my team?",
      answer: "Absolutely. We specialize in building scalable design systems that maintain visual consistency across all your products while accelerating your team's workflow.",
    },
    {
      question: "What is your process for collaboration?",
      answer: "We maintain close collaboration through weekly updates, structured feedback rounds, and open communication channels. You will be actively involved at key milestones to ensure alignment.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="cs-faq-section">
      <div className="cs-faq-header">
        <p className="cs-faq-tagline">
          <FaSquare size={10} color="white" />
          FAQ'S
        </p> 
      </div>

      <div className="cs-faq-body">
        <div className="cs-faq-list">
          {faqs.map((faq, index) => (
            <div className="cs-faq-item" key={index}>
              <button 
                className="cs-faq-question"
                onClick={() => toggleAccordion(index)}>
                <span>{faq.question}</span>
                <span className="plus-icon">{activeIndex === index ? "−" : "+"}</span>
              </button>

              <div className={`cs-faq-answer ${activeIndex === index ? "active" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cs-faq-cta-area">
          <ProjectCarousel />
          
          <div className="cs-faq-cta-text">
            <h3>Have a Project in Mind?</h3>
            <p>Let's turn your idea into a refined digital experience. Reach out and let's begin.</p>
            
            <BlueButton text="Let's Book a Call" href="/contact-us" icon={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
