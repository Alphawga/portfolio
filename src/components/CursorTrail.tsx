'use client';
import { useEffect, useState } from 'react';

interface Point {
  x: number;
  y: number;
  opacity: number;
}

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastPoint: { x: number; y: number } = { x: 0, y: 0 };
    const trailLength = 20;

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );

      lastPoint = { x: e.clientX, y: e.clientY };
    };

    const updateTrail = () => {
      setPoints(prevPoints => {
        const newPoints = [
          { x: lastPoint.x, y: lastPoint.y, opacity: 1 },
          ...prevPoints.slice(0, trailLength - 1)
        ].map((point, index) => ({
          ...point,
          opacity: 1 - (index / trailLength)
        }));
        return newPoints;
      });

      animationFrameId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener('mousemove', updateCursor);
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
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
    </>
  );
} 