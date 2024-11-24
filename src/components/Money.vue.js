import { ref, onMounted, watch } from 'vue';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import BearFace from './BearFaceWhite.vue';
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
        const circleMap = textureLoader.load('/3d-bear-arts/assets/cashwings.jpg');
        // Configure cube render target for reflections
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
            format: THREE.RGBAFormat,
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter,
        });
        // Create CubeCamera with the correct WebGLCubeRenderTarget
        const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
        // Transparent reflective material using gradient texture as envMap
        const transparentBlurrMaterial = new THREE.MeshPhysicalMaterial({
            color: 'sliver', // Silver color for transparency
            metalness: 1.0, // Full metalness for reflectivity
            roughness: 0.05, // Lower roughness for sharper reflections
            clearcoat: 1.0, // High clearcoat for added shine
            clearcoatRoughness: 0.1, // Low clearcoat roughness for shininess
            transparent: true, // Enable transparency
            opacity: 0.4, // Semi-transparent
            envMap: cubeRenderTarget.texture, // Use cube render target texture for reflections
            envMapIntensity: 1.5, // Increase reflection intensity
        });
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
            '/3d-bear-arts/assets/cash2.jpg',
            '/3d-bear-arts/assets/cash8.jpg',
            '/3d-bear-arts/assets/cash1.jpg',
            '/3d-bear-arts/assets/cash11.jpg',
            '/3d-bear-arts/assets/cash4.jpg',
            '/3d-bear-arts/assets/cash3.jpg'
        ]);
        scene.environment = environmentMap;
        const environmentMap1 = mirrorLoader.load([
            '/3d-bear-arts/assets/cashwings.jpg',
            '/3d-bear-arts/assets/cashwings.jpg',
            '/3d-bear-arts/assets/cashwings.jpg',
            '/3d-bear-arts/assets/cashwings.jpg',
            '/3d-bear-arts/assets/cashwings.jpg',
            '/3d-bear-arts/assets/cashwings.jpg'
        ]);
        scene.environment = environmentMap1;
        const sliverMaterial = new THREE.MeshPhysicalMaterial({
            color: 'sliver', // Silver color
            metalness: 1.0, // Full metalness for maximum reflectivity
            roughness: 0.05, // Low roughness for sharper reflections
            clearcoat: 1.0, // High clearcoat for added shine
            clearcoatRoughness: 0.05, // Low clearcoat roughness for more shine
            envMap: environmentMap, // Link the environment map
            reflectivity: 1, // Maximum reflectivity
        });
        const circleMaterial = new THREE.MeshPhysicalMaterial({
            color: 'sliver', // Silver color
            metalness: 1.0, // Full metalness for maximum reflectivity
            roughness: 0.05, // Low roughness for sharper reflections
            clearcoat: 1.0, // High clearcoat for added shine
            clearcoatRoughness: 0.05, // Low clearcoat roughness for more shine
            envMap: environmentMap1, // Link the environment map
            reflectivity: 1, // Maximum reflectivity
        });
        const transparentCircleMaterial = new THREE.MeshPhysicalMaterial({
            color: 'sliver', // Bright yellow color for the head
            map: circleMap, // Apply a halftone or abstract texture
            metalness: 0.3, // Slight metalness for a subtle shine
            roughness: 0.5, // Some roughness to reduce reflections
            transparent: true,
            opacity: 1
        });
        //Import to keep this sliver material
        const transparentSliverMaterial = new THREE.MeshPhysicalMaterial({
            color: 'sliver', // Silver color
            metalness: .75, // High metalness
            roughness: 0.05, // Low roughness for reflective effect
            clearcoat: 1.0, // High clearcoat for added shine
            clearcoatRoughness: 0.05, // Low roughness for clear reflections
            transparent: true, // Enable transparency
            opacity: 0.4, // Semi-transparent
            envMap: environmentMap, // Link the environment map
            reflectivity: 0, // Maximum reflectivity
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
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
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
        const vertexShader = `
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `;
        // Fragment shader
        const fragmentShader = `
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
                vec3 color1 = vec3(1.0, 0.3, 0.5); // Pinkish
                vec3 color2 = vec3(0.3, 0.6, 1.0); // Blueish
                vec3 color3 = vec3(1.0, 0.0, 0.8); // Magenta
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `;
        const bluePinkHeartMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 }, // Time uniform to animate the shader
                opacity: { value: 1 } // Opacity uniform (set to 0.6 for 60% transparency)
            },
            vertexShader,
            fragmentShader: fragmentShader,
            transparent: false, // Enable transparency in the material
            depthWrite: true // Disable depth writing to ensure proper rendering
        });
        // Create a half-sphere geometry
        const bodyGeometry = new THREE.SphereGeometry(1, // Radius
        32, // Width segments
        32, // Height segments
        0, // phiStart
        Math.PI // phiLength (half of the sphere)
        );
        const rightBody = new THREE.Mesh(bodyGeometry, transparentSliverMaterial);
        const leftBody = new THREE.Mesh(bodyGeometry, sliverMaterial);
        rightBody.scale.set(0.85, 0.85, 0.8);
        leftBody.scale.set(0.85, 0.85, 0.8);
        rightBody.position.y = -0.2;
        leftBody.position.y = -0.2;
        rightBody.rotation.y = Math.PI / 2;
        leftBody.rotation.y = Math.PI * 1.5;
        // Create a circular geometry to fill the flat side
        const circleGeometry = new THREE.CircleGeometry(1, 32); // Radius should match the half-sphere
        const circle = new THREE.Mesh(circleGeometry, transparentCircleMaterial);
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
        const headGeometry = new THREE.SphereGeometry(0.6, // Radius
        32, // Width segments
        32, // Height segments
        0, // phiStart
        Math.PI // phiLength (half of the sphere)
        );
        // Create the left half of the head
        const leftHead = new THREE.Mesh(headGeometry, sliverMaterial);
        leftHead.scale.set(1, 0.95, 0.95);
        leftHead.position.set(0, 1, 0);
        leftHead.rotation.y = Math.PI * 1.5; // Rotate the left head to match orientation
        // Create the right half of the head
        const rightHead = new THREE.Mesh(headGeometry, transparentSliverMaterial);
        rightHead.scale.set(1, 0.95, 0.95);
        rightHead.position.set(0, 1, 0);
        rightHead.rotation.y = Math.PI / 2; // Rotate the right head to match orientation
        // Create a circular geometry to fill the flat side
        const headCircleGeometry = new THREE.CircleGeometry(0.6, 32); // Radius matches the half-sphere
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
        const leftEar = new THREE.Mesh(earGeometry, sliverMaterial);
        leftEar.position.set(-0.45, 1.35, -0.1);
        bearGroup.add(leftEar);
        const rightEar = new THREE.Mesh(earGeometry, transparentSliverMaterial);
        rightEar.position.set(0.45, 1.35, -0.1);
        bearGroup.add(rightEar);
        // Geometry for the left half of the snout
        const leftSnoutGeometry = new THREE.SphereGeometry(0.25, // Radius
        32, // Width segments
        32, // Height segments
        Math.PI / 2, // phiStart: Start at 90 degrees to create a half-sphere
        Math.PI // phiLength: Cover 180 degrees to create the half shape
        );
        const leftSnout = new THREE.Mesh(leftSnoutGeometry, sliverMaterial);
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
        const rightSnout = new THREE.Mesh(rightSnoutGeometry, transparentSliverMaterial);
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
        // Heart shape
        const heartShape = new THREE.Shape();
        heartShape.moveTo(0, 0);
        heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
        heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
        heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
        heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);
        const extrudeHeartSettings = { depth: 0.4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
        const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeHeartSettings);
        const heart = new THREE.Mesh(heartGeometry, transparentBlurrMaterial);
        heart.scale.set(0.38, 0.38, 0.38);
        heart.position.set(0.35, 0, 0);
        heart.rotation.y = Math.PI;
        heart.rotation.x = Math.PI;
        bearGroup.add(heart);
        const heart1 = new THREE.Mesh(heartGeometry, sliverMaterial);
        heart1.scale.set(0.35, 0.35, 0.35);
        heart1.position.set(0.3, 0, 0);
        heart1.rotation.y = Math.PI;
        heart1.rotation.x = Math.PI;
        bearGroup.add(heart1);
        const heart2 = new THREE.Mesh(heartGeometry, sliverMaterial);
        heart2.scale.set(0.22, 0.22, 0.22);
        heart2.position.set(0.27, 0.4, 0);
        heart2.rotation.y = Math.PI;
        heart2.rotation.x = Math.PI;
        bearGroup.add(heart2);
        const heart3 = new THREE.Mesh(heartGeometry, sliverMaterial);
        heart3.scale.set(0.25, 0.25, 0.25);
        heart3.position.set(0.23, -0.5, 0.3);
        heart3.rotation.y = Math.PI;
        heart3.rotation.x = Math.PI;
        bearGroup.add(heart3);
        const heart4 = new THREE.Mesh(heartGeometry, sliverMaterial);
        heart4.scale.set(0.3, 0.3, 0.3);
        heart4.position.set(0.23, 0.2, -0.4);
        heart4.rotation.y = Math.PI;
        heart4.rotation.x = Math.PI;
        bearGroup.add(heart4);
        // Bear arms
        const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
        const leftArm = new THREE.Mesh(armGeometry, sliverMaterial);
        leftArm.scale.set(0.75, 1.25, 0.65);
        leftArm.position.set(-0.7, -0.15, 0.2);
        bearGroup.add(leftArm);
        const rightArm = new THREE.Mesh(armGeometry, transparentSliverMaterial);
        rightArm.scale.set(0.75, 1.25, 0.65);
        rightArm.position.set(0.7, -0.15, 0.2);
        bearGroup.add(rightArm);
        // Bear legs
        const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32);
        const leftLeg = new THREE.Mesh(legGeometry, sliverMaterial);
        leftLeg.position.set(-0.4, -1.05, 0);
        bearGroup.add(leftLeg);
        const rightLeg = new THREE.Mesh(legGeometry, transparentSliverMaterial);
        rightLeg.position.set(0.4, -1.05, 0);
        bearGroup.add(rightLeg);
        // Define the boot front geometry
        const bootFrontGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Front half-round for the boot
        // Left boot front
        const leftBootFront = new THREE.Mesh(bootFrontGeometry, sliverMaterial);
        leftBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        leftBootFront.position.set(-0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(leftBootFront);
        // Right boot front
        const rightBootFront = new THREE.Mesh(bootFrontGeometry, transparentSliverMaterial);
        rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(rightBootFront);
        // Create rounded buttocks
        const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
        const leftButtock = new THREE.Mesh(buttockGeometry, sliverMaterial);
        leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
        bearGroup.add(leftButtock);
        const rightButtock = new THREE.Mesh(buttockGeometry, transparentSliverMaterial);
        rightButtock.position.set(0.15, -.45, -0.4); // Position the right buttock behind the body
        bearGroup.add(rightButtock);
        // Bear tail
        const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32);
        const tail = new THREE.Mesh(tailGeometry, sliverMaterial);
        tail.position.set(0, -0.35, -0.8);
        bearGroup.add(tail);
        // Load font and create 3D text
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
            const xEyeGeometry = new TextGeometry('X', {
                font: font,
                size: 0.18, // Size of the X
                depth: 0.05,
            });
            const xEye = new THREE.Mesh(xEyeGeometry, sliverMaterial);
            xEye.position.set(-0.3, .99, 0.53); // Position on the head
            xEye.rotation.x = THREE.MathUtils.degToRad(-5);
            xEye.rotation.y = THREE.MathUtils.degToRad(-15);
            bearGroup.add(xEye);
            // Create the O eye
            const oEyeGeometry = new TextGeometry('+', {
                font: font,
                size: 0.25, // Size of the O
                depth: 0.1, // Thickness of the O
            });
            const oEye = new THREE.Mesh(oEyeGeometry, sliverMaterial);
            oEye.position.set(0.14, .99, 0.53); // Position on the head
            oEye.rotation.y = THREE.MathUtils.degToRad(12);
            oEye.rotation.x = THREE.MathUtils.degToRad(-5);
            bearGroup.add(oEye);
        });
        tail.renderOrder = 1;
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
        // let isRotatingRight = ref(false); // Is rotating to right
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
            bluePinkHeartMaterial.uniforms.time.value += 0.05;
            pinkSliverHeartMaterial.uniforms.time.value += 0.05;
            if (isRotatingRight.value)
                bearGroup.rotation.y += 0.05;
            if (isRotatingLeft.value)
                bearGroup.rotation.y -= 0.07;
            if (isRotatingUp.value)
                bearGroup.rotation.x -= 0.05;
            if (isRotatingDown.value)
                bearGroup.rotation.x += 0.05;
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
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['pixel-btn'];
    __VLS_styleScopedClasses['bear-background'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("threeCanvas"), ...{ class: ((__VLS_ctx.background ? 'no-bg' : 'three-canvas')) }, });
    // @ts-ignore navigation for `const threeCanvas = ref()`
    __VLS_ctx.threeCanvas;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [BearFace,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BearFace, new BearFace({ ...{ class: ("bear-background") }, color: (('lightgreen')), }));
    const __VLS_1 = __VLS_0({ ...{ class: ("bear-background") }, color: (('lightgreen')), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pixel-controls") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onUpButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn up border-gold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side-buttons") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onLeftButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn left border-silver") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onRightButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn right border-silver") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMousedown: (__VLS_ctx.onDownButtonDown) }, ...{ onMouseup: (__VLS_ctx.stopRotation) }, ...{ class: ("pixel-btn down border-gold") }, });
    __VLS_styleScopedClasses['bear-background'];
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
            BearFace: BearFace,
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