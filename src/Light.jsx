import React from 'react'
import * as THREE from 'three'

export function Light({ lightIntensity, lightSwitch }) {
  var light = new THREE.DirectionalLight(0xc9e4ff)

  light.position.set(50, 50, -50)
  light.lookAt(0, 0, 0)
  light.castShadow = true
  light.shadow.mapSize.width = 4096
  light.shadow.mapSize.height = 4096

  let cameraDimension = 50
  light.shadow.camera.bottom = -cameraDimension
  light.shadow.camera.top = cameraDimension
  light.shadow.camera.left = -cameraDimension
  light.shadow.camera.right = cameraDimension
  light.shadow.camera.far = 100

  light.visible = lightSwitch
  light.intensity = lightIntensity
  
  return (
    <group>
      <primitive object={light} />;
    </group>
  )
}

export function NightLight({lightSwitch }) {
  var light = new THREE.SpotLight(0xc9e4ff, 1.3)

  let cameraDimension = 50
  light.shadow.camera.bottom = -cameraDimension
  light.shadow.camera.top = cameraDimension
  light.shadow.camera.left = -cameraDimension
  light.shadow.camera.right = cameraDimension
  light.shadow.camera.far = cameraDimension // 100

  light.position.set(0, 30, 0)
  light.lookAt(0, 0, 0)
  light.castShadow = true
  light.shadow.mapSize.width = 4096
  light.shadow.mapSize.height = 4096


  light.distance = cameraDimension
  light.decay = 2

  light.visible = lightSwitch
  
  return (
    <group>
      <primitive object={light} />;
    </group>
  )
}