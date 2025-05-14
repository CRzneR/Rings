"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //Geometrie erstellen
    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);

    // GUI - Changing Geometry (scale, rotation)
    const gui = new GUI();
    // gui.add(boxMesh.rotation, "x", 0, Math.PI).name("Rotate X Axis");
    // gui.add(boxMesh.rotation, "y", 0, Math.PI).name("Rotate Y Axis");
    // gui.add(boxMesh.rotation, "z", 0, Math.PI).name("Rotate Z Axis");
    // gui.add(boxMesh.scale, "x", 0, 2).name("Scale X Axis");
    // gui.add(boxMesh.scale, "y", 0, 2).name("Scale Y Axis");
    // gui.add(boxMesh.scale, "z", 0, 2).name("Scale Z Axis");

    // Lightning
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.position.set(0, 64, 32);
    spotlight.castShadow = true;
    scene.add(spotlight);

    //   // main group
    //   const mainGroup = new THREE.Group();
    //   mainGroup.position.y = 0.5;
    //   test.scene.add(mainGroup);

    //   // set up ambient light
    //   const al = new THREE.AmbientLight(0xffffff, 0.5);
    //   mainGroup.add(al);

    //   // set up ambient light gui
    //   const alFolder = gui.addFolder('ambient light');
    //   const alSettings = { color: al.color.getHex() };
    //   alFolder.add(al, 'visible');
    //   alFolder.add(al, 'intensity', 0, 1, 0.1);
    //   alFolder
    //     .addColor(alSettings, 'color')
    //     .onChange((value) => al.color.set(value));
    //   alFolder.open();

    //   // setup directional light + helper
    //   const dl = new THREE.DirectionalLight(0xffffff, 0.5);
    //   // use this for YouTube thumbnail
    //   dl.position.set(0, 2, 2);
    //   // dl.position.set(0, 2, 0);
    //   dl.castShadow = true;
    //   const dlHelper = new THREE.DirectionalLightHelper(dl, 3);
    //   mainGroup.add(dl);
    //   // mainGroup.add(dlHelper);

    //   // set up directional light gui
    //   const dlSettings = {
    //     visible: true,
    //     color: dl.color.getHex(),
    //   };
    //   const dlFolder = gui.addFolder('directional light');
    //   dlFolder.add(dlSettings, 'visible').onChange((value) => {
    //     dl.visible = value;
    //     dlHelper.visible = value;
    //   });
    //   dlFolder.add(dl, 'intensity', 0, 1, 0.25);
    //   dlFolder.add(dl.position, 'y', 1, 4, 0.5);
    //   dlFolder.add(dl, 'castShadow');
    //   dlFolder
    //     .addColor(dlSettings, 'color')
    //     .onChange((value) => dl.color.set(value));
    //   dlFolder.open();

    //   // set up spot light + helper
    //   const sl = new THREE.SpotLight(0x00ff00, 1, 8, Math.PI / 8, 0);
    //   sl.position.set(0, 2, 2);
    //   const slHelper = new THREE.SpotLightHelper(sl);
    //   mainGroup.add(sl, slHelper);

    //   // set up spot light gui
    //   const slSettings = {
    //     visible: true,
    //   };
    //   const slFolder = gui.addFolder('spot light');
    //   slFolder.add(slSettings, 'visible').onChange((value) => {
    //     sl.visible = value;
    //     slHelper.visible = value;
    //   });
    //   slFolder.add(sl, 'intensity', 0, 4, 0.5);
    //   slFolder.add(sl, 'angle', Math.PI / 16, Math.PI / 2, Math.PI / 16);
    //   slFolder.add(sl, 'castShadow');
    //   slFolder.open();

    //   const pl = new THREE.PointLight(0xffffff, 1, 8, 2);
    //   pl.position.set(2, 2, 2);
    //   const plHelper = new THREE.PointLightHelper(pl, 0.5);
    //   mainGroup.add(pl, plHelper);

    //   // set up point light gui
    //   const plSettings = {
    //     visible: true,
    //     color: pl.color.getHex(),
    //   };
    //   const plFolder = gui.addFolder('point light');
    //   plFolder.add(plSettings, 'visible').onChange((value) => {
    //     pl.visible = value;
    //     plHelper.visible = value;
    //   });
    //   plFolder.add(pl, 'intensity', 0, 2, 0.25);
    //   plFolder.add(pl.position, 'x', -2, 4, 0.5);
    //   plFolder.add(pl.position, 'y', -2, 4, 0.5);
    //   plFolder.add(pl.position, 'z', -2, 4, 0.5);
    //   plFolder.add(pl, 'castShadow');
    //   plFolder
    //     .addColor(plSettings, 'color')
    //     .onChange((value) => pl.color.set(value));
    //   plFolder.open();

    //   // Destroy the GUI on reload to prevent multiple stale UI from being displayed on screen.
    //   return () => {
    //     gui.destroy();
    //   };
    // }, []);

    // add Orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement);

    let animationFrameId: number;

    // const stats = new Stats();
    // document.body.appendChild(stats.dom);

    const animate = () => {
      //   boxMesh.rotation.x += 0.01;
      //   boxMesh.rotation.y += 0.01;
      //   stats.update();
      //   controls.update();

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup beim Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      //   boxGeometry.dispose();
      //   boxMaterial.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <canvas className="threeJsCanvas" ref={canvasRef} />
    </div>
  );
}
