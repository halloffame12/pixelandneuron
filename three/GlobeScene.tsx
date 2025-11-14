
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Globe: React.FC = () => {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((_, delta) => {
        if(ref.current) {
            ref.current.rotation.y += delta * 0.1;
            ref.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <mesh ref={ref} scale={3}>
            <icosahedronGeometry args={[1, 5]} />
            <meshStandardMaterial wireframe color="rgb(26, 139, 157)" emissive="rgb(26, 139, 157)" emissiveIntensity={0.2} />
        </mesh>
    );
};

const GlobeScene: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <Globe />
        </>
    );
};

export default GlobeScene;
