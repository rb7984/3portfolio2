import React from 'react'
import * as THREE from 'three'

export function Plane() {
  var geo = new THREE.CircleGeometry(200)
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
