import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import LightPopup from './LightPopup'

export function P0(props) {
  const { nodes, materials } = useGLTF('/assets/gl/p0.glb')
  var ref = useRef();
  const [hovered, setHover] = useState()
  const[zoom, setZoom] = useState(false)

  useFrame((state) => {
    if (zoom)
    {
      state.camera.position.set(-60,7,-20);
      state.camera.lookAt(20,6,-35);
    }
  })

  return (
    <group 
    {...props}
    dispose={null}
    onPointerOver ={() => setHover(true)}
    onPointerLeave ={() => setHover(false)}
    onPointerDown = {() => setZoom(!zoom)}
    ref = {ref}
    >
      <LightPopup toggle={hovered} p = {[-39, 20, -23]}/>

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
