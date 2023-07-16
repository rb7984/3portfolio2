import { useFrame } from '@react-three/fiber'
import React from 'react'
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

const speedProportion = 3

export const UpdateCamera2 = React.memo(({ target }) => {
  const duration = 1.5 // Duration of the lerp animation in seconds
  let time = 0 // Elapsed time during the lerp animation

  useFrame((state, delta) => {
    if (target === 0) {
      const circularTime = Date.now() * 0.002 + 20
      const k = 0.1
      const f = 100

      state.camera.position.x = f * Math.sin(circularTime * k)
      state.camera.position.y = 50
      state.camera.position.z = f * Math.cos(circularTime * k)

      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    } else {
      const cameraStart = state.camera.position.clone()
      const cameraEnd = new THREE.Vector3(
        c[target - 1][0],
        c[target - 1][1],
        c[target - 1][2]
      )
      const targetStart =
        target === 1
          ? new THREE.Vector3(0, 0, 0)
          : new THREE.Vector3(
              t[target - 2][0],
              t[target - 2][1],
              t[target - 2][2]
            )
      const targetEnd = new THREE.Vector3(
        t[target - 1][0],
        t[target - 1][1],
        t[target - 1][2]
      )

      if (time <= duration) {
        // Perform lerp animation
        const t = time / duration
        const t1 = time / (duration / speedProportion)

        state.camera.position.lerpVectors(cameraStart, cameraEnd, t)

        if (time <= duration / speedProportion) {
          state.camera.lookAt(targetStart.lerp(targetEnd, t1))
        } else {
          state.camera.lookAt(targetEnd)
        }

        time += delta
      }
    }
  })

  return null
})
