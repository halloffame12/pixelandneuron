import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const InteractiveParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const { initialPositions, targetPositions, particleCount } = useMemo(() => {
    // A classic, complex shape for the particles to form
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 256, 32);
    const target = geometry.attributes.position.array;
    const count = target.length / 3;
    
    const initial = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Disperse particles in a sphere initially
      const r = Math.random() * 5 + 3; // radius
      const theta = Math.random() * Math.PI * 2; // angle around Y axis
      const phi = Math.acos((Math.random() * 2) - 1); // angle from Y axis
      initial[i3] = r * Math.sin(phi) * Math.cos(theta);
      initial[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      initial[i3 + 2] = r * Math.cos(phi);
    }
    
    return {
      initialPositions: initial,
      targetPositions: target,
      particleCount: count
    };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    const mousePos = new THREE.Vector2(mouse.x, mouse.y);
    // The influence is a value from 0 (far from center) to 1 (at center)
    const influence = 1.0 - Math.min(mousePos.length() * 1.5, 1.0);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Interpolate between the initial (dispersed) and target (shape) positions
      positions[i3] = THREE.MathUtils.lerp(initialPositions[i3], targetPositions[i3], influence);
      positions[i3 + 1] = THREE.MathUtils.lerp(initialPositions[i3 + 1], targetPositions[i3 + 1], influence);
      positions[i3 + 2] = THREE.MathUtils.lerp(initialPositions[i3 + 2], targetPositions[i3 + 2], influence);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Add continuous rotation for a more dynamic feel
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={initialPositions} // Start with dispersed positions
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="rgb(178, 212, 48)"
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.9}
      />
    </points>
  );
};

const LaptopScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 5]} intensity={2} color="rgb(26, 139, 157)" />
      <InteractiveParticles />
    </>
  );
};

export default LaptopScene;