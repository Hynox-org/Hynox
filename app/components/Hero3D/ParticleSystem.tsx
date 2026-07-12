'use client';
import { Sparkles } from '@react-three/drei';

export default function ParticleSystem() {
  return (
    <group>
      <Sparkles count={150} scale={15} size={2} speed={0.4} opacity={0.3} color="#9333ea" />
      <Sparkles count={100} scale={15} size={3} speed={0.2} opacity={0.2} color="#60a5fa" />
      <Sparkles count={50} scale={15} size={4} speed={0.1} opacity={0.1} color="#ffffff" />
    </group>
  );
}
