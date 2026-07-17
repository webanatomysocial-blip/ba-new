"use client";

import React from "react";
import "@/caseStudiesCss/InnerPageOverview.css";
import { FaSquare } from "react-icons/fa";
import BlueButton from "@/components/BlueButton";

export default function Overview({ aboutProject, sector, year, scope = [""], technology = [""], goals1, goals2, goals3, howWeHelped1, howWeHelped2, results, websiteUrl }) {
  return (
    <section className="inner-page-overview">
      <div className="overview-container">

        {/* Left Column */}
        <div className="overview-left">
          {/* <p className="clients-bullet">
            <FaSquare size={10} style={{ marginRight: '10px' }} />
            INFORMATION
          </p> */}
          <h2 className="overview-title">The Overview</h2>
          {/* <p className="overview-subtitle">
            Got something in mind? Let's<br />clear it up before we start.
          </p> */}
        </div>

        {/* Right Column */}
        <div className="overview-right">

          {/* Card 1: About Project */}
          <div className="inner-page-overview-card span-2">
            <h3 className="card-title">About Project</h3>
            <p className="card-text">
              {aboutProject}
            </p>
          </div>

          <div className="grid-columns">
            <div className="inner-page-overview-card">
              <h3 className="card-title">Sector</h3>
              <p className="card-text highlight">{sector}</p>
            </div>

            {/* Card 3: Year */}
            <div className="inner-page-overview-card">
              <h3 className="card-title">Year</h3>
              <p className="card-text highlight">{year}</p>
            </div>

            {/* Card 4: Scope */}
            <div className="inner-page-overview-card">
              <h3 className="card-title">Scope</h3>
              <ul className="card-text highlight">
                {scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Card 5: Technology */}
            <div className="inner-page-overview-card">
              <h3 className="card-title">Technology</h3>
              <ul className="card-text highlight">
                {technology.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Card 2: Sector */}


          {/* Card 6: The Goals */}
          <div className="inner-page-overview-card span-2">
            <h3 className="card-title">The Goals</h3>
            <div className="goals-content">
              <p className="card-text">
                {goals1}
              </p>
              <p className="card-text">
                {goals2}
              </p>
              <p className="card-text">
                {goals3}
              </p>
            </div>
          </div>

          {/* How We Helped */}
          <div className="inner-page-overview-card span-2">
            <h3 className="card-title">How We Helped</h3>
            <div className="goals-content">
              <p className="card-text">
                {howWeHelped1}
              </p>
              <p className="card-text">
                {howWeHelped2}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="inner-page-overview-card span-2">
            <h3 className="card-title">Results</h3>
            <div className="goals-content">
              <p className="card-text">
                {results}
              </p>
            </div>
          </div>

        </div>
      </div>

      {websiteUrl && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <BlueButton
            text={'View Website'}
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={true}
          />
        </div>
      )}
    </section>
  );
}
