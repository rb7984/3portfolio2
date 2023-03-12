import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Model } from "./Model";
import { P0 } from "./P0";
import { P1 } from "./P1";
import { useFrame } from "@react-three/fiber";
import React from "react";

const rotationSwitch = true;

function Plane() {
  var g2 = new THREE.PlaneGeometry(2000, 2000, 8, 8);
  var m2 = new THREE.MeshStandardMaterial({
    color: "#2c61d4",
    side: THREE.DoubleSide,
  });
  var plane = new THREE.Mesh(g2, m2);
  plane.rotateX(-Math.PI / 2);
  plane.translateY(1);
  plane.receiveShadow = true;
  return <primitive object={plane} />;
}

function Light() {
  var light = new THREE.DirectionalLight(0xc9e4ff, 0.4);

  light.position.set(50, 50, -50);
  light.lookAt(0, 0, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 4096;
  light.shadow.mapSize.height = 4096;

  let cameraDimension = 50;
  light.shadow.camera.bottom = -cameraDimension;
  light.shadow.camera.top = cameraDimension;
  light.shadow.camera.left = -cameraDimension;
  light.shadow.camera.right = cameraDimension;
  light.shadow.camera.far = 100;

  // var lH = new THREE.DirectionalLightHelper(light, 2);

  return (
    <group>
      <primitive object={light} />;{/* <primitive object={lH} />; */}
    </group>
  );
}

function UpdateCamera() {
  var clock = new THREE.Clock();

  useFrame((state) => {
    if (rotationSwitch) {
      const time = clock.getElapsedTime() + 20;
      const k = 0.15;
      const f = 100;

      state.camera.position.x = f * Math.sin(time * k);
      state.camera.position.y = 50;
      state.camera.position.z = f * Math.cos(time * k);

      state.camera.lookAt(0, 0, 0);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });

  return null;
}

function App() {
  return (
    <Canvas shadows dpr={(1, 1)}>
      <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

      <UpdateCamera />
      <hemisphereLight intensity={0.6} />
      <Light />

      <Model />
      <P0 />
      <P1 />
      <Plane />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

export default App;
