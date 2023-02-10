import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  BakeShadows,
} from "@react-three/drei";
import * as THREE from "three";
import B from './B.jsx';

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
  var light = new THREE.DirectionalLight(0xc9e4ff, 0.3);

  light.position.set(30, 30, -30);
  light.lookAt(0,0,0);
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.far = 100;

  var lH = new THREE.DirectionalLightHelper(light,2);

  return (
    <group>
      <primitive object={light} />;
      <primitive object={lH} />;
    </group>
  );
}

function App() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[5,5,5]} fov={50} />

      <ambientLight intensity={1} />
      <Light />

      <B />

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
