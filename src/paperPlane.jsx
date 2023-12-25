import { useGLTF, Edges } from '@react-three/drei'
import * as THREE from 'three'

<PaperPlane />

export function PaperPlane({ switchPaperSpace }) {
  const { nodes } = useGLTF('/assets/gl/paperPlane.glb')

  return (
    <group onClick={switchPaperSpace} rotation={[Math.PI / 2, 0, 0]} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'white' })}>
        <Edges color={'black'} threshold={1}></Edges>
      </mesh>
    </group>
  )
}

useGLTF.preload('/paperPlane.glb')