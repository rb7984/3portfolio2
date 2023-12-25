import React from 'react'
import { useGLTF, Edges } from '@react-three/drei'
import LightPopup from './LightPopup'
import * as THREE from 'three'

var blankMaterial = [
  new THREE.MeshStandardMaterial({ color: '#f2f2f2' }),
  new THREE.MeshStandardMaterial({ color: '#d1d1d1' }),
  new THREE.MeshStandardMaterial({ color: '#ababab' }),
  new THREE.MeshStandardMaterial({ color: '#787878' }),
  new THREE.MeshStandardMaterial({ color: '#636363' })
]

export function P0({ paperSpace }) {
  const { nodes, materials } = useGLTF('/assets/gl/p0.glb')

  var edgesColor = paperSpace ? 'black' : 'white'

  return (
    <group>
      <LightPopup p={[-39, 20, -23]} />

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.P0_Walls.geometry}
          material={paperSpace ? blankMaterial[0] : materials['P0_Wall']}>
          <Edges color={edgesColor} threshold={0.1}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.P0_Roof.geometry}
          material={paperSpace ? blankMaterial[1] : materials['P0_Roof']}>
          <Edges color={edgesColor} threshold={0.1}></Edges>
        </mesh>
      </group>
    </group>
  )
}

export function P1({paperSpace}) {
  const { nodes, materials } = useGLTF('/assets/gl/p1.glb')

  var edgesColor = paperSpace ? 'black' : 'white'

  return (
    <group>
      <LightPopup p={[-23, 20, -5]} />

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.P1_Blocks.geometry}
          material={paperSpace ? blankMaterial[2] : materials['P1_Blocks']}>
          <Edges color={edgesColor} threshold={0.1}></Edges>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/p0.glb')

useGLTF.preload('/p1.glb')
