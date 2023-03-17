import * as THREE from 'three'
import React from 'react'

export default function LightPopup({toggle, p}) {
    var light = new THREE.PointLight(0xff0000, 0.4)
  

    light.position.x = p[0]
    light.position.y = p[1]
    light.position.z = p[2]

    light.castShadow = false
    light.visible = false;
  
    var ph = new THREE.PointLightHelper(light)
  
    if (toggle === true) 
    {
      ph.visible = true;
    }
    else
    {
      ph.visible = false;
    }
  
    return (
        <group>
            <primitive object={light} />;
            <primitive object={ph} />;
        </group>
    )

}