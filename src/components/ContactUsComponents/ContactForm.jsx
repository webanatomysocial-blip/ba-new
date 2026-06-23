"use client";

import { useState } from "react";
import "@/css/ContactUsCss/ContactForm.css";

import { GoArrowRight } from "react-icons/go";

const briefOptions = ["Website", "Branding", "Marketing", "Ads"];
const sourceOptions = ["Instagram", "Facebook", "Linkedin", "Friend", "Other"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brief: "",
    source: "",
    projectDetails: "",
  });

  const handleRadio = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="cf-wrap">
      <div className="cf-row">
        <span className="cf-num">01</span>
        <span className="cf-label">Your name</span>
        <input
          className="cf-input"
          type="text"
          name="name"
          placeholder="Jane Doe"
          value={formData.name}
          onChange={handleInput}
        />
      </div>

      <div className="cf-row">
        <span className="cf-num">02</span>
        <span className="cf-label">Email</span>
        <input
          className="cf-input"
          type="email"
          name="email"
          placeholder="jane@framer.com"
          value={formData.email}
          onChange={handleInput}
        />
      </div>

      <div className="cf-row">
        <span className="cf-num">03</span>
        <span className="cf-label">Brief on what you need?</span>
        <div className="cf-radio-group">
          {briefOptions.map((option) => (
            <div
              key={option}
              className={`cf-radio-item ${formData.brief === option ? "selected" : ""}`}
              onClick={() => handleRadio("brief", option)}
            >
              <div className="cf-radio-circle">
                <div className="cf-radio-dot" />
              </div>
              <span className="cf-radio-label">{option}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cf-row">
        <span className="cf-num">04</span>
        <span className="cf-label">Where did you hear about us?</span>
        <div className="cf-radio-group">
          {sourceOptions.map((option) => (
            <div
              key={option}
              className={`cf-radio-item ${formData.source === option ? "selected" : ""}`}
              onClick={() => handleRadio("source", option)}
            >
              <div className="cf-radio-circle">
                <div className="cf-radio-dot" />
              </div>
              <span className="cf-radio-label">{option}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cf-row cf-row--last">
        <span className="cf-num">05</span>
        <div className="cf-label-block">
          <span className="cf-label">Project details</span>
          <span className="cf-sublabel">
            Your project, goals, expectations,<br />success criteria
          </span>
        </div>
        <div className="cf-textarea-block">
          <textarea
            className="cf-textarea"
            name="projectDetails"
            placeholder="Write project details"
            value={formData.projectDetails}
            onChange={handleInput}
          />

          <button className="rollBtn" onClick={handleSubmit}>
            <span className="textWrapper">
              <span className="text top">Submit<span className="cf-arrow"><GoArrowRight /></span></span>
              
              <span className="text bottom">Submit<span className="cf-arrow"><GoArrowRight /></span></span>
            </span>
          </button>
          
        </div>
      </div>
    </div>
  );
}