import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

var rotationSwitch = true

const c = [
  [-60, 7, -20],
  [-42, 10, 3],
  [-5, 35, 5]
]
const t = [
  [20, 6, -35],
  [-30, 7, -2],
  [40, 35, 40]
]


export function UpdateCamera({target, trigger}) {
  var clock = new THREE.Clock()

  // rotationSwitch = trigger

  useFrame((state) => {
    if (trigger) {
      const time = clock.getElapsedTime() + 20
      const k = 0.1
      const f = 100

      state.camera.position.x = f * Math.sin(time * k)
      state.camera.position.y = 50
      state.camera.position.z = f * Math.cos(time * k)

      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    }
    else
    {
      state.camera.position.set(c[target])
      state.camera.lookAt(t[target])
    }

    return null
  })


  console.log(target + trigger)
  
  return null
}
