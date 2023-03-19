import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Prop(props) {
  const { nodes, materials } = useGLTF('/assets/gl/prop.glb')

  useFrame(({clock}) =>{


  }
  )


  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Object_1.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.po_Roof} />
      </group>
    </group>
  )
}

useGLTF.preload('/prop.glb')
