import { ref, onMounted, watch } from 'vue';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import gsap from 'gsap';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
const threeCanvas = ref(null);
onMounted(() => {
    if (threeCanvas.value) {
        // Initialize the Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // renderer.toneMappingExposure = 1.25;
        threeCanvas.value.appendChild(renderer.domElement);
        // Create the bear group and all parts
        const bearGroup = new THREE.Group();
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
        // Load gradient-like texture
        const textureLoader = new THREE.TextureLoader();
        // Configure cube render target for reflections
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
            format: THREE.RGBAFormat,
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter,
        });
        // Create CubeCamera with the correct WebGLCubeRenderTarget
        const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
        // Add the cubeCamera and bear group to the scene
        scene.add(cubeCamera);
        scene.environment = cubeRenderTarget.texture; // Set environment map for reflections
        // Update reflections regularly
        function updateReflection() {
            bearGroup.visible = false; // Hide bear during cube camera reflection capture
            cubeCamera.update(renderer, scene); // Update cube camera to reflect environment
            bearGroup.visible = true; // Show the bear again
            requestAnimationFrame(updateReflection);
        }
        updateReflection(); // Start reflection updates
        const mirrorLoader = new THREE.CubeTextureLoader();
        const environmentMap = mirrorLoader.load([
            '/3d-bear-arts/assets/cash.jpg',
            '/3d-bear-arts/assets/cash.jpg',
            '/3d-bear-arts/assets/cash.jpg',
            '/3d-bear-arts/assets/cash.jpg',
            '/3d-bear-arts/assets/cash.jpg',
            '/3d-bear-arts/assets/cash.jpg'
        ]);
        scene.environment = environmentMap;
        function createVisibleCashPool() {
            const poolGroup = new THREE.Group();
            const textureLoader = new THREE.TextureLoader();
            // Load cash texture
            const cashTexture = textureLoader.load('/3d-bear-arts/assets/dollar.jpg');
            // 🏊 Smaller Pool Base (Shallower and Raised)
            const poolBaseGeometry = new THREE.BoxGeometry(0.7, 0.15, 0.35); // Smaller and not deep
            const poolBaseMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x32CD32, // Light Green (Brighter to stand out)
                transparent: true,
                opacity: 0.85, // More transparent for visibility
                transmission: 0.9, // Light passes through
                roughness: 0.15, // Some reflectivity for a wet look
                metalness: 0.3, // Slight metallic shine for a cash-like texture
                emissive: 0x2E8B57, // Greenish glow effect
                emissiveIntensity: 0.3,
            });
            const poolBase = new THREE.Mesh(poolBaseGeometry, poolBaseMaterial);
            poolBase.position.set(0, -0.25, 0); // Higher up so it’s not hidden
            poolGroup.add(poolBase);
            // 🏊 Pool Walls (Smaller)
            const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 }); // Darker green for contrast
            const wallThickness = 0.03;
            const walls = [
                new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, wallThickness), wallMaterial), // Front
                new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, wallThickness), wallMaterial), // Back
                new THREE.Mesh(new THREE.BoxGeometry(wallThickness, 0.2, 0.5), wallMaterial), // Left
                new THREE.Mesh(new THREE.BoxGeometry(wallThickness, 0.2, 0.5), wallMaterial), // Right
            ];
            walls[0].position.set(0, -0.15, 0.25); // Front
            walls[1].position.set(0, -0.15, -0.25); // Back
            walls[2].position.set(-0.35, -0.15, 0); // Left
            walls[3].position.set(0.35, -0.15, 0); // Right
            walls.forEach(wall => poolGroup.add(wall));
            // 💵 Floating Cash Bills (Smaller and More Visible)
            function createFloatingCash() {
                const cashGeometry = new THREE.PlaneGeometry(0.25, 0.15);
                const cashMaterial = new THREE.MeshBasicMaterial({
                    map: cashTexture,
                    transparent: true,
                    side: THREE.DoubleSide,
                });
                const cash = new THREE.Mesh(cashGeometry, cashMaterial);
                cash.position.set(Math.random() * 0.6 - 0.3, Math.random() * 0.1 - 0.07, // Slightly raised for visibility
                Math.random() * 0.4 - 0.2);
                cash.rotation.y = Math.random() * Math.PI;
                return cash;
            }
            for (let i = 0; i < 60; i++) {
                const cashBill = createFloatingCash();
                poolGroup.add(cashBill);
                // 🌀 Floating animation for cash bills
                gsap.to(cashBill.position, {
                    y: '+=0.02',
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
                gsap.to(cashBill.rotation, {
                    z: Math.PI * (Math.random() - 0.5),
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
            function jumpDuck(duck) {
                gsap.to(duck.position, {
                    y: .5, // Jump up
                    duration: 0.5,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        gsap.to(duck.position, { y: -0.2, duration: 0.3, ease: "bounce.out" });
                    },
                });
            }
            setInterval(() => {
                jumpDuck(redDuck);
                setTimeout(() => jumpDuck(greenDuck), 500);
                setTimeout(() => jumpDuck(blueDuck), 1000);
                setTimeout(() => jumpDuck(richDonaldDuck), 1500);
            }, 3000);
            return poolGroup;
        }
        // Usage: Attach inside the Bear’s Body
        const cashPool = createVisibleCashPool();
        cashPool.position.set(0.4, -0.4, 0); // Adjusted position to fit inside the bear
        bearGroup.add(cashPool);
        const leftMaterialSkin = textureLoader.load('/3d-bear-arts/assets/threeDucks.jpg');
        leftMaterialSkin.wrapS = leftMaterialSkin.wrapT = THREE.RepeatWrapping;
        leftMaterialSkin.repeat.set(1, 1);
        const rightMaterialSkin = textureLoader.load('/3d-bear-arts/assets/cash.jpg');
        const leftMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xFFFFFF,
            map: leftMaterialSkin, // Apply the abstract or halftone texture
            metalness: 0.2, // Lower metalness for less reflective look
            roughness: 0.7, // Increase roughness for a more matte finish
            clearcoat: 0.05, // Lower clearcoat to reduce gloss
            clearcoatRoughness: 0.9, // Increase clearcoat roughness for less shine
        });
        const rightMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xFFFFFF, // Bright yellow color for the head
            map: rightMaterialSkin, // Apply a halftone or abstract texture
            metalness: 0.3, // Slight metalness for a subtle shine
            roughness: 0.5, // Some roughness to reduce reflections
            transparent: true, // Enable transparency
            opacity: 0.2,
        });
        // const leftMaterial = new THREE.MeshPhysicalMaterial({
        //   color: 'white', 
        //   // map: leftMaterialSkin,  // Apply the abstract or halftone texture
        //   metalness: 1.0,  // Full metalness for maximum reflectivity
        //   roughness: 0.05, // Low roughness for sharper reflections
        //   clearcoat: 1.0,  // High clearcoat for added shine
        //   clearcoatRoughness: 0.05, // Low clearcoat roughness for more shine
        //   envMap: environmentMap, // Link the environment map
        //   reflectivity: 1, // Maximum reflectivity
        // });
        // const rightMaterial = new THREE.MeshPhysicalMaterial({
        //   color: 'white', 
        //   map: rightMaterialSkin,  // Apply a halftone or abstract texture
        //   transparent: true, // Enable transparency
        //   opacity: 0.3,
        //   metalness: 1.0,  // Full metalness for maximum reflectivity
        //   roughness: 0.05, // Low roughness for sharper reflections
        //   clearcoat: 1.0,  // High clearcoat for added shine
        //   clearcoatRoughness: 0.05, // Low clearcoat roughness for more shine
        //   envMap: environmentMap, // Link the environment map
        //   reflectivity: 1, // Maximum reflectivity
        // });
        const eyeMaterial = new THREE.MeshPhysicalMaterial({
            color: 'white', // Silver color
            metalness: 1.0, // Full metalness for maximum reflectivity
            roughness: 0.05, // Low roughness for sharper reflections
            clearcoat: 1.0, // High clearcoat for added shine
            clearcoatRoughness: 0.05, // Low clearcoat roughness for more shine
            envMap: environmentMap, // Link the environment map
            reflectivity: 1, // Maximum reflectivity
        });
        const circleMap = textureLoader.load('/3d-bear-arts/assets/threeDucks.jpg');
        const circleMap2 = textureLoader.load('/3d-bear-arts/assets/richduck.jpg');
        const transparentCircleMaterial = new THREE.MeshPhysicalMaterial({
            color: 'pink', // Bright yellow color for the head
            map: circleMap, // Apply a halftone or abstract texture
            metalness: 0.3, // Slight metalness for a subtle shine
            roughness: 0.5, // Some roughness to reduce reflections
            transparent: true,
            opacity: 1
        });
        const bodyCircleMaterial = new THREE.MeshPhysicalMaterial({
            color: 'pink', // Bright yellow color for the head
            map: circleMap2, // Apply a halftone or abstract texture
            metalness: 0.3, // Slight metalness for a subtle shine
            roughness: 0.5, // Some roughness to reduce reflections
            transparent: true,
            opacity: 1
        });
        const bigHeartMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
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
            vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + time) * 0.5 + 0.5);
            gl_FragColor = vec4(color, 1.0);
          }
        `,
        });
        const vertexShader1 = `
    varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
    `;
        const fragmentShader1 = `
      uniform float time;
          uniform float opacity; // Add opacity uniform
          varying vec2 vUv;
      
          void main() {
              // Dynamic water-like gradient effect
              vec2 p = vUv * 2.0 - vec2(1.0); // Normalize UV coordinates to [-1, 1]
              float len = length(p); // Get the length of the vector (distance from center)
              float angle = atan(p.y, p.x); // Calculate the angle in polar coordinates
      
              // Create a time-based oscillating value for smooth gradient transitions
              float wave = sin(len * 10.0 - time * 3.0) * 1.0 + 0.5;
      
              // Color gradient based on the angle and distance from the center
              vec3 color1 = vec3(1.0, 0.078, 0.576); 
              vec3 color2 = vec3(0.878, 0.878, 0.878); 
              vec3 color3 = vec3(1.0, 0.0, 0.8); 
      
              // Mix the colors based on wave and angle for a dynamic effect
              vec3 color = mix(color1, color2, wave);
              color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
      
              // Set the fragment color with opacity
              gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
          }
    `;
        const pinkSliverHeartMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 }, // Time uniform to animate the shader
                opacity: { value: 1 } // Opacity uniform (set to 0.6 for 60% transparency)
            },
            vertexShader: vertexShader1,
            fragmentShader: fragmentShader1,
            transparent: false, // Enable transparency in the material
            depthWrite: true // Disable depth writing to ensure proper rendering
        });
        const glossyMaterial = new THREE.MeshPhysicalMaterial({
            color: 'white', // Base color remains white
            metalness: 0.9, // High metalness for reflective effect
            roughness: 0.1, // Low roughness for sharp reflections
            clearcoat: 1.0, // Strong clearcoat for extra gloss
            clearcoatRoughness: 0.2, // A bit rough for natural variation
            transparent: true, // Enable transparency
            opacity: 0.7, // Adjust transparency (lower = more transparent)
            transmission: 0.4, // Light passes through the material (0 = opaque, 1 = full transparency)
            ior: 1.2, // Index of refraction (for a slightly glassy effect)
        });
        const glossyRightMaterial = new THREE.MeshPhysicalMaterial({
            color: 'white', // Base color remains white
            metalness: 0.9, // High metalness for reflective effect
            roughness: 0.1, // Low roughness for sharp reflections
            clearcoat: 1.0, // Strong clearcoat for extra gloss
            clearcoatRoughness: 0.2, // A bit rough for natural variation
            transparent: true, // Enable transparency
            opacity: 0.5, // Adjust transparency (lower = more transparent)
            transmission: 0.8, // Light passes through the material (0 = opaque, 1 = full transparency)
            ior: 1.2, // Index of refraction (for a slightly glassy effect)
        });
        // Create a half-sphere geometry
        const bodyGeometry = new THREE.SphereGeometry(1, // Radius
        32, // Width segments
        32, // Height segments
        0, // phiStart
        Math.PI // phiLength (half of the sphere)
        );
        const rightBody = new THREE.Mesh(bodyGeometry, rightMaterial);
        const leftBody = new THREE.Mesh(bodyGeometry, glossyMaterial);
        rightBody.scale.set(0.85, 0.85, 0.8);
        leftBody.scale.set(0.85, 0.85, 0.8);
        rightBody.position.y = -0.2;
        leftBody.position.y = -0.2;
        rightBody.rotation.y = Math.PI / 2;
        leftBody.rotation.y = Math.PI * 1.5;
        // Create a circular geometry to fill the flat side
        const circleGeometry = new THREE.CircleGeometry(1, 32); // Radius should match the half-sphere
        const circle = new THREE.Mesh(circleGeometry, bodyCircleMaterial);
        circle.scale.set(0.85, 0.85, 0.8);
        // Position the circle to cover the flat side
        circle.position.set(0, -0.2, 0); // Position should match the flat side of the half-sphere
        circle.rotation.y = Math.PI / 2; // Rotate the circle to match the half-sphere's orientation
        // Create a group to combine the half-sphere and the plane
        const halfSphereGroup = new THREE.Group();
        halfSphereGroup.add(rightBody);
        halfSphereGroup.add(leftBody);
        // halfSphereGroup.add(circle);
        // Add the combined geometry to the scene or parent group
        bearGroup.add(halfSphereGroup);
        // Bear head
        // Create half-sphere geometry for the head
        const headGeometry = new THREE.SphereGeometry(0.6, // Radius
        32, // Width segments
        32, // Height segments
        0, // phiStart
        Math.PI // phiLength (half of the sphere)
        );
        // Create the left half of the head
        const leftHead = new THREE.Mesh(headGeometry, glossyMaterial);
        leftHead.scale.set(1, 0.95, 0.95);
        leftHead.position.set(0, 1, 0);
        leftHead.rotation.y = Math.PI * 1.5; // Rotate the left head to match orientation
        // Create the right half of the head
        const rightHead = new THREE.Mesh(headGeometry, glossyRightMaterial);
        rightHead.scale.set(1, 0.95, 0.95);
        rightHead.position.set(0, 1, 0);
        rightHead.rotation.y = Math.PI / 2; // Rotate the right head to match orientation
        // Create a circular geometry to fill the flat side
        const headCircleGeometry = new THREE.CircleGeometry(0.6, 32); // Radileftsus matches the half-sphere
        const headCircle = new THREE.Mesh(headCircleGeometry, transparentCircleMaterial);
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
        const leftEar = new THREE.Mesh(earGeometry, glossyMaterial);
        leftEar.position.set(-0.45, 1.35, -0.1);
        bearGroup.add(leftEar);
        const rightEar = new THREE.Mesh(earGeometry, glossyRightMaterial);
        rightEar.position.set(0.45, 1.35, -0.1);
        bearGroup.add(rightEar);
        // Geometry for the left half of the snout
        const leftSnoutGeometry = new THREE.SphereGeometry(0.25, // Radius
        32, // Width segments
        32, // Height segments
        Math.PI / 2, // phiStart: Start at 90 degrees to create a half-sphere
        Math.PI // phiLength: Cover 180 degrees to create the half shape
        );
        const leftSnout = new THREE.Mesh(leftSnoutGeometry, glossyMaterial);
        leftSnout.scale.set(1.1, 0.6, 0.8); // Make it wider at the front
        leftSnout.position.set(0, 0.84, 0.5); // Position the left half
        leftSnout.rotation.y = Math.PI; // Rotate to align correctly
        // Geometry for the right half of the snout
        const rightSnoutGeometry = new THREE.SphereGeometry(0.25, // Radius
        32, // Width segments
        32, // Height segments
        Math.PI / 2, // phiStart: Start at -90 degrees to create a half-sphere
        Math.PI // phiLength: Cover 180 degrees to create the half shape
        );
        const rightSnout = new THREE.Mesh(rightSnoutGeometry, glossyRightMaterial);
        rightSnout.scale.set(1.1, 0.6, 0.8); // Make it wider at the front
        rightSnout.position.set(0, 0.84, 0.5); // Position the right half
        rightSnout.rotation.y = 0; // Align correctly without additional rotation
        // Circle to cover the flat sides
        const snoutCircleGeometry = new THREE.CircleGeometry(0.25, 32);
        const snoutCircle = new THREE.Mesh(snoutCircleGeometry, transparentCircleMaterial);
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
        // Bear arms
        const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
        const leftArm = new THREE.Mesh(armGeometry, glossyMaterial);
        leftArm.scale.set(0.75, 1.25, 0.65);
        leftArm.position.set(-0.7, -0.15, 0.2);
        bearGroup.add(leftArm);
        const rightArm = new THREE.Mesh(armGeometry, rightMaterial);
        rightArm.scale.set(0.75, 1.25, 0.65);
        rightArm.position.set(0.7, -0.15, 0.2);
        bearGroup.add(rightArm);
        // Bear legs
        const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32);
        const leftLeg = new THREE.Mesh(legGeometry, glossyMaterial);
        leftLeg.position.set(-0.4, -1.05, 0);
        bearGroup.add(leftLeg);
        const rightLeg = new THREE.Mesh(legGeometry, glossyRightMaterial);
        rightLeg.position.set(0.4, -1.05, 0);
        bearGroup.add(rightLeg);
        // Define the boot front geometry
        const bootFrontGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Front half-round for the boot
        // Left boot front
        const leftBootFront = new THREE.Mesh(bootFrontGeometry, glossyMaterial);
        leftBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        leftBootFront.position.set(-0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(leftBootFront);
        // Right boot front
        const rightBootFront = new THREE.Mesh(bootFrontGeometry, glossyRightMaterial);
        rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(rightBootFront);
        // Create rounded buttocks
        const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
        const leftButtock = new THREE.Mesh(buttockGeometry, glossyRightMaterial);
        leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
        bearGroup.add(leftButtock);
        const rightButtock = new THREE.Mesh(buttockGeometry, rightMaterial);
        rightButtock.position.set(0.15, -.45, -0.4); // Position the right buttock behind the body
        bearGroup.add(rightButtock);
        // Bear tail
        const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32);
        const tail = new THREE.Mesh(tailGeometry, glossyMaterial);
        tail.position.set(0, -0.35, -0.8);
        bearGroup.add(tail);
        // Load font and create 3D text
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
            const xEyeGeometry = new TextGeometry('$', {
                font: font,
                size: 0.2, // Size of the X
                depth: 0.1,
            });
            const xEye = new THREE.Mesh(xEyeGeometry, eyeMaterial);
            xEye.position.set(-0.3, .99, 0.53); // Position on the head
            xEye.rotation.x = THREE.MathUtils.degToRad(-5);
            xEye.rotation.y = THREE.MathUtils.degToRad(-15);
            bearGroup.add(xEye);
            // Create the O eye
            const oEyeGeometry = new TextGeometry('$', {
                font: font,
                size: 0.2, // Size of the O
                depth: 0.1, // Thickness of the O
            });
            const oEye = new THREE.Mesh(oEyeGeometry, eyeMaterial);
            oEye.position.set(0.14, .99, 0.53); // Position on the head
            oEye.rotation.y = THREE.MathUtils.degToRad(12);
            oEye.rotation.x = THREE.MathUtils.degToRad(-5);
            bearGroup.add(oEye);
        });
        tail.renderOrder = 1;
        function createRichDonaldDuck() {
            const duckGroup = new THREE.Group();
            // Materials
            const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // White for the body
            const beakMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange for the beak and legs
            const hatMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black for the top hat
            const tieMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red for the tie
            const caneMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown for the cane
            const pantsMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue for the pants
            const glassesMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black for the glasses
            // Head
            const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
            const head = new THREE.Mesh(headGeometry, bodyMaterial);
            head.position.set(0, 1.7, 0);
            duckGroup.add(head);
            // Beak
            const beakGeometry = new THREE.CylinderGeometry(0.15, 0.1, 0.3, 32, 1, true);
            const beakCapGeometry = new THREE.SphereGeometry(0.15, 32, 16, 0, Math.PI);
            const beak = new THREE.Mesh(beakGeometry, beakMaterial);
            const beakCap = new THREE.Mesh(beakCapGeometry, beakMaterial);
            beak.position.set(0, 1.6, 0.45);
            beak.rotation.x = Math.PI / 2;
            beakCap.position.set(0, 1.6, 0.6);
            duckGroup.add(beak);
            duckGroup.add(beakCap);
            // Glasses
            const frameGeometry = new THREE.TorusGeometry(0.15, 0.015, 16, 100);
            const leftFrame = new THREE.Mesh(frameGeometry, glassesMaterial);
            leftFrame.position.set(-0.25, 1.8, 0.5);
            const rightFrame = new THREE.Mesh(frameGeometry, glassesMaterial);
            rightFrame.position.set(0.25, 1.8, 0.5);
            const bridgeGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.3, 16);
            const bridge = new THREE.Mesh(bridgeGeometry, glassesMaterial);
            bridge.position.set(0, 1.85, 0.5);
            bridge.rotation.z = Math.PI / 2;
            duckGroup.add(leftFrame, rightFrame, bridge);
            // Body
            const bodyGeometry = new THREE.SphereGeometry(0.6, 32, 32);
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.position.set(0, 0.7, 0);
            duckGroup.add(body);
            // Pants
            const pantsGeometry = new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI); // Half-sphere for pants
            const pants = new THREE.Mesh(pantsGeometry, pantsMaterial);
            pants.position.set(0, 0.6, 0);
            pants.rotation.x = Math.PI / 2;
            duckGroup.add(pants);
            // Legs
            const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32);
            const leftLeg = new THREE.Mesh(legGeometry, beakMaterial);
            leftLeg.position.set(-0.3, -0.1, 0);
            duckGroup.add(leftLeg);
            const rightLeg = new THREE.Mesh(legGeometry, beakMaterial);
            rightLeg.position.set(0.3, -0.1, 0);
            duckGroup.add(rightLeg);
            // Feet
            const footShape = new THREE.Shape();
            footShape.moveTo(0, 0);
            footShape.lineTo(0.3, 0.1);
            footShape.lineTo(0.15, -0.1);
            footShape.lineTo(-0.15, -0.1);
            footShape.lineTo(-0.3, 0.1);
            footShape.closePath();
            const footGeometry = new THREE.ExtrudeGeometry(footShape, { depth: 0.1, bevelEnabled: false });
            const leftFoot = new THREE.Mesh(footGeometry, beakMaterial);
            leftFoot.position.set(-0.3, -0.3, 0.1);
            leftFoot.rotation.x = Math.PI / 2;
            duckGroup.add(leftFoot);
            const rightFoot = new THREE.Mesh(footGeometry, beakMaterial);
            rightFoot.position.set(0.3, -0.3, 0.1);
            rightFoot.rotation.x = Math.PI / 2;
            duckGroup.add(rightFoot);
            // Tie
            const tieShape = new THREE.Shape();
            tieShape.moveTo(0, 0);
            tieShape.lineTo(-0.15, -0.3);
            tieShape.lineTo(0, -0.5);
            tieShape.lineTo(0.15, -0.3);
            tieShape.closePath();
            const tieGeometry = new THREE.ExtrudeGeometry(tieShape, { depth: 0.05, bevelEnabled: true, bevelSize: 0.01 });
            const tie = new THREE.Mesh(tieGeometry, tieMaterial);
            tie.position.set(0, 1.3, 0.45);
            tie.rotation.x = Math.PI / 8;
            duckGroup.add(tie);
            // Top Hat
            const hatBaseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32);
            const hatBase = new THREE.Mesh(hatBaseGeometry, hatMaterial);
            hatBase.position.set(0, 2.1, 0);
            duckGroup.add(hatBase);
            const hatTopGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 32);
            const hatTop = new THREE.Mesh(hatTopGeometry, hatMaterial);
            hatTop.position.set(0, 2.4, 0);
            duckGroup.add(hatTop);
            // Cane
            const caneGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16);
            const cane = new THREE.Mesh(caneGeometry, caneMaterial);
            cane.position.set(0.85, 0.5, 0);
            cane.rotation.z = Math.PI / 8;
            duckGroup.add(cane);
            return duckGroup;
        }
        const richDonaldDuck = createRichDonaldDuck();
        richDonaldDuck.scale.set(0.22, 0.22, 0.22);
        richDonaldDuck.position.set(0.3, -0.2, 0);
        bearGroup.add(richDonaldDuck);
        function createSmallDuck(pantsColor, hatColor) {
            const duckGroup = new THREE.Group();
            // Materials
            const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // White for the body
            const beakMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange for the beak and legs
            const pantsMaterial = new THREE.MeshStandardMaterial({ color: pantsColor }); // Custom color for the pants
            const hatMaterial = new THREE.MeshStandardMaterial({ color: hatColor });
            // Head
            const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
            const head = new THREE.Mesh(headGeometry, bodyMaterial);
            head.position.set(0, 1.7, 0);
            duckGroup.add(head);
            // Beak
            const beakGeometry = new THREE.CylinderGeometry(0.15, 0.1, 0.3, 32, 1, true);
            const beakCapGeometry = new THREE.SphereGeometry(0.15, 32, 16, 0, Math.PI);
            const beak = new THREE.Mesh(beakGeometry, beakMaterial);
            const beakCap = new THREE.Mesh(beakCapGeometry, beakMaterial);
            beak.position.set(0, 1.6, 0.45);
            beak.rotation.x = Math.PI / 2;
            beakCap.position.set(0, 1.6, 0.6);
            duckGroup.add(beak);
            duckGroup.add(beakCap);
            // Body
            const bodyGeometry = new THREE.SphereGeometry(0.6, 32, 32);
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.position.set(0, 0.7, 0);
            duckGroup.add(body);
            // Pants
            const pantsGeometry = new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI); // Half-sphere for pants
            const pants = new THREE.Mesh(pantsGeometry, pantsMaterial);
            pants.position.set(0, 0.6, 0);
            pants.rotation.x = Math.PI / 2;
            duckGroup.add(pants);
            // Legs
            const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32);
            const leftLeg = new THREE.Mesh(legGeometry, beakMaterial);
            leftLeg.position.set(-0.3, -0.1, 0);
            duckGroup.add(leftLeg);
            const rightLeg = new THREE.Mesh(legGeometry, beakMaterial);
            rightLeg.position.set(0.3, -0.1, 0);
            duckGroup.add(rightLeg);
            // Feet
            const footShape = new THREE.Shape();
            footShape.moveTo(0, 0);
            footShape.lineTo(0.3, 0.1);
            footShape.lineTo(0.15, -0.1);
            footShape.lineTo(-0.15, -0.1);
            footShape.lineTo(-0.3, 0.1);
            footShape.closePath();
            const footGeometry = new THREE.ExtrudeGeometry(footShape, { depth: 0.1, bevelEnabled: false });
            const leftFoot = new THREE.Mesh(footGeometry, beakMaterial);
            leftFoot.position.set(-0.3, -0.3, 0.1);
            leftFoot.rotation.x = Math.PI / 2;
            duckGroup.add(leftFoot);
            const rightFoot = new THREE.Mesh(footGeometry, beakMaterial);
            rightFoot.position.set(0.3, -0.3, 0.1);
            rightFoot.rotation.x = Math.PI / 2;
            duckGroup.add(rightFoot);
            // Baseball Hat
            const hatBaseGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
            const hatBase = new THREE.Mesh(hatBaseGeometry, hatMaterial);
            hatBase.position.set(0, 2.1, 0);
            duckGroup.add(hatBase);
            const hatTopGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 32);
            const hatTop = new THREE.Mesh(hatTopGeometry, hatMaterial);
            hatTop.position.set(0, 2.4, 0);
            duckGroup.add(hatTop);
            return duckGroup;
        }
        const redDuck = createSmallDuck(0xff0000, 0xff0000); // Red pants and red hat
        redDuck.scale.set(0.12, 0.12, 0.12);
        redDuck.position.set(0.3, -0.2, 0.15); // Before: -0.5, now: -0.2
        bearGroup.add(redDuck);
        const greenDuck = createSmallDuck(0x00ff00, 0x00ff00); // Green pants and green hat
        greenDuck.scale.set(0.12, 0.12, 0.12);
        greenDuck.position.set(0.2, -0.15, 0.4); // Before: -0.5, now: -0.15
        bearGroup.add(greenDuck);
        const blueDuck = createSmallDuck(0x0000ff, 0x0000ff); // Blue pants and blue hat
        blueDuck.scale.set(0.12, 0.12, 0.12);
        blueDuck.position.set(0.5, -0.15, 0.35); // Before: -0.5, now: -0.15
        bearGroup.add(blueDuck);
        // Add bear group to the scene
        bearGroup.scale.set(1.4, 1.4, 1.4);
        scene.add(bearGroup);
        // Set initial positions for bearGroup and camera
        bearGroup.position.set(props.bodyPosition.x, props.bodyPosition.y, props.bodyPosition.z);
        camera.position.set(props.bodyPosition.x, 1.4, props.cameraPosition);
        camera.lookAt(props.bodyPosition.x, 0, 0);
        camera.position.z = 4;
        const mouse = { x: 0, y: 0 };
        let isAnimating = true; // To track if the bear should be rotating
        let timeoutId = null; // To track the timeout when resuming the animation
        let currentRotationY = 0; // Current rotation for Y-axis
        let currentRotationX = 0; // Current rotation for X-axis
        // let isRotatingody = ref(false); // Is rotating to right
        // let isRotatingLeft = ref(false);  // Is rotating to left
        let shouldFaceMouse = ref(false); // Should bear face the mouse?
        const storeCurrentRotation = () => {
            currentRotationY = bearGroup.rotation.y;
            currentRotationX = bearGroup.rotation.x;
        };
        // const startRotateRight = () => {
        //   isRotatingRight.value = true;
        //   isRotatingLeft.value = false;
        //   shouldFaceMouse.value = false;
        // };
        // const startRotateLeft = () => {
        //   isRotatingRight.value = false;
        //   isRotatingLeft.value = true;
        //   shouldFaceMouse.value = false;
        // };
        // // Stop all rotations
        // const stopRotation = () => {
        //   isRotatingRight.value = false;
        //   isRotatingLeft.value = false;
        //   storeCurrentRotation();
        // };
        // Update the logic to store the current rotation when the mouse stops
        const handleMouseStop = (mouseX) => {
            const centerX = window.innerWidth / 2;
            // If mouse stops on the right side, rotate to right, otherwise to the left
            // if (mouseX > centerX) {
            //   startRotateRight();
            // } else {
            //   startRotateLeft();
            // }
            // Capture the current rotation of the bear when the mouse stops
            storeCurrentRotation();
        };
        // Logic to update bear rotation based on the mouse movement
        const onMouseMove = (event) => {
            clearTimeout(timeoutId);
            stopRotation(); // Stop any ongoing rotation when mouse moves
            shouldFaceMouse.value = true; // Allow the bear to face the mouse
            // Capture the mouse position
            const mouse = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            };
            // Rotate the bear to face the mouse
            if (shouldFaceMouse.value) {
                const targetRotationY = mouse.x * Math.PI * 0.2;
                const targetRotationX = mouse.y * Math.PI * 0.2;
                bearGroup.rotation.y = targetRotationY;
                bearGroup.rotation.x = targetRotationX;
                // Store the current rotation
                currentRotationY = targetRotationY;
                currentRotationX = targetRotationX;
            }
            // Set a delay to trigger the stop logic again after no movement
            timeoutId = setTimeout(() => {
                shouldFaceMouse.value = false; // Stop facing the mouse after 2 seconds of no movement
                handleMouseStop(event.clientX);
            }, 500); // 2 seconds delay before rotating
        };
        // Add event listener for mouse movement
        // window.addEventListener('mousemove', onMouseMove);
        // Logic to trigger the bear facing the mouse (after 2 seconds of no movement)
        const onMouseStopForFacing = (event) => {
            if (shouldFaceMouse.value) {
                const mouse = {
                    x: (event.clientX / window.innerWidth) * 2 - 1,
                    y: -(event.clientY / window.innerHeight) * 2 + 1
                };
                const targetRotationY = mouse.x * Math.PI * 0.2;
                const targetRotationX = mouse.y * Math.PI * 0.2;
                bearGroup.rotation.y = targetRotationY;
                bearGroup.rotation.x = targetRotationX;
            }
        };
        window.addEventListener('mousemove', onMouseStopForFacing);
        function animate() {
            requestAnimationFrame(animate);
            pinkSliverHeartMaterial.uniforms.time.value += 0.05;
            if (isRotatingRight.value)
                bearGroup.rotation.y += 0.05;
            if (isRotatingLeft.value)
                bearGroup.rotation.y -= 0.07;
            if (isRotatingUp.value)
                bearGroup.rotation.x -= 0.05;
            if (isRotatingDown.value)
                bearGroup.rotation.x += 0.05;
            // bearGroup.rotation.y -= 0.03;
            // if (isRotatingRight.value) {
            //   bearGroup.rotation.y += 0.03; 
            // } else if (isRotatingLeft.value) {
            //   bearGroup.rotation.y -= 0.03;
            // }
            renderer.render(scene, camera);
        }
        bigHeartMaterial.uniforms.time.value += 0.04;
        animate();
        watch(() => props.bodyPosition, (newPos) => {
            bearGroup.position.set(newPos.x, newPos.y, newPos.z);
        });
        watch(() => props.cameraPosition, (newPos) => {
            camera.position.set(props.bodyPosition.x, 1, newPos);
            camera.lookAt(props.bodyPosition.x, 0, 0);
        });
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
});
let isRotatingRight = ref(false); // Flag for right rotation
let isRotatingLeft = ref(false); // Flag for left rotation
let isRotatingUp = ref(false); // Flag for up rotation
let isRotatingDown = ref(false); // Flag for down rotation
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
const numConfetti = 15;
for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 4}s`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(confetti);
}
// Add twinkling lights
const numLights = 5;
for (let i = 0; i < numLights; i++) {
    const light = document.createElement('div');
    light.classList.add('light');
    document.body.appendChild(light);
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
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
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['three-canvas'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['pixel-btn'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("threeCanvas"), ...{ class: ((__VLS_ctx.background ? 'no-bg' : 'three-canvas')) }, });
    // @ts-ignore navigation for `const threeCanvas = ref()`
    __VLS_ctx.threeCanvas;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pixel-controls") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onUpButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn up border-gold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side-buttons") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onLeftButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn left border-silver") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onRightButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn right border-silver") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onDownButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn down border-gold") }, });
    __VLS_styleScopedClasses['pixel-controls'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['up'];
    __VLS_styleScopedClasses['border-gold'];
    __VLS_styleScopedClasses['side-buttons'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['left'];
    __VLS_styleScopedClasses['border-silver'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['right'];
    __VLS_styleScopedClasses['border-silver'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['down'];
    __VLS_styleScopedClasses['border-gold'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "threeCanvas": __VLS_nativeElements['div'],
    };
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            threeCanvas: threeCanvas,
            onLeftButtonDown: onLeftButtonDown,
            onRightButtonDown: onRightButtonDown,
            onUpButtonDown: onUpButtonDown,
            onDownButtonDown: onDownButtonDown,
            stopRotation: stopRotation,
        };
    },
    props: {
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
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
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
    },
});
;
