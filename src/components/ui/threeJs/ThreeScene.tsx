"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = "srgb";
    renderer.physicallyCorrectLights = true;

    containerRef.current.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 5);

    // HDRI Environment Map
    new RGBELoader()
      .setPath("/hdr/")
      .load("studio_small_08_1k.hdr", (texture) => {
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        pmremGenerator.compileEquirectangularShader();
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;
        scene.background = null;
        texture.dispose();
        pmremGenerator.dispose();
      });

    // Lichtsetup (Frontal + zusätzliche Lichter)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(0, 3, 5); // frontal, leicht oberhalb
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    scene.add(keyLight);

    const fillLightLeft = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLightLeft.position.set(-3, 2, 2); // schwaches Fülllicht von links
    fillLightLeft.castShadow = false;
    scene.add(fillLightLeft);

    const fillLightRight = new THREE.DirectionalLight(0xffffff, 1);
    fillLightRight.position.set(3, 2, 2); // schwaches Fülllicht von rechts
    fillLightRight.castShadow = false;
    scene.add(fillLightRight);

    const rimLight = new THREE.DirectionalLight(0x88bbff, 1.2);
    rimLight.position.set(0, 6, -6); // Konturenlicht von hinten
    rimLight.castShadow = false;
    scene.add(rimLight);

    const bottomLight = new THREE.DirectionalLight(0xffffff, 0.8);
    bottomLight.position.set(0, -2, 3); // von unten schräg nach vorne
    bottomLight.castShadow = false;
    scene.add(bottomLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(0, 5, -2); // von oben schräg nach hinten
    topLight.castShadow = false;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Modell laden
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      "/models/scene.glb",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.45, 0.45, 0.45);

        // Modell leicht nach hinten verschieben
        model.position.z = -0.5;

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
              ).envMapIntensity = 1.5;
            }
          }
        });

        scene.add(model);

        // Lichter auf das Modell ausrichten
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        keyLight.target.position.copy(center);
        fillLightLeft.target.position.copy(center);
        fillLightRight.target.position.copy(center);
        rimLight.target.position.copy(center);
        bottomLight.target.position.copy(center);
        topLight.target.position.copy(center);

        scene.add(
          keyLight.target,
          fillLightLeft.target,
          fillLightRight.target,
          rimLight.target,
          bottomLight.target,
          topLight.target
        );
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
