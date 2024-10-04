import { onMounted, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Define the canvas ref with correct typing
const bearCanvas = ref(null);
onMounted(() => {
    const canvas = bearCanvas.value;
    // Ensure the canvas is available
    if (canvas) {
        const ctx = canvas.getContext('2d');
        // Ensure the context is available
        if (ctx) {
            // Function to draw the 2D bear face
            const drawBearFace = () => {
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                // Draw the bear's head
                ctx.fillStyle = '#FF69B4'; // Pink color
                ctx.beginPath();
                ctx.arc(centerX, centerY, 100, 0, Math.PI * 2, true); // Circle for the head
                ctx.fill();
                // Draw the ears
                ctx.fillStyle = '#FF69B4'; // Same pink color as the head
                // Left ear
                ctx.beginPath();
                ctx.arc(centerX - 70, centerY - 80, 30, 0, Math.PI * 2, true); // Circle for the left ear
                ctx.fill();
                // Right ear
                ctx.beginPath();
                ctx.arc(centerX + 70, centerY - 80, 30, 0, Math.PI * 2, true); // Circle for the right ear
                ctx.fill();
                // Draw the left "O" eye (circular)
                ctx.fillStyle = '#000000'; // Black color for the eye
                ctx.beginPath();
                ctx.arc(centerX - 40, centerY - 30, 15, 0, Math.PI * 2, true); // Circle for "O" eye
                ctx.fill();
                // Draw the right "X" eye
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(centerX + 25, centerY - 45); // First stroke of "X"
                ctx.lineTo(centerX + 55, centerY - 15);
                ctx.moveTo(centerX + 55, centerY - 45); // Second stroke of "X"
                ctx.lineTo(centerX + 25, centerY - 15);
                ctx.strokeStyle = '#000000'; // Black color for "X"
                ctx.stroke();
                // Draw the snout
                ctx.fillStyle = '#F0E68C'; // Light khaki color for snout
                ctx.beginPath();
                ctx.ellipse(centerX, centerY + 30, 40, 30, 0, 0, Math.PI * 2); // Ellipse for the snout
                ctx.fill();
                // Draw the snout details (nose)
                ctx.fillStyle = '#000000'; // Black for the nose
                ctx.beginPath();
                ctx.arc(centerX, centerY + 30, 10, 0, Math.PI * 2, true); // Circle for the nose
                ctx.fill();
                // Draw the snout mouth line
                ctx.beginPath();
                ctx.moveTo(centerX, centerY + 40);
                ctx.lineTo(centerX, centerY + 60);
                ctx.strokeStyle = '#000000'; // Black color for the mouth line
                ctx.stroke();
                // Draw the mouth
                ctx.beginPath();
                ctx.arc(centerX - 15, centerY + 60, 15, 0, Math.PI, false); // Left side of the mouth
                ctx.arc(centerX + 15, centerY + 60, 15, 0, Math.PI, false); // Right side of the mouth
                ctx.stroke();
            };
            // Call the draw function
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bear-face-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ref: ("bearCanvas"), width: ("400"), height: ("400"), });
    // @ts-ignore navigation for `const bearCanvas = ref()`
    __VLS_ctx.bearCanvas;
    __VLS_styleScopedClasses['bear-face-container'];
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
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
