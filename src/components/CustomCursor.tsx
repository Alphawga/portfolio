'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-blue-600/50 rounded-full pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div
        className="fixed w-8 h-8 border-2 border-blue-600/50 rounded-full pointer-events-none z-50 transition-transform duration-300"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  );
} 