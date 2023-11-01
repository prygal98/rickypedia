// CustomCursor.js
import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

export default function CustomCursor({ imageSrc }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        setPosition({ x: e.clientX + scrollX, y: e.clientY + scrollY });
      };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px`, backgroundImage: `url(${imageSrc})` }}
    ></div>
  );
}
