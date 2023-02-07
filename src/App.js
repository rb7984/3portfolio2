import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, BakeShadows } from "@react-three/drei";
import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Model";
import { Tree } from "./Tree";
import { Untitled } from "./Untitled";

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
  var light = new THREE.DirectionalLight(0xc9e4ff, 0.6);

  light.position.set(0, 20, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.far = 100;

  return (
    <group>
      <primitive object={light} />;
    </group>
  );
}

// function Modello() {
//   const gltf = useGLTF("/assets/gl/model.gltf");
//   gltf.scene.traverse( function(object) {
//     if (object instanceof THREE.Mesh ) {
//       object.castShadow = true;
//       object.receiveShadow = true;
//     }
//   });
//   gltf.scene.castShadow = true;
//   return (
//     <mesh castShadow receiveShadow >
//       <primitive object={gltf.scene} />
//     </mesh>
//   );
// }

function App() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />

      <hemisphereLight intensity={0.2} />
      <Light />


      {/* <Model /> */}
      <Untitled/>

      <Plane />
      <OrbitControls />
    </Canvas>
  );
}

export default App;

// function Model() {
//   const fbx = useFBX("assets/model.fbx");

//   fbx.castShadow = true;
//   fbx.receiveShadow = true;

//   fbx.traverse(function (node) {
//     if (node instanceof THREE.Mesh) {
//       node.castShadow = true;
//       node.receiveShadow = true;

//       // const oldMat = node.material;

//       // node.material = new THREE.MeshLambertMaterial({
//       //   color: oldMat.color,
//       //   map: oldMat.map,
//       // });
//     }
//   });

//   return <primitive object={fbx} />;
// }

// function Model() {
//   const fbx = useLoader(FBXLoader, "assets/model.fbx");

//   const fff = useFBX("assets/model.fbx");

//   fbx.children.forEach((object) => {
//     object.castShadow = true;
//     object.receiveShadow = true;
//   });
//   fbx.castShadow = true;
//   fbx.receiveShadow = true;
//   //   const fbx = useLoader(FBXLoader, "/assets/model.fbx");

//   return (
//     <mesh castShadow receiveShadow>
//       <primitive object={fbx} />
//     </mesh>
//   );
// }

// function Try() {
//   return (
//     <mesh castShadow receiveShadow position={[0, 3, 0]}>
//       <sphereGeometry />
//       <meshStandardMaterial color={"red"} />
//     </mesh>
//   );
// }

// function Try2() {
//   return (
//     <mesh castShadow receiveShadow position={[0, 0, 0]}>
//       <boxGeometry castShadow receiveShadow />
//       <meshStandardMaterial color={"red"} />
//     </mesh>
//   );
// }

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

// fbxLoader.load(path, (a) => {
//   a.traverse(function (node) {
//     if (node instanceof THREE.Mesh) {
//       node.castShadow = true;
//       node.receiveShadow = true;

//       const oldMat = node.material;

//       node.material = new THREE.MeshStandardMaterial({
//         color: oldMat.color,
//         map: oldMat.map,
//       });
//     }
//   });

//   groupsList[i].add(a);
// });
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
