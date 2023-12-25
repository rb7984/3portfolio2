import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import skyTexture from './SkyNight.png'
import { useGLTF, Edges } from '@react-three/drei'

var skyDimensions = 200

export function Sky({ lightSwitch }) {
  const { scene } = useThree()

  // var color = lightSwitch ? '#9ec3ff' : '#3d367a'
  // '#9ec3ff' : '#ea9eff'

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

export function SimpleModel() {
  const { nodes, materials } = useGLTF('/assets/gl/simpleModel.glb')

  var blankMaterial = new THREE.MeshStandardMaterial({ color: 'white' })

  const [paperSpace, setPaperSpace] = useState(false);

  const switchPaperSpace = () => {
    setPaperSpace((paperSpace) => !paperSpace);
    console.log('click');
    console.log(paperSpace);
  };

  var edgesColor = paperSpace ? 'black' : 'white'

  return (
    <>
      <PaperPlane switchPaperSpace={switchPaperSpace} />

      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass.geometry}
          material={paperSpace ? blankMaterial : materials['Grass']}>
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks.geometry}
          material={paperSpace ? blankMaterial : materials['Rocks']}>
          <Edges color={edgesColor} threshold={0.0000005}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leafs.geometry}
          material={paperSpace ? blankMaterial : materials['Foliage']}>
          <Edges color={edgesColor} threshold={0.1}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trunks.geometry}
          material={paperSpace ? blankMaterial : materials['Trunk']}>
          <Edges color={edgesColor} threshold={20}></Edges>
        </mesh>
      </group>
    </>
  )
}

useGLTF.preload('/simpleModel.glb')

export function PaperPlane({ switchPaperSpace }) {
  const { nodes } = useGLTF('/assets/gl/paperPlane.glb')

  var blankMaterial = new THREE.MeshStandardMaterial({ color: 'white' })

  return (
    <group onClick={switchPaperSpace} rotation={[Math.PI / 2, 0, 0]} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={blankMaterial}>
        <Edges color={'black'} threshold={1}></Edges>
      </mesh>
    </group>
  )
}

useGLTF.preload('/paperPlane.glb')
