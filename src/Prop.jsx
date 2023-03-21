import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Prop(props) {
  const { nodes, materials } = useGLTF('/assets/gl/prop.glb')
  const ref = useRef();

  useFrame(({clock}) =>{
    var a = clock.getElapsedTime()/2;
    
    ref.current.position.x = 2.5 * Math.sin(a) + 2.5;
    ref.current.position.y = 8.5 * Math.sin(a) + 8.5;
    ref.current.position.z = 11.5 * Math.sin(a) + 11.5;
  }
  )

  return (
    <group {...props} ref = {ref} dispose={null}>

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Object_1.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.po_Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.po_Roof} />
      </group>
    </group>
  )
}

useGLTF.preload('/prop.glb')
