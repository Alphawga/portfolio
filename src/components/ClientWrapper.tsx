'use client';
import ParticleBackground from './ParticleBackground';
import Scene3D from './Scene3D';

export default function ClientWrapper() {
  return (
    <>
      <ParticleBackground />
      <div className="max-w-md mx-auto mt-12">
        <Scene3D />
      </div>
    </>
  );
} 