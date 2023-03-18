import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import './index.css'
import './App.css'
import { UpdateCamera } from './UpdateCamera'
import { Banner } from './Banner'
import { Model } from './Model'
import { Light } from './Light'
import { Plane } from './Plane'
import { P0 } from './P0'
import { P1 } from './P1'
import { P2 } from './P2'

function App() {
  return (
    <>
      <Banner />
      <Canvas shadows dpr={(1, 1)}>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

        <UpdateCamera />
        <hemisphereLight intensity={0.6} />
        <Light />

        <Model />
        <P0 />
        <P1 />
        <P2 />
        <Plane />
      </Canvas>
    </>
  )
}

export default App
