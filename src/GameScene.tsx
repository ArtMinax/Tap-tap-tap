import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Landscape() {
  const { scene } = useGLTF('/models/landscape.glb');

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

export default function GameScene() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 10]} intensity={2} />

        <Landscape />

        <OrbitControls />
      </Canvas>
    </div>
  );
}