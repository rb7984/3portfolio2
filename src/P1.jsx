/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 p1.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function P1(props) {
  const { nodes, materials } = useGLTF('/assets/gl/p1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh geometry={nodes.Object_1.geometry} material={materials['Plaster.001']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_2.geometry} material={materials['Plaster.001']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Roof} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Roof} />
      </group>
    </group>
  )
}

useGLTF.preload('/p1.glb')
