import React from 'react'
import { useGLTF, Edges } from '@react-three/drei'

export function SimpleModel() {
  const { nodes, materials} = useGLTF('/assets/gl/simpleModel.glb')

  var edgesColor = 'black'
  console.log(nodes)
    return (
    <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          // material={materials['Grass']}
        >
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks.geometry}
          // material={materials['Rocks']}
        >
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leafs.geometry}
          // material={materials['Foliage']}
        >
          <Edges color={edgesColor} threshold={0.0001}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trunks.geometry}
          // material={materials['Trunk']}
        >
          <Edges color={edgesColor} threshold={1}></Edges>
        </mesh>
    </group>
  )
}

useGLTF.preload('/simpleModel.glb')
