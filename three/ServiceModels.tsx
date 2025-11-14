
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const useRotation = (speed = 0.5) => {
    const ref = useRef<THREE.Group>(null);
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * speed;
        }
    });
    return ref;
};

const commonLighting = (
    <>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="rgb(26, 139, 157)" />
        <pointLight position={[-3, -3, 2]} intensity={1.5} color="rgb(178, 212, 48)" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </>
);

export const WebDevModel: React.FC = () => {
    const ref = useRotation();
    return (
        <group ref={ref}>
            {commonLighting}
            <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[1.5, 0.1, 1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, 0.3, -0.45]} rotation-x={-0.1}>
                <boxGeometry args={[1.5, 0.8, 0.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
             <mesh position={[0, 0.3, -0.4]}>
                <planeGeometry args={[1.4, 0.7]} />
                <meshStandardMaterial color="rgb(26, 139, 157)" emissive="rgb(26, 139, 157)" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

export const AIModel: React.FC = () => {
    const ref = useRotation();
    return (
        <group ref={ref}>
            {commonLighting}
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="rgb(26, 139, 157)" transparent opacity={0.5} />
            </mesh>
            <mesh>
                <torusKnotGeometry args={[0.8, 0.1, 100, 16]} />
                <meshStandardMaterial color="rgb(178, 212, 48)" emissive="rgb(178, 212, 48)" emissiveIntensity={0.4}/>
            </mesh>
        </group>
    );
};

export const AutomationModel: React.FC = () => {
    const ref1 = useRef<THREE.Mesh>(null);
    const ref2 = useRef<THREE.Mesh>(null);
    useFrame((_, delta) => {
        if(ref1.current) ref1.current.rotation.z += delta;
        if(ref2.current) ref2.current.rotation.z -= delta;
    });

    return (
        <group scale={1.2}>
            {commonLighting}
            <mesh ref={ref1} position={[-0.4, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
                <meshStandardMaterial color="#666" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh ref={ref2} position={[0.4, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
                <meshStandardMaterial color="#666" metalness={0.9} roughness={0.2} />
            </mesh>
        </group>
    );
};

export const FullStackModel: React.FC = () => {
    const ref = useRotation();
    return (
        <group ref={ref}>
            {commonLighting}
            {[...Array(5)].map((_, i) => (
                <mesh key={i} position={[0, (i - 2) * 0.3, 0]}>
                    <boxGeometry args={[1.5, 0.2, 0.8]} />
                    <meshStandardMaterial color="#444" metalness={0.8} roughness={0.3} />
                </mesh>
            ))}
        </group>
    );
};
