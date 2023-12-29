import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useGLTF, Edges, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

import skyTexture from './SkyNight.png'
import bannerTexture from './banner.png'

var skyDimensions = 115

var blankMaterial = [
  new THREE.MeshStandardMaterial({ color: '#f2f2f2' }),
  new THREE.MeshStandardMaterial({ color: '#d1d1d1' }),
  new THREE.MeshStandardMaterial({ color: '#ababab' }),
  new THREE.MeshStandardMaterial({ color: '#787878' }),
  new THREE.MeshStandardMaterial({ color: '#636363' })
]

export function Sky({ paperSpace, lightSwitch }) {
  const { scene } = useThree()

  useEffect(() => {
    const material = new THREE.MeshBasicMaterial()

    if (lightSwitch) {
      material.color = new THREE.Color(paperSpace ? '#c9c9c9' : '#b0e1ff')
      scene.background = new THREE.Color(paperSpace ? '#c9c9c9' : '#b0e1ff')
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
  }, [paperSpace, lightSwitch, scene])

  return null
}

// export function Plane({ paperSpace }) {
//   var geo = new THREE.CircleGeometry(skyDimensions)
//   var mat = new THREE.MeshStandardMaterial({
//     color: paperSpace ? '#2e2e2e' : '#1659c4'
//   })
//   var plane = new THREE.Mesh(geo, mat)
//   plane.rotateX(-Math.PI / 2)
//   plane.translateY(1)
//   plane.receiveShadow = true
//   return <primitive object={plane} />
// }

export function Plane({ paperSpace }) {
  const geo = new THREE.CircleGeometry(skyDimensions)
  const mat = useRef(
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(paperSpace ? '#2e2e2e' : '#1659c4')
    })
  )

  useFrame(() => {
    const targetColor = paperSpace
      ? new THREE.Color('#2e2e2e')
      : new THREE.Color('#1659c4')
    mat.current.color.lerp(targetColor, 0.1)
  })

  return (
    <primitive
      object={new THREE.Mesh(geo, mat.current)}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  )
}

export function SimpleModel({ paperSpace }) {
  const { nodes, materials } = useGLTF('/assets/gl/simpleModel.glb')

  var blankMaterial = [
    new THREE.MeshStandardMaterial({ color: '#f2f2f2' }),
    new THREE.MeshStandardMaterial({ color: '#d1d1d1' }),
    new THREE.MeshStandardMaterial({ color: '#ababab' }),
    new THREE.MeshStandardMaterial({ color: '#787878' }),
    new THREE.MeshStandardMaterial({ color: '#636363' })
  ]

  var edgesColor = paperSpace ? '#2e2e2e' : '#b3b3b3'

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

export function PaperPlane({ switchPaperSpace }) {
  const { nodes } = useGLTF('/assets/gl/paperPlane.glb')
  const ref = useRef()

  useFrame(() => {
    const circularTime = Date.now() * 0.002 + 20
    const k = 0.15
    const f = 40

    ref.current.position.x = f * Math.sin(circularTime * k)
    ref.current.position.y = 20 + 3 * Math.sin(circularTime * 0.5)
    ref.current.position.z = f * Math.cos(circularTime * k)

    const angle = Math.atan2(ref.current.position.z, ref.current.position.x)

    ref.current.rotation.z = angle + Math.PI
  })

  return (
    <group
      ref={ref}
      onClick={switchPaperSpace}
      rotation={[Math.PI / 2, 0, 0]}
      scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPlane.geometry}
        material={new THREE.MeshStandardMaterial({ color: 'white' })}>
        <Edges color={'#2e2e2e'} threshold={1}></Edges>
      </mesh>
    </group>
  )
}

export function PaperPlaneBanner({ switchPaperSpace }) {
  const group = useRef()
  const { nodes, animations } = useGLTF('assets/gl/paperPlaneAnimation.glb')
  const { actions } = useAnimations(animations, group)

  const material = new THREE.MeshBasicMaterial()
  material.side = THREE.DoubleSide
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(bannerTexture)

  material.map = texture

  useEffect(() => {
    actions.ArmatureAction.play()
  })

  useFrame(() => {
    const circularTime = Date.now() * 0.002 + 20
    const k = 0.15
    const f = 40

    group.current.position.x = f * Math.sin(circularTime * k)
    group.current.position.y = 20 + 3 * Math.sin(circularTime * 0.5)
    group.current.position.z = f * Math.cos(circularTime * k)

    const angle = Math.atan2(group.current.position.x, group.current.position.z)

    group.current.rotation.y = angle + Math.PI / 2
  })

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[-0.23, 0.66, -2.74]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={nodes.Bone} />
          <skinnedMesh
            name="PaperPlane_Banner"
            geometry={nodes.PaperPlane_Banner.geometry}
            material={material}
            skeleton={nodes.PaperPlane_Banner.skeleton}></skinnedMesh>
        </group>
      </group>
    </group>
  )
}

export function Prop({ paperSpace }) {
  const { nodes, materials } = useGLTF('/assets/gl/prop.glb')
  const ref = useRef()

  useFrame(({ clock }) => {
    var a = clock.getElapsedTime() / 2

    ref.current.position.x = 2.5 * Math.sin(a) + 2.5
    ref.current.position.y = 8.5 * Math.sin(a) + 8.5
    ref.current.position.z = 11.5 * Math.sin(a) + 11.5
  })

  var edgesColor = paperSpace ? '#2e2e2e' : '#b3b3b3'

  return (
    <group ref={ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Prop_Cabin.geometry}
          material={paperSpace ? blankMaterial[0] : materials['P1_Blocks']}>
          <Edges color={edgesColor} threshold={1}></Edges>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Prop_Doors.geometry}
          material={paperSpace ? blankMaterial[2] : materials['P0_Roof']}>
          <Edges color={edgesColor} threshold={1}></Edges>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/simpleModel.glb')

useGLTF.preload('/paperPlane.glb')

useGLTF.preload('/prop.glb')

useGLTF.preload('/paperPlaneAnimation.glb')
