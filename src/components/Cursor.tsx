'use client';
import { useEffect, useState } from 'react';

interface Point {
  x: number;
  y: number;
  opacity: number;
}

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState<Point[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const trailLength = 20;

    const updateCursor = (e: MouseEvent) => {
      setIsVisible(true);
      const target = e.target as HTMLElement;
      const isPointerElement = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button';
      
      setIsPointer(isPointerElement);
      setPosition({ x: e.clientX, y: e.clientY });

      setPoints(prevPoints => {
        const newPoints = [
          { x: e.clientX, y: e.clientY, opacity: 1 },
          ...prevPoints.slice(0, trailLength - 1)
        ].map((point, index) => ({
          ...point,
          opacity: 1 - (index / trailLength)
        }));
        return newPoints;
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail */}
      {points.map((point, index) => (
        <div
          key={index}
          className={`fixed w-2 h-2 rounded-full pointer-events-none z-50 transition-transform duration-75
            ${isPointer ? 'bg-blue-400/30' : 'bg-blue-600/30'}`}
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: point.opacity,
            transform: isPointer ? 'scale(1.5)' : 'scale(1)',
          }}
        />
      ))}

      {/* Main Cursor */}
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