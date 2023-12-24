import React from 'react'
import { useGLTF, Edges } from '@react-three/drei'

export function SimpleModel() {
  const { nodes, materials} = useGLTF('/assets/gl/simpleModel.glb')

  var edgesColor = 'white'
  console.log(nodes)
    return (
    <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          material={materials['Blue.001']}
        >
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks.geometry}
          material={materials['Roccia.001']}
        >
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
    </group>
  )
}

useGLTF.preload('/simpleModel.glb')
