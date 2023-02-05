import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";

function Modello() {
  const gltf = useLoader(GLTFLoader, "/assets/gl/model.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export default Modello;
