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
      answer: "I work with startups, product teams, and brands on digital strategy, website design, interaction design, product experiences, and design systems.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary by scope, from a few weeks for smaller web interfaces to several months for full product design and system implementation.",
    },
    {
      question: "Do you only design in Framer?",
      answer: "No. While I use Framer when appropriate, my focus is on strategic outcomes, scalable design systems, and high-quality experiences across platforms.", 
    },
    {
      question: "How do you approach digital strategy?",
      answer: "I start with research, user analysis, and business goals to create frameworks and roadmaps that guide every design decision, ensuring alignment.",
    },
    {
      question: "Can you help build a design system for my team?",
      answer: "Yes. I create modular, scalable design systems with components, tokens, and documentation to maintain consistency across products and teams.",
    },
    { 
      question: "What is your process for collaboration?",
      answer: "I work closely with stakeholders, product managers, and developers through workshops, iterative prototyping, and feedback sessions to ensure the final design aligns with business and user needs.",
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
