import logo from "./logo.svg";
import "./App.css";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function App() {
  // const fbx = useLoader(FBXLoader, "/asset/model.fbx");
  return (
    <div className="App">
    <h1>Hello World</h1>
    </div>
  );
}

export default App;