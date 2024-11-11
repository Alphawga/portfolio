'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectPreviewProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
}

export default function ProjectPreview({ title, image, demoUrl }: ProjectPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <iframe 
              src={demoUrl}
              className="w-full h-full"
              title={`Live preview of ${title}`}
            />
          </div>
        )}
      </div>
    </div>
  );
} 