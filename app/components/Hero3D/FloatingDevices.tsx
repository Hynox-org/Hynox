'use client';
import { Float, PresentationControls, RoundedBox } from '@react-three/drei';

// Stylized Abstract Laptop
function StylizedLaptop(props: any) {
  return (
    <group {...props}>
      {/* Base */}
      <RoundedBox args={[3, 0.1, 2]} radius={0.05} smoothness={4} position={[0, -0.05, 0]}>
        <meshPhysicalMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      {/* Screen */}
      <RoundedBox args={[3, 2, 0.1]} radius={0.05} smoothness={4} position={[0, 1, -1]} rotation={[-0.2, 0, 0]}>
        <meshPhysicalMaterial color="#222222" metalness={0.9} roughness={0.1} clearcoat={1} clearcoatRoughness={0.1} />
        {/* Glowing Screen surface */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshBasicMaterial color="#9333ea" transparent opacity={0.15} />
        </mesh>
      </RoundedBox>
    </group>
  );
}

// Stylized Abstract Phone
function StylizedPhone(props: any) {
  return (
    <group {...props}>
      <RoundedBox args={[1.2, 2.4, 0.15]} radius={0.1} smoothness={4}>
        <meshPhysicalMaterial color="#111111" metalness={0.8} roughness={0.2} />
        {/* Screen */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[1.1, 2.3]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
        </mesh>
      </RoundedBox>
    </group>
  );
}

export default function FloatingDevices() {
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      snap={true}
    >
      <Float rotationIntensity={0.4} floatIntensity={1.5} speed={1.5}>
        <StylizedLaptop position={[-1, -1, -2]} scale={0.8} rotation={[0.2, 0.5, -0.1]} />
      </Float>

      <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
        <StylizedPhone position={[2.5, 0, 1]} scale={1.2} rotation={[-0.2, -0.5, 0.1]} />
      </Float>
    </PresentationControls>
  );
}
