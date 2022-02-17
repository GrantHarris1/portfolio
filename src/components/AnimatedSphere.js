import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
  return (
    
  <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial 
      color="#FF3300" 
      attach="material"
      distort = {0.3}
      speed={3}
      roughness={0}
      />
  </Sphere>
  );
}
