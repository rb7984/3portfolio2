import React, {useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function P2(props) {
  const { nodes, materials } = useGLTF('/assets/gl/p2.glb')

  const [hovered, setHover] = useState()
  const[zoom, setZoom] = useState(false)

  useFrame((state) => {
    if (zoom)
    {
      state.camera.position.set(-5,35,5);
      state.camera.lookAt(40,35,40);
    }
  })

  return (
    <group
    {...props}
    dispose={null}
    onPointerOver ={() => setHover(true)}
    onPointerLeave ={() => setHover(false)}
    onPointerDown = {() => setZoom(!zoom)}
    >
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
