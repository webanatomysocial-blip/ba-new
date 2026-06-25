"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../css/HomeComponentsCss/Blogs.css';
import { blogsData } from '../../Blogs/MetaData';
import { FaSquare, FaArrowRight } from 'react-icons/fa';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const STRIP_COUNT = 4;

export default function Blogs() {
    const gridRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;
        if (typeof window !== 'undefined' && window.innerWidth <= 768) return;

        const cards = grid.querySelectorAll('.blog-image-wrapper');

        const ctx = gsap.context(() => {
            cards.forEach((wrapper, cardIdx) => {
                const strips = Array.from(wrapper.querySelectorAll('.blog-img-strip'));

                // Start: all strips at yPercent 0 (fully covering the image)
                gsap.set(strips, { yPercent: 0 });

                // Each strip at index i must travel (STRIP_COUNT - i) × 100% of its own
                // height to fully exit the wrapper bottom. Strip 0 → 400%, strip 1 → 300%, etc.
                const tl = gsap.timeline({
                    delay: cardIdx * 0.18,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });

                strips.forEach((strip, stripIdx) => {
                    const targetYPercent = (STRIP_COUNT - stripIdx) * 100;
                    tl.to(
                        strip,
                        {
                            yPercent: targetYPercent,
                            duration: 0.5,
                            ease: 'power2.inOut',
                        },
                        stripIdx * 0.08
                    );
                });
            });
        }, grid);

        return () => ctx.revert();
    }, []);

    return (
        <div className="blogs-container">
            {/* Standardized Header */}
            <div className="clients-header">
                <span className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    INSIGHTS
                </span>
                <h2 className="head-text-white">LATEST <span className='flip-second'>BLOGS</span></h2>
            </div>

            {/* Dynamic Blog Grid */}
            <div className="blogs-grid" ref={gridRef}>
                {blogsData.slice(0, 3).map((blog) => (
                    <Link href={`/blog?id=${blog.id}`} key={blog.id} className="blog-card" style={{ textDecoration: 'none' }}>
                        <div className="blog-image-wrapper">
                            <img src={blog.image.src || blog.image} alt={blog.title} />
                            {/* 4 black overlay strips — stacked top to bottom */}

                            {typeof window !== "undefined" && window.innerWidth > 768 &&
                            Array.from({ length: STRIP_COUNT }).map((_, i) => (
                                <div
                                    key={i}
                                    className="blog-img-strip"
                                    style={{ top: `${(100 / STRIP_COUNT) * i}%` }}
                                />
                            ))}
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="read-more-container">
                <Link href="/blogs" className="read-more-button">
                    Read More <FaArrowRight size={14} style={{ marginLeft: '8px' }} />
                </Link>
            </div>
        </div>
    );
}
