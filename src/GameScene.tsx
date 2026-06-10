import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

function FixedCamera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(18, 14, 18);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

function Landscape() {
  const { scene } = useGLTF('/models/landscape.glb');

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function GameScene() {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
      }}
    >
      <Canvas>
        <FixedCamera />

        <ambientLight intensity={2} />

        <directionalLight
          position={[20, 20, 20]}
          intensity={3}
        />

        <Landscape />
      </Canvas>
    </div>
  );
}
src/panels/Home.tsx