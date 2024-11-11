'use client';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei/core/Text';
import { Suspense } from 'react';
import { Group } from 'three';

function WelcomeText() {
  return (
    <group position={[0, 0, 0]}>
      <Text
        position={[0, 0, 0]}
        fontSize={1}
        color="#4f46e5"
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
      >
        Welcome
      </Text>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <WelcomeText />
      </Suspense>
    </Canvas>
  );
} 