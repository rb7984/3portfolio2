import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import skyTexture from './Sky.png'

var skyDimensions = 200

export function Sky() {
  const { scene } = useThree()

  // scene.background = new THREE.Color('#4287f5')
  // scene.background = new THREE.TextureLoader().load(skyImage)

  const textureLoader = new THREE.TextureLoader()

  const texture = textureLoader.load(skyTexture)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(3, 1) // Adjust the repeat values as needed

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide
  })

  const skyGeometry = new THREE.SphereGeometry(skyDimensions, 32, 32)
  const skyMesh = new THREE.Mesh(skyGeometry, material)

  scene.add(skyMesh)

  return null
}

export function Plane() {
  var geo = new THREE.CircleGeometry(skyDimensions)
  var mat = new THREE.MeshStandardMaterial({
    color: '#2c61d4'
    // side: THREE.DoubleSide
  })
  var plane = new THREE.Mesh(geo, mat)
  plane.rotateX(-Math.PI / 2)
  plane.translateY(1)
  plane.receiveShadow = true
  return <primitive object={plane} />
}
