import React from 'react'
import { useFrame } from '@react-three/fiber'

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

export function ChangeCamera({ a, trigger }) {
  useFrame((state) => {
    if (trigger) {
      state.camera.position.set(-60, 7, -20)
      state.camera.lookAt(20, 6, -35)
    }
  })
}
