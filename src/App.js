// import { createRoot } from "react-dom/client";
// import React, { useRef, useState } from "react";
import "./App.css";
import React from "react";
import { useThree, useLoader, Canvas } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const fbxLoader = new FBXLoader();

  var fbx = fbxLoader.load("/assets/model.fbx", (object) => {
    object.traverse(function (node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;

        const oldMat = node.material;

        node.material = new THREE.MeshStandardMaterial({
          color: oldMat.color,
          map: oldMat.map,
        });
      }
    });
  });

  // const fbx = useLoader(FBXLoader, "/assets/model.fbx");
  const p0 = useLoader(FBXLoader, "/assets/p0.fbx");
  const p1 = useLoader(FBXLoader, "/assets/p1.fbx");
  const p2 = useLoader(FBXLoader, "/assets/p2.fbx");
  const prop = useLoader(FBXLoader, "/assets/prop.fbx");

  return (
    <>
      <mesh>
        <primitive object={fbx} />
        <primitive object={p0} />
        <primitive object={p1} />
        <primitive object={p2} />
        <primitive object={prop} />
      </mesh>
    </>
  );
}

// function Model() {
//   const fbx = useLoader(FBXLoader, "/assets/model.fbx",32,32);
//   const p0 = useLoader(FBXLoader, "/assets/p0.fbx");
//   const p1 = useLoader(FBXLoader, "/assets/p1.fbx");
//   const p2 = useLoader(FBXLoader, "/assets/p2.fbx");
//   const prop = useLoader(FBXLoader, "/assets/prop.fbx");

//   return (
//     <>
//       <mesh>
//         <primitive object={fbx} />
//         <primitive object={p0} />
//         <primitive object={p1} />
//         <primitive object={p2} />
//         <primitive object={prop} />
//       </mesh>
//     </>
//   );
// }

// function Spheree() {
//   return (
//     <mesh castShadow position={[0, 7, 0]}>
//       <sphereGeometry args={[1, 128, 128]} />
//       <meshStandardMaterial metalness={1} />
//     </mesh>
//   );
// }

function Plane() {
  var g2 = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
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

function Model3() {
  var g = new THREE.BoxGeometry(2, 2, 2);
  var m = new THREE.MeshStandardMaterial({ color: "#aaaaaa" });
  const test = new THREE.Mesh(g, m);
  test.castShadow = true;
  test.receiveShadow = true;

  test.position.set(0, 0, 0);

  return <primitive object={test} />;
}

function Light() {
  var lightPoint = new THREE.DirectionalLight(0xc9e4ff, 0.3);

  lightPoint.position.set(0, 20, 0);
  lightPoint.castShadow = true;
  // lightPoint.shadow.camera.near = 1;
  lightPoint.shadow.camera.far = 50;
  // lightPoint.shadow.radius = 2;
  // lightPoint.shadow.bias = -0.002;
  lightPoint.shadow.mapSize.width = 2048;
  lightPoint.shadow.mapSize.height = 2048;

  var help = new THREE.PointLightHelper(lightPoint, 2);

  return (
    <group>
      <primitive object={help} />;
      <primitive object={lightPoint} />;
    </group>
  );
}

function Light2() {
  var lightPoint = new THREE.SpotLight(0xc9e4ff, 1);

  lightPoint.position.set(0, 50, 0);
  lightPoint.castShadow = true;
  // lightPoint.shadow.camera.near = 1;
  lightPoint.shadow.camera.far = 50;
  // lightPoint.shadow.radius = 2;
  // lightPoint.shadow.bias = -0.002;
  lightPoint.shadow.mapSize.width = 4096;
  lightPoint.shadow.mapSize.height = 4096;

  var help = new THREE.SpotLightHelper(lightPoint, 2);

  return (
    <group>
      <primitive object={help} />;
      <primitive object={lightPoint} />;
    </group>
  );
}

function App() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

      <ambientLight intensity={0.2} />
      <Light />

      <Model />

      <Plane />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
