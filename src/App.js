// import logo from "./logo.svg";
import "./App.css";
// import { createRoot } from "react-dom/client";
// import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import { PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { Scene } from "three";
import { OrbitControls } from "@react-three/drei";

function App() {
  const fbx = useLoader(FBXLoader, "/assets/model.fbx");
  const p0 = useLoader(FBXLoader, "/assets/p0.fbx");
  const p1 = useLoader(FBXLoader, "/assets/p1.fbx");
  const p2 = useLoader(FBXLoader, "/assets/p2.fbx");
  const prop = useLoader(FBXLoader, "/assets/prop.fbx");

  return (
    <Canvas camera={{ position: [50, 50, 50], fov: 50 }}>
      <ambientLight intensity={0.5} />

      <directionalLight intensity={0.5} color={"white"} position={[0, 0, 5]} />

      <primitive object={fbx} />
      <primitive object={p0} />
      <primitive object={p1} />
      <primitive object={p2} />
      <primitive object={prop} />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
