import React from 'react'
import { useGLTF } from '@react-three/drei'
import LightPopup from './LightPopup'

export function P2() {
  const { nodes, materials } = useGLTF('/assets/gl/p2.glb')

  return (
    <group>
      <LightPopup p = {[14, 45, 21]}/>

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Object_1.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.po_Roof} />
      </group>
    </group>
  )
}

useGLTF.preload('/p2.glb')
