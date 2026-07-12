'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingLottie from './FloatingLottie';
import DashboardWidgets from './DashboardWidgets';
import ParticleSystem from './ParticleSystem';

export default function HeroScene() {
  return (
    <div className="hero-canvas-container">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#9333ea" />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#60a5fa" />
          
          <Environment preset="city" />
          
          <ParticleSystem />
          <FloatingLottie />
          <DashboardWidgets />
          
          <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
