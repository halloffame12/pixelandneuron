
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

const Robot404: React.FC = () => {
    const headRef = useRef<THREE.Group>(null);
    useFrame(({ clock }) => {
        if(headRef.current) {
            headRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.7;
        }
    });

    return (
        <group position={[0, -2, 0]}>
            {/* Body */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[1.5, 2, 1]} />
                <meshStandardMaterial color="#555" metalness={0.9} roughness={0.2} />
            </mesh>
            {/* Head */}
            <group ref={headRef} position={[0, 2.5, 0]}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                     <meshStandardMaterial color="#777" metalness={0.9} roughness={0.2} />
                </mesh>
                 {/* Eye */}
                <mesh position={[0, 0, 0.51]}>
                    <circleGeometry args={[0.2, 32]} />
                    <meshStandardMaterial color="rgb(178, 212, 48)" emissive="rgb(178, 212, 48)" emissiveIntensity={1} />
                </mesh>
            </group>
             {/* Legs */}
            <mesh position={[-0.5, -0.5, 0]}>
                <boxGeometry args={[0.4, 1, 0.4]} />
                <meshStandardMaterial color="#444" />
            </mesh>
             <mesh position={[0.5, -0.5, 0]}>
                <boxGeometry args={[0.4, 1, 0.4]} />
                <meshStandardMaterial color="#444" />
            </mesh>
        </group>
    );
};

const FloatingNumber: React.FC<{ value: string, position: [number, number, number] }> = ({ value, position }) => {
    const ref = useRef<THREE.Group>(null);
    const randomFactor = useRef(Math.random() * 2 + 1);
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.position.y += Math.sin(clock.getElapsedTime() * randomFactor.current) * 0.01;
        }
    });
    
    return (
        <group ref={ref} position={position}>
            <Text fontSize={3} color="rgb(26, 139, 157)" anchorX="center" anchorY="middle"
              // @ts-ignore
              font="/Inter_Regular.json"
            >
                {value}
            </Text>
        </group>
    )
}

const NotFoundScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} color="rgb(26, 139, 157)"/>
      <pointLight position={[0, 0, 5]} intensity={5} color="rgb(178, 212, 48)" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Robot404 />
      <FloatingNumber value="4" position={[-6, 2, -5]} />
      <FloatingNumber value="0" position={[0, 4, -8]} />
      <FloatingNumber value="4" position={[6, -1, -6]} />
    </>
  );
};

export default NotFoundScene;
