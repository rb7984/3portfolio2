import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import skyTexture from './SkyNight.png'

var skyDimensions = 200

export function Sky({lightSwitch}) {
  const { scene } = useThree()

  // var color = lightSwitch ? '#9ec3ff' : '#3d367a'
  // '#9ec3ff' : '#ea9eff'
  
  const material = new THREE.MeshBasicMaterial()

  if (lightSwitch)
  {
    var color = '#9ec3ff'
    material.color = new THREE.Color(color)
    // scene.background = new THREE.Color(color)
  }
  else
  {
    const textureLoader = new THREE.TextureLoader()
    
    const texture = textureLoader.load(skyTexture)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(20,20) // Adjust the repeat values as needed

    material.map = texture
    material.side = THREE.BackSide
  }

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
