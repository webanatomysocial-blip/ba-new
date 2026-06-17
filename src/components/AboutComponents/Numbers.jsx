"use client";
import React, { useEffect, useRef } from 'react'
import '@/css/AboutComponentsCss/Numbers.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: '150+', label: 'Brands Transformed' },
  { value: '70%', label: 'Increase in Qualified Leads' },
  { value: '50%', label: 'Higher Conversion Rates' },
  { value: '90Days', label: 'See Measurable Growth' },
]

export default function Numbers() {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  const setItemRef = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el)
  }

  useEffect(() => {
    if (!sectionRef.current || !itemRefs.current.length) return

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Parallax effect on scroll
        itemRefs.current.forEach((item, index) => {
          const isEven = index % 2 === 0;
          gsap.fromTo(item, 
            { xPercent: isEven ? -10 : 10 },
            {
              xPercent: isEven ? -35 : 35,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: 0.75,
              }
            }
          );
        });
      });

      // Number counter on enter
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        once: true,
        onEnter: () => {
          itemRefs.current.forEach((item, idx) => {
            const span = item.querySelector('.numbers-value');
            if (!span) return;
            
            const full = stats[idx].value;
            const target = parseInt(full.match(/\d+/)?.[0] || 0, 10);
            const suffix = full.replace(/\d+/g, '');
            const obj = { val: 0 };

            gsap.to(obj, {
              val: target,
              duration: 1.6,
              ease: 'power1.out',
              onUpdate: () => {
                span.textContent = Math.floor(obj.val) + suffix;
              }
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="numbers-section" ref={sectionRef}>
      <div className="numbers-shell">
        <div className="numbers-divider" />

        <div className="numbers-row">
          {stats.map((stat, index) => (
            <div key={index} ref={setItemRef} className="numbers-item">
              <span className="numbers-value head-text-white" style={{fontSize: '65px'}}>{stat.value}</span>
              <span className="numbers-label sub-para-text-white">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="numbers-divider" />
      </div>
    </section>
  )
}
