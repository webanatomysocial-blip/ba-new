"use client";

import React, { useEffect, useRef } from 'react';
import { FaSquare } from 'react-icons/fa';
import '../../css/HomeComponentsCss/OurClients.css';
import client1 from '@/assets/images/HomeImages/secondsectionlogos/logo1.png';
import client11 from '@/assets/images/HomeImages/secondsectionlogos/logo11.png';
import client3 from '@/assets/images/HomeImages/secondsectionlogos/logo3.png';
import client4 from '@/assets/images/HomeImages/secondsectionlogos/logo4.png';
import client5 from '@/assets/images/HomeImages/secondsectionlogos/logo5.png';
import client6 from '@/assets/images/HomeImages/secondsectionlogos/logo6.png';
import client7 from '@/assets/images/HomeImages/secondsectionlogos/logo7.png';
import client8 from '@/assets/images/HomeImages/secondsectionlogos/logo8.png';
import client9 from '@/assets/images/HomeImages/secondsectionlogos/logo9.png';
import client10 from '@/assets/images/HomeImages/secondsectionlogos/logo10.png';
import client12 from '@/assets/images/HomeImages/secondsectionlogos/logo12.png';
import client13 from '@/assets/images/HomeImages/secondsectionlogos/logo13.png';
import client14 from '@/assets/images/HomeImages/secondsectionlogos/logo14.png';
import client15 from '@/assets/images/HomeImages/secondsectionlogos/logo15.png';

export default function OurClients() {
    // 10 items — rendered as 5 per row × 2 rows via CSS grid
    const clientImages = [
        { id: 1,  src: client1 },
        { id: 2,  src: client11 },
        { id: 3,  src: client3 },
        { id: 4,  src: client4 },
        { id: 5,  src: client5 },
        { id: 6,  src: client6 },
        { id: 7,  src: client7 },
        { id: 8,  src: client8 },
        { id: 9,  src: client9 },
        { id: 10, src: client10 },
    ];

    const imgRefs = useRef([]);

    // Wipe/swap animation
    useEffect(() => {
        const poolOfLogos = [
            client1, client11, client3, client4, client5, 
            client6, client7, client8, client9, client10,
            client12, client13, client14, client15
        ].map(c => c.src || c);

        const currentSrcs = clientImages.map(c => c.src.src || c.src);

        const swapLogo = () => {
            const idx = Math.floor(Math.random() * currentSrcs.length);
            const imgEl = imgRefs.current[idx];
            if (!imgEl) return;

            // Only pick from logos that are NOT currently displayed anywhere in the grid
            const available = poolOfLogos.filter(s => !currentSrcs.includes(s));
            if (available.length === 0) return;

            const next = available[Math.floor(Math.random() * available.length)];
            
            // Eagerly update tracking array to prevent any overlapping intervals from picking this logo
            currentSrcs[idx] = next;

            const wrapper = imgEl.closest('.client-item');
            if (wrapper) {
                wrapper.classList.add('wiping');
                setTimeout(() => {
                    imgEl.src = next;
                }, 300);
                setTimeout(() => {
                    wrapper.classList.remove('wiping');
                }, 650);
            } else {
                imgEl.src = next;
            }
        };

        const interval = setInterval(swapLogo, 1800);
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="ourClientsContainer">
            <div className="clients-header">
                <span className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    BRAND PARTNERS
                </span>
                <h2 className="head-text-white ">OUR CLIENTS</h2>
            </div>

            {/* 5 per row × 2 rows grid */}
            <div className="clients-grid">
                {clientImages.map((client, i) => (
                    <div className="client-item" key={client.id}>
                        <img
                            ref={el => imgRefs.current[i] = el}
                            src={client.src.src || client.src}
                            alt={`client ${client.id}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
