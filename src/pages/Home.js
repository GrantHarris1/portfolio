import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import Box from '../components/Box';
import './Home.css';
import { OrbitControls } from '@react-three/drei';
import Sphere from '../components/AnimatedSphere';
import { Link } from 'react-router-dom';




export default function Home() {
  return (
    <div className='home'>
    
    <h1>Grant Harris</h1>
    <a href='/about'><h3>Click Here to Enter</h3></a>
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


