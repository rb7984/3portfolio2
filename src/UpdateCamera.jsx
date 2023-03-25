import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

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

export function UpdateCamera({ target }) {
  var clock = new THREE.Clock()

  useFrame((state) => {
    if (target == 0) {
      const time = clock.getElapsedTime() + 20
      const k = 0.1
      const f = 100

      state.camera.position.x = f * Math.sin(time * k)
      state.camera.position.y = 50
      state.camera.position.z = f * Math.cos(time * k)

      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    } else {
      state.camera.position.x = c[target - 1][0]
      state.camera.position.y = c[target - 1][1]
      state.camera.position.z = c[target - 1][2]
      // state.camera.position.set(c[target][0], c[target][1], c[target][2])
      state.camera.lookAt(t[target - 1][0], t[target - 1][1], t[target - 1][2])
    }

    return null
  })

  return null
}
