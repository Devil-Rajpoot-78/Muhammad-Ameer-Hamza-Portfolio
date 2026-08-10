import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useReducedMotion } from '@hooks/index';

const RotatingGeometry = () => {
  return (
    <group>
      {/* Main rotating box */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial wireframe color="#ffffff" />
      </mesh>

      {/* Rotating torus */}
      <mesh rotation={[0, 0, Math.PI / 6]} scale={2}>
        <torusGeometry args={[1, 0.3, 32, 100]} />
        <meshPhongMaterial wireframe color="#4f46e5" />
      </mesh>

      {/* Orbiting spheres */}
      <group rotation={[0, 0, 0]}>
        <mesh position={[3, 0, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhongMaterial emissive="#ec4899" />
        </mesh>
        <mesh position={[-3, 0, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhongMaterial emissive="#06b6d4" />
        </mesh>
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhongMaterial emissive="#14b8a6" />
        </mesh>
      </group>
    </group>
  );
};

interface HeroScene3DProps {
  autoRotate?: boolean;
}

export const HeroScene3D = ({ autoRotate = true }: HeroScene3DProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#06b6d4" />
      
      <RotatingGeometry />
      
      <OrbitControls
        autoRotate={autoRotate && !prefersReducedMotion}
        autoRotateSpeed={2}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
    </Canvas>
  );
};
