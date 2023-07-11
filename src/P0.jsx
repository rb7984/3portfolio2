import React from 'react'
import { useGLTF } from '@react-three/drei'
import LightPopup from './LightPopup'

export function P0() {
  const { nodes, materials } = useGLTF('/assets/gl/p0.glb')

  return (
    <group>
      <LightPopup p = {[-39, 20, -23]}/>

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Object_1.geometry} material={materials.Plaster} />
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Plaster} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.p0_Wall} />
      </group>
    </group>
  )
}

useGLTF.preload('/p0.glb')
