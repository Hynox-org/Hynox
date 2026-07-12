'use client';
import { Float, PresentationControls, Html } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function FloatingLottie() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetching an open-source Lottie animation representing a mobile app & communication
    // Note: If you have the exact .json file for the animation you showed, you can 
    // drop it in the /public folder and change this fetch to '/your-animation.json'
    fetch('https://raw.githubusercontent.com/xvrh/lottie-flutter/master/example/assets/Mobilo/A.json')
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading Lottie", err));
  }, []);

  return (
    <PresentationControls
      global
      rotation={[0.1, -0.1, 0]}
      polar={[-0.2, 0.2]}
      azimuth={[-0.5, 0.5]}
      snap={true}
    >
      <Float rotationIntensity={0.2} floatIntensity={2} speed={1.5}>
        <Html transform position={[0, 0, 0]} scale={1.5} distanceFactor={4} zIndexRange={[100, 0]}>
          <div style={{ width: '500px', height: '500px', pointerEvents: 'none', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
            {animationData ? (
              <Lottie animationData={animationData} loop={true} />
            ) : (
              <div style={{ color: '#a3a3a3', textAlign: 'center', marginTop: '200px', fontSize: '1rem' }}>
                Loading 3D Animation...
              </div>
            )}
          </div>
        </Html>
      </Float>
    </PresentationControls>
  );
}
