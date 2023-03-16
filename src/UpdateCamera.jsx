import {  useFrame } from '@react-three/fiber'
import * as THREE from 'three'

var rotationSwitch = true

export function UpdateCamera() {
  var clock = new THREE.Clock()

  useFrame((state) => {
    if (rotationSwitch) {
      const time = clock.getElapsedTime() + 20
      const k = 0.1
      const f = 100

      state.camera.position.x = f * Math.sin(time * k)
      state.camera.position.y = 50
      state.camera.position.z = f * Math.cos(time * k)

      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    }

    return null
  })

  return null
}