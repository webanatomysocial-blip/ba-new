"use client";

import React from 'react'
import BlueButton from '../BlueButton'
import '../../css/HomeComponentsCss/GetInTouch.css'


export default function GetInTouch() {
    return (
        <div className='get-in-touch' id='contact'>
            <h2 className="get-in-touch-title">
                <span style={{ color: 'var(--white)' }}>READY TO BRING YOUR IDEAS TO</span><br />
                <span className="text-gradient-primary">
                    LIFE? LET’S CREATE SOMETHING<br />
                    IMPACTFUL TOGETHER.
                </span>
            </h2>

            <BlueButton
                text="Get In Touch"
                icon={true}
            />
        </div>
    )
}
