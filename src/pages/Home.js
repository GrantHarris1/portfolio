import React from 'react';
import {Canvas} from '@react-three/fiber';
import Box from '../components/Box';
import './Home.css';
import { OrbitControls } from '@react-three/drei';

export default function Home() {
  return <Canvas className='canvas'>
    <OrbitControls  enableZoom={false}/>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-2, 5, 2]} intensity={1} />
    <Box />
  </Canvas>
}


