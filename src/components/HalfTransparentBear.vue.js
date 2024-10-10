import { ref, onMounted } from 'vue';
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
        // Initialize the Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        threeCanvas.value.appendChild(renderer.domElement);
        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);
        // Point light to focus more light on the bear
        const pointLight = new THREE.PointLight(0xffffff, 2, 50); // Strong point light
        pointLight.position.set(0, 2, 4); // Position near the front of the bear
        scene.add(pointLight);
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
              vec3 color1 = vec3(0.0, 1.0, 0.0); // Green
              vec3 color2 = vec3(0.0, 0.0, 1.0); // Blue
              vec3 color3 = vec3(1.0, 1.0, 0.0); // Yellow
        
                // Mix the colors based on wave and angle for a dynamic effect
                vec3 color = mix(color1, color2, wave);
                color = mix(color, color3, sin(angle + time) * 0.5 + 0.5);
        
                // Set the fragment color with opacity
                gl_FragColor = vec4(color, opacity); // Use the opacity uniform for transparency
            }
      `;
        // Create materials for both bears
        const cyanMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00CED1, // Cyan
            metalness: 0.2,
            roughness: 0.5,
            clearcoat: 0.1,
            clearcoatRoughness: 0.8,
            transparent: true,
            opacity: 0.59,
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
        // Function to create a bear
        const createBear = (material) => {
            const bearGroup = new THREE.Group();
            // Body
            // const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
            // Create a half-sphere geometry
            const bodyGeometry = new THREE.SphereGeometry(1, // Radius
            32, // Width segments
            32, // Height segments
            0, // phiStart
            Math.PI // phiLength (half of the sphere)
            );
            const body = new THREE.Mesh(bodyGeometry, material);
            const bodyLeft = new THREE.Mesh(bodyGeometry, material);
            body.scale.set(0.85, 0.85, 0.8);
            bodyLeft.scale.set(0.85, 0.85, 0.8);
            body.position.y = -0.2;
            bodyLeft.position.y = -0.2;
            body.rotation.y = Math.PI / 2;
            bodyLeft.rotation.y = Math.PI * 1.5;
            // Create a plane geometry to fill the flat side
            const planeGeometry = new THREE.PlaneGeometry(2, 2, 32, 32); // Size matching the diameter of the half-sphere
            const plane = new THREE.Mesh(planeGeometry, material);
            // Position the plane to cover the flat side
            plane.position.set(0, 0, -0.2); // Adjust position based on the sphere's orientation
            plane.rotation.y = Math.PI / 2; // Rotate the plane to match the half-sphere's orientation
            // Create a group to combine the half-sphere and the plane
            const halfSphereGroup = new THREE.Group();
            halfSphereGroup.add(body);
            halfSphereGroup.add(bodyLeft);
            // Add the combined geometry to the scene or parent group
            bearGroup.add(halfSphereGroup);
            // Head
            const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
            const head = new THREE.Mesh(headGeometry, material);
            head.scale.set(1, 0.95, 0.95);
            head.position.set(0, 1, 0);
            bearGroup.add(head);
            // Bear snout
            const snoutGeometry = new THREE.SphereGeometry(0.25, 32, 32);
            const snout = new THREE.Mesh(snoutGeometry, material);
            snout.scale.set(1, 0.6, 0.8);
            snout.position.set(0, 0.85, 0.5);
            bearGroup.add(snout);
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
            // Ears
            const earGeometry = new THREE.SphereGeometry(0.25, 32, 32);
            const leftEar = new THREE.Mesh(earGeometry, cyanMaterial);
            leftEar.position.set(-0.45, 1.35, -0.1);
            bearGroup.add(leftEar);
            const rightEar = new THREE.Mesh(earGeometry, pinkMaterial);
            rightEar.position.set(0.45, 1.35, -0.1);
            bearGroup.add(rightEar);
            // Bear arms
            const armGeometry = new THREE.SphereGeometry(0.35, 32, 32);
            const leftArm = new THREE.Mesh(armGeometry, cyanMaterial);
            leftArm.scale.set(0.75, 1.25, 0.65);
            leftArm.position.set(-0.7, -0.15, 0.2);
            bearGroup.add(leftArm);
            const rightArm = new THREE.Mesh(armGeometry, pinkMaterial);
            rightArm.scale.set(0.75, 1.25, 0.65);
            rightArm.position.set(0.7, -0.15, 0.2);
            bearGroup.add(rightArm);
            // Bear legs
            const legGeometry = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 32);
            const leftLeg = new THREE.Mesh(legGeometry, cyanMaterial);
            leftLeg.position.set(-0.4, -1.05, 0);
            bearGroup.add(leftLeg);
            const rightLeg = new THREE.Mesh(legGeometry, pinkMaterial);
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
            const rightBootFront = new THREE.Mesh(bootFrontGeometry, pinkMaterial);
            rightBootFront.scale.set(1, 0.72, 1.5); // Reduced size, flattened and extended front
            rightBootFront.position.set(0.4, -1.45, 0.17); // Position in front of the base
            bearGroup.add(rightBootFront);
            // Create rounded buttocks
            const buttockGeometry = new THREE.SphereGeometry(0.44, 32, 32); // Geometry for the buttocks
            const leftButtock = new THREE.Mesh(buttockGeometry, cyanMaterial);
            leftButtock.position.set(-0.15, -.45, -0.4); // Position the left buttock behind the body
            bearGroup.add(leftButtock);
            const rightButtock = new THREE.Mesh(buttockGeometry, pinkMaterial);
            rightButtock.position.set(0.15, -.45, -0.4); // Position material right buttock behind the body
            bearGroup.add(rightButtock);
            // Bear tail
            const tailGeometry = new THREE.SphereGeometry(0.18, 32, 32);
            const tail = new THREE.Mesh(tailGeometry, material);
            tail.position.set(0, -0.35, -0.8);
            bearGroup.add(tail);
            return bearGroup;
        };
        // Create the main bear group that will contain both bears
        const bearGroup = new THREE.Group();
        // Create two bears, one cyan and one pink
        const leftBear = createBear(cyanMaterial);
        const rightBear = createBear(pinkMaterial);
        // Slightly offset each bear by a very small amount to overlap perfectly
        leftBear.position.x = -0.01; // Slight shift to the left
        rightBear.position.x = 0.01; // Slight shift to the right
        // Add both bears to the main group
        bearGroup.add(leftBear);
        bearGroup.add(rightBear);
        // Add the main bear group to the scene
        scene.add(bearGroup);
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            bearGroup.rotation.y += 0.02; // Rotate the entire bear group
            renderer.render(scene, camera);
        }
        camera.position.z = 4;
        animate();
        bearGroup.position.set(props.bodyPosition.x, props.bodyPosition.y, props.bodyPosition.z);
        camera.position.set(props.bodyPosition.x, 1, props.cameraPosition);
        camera.lookAt(props.bodyPosition.x, 0, 0);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("threeCanvas"), ...{ class: ("three-canvas") }, });
    // @ts-ignore navigation for `const threeCanvas = ref()`
    __VLS_ctx.threeCanvas;
    __VLS_styleScopedClasses['three-canvas'];
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
