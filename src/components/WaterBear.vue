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

//         1. Light Coral (#F08080)
// This color provides a warm contrast to the blue tones in the background and adds a playful touch.
// Works well as a pastel tone for a soft look.
// 2. Turquoise (#40E0D0)
// Offers a refreshing, aquatic vibe.
// Complements the beachy theme and provides a vibrant look.
// 3. Sandy Brown (#F4A460)
// Mimics the color of beach sand, creating a harmonious look with the water-themed background.
// Adds a natural and subtle touch.
// 4. Pale Goldenrod (#EEE8AA)
// A soft, light yellow that can give the bear a sunlit, beachy feel.
// Makes the bear appear warm and cheerful.
// 5. Lavender (#E6E6FA)
// A cool, light purple that contrasts nicely with the blues and adds a magical touch to the design.
// Adds a dreamy feel to the scene.
// 6. Deep Sky Blue (#00BFFF)
// Matches the water elements and helps the bear blend seamlessly with the beach theme.
// Gives a unified, calming appearance.
// 7. Mint Green (#98FF98)
// Adds a fresh, lively tone to the bear's look.
// Pairs well with the water theme and gives a summery vibe.
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
        const sunTexture = textureLoader.load('/3d-bear-arts/assets/sun.jpg');
        const gearTexture = textureLoader.load('/3d-bear-arts/assets/gear.jpg');
        const underwaterTexture = textureLoader.load('/3d-bear-arts/assets/underwater.jpg');
        const beachTexture = textureLoader.load('/3d-bear-arts/assets/beach.jpg');

        underwaterTexture.wrapS = underwaterTexture.wrapT = THREE.RepeatWrapping;
        beachTexture.wrapS = beachTexture.wrapT = THREE.RepeatWrapping;
        beachTexture.repeat.set(0.8,1);

        gearTexture.mapping = THREE.EquirectangularReflectionMapping;
        sunTexture.wrapS = sunTexture.wrapT = THREE.RepeatWrapping;
        // sunTexture.repeat.set(2, 2); // Adjust this to scale the texture on the model

        const bubbleSoftMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF, // Softer mint green color
            metalness: 0.05, // Lower metalness for less reflectivity
            roughness: 0.4,  // Increase roughness for a less shiny appearance
            clearcoat: 0.9,  // Slightly reduce the clearcoat for less gloss
            clearcoatRoughness: 0.2,  // Increase clearcoat roughness to soften reflections
            reflectivity: 0.6,  // Reduce reflectivity for a more subtle effect
            map: beachTexture,
            envMapIntensity: 0.8,  // Lower environment map intensity
            side: THREE.DoubleSide,  // Keep double-sided rendering
            transparent: true,  // Maintain transparency
            opacity: .7,  // Reduce opacity for a more subtle translucent effect
        });

        const bubbleMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF, // Soft blue for a water-like feel
          metalness: 0.05, // Low metalness to avoid a metallic look
          roughness: 0.5,  // Slightly higher roughness for softer reflections
          clearcoat: 0.7,  // Slightly less clearcoat to balance glossiness
          clearcoatRoughness: 0.25, // Additional roughness to soften reflections
          reflectivity: 0.4,  // Lower reflectivity for a more subtle look
          map: beachTexture, // Texture for additional depth
          envMapIntensity: 0.6, // Lower environment intensity for a softer effect
          side: THREE.DoubleSide, // Render both sides for fuller effect
          transparent: true,
          opacity: 1, // Reduced opacity for a softer translucency
          transmission: 0.5, // Light transmission for subtle transparency
          ior: 1.33, // Close to water for refractive effect
          depthWrite: false, // Prevents overwriting depth information
          depthTest: true, // Allows depth testing for consistent layering
      });

        const bubbleHeadeMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xB0E2FF, // Softer mint green color 0x7FC8A9
            metalness: 0.05, // Lower metalness for less reflectivity
            roughness: 0.4,  // Increase roughness for a less shiny appearance
            clearcoat: 0.9,  // Slightly reduce the clearcoat for less gloss
            clearcoatRoughness: 0.2,  // Increase clearcoat roughness to soften reflections
            reflectivity: 0.6,  // Reduce reflectivity for a more subtle effect
            envMapIntensity: 0.8,  // Lower environment map intensity
            map: beachTexture,
            side: THREE.DoubleSide,  // Keep double-sided rendering
            transparent: true,  // Maintain transparency
            opacity: 0.9,  // Reduce opacity for a more subtle translucent effect
        });

        const mirrorMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x7FC8A9,  // Silver color
            metalness: 1.0,    // Fully metallic for reflective surface
            roughness: 0.25,    // Slightly rough to blur reflections
            envMap: gearTexture, // Apply environment map for reflections
            clearcoat: 0.7,    // Adds a layer of reflectiveness on top
            clearcoatRoughness: 0.3,  // Roughness of the clear coat layer
        });

        const transparentbubbleMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF, // Light blue tint for visibility
          metalness: 0.1, 
          roughness: 0.3, 
          transparent: true,
          opacity: 0.5, // Reduced slightly for consistent transparency
          clearcoat: 0.6, // Lowered to prevent excess gloss
          clearcoatRoughness: 0.25, // Keep a soft gloss effect
          transmission: 0.6, // Lower transmission for stable transparency
          ior: 1.4, // Adjusted for subtle refraction
          depthWrite: false, // Prevents depth writing for transparent mesh
          depthTest: true,  // Depth testing for overlap consistency
          side: THREE.DoubleSide, // Both sides visible
      });

      const transparentbubbleHeaderMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xB0E2FF, // Light blue tint for visibility
          metalness: 0.1, 
          roughness: 0.3, 
          transparent: true,
          opacity: 0.5, // Reduced slightly for consistent transparency
          map: beachTexture,
          clearcoat: 0.1, // Lowered to prevent excess gloss
          clearcoatRoughness: 0.25, // Keep a soft gloss effect
          transmission: 0.6, // Lower transmission for stable transparency
          ior: 1.4, // Adjusted for subtle refraction
      });

        const sunCircleMaterial = new THREE.MeshPhysicalMaterial({
          color: '#a4d0f5',  // Light blue tint for a bubble-like appearance
          metalness: 0,       // Remove metallic property
          roughness: 0.8,     // Higher roughness for a softer reflection
          map: sunTexture,    // Optional: Add subtle texture
          clearcoat: 0.1,     // Minimal clearcoat for a softer shine
          clearcoatRoughness: 0.7,
          transmission: 0.9,  // High transmission for bubble-like transparency
          opacity: 0.8,       // Slight opacity to give depth
          transparent: true,  // Enable transparency
      });

      const bubbleCircleMaterial = new THREE.MeshPhysicalMaterial({
          color: '#a4d0f5',    // Same light blue tint
          metalness: 0,        // No metallic effect
          roughness: 0.85,     // Higher roughness for diffused reflections
          map: beachTexture,   // Optional: Add beach texture for variation
          clearcoat: 0.1,      // Low clearcoat to reduce shine
          clearcoatRoughness: 0.7,
          transmission: 0.9,   // High transmission for transparency
          opacity: 0.6,        // Slight opacity for softer look
          transparent: true,   // Enable transparency
      });

        // Create a half-sphere geometry
        const bodyGeometry = new THREE.SphereGeometry(
            1,            // Radius
            32,           // Width segments
            32,           // Height segments
            0,            // phiStart
            Math.PI       // phiLength (half of the sphere)
        );

      const rightBody = new THREE.Mesh(bodyGeometry, transparentbubbleMaterial);
      const leftBody = new THREE.Mesh(bodyGeometry, bubbleMaterial);

      rightBody.scale.set(0.85, 0.85, 0.8);
      leftBody.scale.set(0.85, 0.85, 0.8);

      rightBody.position.y = -0.2;
      leftBody.position.y = -0.2;

      rightBody.rotation.y = Math.PI / 2;
      leftBody.rotation.y = Math.PI * 1.5;

      // Create a circular geometry to fill the flat side
        const circleGeometry = new THREE.CircleGeometry(1, 32); // Radius should match the half-sphere
        const circle = new THREE.Mesh(circleGeometry, bubbleCircleMaterial);
        circle.scale.set(0.85, 0.85, 0.8);

        // Position the circle to cover the flat side
        circle.position.set(0, -0.2, 0); // Position should match the flat side of the half-sphere
        circle.rotation.y = Math.PI / 2; // Rotate the circle to match the half-sphere's orientation

        // Create a group to combine the half-sphere and the plane
        const halfSphereGroup = new THREE.Group();
        halfSphereGroup.add(rightBody);
        halfSphereGroup.add(leftBody);
        halfSphereGroup.add(circle);

        // Create water-like geometry inside the bear
        const waterHalfSphereGeometry = new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
        const waterMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x69d2e7, // Light blue color for water
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
        waterCircle.scale.set(.7, .7, .7); // Ensure it slightly overlaps
        waterCircle.position.set(0, -0.3, 0); // Adjust position slightly forward
        waterCircle.rotation.x = Math.PI / 2;
        waterCircle.renderOrder = 1; // Ensures it renders on top

        // Add to the bear group
        halfSphereGroup.add(waterCircle);

        // Combine and add to bearGroup
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
        const leftHead = new THREE.Mesh(headGeometry, bubbleSoftMaterial);
        leftHead.scale.set(1, 0.95, 0.95);
        leftHead.position.set(0, 1, 0);
        leftHead.rotation.y = Math.PI * 1.5; // Rotate the left head to match orientation

        // Create the right half of the head
        const rightHead = new THREE.Mesh(headGeometry, transparentbubbleHeaderMaterial);
        rightHead.scale.set(1, 0.95, 0.95);
        rightHead.position.set(0, 1, 0);
        rightHead.rotation.y = Math.PI / 2; // Rotate the right head to match orientation

        // Create a circular geometry to fill the flat side
        const headCircleGeometry = new THREE.CircleGeometry(0.6, 32); // Radius matches the half-sphere
        const headCircle = new THREE.Mesh(headCircleGeometry, sunCircleMaterial);

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

        // Bear ears
        const earGeometry = new THREE.SphereGeometry(0.25, 32, 32);
        const leftEar = new THREE.Mesh(earGeometry, bubbleSoftMaterial);
        leftEar.position.set(-0.45, 1.35, -0.1);
        bearGroup.add(leftEar);

        const rightEar = new THREE.Mesh(earGeometry, transparentbubbleHeaderMaterial);
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
        const leftSnout = new THREE.Mesh(leftSnoutGeometry, bubbleSoftMaterial);
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
        const rightSnout = new THREE.Mesh(rightSnoutGeometry, transparentbubbleHeaderMaterial);
        rightSnout.scale.set(1.1, 0.6, 0.8); // Make it wider at the front
        rightSnout.position.set(0, 0.84, 0.5); // Position the right half
        rightSnout.rotation.y = 0; // Align correctly without additional rotation

        // Circle to cover the flat sides
        const snoutCircleGeometry = new THREE.CircleGeometry(0.25, 32);
        const snoutCircle = new THREE.Mesh(snoutCircleGeometry, sunCircleMaterial);
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

        // Bear arms
        const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
        const leftArm = new THREE.Mesh(armGeometry, bubbleSoftMaterial);
        leftArm.scale.set(0.75, 1.25, 0.65);
        leftArm.position.set(-0.7, -0.15, 0.2);
        bearGroup.add(leftArm);

        const rightArm = new THREE.Mesh(armGeometry, transparentbubbleHeaderMaterial);
        rightArm.scale.set(0.75, 1.25, 0.65);
        rightArm.position.set(0.7, -0.15, 0.2);
        bearGroup.add(rightArm);

        // Bear legs
        const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32);
        const leftLeg = new THREE.Mesh(legGeometry, bubbleSoftMaterial);
        leftLeg.position.set(-0.4, -1.05, 0);
        bearGroup.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeometry, transparentbubbleHeaderMaterial);
        rightLeg.position.set(0.4, -1.05, 0);
        bearGroup.add(rightLeg);

        // Define the boot front geometry
        const bootFrontGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Front half-round for the boot

        // Left boot front
        const leftBootFront = new THREE.Mesh(bootFrontGeometry, bubbleSoftMaterial);
        leftBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        leftBootFront.position.set(-0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(leftBootFront);

        // Right boot front
        const rightBootFront = new THREE.Mesh(bootFrontGeometry, transparentbubbleHeaderMaterial);
        rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(rightBootFront);

        // Create rounded buttocks
        const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
        const leftButtock = new THREE.Mesh(buttockGeometry, bubbleSoftMaterial);
        leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
        bearGroup.add(leftButtock);

        const rightButtock = new THREE.Mesh(buttockGeometry, transparentbubbleHeaderMaterial);
        rightButtock.position.set(0.15, -.45, -0.4); // Position the right buttock behind the body
        bearGroup.add(rightButtock);

        // Bear tail
        const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32);
        const tail = new THREE.Mesh(tailGeometry, bubbleMaterial);
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

        const xEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const xEye = new THREE.Mesh(xEyeGeometry, bubbleSoftMaterial);
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

        const oEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const oEye = new THREE.Mesh(oEyeGeometry, bubbleMaterial);
        oEye.position.set(0.14, .99, 0.53); // Position on the head
        oEye.rotation.y = THREE.MathUtils.degToRad(12);
        oEye.rotation.x = THREE.MathUtils.degToRad(-5);
        bearGroup.add(oEye);
      });

      tail.renderOrder = 1;

      bearGroup.rotation.x = 0.1; // Reset any upward tilt

      const heart = new THREE.Mesh(heartGeometry, mirrorMaterial);
      heart.scale.set(0.3, 0.3, 0.3);
      heart.position.set(0.25, 1.1, 0);
      heart.rotation.y = Math.PI;
      heart.rotation.x = Math.PI;
      bearGroup.add(heart);

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
    //  window.addEventListener('mousemove', onMouseMove);

      function animate() {
          requestAnimationFrame(animate);
          if (isRotatingRight.value) bearGroup.rotation.y += 0.03;
          if (isRotatingLeft.value) bearGroup.rotation.y -= 0.03;
          if (isRotatingUp.value) bearGroup.rotation.x -= 0.03;
          if (isRotatingDown.value) bearGroup.rotation.x += 0.03;

          // heart.rotation.y += 0.04;

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
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: radial-gradient(circle, #87CEEB 60%, #00BFFF 40%); /* Sky blue to ocean blue gradient */
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


</style>
