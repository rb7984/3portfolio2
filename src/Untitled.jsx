/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 untitled.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Untitled(props) {
  const { nodes, materials } = useGLTF('/assets/gl/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={[5, 1, 5]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 2.13, 0]} />
    </group>
  )
}

useGLTF.preload('/untitled.glb')
