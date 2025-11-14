
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Envelope: React.FC<{ isSent: boolean }> = ({ isSent }) => {
    const ref = useRef<THREE.Group>(null);
    const initialPos = useRef(new THREE.Vector3(0,0,0));
    
    useFrame((_, delta) => {
        if (!ref.current) return;
        
        if (isSent) {
            ref.current.position.y += delta * 5;
            ref.current.position.x -= delta * 2;
            ref.current.rotation.z += delta * 2;
        } else {
             ref.current.position.lerp(initialPos.current, 0.1);
             ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, 0, 0.1);
        }

        ref.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
        ref.current.rotation.x = Math.cos(Date.now() * 0.001) * 0.1;

    });

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(2, 1);
    shape.lineTo(4, 0);
    shape.lineTo(4, 3);
    shape.lineTo(0, 3);
    shape.lineTo(0, 0);

    return (
        <group ref={ref} scale={1.5} position={[0,0,0]} rotation={[0.2, -0.5, 0]}>
             <mesh>
                <shapeGeometry args={[shape]} />
                <meshStandardMaterial color="white" side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0,0,-0.01]}>
                <planeGeometry args={[4,3]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    );
}

const ContactScene: React.FC<{ isSent: boolean }> = ({ isSent }) => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 10, 5]} intensity={1} color="rgb(26, 139, 157)" />
      <pointLight position={[-10, -5, -10]} intensity={1.5} color="rgb(178, 212, 48)" />
      <OrbitControls enabled={false} />
      <Envelope isSent={isSent} />
    </>
  );
};

export default ContactScene;
