"use client";

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import '../../css/HomeComponentsCss/SpiralSwiper.css';

import swiper1 from '@/assets/images/HomeImages/spiralSwiper/swiper1.jpg'
import swiper2 from '@/assets/images/HomeImages/spiralSwiper/swiper2.jpg'
import swiper3 from '@/assets/images/HomeImages/spiralSwiper/swiper3.jpg'
import swiper4 from '@/assets/images/HomeImages/spiralSwiper/swiper4.jpg'
import swiper5 from '@/assets/images/HomeImages/spiralSwiper/swiper5.jpg'
import swiper6 from '@/assets/images/HomeImages/spiralSwiper/swiper6.jpg'
import swiper7 from '@/assets/images/HomeImages/spiralSwiper/swiper7.jpg'
import swiper8 from '@/assets/images/HomeImages/spiralSwiper/swiper8.jpg'
import swiper9 from '@/assets/images/HomeImages/spiralSwiper/swiper9.png'
import swiper10 from '@/assets/images/HomeImages/spiralSwiper/swiper10.jpg'
import swiper11 from '@/assets/images/HomeImages/spiralSwiper/swiper11.jpg'
import swiper12 from '@/assets/images/HomeImages/spiralSwiper/swiper12.jpg'

const ARTWORKS = [
    swiper1,
    swiper2,
    swiper3,
    swiper4,
    swiper5,
    swiper6,
    swiper7,
    swiper8,
    swiper9,
    swiper10,
    swiper11,
    swiper12
];

const SLIDE_COUNT = 12;
const ANGLE_STEP = 360 / SLIDE_COUNT;
const START_ANGLE = 0;

export default function SpiralSwiper() {
    const outerRef = useRef(null);
    const wrapperRef = useRef(null);
    const rafId = useRef(null);
    const scrollPrevY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
    const scrollTimeout = useRef(null);

    // Physics and interaction state kept outside of React rendering cycle
    const state = useRef({
        wrapperRotation: 0,
        activeIndex: 0,
        isDragging: false,
        dragStartX: 0,
        rotAtDragStart: 0,
        velocity: 0,
        prevX: 0,
        prevTime: 0,
        // flag for one‑time scroll animation when section becomes visible
        hasAnimated: false,
        // target rotation for the 180° scroll animation
        targetRotation: null,
        // flag indicating scroll interaction ongoing
        isScrolling: false
    });

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const render = () => {
            if (!wrapper) return;
            wrapper.style.transform = `rotateY(${state.current.wrapperRotation.toFixed(4)}deg)`;

            let min = Infinity;
            for (let i = 0; i < SLIDE_COUNT; i++) {
                const slideWorldAngle = state.current.wrapperRotation + i * ANGLE_STEP;
                const d = Math.abs((((slideWorldAngle % 360) + 540) % 360) - 180);
                if (d < min) {
                    min = d;
                    state.current.activeIndex = i;
                }
            }
        };

        const loop = () => {
            if (!state.current.isDragging) {
                if (Math.abs(state.current.velocity) > 0.05) {
                    // Inertia coast
                    state.current.wrapperRotation += state.current.velocity;
                    state.current.velocity *= 0.93;
                    render();
                } else {
                    // Preserve rotation after scroll; no automatic snapping
                    if (!state.current.isScrolling) {
                        // Ensure visual consistency
                        render();
                    }
                }
            }

            rafId.current = requestAnimationFrame(loop);
        };

        render();
        loop();

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Drag Interaction Handlers
    useLayoutEffect(() => {
        const outer = outerRef.current;
        if (!outer) return;

        const getX = (e) => e.touches ? e.touches[0].clientX : e.clientX;

        const onDragStart = (e) => {
            state.current.isDragging = true;
            state.current.dragStartX = getX(e);
            state.current.rotAtDragStart = state.current.wrapperRotation;
            state.current.velocity = 0;
            state.current.prevX = state.current.dragStartX;
            state.current.prevTime = performance.now();
        };

        const onDragMove = (e) => {
            if (!state.current.isDragging) return;
            const x = getX(e);
            const dx = x - state.current.dragStartX;
            const now = performance.now();
            const dt = now - state.current.prevTime || 1;

            state.current.wrapperRotation = state.current.rotAtDragStart + dx * 0.25;
            state.current.velocity = ((x - state.current.prevX) * 0.25) / (dt / 16.667);

            state.current.prevX = x;
            state.current.prevTime = now;

            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `rotateY(${state.current.wrapperRotation.toFixed(4)}deg)`;
            }
        };

        const onDragEnd = () => {
            if (!state.current.isDragging) return;
            state.current.isDragging = false;
            const MAX_V = 14;
            state.current.velocity = Math.max(-MAX_V, Math.min(MAX_V, state.current.velocity));
        };

        outer.addEventListener("mousedown", onDragStart);
        window.addEventListener("mousemove", onDragMove);
        window.addEventListener("mouseup", onDragEnd);

        outer.addEventListener("touchstart", onDragStart, { passive: true });
        window.addEventListener("touchmove", onDragMove, { passive: true });
        window.addEventListener("touchend", onDragEnd);

        return () => {
            outer.removeEventListener("mousedown", onDragStart);
            window.removeEventListener("mousemove", onDragMove);
            window.removeEventListener("mouseup", onDragEnd);

            outer.removeEventListener("touchstart", onDragStart);
            window.removeEventListener("touchmove", onDragMove);
            window.removeEventListener("touchend", onDragEnd);
        };
    }, []);

    // Scroll‑linked rotation effect (delta based, throttled to one write per frame)
    useLayoutEffect(() => {
        let scrollRafId = null;

        const applyScrollRotation = () => {
            scrollRafId = null;
            if (state.current.isDragging) return;
            const currentY = window.scrollY;
            const delta = currentY - scrollPrevY.current;
            // Apply rotation based on scroll delta
            const rotationDelta = delta * 0.07; // same speed factor
            state.current.wrapperRotation += rotationDelta;
            scrollPrevY.current = currentY;
            // Mark scrolling state
            state.current.isScrolling = true;
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => { state.current.isScrolling = false; }, 200);
            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `rotateY(${state.current.wrapperRotation.toFixed(4)}deg)`;
            }
        };

        const handleScroll = () => {
            // Coalesce rapid-fire scroll events (Lenis/gsap ticker) into one write per frame
            if (scrollRafId !== null) return;
            scrollRafId = requestAnimationFrame(applyScrollRotation);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollRafId !== null) cancelAnimationFrame(scrollRafId);
        };
    }, []);


    // Trigger one‑time 180° rotation when section becomes visible
    useLayoutEffect(() => {
        const outer = outerRef.current;
        if (!outer) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start a new 180° rotation from current rotation
                    state.current.targetRotation = state.current.wrapperRotation + 180;
                } else {
                    // Reset target when leaving viewport to allow next entry
                    state.current.targetRotation = null;
                }
            });
        }, { threshold: 0.3 });
        observer.observe(outer);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="swiper-outer-container" ref={outerRef}>
            <div className="images-wrapper" ref={wrapperRef}>
                {ARTWORKS.map((src, i) => {
                    const angle = START_ANGLE + i * ANGLE_STEP;
                    return (
                        <div
                            key={i}
                            className="spiral-slide"
                            style={{ transform: `rotateY(${angle}deg)` }}
                        >
                            <Image
                                src={src}
                                alt={`Artwork ${i + 1}`}
                                fill
                                draggable={false}
                                sizes="(max-width: 768px) 150px, 330px"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}