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
      <>
        <meta charSet="utf-8" />
        <title>3Portfolio</title>
        <link rel="stylesheet" href="css/styles.css" />
        <div className="p visible" id="p0">
          <p>
            Hi There! My Name is Riccardo Barelli, I am a Architecture and Civil
            Engineering graduate from Bologna.
            <br /> Here are some of my projects!
          </p>
        </div>
        {/* FIRST PROJECT */}
        <div className="projectPage hidden" id="page1">
          <div className="closeButton">✖</div>
          <img className="img" src="./img/00.jpg" alt="prj" />
          <div style={{ padding: 5 }}>
            I did my curricular internship in the company 3DWasp, addressing the
            themes of 3D printing applied to the architectural scale. During
            this time I was asked to develop a design for Dior's PopUp Store
            that would be built and presented at Expo21 in Dubai. The idea for
            the development of the twin pavilions is strongly focused on the
            identity of the brand in a dual role: the company logo is used in
            plan while the texture of the skin of the building refers to the
            images that have always adorned the company and its products
          </div>
        </div>
        <div className="p hidden" id="p1">
          This is the first one.
          <div className="projectButton">Check out!</div>
        </div>
        {/* SECOND PROJECT */}
        <div className="projectPage hidden" id="page2">
          <div className="closeButton">✖</div>
          <img className="img" src="./img/02.png" alt="prj" />
          <div style={{ padding: 5 }}>My Thesis</div>
        </div>
        <div className="p hidden" id="p2">
          This is the second one
          <div className="projectButton">Check out!</div>
        </div>
        {/* THIRD PROJECT */}
        <div className="p hidden" id="p3">
          You guessed it, this is the third one
          <div className="projectButton">Check out!</div>
        </div>
        {/* BUTTONS */}
        <div className="btnPrevious" id="previous">
          <div className="arrow-left" />
        </div>
        <div className="btnNext" id="next">
          <div className="arrow-right" />
        </div>
        <div className="btnNight" id="night">
          <div className="moon" id="moon" />
        </div>
        <div id="scene-container"></div>
      </>
    </div>
  );
}

export default App;
