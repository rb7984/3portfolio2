import { useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Scene = () => {
  const fbx = useFBX("../public/assets/model.fbx");

  return <primitive object={fbx} />;
};
