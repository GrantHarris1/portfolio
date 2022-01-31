import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import Box from '../components/Box';
import './Home.css';
import { OrbitControls } from '@react-three/drei';
import Sphere from '../components/AnimatedSphere';




export default function Home() {
  return (
    <div classname='home'>
    
    <h1>Grant Harris</h1>
    <h3>Click here to Enter</h3>
      {/* <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas> */}

      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>

      {/* <Canvas className='canvas2'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas> */}
    </div>
   
  );
};


