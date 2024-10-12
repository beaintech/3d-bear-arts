import { ref, onMounted, watch } from 'vue';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    background: {
        type: Boolean,
        default: false
    },
    cameraPosition: {
        type: Number,
        default: 4
    },
    bodyPosition: {
        type: Object,
        default: () => ({ x: 0, y: 0, z: 0 })
    }
});
const threeCanvas = ref(null);
onMounted(() => {
    if (threeCanvas.value) {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        // Add a gradient background to simulate the sky
        const skyGradient = new THREE.PlaneGeometry(500, 500);
        const skyMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color1: { value: new THREE.Color(0x87CEEB) }, // Light sky blue
                color2: { value: new THREE.Color(0xFFFFFF) } // White for horizon
            },
            vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
            fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    void main() {
      vec3 color = mix(color1, color2, vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
            side: THREE.BackSide
        });
        const sky = new THREE.Mesh(skyGradient, skyMaterial);
        sky.position.z = -50;
        sky.rotation.x = Math.PI / 2;
        scene.add(sky);
        // Add ground (grass)
        const groundGeometry = new THREE.PlaneGeometry(500, 500);
        const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 }); // Grass green
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        scene.add(ground);
        // Add a few campus-like buildings (Box Geometry)
        const buildingGeometry = new THREE.BoxGeometry(10, 20, 10);
        const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brownish building color
        for (let i = -20; i <= 20; i += 20) {
            const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
            building.position.set(i, 10, -30); // Elevate the building
            scene.add(building);
        }
        // Add trees using a cone for the foliage and cylinder for the trunk
        const treeTrunkGeometry = new THREE.CylinderGeometry(1, 1, 5);
        const treeTrunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
        const treeTopGeometry = new THREE.ConeGeometry(3, 6);
        const treeTopMaterial = new THREE.MeshBasicMaterial({ color: 0x006400 }); // Dark green
        for (let i = -40; i <= 40; i += 20) {
            // Tree trunk
            const trunk = new THREE.Mesh(treeTrunkGeometry, treeTrunkMaterial);
            trunk.position.set(i, 2.5, -20);
            scene.add(trunk);
            // Tree top
            const top = new THREE.Mesh(treeTopGeometry, treeTopMaterial);
            top.position.set(i, 8, -20);
            scene.add(top);
        }
        // Add lighting (increase intensities and add a point light)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Increased intensity
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2); // Increased intensity
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);
        // Point light to focus more light on the bear
        const pointLight = new THREE.PointLight(0xffffff, 2, 50); // Strong point light
        pointLight.position.set(0, 2, 4); // Position near the front of the bear
        scene.add(pointLight);
        // Shader material with gradient animation for the bear's body
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
        const cyanMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00CED1, // Cyan
            metalness: 0.2,
            roughness: 0.5,
            clearcoat: 0.1,
            clearcoatRoughness: 0.8,
            transparent: true,
            opacity: 0.99,
        });
        const transparentMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00CED1, // Cyan
            metalness: 0.2,
            roughness: 0.5,
            clearcoat: 0.1,
            clearcoatRoughness: 0.8,
            transparent: true,
            opacity: 0.39,
        });
        const pinkMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xFF69B4, // Pink
            metalness: 0.2,
            roughness: 0.5,
            clearcoat: 0.1,
            clearcoatRoughness: 0.8,
            transparent: true,
            opacity: 0.99,
        });
        // Gummy pink material for the bear (reduce roughness to make it shinier)
        const gummyMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00CED1, // Blue pink
            metalness: 0.2, // Increased metalness for more light reflection
            roughness: 0.5, // Reduced roughness for a shinier appearance
            clearcoat: 0.1, // Higher clearcoat for more shine
            clearcoatRoughness: 0.8, // Reduced clearcoat roughness for shinier coat
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
        // Vertex shader
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
        const bodyMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 }, // Time uniform to animate the shader
                opacity: { value: 1 } // Opacity uniform (set to 0.6 for 60% transparency)
            },
            vertexShader,
            fragmentShader: fragmentShader,
            transparent: true, // Enable transparency in the material
            depthWrite: false // Disable depth writing to ensure proper rendering
        });
        const transparentBodyMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 }, // Time uniform to animate the shader
                opacity: { value: .4 } // Opacity uniform (set to 0.6 for 60% transparency)
            },
            vertexShader,
            fragmentShader: fragmentShader,
            transparent: true, // Enable transparency in the material
            depthWrite: false // Disable depth writing to ensure proper rendering
        });
        // Create the bear group and all parts
        const bearGroup = new THREE.Group();
        // Bear body
        // const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
        // Create a half-sphere geometry
        const bodyGeometry = new THREE.SphereGeometry(1, // Radius
        32, // Width segments
        32, // Height segments
        0, // phiStart
        Math.PI // phiLength (half of the sphere)
        );
        const rightBody = new THREE.Mesh(bodyGeometry, transparentMaterial);
        const leftBody = new THREE.Mesh(bodyGeometry, cyanMaterial);
        rightBody.scale.set(0.85, 0.85, 0.8);
        leftBody.scale.set(0.85, 0.85, 0.8);
        rightBody.position.y = -0.2;
        leftBody.position.y = -0.2;
        rightBody.rotation.y = Math.PI / 2;
        leftBody.rotation.y = Math.PI * 1.5;
        // Create a circular geometry to fill the flat side
        const circleGeometry = new THREE.CircleGeometry(1, 32); // Radius should match the half-sphere
        const circle = new THREE.Mesh(circleGeometry, cyanMaterial);
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
        const leftHead = new THREE.Mesh(headGeometry, cyanMaterial);
        leftHead.scale.set(1, 0.95, 0.95);
        leftHead.position.set(0, 1, 0);
        leftHead.rotation.y = Math.PI * 1.5; // Rotate the left head to match orientation
        // Create the right half of the head
        const rightHead = new THREE.Mesh(headGeometry, transparentMaterial);
        rightHead.scale.set(1, 0.95, 0.95);
        rightHead.position.set(0, 1, 0);
        rightHead.rotation.y = Math.PI / 2; // Rotate the right head to match orientation
        // Create a circular geometry to fill the flat side
        const headCircleGeometry = new THREE.CircleGeometry(0.6, 32); // Radius matches the half-sphere
        const headCircle = new THREE.Mesh(headCircleGeometry, cyanMaterial);
        // Position the circle to cover the flat side
        headCircle.position.set(0, 0.97, 0); // Set to the same height as the heads
        headCircle.rotation.y = Math.PI / 2; // Rotate the circle to match the half-sphere's orientation
        // Create a group to combine the two half-spheres and the circle
        const halfHeadSphereGroup = new THREE.Group();
        halfHeadSphereGroup.add(leftHead);
        halfHeadSphereGroup.add(rightHead);
        halfHeadSphereGroup.add(headCircle);
        // Add the combined head group to the bear group
        bearGroup.add(halfHeadSphereGroup);
        // Bear ears
        const earGeometry = new THREE.SphereGeometry(0.25, 32, 32);
        const leftEar = new THREE.Mesh(earGeometry, cyanMaterial);
        leftEar.position.set(-0.45, 1.35, -0.1);
        bearGroup.add(leftEar);
        const rightEar = new THREE.Mesh(earGeometry, transparentMaterial);
        rightEar.position.set(0.45, 1.35, -0.1);
        bearGroup.add(rightEar);
        // Geometry for the left half of the snout
        const leftSnoutGeometry = new THREE.SphereGeometry(0.25, // Radius
        32, // Width segments
        32, // Height segments
        Math.PI / 2, // phiStart: Start at 90 degrees to create a half-sphere
        Math.PI // phiLength: Cover 180 degrees to create the half shape
        );
        const leftSnout = new THREE.Mesh(leftSnoutGeometry, cyanMaterial);
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
        const rightSnout = new THREE.Mesh(rightSnoutGeometry, transparentMaterial);
        rightSnout.scale.set(1.1, 0.6, 0.8); // Make it wider at the front
        rightSnout.position.set(0, 0.84, 0.5); // Position the right half
        rightSnout.rotation.y = 0; // Align correctly without additional rotation
        // Circle to cover the flat sides
        const snoutCircleGeometry = new THREE.CircleGeometry(0.25, 32);
        const snoutCircle = new THREE.Mesh(snoutCircleGeometry, cyanMaterial);
        snoutCircle.scale.set(1.25, 0.6, 0.8);
        snoutCircle.position.set(0, 0.85, 0.5); // Position at the front of the snout
        snoutCircle.rotation.x = Math.PI / 2; // Rotate the circle to face forward
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
        const extrudeSettings = { depth: 0.4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
        const extrudeHeartSettings = { depth: 0.4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
        const largeHeartMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff, // Use white color to simulate a diamond
            metalness: 0.0, // High metalness for a reflective surface
            roughness: 0.1, // Low roughness for a glossy appearance
            clearcoat: 1.0, // High clearcoat for added shine
            clearcoatRoughness: 0.1, // Smooth clearcoat
            transparent: true, // Enable transparency
            opacity: 0.85, // High opacity for translucence
            reflectivity: 1, // Increase reflectivity for better light interaction
            envMapIntensity: 1, // Make environment reflections more prominent
        });
        const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeHeartSettings);
        const heart = new THREE.Mesh(heartGeometry, heartMaterial);
        heart.scale.set(0.25, 0.25, 0.25);
        heart.position.set(.5, 0, 0); // Position it in front of the body
        heart.rotation.y = Math.PI;
        heart.rotation.x = Math.PI;
        bearGroup.add(heart);
        const heart2 = new THREE.Mesh(heartGeometry, heartMaterial);
        heart2.scale.set(0.25, 0.25, 0.25);
        heart2.position.set(0, 0, 0); // Position it in front of the body
        heart2.rotation.y = Math.PI;
        heart2.rotation.x = Math.PI;
        // Bear arms
        const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
        const leftArm = new THREE.Mesh(armGeometry, cyanMaterial);
        leftArm.scale.set(0.75, 1.25, 0.65);
        leftArm.position.set(-0.7, -0.15, 0.2);
        bearGroup.add(leftArm);
        const rightArm = new THREE.Mesh(armGeometry, transparentMaterial);
        rightArm.scale.set(0.75, 1.25, 0.65);
        rightArm.position.set(0.7, -0.15, 0.2);
        bearGroup.add(rightArm);
        // Bear legs
        const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32);
        const leftLeg = new THREE.Mesh(legGeometry, cyanMaterial);
        leftLeg.position.set(-0.4, -1.05, 0);
        bearGroup.add(leftLeg);
        const rightLeg = new THREE.Mesh(legGeometry, transparentMaterial);
        rightLeg.position.set(0.4, -1.05, 0);
        bearGroup.add(rightLeg);
        // Define the boot front geometry
        const bootFrontGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Front half-round for the boot
        // Left boot front
        const leftBootFront = new THREE.Mesh(bootFrontGeometry, cyanMaterial);
        leftBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        leftBootFront.position.set(-0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(leftBootFront);
        // Right boot front
        const rightBootFront = new THREE.Mesh(bootFrontGeometry, transparentMaterial);
        rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
        rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
        bearGroup.add(rightBootFront);
        // Create rounded buttocks
        const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
        const leftButtock = new THREE.Mesh(buttockGeometry, cyanMaterial);
        leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
        bearGroup.add(leftButtock);
        const rightButtock = new THREE.Mesh(buttockGeometry, transparentMaterial);
        rightButtock.position.set(0.15, -.45, -0.4); // Position the right buttock behind the body
        bearGroup.add(rightButtock);
        // Bear tail
        const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32);
        const tail = new THREE.Mesh(tailGeometry, heartMaterial);
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
            const xEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
            const xEye = new THREE.Mesh(xEyeGeometry, xEyeMaterial);
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
            const oEyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color
            const oEye = new THREE.Mesh(oEyeGeometry, oEyeMaterial);
            oEye.position.set(0.14, .99, 0.53); // Position on the head
            oEye.rotation.y = THREE.MathUtils.degToRad(12);
            oEye.rotation.x = THREE.MathUtils.degToRad(-5);
            bearGroup.add(oEye);
        });
        // Add bear group to the scene
        scene.add(bearGroup);
        // Animation function
        function animate() {
            requestAnimationFrame(animate);
            bearGroup.rotation.y += 0.03; // Rotation speed fixed to match original
            bigHeartMaterial.uniforms.time.value += 0.04; // Same animation speed
            renderer.render(scene, camera);
        }
        // Start animation
        animate();
        // Set initial positions for bearGroup and camera
        bearGroup.position.set(props.bodyPosition.x, props.bodyPosition.y, props.bodyPosition.z);
        camera.position.set(props.bodyPosition.x, 1, props.cameraPosition);
        camera.lookAt(props.bodyPosition.x, 0, 0);
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
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        background: {
            type: Boolean,
            default: false
        },
        cameraPosition: {
            type: Number,
            default: 4
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("threeCanvas"), ...{ class: ((__VLS_ctx.background ? 'no-bg' : 'three-canvas')) }, });
    // @ts-ignore navigation for `const threeCanvas = ref()`
    __VLS_ctx.threeCanvas;
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
        };
    },
    props: {
        background: {
            type: Boolean,
            default: false
        },
        cameraPosition: {
            type: Number,
            default: 4
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
            default: 4
        },
        bodyPosition: {
            type: Object,
            default: () => ({ x: 0, y: 0, z: 0 })
        }
    },
});
;
