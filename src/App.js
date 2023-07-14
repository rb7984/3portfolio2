import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
// import { Stats} from '@react-three/drei'
import React, { useState } from 'react'
import './index.css'
import './App.css'
// import { UpdateCamera } from './UpdateCamera'
import { Model } from './Model'
import { Light, NightLight } from './Light'
import { Plane, Sky } from './Environment'
import { P0 } from './P0'
import { P1 } from './P1'
import { P2 } from './P2'
import { Prop } from './Prop'
import { Page } from './Page'
import { UpdateCamera2 } from './UpdateCamera2'

function App() {
  var [track, setTrack] = useState(0)
  var [lightSwitch, setSwitch] = useState(true)
  var [lightSymbol, setLightSymbol] = useState('moon')
  var [lightIntensity, setLightIntensity] = useState(1)

  var projectsCount = 4
  var trackCounter = track % projectsCount

  var trackPlus = () => {
    setTrack(track + 1)
  }

  var trackMinus = () => {
    setTrack(track - 1)
  }

  var switchIntensity = () => {
    setSwitch(!lightSwitch)

    setLightSymbol(lightSwitch ? 'sun' : 'moon')

    setLightIntensity(lightSwitch ? 0.2 : 1)
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

  function BtnLight() {
    return (
      <div onClick={switchIntensity} className="btnNight">
        <div className={lightSymbol}></div>
      </div>
    )
  }

  return (
    <>
      <Canvas shadows dpr={(1, 1)}>
        {/* <Stats /> */}
        <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

        <UpdateCamera2 target={trackCounter} />

        <hemisphereLight visible={lightSwitch} intensity={0.6} />
        <Light lightIntensity={lightIntensity} lightSwitch={lightSwitch} />
        <NightLight lightSwitch={!lightSwitch} />

        <Model />
        <P0 />
        <P1 />
        <P2 />
        <Prop />
        <Plane />
        <Sky lightSwitch={lightSwitch} />
      </Canvas>

      {trackCounter !== 0 && <Page trackCounter={trackCounter} />}

      <BtnPrevious />
      <BtnNext />
      <BtnLight />
    </>
  )
}

export default App
