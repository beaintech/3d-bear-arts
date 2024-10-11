import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const canvasRef = ref(null);
let scene, camera, renderer;
let cube;
// Create a basic cube material
function createCubeMaterial() {
    return new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
}
// Create a cube mesh
function createCube() {
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = createCubeMaterial();
    return new THREE.Mesh(geometry, material);
}
// Set up the scene
function setupScene(canvas) {
    // Create the scene
    scene = new THREE.Scene();
    // Create the camera
    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 10;
    // Create the renderer
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // Add the cube to the scene
    cube = createCube();
    scene.add(cube);
    // Render the scene once
    renderer.render(scene, camera);
}
// Resize the renderer when the window size changes
function onResize() {
    if (!canvasRef.value || !renderer || !camera)
        return;
    const { clientWidth, clientHeight } = canvasRef.value;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
    renderer.render(scene, camera);
}
onMounted(() => {
    if (!canvasRef.value)
        return;
    setupScene(canvasRef.value);
    window.addEventListener('resize', onResize);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
    renderer.dispose();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("cubeWrapper"), ...{ class: ("cube-wrapper") }, });
    // @ts-ignore navigation for `const cubeWrapper = ref()`
    __VLS_ctx.cubeWrapper;
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ref: ("canvasRef"), ...{ class: ("renderCanvas") }, });
    // @ts-ignore navigation for `const canvasRef = ref()`
    __VLS_ctx.canvasRef;
    __VLS_styleScopedClasses['cube-wrapper'];
    __VLS_styleScopedClasses['renderCanvas'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "cubeWrapper": __VLS_nativeElements['div'],
        "canvasRef": __VLS_nativeElements['canvas'],
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
            canvasRef: canvasRef,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
