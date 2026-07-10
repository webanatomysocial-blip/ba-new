"use client";

import React from 'react';
import '../../css/HomeComponentsCss/LetBaSpark.css';
import BlueButton from '../BlueButton';
import SpiralSwiper from './SpiralSwiper';

export default function LetBaSpark() {
    return (
        <section className="let-ba-spark-section">
            <h2 className="let-ba-spark-title">
                LET <span style={{ color: '#512594' }}>BA </span>
                    SPARK YOUR<br/>
                    NEXT BIG MOVE.
            </h2> 

            <SpiralSwiper />
        </section>
    );
}
