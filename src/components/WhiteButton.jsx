"use client";

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../css/WhiteButton.css';
import Link from 'next/link';

export default function WhiteButton({ text, onClick, icon, href, ...props }) {
  const content = (
    <>
      <span className="white-button-text-wrapper">
        <span className="white-button-text-primary">{text}</span>
        <span className="white-button-text-secondary">{text}</span>
      </span>
      {icon && (
        <span className="white-button-icon-wrapper">
          <FaArrowRight size={14} className="white-button-icon" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="white-button" onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className="white-button" onClick={onClick} {...props}>
      {content}
    </button>
  );
}
