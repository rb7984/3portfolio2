import React from 'react'
import * as THREE from 'three'

export function Plane() {
    var g2 = new THREE.PlaneGeometry(2000, 2000, 8, 8)
    var m2 = new THREE.MeshStandardMaterial({
        color: '#2c61d4',
        side: THREE.DoubleSide
    })
    var plane = new THREE.Mesh(g2, m2)
    plane.rotateX(-Math.PI / 2)
    plane.translateY(1)
    plane.receiveShadow = true
    return <primitive object={plane} />
}