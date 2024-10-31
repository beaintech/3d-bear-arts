<template>
    <div ref="threeCanvas" :class="background? 'no-bg':'three-canvas'"></div>
      <div class="pixel-controls">
        <button class="pixel-btn up" @mousedown="onUpButtonDown" @mouseup="stopRotation">UP</button>
        <div class="side-buttons">
          <button class="pixel-btn left" @mousedown="onLeftButtonDown" @mouseup="stopRotation">LEFT</button>
          <button class="pixel-btn right" @mousedown="onRightButtonDown" @mouseup="stopRotation">RIGHT</button>
        </div>
       <button class="pixel-btn down" @mousedown="onDownButtonDown" @mouseup="stopRotation">DOWN</button>
    </div>
</template>

    <script setup lang="ts">
    import { ref, onMounted, watch } from 'vue';
    import * as THREE from 'three';
    import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
    import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
    import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

    const props = defineProps({
    background: {
      type: Boolean,
      default: false
    },
    cameraPosition: {
      type: Number,
      default: 5
    },
    bodyPosition: {
      type: Object,
      default: () => ({ x: 0, y: 0, z: 0 })
    }
  });
        const threeCanvas = ref<HTMLDivElement | null>(null);
        let isRotatingRight = ref(false); // Flag for right rotation
        let isRotatingLeft = ref(false);  // Flag for left rotation
        let isRotatingUp = ref(false);    // Flag for up rotation
        let isRotatingDown = ref(false);  // Flag for down rotation

    onMounted(() => {
      if (threeCanvas.value) {
        // Initialize the Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        threeCanvas.value.appendChild(renderer.domElement);

        // Create the bear group and all parts
        const bearGroup = new THREE.Group();
        const textGroup = new THREE.Group();
        scene.add(textGroup);

        // Ambient Light (provides soft overall illumination)
        const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Stronger ambient light
        scene.add(ambientLight);

        // Directional Light (for strong highlights)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 4); // Increase intensity
        directionalLight.position.set(5, 5, 5); // Position it above and to the side of the object
        scene.add(directionalLight);

        // Point Light (for localized bright spots)
        const pointLight = new THREE.PointLight(0xffffff, 5, 50); // Strong point light
        pointLight.position.set(0, 2, 4); // Close to the object
        scene.add(pointLight);

        const textureLoader = new THREE.TextureLoader();
        const beachTexture = textureLoader.load('/3d-bear-arts/assets/beach.jpg');
        // beachTexture.wrapS = beachTexture.wrapT = THREE.RepeatWrapping;
        beachTexture.repeat.set(0.8,1);

        const sunTexture = textureLoader.load('/3d-bear-arts/assets/sun.jpg');

        // https://www.google.com/imgres?q=pop%20art&imgurl=https%3A%2F%2Fi00.eu%2Fimg%2F605%2F1024x1024%2F9ahr1mu8%2F366098.jpg&imgrefurl=https%3A%2F%2Fwww.dovido.de%2FPop-Art-Bilder%2FWandbild-Pop-Art-Lutscher&docid=tZrAljc23vedzM&tbnid=aWwpNILeFq7VKM&vet=12ahUKEwiKs57Y-5OJAxXUnf0HHfLwHKYQM3oECHwQAA..i&w=1024&h=682&hcb=2&ved=2ahUKEwiKs57Y-5OJAxXUnf0HHfLwHKYQM3oECHwQAA

        beachTexture.wrapS = beachTexture.wrapT = THREE.RepeatWrapping;
        beachTexture.repeat.set(0.8,1);

        // beachTexture.repeat.set(2, 2); // Adjust this to scale the texture on the model

        sunTexture.wrapS = sunTexture.wrapT = THREE.RepeatWrapping;
       // sunTexture.repeat.set(2, 2); // Adjust this to scale the texture on the mode

        const bodyMainMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF,  // Hot pink as the base
          map: beachTexture,  // Apply the abstract or halftone texture
          metalness: 0.2,  // Lower metalness for less reflective look
          roughness: 0.7,  // Increase roughness for a more matte finish
          clearcoat: 0.05,  // Lower clearcoat to reduce gloss
          clearcoatRoughness: 0.9,  // Increase clearcoat roughness for less shine
        });

        const transparentBodyTransparentBeachMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF,  // White base color
            map: beachTexture,
            metalness: 0.3,  // Lower metalness for a plastic-like effect
            roughness: 0.1,  // Make it smoother for a glossy look
            clearcoat: 1.0,  // High clearcoat for strong glossiness
            clearcoatRoughness: 0.05,  // Make the clearcoat glossy
            transparent: true,  // Enable transparency
            opacity: 0.4,  // Set transparency level
            transmission: 0.8,  // Enable transmission for glass-like effect
            ior: 1.45,  // Index of refraction for glassy feel
            reflectivity: 0.9,  // High reflectivity for a shiny surface
            envMapIntensity: 1.0,  // Strong environment reflections
            side: THREE.DoubleSide,  // Render both sides of the material
            depthWrite: false, // Prevents overwriting depth information
            depthTest: true, // Allows depth testing for consistent layering
        });

        const bodyTransparentBeachMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF,
            map: beachTexture,
            metalness: 0.3,  // Slight metalness for a subtle shine
            roughness: 0.5,  // Some roughness to reduce reflection
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide,
            ior: 1.33, // Close to water for refractive effect
             depthWrite: false, // Prevents overwriting depth information
             depthTest: true, // Allows depth testing for consistent layering
        });

        // const bodyTransparentBeachMaterial = new THREE.MeshPhysicalMaterial({
        //   color: 0xB0E2FF, // Soft blue tint
        //   map: beachTexture, // Beach texture for subtle depth
        //   metalness: 0.1,  // Low metalness to avoid a metallic shine
        //   roughness: 0.6,  // Higher roughness for softer reflections
        //   transparent: true,
        //   opacity: 0.85, // Slight opacity for a glassy effect
        //   clearcoat: 0.9, // Higher clearcoat for a glossy surface layer
        //   clearcoatRoughness: 0.4, // Rougher clearcoat for a softer shine
        //   transmission: 0.7, // Moderate transmission for subtle transparency
        //   ior: 1.2, // Slightly lower than water to reduce refraction intensity
        //   depthWrite: false, // Prevents overwriting depth information
        //   depthTest: true, // Enables depth testing for consistent layering
        //   envMapIntensity: 0.8, // Reduced environment map intensity for softer look
        // });

        const rightBeachMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF, // Soft blue tint
          map: beachTexture, // Beach texture for subtle depth
          metalness: 0.1,  // Low metalness to avoid a metallic shine
          roughness: 0.6,  // Higher roughness for softer reflections
          transparent: true,
          opacity: 0.85, // Slight opacity for a glassy effect
          clearcoat: 0.9, // Higher clearcoat for a glossy surface layer
          clearcoatRoughness: 0.4, // Rougher clearcoat for a softer shine
          transmission: 0.7, // Moderate transmission for subtle transparency
          ior: 1.2, // Slightly lower than water to reduce refraction intensity
          depthTest: true, // Enables depth testing for consistent layering
          envMapIntensity: 0.8, // Reduced environment map intensity for softer look
        });

        const rightBodyTransparentBeachMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF, // Soft blue tint
          map: beachTexture, // Beach texture for subtle depth
          metalness: 0.1,  // Low metalness to avoid a metallic shine
          roughness: 0.6,  // Higher roughness for softer reflections
          transparent: true,
          opacity: 0.85, // Slight opacity for a glassy effect
          clearcoat: 0.9, // Higher clearcoat for a glossy surface layer
          clearcoatRoughness: 0.4, // Rougher clearcoat for a softer shine
          transmission: 0.7, // Moderate transmission for subtle transparency
          ior: 1.2, // Slightly lower than water to reduce refraction intensity
          depthWrite: false,
          depthTest: true, // Enables depth testing for consistent layering
          envMapIntensity: 0.6, // Reduced environment map intensity for softer look
          side: THREE.DoubleSide,
        });


        const leftBeachMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF,
            map: beachTexture,
            metalness: 0.3,  // Slight metalness for a subtle shine
            roughness: 0.5,  // Some roughness to reduce reflection
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            ior: 1.33, // Close to water for refractive effect
        });

        const transparentHeadMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF,  // White base color
            map: beachTexture,  // Halftone or abstract texture
            metalness: 0.3,  // Lower metalness for a plastic-like effect
            roughness: 0.1,  // Make it smoother for a glossy look
            clearcoat: 1.0,  // High clearcoat for strong glossiness
            clearcoatRoughness: 0.05,  // Make the clearcoat glossy
            transparent: true,  // Enable transparency
            opacity: 0.7,  // Set transparency level
            transmission: 0.8,  // Enable transmission for glass-like effect
            ior: 1.45,  // Index of refraction for glassy feel
            reflectivity: 0.9,  // High reflectivity for a shiny surface
            envMapIntensity: 1.0,  // Strong environment reflections
        });

        const leftLegtMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF,  // Hot pink as the base
          map: beachTexture,  // Apply the abstract or halftone texture
          metalness: 0.2,  // Lower metalness for less reflective look
          roughness: 0.7,  // Increase roughness for a more matte finish
          clearcoat: 0.05,  // Lower clearcoat to reduce gloss
          clearcoatRoughness: 0.9,  // Increase clearcoat roughness for less shine
        });

        // Create a half-sphere geometry
        const bodyGeometry = new THREE.SphereGeometry(
            1,            // Radius
            32,           // Width segments
            32,           // Height segments
            0,            // phiStart
            Math.PI       // phiLength (half of the sphere)
        );

      const rightBody = new THREE.Mesh(bodyGeometry, rightBodyTransparentBeachMaterial);
      const leftBody = new THREE.Mesh(bodyGeometry, bodyTransparentBeachMaterial);
  
      rightBody.scale.set(0.85, 0.85, 0.8);
      leftBody.scale.set(0.85, 0.85, 0.8);

      rightBody.position.y = -0.2;
      leftBody.position.y = -0.2;

      rightBody.rotation.y = Math.PI / 2;
      leftBody.rotation.y = Math.PI * 1.5;

      // Create a circular geometry to fill the flat side
        const circleGeometry = new THREE.CircleGeometry(1, 32); // Radius should match the half-sphere
        const circle = new THREE.Mesh(circleGeometry, bodyMainMaterial);
        circle.scale.set(0.85, 0.85, 0.8);

        // Position the circle to cover the flat side
        circle.position.set(0, -0.2, 0); // Position should match the flat side of the half-sphere
        circle.rotation.y = Math.PI / 2; // Rotate the circle to match the half-sphere's orientation

        // Create a group to combine the half-sphere and the plane
        const halfSphereGroup = new THREE.Group();
        halfSphereGroup.add(rightBody);
        halfSphereGroup.add(leftBody);
        halfSphereGroup.add(circle);

        // Add the combined geometry to the scene or parent group
        bearGroup.add(halfSphereGroup);

        // Bear head
        // Create half-sphere geometry for the head
        const headGeometry = new THREE.SphereGeometry(
            0.6,        // Radius
            32,         // Width segments
            32,         // Height segments
            0,          // phiStart
            Math.PI     // phiLength (half of the sphere)
        );

        // Create the left half of the head
        const leftHead = new THREE.Mesh(headGeometry, bodyMainMaterial);
        leftHead.scale.set(1, 0.95, 0.95);
        leftHead.position.set(0, 1, 0);
        leftHead.rotation.y = Math.PI * 1.5; // Rotate the left head to match orientation

        // Create the right half of the head
        const rightHead = new THREE.Mesh(headGeometry, rightBeachMaterial);
        rightHead.scale.set(1, 0.95, 0.95);
        rightHead.position.set(0, 1, 0);
        rightHead.rotation.y = Math.PI / 2; // Rotate the right head to match orientation

        // Create a circular geometry to fill the flat side
        const headCircleGeometry = new THREE.CircleGeometry(0.6, 32); // Radius matches the half-sphere
        const headCircle = new THREE.Mesh(headCircleGeometry, bodyMainMaterial);

        // Position the circle to cover the flat side
        headCircle.position.set(0, 1, 0); // Set to the same height as the heads
        headCircle.rotation.y = Math.PI / 2; // Rotate the circle to match the half-sphere's orientation
        headCircle.scale.set(1, 0.95, 0.95); // Make it wider at the front

        // Create a group to combine the two half-spheres and the circle
        const halfHeadSphereGroup = new THREE.Group();
        halfHeadSphereGroup.add(leftHead);
        halfHeadSphereGroup.add(rightHead);
        halfHeadSphereGroup.add(headCircle);

        // Add the combined head group to the bear group
        bearGroup.add(halfHeadSphereGroup);

        // Create water-like geometry inside the bear
        const waterHalfSphereGeometry = new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
        const waterMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF, // Light blue color for water
            metalness: 0.1,
            roughness: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            transparent: true,
            opacity: 0.9,
            transmission: 0.9, // High transmission for a glassy effect
            ior: 1.33, // Index of refraction for water-like appearance
            reflectivity: 0.8,
            envMapIntensity: 1.0,
        });

        // Create the water mesh using the bottom-half sphere geometry
        const waterMesh = new THREE.Mesh(waterHalfSphereGeometry, waterMaterial);
        waterMesh.position.set(0, -0.2, 0); // Align with body position
        waterMesh.rotation.x = Math.PI; // Face upwards
        waterMesh.scale.set(1.25, 1.25, 1.25);

        // Add water mesh to halfSphereGroup
        halfSphereGroup.add(waterMesh);

        const waterCircleMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00BFFF, // Slightly light color to match water
            metalness: 0.1,
            roughness: 0.5,
            clearcoat: 0.7,
            clearcoatRoughness: 0.25,
            side: THREE.DoubleSide, // Render both sides
            transparent: true,
            opacity: 0.7,
            depthWrite: false, // Prevents it from being overwritten
        });

        const waterCircle = new THREE.Mesh(circleGeometry, waterCircleMaterial);
        waterCircle.scale.set(.7, .7, .7);
        waterCircle.position.set(0, -0.3, 0); 
        waterCircle.rotation.x = Math.PI / 2;
        waterCircle.renderOrder = 1; // Ensures it renders on top

        // Add to the bear group
        halfSphereGroup.add(waterCircle);

        // Combine and add to bearGroup
        bearGroup.add(halfSphereGroup);

        const waterSurfaceMaterial = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            depthTest: true,
            uniforms: {
                u_time: { value: 0.0 },
                u_waveFrequency: { value: 8.0 }, 
                u_waveAmplitude: { value: 0.05 }, 
                u_waveSpeed: { value: 1.2 },
            },
            vertexShader: `
                precision mediump float;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                precision mediump float;
                uniform float u_time;
                uniform float u_waveFrequency;
                uniform float u_waveAmplitude;
                uniform float u_waveSpeed;
                varying vec2 vUv;

                void main() {
                    float waveX = sin(vUv.x * u_waveFrequency + u_time * u_waveSpeed) * u_waveAmplitude;
                    float waveY = cos(vUv.y * u_waveFrequency + u_time * u_waveSpeed) * u_waveAmplitude;

                    // Adjusted colors for higher contrast
                    vec3 baseColor = vec3(0.3, 0.4, 0.5); // Dark base
                    vec3 waveColor = vec3(0.7, 0.9, 1.0);  // Brighter aqua

                    vec3 color = mix(baseColor, waveColor, 0.5 + (waveX + waveY) * 1.5); 
                    gl_FragColor = vec4(color, 0.85); // Adjust opacity for visibility
                }
            `,
        });

        // Water Surface Mesh
        const waterSurface = new THREE.Mesh(circleGeometry, waterSurfaceMaterial);
        waterSurface.position.set(0, -0.3, 0); // Center position
        waterSurface.scale.set(.7, .7, .7);
        waterSurface.rotation.x = -Math.PI / 2; // Face the camera
        waterSurface.renderOrder = 1; // Ensure it renders on top

        // Add water surface to half sphere group
        halfSphereGroup.add(waterSurface);

        // Bear ears
        const earGeometry = new THREE.SphereGeometry(0.25, 32, 32);
        const leftEar = new THREE.Mesh(earGeometry, leftBeachMaterial);
        leftEar.position.set(-0.45, 1.35, -0.1);
        bearGroup.add(leftEar);

        const rightEar = new THREE.Mesh(earGeometry, rightBeachMaterial);
        rightEar.position.set(0.45, 1.35, -0.1);
        bearGroup.add(rightEar);

        // Geometry for the left half of the snout
        const leftSnoutGeometry = new THREE.SphereGeometry(
            0.25, // Radius
            32,   // Width segments
            32,   // Height segments
            Math.PI / 2, // phiStart: Start at 90 degrees to create a half-sphere
            Math.PI // phiLength: Cover 180 degrees to create the half shape
        );
        const leftSnout = new THREE.Mesh(leftSnoutGeometry, leftBeachMaterial);
        leftSnout.scale.set(1.1, 0.6, 0.8); // Make it wider at the front
        leftSnout.position.set(0, 0.84, 0.5); // Position the left half
        leftSnout.rotation.y = Math.PI; // Rotate to align correctly

        // Geometry for the right half of the snout
        const rightSnoutGeometry = new THREE.SphereGeometry(
            0.25, // Radius
            32,   // Width segments
            32,   // Height segments
            Math.PI / 2, // phiStart: Start at -90 degrees to create a half-sphere
            Math.PI // phiLength: Cover 180 degrees to create the half shape
        );
        const rightSnout = new THREE.Mesh(rightSnoutGeometry, bodyTransparentBeachMaterial);
        rightSnout.scale.set(1.1, 0.6, 0.8); // Make it wider at the front
        rightSnout.position.set(0, 0.84, 0.5); // Position the right half
        rightSnout.rotation.y = 0; // Align correctly without additional rotation

        // Circle to cover the flat sides
        const snoutCircleGeometry = new THREE.CircleGeometry(0.25, 32);
        const snoutCircle = new THREE.Mesh(snoutCircleGeometry, bodyTransparentBeachMaterial);
        snoutCircle.scale.set(0.8, 0.6, 0.8);
        // Position and rotate the circle to align with the vertical side of the snout
        snoutCircle.position.set(0, 0.84, 0.5); // Adjust position to align with the snout's vertical flat side
        snoutCircle.rotation.y = Math.PI / 2; // Rotate the circle to match the vertical flat side

        // Group the left, right snout halves, and the circle together
        const halfSnoutGroup = new THREE.Group();
        halfSnoutGroup.add(leftSnout);
        halfSnoutGroup.add(rightSnout);
        halfSnoutGroup.add(snoutCircle);

        // Add the snout group to the bear group
        bearGroup.add(halfSnoutGroup);

        const heartMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x7FC8A9,  // Silver color
            metalness: 1.0,    // Fully metallic for reflective surface
            roughness: 0.25,    // Slightly rough to blur reflections
            envMap: sunTexture, // Apply environment map for reflections
            clearcoat: 0.7,    // Adds a layer of reflectiveness on top
            clearcoatRoughness: 0.3,  // Roughness of the clear coat layer
        });

        // Heart shape
        const heartShape = new THREE.Shape();
        heartShape.moveTo(0, 0);
        heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
        heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
        heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
        heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);

        // Extrude the heart shape into 3D
        const extrudeHeartSettings = { depth: 0.4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
        const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeHeartSettings);

        const heart = new THREE.Mesh(heartGeometry, heartMaterial);
        heart.scale.set(0.3, 0.3, 0.3);
        heart.position.set(0.25, 1.1, 0);
        heart.rotation.y = Math.PI;
        heart.rotation.x = Math.PI;
        bearGroup.add(heart);

        // Bear arms
        const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
        const leftArm = new THREE.Mesh(armGeometry, bodyTransparentBeachMaterial);
        leftArm.scale.set(0.75, 1.25, 0.65);
        leftArm.position.set(-0.7, -0.15, 0.2);
        bearGroup.add(leftArm);

        const rightArm = new THREE.Mesh(armGeometry, bodyTransparentBeachMaterial);
        rightArm.scale.set(0.75, 1.25, 0.65);
        rightArm.position.set(0.7, -0.15, 0.2);
        bearGroup.add(rightArm);

        // Bear legs
        const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32);
        const leftLeg = new THREE.Mesh(legGeometry, leftBeachMaterial);
        leftLeg.position.set(-0.4, -1.05, 0);
        bearGroup.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeometry, leftBeachMaterial);
        rightLeg.position.set(0.4, -1.05, 0);
        bearGroup.add(rightLeg);

        // Define the boot front geometry
        const bootFrontGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Front half-round for the boot

        // Left boot front
        const leftBootFront = new THREE.Mesh(bootFrontGeometry, leftBeachMaterial);
        leftBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        leftBootFront.position.set(-0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(leftBootFront);

        // Right boot front
        const rightBootFront = new THREE.Mesh(bootFrontGeometry, leftBeachMaterial);
        rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(rightBootFront);

        // Create rounded buttocks
        const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
        const leftButtock = new THREE.Mesh(buttockGeometry, leftBeachMaterial);
        leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
        bearGroup.add(leftButtock);

        const rightButtock = new THREE.Mesh(buttockGeometry, rightBeachMaterial);
        rightButtock.position.set(0.15, -.45, -0.4); // Position the right buttock behind the body
        bearGroup.add(rightButtock);

        // Bear tail
        const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32);
        const tail = new THREE.Mesh(tailGeometry, leftBeachMaterial);
        tail.position.set(0, -0.35, -0.8);
        bearGroup.add(tail);

        // Load font and create 3D text
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
        const xEyeGeometry = new TextGeometry('X', {
            font: font,
            size: 0.2, // Size of the X
            depth: 0.05,
         });

        const xEye = new THREE.Mesh(xEyeGeometry, leftLegtMaterial);
        xEye.position.set(-0.3, .99, 0.53); // Position on the head
        xEye.rotation.x = THREE.MathUtils.degToRad(-5);
        xEye.rotation.y = THREE.MathUtils.degToRad(-15);
        bearGroup.add(xEye);

       // Create the O eye
        const oEyeGeometry = new TextGeometry('O', {
        font: font,
        size: 0.2, // Size of the O
        depth: 0.05, // Thickness of the O
        });

        const oEye = new THREE.Mesh(oEyeGeometry, leftLegtMaterial);
        oEye.position.set(0.14, .99, 0.53); // Position on the head
        oEye.rotation.y = THREE.MathUtils.degToRad(12);
        oEye.rotation.x = THREE.MathUtils.degToRad(-5);
        bearGroup.add(oEye);
      });


      // Update heart renderOrder to ensure it's always drawn last
      // tail.renderOrder = 1;

      // the end of the bear body

      // Add bear group to the scene
      bearGroup.scale.set(1.4, 1.4, 1.4);
      scene.add(bearGroup);

      // Set initial positions for bearGroup and camera
      bearGroup.position.set(props.bodyPosition.x, props.bodyPosition.y, props.bodyPosition.z);
      camera.position.set(props.bodyPosition.x, 1, props.cameraPosition);
      camera.lookAt(props.bodyPosition.x, 0, 0);

      camera.position.z = 4;

    // New mouse tracking functionality
    const mouse = { x: 0, y: 0 };

    // Update bearGroup rotation based on mouse movement
    const onMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Calculate rotation based on mouse position
      const targetRotationY = mouse.x * Math.PI * 0.2; // Y-axis rotation (left-right)
      const targetRotationX = mouse.y * Math.PI * 0.2; // X-axis rotation (up-down)

      // Apply the calculated rotation to the bear group
      bearGroup.rotation.y = targetRotationY;
      bearGroup.rotation.x = targetRotationX;
    };

    // Add event listener for mouse movement
    // window.addEventListener('mousemove', onMouseMove);

    bearGroup.rotation.x = 0.1; // Reset any upward tilt

      function animate() {
          requestAnimationFrame(animate);
          if (isRotatingRight.value) bearGroup.rotation.y += 0.03;
          if (isRotatingLeft.value) bearGroup.rotation.y -= 0.03;
          if (isRotatingUp.value) bearGroup.rotation.x -= 0.03;
          if (isRotatingDown.value) bearGroup.rotation.x += 0.03;

          waterSurfaceMaterial.uniforms.u_time.value += 0.25;

          heart.rotation.y += 0.04;

          renderer.render(scene, camera);
    }
        animate();

      // Watch for changes in bodyPosition
        watch(() => props.bodyPosition, (newPos) => {
            bearGroup.position.set(newPos.x, newPos.y, newPos.z);
        });

      // Watch for changes in cameraPosition
        watch(() => props.cameraPosition, (newPos) => {
            camera.position.set(props.bodyPosition.x, 1, newPos);
            camera.lookAt(props.bodyPosition.x, 0, 0);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      }
    });

        function onLeftButtonDown() {
          isRotatingLeft.value = true;
        }

        function onRightButtonDown() {
          isRotatingRight.value = true;
        }

        function onUpButtonDown() {
          isRotatingUp.value = true;
        }

        function onDownButtonDown() {
          isRotatingDown.value = true;
        }

        function stopRotation() {
          isRotatingLeft.value = false;
          isRotatingRight.value = false;
          isRotatingUp.value = false;
          isRotatingDown.value = false;
        }

    </script>

    <style scoped>
    .three-canvas {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: radial-gradient(circle, #FFA07A 60%, #FFD700 40%);

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .no-bg {
         margin: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        background: none;
    }

    .pixel-controls {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(120%) translateY(-100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        }

        .side-buttons {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        }

        .pixel-btn {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 14px;
        background-color: #FF6347; /* Coral color */
        color: white;
        padding: 15px;
        border: 4px solid #FFD700; /* Gold color */
        box-shadow: 3px 3px 0 #FFD700, 6px 6px 0 #FFA07A; /* Light salmon shadow */
        text-transform: uppercase;
        transition: transform 0.2s ease-in-out;
        cursor: pointer;
        border-radius: 10px; /* Rounded corners */
    }

    .pixel-btn:hover {
        background-color: #FFD700; /* Gold on hover */
        color: #000080; /* Navy text color */
        transform: translate(-3px, -3px);
    }

    .pixel-btn:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 #FFD700, 2px 2px 0 #FFA07A;
    }

        .bear-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            }
    </style>
