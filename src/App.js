import { Canvas } from '@react-three/fiber'
import { Stats, PerspectiveCamera } from '@react-three/drei'
import React, { useState } from 'react'
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
import { Prop } from './Prop'

function App() {
  var [track, setTrack] = useState(0)

  var trackPlus = () => {
    setTrack(track + 1)
    console.log(track)
  }

  var trackMinus = () => {
    setTrack(track - 1)
    console.log(track)
  }

  function BtnPrevious() {
    return (
      <div onClick={trackMinus} className="btnPrevious">
        <div className="arrow-left"></div>
      </div>
    )
  }

  function BtnNext() {
    return (
      <div onClick={trackPlus} className="btnNext">
        <div className="arrow-right"></div>
      </div>
    )
  }

  return (
    <>
      <Banner />
      <BtnPrevious />
      <BtnNext />

      <Canvas shadows dpr={(1, 1)}>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

        <UpdateCamera target={track % 4} />

        <hemisphereLight intensity={0.6} />
        <Light />

        <Model />
        <P0 />
        <P1 />
        <P2 />
        <Prop />
        <Plane />
        <Stats />
      </Canvas>
    </>
  )
}

export default App
