// import logo from "./logo.svg";
import "./App.css";
// import { createRoot } from "react-dom/client";
// import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { Scene } from "three";

function App() {
  const fbx = useLoader(FBXLoader, "/assets/model.fbx");
  
  return (
    <div id="canvas-container">
      
      <Canvas>
        <ambientLight intensity={0.1}></ambientLight>
        <directionalLight color={"red"} position={[0, 0, 5]}></directionalLight>
        <PerspectiveCamera
          lookAt={[0,0,0]}
          position = {[0,100,0]}
          makeDefault
          far={100}
          near ={0.1}
          fov = {35}
          rotation = {[-Math.PI/2,0,0]}
        />
        
        <primitive object={fbx} scale={1} />
        
        {/* <mesh>
          <boxGeometry></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh> */}
        
      </Canvas>
    </div>
  );
}

export default App;