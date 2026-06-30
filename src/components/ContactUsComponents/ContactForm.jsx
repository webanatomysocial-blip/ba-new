"use client";

import { useState } from "react";
import "@/css/ContactUsCss/ContactForm.css";
import { GoArrowRight } from "react-icons/go";

const briefOptions = ["Website", "Branding", "Marketing", "Ads"];
const sourceOptions = ["Instagram", "Facebook", "Linkedin", "Friend", "Other"];

// Point to wherever your PHP API is hosted.
// On production this would be e.g. https://yourdomain.com/api/send-email.php
const API_URL =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ||
  "/api/send-email.php";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brief: "",
    source: "",
    projectDetails: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleRadio = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.brief) newErrors.brief = "Please select a service.";
    if (!formData.source) newErrors.source = "Please tell us how you found us.";
    if (!formData.projectDetails.trim())
      newErrors.projectDetails = "Project details are required.";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("brief", formData.brief);
      body.append("source", formData.source);
      body.append("projectDetails", formData.projectDetails);

      const res = await fetch(API_URL, {
        method: "POST",
        body,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thank you! We'll be in touch soon.");
        setFormData({ name: "", email: "", brief: "", source: "", projectDetails: "" });
        setErrors({});
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="cf-wrap">
      {/* 01 — Name */}
      <div className="cf-row">
        <span className="cf-num">01</span>
        <span className="cf-label">Your name</span>
        <div className="cf-field-block">
          <input
            className={`cf-input ${errors.name ? "cf-input--error" : ""}`}
            type="text"
            name="name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleInput}
          />
          {errors.name && <span className="cf-error">{errors.name}</span>}
        </div>
      </div>

      {/* 02 — Email */}
      <div className="cf-row">
        <span className="cf-num">02</span>
        <span className="cf-label">Email</span>
        <div className="cf-field-block">
          <input
            className={`cf-input ${errors.email ? "cf-input--error" : ""}`}
            type="email"
            name="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleInput}
          />
          {errors.email && <span className="cf-error">{errors.email}</span>}
        </div>
      </div>

      {/* 03 — Brief */}
      <div className="cf-row">
        <span className="cf-num">03</span>
        <span className="cf-label">Brief on what you need?</span>
        <div className="cf-field-block">
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
          {errors.brief && <span className="cf-error">{errors.brief}</span>}
        </div>
      </div>

      {/* 04 — Source */}
      <div className="cf-row">
        <span className="cf-num">04</span>
        <span className="cf-label">Where did you hear about us?</span>
        <div className="cf-field-block">
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
          {errors.source && <span className="cf-error">{errors.source}</span>}
        </div>
      </div>

      {/* 05 — Project Details + Submit */}
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
            className={`cf-textarea ${errors.projectDetails ? "cf-input--error" : ""}`}
            name="projectDetails"
            placeholder="Write project details"
            value={formData.projectDetails}
            onChange={handleInput}
          />
          {errors.projectDetails && (
            <span className="cf-error">{errors.projectDetails}</span>
          )}

          {/* Status message */}
          {status === "success" && (
            <p className="cf-status cf-status--success">{message}</p>
          )}
          {status === "error" && (
            <p className="cf-status cf-status--error">{message}</p>
          )}

          <button
            className={`rollBtn ${status === "loading" ? "rollBtn--loading" : ""}`}
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            <span className="textWrapper">
              <span className="text top">
                {status === "loading" ? "Sending…" : "Submit"}
                <span className="cf-arrow"><GoArrowRight /></span>
              </span>
              <span className="text bottom">
                {status === "loading" ? "Sending…" : "Submit"}
                <span className="cf-arrow"><GoArrowRight /></span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}