import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

function Light({toggle}) {
  var light = new THREE.PointLight(0xff0000, 0.4)

  light.position.set(-39, 20, -23)
  light.lookAt(0, 0, 0)
  light.castShadow = false
  var ph = new THREE.PointLightHelper(light)
  light.visible = false;

  if (toggle === true) 
  {
    // light.visible = true;
    ph.visible = true;
  }
  else
  {
    // light.visible = false;
    ph.visible = false;
  }

  return (
      <group>
          <primitive object={light} />;
          <primitive object={ph} />;
      </group>
  )
}

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
      <Light toggle={hovered}/>

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh geometry={nodes.Object_1.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.Object_2.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.po_Roof} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.po_Roof} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.p0_Wall} />
      </group>
    </group>
  )
}

useGLTF.preload('/p0.glb')
