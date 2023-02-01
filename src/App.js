// import { createRoot } from "react-dom/client";
// import React, { useRef, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useLoader, Canvas, } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Box, OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

function Model() {
  const fbx = useLoader(FBXLoader, "/assets/model.fbx");
  const p0 = useLoader(FBXLoader, "/assets/p0.fbx");
  const p1 = useLoader(FBXLoader, "/assets/p1.fbx");
  const p2 = useLoader(FBXLoader, "/assets/p2.fbx");
  const prop = useLoader(FBXLoader, "/assets/prop.fbx");

  return (
    <>
      <mesh >
        <primitive object={fbx} />
        <primitive object={p0}  />
        <primitive object={p1}  />
        <primitive object={p2}  />
        <primitive object={prop}  />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

function App() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

      <ambientLight intensity={0.2} />

      <pointLight
        castShadow = {true}
        shadowMapHeight={2048}
        intensity={0.4}
        color={"white"}
        position={[0, 50, 0]}
        distance = {1000}
      />

      <Sphere position = {[0,20,0]} castShadow receiveShadow>

        <meshStandardMaterial />
      </Sphere>
      
      <Box position = {[0,15,0]} castShadow receiveShadow scale= {3}>
        <meshStandardMaterial />

      </Box>

      <Model />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
