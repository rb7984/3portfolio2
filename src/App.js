// import { createRoot } from "react-dom/client";
// import React, { useRef, useState } from "react";
import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const fbxLoader = new FBXLoader();

  var model = new THREE.Object3D();
  model.castShadow = true;
  model.receiveShadow = true;

  fbxLoader.load("/assets/model.fbx", (a) => {
    a.traverse(function (node) {
      if (node instanceof THREE.Mesh) {
        const oldMat = node.material;

        node.material = new THREE.MeshStandardMaterial({
          color: oldMat.color,
          map: oldMat.map,
        });

        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    model.add(a);
  });

  //   const fbx = useLoader(FBXLoader, "/assets/model.fbx");

  return <primitive object={model} castShadow receiveShadow />;
}

// function Model() {
//   const fbxLoader = new FBXLoader();

//   const namesList = ["model", "p0", "p1", "p2", "prop"];
//   const groupsList = [];

//   const model = new THREE.Group();
//   const p0 = new THREE.Group();
//   const p1 = new THREE.Group();
//   const p2 = new THREE.Group();
//   const prop = new THREE.Group();

//   groupsList.push(model);
//   groupsList.push(p0);
//   groupsList.push(p1);
//   groupsList.push(p2);
//   groupsList.push(prop);

//   for (let i = 0; i < namesList.length; i++) {
//     var path = "/assets/" + namesList[i] + ".fbx";

//     fbxLoader.load(path, (a) => {
//       a.traverse(function (node) {
//         if (node instanceof THREE.Mesh) {
//           node.castShadow = true;
//           node.receiveShadow = true;

//           const oldMat = node.material;

//           node.material = new THREE.MeshStandardMaterial({
//             color: oldMat.color,
//             map: oldMat.map,
//           });
//         }
//       });

//       groupsList[i].add(a);
//     });
//   }

//   //   const fbx = useLoader(FBXLoader, "/assets/model.fbx");

//   return (
//     <>
//       <primitive object={groupsList[0]} />

//       {/* <primitive object={groupsList[1]} />
//         <primitive object={groupsList[2]} />
//         <primitive object={groupsList[3]} /> */}
//       {/* <primitive object={groupsList[4]} /> */}
//     </>
//   );
// }

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
  var light = new THREE.DirectionalLight(0xc9e4ff, 0.5);

  light.position.set(0, 20, 0);
  light.castShadow = true;
  // light.shadow.camera.near = 1;
  light.shadow.camera.far = 100;
  // light.shadow.radius = 2;
  // light.shadow.bias = -0.002;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;

  return (
    <group>
      <primitive object={light} />;
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
