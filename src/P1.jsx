import React from 'react'
import { useGLTF} from '@react-three/drei'
import LightPopup from './LightPopup'
import * as THREE from 'three'

export function P1() {
  const { nodes, materials } = useGLTF('/assets/gl/p1.glb')

  const createEdgeLines = (geometry) => {
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 'black' })
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    return <primitive object={edges} />
  }

  return (
    <group>
      <LightPopup p = {[-23, 20, -5]}/>

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        {createEdgeLines(nodes.Object_1.geometry)}
        {createEdgeLines(nodes.Object_10.geometry)}
        {createEdgeLines(nodes.Object_11.geometry)}
        {createEdgeLines(nodes.Object_12.geometry)}
        {createEdgeLines(nodes.Object_13.geometry)}
        {createEdgeLines(nodes.Object_14.geometry)}
        {createEdgeLines(nodes.Object_15.geometry)}
        {createEdgeLines(nodes.Object_16.geometry)}
        {createEdgeLines(nodes.Object_17.geometry)}
        {createEdgeLines(nodes.Object_18.geometry)}
        {createEdgeLines(nodes.Object_19.geometry)}
        {createEdgeLines(nodes.Object_2.geometry)}
        {createEdgeLines(nodes.Object_20.geometry)}
        {createEdgeLines(nodes.Object_21.geometry)}
        {createEdgeLines(nodes.Object_22.geometry)}
        {createEdgeLines(nodes.Object_23.geometry)}
        {createEdgeLines(nodes.Object_24.geometry)}
        {createEdgeLines(nodes.Object_3.geometry)}
        {createEdgeLines(nodes.Object_4.geometry)}
        {createEdgeLines(nodes.Object_5.geometry)}
        {createEdgeLines(nodes.Object_6.geometry)}
        {createEdgeLines(nodes.Object_7.geometry)}
        {createEdgeLines(nodes.Object_8.geometry)}
        {createEdgeLines(nodes.Object_9.geometry)}

        <mesh castShadow receiveShadow geometry={nodes.Object_1.geometry} material={materials['Plaster.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials['Plaster.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.Roof} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.Roof} />
      </group>
    </group>
  )
}

useGLTF.preload('/p1.glb')

//Effetto carta
/* <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
  {Object.keys(nodes).map((nodeName, index) => {
    const geometry = nodes[nodeName].geometry;
    const material = materials[nodeName];
    return (
      <React.Fragment key={index}>
        {createEdgeLines(geometry)}
        <mesh castShadow receiveShadow geometry={geometry} material={material} />
      </React.Fragment>
    );
  })}
</group> */
