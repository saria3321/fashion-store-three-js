import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Model = () => {
  const ref = useRef();
  const groupRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/3D models/scene.gltf',
      (gltf) => {
        const object = gltf.scene;
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (!child.material) {
              child.material = new THREE.MeshStandardMaterial({ color: 0x808080 });
            }
          }
        });
        object.scale.set(1.5, 1.5, 1.5); // Adjust scale to fit the view
        object.position.set(0, 0, 0); // Adjust position to center vertically
        ref.current.add(object);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the GLTF file:', error);
      }
    );
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Optional: Add rotation for a dynamic view
    }
  });

  return <group ref={groupRef}><group ref={ref} /></group>;
};

const ThreeDModel = () => {
  return (
    <div className="h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
