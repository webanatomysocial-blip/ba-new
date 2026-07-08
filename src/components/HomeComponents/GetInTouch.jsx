"use client";

import React from 'react'
import BlueButton from '../BlueButton'
import '../../css/HomeComponentsCss/GetInTouch.css'


export default function GetInTouch() {
    return (
        <div className='get-in-touch' id='contact'>
            
            <h2 className="get-in-touch-title text-gradient-primary">
                READY TO BRING YOUR IDEAS TO
                <br />
                LIFE? LET’S CREATE SOMETHING
                <br />
                IMPACTFUL TOGETHER.
            </h2>

            <BlueButton
                text="Get In Touch"
                href="/contact-us"
                icon={true}
            />
        </div>
    )
}
