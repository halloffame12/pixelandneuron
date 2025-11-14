
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BrainModel: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);
    const mainSphereRef = useRef<THREE.Mesh>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 100; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (!groupRef.current || !mainSphereRef.current) return;
        
        groupRef.current.rotation.y += delta * 0.1;
        mainSphereRef.current.rotation.x += delta * 0.05;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            const particleMesh = groupRef.current?.children[i + 1] as THREE.Mesh;
            if (particleMesh) {
                 particleMesh.position.set(
                    (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                    (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
                 );
                 particleMesh.scale.set(s, s, s);
            }
        });
    });

    return (
        <group ref={groupRef}>
            <mesh ref={mainSphereRef}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="rgb(26, 139, 157)" emissive="rgb(26, 139, 157)" emissiveIntensity={0.3} roughness={0.4} transparent opacity={0.3} />
            </mesh>
            {particles.map((_, i) => (
                <mesh key={i}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="rgb(178, 212, 48)" emissive="rgb(178, 212, 48)" emissiveIntensity={0.8} />
                </mesh>
            ))}
        </group>
    );
};

const BrainScene: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="rgb(178, 212, 48)" />
            <BrainModel />
        </>
    );
};

export default BrainScene;
