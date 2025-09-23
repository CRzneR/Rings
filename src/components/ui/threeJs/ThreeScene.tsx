"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Persistente Refs (werden nicht bei jedem Render neu angelegt)
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Szene nur einmal erstellen ---
    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
    }
    const scene = sceneRef.current;

    // --- Renderer nur einmal erstellen ---
    if (!rendererRef.current) {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      (renderer as any).physicallyCorrectLights = true;

      rendererRef.current = renderer;
    }

    // Falls DOM-Element noch nicht drin hängt → hinzufügen
    if (
      rendererRef.current &&
      !containerRef.current.contains(rendererRef.current.domElement)
    ) {
      containerRef.current.appendChild(rendererRef.current.domElement);
    }

    const renderer = rendererRef.current;

    // --- Kamera nur einmal erstellen ---
    if (!cameraRef.current) {
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 1.5, 5);
      cameraRef.current = camera;
    }
    const camera = cameraRef.current;

    // --- HDR Environment (einmalig) ---
    if (!scene.environment) {
      new RGBELoader()
        .setPath("/hdr/")
        .load("studio_small_08_1k.hdr", (texture) => {
          const pmremGenerator = new THREE.PMREMGenerator(renderer!);
          pmremGenerator.compileEquirectangularShader();
          const envMap = pmremGenerator.fromEquirectangular(texture).texture;
          scene.environment = envMap;
          scene.background = null;
          texture.dispose();
          pmremGenerator.dispose();
        });
    }

    // --- Lights (einmalig) ---
    if (scene.children.filter((c) => c.type.includes("Light")).length === 0) {
      const keyLight = new THREE.DirectionalLight(0xffffff, 3);
      keyLight.position.set(0, 3, 5);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(2048, 2048);
      scene.add(keyLight);

      const fillLightLeft = new THREE.DirectionalLight(0xffffff, 1.2);
      fillLightLeft.position.set(-3, 2, 2);
      scene.add(fillLightLeft);

      const fillLightRight = new THREE.DirectionalLight(0xffffff, 1);
      fillLightRight.position.set(3, 2, 2);
      scene.add(fillLightRight);

      const rimLight = new THREE.DirectionalLight(0x88bbff, 1.2);
      rimLight.position.set(0, 6, -6);
      scene.add(rimLight);

      const bottomLight = new THREE.DirectionalLight(0xffffff, 0.8);
      bottomLight.position.set(0, -2, 3);
      scene.add(bottomLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 1);
      topLight.position.set(0, 5, -2);
      scene.add(topLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);
    }

    // --- Modell nur einmal laden ---
    if (!modelRef.current) {
      const loader = new GLTFLoader();
      loader.load(
        "/models/scene.glb",
        (gltf) => {
          const model = gltf.scene;
          model.name = "myModel";
          model.scale.set(0.45, 0.45, 0.45);
          model.position.z = -0.5;

          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              if (
                (mesh.material as THREE.MeshStandardMaterial)
                  .envMapIntensity !== undefined
              ) {
                (
                  mesh.material as THREE.MeshStandardMaterial
                ).envMapIntensity = 1.5;
              }
            }
          });

          scene.add(model);
          modelRef.current = model;
        },
        undefined,
        (err) => console.error("Fehler beim Laden:", err)
      );
    }

    // --- Resize ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer!.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (modelRef.current) modelRef.current.rotation.y += 0.005;
      renderer!.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      // Wichtig: Renderer nicht destroyen, sonst bei StrictMode kaputt.
      // Falls du es unbedingt willst: renderer?.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeScene;
