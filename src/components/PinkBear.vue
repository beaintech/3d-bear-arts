<template>
    <div ref="threeCanvas" id="pink-canvas"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  
  const threeCanvas = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    if (threeCanvas.value) {
      // Initialize the Three.js scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      threeCanvas.value.appendChild(renderer.domElement);
  
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);
  
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
  
      // Create a custom shader material with a gradient animation for the bear's body
      const bigHeartMaterial = new THREE.ShaderMaterial({
              uniforms: {
                  time: { value: 0 }, // Time uniform for animation
                  color1: { value: new THREE.Color(0xFFD700) }, // Gold color
                  color2: { value: new THREE.Color(0xF44336) }, // Hotpink color
              },
              vertexShader: `
                  varying vec2 vUv;
                  void main() {
                      vUv = uv;
                      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                  }
              `,
              fragmentShader: `
                  uniform float time;
                  uniform vec3 color1;
                  uniform vec3 color2;
                  varying vec2 vUv;
                  void main() {
                      vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5); // Gradient animation formula
                      gl_FragColor = vec4(color, 1.0); // Set the fragment color
                  }
              `
          });
  
      // Pink bear material
      const gummyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xFF69B4, // Hot pink color
        metalness: 0.2,
        roughness: 0.6,
        clearcoat: 0.1,
        clearcoatRoughness: 0.8,
        transparent: true,
        opacity: 0.99,
      });
  
      const heartMaterial = new THREE.MeshPhysicalMaterial({
              color: 0xCC0000, // Pink color (Hot Pink)
              metalness: 0.2, // Lower metalness for a more plastic feel
              roughness: 0.6, // Increase roughness for a more matte appearance
              clearcoat: 0.1, // Low clearcoat for minimal shine
              clearcoatRoughness: 0.8, // Higher clearcoat roughness for a matte finish
              transparent: true,
              opacity: 0.99, // Less transparent, more solid plastic look
          });
  
   // Create a group to hold all bear parts
   const bearGroup = new THREE.Group();
  
  // Shorten bear body
  const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
  const body = new THREE.Mesh(bodyGeometry, gummyMaterial);
  body.scale.set(0.85, .85, 0.8); // Shorter body
  body.position.y = -0.2;
  bearGroup.add(body);
  
  // Create rounded head
  const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
  const head = new THREE.Mesh(headGeometry, gummyMaterial);
  head.scale.set(1, .95, .95); // Flatter head
  head.position.set(0, 1, 0);
  bearGroup.add(head);
  
  // Create rounded ears
  const earGeometry = new THREE.SphereGeometry(0.25, 32, 32);
  const leftEar = new THREE.Mesh(earGeometry, gummyMaterial);
  leftEar.position.set(-0.45, 1.35, -0.1);
  bearGroup.add(leftEar);
  
  const rightEar = new THREE.Mesh(earGeometry, gummyMaterial);
  rightEar.position.set(0.45, 1.35, -0.1);
  bearGroup.add(rightEar);
  
  // Create prominent snout
  const snoutGeometry = new THREE.SphereGeometry(0.25, 32, 32);
  const snout = new THREE.Mesh(snoutGeometry, gummyMaterial);
  snout.scale.set(1, 0.6, 0.8); // Flatter and wider snout
  snout.position.set(0, 0.85, 0.5);
  bearGroup.add(snout);
  
  // Create a 2D heart shape
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
  heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
  heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
  heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);
  
  // Extrude the heart shape to give it 3D depth
  const extrudeSettings = { depth: 0.4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
  const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  
  // Create heart mesh using the gradient material
  const heart = new THREE.Mesh(heartGeometry, heartMaterial);
  heart.scale.set(0.5, 0.5, 0.5); // Scale down the heart
  heart.position.set(0, 0.34, 0.8); // Position it in front of the body
  heart.rotation.y = Math.PI; // Rotate the heart to face forward
  heart.rotation.x = Math.PI; // Flip the heart upside down
  
  // Add the heart to the bearGroup, in front of the body
  bearGroup.add(heart);
  
  // Create shorter and higher rounded arms
  const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
  const leftArm = new THREE.Mesh(armGeometry, gummyMaterial);
  leftArm.scale.set(0.75, 1.25, .65); // Decrease the y-scale to make the arm shorter
  leftArm.position.set(-0.7, -.15, 0.2); // Move the arm higher (increase y-position)
  bearGroup.add(leftArm);
  
  const rightArm = new THREE.Mesh(armGeometry, gummyMaterial);
  rightArm.scale.set(0.75, 1.25, .65); // Decrease the y-scale to make the arm shorter
  rightArm.position.set(0.7, -.15, 0.2); // Move the arm higher (increase y-position)
  bearGroup.add(rightArm);
  
  // Shorter, wider legs
  const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32); // Cylinder for the leg base
  const leftLeg = new THREE.Mesh(legGeometry, gummyMaterial);
  leftLeg.position.set(-0.4, -1, 0); // Adjust position
  bearGroup.add(leftLeg);
  
  const rightLeg = new THREE.Mesh(legGeometry, gummyMaterial);
  rightLeg.position.set(0.4, -1, 0); // Adjust position
  bearGroup.add(rightLeg);
  
  // Create slightly smaller boot-like bear feet with half-round style
  const bootBaseGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 32); // Reduced size for the base of the boot
  const bootFrontGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Reduced size for the front half-round of the boot
  
  // Left boot base
  // const leftBootBase = new THREE.Mesh(bootBaseGeometry, gummyMaterial);
  // leftBootBase.position.set(-0.4, -1.2, 0); // Adjust position under the leg
  // bearGroup.add(leftBootBase);
  
  // Left boot front
  const leftBootFront = new THREE.Mesh(bootFrontGeometry, gummyMaterial);
  leftBootFront.scale.set(1, .72, 1.5); // Reduced size, flattened and extended front
  leftBootFront.position.set(-0.4, -1.45, 0.17); // Position in front of the base
  bearGroup.add(leftBootFront);
  
  // // Right boot base
  // const rightBootBase = new THREE.Mesh(bootBaseGeometry, gummyMaterial);
  // rightBootBase.position.set(0.4, -1.2, 0); // Adjust position under the leg
  // bearGroup.add(rightBootBase);
  
  // Right boot front
  const rightBootFront = new THREE.Mesh(bootFrontGeometry, gummyMaterial);
  rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
  rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
  bearGroup.add(rightBootFront);
  
  // Load the font for the X eye
  // const loader = new THREE.FontLoader();
  // loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
  //     // Create the X eye
  //     const xEyeGeometry = new THREE.TextGeometry('X', {
  //         font: font,
  //         size: 0.2, // Size of the X
  //         height: 0.05, // Thickness of the X
  //     });
  
  //     const xEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
  //     const xEye = new THREE.Mesh(xEyeGeometry, xEyeMaterial);
  //     xEye.position.set(-0.34, 1, 0.5); // Position on the head
  //     bearGroup.add(xEye);
  
  //     // Create the O eye
  //     // const oEyeGeometry = new THREE.TextGeometry('O', {
  //     //         font: font,
  //     //         size: 0.2, // Size of the O
  //     //         height: 0.05, // Thickness of the O
  //     //     });
  
  //     // const oEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
  //     // const oEye = new THREE.Mesh(oEyeGeometry, oEyeMaterial);
  //     // oEye.position.set(0.3, 1, 0.5); // Position on the head
  //     // bearGroup.add(oEye);
  // });
  
  // // Create the O eye
  // const oEyeGeometry = new THREE.SphereGeometry(0.1, 32, 32); // Smaller sphere for O eye
  // const oEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
  // const oEye = new THREE.Mesh(oEyeGeometry, oEyeMaterial);
  // oEye.position.set(0.2, 1.1, 0.54); // Position on the head
  // bearGroup.add(oEye);
  
  // Create rounded buttocks
  const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
  const leftButtock = new THREE.Mesh(buttockGeometry, gummyMaterial);
  leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
  bearGroup.add(leftButtock);
  
  const rightButtock = new THREE.Mesh(buttockGeometry, gummyMaterial);
  rightButtock.position.set(0.15, -.45, -0.4); // Position the right buttock behind the body
  bearGroup.add(rightButtock);
  
  // Create round bear tail
  const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32); // Smaller sphere for the tail
  const tail = new THREE.Mesh(tailGeometry, heartMaterial);
  tail.position.set(0, -.35, -0.8); // Position the tail at the back of the body
  bearGroup.add(tail);
  
  // Add bear group to the scene
  scene.add(bearGroup);
  
  // Animation function to rotate the bear
  function animate() {
      requestAnimationFrame(animate);
      bearGroup.rotation.y += 0.02; // Rotate the bear group around the y-axis
      bigHeartMaterial.uniforms.time.value += 0.02;
      renderer.render(scene, camera);
  }
  
  // Start the animation
  animate();
  
  // Position camera slightly above and look down
  camera.position.set(0, 1, 4); // Move the camera up and back
  camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene
  
  // Handle window resize
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera); // Re-render on resize
  });
    }
  });
  </script>
  
  <style scoped>
  #pink-canvas {
    margin: 0;
              height: 100vh;
              width: 100vw;
              overflow: hidden;
              background: radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.8), rgba(135, 206, 250, 0.8), rgba(254, 0, 127, 0.993));
              background-size: 200% 200%;
              background-repeat: no-repeat;
              animation: heartTunnel 1s infinite linear;
  }
  
  /* Keyframes for heart tunnel-like animation */
  @keyframes heartTunnel {
              0% {
                  background-size: 150% 150%;
                  background-position: center;
              }
              50% {
                  background-size: 100% 100%;
                  background-position: center;
              }
              100% {
                  background-size: 150% 150%;
                  background-position: center;
              }
          }
  </style>
  