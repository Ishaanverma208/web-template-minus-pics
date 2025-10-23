import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus, Float, MeshDistortMaterial, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Globe component
const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      {/* Grid lines for globe effect */}
      <Sphere args={[1.21, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </Sphere>
    </Float>
  );
};

// Healthcare icon - rotating torus (DNA helix style)
const HealthcareIcon = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
      <Torus args={[0.4, 0.15, 16, 32]} position={[-2.5, 1.5, -1]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={0.5} />
      </Torus>
    </Float>
  );
};

// Trading icon - bar chart style boxes
const TradingIcon = () => {
  return (
    <group position={[2.5, -1, -1]}>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
        <Box args={[0.3, 0.8, 0.3]} position={[-0.4, 0, 0]}>
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </Box>
        <Box args={[0.3, 1.2, 0.3]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={0.3} />
        </Box>
        <Box args={[0.3, 0.6, 0.3]} position={[0.4, -0.3, 0]}>
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </Box>
      </Float>
    </group>
  );
};

// AI Brain icon - interconnected spheres
const AIBrainIcon = () => {
  return (
    <group position={[-2, -1.5, 0]}>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
        <Sphere args={[0.25, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.5} />
        </Sphere>
        <Sphere args={[0.15, 32, 32]} position={[0.4, 0.3, 0]}>
          <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </Sphere>
        <Sphere args={[0.15, 32, 32]} position={[-0.4, 0.3, 0]}>
          <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </Sphere>
        <Sphere args={[0.2, 32, 32]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#c4b5fd" emissive="#a78bfa" emissiveIntensity={0.5} />
        </Sphere>
      </Float>
    </group>
  );
};

// Ship/Container icon for import-export
const ShipIcon = () => {
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.7}>
      <group position={[2, 1.8, -0.5]} rotation={[0, -Math.PI / 6, 0]}>
        <Box args={[0.8, 0.3, 0.4]}>
          <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.4} />
        </Box>
        <Box args={[0.2, 0.4, 0.3]} position={[0.3, 0.35, 0]}>
          <meshStandardMaterial color="#0ea5e9" emissive="#0284c7" emissiveIntensity={0.4} />
        </Box>
      </group>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-[600px] lg:h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
        
        <Globe />
        <HealthcareIcon />
        <TradingIcon />
        <AIBrainIcon />
        <ShipIcon />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
