"use client";
import React, { useEffect, useRef, useState } from 'react'
import '@/css/AboutComponentsCss/Mission.css'
import mission from '../../assets/images/about-page/mission-vision/mission.avif'
import vision from '../../assets/images/about-page/mission-vision/vision.avif'

const tabs = [
  {
    id: 'mission',
    label: 'OUR MISSION',
    description:
      'Our mission is to provide reliable, high-quality, and customized cleaning solutions for homes, offices, and commercial spaces. With a team of skilled and dedicated cleaning professionals, we strive to create spotless, healthy, and welcoming environments through routine cleaning, deep cleaning, and specialized services.',
    additional:
      'We are committed to using eco-friendly products and advanced cleaning techniques to ensure every space is fresh, hygienic, and safe. At Cleanix, our goal is to deliver exceptional cleaning experiences that bring comfort, convenience, and peace of mind to every client.',
    image: mission,
  },
  { 
    id: 'vision',
    label: 'OUR VISION',
    description:
      'Our vision is to become a trusted leader in delivering professional, high-quality, and customized cleaning services for homes, offices, and commercial spaces. With a team of skilled and passionate cleaning experts, we aim to create cleaner, healthier, and comfortable environments through reliable maintenance, deep cleaning, and specialized cleaning solutions.',
    additional:
      'We strive to set new standards in the cleaning industry by using eco-friendly products and innovative cleaning techniques to maintain fresh, hygienic, and safe spaces. At Cleanix, our vision is to build lasting relationships through dependable service, customer satisfaction, and exceptional cleaning experiences that improve living.',
    image:  vision,
  },
]

export default function Mission() {
  const [activeTab, setActiveTab] = useState('mission')
  const [displayTab, setDisplayTab] = useState('mission')
  const [revealed, setRevealed] = useState(true)
  const animationTimer = useRef(null)

  useEffect(() => {
    if (activeTab === displayTab) {
      return
    }

    setRevealed(false)

    if (animationTimer.current) {
      window.clearTimeout(animationTimer.current)
    }

    animationTimer.current = window.setTimeout(() => {
      setDisplayTab(activeTab)
      setRevealed(true)
    }, 260)

    return () => {
      if (animationTimer.current) {
        window.clearTimeout(animationTimer.current)
      }
    }
  }, [activeTab, displayTab])

  const current = tabs.find(tab => tab.id === activeTab) ?? tabs[0]
  const displayed = tabs.find(tab => tab.id === displayTab) ?? tabs[0]

  return (
    <section className="mission-vision-section">
      <div className="mission-vision-grid">
        <div className="mission-vision-image-card">
          <div className={`mission-vision-image-wrapper ${revealed ? 'revealed' : 'hidden'}`}>
            <img
              src={displayed.image?.src || displayed.image || ""}
              alt={displayed.label}
              className="mission-vision-image"
            />
          </div>
        </div>

        <div className="mission-vision-content">
          <div className="mission-vision-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`mission-vision-tab sub-para-text ${tab.id === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mission-vision-copy">
            <p className="paragraph-text-white">{current.description}</p>
            <p className="paragraph-text-white">{current.additional}</p>
          </div>
        </div>
      </div>
      <div className="mission-lower-section">
        <div className="section-one">
            <p className="section-title sub-heading-white">Clarity</p>
            <p className="sub-para-text-white">Every element serves a purpose. Nothing is random.</p>
        </div>
        <div className="section-two">
            <p className="section-title sub-heading-white">Consistency</p>
            <p className="sub-para-text-white">We design systems that stay strong across every platform.</p>
        </div>
        <div className="section-three">
            <p className="section-title sub-heading-white">Precision</p>
            <p className="sub-para-text-white">Attention to detail defines every part of our process.</p>
        </div>
        <div className="section-four">
            <p className="section-title sub-heading-white">Collaboration</p>
            <p className="sub-para-text-white">We work closely with clients to build meaningful results.</p>
        </div>
        
      </div>
    </section>
  )
}
