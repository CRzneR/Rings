"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene & Renderer
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 5);

    // // OrbitControls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;

    // HDRI Environment Map
    new RGBELoader()
      .setPath("/hdr/") // → dein Ordner für HDR-Dateien
      .load("studio_small_08_1k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.background = null;
      });

    // Licht
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 4);
    spotLight.position.set(4, 5, 4);
    spotLight.angle = Math.PI / 5;
    spotLight.penumbra = 0.5;
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0005;
    spotLight.shadow.mapSize.set(1024, 1024);
    scene.add(spotLight);

    const spotLight2 = new THREE.SpotLight(0xffffff, 3);
    spotLight2.position.set(-4, 5, 4);
    spotLight2.angle = Math.PI / 5;
    spotLight2.penumbra = 0.5;
    spotLight2.castShadow = true;
    scene.add(spotLight2);

    const spotLight3 = new THREE.SpotLight(0xffffff, 2);
    spotLight3.position.set(0, 6, -6);
    spotLight3.angle = Math.PI / 5;
    spotLight3.penumbra = 0.5;
    spotLight3.castShadow = true;
    scene.add(spotLight3);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, -5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Modell laden
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      "/models/scene.glb",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.45, 0.45, 0.45);

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (
              (mesh.material as THREE.MeshStandardMaterial).envMapIntensity !==
              undefined
            ) {
              (
                mesh.material as THREE.MeshStandardMaterial
              ).envMapIntensity = 1.2; // macht HDR-Effekte sichtbar
            }
          }
        });

        scene.add(model);

        // Lichter auf das Modell ausrichten
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        spotLight.target.position.copy(center);
        spotLight2.target.position.copy(center);
        spotLight3.target.position.copy(center);
        scene.add(spotLight.target, spotLight2.target, spotLight3.target);
      },
      undefined,
      (err) => console.error("Fehler beim Laden:", err)
    );

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      // controls.update();

      if (model) model.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeScene;
