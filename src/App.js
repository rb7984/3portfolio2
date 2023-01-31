// import { createRoot } from "react-dom/client";
// import React, { useRef, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useLoader, Canvas, } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei";

function Model() {
  
  const fbx = useLoader(FBXLoader, "/assets/model.fbx");
  const p0 = useLoader(FBXLoader, "/assets/p0.fbx");
  const p1 = useLoader(FBXLoader, "/assets/p1.fbx");
  const p2 = useLoader(FBXLoader, "/assets/p2.fbx");
  const prop = useLoader(FBXLoader, "/assets/prop.fbx");
  
  return (
  <>
    <mesh receiveShadow = {true} castShadow = {true} >
      
      <primitive object={fbx} />
      <primitive object={p0} />
      <primitive object={p1} />
      <primitive object={p2} />
      <primitive object={prop} />
      
    </mesh>
  </>
  )
}

function App() {

  return (
    <Canvas camera={{ position: [50, 50, 50], fov: 50 }} >
      
      <ambientLight castShadow intensity={0.2} />
      
      <spotLight castShadow shadowCameraFar={50} shadowMapHeight={2048} intensity={0.4} color={"white"} position={[0, 50, 0]} />
      
      <Model />
      
      <OrbitControls />
    </Canvas>
  );
}

export default App;