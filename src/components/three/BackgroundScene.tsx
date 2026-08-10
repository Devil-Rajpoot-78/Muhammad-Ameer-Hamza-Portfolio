import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export const BackgroundScene = () => (
  <Canvas className="absolute inset-0" style={{ pointerEvents: 'none' }}>
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    <ambientLight intensity={0.3} />
  </Canvas>
);
