"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three-stdlib";
import { SpotLightHelper, DirectionalLightHelper, CameraHelper } from "three";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Lights

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Weißes Umgebungslicht, Intensität 1.5
    scene.add(ambientLight);
    // SpotLight
    const spotLight = new THREE.SpotLight(0xffffff, 20);
    spotLight.position.set(7, 7, 5);
    spotLight.angle = Math.PI / 3;
    spotLight.penumbra = 0.2;
    spotLight.castShadow = true;
    scene.add(spotLight);

    // SpotLight Helper
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);

    // Wenn du die Schattenkamera vom SpotLight sehen willst:
    const spotLightCameraHelper = new THREE.CameraHelper(
      spotLight.shadow.camera
    );
    scene.add(spotLightCameraHelper);

    // DirectionalLight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(7, 7, -7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // DirectionalLight Helper
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      2
    );
    scene.add(directionalLightHelper);

    // Orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;

    // Load model + apply material customization
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      "/models/Ring24.gltf",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.45, 0.45, 0.45);

        // Material einfüegen
        // model.traverse((child) => {
        //   if ((child as THREE.Mesh).isMesh) {
        //     const mesh = child as THREE.Mesh;
        //     if (
        //       mesh.material instanceof THREE.MeshStandardMaterial &&
        //       mesh.material.name === "Poliertes Gold"
        //     ) {
        //       mesh.material.color.set("#ffd700"); // Gold
        //     }
        //   }
        // });

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Fehler beim Laden des Modells:", error);
      }
    );

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Hier das Modell um die eigene Achse drehen (z.B. um die Y-Achse)
      if (model) {
        model.rotation.y += 0.01; // Drehung um die Y-Achse
      }
      // controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeScene;
