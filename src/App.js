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

  const namesList = ["model", "p0", "p1", "p2", "prop"];
  const groupsList = [];

  const model = new THREE.Group();
  const p0 = new THREE.Group();
  const p1 = new THREE.Group();
  const p2 = new THREE.Group();
  const prop = new THREE.Group();

  groupsList.push(model);
  groupsList.push(p0);
  groupsList.push(p1);
  groupsList.push(p2);
  groupsList.push(prop);

  for (let i = 0; i < namesList.length; i++) {
    var path = "/assets/" + namesList[i] + ".fbx";

    fbxLoader.load(path, (a) => {
      a.traverse(function (node) {
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

      groupsList[i].add(a);
    });
  }

  //   const fbx = useLoader(FBXLoader, "/assets/model.fbx");
  //   const p0 = useLoader(FBXLoader, "/assets/p0.fbx");
  //   const p1 = useLoader(FBXLoader, "/assets/p1.fbx");
  //   const p2 = useLoader(FBXLoader, "/assets/p2.fbx");
  //   const prop = useLoader(FBXLoader, "/assets/prop.fbx");

  return (
    <>
      <mesh>
        <primitive object={groupsList[0]} />
        <primitive object={groupsList[1]} />
        <primitive object={groupsList[2]} />
        <primitive object={groupsList[3]} />
        <primitive object={groupsList[4]} />
      </mesh>
    </>
  );
}

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

function Light() {
  var lightPoint = new THREE.DirectionalLight(0xc9e4ff, 0.5);

  lightPoint.position.set(0, 20, 0);
  lightPoint.castShadow = true;
  // lightPoint.shadow.camera.near = 1;
  lightPoint.shadow.camera.far = 50;
  // lightPoint.shadow.radius = 2;
  // lightPoint.shadow.bias = -0.002;
  lightPoint.shadow.mapSize.width = 2048;
  lightPoint.shadow.mapSize.height = 2048;

  return (
    <group>
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
