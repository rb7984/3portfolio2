import { useEffect} from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Edges } from '@react-three/drei'
import * as THREE from 'three'

import skyTexture from './SkyNight.png'

var skyDimensions = 115

export function Sky({ lightSwitch }) {
  const { scene } = useThree()

  useEffect(() => {
    const material = new THREE.MeshBasicMaterial()

    if (lightSwitch) {
      var color = '#9ec3ff'
      material.color = new THREE.Color(color)
      scene.background = new THREE.Color(color)
    } else {
      const textureLoader = new THREE.TextureLoader()

      const texture = textureLoader.load(skyTexture)
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(20, 20) // Adjust the repeat values as needed

      material.map = texture
      material.side = THREE.BackSide
      scene.background = null
    }

    const skyGeometry = new THREE.SphereGeometry(skyDimensions, 32, 32)
    const skyMesh = new THREE.Mesh(skyGeometry, material)

    scene.add(skyMesh)

    return () => {
      scene.remove(skyMesh)
    }
  }, [lightSwitch, scene])

  return null
}

export function Plane() {
  var geo = new THREE.CircleGeometry(skyDimensions)
  var mat = new THREE.MeshStandardMaterial({
    color: '#acbfbe'
    // '#cef5f3'
    // side: THREE.DoubleSide
  })
  var plane = new THREE.Mesh(geo, mat)
  plane.rotateX(-Math.PI / 2)
  plane.translateY(1)
  plane.receiveShadow = true
  return <primitive object={plane} />
}

export function SimpleModel({paperSpace}) {
  const { nodes, materials } = useGLTF('/assets/gl/simpleModel.glb')

  var blankMaterial = [
    new THREE.MeshStandardMaterial({ color: '#f2f2f2' }),
    new THREE.MeshStandardMaterial({ color: '#d1d1d1' }),
    new THREE.MeshStandardMaterial({ color: '#ababab' }),
    new THREE.MeshStandardMaterial({ color: '#787878' }),
    new THREE.MeshStandardMaterial({ color: '#636363' })
  ]

  var edgesColor = paperSpace ? '#2e2e2e' : 'white'

  return (
    <>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          material={paperSpace ? blankMaterial[0] : materials['Grass']}>
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks.geometry}
          material={paperSpace ? blankMaterial[2] : materials['Rocks']}>
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leafs.geometry}
          material={paperSpace ? blankMaterial[4] : materials['Foliage']}>
          <Edges color={edgesColor} threshold={0.1}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trunks.geometry}
          material={paperSpace ? blankMaterial[1] : materials['Trunk']}>
          <Edges color={edgesColor} threshold={20}></Edges>
        </mesh>
      </group>
    </>
  )
}

useGLTF.preload('/simpleModel.glb')
