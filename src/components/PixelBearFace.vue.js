import { ref, onMounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const bearCanvas = ref(null);
const isHidden = ref(false); // Controls the visibility of the entire component
// Function to hide the entire component
const toggleComponent = () => {
    isHidden.value = true; // Hides the component when the button is clicked
};
onMounted(() => {
    const canvas = bearCanvas.value;
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.55;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const drawBearFace = () => {
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 1.9;
                const faceRadius = canvas.height / 2.5;
                const earRadius = faceRadius * 0.45;
                const eyeRadius = faceRadius * 0.18;
                const snoutRadius = faceRadius * 0.3;
                const noseRadius = snoutRadius * 0.35;
                // Set stroke style for pixel-like drawing
                ctx.lineWidth = 15; // Default stroke width
                ctx.strokeStyle = '#000000'; // White pixelated stroke for face elements
                // Draw the ears with pixelated style (behind the face)
                ctx.beginPath();
                ctx.arc(centerX - faceRadius * 0.85, centerY - faceRadius * 0.8, earRadius, 0, Math.PI * 2, true); // Left ear
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(centerX + faceRadius * 0.85, centerY - faceRadius * 0.8, earRadius, 0, Math.PI * 2, true); // Right ear
                ctx.stroke();
                // Draw the bear's head with a thicker stroke to cover the inside of the ears
                ctx.lineWidth = 15; // Thicker stroke for the face
                ctx.beginPath();
                ctx.arc(centerX, centerY, faceRadius, 0, Math.PI * 2, true); // Circle for the head
                ctx.stroke();
                // Draw the left "O" eye with pixel style
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.arc(centerX - faceRadius * 0.4, centerY - faceRadius * 0.2, eyeRadius, 0, Math.PI * 2, true);
                ctx.stroke();
                // Draw the right "X" eye with pixel style
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.moveTo(centerX + faceRadius * 0.2, centerY - faceRadius * 0.3); // Start further left and higher
                ctx.lineTo(centerX + faceRadius * 0.5, centerY - faceRadius * 0.05); // End further right and lower
                ctx.moveTo(centerX + faceRadius * 0.5, centerY - faceRadius * 0.3); // Start further right and higher
                ctx.lineTo(centerX + faceRadius * 0.2, centerY - faceRadius * 0.05); // End further left and lower
                ctx.strokeStyle = '#000000'; // White color for "X"
                ctx.stroke();
                // Draw the snout in pixelated style
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.ellipse(centerX, centerY + faceRadius * 0.4, snoutRadius * 1.5, snoutRadius, 0, 0, Math.PI * 2);
                ctx.stroke();
                // Draw the snout details (nose) with pixel style
                ctx.beginPath();
                ctx.arc(centerX, centerY + faceRadius * 0.3, noseRadius * 1.2, 0, Math.PI * 2, true);
                ctx.stroke();
            };
            drawBearFace();
        }
    }
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
    __VLS_styleScopedClasses['pixel-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (!__VLS_ctx.isHidden) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bear-face-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ref: ("bearCanvas"), });
        // @ts-ignore navigation for `const bearCanvas = ref()`
        __VLS_ctx.bearCanvas;
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleComponent) }, ...{ class: ("pixel-button") }, });
    }
    __VLS_styleScopedClasses['bear-face-container'];
    __VLS_styleScopedClasses['pixel-button'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "bearCanvas": __VLS_nativeElements['canvas'],
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
            bearCanvas: bearCanvas,
            isHidden: isHidden,
            toggleComponent: toggleComponent,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;