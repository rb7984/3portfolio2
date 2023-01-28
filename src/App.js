import logo from "./logo.png";
import "./App.css";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Scene } from "three";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1}></ambientLight>
        <directionalLight color={"red"} position={[0, 0, 5]}></directionalLight>

        <Scene />

        {/* 
        <mesh>
          <boxGeometry></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
